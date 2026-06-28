# Acid Chrome · 酸性镀铬

> Dark-first Y2K Chrome / Acid Graphics kit for fictional music labels, club nights, streetwear drops, sneaker capsules, and energy-drink activations: acid-lime action color, liquid chrome hero wordmark, iridescent blobs, glossy 3D metal, and chunky rounded controls.

---

## 1. 一句话气质

Acid Chrome 像一张早 2000s rave 海报被铸进液态金属：默认是近黑夜场底，lime 负责行动信号，violet/cyan/magenta 只做虹彩装饰，chrome 只在 hero wordmark 与 3D object 中成为视觉主角。正文、表格、表单和真实组件都保持 solid token 色，确保 edgy 但可读。

---

## 2. 设计哲学 / 性格

继承 19-y2k-aqua 的 Quicksand 圆体、舒展间距、双主题、表单/卡片/移动端 demo 结构；改写水光为更锋利的酸性镀铬：

1. **Dark-first**：`:root` 是 acid chrome night，`[data-theme="light"], .light` 是 chrome-on-white daylight。
2. **Chrome 是签名，不是正文样式**：gradient-clip text 仅用于 hero wordmark；普通标题和正文全部用 solid token 色。
3. **Lime 是行动信号**：primary lime 用深色字，按钮、选中、focus 都清楚可见。
4. **虹彩只做填充**：blob、chip、divider、SVG 金属物体可用 lime/violet/cyan/magenta/silver；不要把小字压在虹彩上。
5. **厚圆角 + glossy shadow**：8/16/28 圆角与高光阴影让界面像被液态金属包边。

---

## 3. 何时用 / 何时别用

**适合**
- 音乐厂牌后台、club night 活动页、票务 / guest list / lineup 控制台。
- 街头服饰、球鞋、限量 capsule、能量饮品联名的 drop 页面。
- 需要 Y2K、rave、metallic、acid、edgy 气质的高冲击消费界面。

**别用**
- 医疗、财务、政务、严肃 B 端长表格场景。
- 想要 synthwave outrun 网格、cyberpunk pink glitch、或 calm Frutiger Aero 水蓝胶感时。
- 大量长文阅读、低刺激品牌、奢侈品留白型视觉系统。

---

## 4. 颜色

### Dark `:root` · Acid Chrome Night

| Token | 值 | 用途 |
|---|---:|---|
| `--ds-bg` | `#0a0c0a` | 主背景 |
| `--ds-bg-subtle` | `#11140f` | 区块底 |
| `--ds-bg-elevated` | `#161a13` | 卡片 / 弹层 |
| `--ds-bg-sunken` | `#050604` | 输入槽 / 代码块 |
| `--ds-fg` | `#eaffea` | 主文字 |
| `--ds-fg-muted` | `#a8c4a0` | 次要文字 |
| `--ds-fg-subtle` | `#7e9874` | 弱文字 / 占位 |
| `--ds-border` | `#283022` | 常规描边 |
| `--ds-border-strong` | `#b6ff3a` | 强描边 / lime signal |
| `--ds-primary` | `#b6ff3a` | 主操作 |
| `--ds-accent` | `#a85cff` | 次强调 / 大字链接 |

### Light `[data-theme="light"], .light` · Chrome Daylight

| Token | 值 | 用途 |
|---|---:|---|
| `--ds-bg` | `#f4f6f0` | 主背景 |
| `--ds-bg-subtle` | `#e9ede2` | 区块底 |
| `--ds-bg-elevated` | `#ffffff` | 卡片 / 弹层 |
| `--ds-bg-sunken` | `#dde2d4` | 输入槽 / 代码块 |
| `--ds-fg` | `#14180e` | 主文字 |
| `--ds-fg-muted` | `#44503a` | 次要文字 |
| `--ds-fg-subtle` | `#5f6e52` | 弱文字 / 占位 |
| `--ds-border` | `#d2dac6` | 常规描边 |
| `--ds-border-strong` | `#14180e` | 强描边 |
| `--ds-primary` | `#4a8a00` | 主操作 |
| `--ds-accent` | `#7b2ff0` | 次强调 |

### 语义状态

| 语义 | Dark 主色 / 底 / 文字 | Light 主色 / 底 / 文字 |
|---|---|---|
| success | `#6ee07a` / `#06220e` / `#c9f5cd` | `#1f8a4c` / `#e2f3e8` / `#0c3a20` |
| warning | `#ffd23a` / `#241c00` / `#fff0b8` | `#8a6a00` / `#f6eece` / `#3e3000` |
| danger | `#ff5f6e` / `#260a0e` / `#ffd2d6` | `#c0322a` / `#f8e2df` / `#551410` |
| info | `#4bc8ff` / `#06202a` / `#cdeeff` | `#1f6fd0` / `#e2ebfb` / `#0e2c5e` |

Decorative-only hues: lime `#b6ff3a`, violet `#a85cff`, cyan `#4bc8ff`, magenta `#ff5cc8`, chrome silver `#c8d2dc`.

---

## 5. 字体

