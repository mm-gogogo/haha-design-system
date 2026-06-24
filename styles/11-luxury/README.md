# Luxury · 奢侈高端设计系统

> 深炭黑 + 拉丝金，衬线 display，留白即语言。给高端时装、珠宝、腕表、酒店、私人银行与会员制品牌——少即是贵，每一处空白都是态度。**暗为主。**

---

## 1. 一句话气质

Luxury 是一套**暗为主、以留白说话**的奢侈品设计系统：深炭黑作幕、拉丝金作笔、衬线作骨。它不靠堆叠装饰，而靠克制、材质感与从容的节奏，传递「最贵的，往往最安静」的高级感。适合精品电商、品牌官网、会员中心、私享预约等需要质感与信任的场景。

---

## 2. 设计哲学 / 性格

继承 Geist 基底的**变量契约与工程严谨**，但在气质上几乎完全反转其中性灰：

1. **留白即语言（核心）。** 适度留白是本风格的表达手段，不是浪费。区块间距慷慨（常用 64–96px），每屏信息有呼吸——**别塞满**。这是 Luxury、日系、editorial 三者共享的「留白是风格语言」豁免。
2. **暗为主。** 默认即深炭黑（`:root` = 暗），亮（米金）模式是次选。金落在暗底上最贵气。
3. **金是稀缺的。** 拉丝金（`--ds-primary`）只出现在主操作、当前态、细描边、关键数字上。金一旦泛滥就廉价——把它留给真正重要的事。
4. **衬线为骨。** 标题用 Noto Serif 细字重（400/500）、字距讲究；正文与控件用 Inter。对比轴本身即层级。
5. **克制的工艺。** 圆角小（2/6/10）、阴影极轻、描边细如金线。靠材质与留白分层，而非厚重投影。

---

## 3. 何时用 / 何时别用

**适合：**
- 高端时装 / 珠宝 / 腕表 / 香水 / 皮具品牌官网与精品电商
- 五星酒店、会员制俱乐部、私人银行、高净值理财、艺术拍卖
- 需要「质感 + 信任 + 克制」的品牌叙事、限量发售、私享预约

**不适合：**
- 信息密集的 B 端后台 / 数据仪表盘（留白与低密度会降低效率）→ 用企业 / B 端
- 面向儿童、活泼、促销驱动的消费场景 → 用可爱 / Material
- 强调亲和与阅读量的内容站 → 用 editorial
- 需要高饱和、强对比、玩味视觉的潮流品牌 → 用赛博朋克 / 粗野主义

---

## 4. 颜色

语义 token，名字固定 `--ds-*`，值随主题变。**暗为默认主题**。

### 暗（默认 · `:root` / `[data-theme="dark"]` / `.dark`）

| Token | 取值 | 用途 | 对比 |
|---|---|---|---|
| `--ds-bg` | `#0e0d0b` | 炭黑主背景 | — |
| `--ds-bg-subtle` | `#121009` | 次背景 / 区块底 | — |
| `--ds-bg-elevated` | `#16140f` | 浮层 / 卡片 | — |
| `--ds-bg-sunken` | `#0a0907` | 凹陷 / 输入槽 / 代码块 | — |
| `--ds-fg` | `#ece6d8` | 暖象牙主文字 | 15.6:1 |
| `--ds-fg-muted` | `#9a9486` | 次要文字 | 6.4:1 |
| `--ds-fg-subtle` | `#857d6c` | 占位 / 弱文字 | 4.8:1 |
| `--ds-fg-on-accent` | `#0e0d0b` | 金底上的炭字 | 8.6:1 |
| `--ds-border` | `#2a261d` | 常规细金 / 暗描边 | — |
| `--ds-border-strong` | `#3a3528` | 强描边 / 分隔 | — |
| `--ds-primary` | `#c9a86a` | 拉丝金主操作 | 8.6:1 |
| `--ds-primary-hover` | `#b8975a` | hover | — |
| `--ds-primary-active` | `#a8854a` | active | — |
| `--ds-primary-fg` | `#0e0d0b` | 金底上文字 | 8.6:1 |
| `--ds-accent` | `#c9a86a` | 链接 / 次强调（金） | 8.6:1 |

