# Stark Mono · 极简黑白设计系统 Kit

Blackline Type Lab 的界面风格：纯黑白与中性灰、剧烈字号、1px 发丝线、大留白、反相按钮，只有语义状态允许出现色相。

## 1. 一句话气质

Stark Mono 是一套面向研究实验室、类型档案、极简编辑工具与高信任产品界面的黑白风格：gallery white 亮色、true black 暗色，去掉品牌色，用排版重量、边界与留白制造确定感。

## 2. 设计哲学 / 性格

- **无品牌色纪律**：primary、accent、背景、文字、描边全部保持灰阶；success / warning / danger / info 是唯一 chroma。
- **类型先于装饰**：用 Inter 的大字级、800 字重、`-0.03em` 以内紧字距建立气势，而不是靠渐变、插画或彩色点缀。
- **1px 发丝线系统**：区块、表格、卡片、输入框以 hairline 区隔；阴影只作为功能层级，不做视觉装饰。
- **反相即强调**：亮色里黑底白字，暗色里白底黑字；按钮和选中态靠正负空间变化表达状态。
- **继承 Geist 式语义骨架，改掉温和感**：仍使用固定 `--ds-*` token、双主题、可访问焦点环；但放大字号、压低圆角、去掉品牌 chroma。

## 3. 何时用 / 何时别用

适合：

- 类型工具、研究档案、模型评估台、编辑器、命令中心。
- 需要显得克制、精准、权威、现代的品牌或产品。
- 内容本身有强视觉资产，界面需要退后但保持强控制感。
- 需要亮暗主题都稳定可读的离线/内部系统。

不适合：

- 依赖品牌主色、活动气氛或彩色营销识别的页面。
- 儿童、游戏、生活方式、电商促销等需要亲和力和情绪色彩的产品。
- 把所有状态都做成黑白，导致错误、警告、成功无法被快速识别的场景。
- 想要 20-swiss 的红色网格、26-newspaper 的纸媒质感，或 03-enterprise 的蓝色柔和 SaaS 感。

## 4. 颜色

所有颜色一律通过 `--ds-*` 变量使用。除四组语义状态外，不要添加任何色相；图表、导航、选中、hover 也使用灰阶。

### 表面与文字

| Token | Light | Dark | 用途 |
|---|---:|---:|---|
| `--ds-bg` | `#ffffff` | `#000000` | 页面主背景 |
| `--ds-bg-subtle` | `#f4f4f5` | `#0c0c0e` | 区块底、分组底 |
| `--ds-bg-elevated` | `#ffffff` | `#161618` | 卡片、菜单、弹层 |
| `--ds-bg-sunken` | `#e9e9eb` | `#000000` | 输入槽、代码块、灰底选中 |
| `--ds-fg` | `#0a0a0a` | `#fafafa` | 正文主文字 |
| `--ds-fg-muted` | `#52525b` | `#a1a1aa` | 次级文字 |
| `--ds-fg-subtle` | `#71717a` | `#71717a` | 元信息、占位、辅助说明 |
| `--ds-border` | `#e4e4e7` | `#27272a` | 常规 1px 描边 |
| `--ds-border-strong` | `#0a0a0a` | `#fafafa` | 强规则线、关键边界 |

### 品牌与强调（灰阶）

| Token | Light | Dark | 用途 |
|---|---:|---:|---|
| `--ds-primary` | `#0a0a0a` | `#fafafa` | 主按钮、当前项、关键图形 |
| `--ds-primary-hover` | `#27272a` | `#e4e4e7` | hover |
| `--ds-primary-active` | `#000000` | `#ffffff` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#0a0a0a` | primary 上文字 |
| `--ds-accent` | `#3f3f46` | `#a1a1aa` | 链接、次强调 |
| `--ds-accent-fg` | `#ffffff` | `#0a0a0a` | accent 上文字 |

强调梯度不是彩色梯度，而是灰阶阶梯：`#ffffff` → `#f4f4f5` → `#e9e9eb` → `#71717a` → `#3f3f46` → `#0a0a0a`。暗色反向使用 `#000000` → `#0c0c0e` → `#161618` → `#71717a` → `#a1a1aa` → `#fafafa`。

### 语义状态（唯一 chroma）

