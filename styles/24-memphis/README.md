# Memphis · 孟菲斯风设计系统

> 80s postmodern 的快乐秩序：暖白底、黑色粗描边、teal / hot pink / yellow / terracotta 糖果色几何、波浪线、斜纹、圆点、碎石纹。适合想显得大胆、鲜活、反常规但仍然可读的消费体验。

---

## 1. 一句话气质

像一家名叫 Zigzag Sundae Club 的冰淇淋电玩屋：按钮像贴纸，卡片像拼贴，背景散着几何纸屑；文字始终落在干净表面上，图案负责气氛，不抢正文阅读。

---

## 2. 设计哲学 / 性格

Memphis 继承基础系统的固定 `--ds-*` 契约、4px 间距、圆润 Quicksand 字体、亮暗双主题与可见焦点环；改的是视觉气质和组件姿态。

1. **快乐的不对称**：构图允许错位、倾斜和几何散点，但内容区仍保持清晰栅格。
2. **黑色描边定型**：按钮、卡片、图案边缘用 `--ds-border-strong` 加粗描边，避免多色变成松散噪音。
3. **图案只做配角**：圆点、斜纹、波浪线、terrazzo 只用于装饰面或空白区，不承载正文。
4. **糖果色有语义**：teal 做主操作，hot pink 做强调，yellow / terracotta 仅做装饰，不拿来放正文。
5. **轻弹但克制**：沿用共享基线的轻微回弹曲线，hover 有贴纸感，`prefers-reduced-motion` 下关闭位移。

---

## 3. 何时用 / 何时别用

**适合**

- 活动站、设计节、展览、冰淇淋/玩具/街机/潮流零售等高记忆点消费场景。
- 需要“反常规、年轻、欢乐、手工拼贴感”的品牌界面。
- 卡片、活动报名、会员任务、轻量仪表盘和移动端社区界面。

**不适合**

- 金融、政务、医疗、法务等需要严肃稳定感的业务。
- 高密度长期阅读、复杂数据分析或必须极低视觉噪声的 B 端生产力工具。
- 需要极简高级、纪律几何或温柔粉色气质的项目；分别使用 minimal / bauhaus / cute 更合适。

---

## 4. 颜色

强调色梯度（亮）：`primary #0a7575 -> hover #086565 -> active #064f4f`，主操作文字为白色。暗色提高彩度，`primary #2bc4c4` 搭配深青文字 `#06201f`。

### 表面与文字

| Token | 亮 | 暗 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#f7f3ec` | `#16151c` | 主背景 |
| `--ds-bg-subtle` | `#efe9dd` | `#1e1d26` | 分组底、弱面 |
| `--ds-bg-elevated` | `#fffdf8` | `#232230` | 卡片、弹层 |
| `--ds-bg-sunken` | `#e8e0d0` | `#100f15` | 输入槽、代码块 |
| `--ds-fg` | `#15151a` | `#f3eee4` | 主文字 |
| `--ds-fg-muted` | `#4a4954` | `#aba6b6` | 次要文字 |
| `--ds-fg-subtle` | `#6e6c78` | `#847f90` | 占位、弱说明 |
| `--ds-fg-on-accent` | `#ffffff` | `#06201f` | 落在强调色上的文字 |
| `--ds-border` | `#ddd5c5` | `#322f3c` | 常规描边 |
| `--ds-border-strong` | `#15151a` | `#f3eee4` | 黑/反白粗描边 |

### 品牌与强调

| Token | 亮 | 暗 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#0a7575` | `#2bc4c4` | 主操作、选中 |
| `--ds-primary-hover` | `#086565` | `#4dd2d2` | hover |
| `--ds-primary-active` | `#064f4f` | `#1fa8a8` | active |
| `--ds-primary-fg` | `#ffffff` | `#06201f` | 主操作文字 |
| `--ds-accent` | `#d61f69` | `#ff5c9d` | 链接、次强调 |
| `--ds-accent-fg` | `#ffffff` | `#2a0814` | accent 上文字 |

### 语义状态

