// 给所有 Kit 的 preview.html 整页截图（亮+暗），输出到 designsystem/screenshots/
const { chromium } = require('/Users/shuangchunliang/mineproj/hahaimage/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const ROOT = '/Users/shuangchunliang/mineproj/designsystem';
const OUT = path.join(ROOT, 'screenshots');
fs.mkdirSync(OUT, { recursive: true });

const kits = [];
for (const sub of ['styles', 'projects']) {
  const base = path.join(ROOT, sub);
  for (const name of fs.readdirSync(base).sort()) {
    const p = path.join(base, name, 'preview.html');
    if (fs.existsSync(p)) kits.push({ sub, name, file: p });
  }
}

(async () => {
  let browser;
  // 优先用 Playwright 自带隔离 chromium（不碰用户主 Chrome 的 profile/登录态）
  try { browser = await chromium.launch(); }
  catch (e) { console.log('bundled chromium failed -> chrome channel:', e.message); browser = await chromium.launch({ channel: 'chrome' }); }
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const k of kits) {
    const prefix = (k.sub === 'styles' ? 'style-' : 'proj-') + k.name;
    try {
      await page.goto('file://' + k.file, { waitUntil: 'load', timeout: 20000 });
      await page.waitForTimeout(450);
      await page.screenshot({ path: path.join(OUT, prefix + '.png'), fullPage: true });
      await page.evaluate(() => { document.documentElement.setAttribute('data-theme', 'dark'); document.documentElement.classList.add('dark'); });
      await page.waitForTimeout(450);
      await page.screenshot({ path: path.join(OUT, prefix + '--dark.png'), fullPage: true });
      await page.evaluate(() => { document.documentElement.removeAttribute('data-theme'); document.documentElement.classList.remove('dark'); });
      console.log('✓', prefix);
    } catch (e) { console.log('✗', prefix, e.message); }
  }
  await browser.close();
  console.log('ALL DONE:', kits.length, 'kits');
})();
