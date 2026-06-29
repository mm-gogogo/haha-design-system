# 天文星图 · Celestial Star-Atlas

> 子午星图 · Meridian Sky Atlas 的界面风格：古典天文制图、铜版刻线、午夜靛蓝星空、古金星座连线与冷蓝注记。它像一页被精确校勘的 18 世纪星图档案，而不是发光控制台。

## 1. 一句话气质

Celestial Star-Atlas 是一套面向天文馆、观测档案、星表检索、夜空教育与精密文化机构的暗色优先设计系统：深夜星图为默认，冷调纸图为亮色；所有层级依靠细线、星点、坐标网格和衬线排版建立秩序。

## 2. 设计哲学 / 性格

- **古典星图，不是未来界面**：视觉线索来自手工雕刻星图、Bayer 式星座标注、敦煌星图的连续坐标秩序。主操作色是古金，辅助注记是冷蓝。
- **刻线即结构**：卡片、表格、按钮和图形边界用 1px hairline 与轻微压痕区分层级，不靠模糊阴影或发亮描边。
- **星点有等级**：星点半径、透明度和标签承载信息层级；亮星、暗星、星座线、黄道弧、赤经/赤纬网格各有清晰权重。
- **Serif 承担仪式感**：展示标题和拉丁星座名使用 `Noto Serif`，正文仍用 `Inter` 保持界面清晰，RA/Dec、星等和编号交给 `JetBrains Mono`。
- **继承固定契约**：仍使用同一套 `--ds-*` 语义 token、双主题、可见焦点环、状态色成组与 4px 间距尺度；改变的是气质、色值、圆角与组件表达。

## 3. 何时用 / 何时别用

适合：

- 天文馆、观测站、星表档案、历史科学展览、夜空教育产品。
- 需要精确、安静、文化感和高可信度的检索 / 数据 / 展陈界面。
- 暗色为主、需要长时间观察图形和坐标的工具。
- 有拉丁星名、坐标、编号、纸质图版或古典科学视觉资产的品牌。

不适合：

- 大众促销、电商、儿童娱乐、生活方式品牌等需要高亲和和强活动感的场景。
- 依赖高饱和渐变、大面积插画、发光霓虹或厚重投影的营销视觉。
- 超高密度实时监控产品；本风格强调档案阅读与制图秩序，而非紧急调度。
- 需要暖米色羊皮纸质感的复古主题；本亮色版是冷调浅蓝灰天文纸，不是奶油色。

## 4. 颜色

`:root` 默认暗色；`[data-theme="light"]` / `.light` 是亮色纸图覆盖；`[data-theme="dark"]` / `.dark` 与 `:root` 同值。

### 表面与文字

| Token | Dark 默认 | Light 覆盖 | 用途 |
|---|---:|---:|---|
| `--ds-bg` | `#0b1026` | `#eaecf4` | 页面主背景：午夜靛蓝 / 冷蓝灰纸面 |
| `--ds-bg-subtle` | `#0e1430` | `#e2e5f0` | 分组底、导航底、轻区块 |
| `--ds-bg-elevated` | `#161c3c` | `#f7f8fc` | 卡片、弹层、星图图版 |
| `--ds-bg-sunken` | `#070a1c` | `#dadeec` | 输入槽、代码块、坐标 chip |
| `--ds-fg` | `#e9e7f6` | `#181c30` | 主文字 |
| `--ds-fg-muted` | `#aaacce` | `#474c69` | 次级文字、小标签正文 |
| `--ds-fg-subtle` | `#7e81a6` | `#6a6f8e` | 大号水印、非关键注记、图形辅助字 |
| `--ds-fg-on-accent` | `#07131c` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#272e54` | `#ccd2e4` | 常规 1px 刻线、网格 |
| `--ds-border-strong` | `#3c4577` | `#aab2cf` | 强分隔、焦点附近边界 |

### 品牌与强调