| 状态 | 主色（亮 / 暗） | 背景 `-bg`（亮 / 暗） | 背景上文字 `-fg`（亮 / 暗） |
|---|---|---|---|
| success | `#1f8a4d` / `#4cc26a` | `#e2f4e9` / `#0c2614` | `#0a3a24` / `#c9f5d4` |
| warning | `#b06a00` / `#ffd23f` | `#fbeccf` / `#241c00` | `#4a2e00` / `#fff0bf` |
| danger | `#d4322d` / `#ff6b66` | `#f9e3e1` / `#2a0e0d` | `#5a1310` / `#ffd4d1` |
| info | `#1d6fd0` / `#5a9fe8` | `#e3edf9` / `#0e1f38` | `#0e2a55` / `#d6e6f8` |

### Decorative Memphis Extras

| Token | 亮 | 暗 | 用途 |
|---|---|---|---|
| `--ds-memphis-yellow` | `#f5c518` | `#ffd23f` | 几何纸屑、圆点、斜纹块 |
| `--ds-memphis-terracotta` | `#e8590c` | `#ff7a3d` | 半圆、blob、terrazzo 碎片 |

`--ds-memphis-yellow` 和 `--ds-memphis-terracotta` 仅作装饰，不用于正文、按钮文字或状态文字。

---

## 5. 字体

- **Sans**：`"Quicksand","Inter",-apple-system,"PingFang SC",sans-serif`。圆润几何字形贴近 Memphis 的玩具感，中文回退到 PingFang SC 保持清晰。
- **Mono**：`"JetBrains Mono",monospace`。用于 token 名、数字和技术标签。
- **比例尺**：12 / 13 / 14 / 16 / 20 / 24 / 32 / 48px，继承共享基线。
- **字重**：500 / 600 / 700。标题用 700，正文 500，按钮和标签 600。
- **字距**：`tight 0`、`normal 0.01em`。不使用负字距，避免圆体挤压。
- **中文适配**：中文标题建议 600 或 700；长正文不要放在斜纹、圆点或碎石纹上。

---

## 6. 间距与布局

- **比例尺**：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96。
- **容器**：preview 使用 1120px 主容器；卡片栅格用 `auto-fit / auto-fill minmax()`。
- **构图**：内容区保持栅格，装饰图形在容器内部绝对定位并 `overflow:hidden`，避免 390px 手机横向溢出。
- **节奏**：组内 8–12px，组间 16–24px，区块间 48–64px。Memphis 可以乱，但信息层级不能乱。
- **图案面**：圆点、斜纹、波浪边和 terrazzo 面适合做 header、thumbnail、空态、分割带；文字必须另放在实色卡片或干净区域。

---

## 7. 圆角 / 阴影 / 描边

| Token | 值 | 说明 |
|---|---|---|
| `--ds-radius-sm` | `6px` | 输入框、小标签、菜单项 |
| `--ds-radius-md` | `12px` | 卡片、菜单、Toast |
| `--ds-radius-lg` | `20px` | Hero、弹层、大面板 |
| `--ds-radius-full` | `9999px` | 胶囊按钮、头像、徽章 |

- **描边**：交互组件建议 `2px solid var(--ds-border-strong)`，形成贴纸式黑边。
- **阴影**：亮色为暖黑半透明投影；暗色为深底沉影。复杂图案面优先用描边，不叠重阴影。
- **贴纸层次**：按钮可用 `box-shadow: 4px 4px 0 var(--ds-border-strong)`，active 时压到 `2px 2px 0`。

---

## 8. 动效

- **时长**：fast 200ms / base 260ms / slow 320ms，继承共享基线。
- **曲线**：`cubic-bezier(.34,1.56,.64,1)`，轻微回弹，适合贴纸式 hover。
- **典型动效**：按钮 hover 上移 2px、卡片轻微旋转或抬升、装饰纸屑慢速 wobble。
- **减弱动效**：`prefers-reduced-motion: reduce` 下关闭 wobble、位移、旋转和回弹，只保留必要颜色变化。

---

## 9. 组件规格

### 按钮

| 变体 | 背景 | 文字 | 边框 | hover | active | disabled |
|---|---|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | 2px `--ds-border-strong` | `--ds-primary-hover` + 贴纸上移 | `--ds-primary-active` + 阴影收短 | 50% 透明 |
| secondary | `--ds-bg-elevated` | `--ds-fg` | 2px `--ds-border-strong` | `--ds-bg-subtle` | 轻微下压 | 50% 透明 |
| tertiary | 透明 | `--ds-fg-muted` | 2px transparent | subtle 底 | subtle 底加深 | 50% 透明 |
| danger | `--ds-danger` | 白色或 `--ds-danger-fg` 语义底 | 2px `--ds-border-strong` | 加深 | 下压 | 50% 透明 |

