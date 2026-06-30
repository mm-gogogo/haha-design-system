#!/usr/bin/env node
// ds —— 哈哈设计系统 项目 CLI（零依赖）
// 把每轮手动跑的 完整性校验 / 单页 QC / 计数同步 / 分类 / 截图 收进一个工具。
// 用法：node _base/ds.mjs <命令> [参数]
//   check            校验画廊完整性（数组↔目录、孤儿、重复 slug、计数、分类覆盖）
//   qc <slug|all>    单页静态 QC（外链 / 返回 / credit / emoji 字形）
//   cats             按类别列出临摹，标出未归类
//   count [--fix]    报告计数；--fix 把 meta/区块/页脚/分类 计数同步到真实数量
//   shoot <slug>     截图一个临摹（封装 shoot_study.mjs）
//   dup              按 cite 来源找重复临摹（同源不同 slug）
//   help             显示帮助
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IDX = path.join(ROOT, 'index.html');
const C = { dim:'\x1b[2m', red:'\x1b[31m', grn:'\x1b[32m', yel:'\x1b[33m', cyan:'\x1b[36m', bold:'\x1b[1m', r:'\x1b[0m' };
const ok = s => console.log(`${C.grn}✓${C.r} ${s}`);          // 终端输出可用字形；约束只针对 study 页面产物
const bad = s => console.log(`${C.red}✗${C.r} ${s}`);
const info = s => console.log(`${C.dim}·${C.r} ${s}`);

// emoji / 装饰性字形（与 study 页面的 0-emoji 约定一致；允许科学单位 °±µ 与印刷引号/破折号）
const GLYPH = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{2713}\u{2714}\u{2705}\u{2728}\u{2605}\u{2606}\u{25CF}\u{25B6}\u{23F8}\u{266A}\u{266B}\u{2756}\u{1F512}️\u{20E3}]/u;

function readIdx() {
  try { return fs.readFileSync(IDX, 'utf8'); }
  catch { console.error(`${C.red}找不到 index.html${C.r}（应在 ${IDX}）`); process.exit(2); }
}
// 解析卡片数组：风格/项目是 4 段 [f,slug,name,#color]；临摹是 5 段 [f,slug,name,cite,#color]
function parseArr(html, declName) {
  const m = html.match(new RegExp(`const ${declName} = \\[([\\s\\S]*?)\\n\\];`));
  if (!m) return [];
  return [...m[1].matchAll(/\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*"([^"]*)"\s*(?:,\s*"([^"]*)"\s*)?(?:,\s*"([^"]*)"\s*)?\]/g)]
    .map(x => {
      const fields = [x[1], x[2], x[3], x[4], x[5]].filter(v => v !== undefined);
      return { f:x[1], slug:x[2], name:x[3],
        cite: fields.length >= 5 ? x[4] : '',
        color: fields[fields.length - 1] };
    });
}
function parseCatMap(html) {
  const m = html.match(/const STUDY_CAT = \{([\s\S]*?)\};/);
  const map = {};
  if (m) for (const x of m[1].matchAll(/"([a-z0-9-]+)"\s*:\s*"([a-z0-9]+)"/g)) map[x[1]] = x[2];
  return map;
}
const studyFolders = () =>
  fs.readdirSync(path.join(ROOT, 'studies'), { withFileTypes:true })
    .filter(d => d.isDirectory() && fs.existsSync(path.join(ROOT, 'studies', d.name, 'index.html')))
    .map(d => d.name).sort();