| Token | Dark | Light | 用途 |
|---|---:|---:|---|
| `--ds-primary` | `#d4a94a` | `#876219` | 主操作、星座线、黄道主弧 |
| `--ds-primary-hover` | `#e2b95e` | `#6f5113` | hover |
| `--ds-primary-active` | `#c19a3c` | `#5c4310` | active / pressed |
| `--ds-primary-fg` | `#1a1530` | `#ffffff` | primary 上文字 |
| `--ds-accent` | `#74bcd8` | `#2a6b86` | 冷蓝注记、链接、辅助坐标 |
| `--ds-accent-fg` | `#07131c` | `#ffffff` | accent 上文字 |

强调梯度是铜版金属感：dark `#c19a3c -> #d4a94a -> #e2b95e`；light `#5c4310 -> #876219 -> #6f5113`。亮色主题把金色压暗，保证白字和纸面链接都可读。

### 语义状态

| 语义 | Dark 主 / bg / fg | Light 主 / bg / fg |
|---|---|---|
| success | `#7bb893` / `#16261d` / `#aee0bf` | `#2f7d54` / `#e2f0e7` / `#14502f` |
| warning | `#e0b25e` / `#2a2010` / `#f3d79a` | `#8a6410` / `#f5ecd6` / `#5a4108` |
| danger | `#e08a80` / `#2c1614` / `#f4b8b0` | `#b23b30` / `#f6e2df` / `#7d2019` |
| info | `#74bcd8` / `#0e2530` / `#b0e0f0` | `#2a6b86` / `#ddeef4` / `#134456` |

状态色像档案批注：低饱和、可读、和主星图不抢。

### 焦点

| Token | 值 |
|---|---|
| `--ds-focus` | dark `#d4a94a` / light `#876219` |
| `--ds-focus-ring` | `0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus)` |

焦点环是两层清晰描边，不使用模糊光晕。键盘导航必须保留。

## 5. 字体

- Sans：`"Inter", -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif`。用于正文、表单、导航和密集 UI。
- Serif：`"Noto Serif", Georgia, "Songti SC", serif`。用于 H1、章节展示标题、星图铭文和拉丁星座名；星座名建议 italic。
- Mono：`"JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace`。用于 RA/Dec、星等、编号、表格数字、坐标 chip。
- 比例尺：`12 / 13 / 14 / 16 / 20 / 24 / 32 / 48px`。展示标题不追求巨大营销感，保持像图版标题。
- 字重：`400 / 500 / 600`。Serif 标题用 600，正文 400，操作文字 500 或 600。
- 字距：`--ds-tracking-tight` 与 `--ds-tracking-normal` 均为 `0`。只在少量 mono 小标签中通过组件级样式增加正字距。
- 中文适配：中文正文走系统中文无衬线；星图铭文可用 `Noto Serif` + 宋体回退，但不要整段小字衬线化。

## 6. 间距与布局

- 间距保持 4px 基：`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`。
- 页面容器建议 `1120–1240px`；星图图版可用较宽区域，表格与表单保持 14px base 的紧凑节奏。
- 组内 8–12px，卡片内 20–24px，章节间 64px。移动端章节间距收至 40–48px。
- 栅格使用 12 列或 `auto-fit minmax()`；星表列表允许两列或三列，但坐标字段必须右对齐并开启 tabular numerals。
- 背景网格只做极淡赤经/赤纬暗示，不能盖过正文。

## 7. 圆角 / 阴影 / 描边

| Token | Value | 说明 |
|---|---:|---|
| `--ds-radius-sm` | `3px` | 按钮、输入框、chip |
| `--ds-radius-md` | `6px` | 卡片、菜单、表格容器 |
| `--ds-radius-lg` | `10px` | 大图版、弹层、设备内面板 |
| `--ds-radius-full` | `999px` | pill、星等 badge、头像 |
| `--ds-shadow-sm` | `0 0 0 1px border, 0 1px 0 ...` | 发丝线 + 轻压痕 |
| `--ds-shadow-md` | `0 0 0 1px border, 0 1px 0 ..., inset ...` | 抬起图版 |
| `--ds-shadow-lg` | `0 0 0 1px strong, 0 2px 0 ..., inset ...` | 弹层与 hero 图版 |

