# Aurora · 极光渐变 (Gradient Mesh)

> 大面积流动的极光渐变网格作为品牌表面， solid 白字与 solid 圆角卡片悬浮其上。适合 AI 平台、创意云、模型 API、开发者工具与高端数字产品。

---

## 1. 一句话气质

Aurora 是一套 dark-first 的现代 AI 品牌风格：靛蓝、紫、品红、青、青绿被揉成柔软的 gradient mesh，像极光一样铺满 hero 与关键品牌区；真正承载信息的按钮、卡片、表单与表格保持 solid surface，让文字稳定、清晰、可读。

---

## 2. 设计哲学 / 性格

继承 09 的比例尺、语义 token、状态色配对、焦点环、双主题与动效节奏，但把默认表面从 frosted glass 改成 solid card，把视觉主角交给背景的 gradient mesh。

1. **Mesh 是品牌表面**：大面积 radial / conic gradients 负责气质，界面控件不需要再半透明。
2. **Solid cards protect reading**：正文、表格、表单、弹层统一放在 `--ds-bg-elevated` 或 `--ds-bg-sunken` 上。
3. **No gradient text**：标题与正文永远是 solid color，避免 AI 品牌常见的廉价炫技感。
4. **Dark-first luminous**：默认主题是深夜极光；亮色主题是柔和日光版，不做纯白空泛页面。
5. **Glow is controlled**：阴影带轻微彩色辉光，但不进入 chrome、synthwave、Y2K water gel 或 glassmorphism。

---

## 3. 何时用 / 何时别用

**适合**
- AI 平台、模型 API、创意云、生成式工具、开发者控制台。
- 需要一眼看起来 premium、luminous、modern 的品牌型产品。
- 有 hero、dashboard、feature cards、pricing、docs portal 等组合场景。
- 希望用一个强视觉表面拉开品牌差异，但仍要保持组件系统可落地。

**别用**
- 金融后台、合规表格、超高密度运营系统，除非把 mesh 严格限制在营销区。
- 需要纸质、学术、古典或低刺激调性的内容产品。
- 要求所有界面都极简灰度、无装饰背景的 B 端工具。
- 无法接受 motion / glow / saturated brand surface 的项目。

---

## 4. 颜色

Aurora 的语义色是 solid token；gradient mesh 只使用装饰色标，不用于正文或按钮文字。

### 表面与文字

| Token | 暗色 :root | 亮色 `[data-theme="light"], .light` | 用途 |
|---|---|---|---|
| `--ds-bg` | `#0a0a14` | `#f6f5fc` | 页面主背景 |
| `--ds-bg-subtle` | `#11111f` | `#eceaf6` | 分组背景 |
| `--ds-bg-elevated` | `#16162a` | `#ffffff` | 卡片、弹层、导航、表格 |
| `--ds-bg-sunken` | `#050509` | `#e2def2` | 输入槽、代码块、内嵌区域 |
| `--ds-fg` | `#f0eefb` | `#14121f` | 主文字 |
| `--ds-fg-muted` | `#b4b2d2` | `#4a4660` | 次要文字 |
| `--ds-fg-subtle` | `#8482a4` | `#6a6688` | 弱文字、placeholder |
| `--ds-fg-on-accent` | `#0c0820` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#262446` | `#ddd9ee` | 常规描边 |
| `--ds-border-strong` | `#b9a8ff` | `#14121f` | 强描边、重点分隔 |

### 品牌与强调

| Token | 暗色 :root | 亮色 `[data-theme="light"], .light` | 用途 |
|---|---|---|---|
| `--ds-primary` | `#8b7bff` | `#5b3df0` | 主按钮、选中态 |
| `--ds-primary-hover` | `#9d8fff` | `#4f34d8` | hover |
| `--ds-primary-active` | `#7a6bf0` | `#4329bc` | pressed |
| `--ds-primary-fg` | `#0c0820` | `#ffffff` | 主按钮文字 |
| `--ds-accent` | `#22d3ee` | `#0a7186` | 链接、次强调 |
| `--ds-accent-fg` | `#04222a` | `#ffffff` | accent 上文字 |

暗色 primary / accent 使用深色文字是刻意选择：亮色按钮本身足够明亮，深色文字对比更稳。