| Token | Light | Dark | 用途 |
|---|---:|---:|---|
| `--ds-success` / `-bg` / `-fg` | `#2f7d46` / `#eaf2ec` / `#11371f` | `#4ec06a` / `#0c2614` / `#cdeccf` | 成功、完成、可用 |
| `--ds-warning` / `-bg` / `-fg` | `#8a6300` / `#f4ecd6` / `#3e2d00` | `#e0b250` / `#241a06` / `#f6e6be` | 警告、等待、容量 |
| `--ds-danger` / `-bg` / `-fg` | `#c4302a` / `#f7e3e1` / `#551310` | `#f0584e` / `#2a0c0a` / `#ffd6d2` | 错误、破坏操作 |
| `--ds-info` / `-bg` / `-fg` | `#2257cc` / `#e6ecfa` / `#0c2356` | `#5b8cf0` / `#0a1630` / `#d6e2fb` | 信息提示、系统通知 |

## 5. 字体

- Sans：`"Inter", -apple-system, "PingFang SC", sans-serif`。Inter 承担大标题和正文，中文回退到苹方。
- Mono：`"JetBrains Mono", monospace`。只用于编号、token、时间、金额、表格数字和少量 micro-label。
- Serif：`"Noto Serif", Georgia, "Songti SC", serif`。可选，只用于长文或引用，不用于核心 UI。
- 比例尺：`12 / 13 / 14 / 16 / 22 / 28 / 40 / 64px`；`2xl` 与 `3xl` 明显大于 Swiss，用于标题和关键数字。
- 字重：`400 / 600 / 800`；展示标题与 KPI 用 800，正文保持 400，操作文字用 600。
- 字距：`--ds-tracking-tight: -0.03em`，不要更紧；中文标题可使用同一 token，但避免全段大写式挤压。

## 6. 间距与布局

- 间距沿用 20-swiss 的 4px 基：`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`。
- 内容容器建议 `1100px` 左右；编辑器或数据台可扩展到 `1280px`，仍保持 1px 规则线。
- 页面区块使用大留白：桌面 section 建议 `64–96px` 垂直节奏，移动端收敛到 `40–64px`。
- 网格可以严格，但不能像 Swiss 那样依赖红色轴线；Mono 的秩序来自黑白边界、字号层级与留白。
- 表格数字、KPI、价格、时间必须开启 tabular numerals，优先使用 mono 或 `font-variant-numeric: tabular-nums`。

## 7. 圆角 / 阴影 / 描边

| Token | Value | 说明 |
|---|---:|---|
| `--ds-radius-sm` | `2px` | 按钮、输入、图标按钮 |
| `--ds-radius-md` | `4px` | 卡片、菜单、小容器 |
| `--ds-radius-lg` | `8px` | 弹层、手机内容面板 |
| `--ds-radius-full` | `9999px` | 开关、头像、pill |
| `--ds-shadow-sm` | `0 0 0 1px var(--ds-border)` | 默认 hairline |
| `--ds-shadow-md` | `0 1px 2px rgba(...)` | 功能弹层的轻微层级 |
| `--ds-shadow-lg` | `0 8px 24px -10px rgba(...)` | 模态、菜单等必要层级 |

默认不要用装饰性阴影制造高级感。卡片、表格、输入框优先使用 `border:1px solid var(--ds-border)`；强分隔用 `--ds-border-strong`。

## 8. 动效

- 缓动：`cubic-bezier(.22,.61,.36,1)`，继承 20-swiss 的克制功能动效。
- 时长：`150ms / 200ms / 250ms`。hover 与 focus 使用 fast，菜单/弹层使用 base 或 slow。
- 动效只表达状态变化：按钮反相、边框加强、菜单出现、开关移动。
- 必须支持 `@media (prefers-reduced-motion: reduce)`，将动画和 transition 时长降到接近 0。

## 9. 组件规格

### 按钮 Button

- Primary：`background: var(--ds-primary)`，`color: var(--ds-primary-fg)`；亮色为黑底白字，暗色为白底黑字。
- Secondary：白/黑底 + `--ds-border-strong`，hover 只改变背景或边框，不引入色相。
- Tertiary：透明底，适合低优先级操作；pressed 可反相或使用 `--ds-bg-sunken`。
- Danger：只用于破坏性操作，必须使用 `--ds-danger`，不要把 danger 当品牌色。
- 尺寸：sm 32px、md 40px、lg 48px；触控场景实际点击区域不低于 44px。