### 亮 · 米金（`[data-theme="light"]`）

| Token | 取值 | 用途 | 对比 |
|---|---|---|---|
| `--ds-bg` | `#f6f3ee` | 米金主背景 | — |
| `--ds-bg-subtle` | `#efeae1` | 次背景 | — |
| `--ds-bg-elevated` | `#fffdf9` | 浮层 / 卡片 | — |
| `--ds-bg-sunken` | `#ebe5da` | 凹陷 / 输入槽 | — |
| `--ds-fg` | `#1a1714` | 墨主文字 | 16.1:1 |
| `--ds-fg-muted` | `#5f574a` | 次要文字 | 6.4:1 |
| `--ds-fg-subtle` | `#6b6356` | 弱文字 | 5.4:1 |
| `--ds-border` | `#e3dccf` | 常规描边 | — |
| `--ds-border-strong` | `#d3c9b6` | 强描边 | — |
| `--ds-primary` | `#1a1714` | 墨主操作 | 16.1:1 |
| `--ds-primary-fg` | `#f6f3ee` | 墨底上米白字 | 16.1:1 |
| `--ds-accent` | `#7e5f28` | 深金链接 / 次强调 | 5.3:1 |

> **金底 / 黑底文字注意 AA。** 金 `#c9a86a` 上一律用炭黑字 `#0e0d0b`（8.6:1），切勿用白字（白字落金上仅约 1.8:1，不达标）。亮模式中亮金 `#c9a86a` 仅可作描边 / 点缀，作链接文字须用深金 `#7e5f28`。

### 语义状态（每个含 主色 / `-bg` 浅底 / `-fg` 底上文字）

| | 暗 主色 | 暗 -bg | 暗 -fg | 亮 主色 | 亮 -bg | 亮 -fg |
|---|---|---|---|---|---|---|
| success | `#7fb389` | `#172418` | `#d6ecd8` | `#3f6b46` | `#e6efe6` | `#1f3a25` |
| warning | `#d8b25a` | `#26200c` | `#f5eccf` | `#9a6b08` | `#f6edd6` | `#4f3a05` |
| danger | `#e08274` | `#2a1310` | `#f6ddd6` | `#a23a2c` | `#f5e3df` | `#561a12` |
| info | `#74a3c2` | `#10212c` | `#d6e7f1` | `#3a5f7a` | `#e3ecf2` | `#1c3140` |

### 强调色梯度（金）

`#c9a86a`（primary / 默认）→ `#b8975a`（hover）→ `#a8854a`（active）。亮模式作描边用同一亮金，作文字用 `#7e5f28`。

---

## 5. 字体

**对比轴：衬线标题（display）+ 无衬线正文与控件。**

- `--ds-font-serif`: `"Noto Serif"`（→ 思源宋 / Songti SC 中文回退）。**所有标题、display、引用**用它，细字重（400/500），字距讲究、略紧（标题 `letter-spacing: -0.02em`）。
- `--ds-font-sans`: `"Inter"`（→ PingFang SC 回退）。**正文、表单、按钮、表格、元信息**用它。
- `--ds-font-mono`: `"JetBrains Mono"`。价格、编号、数据用 `tabular-nums`。

### 比例尺

| token | px | 典型用途 |
|---|---|---|
| `--ds-text-xs` | 12 | 脚注 / 标签 |
| `--ds-text-sm` | 13 | 元信息 / 控件 |
| `--ds-text-base` | 15 | 正文 |
| `--ds-text-md` | 18 | 导语 |
| `--ds-text-lg` | 22 | h3 / 卡片标题 |
| `--ds-text-xl` | 30 | h2 |
| `--ds-text-2xl` | 42 | h1 |
| `--ds-text-3xl` | 60 | Hero display |

