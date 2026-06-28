# Collage · 拼贴手帐风设计系统

> Warm tactile paper craft for travel journals, memory apps, craft shops, and recipe zines: kraft/cream paper, washi tape, torn edges, polaroid frames, pins, clips, dashed stitches, and small layered rotations.

---

## 1. 一句话气质

Collage 像一本被认真翻过的旅行手帐：底色是温暖的 kraft/cream paper，组件像剪下来的纸片，被纸胶带、回形针和图钉轻轻固定。它保留轻快圆体基底，但转为更成熟的纸张、相片、票根与手工拼贴。

---

## 2. 设计哲学 / 性格

1. **先是纸，再是界面**：大多数正文落在 `--ds-bg-elevated` 或 `--ds-bg-subtle` 的稳定纸面上，纹理保持低调。
2. **装饰只负责气味**：tape、pin、clip、torn edge、stitch 是识别度来源，但不承载正文和关键状态。
3. **小角度才手作**：旋转控制在约 `-2deg` 到 `2deg`，像手工贴歪一点，而不是让布局失控。
4. **轻松但不幼态**：继承 Quicksand 的圆润，搭配 Noto Serif 标签感，避免落入高饱和甜美风。
5. **夜间是 corkboard**：暗色不是反白纸张，而是夜间工作台和软木板氛围，primary/accent 使用深色文字以保证对比。

---

## 3. 何时用 / 何时别用

**适合**
- 旅行手帐、记忆归档、照片整理、食谱 zine、独立手作商店、课程工作坊。
- 需要表达温暖、手作、收集感、个人化、慢节奏的产品。
- 中低密度内容页面、卡片流、编辑器、相册、素材库。

**不适合**
- 高密度金融、政务、严肃 B 端后台，或需要极强中性权威感的产品。
- 大量实时数据监控和复杂表格操作，装饰会降低扫描效率。
- 需要极简 editorial 或 calm luxury 的场景；Collage 更有材料感和层次。

---

## 4. 颜色

强调梯度（亮）：`#b5503a -> #9e4530 -> #853a28`。强调梯度（暗）：`#e07a5f -> #ea8e74 -> #d06a4f`。装饰胶带色只用于视觉点缀，不用于正文。

### 亮色 Light

| Token | Value | 用途 |
|---|---:|---|
| `--ds-bg` | `#f3ece0` | kraft 主背景 |
| `--ds-bg-subtle` | `#eae0cf` | 分组底、便签底 |
| `--ds-bg-elevated` | `#fffdf7` | 卡片、polaroid、弹层 |
| `--ds-bg-sunken` | `#e2d6c0` | 输入槽、凹陷区域 |
| `--ds-fg` | `#2c2620` | 正文主文字 |
| `--ds-fg-muted` | `#5c5446` | 次要正文、说明 |
| `--ds-fg-subtle` | `#7a7060` | 非正文提示、disabled、较大标签 |
| `--ds-border` | `#dccdb2` | 常规纸边 |
| `--ds-border-strong` | `#2c2620` | stitch / 强边 |
| `--ds-primary` | `#b5503a` | 主操作、图钉红土色 |
| `--ds-accent` | `#2f6f8c` | 链接、蓝色回形针 |

### 暗色 Dark

| Token | Value | 用途 |
|---|---:|---|
| `--ds-bg` | `#1e1913` | night journal 背景 |
| `--ds-bg-subtle` | `#261f17` | corkboard 分组底 |
| `--ds-bg-elevated` | `#2c241a` | 暗色纸卡 |
| `--ds-bg-sunken` | `#15110b` | 凹陷区域 |
| `--ds-fg` | `#f0e7d6` | 暗色主文字 |
| `--ds-fg-muted` | `#b4a890` | 暗色次要文字 |
| `--ds-fg-subtle` | `#847a66` | 非正文提示、disabled、较大标签 |
| `--ds-border` | `#3a3022` | 暗色常规边 |
| `--ds-border-strong` | `#f0e7d6` | 暗色 stitch / 强边 |
| `--ds-primary` | `#e07a5f` | 主操作 |
| `--ds-accent` | `#5fa8c4` | 链接、回形针 |

### 语义状态

