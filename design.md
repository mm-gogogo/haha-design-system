# 哈哈设计系统 · design.md

> 一个可直接「加载成 skill / context」的多风格设计系统规范。基于 [Geist (Vercel)](https://vercel.com/geist) 衍生。
> 在线：https://design.hahaha.chat ｜ 本文件：https://design.hahaha.chat/design.md ｜ 源码：https://github.com/mm-gogogo/haha-design-system
>
> **怎么用（给 AI/agent）**：把本文件整篇读入即可。它完整定义了 `--ds-*` Token 契约 + 18 套风格的关键取值 + 6 个项目定制 + 接入方式。
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

## 4. 18 套通用风格（关键取值；完整值见各 tokens.css）

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