字重：`normal 400`（标题主用）/ `medium 500`（强调）/ `bold 600`（重点）。
字距：`tight -0.02em`（display，**不低于 -0.04em**，防粘字）/ `normal 0`；元信息 / 标签可用 `.06em–.28em` 大写字距营造高级感。

### 中文适配

标题中文走宋体（Songti SC / 思源宋）保持衬线气质；正文中文走 PingFang。中文方块字密，行高用 `--ds-leading-relaxed: 1.75` 更舒展。

---

## 6. 间距与布局

- 比例尺：`--ds-space-1..12` = 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 px。
- **节奏（留白即语言）：** 组内元素 8–12，组件内边距 24–32，区块之间 **64–96**。Luxury 偏松——宁可留白，不要塞满。
- 容器宽：内容主区 `max-width: 1120px` 居中；长文阅读区 `680px`。
- 栅格：12 栏意识。Hero 用 ~1.05/0.95 双栏；媒体卡 / 特性三栏；画廊用等高网格 + 少量 `span 2` 变化。
- 章节标题统一：小标签（金色大写字距 `.22em`）+ 英文副标 + 一条横向金 / 灰细线（`.sec-head`）。

---

## 7. 圆角 / 阴影 / 描边

- **圆角（小、克制）：** `sm 2px` / `md 6px` / `lg 10px` / `full 9999px`。锐利干净，符合奢侈品的精确感。
- **阴影（极克制）：** Luxury 靠留白与细金描边分层，不靠厚投影。
  - 暗：`sm 0 1px 2px rgba(0,0,0,.5)`；`md / lg` 为低不透明、大模糊、负扩散的克制叠层。
  - 亮：更轻（`rgba(26,23,20,.05–.14)`）。
- **描边（细金线，标志性）：** 常规 `--ds-border` 1px；分隔可用金色渐变细线（`linear-gradient(transparent, primary, transparent)`，`.gold-rule`）。卡片 hover 时描边由暗转金，是本风格最克制也最贵的反馈。

---

## 8. 动效

- 曲线：`--ds-ease: cubic-bezier(.22,.61,.36,1)`（从容 ease-out，**无弹跳**——弹跳不奢华）。
- 时长：`fast 160ms` / `base 260ms` / `slow 380ms`。Luxury 偏慢一档，强调从容。
- 典型过渡：描边变色、图片轻微 `scale(1.04)` 放大、浮层淡入上移 8px、主题切换 380ms 渐变。
- `prefers-reduced-motion: reduce` 时全局把动画 / 过渡降到 0.01ms，并关闭平滑滚动。

---

## 9. 组件规格

**按钮**（控件走无衬线、大写字距 `.06em`）
- 尺寸：sm 36 / 默认 44 / lg 52（高度）；触控 ≥44px。
- primary：金底 `--ds-primary` + 炭字 `--ds-primary-fg`，hover → `-hover`，active → `-active`。
- secondary：透明底 + 1px 强描边，hover 时描边与文字转金。
- tertiary：纯文字金色，hover 转 fg。
- danger：`--ds-danger` 底 + 深字。
- 全状态：default / hover / active / focus（`--ds-focus-ring` 金环）/ disabled（opacity .42）。

**输入框**：高 44，凹陷底 `--ds-bg-sunken` + 1px 描边，focus 时描边转金 + 金焦点环；支持前 / 后置图标；错误态描边转 danger，hint 转 danger。

**卡片**：浮层底 + 1px 描边 + 小圆角，无重阴影；hover 仅描边转金。标题衬线，meta 用金色大写字距小字。**别嵌套卡片**。

**徽章 / 标签**：高 24，小圆角，大写字距 `.08em`；default / primary（金底）/ outline（金框）/ 四语义色（浅底 + 主色 45% 描边 + 底上文字）。

**提示条 alert**：**前置语义 SVG 图标 + 浅色 `-bg` 底 + 1px 全描边**（无侧边色条）。四语义色齐全，图标用对应语义色。

**导航**：顶栏（sticky，毛玻璃，金色品牌标 + 大写字距导航 + 主题切换）；tabs（底部金色下划线指示当前）；面包屑（金色 `>` SVG 分隔）。