尺寸：sm 32px / md 40px / lg 48px；按钮和图标按钮命中区至少 44px。

### 输入框

- 高 40px，圆角 `--ds-radius-sm`，底 `--ds-bg-elevated`，边 `2px solid var(--ds-border-strong)`。
- focus 使用 `--ds-focus-ring`，边框转 `--ds-primary`。
- 错误态使用 `--ds-danger` 边框与 `--ds-danger-fg` 文案。

### 卡片

- 底 `--ds-bg-elevated`，边 `2px solid var(--ds-border-strong)`，圆角 `--ds-radius-md`，可加 offset shadow。
- 卡片 thumbnail 可使用圆点、斜纹、squiggle 或 terrazzo；正文必须在实色面上。

### 徽章 / 标签

- 圆角 `full`，字号 xs/sm，字重 700。
- 语义徽章用 `<state>-bg` + `<state>-fg`；品牌徽章用 primary 或 accent。

### Alert

- 四态使用 `<state>-bg`、`<state>-fg`、`<state>` 描边。
- 配内联 SVG 图标，不用 emoji；文案同时说明状态，不能只靠颜色。

### 导航

- 顶栏底色使用 `color-mix` 的 `--ds-bg` 半透明层，底边 `--ds-border-strong`。
- Tab 选中项使用 `--ds-primary` 胶囊或 3px 粗下划线；移动端折叠菜单按钮保持 44px 命中区。

---

## 10. 可访问性

- **对比度**：正文 `--ds-fg` / `--ds-bg` 在亮暗主题均超过 4.5:1；主按钮、accent、状态底文字组合按 AA 设计。
- **装饰色限制**：yellow / terracotta 不用于正文文字。需要文字时使用 `--ds-fg`、`--ds-primary-fg`、`--ds-accent-fg` 或状态 `-fg`。
- **焦点**：统一 `--ds-focus-ring`，不要被 `overflow:hidden` 裁掉交互控件焦点环。
- **触控**：按钮、菜单项、移动端底部 tab 和图标按钮命中区 >= 44px。
- **动效**：所有 wobble、旋转、位移必须受 `prefers-reduced-motion` 控制。
- **信息表达**：状态组件同时使用颜色、图标和文案。

---

## 11. Do / Don't

**Do**

- 用黑色粗描边、错位贴纸和几何纸屑建立 Memphis 识别度。
- 把正文放在实色卡片上，图案只放周边、header、缩略图或分割带。
- 让 teal / pink / yellow / terracotta 分工明确，避免每个组件都满色。
- 使用内联 SVG 画 squiggle、zigzag、三角、半圆、blob，不用 emoji。
- 在移动端把装饰裁在容器内，防止横向滚动。

**Don't**

- 不要把文字直接压在圆点、斜纹、terrazzo 或多色 blob 上。
- 不要把 yellow / terracotta 当正文色或长段说明色。
- 不要把几何排得像 Bauhaus 的纪律网格；Memphis 需要更松、更错位。
- 不要回到软粉风、柔影和心形语言。
- 不要用外链字体、CDN 图标库或第三方图片。
- 不要只换主色而保留普通卡片样式；黑边、图案和错位构图必须出现。

---

## 12. 如何接入

```html
<link rel="stylesheet" href="./styles/24-memphis/tokens.css" />
```

```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border: 2px solid var(--ds-border-strong);
  border-radius: var(--ds-radius-full);
  box-shadow: 4px 4px 0 var(--ds-border-strong);
  font-family: var(--ds-font-sans);
  font-weight: var(--ds-weight-bold);
  transition:
    transform var(--ds-dur-fast) var(--ds-ease),
    background var(--ds-dur-fast) var(--ds-ease),
    box-shadow var(--ds-dur-fast) var(--ds-ease);
}
```

```js
// tailwind.config.js
module.exports = {
  presets: [require("./styles/24-memphis/tailwind.preset.js")]
};
```

暗色主题可用任一方式驱动：

```html
<html data-theme="dark">
<html class="dark">
```