| 状态 | 亮色 `main / bg / fg` | 暗色 `main / bg / fg` |
|---|---|---|
| success | `#4a8a3a / #e8f1e0 / #1a3a12` | `#6fbf6f / #102a10 / #cdeec0` |
| warning | `#9a6a14 / #f6ead0 / #43300a` | `#e8b85a / #241a06 / #f6e6be` |
| danger | `#b5503a / #f7e4de / #551c10` | `#e07a5f / #2a0f08 / #f8d6c8` |
| info | `#2f6f8c / #e2eef2 / #0e2e3a` | `#5fa8c4 / #08222c / #cfeaf2` |

### 装饰色

| Token | Light | Dark | 用途 |
|---|---:|---:|---|
| `--ds-decor-tape-mustard` | `#d8a23a` | `#e8b85a` | washi tape |
| `--ds-decor-tape-sage` | `#7a9a5e` | `#9ab87a` | washi tape |
| `--ds-decor-tape-pink` | `#d98ca0` | `#e8a4b8` | washi tape |

---

## 5. 字体

- **Sans**：`"Quicksand","Inter",-apple-system,"PingFang SC",sans-serif`。圆润、轻快，适合手帐产品的亲和感。
- **Serif**：`"Noto Serif", Georgia, serif`。用于 polaroid caption、label、field note，增加 journal 触感。
- **Mono**：`"JetBrains Mono",monospace`。用于 token、编号、日期、票根代码。
- **字号**：xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48。
- **字重**：normal 500 / medium 600 / bold 700，保持 Quicksand 的轻快厚度。
- **字距**：沿用基底 token `tight 0` / `normal 0.01em`；组件 CSS 不使用负字距。
- **中文适配**：中文正文落 PingFang SC，标题可用 600/700；serif 只用于短标签和 caption。

---

## 6. 间距与布局

- **比例尺**：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96。
- **布局节奏**：组内 8-12px，卡片内 20-24px，区块间 48-64px。纸张层叠时优先增加留白，不靠扩大旋转解决层次。
- **容器宽**：preview 使用约 1120px；产品落地建议主内容 960-1200px。
- **栅格**：卡片 `auto-fill minmax(280px,1fr)`，色板 `minmax(168px,1fr)`，移动端统一收单列。
- **层叠规则**：主内容层在下，tape/pin/clip 作为绝对定位装饰层，始终限制在父容器内，避免 390px 宽度横向溢出。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：`sm 3px` 控件/照片内角，`md 8px` 卡片/菜单，`lg 14px` 大面板，`full 9999px` 头像/小圆点。
- **阴影亮色**：`sm 0 1px 2px rgba(44,38,32,.12)`，`md 0 6px 16px -6px rgba(44,38,32,.22)`，`lg 0 14px 32px -10px rgba(44,38,32,.28)`。
- **阴影暗色**：`sm 0 1px 2px rgba(0,0,0,.5)`，`md 0 6px 16px -6px rgba(0,0,0,.6)`，`lg 0 14px 32px -10px rgba(0,0,0,.7)`。
- **描边**：常规纸边用 `--ds-border`；stitched/dashed edge 用 `--ds-border-strong`，但线宽保持 1px。
- **Polaroid**：白/暗纸面外框 + 厚底边 + serif caption；图片内角小，外框不大圆。

---

## 8. 动效

- **时长**：fast 200ms / base 260ms / slow 320ms。
- **曲线**：`cubic-bezier(.34,1.56,.64,1)`，来自轻快基底，但使用更小的位移。
- **典型过渡**：按钮 hover `rotate(-.4deg) translateY(-1px)`；卡片 hover `translateY(-3px)`；便签/照片仅 1-2deg 小角度。
- **Reduced motion**：`prefers-reduced-motion: reduce` 下关闭所有 transform 和 wobble，只保留必要颜色变化。

---

## 9. 组件规格

### 按钮

| 变体 | 背景 | 文字 | 边 | 状态 |
|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | none | hover `primary-hover`，active `primary-active` |
| secondary | `--ds-bg-elevated` | `--ds-fg` | `--ds-border-strong` | hover `--ds-bg-subtle` |
| tertiary | transparent | `--ds-fg-muted` | none | hover subtle paper |
| danger | `--ds-danger` | `--ds-primary-fg` | none | 用于删除/移除纸片 |

