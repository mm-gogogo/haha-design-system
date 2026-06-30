# AGENTS.md · 哈哈设计系统

给在本仓库工作的 AI / agent 的操作约定。落地某套**风格**时先读 `design.md`（Token 契约）；维护画廊与**效果临摹**（`studies/`）时读本文件。

## 仓库速览

- `index.html` —— 在线站点首页 = 截图总览画廊。三栏：通用风格库（49）/ 开源项目定制（6）/ 效果临摹（`studies/`）。
  - 卡片数据是页内 JS 数组：`styles[]` `projects[]`（4 段 `[f,slug,name,#color]`）、`studies[]`（5 段 `[f,slug,name,cite,#color]`）。
  - 计数**全部动态**（由数组长度驱动 `cntStudies/statStudies/ftStudies` 等）；只有 `<meta description>` 里的数字与各静态兜底需手动同步 —— 用 `ds count --fix`。
  - 临摹分类靠 `STUDY_CAT`（slug→类别）+ 顶部分类筛选 chips；**新增临摹必须同时登记 `STUDY_CAT`**，否则 `ds check` 会报未归类。
- `studies/<slug>/index.html` —— 单文件、单主题、自包含的效果临摹页（非 token 套）。
- `_base/ds.mjs` —— 项目 CLI（见下）。`_base/shoot_study.mjs` —— 单图截图。

## 效果临摹（studies/）硬规则

每个临摹 = 照着社区作品的**视觉效果**、**从零重写**的单个 `studies/<slug>/index.html`：

1. **非原创须标注**：页内右下固定 credit 横幅写明「临摹自 …《原作》 by 原作者（社区 #N）· 版权归原作者」；左下固定「‹ 哈哈设计系统」返回按钮。**只作学习展示、不商用。**
2. **从零重写 + 原创文案/品牌**：不抄原站代码与文字；自起虚构品牌名与文案；不冒用真实公司 / 真实身份提供方 / 真实人物。
3. **不暴露任何非 `haha` 开头的真实项目**。
4. **自包含**：无任何外链 / CDN / 网络字体；字体只用 `../../_fonts/fonts.css`（Inter / JetBrains Mono / Quicksand / Press Start 2P / VT323 / Noto Serif）；图片若需要走本地 gpt-image-2 产物，仍须本地引用。
5. **零 emoji / 零装饰性字形**：不用 ✓ ✕ → ★ ● ▶ ♪ ↑ 等 emoji 或 dingbat/箭头/对勾/星作图标——一律内联 `<svg>`，或在终端/ASCII 语境用纯 ASCII（如 `->`）。科学单位 `°C ± µ` 与印刷引号、破折号允许。
6. **移动安全**：390px 宽下 0 横向溢出（`html{overflow-x:hidden}` + `body{overflow-x:clip}`，栅格回落单列）。
7. **可读性**：正文对比度过 WCAG AA。
8. **动效**：每个动画都要有 `@media (prefers-reduced-motion: reduce)` 兜底（静帧或瞬时）。

## 项目 CLI（提交前必跑）

```bash
node _base/ds.mjs qc <slug>     # 单页静态 QC（外链/返回/credit/emoji 字形）
node _base/ds.mjs check         # 完整性（数组↔目录·孤儿·重复 slug·计数·分类覆盖）
node _base/ds.mjs dup           # 同源重复检测（别重复临摹同一作品）
node _base/ds.mjs count --fix   # 计数同步
node _base/ds.mjs cats          # 分类总览
node _base/ds.mjs shoot <slug>  # 截图
```

新增一例的流程：建 `studies/<slug>/index.html` → `ds shoot <slug>` → `ds qc <slug>`（须全过）→
加进 `index.html` 的 `studies[]` + `STUDY_CAT` → `ds count --fix` → `ds check`（须通过）→ 部署 → commit。

## 红线

- **别重复临摹同一来源**：加之前先 `ds dup`、并搜 `index.html` 里是否已有同一《作品》/社区号。
- **绝不提交密钥**（Cloudflare key 等只走环境变量）。
- 改 `index.html` 前先读它——画廊可能被其它进程并发改过；改完务必 `ds check` 兜底。