### 语义状态

| 语义 | 暗色 主色 / 底 / 文字 | 亮色 主色 / 底 / 文字 |
|---|---|---|
| success | `#4fd38a` / `#072018` / `#c9f5dd` | `#1f8a5a` / `#e2f3ea` / `#0c3a26` |
| warning | `#ffce5a` / `#241c06` / `#f6e6be` | `#9a6a10` / `#f6ecd2` / `#43300a` |
| danger | `#ff6a8a` / `#2a0c14` / `#ffd6e0` | `#d23b5e` / `#fbe2e8` / `#551020` |
| info | `#5ab0ff` / `#08182e` / `#d6e8ff` | `#2f6fe0` / `#e2ebfb` / `#0e2c5e` |

### Gradient Mesh 装饰色

| 色标 | Hex | 用途 |
|---|---|---|
| indigo | `#6a5cff` | 深夜主光带 |
| violet | `#a87bff` | 过渡柔光 |
| magenta | `#e85cd0` | 品牌高能区域 |
| cyan | `#2ad6ee` | 冷色边缘与链接氛围 |
| teal | `#2ee6b0` | 平衡暖紫，避免一味紫蓝 |

这些色标只进入 decorative radial/conic gradients、orbs、ribbons、icon fills 或边框渐变，不进入标题文字。

---

## 5. 字体

- **Sans**：`"Inter",-apple-system,"PingFang SC",sans-serif`。Inter 支撑 AI / developer 品牌的现代感，中文回退到 PingFang SC。
- **Mono**：`"JetBrains Mono",monospace`，用于 token、数值、表格、API 片段。
- **Serif**：`"Noto Serif",serif`，仅在需要 editorial accent 时使用。
- **比例尺**：`12 / 13 / 14 / 16 / 20 / 24 / 32 / 48`。
- **字重**：`400 / 500 / 600`；不要用超黑字重压过 mesh。
- **字距**：`--ds-tracking-tight:-0.02em`、正文 `0`。中文正文不使用负字距。
- **行高**：标题 `1.2`、正文 `1.55`、长段落 `1.75`。

---

## 6. 间距与布局

- **比例尺**：`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`。
- **容器**：主内容 1120px 左右；hero / mesh 可 full-bleed，但内部内容必须约束。
- **布局节奏**：section 间距 `64px`；卡片内部 `24px` 起；数据表与表单保持中等密度。
- **Mesh 安全区**：文字区域要落在暗色 scrim 或 solid card 上；不要让 body copy 直接跨过复杂 mesh。
- **移动端**：mesh wrapper 使用 `overflow:hidden`，表格在 680px 以下横向内滚，不让页面产生横向滚动。

---

## 7. 圆角 / 阴影 / 描边

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `8px` | 按钮、输入、badge、表格行 |
| `--ds-radius-md` | `14px` | 卡片、菜单、小面板 |
| `--ds-radius-lg` | `22px` | hero、modal、大面板 |
| `--ds-radius-full` | `9999px` | pills、icon buttons、switch |
| `--ds-shadow-sm` | `0 2px 8px -2px rgba(0,0,0,.5)` | 小控件 |
| `--ds-shadow-md` | `0 12px 30px -10px rgba(0,0,0,.6)` | 常规卡片 |
| `--ds-shadow-lg` | `0 28px 60px -16px rgba(0,0,0,.7), 0 0 40px -10px rgba(139,123,255,.35)` | hero、浮层、重点卡 |

描边用 `--ds-border` 保持克制；一个重点 feature card 可以使用 1px gradient border accent，但只做边框，不做文字填充。

---

## 8. 动效

- **时长**：`fast 140ms / base 220ms / slow 360ms`。
- **曲线**：`cubic-bezier(.2,.8,.2,1)`。
- **典型过渡**：按钮轻微上浮、卡片阴影增强、tab 背景切换、mesh / orb / ribbon 慢速漂移。
- **Hero motion**：gradient mesh 和 orbs 可用 18s-28s 的慢速 alternate drift，幅度小。
- **Reduced motion**：`prefers-reduced-motion: reduce` 时关闭 drift animation，并把 transition 压到 0.01ms。

---

## 9. 组件规格

