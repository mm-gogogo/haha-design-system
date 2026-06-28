<div align="center">

# 哈哈设计系统 · haha-design-system

**一套基于 [Geist (Vercel Design System)](https://vercel.com/geist) 衍生的多风格设计系统库**
35 套可复用风格 + 6 个开源项目的定制设计系统，共享同一 `--ds-*` Token 契约 — 换一份 `tokens.css` 即可整体换肤。

*A multi-flavor design-system library derived from Geist. 35 reusable style packs + 6 open-source project kits, all sharing one `--ds-*` token contract — swap a single `tokens.css` to re-skin everything.*

[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](./LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-design.hahaha.chat-006bff.svg)](https://design.hahaha.chat)
[![Styles](https://img.shields.io/badge/Styles-35-7c3aed.svg)](#35-套通用风格)
[![Projects](https://img.shields.io/badge/Custom%20kits-6-f59e0b.svg)](#6-个开源项目定制)
[![WCAG AA](https://img.shields.io/badge/Contrast-WCAG%20AA-16a34a.svg)](#)

**在线预览 / Live → [design.hahaha.chat](https://design.hahaha.chat)**

</div>

---

## 这是什么

每套设计系统都继承 Geist 的骨架与思想 —— **语义分层、比例尺驱动、状态色成对、可见焦点环、明暗双主题** —— 但替换了色彩气质、字体性格、圆角/阴影的软硬、动效个性与组件造型，形成 35 种截然不同的视觉风格；再以这些风格为底，为 6 个开源项目做了逐个定制。

每套 Kit 都是**完整可落地的作品级展示**：

- `README.md` — 完整设计规范（哲学 / 颜色 / 字体 / 间距 / 圆角阴影 / 动效 / 组件 / 可访问性 / Do&Don't）
- `tokens.css` — CSS 变量实现（`:root` 亮色 + `[data-theme="dark"]` 暗色）
- `tokens.json` · `tailwind.preset.js` — 机器可读 token 与 Tailwind 预设
- `preview.html` — 自包含展示页：**hero 大图 + 图片用法 + 图标用法 + 桌面多布局 + iPhone 17 Pro Max 移动布局**，含真实字体与完整组件，双击即开

所有 Kit 共享同一套 **Token 契约**（见 [`_base/KIT-TEMPLATE.md`](./_base/KIT-TEMPLATE.md)），**任意项目都能无痛切换风格**。图标全部内联 SVG（零 emoji），图片走本地素材（gpt-image-2 生成的风格美术图 + 无版权照片），全部色彩对满足 **WCAG AA**。

## 35 套通用风格

<table>
<tr>
<td width="50%"><b>可爱风 Cute</b><br><img src="screenshots/style-01-cute.png" alt="可爱风"></td>
<td width="50%"><b>像素风 Pixel</b><br><img src="screenshots/style-02-pixel.png" alt="像素风"></td>
</tr>
<tr>
<td><b>企业风 Enterprise</b><br><img src="screenshots/style-03-enterprise.png" alt="企业风"></td>
<td><b>B 端风 B-side</b><br><img src="screenshots/style-04-b-side.png" alt="B端风"></td>
</tr>
<tr>
<td><b>中国政府风 Gov-CN</b><br><img src="screenshots/style-05-gov-cn.png" alt="中国政府风"></td>
<td><b>暗黑科技风 Dark-Tech</b><br><img src="screenshots/style-06-dark-tech.png" alt="暗黑科技风"></td>
</tr>
<tr>
<td><b>极简 editorial</b><br><img src="screenshots/style-07-editorial.png" alt="极简editorial风"></td>
<td><b>新拟物风 Neumorphism</b><br><img src="screenshots/style-08-neumorphism.png" alt="新拟物风"></td>
</tr>
<tr>
<td><b>玻璃拟态 Glassmorphism</b><br><img src="screenshots/style-09-glassmorphism.png" alt="玻璃拟态"></td>
<td><b>国潮 / 新中式 Guochao</b><br><img src="screenshots/style-10-guochao.png" alt="国潮新中式"></td>
</tr>
<tr>
<td><b>奢侈高端 Luxury</b><br><img src="screenshots/style-11-luxury.png" alt="奢侈高端"></td>
<td><b>粗野主义 Brutalism</b><br><img src="screenshots/style-12-brutalism.png" alt="粗野主义"></td>
</tr>
<tr>
<td><b>赛博朋克 Cyberpunk</b><br><img src="screenshots/style-13-cyberpunk.png" alt="赛博朋克"></td>
<td><b>日系极简 Japanese</b><br><img src="screenshots/style-14-japanese.png" alt="日系极简"></td>
</tr>
<tr>
<td><b>Material Design (M3)</b><br><img src="screenshots/style-15-material.png" alt="Material Design"></td>
<td><b>黏土 3D Claymorphism</b><br><img src="screenshots/style-16-claymorphism.png" alt="黏土3D"></td>
</tr>
<tr>
<td><b>科幻 HUD · Orbit HUD / 航天终端</b><br><img src="screenshots/style-17-scifi-hud.png" alt="科幻HUD"></td>
<td><b>矿物康养编辑风 Mineral</b><br><img src="screenshots/style-18-mineral-editorial.png" alt="矿物康养编辑风"></td>
</tr>
<tr>
<td><b>Y2K 千禧水光 · Aqua (Frutiger Aero)</b><br><img src="screenshots/style-19-y2k-aqua.png" alt="Y2K千禧水光"></td>
<td><b>瑞士国际主义 Swiss (International Typographic)</b><br><img src="screenshots/style-20-swiss.png" alt="瑞士国际主义"></td>
</tr>
<tr>
<td><b>装饰艺术 Art Deco</b><br><img src="screenshots/style-21-art-deco.png" alt="装饰艺术"></td>
<td><b>孔版印刷 Risograph (Riso Print)</b><br><img src="screenshots/style-22-risograph.png" alt="孔版印刷"></td>
</tr>
<tr>
<td><b>包豪斯 Bauhaus</b><br><img src="screenshots/style-23-bauhaus.png" alt="包豪斯"></td>
<td><b>孟菲斯 Memphis (80s Postmodern)</b><br><img src="screenshots/style-24-memphis.png" alt="孟菲斯"></td>
</tr>
<tr>
<td><b>新艺术运动 Art Nouveau (Mucha)</b><br><img src="screenshots/style-25-art-nouveau.png" alt="新艺术运动"></td>
<td><b>报刊风 Newspaper (Broadsheet)</b><br><img src="screenshots/style-26-newspaper.png" alt="报刊风"></td>
</tr>
<tr>
<td><b>蒸汽波 Synthwave (Outrun)</b><br><img src="screenshots/style-27-synthwave.png" alt="蒸汽波"></td>
<td><b>波普艺术 Pop Art (Ben-Day)</b><br><img src="screenshots/style-28-pop-art.png" alt="波普艺术"></td>
</tr>
<tr>
<td><b>蓝图技术风 Blueprint (Drafting)</b><br><img src="screenshots/style-29-blueprint.png" alt="蓝图技术风"></td>
<td><b>复古美式 Vintage Americana (Diner)</b><br><img src="screenshots/style-30-vintage-americana.png" alt="复古美式"></td>
</tr>
<tr>
<td><b>拼贴手帐 Collage (Scrapbook)</b><br><img src="screenshots/style-31-collage.png" alt="拼贴手帐"></td>
<td><b>拟物写实 Skeuomorphism (Rich)</b><br><img src="screenshots/style-32-skeuomorphism.png" alt="拟物写实"></td>
</tr>
<tr>
<td><b>构成主义 Constructivism (Agitprop)</b><br><img src="screenshots/style-33-constructivism.png" alt="构成主义"></td>
<td><b>暗黑学院 Dark Academia (Literary)</b><br><img src="screenshots/style-34-dark-academia.png" alt="暗黑学院"></td>
</tr>
<tr>
<td><b>90s 网页 Web 1.0 (Geocities)</b><br><img src="screenshots/style-35-web1.png" alt="90s网页"></td>
<td valign="top"><b>更多风格持续扩展中…</b><br><sub>接下来：扁平插画、原生艺术、太阳朋克、蒸汽波…</sub></td>
</tr>
</table>

> 每套均含亮 / 暗两态，移动端演示统一用 iPhone 17 Pro Max 套壳；全部截图见 [`screenshots/`](./screenshots)。

> 另设 **效果临摹 · Effect Studies** 栏目：对 [vibehub.xin](https://www.vibehub.xin/) / variant 社区作品视觉效果的**临摹复刻（非原创 · 已标注原作与作者 · 从零重写 + 原创文案 · 仅作前端技法学习、不作商用）**，详见线上首页底部栏目。

## 6 个开源项目定制

> 哈哈开源全家桶 —— 读取各项目真实上下文后专属定制，保持其品牌与既有约定。

| 项目 | 基底风格 | 定制亮点 |
|---|---|---|
| [hahatool](./projects/hahatool) | 企业风 | 桥接 `brand-*` + 4 主题切换 + `--chart-*` 图表变量 |
| [hahafree-research](./projects/hahafree-research) | B 端风 | 玫瑰主色 + 冷青分析色，6 色图表序列，密集数据表 |
| [hahamail](./projects/hahamail) | B 端风 | 邮件靛蓝，SPF/DKIM/DMARC 徽章 + 路由规则表 |
| [hahaagent](./projects/hahaagent) | 暗黑科技风 | 电光青蓝，聊天 / 工具调用卡 / Agent 状态灯 / ANSI 日志 |
| [hahaclean](./projects/hahaclean) | 新拟物风 | 洁净薄荷，凸起→按下凹陷阴影，macOS 清理界面 |
| [haha-soft-research](./projects/haha-soft-research) | 极简 editorial | 开源绿 + 松石青，软件全家桶产品卡网格 |

## 快速使用

**只读 Markdown（推荐给新项目）**：每套 Kit 的 `README.md` 就是完整规范，照它落地即可。

**接入代码**：

```html
<!-- 1. 引入某套风格的 tokens -->
<link rel="stylesheet" href="styles/03-enterprise/tokens.css">
<!-- 2. 组件里只用语义变量 -->
<button style="background:var(--ds-primary);color:var(--ds-primary-fg);
  border-radius:var(--ds-radius-sm);height:40px;padding:0 var(--ds-space-3)">按钮</button>
```

```js
// Tailwind 项目：引风格预设
module.exports = { presets: [require('./styles/03-enterprise/tailwind.preset.js')] }
```

**切换主题**：`document.documentElement.dataset.theme = 'dark'`（或加 `.dark` 类）。
**换风格**：所有 Kit 共享 `--ds-*` 契约，换一份 `tokens.css` 即整体换肤。

## 目录结构

```
.
├── index.html                 # 截图总览画廊（= 在线站点首页）
├── _base/                     # geist-base · KIT-TEMPLATE · SHOWCASE-SPEC · POLISH-SPEC · DEVICE-FRAME · shoot.js
├── _fonts/                    # 本地 OFL 开源字体 (woff2) + fonts.css
├── _assets/                   # 共享素材：gpt-image-2 风格美术图 + 无版权照片/头像 + device.css(iPhone 套壳)
├── styles/                    # 35 套可复用风格
│   └── <kit>/  README.md · tokens.css · tokens.json · tailwind.preset.js · preview.html
├── projects/                  # 6 个开源项目定制
│   └── <kit>/  README.md · tokens.css · tailwind.preset.js · preview.html
└── screenshots/               # 每套整页截图（亮 / 暗）+ thumbs/ 视网膜缩略图
```

## Token 契约（节选）

```
颜色  --ds-bg / -subtle / -elevated / -sunken · --ds-fg / -muted / -subtle / -on-accent
      --ds-border / -strong · --ds-primary(/-hover/-active/-fg) · --ds-accent(/-fg)
      --ds-success|warning|danger|info (/-bg /-fg) · --ds-focus(-ring)
排版  --ds-font-sans|serif|mono · --ds-text-* · --ds-leading-* · --ds-weight-* · --ds-tracking-*
形状  --ds-radius-sm|md|lg|full · --ds-space-1..12 · --ds-shadow-sm|md|lg
动效  --ds-ease · --ds-dur-fast|base|slow · 语义 z-index --ds-z-*
```

完整契约见 [`_base/KIT-TEMPLATE.md`](./_base/KIT-TEMPLATE.md)。

## 致谢 / Credits

- 结构与思想基底：[Geist — Vercel Design System](https://vercel.com/geist)
- 字体（OFL）：Inter · JetBrains Mono · Quicksand · Press Start 2P · VT323 · Noto Serif
- 风格美术图：gpt-image-2 生成；演示照片：无版权图源

## License

[MIT](./LICENSE) © 2026 mm-gogogo
