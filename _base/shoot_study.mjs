// 给「效果临摹」单页截图：整页 + 顶部裁切视网膜缩略图（单主题，不切换）。
// 用法: node _base/shoot_study.mjs studies/ascii-pricing study-ascii-pricing
import pw from '/Users/shuangchunliang/mineproj/hahaimage/node_modules/playwright/index.js';
const { chromium } = pw;
const ROOT = '/Users/shuangchunliang/mineproj/designsystem';
const page_ = process.argv[2];   // e.g. studies/ascii-pricing
const slug  = process.argv[3];   // e.g. study-ascii-pricing
if (!page_ || !slug) { console.error('usage: node shoot_study.mjs <studies/xx> <study-xx>'); process.exit(1); }
const file = 'file://' + ROOT + '/' + page_ + '/index.html';

const browser = await chromium.launch();
const big = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
const p1 = await big.newPage();
await p1.goto(file, { waitUntil: 'load', timeout: 30000 });
await p1.evaluate(() => document.fonts && document.fonts.ready);
await p1.waitForTimeout(500);
await p1.screenshot({ path: `${ROOT}/screenshots/${slug}.png`, fullPage: true });

const thumb = await browser.newContext({ viewport: { width: 1280, height: 1000 }, deviceScaleFactor: 1.5 });
const p2 = await thumb.newPage();
await p2.goto(file, { waitUntil: 'load', timeout: 30000 });
await p2.evaluate(() => document.fonts && document.fonts.ready);
await p2.waitForTimeout(500);
await p2.screenshot({ path: `${ROOT}/screenshots/thumbs/${slug}.jpg`, type: 'jpeg', quality: 82 });

await browser.close();
console.log('OK', slug);
