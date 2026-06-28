# 哈哈设计系统 · design.md

> 一个可直接「加载成 skill / context」的多风格设计系统规范。基于 [Geist (Vercel)](https://vercel.com/geist) 衍生。
> 在线：https://design.hahaha.chat ｜ 本文件：https://design.hahaha.chat/design.md ｜ 源码：https://github.com/mm-gogogo/haha-design-system
>
> **怎么用（给 AI/agent）**：把本文件整篇读入即可。它完整定义了 `--ds-*` Token 契约 + 34 套风格的关键取值 + 6 个项目定制 + 接入方式。
> 要落地某套风格：① 直接 `<link>` 它的 `tokens.css`（下方有线上直链），或 ② 照抄该风格取值，组件里一律用 `var(--ds-*)`。换风格 = 换一份 `tokens.css`。

---

## 1. 核心思想（继承 Geist）

语义分层 · 比例尺驱动 · 状态色成对 · 可见焦点环 · 明暗双主题。
界面默认由中性层承载，强调色只用于「主操作 / 链接 / 选中 / 状态」。组件**只读语义变量**，不硬编码颜色。

## 2. Token 契约（所有风格变量名一致，只换取值）

```
/* 表面与文字 */
--ds-bg --ds-bg-subtle --ds-bg-elevated --ds-bg-sunken
--ds-fg --ds-fg-muted --ds-fg-subtle --ds-fg-on-accent
--ds-border --ds-border-strong
/* 品牌与强调 */
--ds-primary --ds-primary-hover --ds-primary-active --ds-primary-fg
--ds-accent --ds-accent-fg
/* 语义状态（每个含 主色 / -bg 浅底 / -fg 底上文字） */
--ds-success(-bg/-fg) --ds-warning(-bg/-fg) --ds-danger(-bg/-fg) --ds-info(-bg/-fg)
/* 焦点 / 圆角 / 间距 / 字体 / 阴影 / 动效 / 层级 */
--ds-focus --ds-focus-ring
--ds-radius-sm|md|lg|full
--ds-space-1..12                      (4,8,12,16,20,24,32,40,48,64,80,96)
--ds-font-sans|serif|mono · --ds-text-xs..3xl · --ds-leading-tight|normal|relaxed
--ds-weight-normal|medium|bold · --ds-tracking-tight|normal
--ds-shadow-sm|md|lg
--ds-ease · --ds-dur-fast|base|slow
--ds-z-dropdown<sticky<modal-backdrop<modal<toast<tooltip
```

亮色写在 `:root`，暗色写在 `[data-theme="dark"]`（并兼容 `.dark`）。切换：`document.documentElement.dataset.theme='dark'`。
焦点环：`box-shadow: 0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus)`。对比度全部满足 WCAG AA。

## 3. 接入

```html
<link rel="stylesheet" href="https://design.hahaha.chat/styles/03-enterprise/tokens.css">
<button style="background:var(--ds-primary);color:var(--ds-primary-fg);
  height:40px;padding:0 var(--ds-space-3);border-radius:var(--ds-radius-sm)">按钮</button>
```
Tailwind：每套有 `tailwind.preset.js`（`presets:[require('.../styles/<slug>/tailwind.preset.js')]`）。
字体：本地 OFL woff2，见 `/_fonts/fonts.css`（Inter · JetBrains Mono · Quicksand · Press Start 2P · VT323 · Noto Serif）。
移动端套壳：`/_assets/device.css` 提供 iPhone 17 Pro Max 设备框（`.dvc17`，含灵动岛/侧键/状态栏/home，用法见 `/_base/DEVICE-FRAME.md`）。

每套风格的完整文件（把 `<slug>` 换成下表目录名）：
`/styles/<slug>/tokens.css` · `/tokens.json` · `/tailwind.preset.js` · `/README.md`(完整规范) · `/preview.html`(可视化)

---

## 4. 34 套通用风格（关键取值；完整值见各 tokens.css）

> 格式：主色 / 背景 / 文字 / 强调（亮）｜暗色主色 ｜ 圆角 sm·md·lg ｜ 字体 ｜ 身份

### 01 可爱风 cute — `/styles/01-cute/`
糖果俏皮、圆润治愈。primary `#ff6b9d` / bg `#fff7fb` / fg `#4a3b44` / accent `#5cc8ff`｜暗 primary `#ff8fb5`(bg `#241a22`)｜10·18·28｜Quicksand｜大圆角药丸 + 柔和彩色阴影 + 轻回弹。

### 02 像素风 pixel — `/styles/02-pixel/`
8-bit 复古游戏。primary `#3ab44a` / bg `#f4f0e1` / fg `#1a1a2e` / link `#c2410c`｜暗 primary `#4ce86a`、accent 霓虹品红 `#ff5cf0`(bg `#16161e`)｜0·0·2｜Press Start 2P + VT323｜硬实心偏移阴影 `Npx Npx 0` + steps() + 像素描边。

### 03 企业风 enterprise — `/styles/03-enterprise/`
稳重专业可信。primary `#2563eb`(hover `#1d4ed8`/active `#1e40af`) / bg `#ffffff` / subtle `#f7f9fc` / fg `#0f172a`·muted `#475569` / border `#e2e8f0`｜暗 primary `#3b82f6`｜6·10·16｜Inter + JetBrains Mono｜克制柔影、商务蓝。

### 04 B 端风 b-side — `/styles/04-b-side/`
高密度后台控制台。primary `#165dff`(hover `#0e42d2`) / bg `#fff`·subtle `#f5f6f8` / fg `#1d2129`/`#4e5969`/`#86909c` / border `#e5e6eb`｜暗 primary `#2f6fea`(bg `#17171a`)｜4·6·8｜Inter，数字 tabular｜控件高 24/32/36、弱阴影靠描边。

### 05 中国政府风 gov-cn — `/styles/05-gov-cn/`
庄重权威政务。primary 党政红 `#c4161c`(hover `#a91219`) / accent 政务蓝 `#1c4d8c` / gold `#c9a227`(仅描边/印章) / bg `#fff`·subtle 暖纸 `#f5f3f0` / fg `#1a1a1a`｜2·4·6｜黑体正文 + 宋体标题(Noto Serif)｜红色 banner、方正对称、通知公告列表。

### 06 暗黑科技风 dark-tech — `/styles/06-dark-tech/`（暗色优先）
开发者/AI 控制台。`:root`=暗：bg `#0a0a0f`·elevated `#14141c` / fg `#e6e6f0`·muted `#9a9ab0` / primary 霓虹青 `#00e0c6`(hover `#2af0d8`) / accent 紫 `#8b5cf6`｜亮色 primary 收 `#00786a`｜6·10·14｜JetBrains Mono + Inter｜霓虹辉光阴影、glow focus、终端感。

### 07 极简 editorial — `/styles/07-editorial/`
排版优先、阅读舒适。primary 赭橙 `#b4541e`(hover `#9c4517`) / accent 墨绿 `#3f6f5f` / bg 暖纸 `#faf8f3` / fg 暖墨 `#2b2722`｜暗 primary `#d97746`(bg `#1a1714`)｜6·10·14｜衬线 Noto Serif 正文 + Inter UI｜大行高、阅读容器 ~680px、极轻阴影、适度留白。

### 08 新拟物风 neumorphism — `/styles/08-neumorphism/`
柔和凸凹触感。primary `#4a6fc4` / bg 同色基底 `#e8ebf0` / fg `#3a4252`｜暗 bg `#2a2d35`｜10·16·24｜Inter｜双向柔影（外凸 `-6 -6 / 6 6`）+ inset 凹陷；文字务必 ≥4.5:1。

### 09 玻璃拟态 glassmorphism — `/styles/09-glassmorphism/`
磨砂玻璃叠鲜艳渐变。primary `#6366f1`(文字版 `#5b5ef0`) / accent `#ec4899`(文字 `#db2777`) / bg `#eef1f8`｜暗 bg `#0f1226` primary `#818cf8`｜16·20·28｜Inter｜半透明玻璃面 + `backdrop-filter:blur` + 1px 高光描边，文字所在玻璃面提高不透明度保 AA。

### 10 国潮 / 新中式 guochao — `/styles/10-guochao/`
朱红靛蓝 + 宣纸水墨。primary 朱红 `#c8341f` / accent 靛蓝 `#1b3b6f` / gold `#b8893a`(描边/印章) / bg 宣纸 `#f5efe2` / fg 墨 `#2b2620`｜暗 primary `#e0533a`(bg `#1a1714`)｜4·8·12｜衬线标题(Noto Serif) + sans｜云纹/回纹/印章角标。

### 11 奢侈高端 luxury — `/styles/11-luxury/`（暗色优先）
炭黑 + 拉丝金，留白即高级。`:root`=暗：bg `#0e0d0b`·surface `#16140f` / fg `#ece6d8` / primary 金 `#c9a86a`(hover `#b8975a`) / accent `#b08d57`｜亮(米金) bg `#f6f3ee`、金作文字用深金 `#7e5f28`｜2·6·10｜衬线 Noto Serif｜细金描边、极克制阴影、大间距。

### 12 粗野主义 brutalism — `/styles/12-brutalism/`
高对比、粗黑边、暴露栅格。primary 电光蓝 `#1a1aff` / accent 荧光黄 `#ffe600` / bg `#f4f4f0` / fg `#0a0a0a` / border `#0a0a0a`(粗 2–3px)｜暗 bg `#0a0a0a`、primary `#ffe600`、accent `#6e6eff`｜0·0·0｜JetBrains Mono 特大粗标题｜硬实心偏移阴影。

### 13 赛博朋克 cyberpunk — `/styles/13-cyberpunk/`（暗色优先）
霓虹雨夜、扫描线、辉光。`:root`=暗：bg `#0a0612`·surface `#14091f` / fg `#e8e0ff`·muted `#8a78ac` / primary 霓虹品红 `#ff2bd6` / accent 青 `#00f0ff` / warning `#ffe600`｜亮色 accent 收 `#00708a`｜2·6·10｜JetBrains Mono｜glow 阴影 + 扫描线（reduced-motion 关）。

### 14 日系极简 japanese — `/styles/14-japanese/`
米白原木、留白克制（MUJI 感）。primary 藏青 `#3a4a5a` / accent 苔绿 `#5d6e4f` / bg `#f4f1ea`·surface `#faf8f3` / fg `#33312c`·muted `#6b6862` / border 细 `#e2ddd2`｜暗 bg `#1c1a17`｜4·8·12｜Inter + Noto Serif｜几乎无影、细线分层。

### 15 Material Design (M3) — `/styles/15-material/`
扁平色块 + elevation。primary `#6750a4` / accent(tertiary) `#7d5260` / error `#b3261e` / bg `#fef7ff`·surface-variant `#e7e0ec` / fg `#1d1b20`·muted `#49454f` / border `#cac4d0`｜暗 primary `#d0bcff`(bg `#141218`)｜8·12·16 + full(FAB/chip)｜Inter｜M3 elevation 阴影、tonal、FAB/chip。

### 16 黏土 3D claymorphism — `/styles/16-claymorphism/`
胖嘟嘟黏土、马卡龙。primary `#7c6cff`(hover `#6a5aee`) / accent 薄荷 `#38d6b0` / bg `#eef0fb` / fg `#3a3a55`｜暗 primary `#9a8cff`(bg `#23233a`)｜16·24·32｜Quicksand｜外柔影 + inset 内高光（黏土双阴影）。

### 17 科幻 HUD · Orbit HUD / 航天终端 — `/styles/17-scifi-hud/`
深蓝黑航天控制台、单一克制离子蓝辉光（dark-first）。primary `#4d8dff`(hover `#6ba2ff`) / accent `#56c8ff` / bg `#060810`·elevated `#101626` / fg `#e8eefc`·muted `#8a99bd` / border `#1b2740`｜亮（日间作业）primary `#1f5fe0` / bg `#f7f9fe` / fg `#0a1222`｜4·8·12（偏锐利）｜Inter 紧字距标题 + JetBrains Mono 大写坐标/状态标签｜仪表网格底 + 顶部离子蓝径向晕 + 玻璃面板；坐标/状态 chip。与 06 暗黑科技（青紫霓虹）、13 赛博朋克（粉色故障）刻意区分。

### 18 矿物康养编辑风 · Mineral — `/styles/18-mineral-editorial/`
暖燕麦/矿石底、静修编辑感。primary 鼠尾草绿 `#4f6b52` / accent 黏土赭红 `#a8543a` / bg `#f4f1e8`·elevated `#fffdf8` / fg `#2a2723`·muted `#5f5a4d`｜暗（薄暮静修）primary `#8fb084` / accent `#d98b6f` / bg `#1c1f1a`｜6·10·18｜Noto Serif 标题 + Inter 正文 + JetBrains Mono 小标签｜细线分隔 + 柔块 + 植物线描，非对称静物 hero。与 07 浓烈赭橙印刷编辑风刻意区分（更安静、更暖、图片前置）。

### 19 Y2K 千禧水光 · Aqua (Frutiger Aero) — `/styles/19-y2k-aqua/`
晴空蓝/水绿、果冻光泽。primary 水光蓝 `#00709f`(亮)/`#2bb7ef`(暗) / accent 水绿 `#0a7d50`(亮)/`#45d99a`(暗) / bg `#eef7fe`·elevated `#fff`｜暗（深海）bg `#061a26`·fg `#dff1fb`｜8·14·22（很圆）｜Quicksand 圆体标题 + Inter 正文｜果冻渐变按钮（顶部高光 + hover 辉光）+ 水珠气泡 + 克制虹彩条 + 自然科技图（水/海/林）。与 09 玻璃拟态（磨砂）、16 黏土（哑光）刻意区分（光泽水感）。

### 20 瑞士国际主义 · Swiss (International Typographic) — `/styles/20-swiss/`
网格秩序、客观克制、单一红强调。primary 信号红 `#cc1f16`(亮)/`#ff453a`(暗，黑字) / bg `#fff`·fg `#111`·muted `#555` / border `#e0e0e0`·strong `#111`｜暗 bg `#0a0a0a`·fg `#f2f2f2`｜圆角 0（方）、无投影（仅 1px 描边/细黑分隔线）｜Inter(Helvetica 替代) 大号齐左标题 + JetBrains Mono 栏目编号(01 — Index)｜12 栏非对称网格、留白足、客观图。与 12 粗野（粗黑边/偏移硬影/黄蓝）刻意区分（更平、更克制）。

### 21 装饰艺术 · Art Deco — `/styles/21-art-deco/`
1920s Gatsby、象牙底 + 祖母绿 + 金、装饰几何。primary 祖母绿 `#0f5a44` / accent 金 `#8a6816` / bg 象牙 `#f6f1e7`·elevated `#fffdf8` / fg `#1a2420`·muted `#41514a` / border-strong `#2a3a33`｜暗（祖母绿之夜）primary 金 `#d8b25a`(黑字) / accent 玉 `#5fb89a` / bg `#0d1714`·fg `#ede6d2`｜0·2·3（锐利）｜Noto Serif 标题 + 宽字距大写 Inter 标签｜金色日芒/扇形、人字纹/锯齿带、阶梯切角、双金细线、对称。与 11 奢侈（极简炭金、暗优先、大留白）刻意区分（更装饰、更对称、祖母绿前置）。

### 22 孔版印刷 · Risograph (Riso Print) — `/styles/22-risograph/`
两版油墨印在暖纸上：荧光粉 + 孔版蓝、网点半调、颗粒、重叠 multiply 套印成紫、套印偏移。primary 荧光粉 `#cf2e6a` / accent 孔版蓝 `#2348a8` / bg 暖纸 `#f4efe4`·elevated `#faf6ec` / fg `#1c1a17`｜暗（暗房）primary `#ff5c93`(黑字) / accent `#6f8fff` / bg `#16151a`·fg `#f0ebe0`｜2·3·4｜Inter 粗体｜半调网点 + feTurbulence 颗粒 + mix-blend multiply 套印 + 错位偏移；正文落实色面不压网点。与 12 粗野（粗黑边/硬影/黄蓝）、02 像素刻意区分（油墨纸感）。

### 23 包豪斯 · Bauhaus — `/styles/23-bauhaus/`
构成主义三原色几何。primary 蓝 `#1b3fae` / accent 红 `#c1272d` / 黄 `#f5c518`(仅装饰) / bg 暖布 `#f4f1e8`·elevated `#fffdf8` / fg `#1a1a1a` / border-strong `#1a1a1a`(粗 keyline)｜暗（构成之夜）primary `#3f63d6` / accent `#e8635f` / bg `#141414`·fg `#f0ede4`｜0·0·0（方+圆）｜Inter 几何粗体 + 宽字距大写｜蓝方/红圆/黄三角几何 + 粗黑 keyline + 非对称网格 + 构成斜线。与 20 瑞士（单红栅格）、12 粗野（硬影）刻意区分（多原色几何形）。

### 24 孟菲斯 · Memphis (80s 后现代) — `/styles/24-memphis/`
糖果撞色 + 纸屑几何 + 黑粗描边。primary 蓝绿 `#0a7575` / accent 桃红 `#d61f69` / 黄 `#f5c518` + 陶土 `#e8590c`(仅装饰) / bg 暖白 `#f7f3ec` / fg `#15151a`｜暗（夜店）primary `#2bc4c4` / accent `#ff5c9d` / bg `#16151c`·fg `#f3eee4`｜6·12·20｜Quicksand 圆体｜波浪/锯齿/波点/三角/blob 纸屑 + 波点/斜纹/水磨石图案 + 黑粗描边，非对称欢乐。与 23 包豪斯（克制原色几何）、01 可爱（柔粉）刻意区分（撞色混乱图案）。

### 25 新艺术运动 · Art Nouveau (Mucha) — `/styles/25-art-nouveau/`
有机曲线、植物线描、鞭线藤蔓。primary 鼠尾草青 `#3e6b5e` / accent 哑金 `#7d6212` / bg 暖羊皮纸 `#f5f0e6`·elevated `#fffdf6` / fg 棕墨 `#2a2820`｜暗（夜园）primary `#6fae90` / accent 金 `#cba24e` / bg 森绿黑 `#181c18`·fg `#ece4d2`｜4·10·18｜Noto Serif 流动标题 + Inter｜鞭线 S 曲线/藤蔓/百合鸢尾孔雀线描 + 拱形装饰框 + 金色细线纹样。与 21 装饰艺术（几何对称）刻意区分（有机曲线植物）。

### 26 报刊风 · Newspaper (Broadsheet) — `/styles/26-newspaper/`
传统大报：衬线报头 + 日期线 + 多栏细线正文。primary 墨黑 `#1f1f1c`(黑底按钮) / accent 报红 `#a8201a` / bg 新闻纸 `#f2efe8`·elevated `#fbf9f3` / fg `#1a1a18`｜暗（夜刊）primary 纸白 `#e8e4d8`(黑字) / accent `#e0564e` / bg `#161512`·fg `#ece8dc`｜0·0·0（锐）｜Noto Serif 报头/标题/正文 + JetBrains Mono 日期线/眉标｜大报头 + 双线 + column-count 多栏细线 + 首字下沉 + 小型大写署名 + 灰度配图。与 07 极简编辑（舒适阅读）刻意区分（高密度多栏大报）。

### 27 蒸汽波 · Synthwave (Outrun) — `/styles/27-synthwave/`（暗色优先）
80s 复古未来：日落渐变 + 霓虹透视网格地平线 + 条纹太阳 + chrome 字 + 扫描线。`:root`=暗：bg 深紫夜 `#150a2a`·elevated `#251444` / fg `#f4ecff` / primary 品红 `#ff5fa2`(黑字) / accent 青 `#29e0e0`｜亮（Miami 粉彩日）bg `#fdf2f8` / primary `#c01f72` / accent `#0d6f7e` / fg `#2a1535`｜2·6·10｜Inter 重体 + JetBrains Mono｜日落渐变 hero + 透视网格 + 条纹太阳 + 霓虹辉光（reduced-motion 关）。与 13 赛博朋克（雨夜废托邦/粉色故障）刻意区分（日落网格乐观复古）。

### 28 波普艺术 · Pop Art (Ben-Day) — `/styles/28-pop-art/`
漫画感：原色 + 粗黑描边 + Ben-Day 网点 + 气泡 + 爆炸形。primary 主红 `#d8241b` / accent 印刷蓝 `#1546d6` / 黄 `#ffd21a`(仅网点/装饰) / bg 奶油纸 `#fbf3df` / fg `#15130e`｜暗（漫画夜）primary `#ff5247`(黑字) / accent `#5b86ff` / bg `#14110a`·fg `#fbf3df`｜4·8·14｜Inter 黑体大写｜Ben-Day 网点 + 粗黑 keyline + 硬偏移阴影 + 气泡 + 爆炸星形；正文落实色面不压网点。与 24 孟菲斯（几何纸屑）、22 孔版（柔印）刻意区分（漫画原色描边）。

### 29 蓝图技术风 · Blueprint (Drafting / CAD) — `/styles/29-blueprint/`（暗色优先）
工程制图：蓝图蓝纸 + 白/青细线 + 制图网格 + 尺寸标注 + 标题栏 + 爆炸示意。`:root`=暗：bg 蓝图蓝 `#0d2747`·elevated `#163a63` / fg `#e8f0fb` / primary 天青 `#7cc4ff`(深字) / accent 琥珀 `#ffb84d`｜亮（白图 CAD）bg `#f4f7fb` / primary `#155fb0` / fg `#122742`｜0·2·4（锐）｜JetBrains Mono 标注 + Inter 标题｜细+粗制图网格 + 尺寸线箭头 + 十字标记 + 标题栏 + 编号引线；纯平无辉光。与 17 科幻 HUD（离子蓝辉光）刻意区分（平面制图）。

### 30 复古美式 · Vintage Americana (Diner / Signage) — `/styles/30-vintage-americana/`
50 年代餐车招牌：奶油纸 + 复古红 + 深青蓝 + 芥末金、星芒徽章、绶带、细条纹边。primary 复古红 `#c0392b` / accent 深青蓝 `#1f5a6b` / 芥末 `#d99a2b`(仅徽章) / bg `#f7efdf` / fg `#2a1f16`｜暗（霓虹餐车夜）primary `#e0584a`(深字) / accent `#4aa8bf` / bg `#1c160f`·fg `#f4e8d2`｜4·8·16｜Noto Serif 粗体招牌 + Inter 大写标牌｜星芒徽章 + 折叠绶带 + 细条纹/双线边 + 扇贝条 + 价签。与 07 极简编辑（现代克制）刻意区分（招牌徽章绶带）。

### 31 拼贴手帐 · Collage (Scrapbook) — `/styles/31-collage/`
牛皮纸拼贴：和纸胶带 + 撕纸边 + 拍立得相框 + 图钉/回形针 + 缝线虚框 + 微旋转便签。primary 珊瑚陶土 `#b5503a` / accent 墨蓝青 `#2f6f8c` / bg 牛皮纸 `#f3ece0`·elevated `#fffdf7` / fg `#2c2620`｜暗（夜间手帐/软木板）primary `#e07a5f`(深字) / accent `#5fa8c4` / bg `#1e1913`·fg `#f0e7d6`｜3·8·14｜Quicksand 圆体 + Noto Serif 标签｜和纸胶带/撕纸/拍立得/图钉/缝线/微旋转层叠；正文落实色纸不压纹理。装饰色 芥末/鼠尾草/粉 仅胶带图钉。与 01 可爱（糖果粉）、18 矿物（克制编辑）刻意区分（手工拼贴质感）。

### 32 拟物写实 · Skeuomorphism (Rich Skeuo) — `/styles/32-skeuomorphism/`
旧 iOS 拟物：缝线皮革 + 毛毡 + 拉丝金属 + 玻璃凝胶按钮 + 木纹 + 雕版文字 + 真实多层投影/高光/斜面。primary 凝胶蓝 `#2f6fd0` / accent 黄铜 `#8a6a1e` / bg 亚麻 `#e7ddc9`·elevated `#fbf6ea` / fg `#2c2419`｜暗（夜间皮革/深木）primary `#5d97f0`(深字) / accent `#c9a259` / bg `#1f1a12`·fg `#efe6d2`｜6·12·18｜Inter + Noto Serif 雕版标签｜玻璃凝胶按钮(顶部高光+内阴影+斜面) + 缝线皮革面板 + 拉丝金属开关 + 浮雕输入；正文落实色面。与 08 新拟物（单色柔挤压）刻意区分（真实材质 + 色彩 + 光泽）。

### 33 构成主义 · Constructivism (Soviet Agitprop) — `/styles/33-constructivism/`
1920s 罗德琴科/利西茨基海报：红 + 黑 + 旧纸米色、斜切动势、粗黑规则线、红黑双色照片拼贴、重型无衬线。primary 构成红 `#c1271f` / accent 墨黑 `#1a1714` / bg 旧纸 `#ece4d3`·elevated `#f7f1e3` / fg `#1a1714`｜暗（夜间鼓动）primary `#e0392c` / accent 米白 `#f0e8d6` / bg `#15120e`·fg `#f0e8d6`｜0·0·2（锐）｜Inter 黑体大斜标题 + JetBrains Mono 大写口号｜斜切红楔 + 几何块 + 粗黑线 + 红黑双色照拼 + 星/喇叭/齿轮；红色仅大号粗体按钮、正文落米/墨；硬投影。与 23 包豪斯（嬉色正圆、正交）、20 瑞士（克制正交网格）刻意区分（红黑斜切鼓动）。

### 34 暗黑学院 · Dark Academia (Literary / Library) — `/styles/34-dark-academia/`
学院文学、烛光藏书：手稿纸 + 牛血红 + 瓶绿 + 烛光铜、衬线为主。primary 牛血红 `#7c2b22` / accent 瓶绿 `#2f4a32` / 铜 `#9a7b2e`(仅印章/装饰线) / bg 手稿纸 `#ece3d0`·elevated `#f6efdd` / fg 棕墨 `#2a2018`｜暗（烛夜书房）primary `#b8463a` / accent 苔绿 `#8fb07a` / 铜 `#c9a86a` / bg `#16110c`·fg `#ece0c8`｜3·6·10｜Noto Serif 为主 + Inter 小型大写标签 + JetBrains Mono 脚注号｜首字下沉 + 脚注/边注 + 火漆印章 + 缎带书签 + 藏书票/目录卡 + 花饰分隔线；正文落纸/墨、铜仅装饰。与 11 奢侈（极简炭金大留白）、07 编辑（现代赭橙阅读）刻意区分（更文学、更密、牛血红/瓶绿学院气）。

---

## 5. 6 个开源项目定制（哈哈全家桶）— `/projects/<slug>/`

| slug | 基底 | 主色 / 要点 |
|---|---|---|
| `hahatool` | 企业风 | brand 紫 `#7c3aed` 默认 + **4 主题切换**(sky/emerald/amber) + `--chart-*` 图表变量；AI 工具导航站 |
| `hahafree-research` | B 端风 | 玫瑰 `#9e4799` + 冷青 `#007985` 分析色 + 6 色 `--chart-*`；数据情报台、密集表 |
| `hahamail` | B 端风 | 邮件靛蓝 `#3d4eea`；SPF/DKIM/DMARC 徽章 + 路由规则表 + DNS 代码块 |
| `hahaagent` | 暗黑科技风 | 电光青蓝 `#22d3ee` + 紫 `#a78bfa`(暗色优先)；聊天/工具调用卡/Agent 状态灯/ANSI 日志 |
| `hahaclean` | 新拟物风 | 洁净薄荷 `#11806c`(文字用 `#0b6655`)；macOS 清理单窗、扫描结果、磁盘可视化 |
| `haha-soft-research` | 极简 editorial | 开源绿 `#0f7d5e` + 松石青 `#0e6f8a`；软件全家桶产品卡网格、文档排布 |

---

## 6. 每套 preview 含的展示区块（v2）

hero 大图 · 色板 · 字体比例 · 全状态组件（按钮/输入/卡片/徽章/Alert/表格/Tabs/Modal/Dropdown/Tooltip/Pagination/Toast/Stepper/Breadcrumb）· 图片用法（宽高比/媒体卡/画廊/图文/Overlay/头像）· 图标用法（内联 SVG 图标集，零 emoji）· 桌面多布局 · iPhone 17 Pro Max 移动布局。

## 7. 约束

零 emoji（图标一律内联 SVG）· 全部色对 WCAG AA · 离线自包含（仅依赖本仓库 `_fonts` 与 `_assets`）· `--ds-*` 变量名跨风格一致。

许可：MIT © 2026 mm-gogogo。
