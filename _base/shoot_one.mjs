// 给单套 Kit 截图：整页(亮/暗) + 顶部裁切视网膜缩略图(亮/暗)。
// 用法: node _base/shoot_one.mjs styles/17-scifi-hud style-17-scifi-hud
// 显式设 data-theme=light/dark，dark-first 的风格也能正确出亮/暗两版。
import pw from '/Users/shuangchunliang/mineproj/hahaimage/node_modules/playwright/index.js';
const { chromium } = pw;

const ROOT = '/Users/shuangchunliang/mineproj/designsystem';
const kit  = process.argv[2];   // e.g. styles/17-scifi-hud
const slug = process.argv[3];   // e.g. style-17-scifi-hud
if (!kit || !slug) { console.error('usage: node shoot_one.mjs <styles/xx> <style-xx>'); process.exit(1); }
const file = 'file://' + ROOT + '/' + kit + '/preview.html';

async function setTheme(p, t) {
  await p.evaluate((t) => {
    const r = document.documentElement;
    r.setAttribute('data-theme', t);
    r.classList.remove('dark', 'light'); r.classList.add(t);
  }, t);
  await p.waitForTimeout(420);
}

const browser = await chromium.launch();
// 整页 1280 宽，DSF 1
const big = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
const p1 = await big.newPage();
await p1.goto(file, { waitUntil: 'load', timeout: 30000 });
await p1.evaluate(() => document.fonts && document.fonts.ready);
await setTheme(p1, 'light'); await p1.screenshot({ path: `${ROOT}/screenshots/${slug}.png`, fullPage: true });
await setTheme(p1, 'dark');  await p1.screenshot({ path: `${ROOT}/screenshots/${slug}--dark.png`, fullPage: true });
console.log('full done');

// 缩略图：顶部裁切，1280×1000 @1.5 → 1920×1500 视网膜
const thumb = await browser.newContext({ viewport: { width: 1280, height: 1000 }, deviceScaleFactor: 1.5 });
const p2 = await thumb.newPage();
await p2.goto(file, { waitUntil: 'load', timeout: 30000 });
await p2.evaluate(() => document.fonts && document.fonts.ready);
await setTheme(p2, 'light'); await p2.screenshot({ path: `${ROOT}/screenshots/thumbs/${slug}.jpg`, type: 'jpeg', quality: 82 });
await setTheme(p2, 'dark');  await p2.screenshot({ path: `${ROOT}/screenshots/thumbs/${slug}--dark.jpg`, type: 'jpeg', quality: 82 });
console.log('thumbs done');

await browser.close();
console.log('OK', slug);