### 输入框 Input / Textarea / Select

- 高度 40px，边框使用 `--ds-border-strong`，背景用 `--ds-bg`。
- focus 使用 `--ds-focus-ring`，亮色黑环、暗色白环。
- error 只使用 danger 语义色；placeholder 使用 `--ds-fg-subtle`。

### 卡片 Card

- 背景 `--ds-bg-elevated`，1px `--ds-border`，半径 `--ds-radius-md`。
- hover 不上浮、不投影；只允许强化边框或轻微换底。
- 指标数字使用 `--ds-text-2xl` 以上和 tabular numerals。

### 徽章 / 标签 Badge

- Neutral 用灰阶，状态 badge 使用对应 `-bg` / `-fg`。
- Primary badge 是黑白反相，不是品牌色。

### 提示条 Alert

- success / warning / danger / info 四种语义完整保留。
- 标题 600 或 800，正文继承同色系 `-fg`，边框使用主状态色。

### 导航 Navigation

- 当前项使用黑白反相、底线或强边框；不要用蓝底或红线。
- tab、侧栏、分页都保持 1px 规则线与 mono 数字。

## 10. 可访问性

- 亮色正文 `#0a0a0a` on `#ffffff`、暗色正文 `#fafafa` on `#000000` 均远高于 WCAG AA。
- `--ds-fg-muted` 与主背景在亮暗主题均满足正文 AA；`--ds-fg-subtle` 用于元信息或较大文本，避免承载关键正文。
- primary 按钮：亮色 `#ffffff` on `#0a0a0a`，暗色 `#0a0a0a` on `#fafafa`，均满足 AA。
- 状态色的 `-fg` 与 `-bg` 已按提示条与 badge 场景设置为 AA 可读。
- 焦点环必须可见，不能移除；键盘可达组件要保留 `:focus-visible`。
- 触控目标建议 ≥44px，移动端按钮可通过 padding 或外层 hit area 扩大。

## 11. Do / Don't

Do：

- 用黑、白、灰建立层级，把 chroma 留给语义状态。
- 用大标题、超大数字、mono 标签和发丝线制造识别度。
- 让图片和媒体资产灰阶化，避免意外品牌色污染界面。
- 在亮暗主题中分别检查 primary、focus、badge、alert 的对比。
- 明确区别于 20-swiss：不要红色主轴；区别于 26-newspaper：不要纸张纹理与报刊衬线主导；区别于 03-enterprise：不要蓝色柔和 SaaS 气质。

Don't：

- 不要把 info 蓝用于导航、图表或普通选中态；info 只表示信息提示。
- 不要添加紫、蓝、红、金等品牌强调色。
- 不要用重阴影、渐变 orb、彩色插画或彩色装饰线。
- 不要把 mono label 放到每个 section 头部；少量、精确使用即可。
- 不要把标题字距压得比 `-0.03em` 更紧，移动端尤其容易溢出。

## 12. 如何接入

**1) 引入 tokens.css（任意项目）**

```html
<link rel="stylesheet" href="./styles/44-mono/tokens.css" />
```

或：

```js
import "./styles/44-mono/tokens.css";
```

**2) 在组件中只使用变量**

```css
.panel {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 1px solid var(--ds-border);
  border-radius: var(--ds-radius-md);
}

.primaryAction {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
}
```

**3) 切换暗色**

```js
document.documentElement.dataset.theme = "dark";
// 或 document.documentElement.classList.toggle("dark")
```

**4) Tailwind 项目**

```js
// tailwind.config.js
module.exports = {
  presets: [require("./styles/44-mono/tailwind.preset.js")],
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
};
```

仍需在入口引入 `tokens.css` 提供变量。预览页 `preview.html` 只链接本仓库的 `../../_fonts/fonts.css` 与 `../../_assets/device.css`，其余展示逻辑离线可用。

*Stark Mono Kit · 示范实体 Blackline Type Lab / Null Archive · 基于固定 `--ds-*` 语义契约 · 变量契约见 `_base/KIT-TEMPLATE.md`*