function cmdCheck() {
  const html = readIdx();
  const studies = parseArr(html, 'studies');
  const cat = parseCatMap(html);
  const folders = studyFolders();
  const slugs = studies.map(s => s.slug);
  let fail = 0;

  // 1) 数组 ↔ 目录
  const inArr = new Set(slugs);
  const inFs = new Set(folders);
  const orphans = folders.filter(s => !inArr.has(s));       // 有目录、不在数组
  const missing = slugs.filter(s => !inFs.has(s));          // 在数组、无目录
  if (orphans.length) { bad(`孤儿目录（已建未入数组）：${orphans.join(', ')}`); fail++; } else ok('无孤儿目录');
  if (missing.length) { bad(`数组条目缺目录：${missing.join(', ')}`); fail++; } else ok('数组条目都有目录');

  // 2) 重复 slug
  const dup = slugs.filter((s,i) => slugs.indexOf(s) !== i);
  if (dup.length) { bad(`重复 slug：${[...new Set(dup)].join(', ')}`); fail++; } else ok('无重复 slug');

  // 3) 计数同步：meta / cntStudies / statStudies / ftStudies 都应 == studies.length
  const n = studies.length;
  const grab = re => (html.match(re) || [])[1];
  const counts = {
    'meta 描述': grab(/([0-9]+) 例效果临摹/),
    'cntStudies': grab(/id="cntStudies">([0-9]+)/),
    'statStudies': grab(/id="statStudies">([0-9]+)/),
    'ftStudies': grab(/id="ftStudies">([0-9]+)/),
  };
  let countBad = 0;
  for (const [k,v] of Object.entries(counts)) if (String(v) !== String(n)) { bad(`计数 ${k}=${v} ≠ 实际 ${n}`); countBad++; }
  if (countBad) fail++; else ok(`计数一致（${n} 例）`);

  // 4) 分类覆盖
  const uncat = slugs.filter(s => !cat[s]);
  if (uncat.length) { bad(`未归类（将默认 tool）：${uncat.join(', ')}`); fail++; } else ok(`分类全覆盖（${n} 例）`);

  console.log('');
  info(`风格 ${parseArr(html,'styles').length} · 项目 ${parseArr(html,'projects').length} · 临摹 ${n}`);
  if (fail) { bad(`${C.bold}check 失败：${fail} 项${C.r}`); process.exit(1); }
  ok(`${C.bold}check 通过${C.r}`);
}