描边是主角：星图面板、按钮、输入框、表格、弹层都先用 `border:1px solid var(--ds-border)` 建立结构。阴影不做装饰性模糊，只保留像纸张压线一样的层级。

图标统一为内联 SVG：`viewBox="0 0 24 24"`、`stroke="currentColor"`、线宽约 `1.7`、圆帽圆角或刻线端点；禁止用彩色 emoji 充当图标。

## 8. 动效

- 缓动：`cubic-bezier(.22,.61,.36,1)`，像翻动档案页一样克制。
- 时长：fast `140ms`，base `220ms`，slow `360ms`。
- 常见过渡：按钮底色/边框切换、图版边线加强、菜单淡入、主题切换。
- 可有一处非常轻的 CSS 星点闪烁，但必须在 `prefers-reduced-motion: reduce` 下完全关闭。
- 不要用扫描、脉冲、闪烁大面积循环、模糊外光或炫技路径动画。

## 9. 组件规格

### 按钮 Button

- Primary：底 `--ds-primary`，字 `--ds-primary-fg`，边框同主色；hover 用 `--ds-primary-hover`，active 用 `--ds-primary-active`。
- Secondary：透明或 `--ds-bg-elevated`，`1px --ds-border-strong`，hover 边框转主色。
- Tertiary：透明底，字 `--ds-fg-muted`，hover 使用 `--ds-bg-subtle`。
- Danger：底 `--ds-danger`，字在 dark/light 均需 AA；只用于破坏性操作。
- 尺寸：sm 32px、md 40px、lg 48px；移动触控命中区不低于 44px。

### 输入 Input / Textarea / Select

- 背景 `--ds-bg-sunken`，边框 `--ds-border`，圆角 sm。
- focus 使用 `--ds-focus-ring`，边框转 `--ds-focus`。
- placeholder 不承载关键说明；关键帮助文字用 `--ds-fg-muted`。
- RA/Dec、星等、编号输入可切换到 mono。

### 卡片 Card

- 背景 `--ds-bg-elevated`，`1px --ds-border`，圆角 md，阴影 `--ds-shadow-md`。
- 卡片标题可用 serif，数据标签用 mono。
- 卡片内可放星点、刻线、坐标 chip，但不要再嵌套一层装饰卡。

### 徽章 / 标签 Badge

- Neutral：`--ds-bg-subtle` + `--ds-fg-muted` + `--ds-border`。
- 语义 badge：使用对应 `-bg` / `-fg` / 主色描边。
- 星等、RA/Dec、赤纬范围使用 mono + tabular numerals。

### 提示条 Alert

- 四种语义完整保留；底色用 `<sem>-bg`，文字用 `<sem>-fg`，边框用 `<sem>`。
- 前置线性 SVG 图标，图标颜色用语义主色。
- 不使用粗色条；像档案校注一样轻但清晰。

### 导航 Navigation

- 顶栏：`--ds-bg-subtle` + 下边线；当前项使用主色细下划线或刻线框。
- 侧栏：选中项左侧细线 + `--ds-bg-elevated`。
- Tab / segmented：选中项使用浅抬起底与主色边线，不使用厚重填充。

### 表格 Table

- 表头用 mono 小标签，背景 `--ds-bg-subtle`。
- 坐标与数值列右对齐，`font-variant-numeric: tabular-nums`。
- 行 hover 只轻微换底或加强边线；不要上浮。

### 星图图版 Star Plate

- 主画面使用内联 SVG：星点按星等分级，星座线用 `--ds-primary`，坐标网格用 `--ds-border`，黄道/天赤道弧分层。
- 拉丁星座名用 serif italic；RA/Dec 和 mag 用 mono。
- 角落可放 astrolabe / compass-rose ornament，但必须是细线图形。

