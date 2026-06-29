# 磁贴 · Metro / Modern Flat Tiles · 设计系统

> A light-first, square-tile interface for **格栅 · Grid Hub**, a fictional personal start-page and news + productivity hub. It is stark, flat, typographic, and built from vivid solid-color rectangles.

---

## 1. 标题 + 一句话气质

**磁贴 · Metro / Modern Flat Tiles** 是一套直角、纯色、强排版的界面语言。它用大面积白底、黑色正文、细线图标和高饱和磁贴组织信息；不靠圆角、玻璃、渐变或投影制造层级，所有层次都来自色块尺寸、留白、分隔线和文字对比。

English summary: **Metro / Modern Flat Tiles** is a confident flat-tile system: square edges, no drop shadows, oversized lightweight headers, small all-caps labels, and live-tile grids in saturated solid colors.

---

## 2. 设计哲学 / 性格

1. **Flat first.** 所有卡片、按钮、输入框、表格容器都保持直角，阴影 token 全部为 `none`。界面要像一组排版清晰的平面海报，而不是一叠浮起面板。
2. **Tiles do the work.** 重要入口用边到边的矩形磁贴承载：大字号白色标签、细线 SVG 图标、明确的纯色背景。磁贴可以大小不一，但不要带装饰外框。
3. **Typography as panorama.** 标题采用轻字重、超大字号、宽松行距，允许在桌面端向边缘延展；小节标签使用全大写、字距拉开，形成清晰的导航感。
4. **White space is structure.** 亮色默认是 stark white。分组靠 `#f2f2f2`、`#e6e6e6`、细线和留白区分，不引入复杂纹理。
5. **Motion stays mechanical.** 只做轻微 tile hover / press 与加载时的错落显现；开启减弱动效时立即停用位移与动画。

---

## 3. 何时用 / 何时别用

**适合：**
- 个人起始页、新闻聚合、任务中心、仪表盘、快捷入口页。
- 需要高可扫读性、强入口感、低装饰成本的产品界面。
- 想让颜色承担品牌记忆，同时保持组件实现简单的设计系统。

**不适合：**
- 依赖柔和曲面、拟物质感、玻璃质感或照片氛围的品牌页。
- 需要大量小字号压在彩色背景上的金融、法务、医疗正文界面。
- 希望通过圆角和投影制造亲和感的消费级社交产品。

---

## 4. 颜色

亮色为默认主题；暗色是纯黑底的高对比覆盖。所有语义 token 均保留 `--ds-*` 变量名。

### 表面与文字 / Surfaces and Text

| Token | Light | Dark | 用途 |
| --- | --- | --- | --- |
| `--ds-bg` | `#ffffff` | `#000000` | 页面主背景 |
| `--ds-bg-subtle` | `#f2f2f2` | `#0d0d0d` | 分组底、次级区域 |
| `--ds-bg-elevated` | `#ffffff` | `#1a1a1a` | 卡片、菜单、面板 |
| `--ds-bg-sunken` | `#e6e6e6` | `#000000` | 输入槽、代码块、低层区域 |
| `--ds-fg` | `#1b1b1b` | `#ffffff` | 主文字 |
| `--ds-fg-muted` | `#565656` | `#c8c8c8` | 次要文字 |
| `--ds-fg-subtle` | `#676767` | `#a0a0a0` | 占位、弱说明 |
| `--ds-fg-on-accent` | `#ffffff` | `#06121f` | 强调色块上的文字 |
| `--ds-border` | `#d6d6d6` | `#2b2b2b` | 常规描边 |
| `--ds-border-strong` | `#b3b3b3` | `#3f3f3f` | 强分隔线 |

### 品牌与强调 / Brand and Accent

| Token | Light | Dark | 用途 |
| --- | --- | --- | --- |
| `--ds-primary` | `#0067c0` | `#4ca3ee` | 主操作、选中态、链接 |
| `--ds-primary-hover` | `#005ba1` | `#6cb6f2` | hover |
| `--ds-primary-active` | `#004e8c` | `#3a8fd6` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#06121f` | 主操作上的文字 |
| `--ds-accent` | `#008272` | `#57c7b8` | 次强调、辅助入口 |
| `--ds-accent-fg` | `#ffffff` | `#04201c` | accent 上的文字 |

### 语义状态 / Semantic Status

| 语义 | 主色 Light / Dark | 背景 Light / Dark | 文字 Light / Dark |
| --- | --- | --- | --- |
| success | `#107c10` / `#6ccb5a` | `#dff6dd` / `#122b10` | `#0b5a0b` / `#b6e6ab` |
| warning | `#8a5300` / `#e0b25e` | `#fdf3d6` / `#2a2010` | `#5c3700` / `#f3d79a` |
| danger | `#c42b1c` / `#ff99a4` | `#fde7e9` / `#2c1416` | `#8a1d12` / `#ffc9cf` |
| info | `#0067c0` / `#4ca3ee` | `#e1eefb` / `#08283f` | `#004e8c` / `#bfe0fb` |

### Decorative Tile Colors

这些颜色不是 `--ds-*` token，只用于 live-tile grid 的装饰磁贴。磁贴文字必须白色、粗体、至少 18px：azure `#0078d4`、emerald `#107c10`、magenta `#b4009e`、orange `#d83b01`、purple `#5c2d91`、teal `#008272`、crimson `#c42b1c`、cobalt `#0050ef`。

---

## 5. 字体