- **Sans**：`"Quicksand","Inter",-apple-system,"PingFang SC",sans-serif`。Quicksand 提供 chunky rounded Y2K 标题和按钮气质；Inter / system fallback 保证小字可读。
- **Mono**：`"JetBrains Mono",monospace`，用于数值、tokens、表格。
- **比例尺**：`12 / 13 / 14 / 16 / 20 / 24 / 32 / 48`。
- **字重**：`400 / 500 / 600`。
- **行高**：`1.2 / 1.55 / 1.75`。
- **字距**：token 保留 `--ds-tracking-tight:-0.02em` 以兼容合同；preview 正文和组件标题不依赖负字距。

---

## 6. 间距与布局

- **4px 基**：`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`。
- **容器**：主 preview 宽约 1120px；hero 与桌面/移动 demo 在同一节奏内铺开。
- **卡片间距**：`space-6` 为默认卡组间距，`space-7` 用于大面板内边距。
- **移动端**：表格横滑，整页禁止横向滚动；hero wordmark 用 `clamp()` 和分行 span 控制宽度。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：`sm 8px / md 16px / lg 28px / full 9999px`。
- **Dark 阴影**：`sm 0 2px 8px -2px rgba(0,0,0,.5)`；`md 0 12px 28px -10px rgba(0,0,0,.6)`；`lg 0 24px 56px -16px rgba(0,0,0,.7), 0 0 32px -8px rgba(182,255,58,.3)`。
- **Light 阴影**：更短、更干净，避免白底上过度 glow。
- **描边**：常规 border 低对比，strong border 在 dark 中直接承担 lime 边缘信号。
- **Gloss**：`--ds-gloss-top` 作为组件高光；chrome wordmark 和 SVG object 使用独立金属渐变，不进入正文层。

---

## 8. 动效

- **时长**：`fast 140ms / base 220ms / slow 360ms`。
- **曲线**：`cubic-bezier(.2,.8,.2,1)`。
- **典型动效**：button hover 上浮 1px + lime halo；holographic blobs 慢速 morph；hero wordmark 有 specular sweep。
- **Reduced motion**：`prefers-reduced-motion: reduce` 下关闭 blob morph 与 wordmark shimmer，并压低过渡时间。

---

## 9. 组件规格

- **Button**：primary 使用 lime gel gradient、深色文字、`radius-md`、40px 高；hover 加 lime halo；focus 使用 `--ds-focus-ring`。secondary 是 chrome slab，tertiary 透明，danger 用 semantic red gradient。
- **Input / Textarea / Select**：`bg-sunken`、1px border、`radius-sm`、42px 高；focus 双环。
- **Card**：`bg-elevated` 实色承载正文，上层只加轻高光与局部 lime glow。
- **Badge / Tag**：语义 `-bg` + `-fg`，小圆点 SVG，`radius-full`。
- **Alert**：语义底色、前置 SVG 图标、1px border；不使用左侧粗色条。
- **Nav / Tabs**：pill 容器，选中态用 strong border + solid token 文本。
- **Hero signature**：液态 chrome wordmark + iridescent blobs + inline SVG chrome object；必须同时有 plain solid heading。

---

## 10. 可访问性

- 正文对比按 WCAG AA：`--ds-fg`、`--ds-fg-muted` 在两套背景上均用于正文；`--ds-fg-subtle` 只放占位、辅助信息或较大文字。
- Dark primary `#b6ff3a` 使用 `#0a1400` 文字；Light `#4a8a00` 与白字用于大字 / bold signal，preview 的小号 primary 按钮用更深的 hover/active 绿渐变承载白字。
- Violet accent 在小字中不要当正文色；用于大字 / bold link 或装饰填充。
- Chrome wordmark 是装饰展示中心，真实标题仍是 solid text。
- 触控目标保持约 44px，focus ring 清晰，reduced motion 可关闭装饰动效。

---

## 11. Do / Don't

**Do**
- 把 chrome wordmark 限定在 hero。
- 用 lime 表达行动、选中、focus。
- 用虹彩 blob / chip 做装饰，不承载小字。
- 在图片上加 scrim 与实色卡，确保文字 AA。
- 让 daylight 主题像 chrome-on-white，而不是简单反相。

**Don't**
- 不要做 synthwave outrun 网格，那属于 27-synthwave。
- 不要做 pink glitch cyberpunk，那属于 13-cyberpunk。
- 不要回到 calm blue water-gel，那属于 19-y2k-aqua。
- 不要把正文做成渐变字或 chrome 字。
- 不要让 acid lime 覆盖所有组件，否则会变成单色荧光主题。

---

## 12. 如何接入

1. 引入本地字体与 tokens：
   ```html
   <link rel="stylesheet" href="../../_fonts/fonts.css">
   <link rel="stylesheet" href="./tokens.css">
   ```
2. 使用变量：
   ```css
   .acid-card {
     background: var(--ds-bg-elevated);
     color: var(--ds-fg);
     border: 1px solid var(--ds-border);
     border-radius: var(--ds-radius-md);
     box-shadow: var(--ds-shadow-md), var(--ds-gloss-top);
   }
   ```
3. 切换 daylight：
   ```html
   <html data-theme="light">
   ```
4. Tailwind：
   ```js
   module.exports = { presets: [require('./styles/40-acid-chrome/tailwind.preset.js')] }
   ```