### 弹层 / 菜单 / Tooltip

- 底 `--ds-bg-elevated`，边 `--ds-border-strong`，阴影 `--ds-shadow-lg` 或 `--ds-shadow-md`。
- 入场只做淡入或 4px 内位移，reduced-motion 下关闭。
- Tooltip 是补充说明，不承载唯一关键信息。

## 10. 可访问性

- 主文字：dark `#e9e7f6` on `#0b1026`、light `#181c30` on `#eaecf4` 均远超 AA。
- 次文字：dark `#aaacce`、light `#474c69` 在主背景和卡片背景上均满足正文 AA。
- `--ds-fg-subtle` 只用于大号水印、非关键注记或图形辅助字；小号正文使用 `--ds-fg-muted`。
- primary 按钮文字：dark `#1a1530` on `#d4a94a`、light `#ffffff` on `#876219` 均满足 AA。
- 状态提示的 `-fg` / `-bg` 成组设计，badge 与 alert 均需保留文字标签，不只靠颜色。
- 焦点环必须保留；所有可交互 SVG 按钮需有 `aria-label`。
- 触控目标建议 ≥44px；移动底部导航和列表行必须达到。
- `prefers-reduced-motion` 下关闭星点闪烁和所有装饰性动画。

## 11. Do / Don't

Do：

- 用深午夜靛蓝、古金发丝线、冷蓝注记建立星图身份。
- 用 serif italic 写拉丁星座名，用 mono 写 `RA 19h 50m`、`Dec +08deg`、`mag 1.25`。
- 用星点大小、线宽、网格透明度表达层级。
- 让亮色版像冷调天文纸图，而不是暖色羊皮纸。
- 用内联 SVG 做图标、星图、星盘、刻线装饰。
- 检查暗色和亮色中按钮、表格、badge、alert 的对比。

Don't：

- 不要使用模糊外光、霓虹渐变、厚投影或大面积透明玻璃效果。
- 不要把所有文字都换成衬线；正文和操作仍需要清晰 sans。
- 不要把星图背景做得太密，坐标网格必须退后。
- 不要用 emoji 做星星、月亮、罗盘或状态图标。
- 不要把亮色版做成米黄、奶油、羊皮纸或棕橙复古。
- 不要硬编码组件色值；组件一律消费 `var(--ds-*)`。

## 12. 展示页 / 图片与图标用法

`preview.html` 是离线展示页：顶部包含子午星图 hero、内联 SVG 星图图版、Tonight 数据面板、星表列表、黄道环、完整组件、图版使用、图标使用、桌面多布局与 iPhone 17 Pro Max 移动布局。

图版使用 section 不依赖外部图片，而用内联 SVG 展示可替代图片资产的星图、星盘、档案切片和观测图版。这样能保证风格统一、离线可用，并满足所有图标/艺术资产都由 SVG 控制。

预览页只链接本仓库本地 `../../_fonts/fonts.css` 与 `../../_assets/device.css`，其余视觉与交互均内联实现。

## 13. 如何接入

**1) 引入 tokens.css**

```html
<link rel="stylesheet" href="./tokens.css" />
```

默认即暗色。需要亮色纸图时，在根节点或容器上加：

```html
<html data-theme="light">
```

切回暗色：移除该属性，或显式 `data-theme="dark"`。

**2) 在组件中只使用变量**

```css
.plate {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 1px solid var(--ds-border);
  border-radius: var(--ds-radius-md);
  box-shadow: var(--ds-shadow-md);
}

.plate-title {
  font-family: var(--ds-font-serif);
  color: var(--ds-primary);
}
```

**3) Tailwind 项目**

```js
module.exports = {
  presets: [require("./tailwind.preset.js")],
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
};
```

仍需在入口引入 `tokens.css` 提供变量。

*Celestial Star-Atlas Kit · 示范实体 子午星图 Meridian Sky Atlas · 基于固定 `--ds-*` 语义契约 · 变量契约见 `_base/KIT-TEMPLATE.md`*