function qcOne(slug) {
  const fp = path.join(ROOT, 'studies', slug, 'index.html');
  if (!fs.existsSync(fp)) { bad(`${slug}: 无 index.html`); return false; }
  const h = fs.readFileSync(fp, 'utf8');
  const ext = [...h.matchAll(/(?:src|href)\s*=\s*"(https?:)|@import|cdn\./g)]
    .filter(m => !/_fonts/.test(m[0])).length;
  const back = /哈哈设计系统/.test(h);
  const credit = /效果临摹/.test(h);
  // 去掉内联 <svg>…</svg> 后再扫字形，避免误报 SVG 内的 path 数据
  const noSvg = h.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  const glyph = GLYPH.test(noSvg);
  const probs = [];
  if (ext) probs.push(`外链×${ext}`);
  if (!back) probs.push('缺返回');
  if (!credit) probs.push('缺 credit');
  if (glyph) probs.push('含 emoji/字形');
  const sz = (fs.statSync(fp).size/1024).toFixed(1);
  if (probs.length) bad(`${slug} (${sz}KB)：${probs.join(' / ')}`);
  else ok(`${slug} (${sz}KB)`);
  return probs.length === 0;
}
function cmdQc(arg) {
  const html = readIdx();
  const list = (!arg || arg === 'all') ? parseArr(html,'studies').map(s=>s.slug) : [arg.replace(/^study-/,'')];
  let bad_ = 0;
  for (const s of list) if (!qcOne(s)) bad_++;
  console.log('');
  if (bad_) { bad(`${C.bold}QC：${bad_}/${list.length} 有问题${C.r}`); process.exit(1); }
  ok(`${C.bold}QC 全通过（${list.length} 例）${C.r}`);
}

function cmdCats() {
  const html = readIdx();
  const studies = parseArr(html,'studies');
  const cat = parseCatMap(html);
  const defs = [...html.matchAll(/\["(all|dash|gen|land|edit|app|tool|d3|retro)","([^"]+)"\]/g)]
    .filter(m => m[1] !== 'all').map(m => [m[1], m[2]]);
  const byCat = {};
  for (const s of studies) (byCat[cat[s.slug] || '∅未归类'] ??= []).push(s.slug);
  for (const [k,label] of defs) {
    const items = byCat[k] || [];
    console.log(`${C.cyan}${C.bold}${label}${C.r} ${C.dim}(${items.length})${C.r}`);
    if (items.length) console.log('  ' + items.join(', '));
  }
  if (byCat['∅未归类']) { console.log(`${C.red}${C.bold}未归类${C.r} (${byCat['∅未归类'].length})`); console.log('  ' + byCat['∅未归类'].join(', ')); }
}

function cmdCount(fix) {
  const html = readIdx();
  const n = parseArr(html,'studies').length;
  if (!fix) { info(`实际临摹数：${n}`); return cmdCheck(); }
  let out = html
    .replace(/[0-9]+ 例效果临摹/g, `${n} 例效果临摹`)
    .replace(/(id="cntStudies">)[0-9]+/, `$1${n}`)
    .replace(/(id="statStudies">)[0-9]+/, `$1${n}`)
    .replace(/(id="ftStudies">)[0-9]+/, `$1${n}`);
  fs.writeFileSync(IDX, out);
  ok(`已把 meta / 区块 / 页脚 计数同步到 ${n}`);
}

function cmdDup() {
  const html = readIdx();
  const studies = parseArr(html,'studies');
  // 用 cite 里的《作品名》+ 作者/社区号 归并
  const key = s => (s.cite.match(/《[^》]+》/)?.[0] || s.cite).trim();
  const groups = {};
  for (const s of studies) (groups[key(s)] ??= []).push(s.slug);
  const dups = Object.entries(groups).filter(([,v]) => v.length > 1);
  if (!dups.length) return ok('未发现同源重复');
  for (const [k,v] of dups) bad(`同源重复 ${k} → ${v.join(', ')}`);
  process.exit(1);
}

function cmdShoot(slug) {
  if (!slug) { console.error('用法：ds shoot <slug>'); process.exit(2); }
  slug = slug.replace(/^study-/,'');
  const r = spawnSync('node', [path.join(ROOT,'_base','shoot_study.mjs'), `studies/${slug}`, `study-${slug}`],
    { cwd: ROOT, stdio: 'inherit' });
  process.exit(r.status || 0);
}

const HELP = `${C.bold}ds${C.r} —— 哈哈设计系统 项目 CLI（零依赖）

  ${C.cyan}node _base/ds.mjs <命令>${C.r}

  ${C.bold}check${C.r}            校验画廊完整性（数组↔目录 · 孤儿 · 重复 slug · 计数 · 分类覆盖）
  ${C.bold}qc${C.r} <slug|all>    单页静态 QC（外链 · 返回 · credit · emoji 字形）
  ${C.bold}cats${C.r}            按类别列出临摹，标出未归类
  ${C.bold}count${C.r} [--fix]    报告计数；--fix 同步 meta/区块/页脚 计数到真实数量
  ${C.bold}dup${C.r}             按来源《作品名》找同源重复临摹
  ${C.bold}shoot${C.r} <slug>     截图一个临摹（封装 shoot_study.mjs）
  ${C.bold}help${C.r}            本帮助

  典型一轮：新建 studies/<slug>/ → ds shoot <slug> → ds qc <slug> → 入数组 → ds count --fix → ds check → 部署`;

const [cmd, arg] = process.argv.slice(2);
switch (cmd) {
  case 'check': cmdCheck(); break;
  case 'qc': cmdQc(arg); break;
  case 'cats': cmdCats(); break;
  case 'count': cmdCount(arg === '--fix'); break;
  case 'dup': cmdDup(); break;
  case 'shoot': cmdShoot(arg); break;
  case 'help': case undefined: case '-h': case '--help': console.log(HELP); break;
  default: console.error(`未知命令：${cmd}\n`); console.log(HELP); process.exit(2);
}