- **按钮 Button**：高 40px，`radius-sm`，primary 使用 `--ds-primary` + `--ds-primary-fg`；secondary 使用 solid `--ds-bg-elevated` + border；tertiary 透明底；danger 使用 `--ds-danger` + `--ds-fg-on-accent`。状态覆盖 default / hover / active / focus / disabled，触控目标至少 44px。
- **输入框 Input / Textarea / Select**：`--ds-bg-sunken`，1px `--ds-border`，高 42px，focus 使用 `--ds-focus-ring`。placeholder 用 `--ds-fg-subtle`。
- **卡片 Card**：solid `--ds-bg-elevated`，1px border，`radius-md/lg`，`shadow-md`；重点卡可加 1px mesh gradient border。
- **徽章 / 标签 Badge**：语义 `-bg` + `-fg`，`radius-full`，前置 SVG dot 或线性图标。
- **提示条 Alert**：语义 `-bg` + `-fg`，左侧 inline SVG 图标，禁止用 emoji 图标。
- **导航 Nav / Tabs**：solid pill nav；选中态使用 `--ds-bg-elevated` 和 `--ds-primary`。
- **表格 Table**：header muted uppercase，数字 tabular，移动端保留内部横滑。
- **移动端 Demo**：`.dvc17` frame 由 `../../_assets/device.css` 提供；只在屏幕内容层使用 Aurora token。

---

## 10. 可访问性

- **对比度**：正文 ≥4.5:1，大字 / 图标 ≥3:1。`--ds-fg`、`--ds-fg-muted`、`--ds-fg-subtle` 分别在两个主题背景与 solid card 上满足 AA 使用目标。
- **Mesh 只装饰**：正文不直接放在 busy mid-mesh 上；hero 白字必须处于最暗区域或有 scrim。
- **No gradient text**：禁止 `background-clip:text`、`-webkit-text-fill-color:transparent` 等渐变文字写法。
- **焦点可见**：所有按钮、表单、tab、菜单项使用 `--ds-focus-ring`。
- **触控目标**：按钮、icon button、switch、tab、分页不小于 44px。
- **Motion**：慢漂移动效必须支持 reduced motion。

---

## 11. Do / Don't

**Do**
- 用大面积 gradient mesh 建立第一视觉信号。
- 把正文放在 solid cards、solid nav、solid tables 上。
- 用 mesh hues 做 orbs、ribbons、borders、icon fills，而非文字填充。
- 让暗色主题先成立，再调亮色主题的 pastel mesh。
- 对 hero 文案加 scrim 或把文案放在暗区。

**Don't**
- 不要用 gradient text；Aurora 的字是 solid、干净、可读的。
- 不要把卡片做成 frosted glass；这会变回 09 glassmorphism。
- 不要加 neon grid；那会变成 synthwave。
- 不要加 metallic chrome bevel；那会变成 acid-chrome。
- 不要用大面积 flat color blocks 替代 mesh；那会靠近 dopamine 风格。
- 不要让正文跨过高饱和、明暗交错的 mesh 中区。

---

## 12. 如何接入

1. **引入本地字体与 tokens**
   ```html
   <link rel="stylesheet" href="../../_fonts/fonts.css">
   <link rel="stylesheet" href="./tokens.css">
   ```

2. **直接用变量**
   ```css
   .aurora-card {
     background: var(--ds-bg-elevated);
     color: var(--ds-fg);
     border: 1px solid var(--ds-border);
     border-radius: var(--ds-radius-md);
     box-shadow: var(--ds-shadow-md);
   }
   ```

3. **亮色主题**
   ```html
   <html data-theme="light">
   ```
   `:root` 默认是 dark；亮色可用 `[data-theme="light"]` 或 `.light`。

4. **Tailwind 项目**
   ```js
   // tailwind.config.js
   module.exports = { presets: [require('./styles/42-aurora/tailwind.preset.js')] }
   ```
   ```html
   <div class="bg-bg-elevated text-fg border border-border rounded-md shadow-md">
     Solid Aurora card
   </div>
   ```

5. **机器消费**
   `tokens.json` 提供同一套语义 token、mesh hue、radius、space、font、shadow、motion，可用于 Style Dictionary 或自定义构建。