- **Sans:** `Inter` 为主，中文回退到本地系统无衬线。大标题使用 300 轻字重，正文建议 400，磁贴标签使用 700。
- **Mono:** `JetBrains Mono` 用于数据、token 名、时间、表格数字。
- **Serif:** 仅保留作为低频回退，不作为本风格的表达重点。
- **Scale:** `12 / 13 / 14 / 16 / 20 / 24 / 32 / 48`。页面级 panorama 标题可在组件样式中单独放大，但 token 比例尺保持稳定。
- **Tracking:** token 字距为 `0`；全大写小标签可在组件层使用正字距。
- **Numbers:** 数据密集区域使用 `font-variant-numeric: tabular-nums`。

---

## 6. 间距与布局

- **Spacing scale:** `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`。
- **Tile grid:** 使用 CSS Grid，允许 2x1、1x2、2x2 和 1x1 组合；磁贴之间保持 8–16px 间隔。
- **Container:** 桌面端主容器建议 1120–1200px；panorama 标题可突破常规视觉宽度，但正文仍控制在 64ch 内。
- **List view:** 列表不用卡片堆叠，采用全宽行、细分隔线、左侧小图标或状态方块。
- **Mobile:** 手机首页优先展示 tile start-screen，底部导航与搜索也保持直角。

---

## 7. 圆角 / 阴影 / 描边

- **Radius:** `sm / md / lg` 全部为 `0`。磁贴、卡片、按钮、输入框、表格、图片裁切全部直角。
- **Full radius:** `--ds-radius-full: 999px` 仅用于头像、状态圆点、设备状态小点等少量必要场景。
- **Shadow tokens:** `sm / md / lg` 全部为 `none`。不要用 drop shadow 表达层级。
- **Borders:** 常规分隔使用 `--ds-border`，需要更强边界时用 `--ds-border-strong`。描边应细、直、清晰。

---

## 8. 动效

- **Hover:** 磁贴 hover 可轻微上移或切换到更深纯色；active 回落 1px。
- **Reveal:** 页面加载时磁贴可按 grid 顺序错落显现，使用 `opacity + transform`。
- **Duration:** `fast 120ms`、`base 180ms`、`slow 320ms`。
- **Reduced motion:** 必须用 `prefers-reduced-motion` 禁用位移和动画。

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. 组件规格

### Buttons
- **Primary:** 背景 `--ds-primary`，文字 `--ds-primary-fg`，直角，高 40，hover 使用 `--ds-primary-hover`，active 使用 `--ds-primary-active`。
- **Secondary:** 白底或透明底，`1px --ds-border-strong`，hover 切 `--ds-bg-subtle`。
- **Quiet:** 无边框，文字用 `--ds-primary`，hover 用浅蓝信息底。
- **Danger:** 背景 `--ds-danger`，文字白色或暗色主题中指定的高对比文字。

### Inputs
- 高 44，直角，背景 `--ds-bg-sunken`，`1px --ds-border`。Focus 使用 `--ds-focus-ring`，占位文字用 `--ds-fg-subtle`。

### Tiles / Cards
- 信息卡统一称为 tile：直角、无投影、可带 `1px` 边框或纯色背景。彩色入口 tile 使用白色粗体大标签。

### Badges
- 直角小标签，高 24，语义浅底 + 语义文字；不要做胶囊形。

### Alerts
- 直角容器，左侧细线图标 + 标题 + 文案。背景用 `*-bg`，文字用 `*-fg`，边框用对应主色。

### Navigation
- 顶部导航用直线 active indicator；侧边栏项用整块色底表示选中。图标全部为内联线性 SVG。

---

## 10. 可访问性

- **Contrast:** 正文对比度 ≥ 4.5:1；大号粗体磁贴标签 ≥ 3:1。
- **Focus:** 所有可交互元素必须有可见焦点环。
- **Touch target:** 触控目标不小于 44x44px。
- **Motion:** 遵循 `prefers-reduced-motion`。
- **Semantics:** 仅图标按钮必须带 `aria-label`；状态信息同时用文字与图标表达。

---

## 11. Do / Don't

**Do**
- 用实色矩形磁贴承载主入口。
- 让大标题保持轻字重、宽松行高、强留白。
- 使用细线图标、全大写小节标签、清晰分隔线。
- 让图片也服从直角裁切和规则网格。
- 保持亮色优先，暗色使用纯黑背景与饱和 tile 色。

**Don't**
- 不要给 tile、card、button、input 加圆角。
- 不要添加 drop shadow、长投影、玻璃模糊或渐变。
- 不要把小字号正文压到高饱和彩色磁贴上。
- 不要用表情符号充当图标。
- 不要引用真实平台或公司作为风格来源。

---

## 12. 如何接入

1. **引入 tokens.css**
   ```html
   <link rel="stylesheet" href="styles/46-metro/tokens.css" />
   <link rel="stylesheet" href="_fonts/fonts.css" />
   ```

2. **在组件里使用变量**
   ```css
   .tile-action {
     background: var(--ds-primary);
     color: var(--ds-primary-fg);
     border-radius: var(--ds-radius-sm);
     box-shadow: var(--ds-shadow-sm);
     transition: background var(--ds-dur-fast) var(--ds-ease),
       transform var(--ds-dur-fast) var(--ds-ease);
   }

   .tile-action:hover {
     background: var(--ds-primary-hover);
     transform: translateY(-2px);
   }
   ```

3. **切换主题**
   给 `<html>` 设置 `data-theme="dark"` 或 `.dark` 类。

4. **Tailwind 项目**
   ```js
   module.exports = {
     presets: [require("./styles/46-metro/tailwind.preset.js")],
     content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
   };
   ```

Use `bg-primary text-primary-fg rounded-sm shadow-sm` 等工具类时，几何和阴影会从本 kit 的 token 得到直角与纯平结果。