尺寸：sm 32px / md 40px / lg 48px。圆角使用 `--ds-radius-md`，不要做成 candy pill。

### 输入框

底 `--ds-bg-elevated`，边 `--ds-border`，圆角 `--ds-radius-sm`，高 40px。Focus 走 `--ds-focus-ring`。错误态边 `--ds-danger`，提示文字用 `--ds-danger-fg` 落在 `--ds-danger-bg` 或纸面上。

### 卡片

纸卡底 `--ds-bg-elevated`，1px dashed stitch，`--ds-shadow-md`。可加一条 tokenized tape 盖住角落。交互卡 hover 只轻微抬升，不要大幅缩放。

### 徽章 / 标签

语义色使用 `<state>-bg` + `<state>-fg`；decorative tape 色只作为背景块，不放正文。标签文案短、字号 xs-sm、字重 700。

### 提示条 Alert

四态均为浅底/暗底状态组合 + 1px 状态描边 + 内联 SVG 图标。不要使用 emoji，不要只靠颜色表达状态。

### 导航

顶栏保持 paper surface + bottom border。Tab 使用主色文字与小纸片下划线；侧栏选中态用 `--ds-primary` 和 `--ds-primary-fg`。

### 表格

表格仍以可读性优先：表头 `--ds-bg-subtle`，正文 `--ds-bg-elevated`，数字列用 mono/tabular。不要给表格行做旋转。

### 模态 / 菜单 / Toast

弹层和菜单使用 elevated paper、轻阴影、短标签。Toast 图标用圆形语义底；正文落在 paper surface 上，不能贴在 tape 上。

---

## 10. 可访问性

- **正文对比**：`--ds-fg` on `--ds-bg` light 12.73:1，dark 14.21:1；`--ds-fg-muted` on `--ds-bg` light 6.36:1，dark 7.43:1。
- **主色对比**：primary text light 4.77:1，dark 6.53:1；accent text light 5.28:1，dark 6.32:1。暗色 primary/accent 使用深色文字是有意设计。
- **状态对比**：状态 `-bg` + `-fg` 均大于 10:1（light/dark）。
- **Subtle token**：`--ds-fg-subtle` 只用于非正文提示、disabled、metadata 或大字号标签；正文与表单说明使用 `fg`/`fg-muted`。
- **焦点**：统一 `--ds-focus-ring: 0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus)`。
- **触控目标**：按钮、tab、mobile nav、icon button 建议不低于 44px。
- **动效**：所有 tilt/wobble 在 reduced-motion 下关闭。
- **纹理**：正文必须落在 solid paper surface，不落在 tape、photo texture 或噪点密集区域。

---

## 11. Do / Don't

**Do**
- 用 kraft/cream/corkboard 表面建立纸张基调。
- 用 washi tape、torn edge、polaroid、pin、clip、stitch 做少量识别点。
- 控制旋转角度在 1-2deg，确保移动端不溢出。
- 让正文落在 `--ds-bg-elevated` 或 `--ds-bg-subtle`。
- 用内联 SVG 做 pin/clip/icon。

**Don't**
- 不要把文字放在半透明 tape 上。
- 不要把每张卡都贴满装饰，Collage 容易过载。
- 不要使用高饱和粉彩或大药丸按钮，否则会偏离纸张拼贴身份。
- 不要用冷灰 editorial 留白替代纸张层次，否则会接近 18-mineral。
- 不要让旋转/绝对定位元素伸出视口。
- 不要用 emoji 当图标。

---

## 12. 如何接入

```html
<link rel="stylesheet" href="./styles/31-collage/tokens.css" />
```

```css
.journal-card {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 1px dashed var(--ds-border-strong);
  border-radius: var(--ds-radius-md);
  box-shadow: var(--ds-shadow-md);
  font-family: var(--ds-font-sans);
}

.journal-card:focus-within {
  box-shadow: var(--ds-focus-ring);
}
```

```js
document.documentElement.dataset.theme = "dark";
```

Tailwind 项目：

```js
module.exports = { presets: [require("./styles/31-collage/tailwind.preset.js")] };
```

然后在入口引入 `tokens.css`。组件只消费 `var(--ds-*)`，不要硬编码颜色；tape/pin 装饰使用 `--ds-decor-tape-*`，且不承载正文。