---

## 10. 可访问性

- **对比度：** 正文 ≥4.5:1，大字 / UI ≥3:1。本系统所有 token 对已核验达标（见第 4 节对比列）。
- **金底 / 黑底：** 金上用炭黑字（8.6:1），切勿白字；亮模式金作文字须用深金 `#7e5f28`。
- **焦点：** 所有可交互元素有 `:focus-visible` 金色焦点环 `--ds-focus-ring`（双环 + 主色），暗亮均清晰可见。
- **触控目标：** 按钮 / 输入 / 图标按钮 ≥44px。
- **可减弱动效：** `prefers-reduced-motion` 下动画降至 0.01ms。
- **语义：** alert 配 `role`、模态 `role="dialog" aria-modal`、纯图标按钮带 `aria-label`、装饰 SVG 带 `aria-hidden`、图片有意义 `alt` + `loading="lazy"`。
- **z-index 语义化：** 用 `--ds-z-dropdown < sticky < modal-backdrop < modal < toast < tooltip`，禁用 9999 魔法值。

---

## 11. Do / Don't

**Do**
- 留白慷慨，区块 64–96px 间距——让内容呼吸（留白是语言）。
- 金色稀缺使用：只给主操作、当前态、细描边、关键数字。
- 标题用衬线细字重 + 讲究字距；正文 / 控件用无衬线建立对比轴。
- 图片 full-bleed + 1px 细金描边 + 小圆角，统一宽高比。
- 金底一律配炭黑字；亮模式金作文字用深金。

**Don't**
- 别塞满。信息密度过高会立刻失去高级感。
- 别滥用金：通体金、金渐变文字、金色大块面积都廉价。
- 别用厚重 / 彩色阴影或大圆角药丸——那不是奢侈，是可爱风。
- 别在金底用白字（不达 AA），别用渐变文字（用纯色 + 字重 / 字号强调）。
- 别用 border-left 彩色竖条做 alert（用前置图标 + 浅底 + 全描边）。
- 别嵌套卡片、别堆 emoji（一律内联 SVG）。

---

## 12. 如何接入

**1) 引入 tokens.css（拿到全部 `--ds-*` 变量，含亮暗）**

```html
<link rel="stylesheet" href="styles/11-luxury/tokens.css">
<!-- 字体（唯一允许的样式外链）：-->
<link rel="stylesheet" href="_fonts/fonts.css">
```

**2) 用变量，不要硬编码颜色**

```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  font-family: var(--ds-font-sans);
  letter-spacing: .06em; text-transform: uppercase;
}
.card-title { font-family: var(--ds-font-serif); letter-spacing: var(--ds-tracking-tight); }
```

**3) 主题切换（暗为主）**

默认即暗（`:root` = 暗），无需设置即得深炭主题。切到亮（米金）：

```js
// 切到米金
document.documentElement.dataset.theme = 'light';
// 切回深炭（或删掉 data-theme）
document.documentElement.dataset.theme = 'dark';
```

`.dark` 与 `[data-theme="dark"]` 同步暗色，兼容 selector 模式。

**4) Tailwind 项目：引 preset**

```js
// tailwind.config.js
module.exports = { presets: [require('./styles/11-luxury/tailwind.preset.js')] }
```

```jsx
// 然后直接用语义类（消费同一套 --ds-* 变量）
<button className="bg-primary text-primary-fg rounded-sm font-sans tracking-wide uppercase">
  预约私享
</button>
<h1 className="font-serif tracking-tight text-2xl">奢华即克制</h1>
```

暗色由 `darkMode: ['selector', '[data-theme="dark"], .dark']` 驱动；本风格默认即暗，亮模式加 `[data-theme="light"]`。

---

*Luxury Kit · 全部取值走 `var(--ds-*)` · 暗为主 · 亮（米金）双主题 · 零 emoji 内联 SVG · 满足 WCAG AA · 素材全本地（`_assets/**` + `_fonts/fonts.css`）。*
