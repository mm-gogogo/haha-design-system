# Material Design (M3) · 设计系统

> 鲜明扁平的色块、tonal surface 表面分层、清晰的 elevation 阴影、克制的圆角与 FAB / chip 部件——一套以 Google Material Design 3 为蓝本、强调系统化与可触达性的产品级设计语言。给做工具型、效率型、多平台产品的团队用。

---

## 1. 标题 + 一句话气质

**Material Design (M3)** 是一套"会呼吸的扁平"。它不靠渐变和噪点取胜，而靠**色调表面（tonal surface）**、**层级化的 elevation 阴影**与**统一的圆角语言**来组织信息：色块鲜明、阴影分层、动效有方向。整体观感专业、克制、可信，又因为紫调主色（primary `#6750a4`）与红棕 tertiary（`#7d5260`）而带一点温度。

---

## 2. 设计哲学 / 性格

继承 Geist 语义骨架（同一套 `--ds-*` 变量名、4px 间距基、AA 对比红线），在其上换上 M3 的气质：

1. **Tonal surface，不是纯白堆叠。** 背景 `#fef7ff`、抬起表面 `#faf2fb`、次背景 / 凹陷 `#e7e0ec` 都带一丝紫调，靠**色调差**区分层级，而非靠重描边。改了 Geist 的中性灰。
2. **Elevation 用阴影说话。** M3 的 level 1–3 是双层阴影（环境光 + 关键光），抬得越高阴影越散。卡片、FAB、弹层靠 elevation 表达层级，而非边框。
3. **圆角是系统语言。** 8 / 12 / 16 三档对应小部件 / 卡片 / 大容器，FAB 与 chip 走 `full` 全圆角。圆角统一，不随手乱给。
4. **鲜明扁平的色块。** 主操作、选中态、强调用实色块，对比足、边界清，不靠投影伪装可点击。
5. **动效有方向、有强调。** 标准缓动 `cubic-bezier(.2,0,0,1)`（emphasized），进出场有加速度，不做匀速线性。

---

## 3. 何时用 / 何时别用

**适合：**
- 跨平台（Web / Android / 桌面）需要统一视觉语言的产品。
- 工具型、效率型、SaaS、后台、内容管理类应用——信息密度高、组件复用多。
- 团队需要一套"成文、可落地、好交接"的系统，照表格就能搭。

**不适合：**
- 追求强个性、艺术化、品牌至上的营销官网（用 editorial / luxury / 国潮 更出彩）。
- 极简留白叙事型页面（用 japanese / editorial）。
- 想要复古像素、霓虹赛博等强风格表达（用对应专门 Kit）。

---

## 4. 颜色

语义 token（亮 / 暗双值），全部满足 WCAG AA（正文 ≥4.5:1，大字 / 图标 ≥3:1；纯装饰描边按 M3 outline 处理，不承载文字）。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
| --- | --- | --- | --- |
| `--ds-bg` | `#fef7ff` | `#141218` | 主背景（surface）|
| `--ds-bg-subtle` | `#e7e0ec` | `#2b2930` | 次背景 / 分组底（surface-variant）|
| `--ds-bg-elevated` | `#faf2fb` | `#211f26` | 抬起表面：卡片 / 弹层 / FAB |
| `--ds-bg-sunken` | `#e7e0ec` | `#1d1b20` | 凹陷表面：输入槽 / 代码块 |
| `--ds-fg` | `#1d1b20` | `#e6e0e9` | 主文字（on-surface）|
| `--ds-fg-muted` | `#49454f` | `#cac4d0` | 次要文字（on-surface-variant）|
| `--ds-fg-subtle` | `#5f5a66` | `#988f9b` | 占位 / 弱文字（≥4.5:1）|
| `--ds-fg-on-accent` | `#ffffff` | `#ffffff` | 落在强调色块上的文字 |
| `--ds-border` | `#cac4d0` | `#48454e` | 常规描边（outline-variant）|
| `--ds-border-strong` | `#79747e` | `#948f99` | 强描边 / 分隔（outline）|

### 品牌与强调

| Token | 亮色 | 暗色 | 用途 |
| --- | --- | --- | --- |
| `--ds-primary` | `#6750a4` | `#d0bcff` | 主操作：按钮 / FAB / 选中 |
| `--ds-primary-hover` | `#5a4592` | `#ddccff` | hover |
| `--ds-primary-active` | `#4e3a82` | `#b69df8` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#381e72` | 主操作上的文字 |
| `--ds-accent` | `#7d5260` | `#efb8c8` | tertiary：链接 / 次强调 / chip |
| `--ds-accent-fg` | `#ffffff` | `#492532` | accent 上的文字 |

**强调色梯度（primary tonal）：** `#4e3a82`（active）→ `#5a4592`（hover）→ `#6750a4`（base）→ 暗色提亮 `#d0bcff`。这是 M3 的 tonal palette 思路：同一色相按明度阶梯铺开，亮暗主题用对侧明度档。

### 语义状态（主色 + `-bg` 浅 tonal 底 + `-fg` 底上文字）

| 语义 | 主色（亮 / 暗）| 浅底（亮 / 暗）| 底上文字（亮 / 暗）|
| --- | --- | --- | --- |
| success | `#1e6b3a` / `#7ddc9e` | `#e6f4ea` / `#0f2a1a` | `#0c3a20` / `#c6f0d4` |
| warning | `#7a5200` / `#f3c969` | `#fdf2da` / `#2a1f05` | `#5b3d00` / `#fbe7b3` |
| danger（error `#b3261e`）| `#b3261e` / `#f2b8b5` | `#fce9e8` / `#2a1110` | `#5c0e0a` / `#ffdad6` |
| info（primary tone）| `#5b4790` / `#cfbcfb` | `#ebe4f9` / `#1c142e` | `#2a2152` / `#e7deff` |

---

## 5. 字体

- **字族：** `Inter`（作 Roboto 的开源替身，几何无衬线、字形开口大、屏显清晰，气质贴近 M3 的 Roboto / Roboto Flex）。本地 woff2，拉丁字形；中文走系统 `PingFang SC / Microsoft YaHei` 回退。等宽用 `JetBrains Mono`（数据 / 代码），衬线用 `Noto Serif`（极少数引文）。
- **比例尺：** `xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48`。正文默认 `base 14`，长文用 `md 16`。
- **字重：** `normal 400 / medium 500 / bold 600`。M3 习惯用 500（medium）做按钮、标签、强调，标题用 600。
- **字距：** 标题 `tracking-tight -0.02em`（display 不低于 -0.04em 红线，避免粘字）；正文 `0`。
- **行高：** 紧 1.2（标题）/ 常规 1.5（正文）/ 松 1.7（长文）。
- **中文适配：** 中文不收紧字距（设 `0`），交由系统字体；数字一律 `tabular-nums` 对齐。

---

## 6. 间距与布局

- **比例尺（4px 基）：** `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`（`--ds-space-1` ~ `--ds-space-12`）。
- **节奏：** 组内元素 8–12，组件内边距 16–24，区块间距 32–64。密度饱满但层级分明。
- **容器宽：** 内容主区建议 1100–1200px 居中；正文行宽 ≤ 75ch。
- **栅格：** 12 栏意识。卡片网格用 `repeat(auto-fill, minmax(280px, 1fr))`；KPI / 特性区常用 3–4 栏。

---

## 7. 圆角 / 阴影 / 描边

- **圆角：** `sm 8`（按钮 / input / chip 容器）、`md 12`（卡片）、`lg 16`（大容器 / 弹层 / 媒体）、`full`（FAB / chip / 头像 / 开关）。这是 M3 的圆角语言核心，**统一使用**。
- **阴影（M3 elevation level 1–3）：** 双层阴影（环境光 `rgba` 大模糊 + 关键光小偏移）。
  - `sm` ≈ level 1（卡片静置）：`0 1px 2px rgba(0,0,0,.30), 0 1px 3px 1px rgba(0,0,0,.15)`
  - `md` ≈ level 2（hover / chip / FAB 静置）：`0 1px 2px rgba(0,0,0,.30), 0 2px 6px 2px rgba(0,0,0,.15)`
  - `lg` ≈ level 3（弹层 / FAB hover / 抽屉）：`0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.30)`
  暗色统一加深透明度。
- **描边：** 常规 `--ds-border`（outline-variant，淡），强分隔 / outlined 按钮用 `--ds-border-strong`（outline）。M3 用色调表面分层，描边克制——不要描边 + 重阴影双重堆叠。

---

## 8. 动效

- **时长：** `fast 150ms`（hover / 状态切换）、`base 250ms`（展开 / 切换）、`slow 400ms`（大面积转场 / FAB 形变）。
- **曲线：** `--ds-ease: cubic-bezier(.2,0,0,1)`（M3 emphasized / standard 缓动，进出场有加速度）。
- **典型过渡：** 按钮 / chip 的背景与 elevation；FAB 的 hover 抬升；弹层的淡入 + 轻微上移；选中态的色块切换。
- **`prefers-reduced-motion`：** 用户开启减弱动效时，全局把 transition / animation 降到接近 0，保留即时态变化，不做位移与缩放。

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

### 按钮（M3 五型）
- **Filled（primary）：** 背景 `--ds-primary`，文字 `--ds-primary-fg`，圆角 `sm`，高 40，内边距 0 24。hover → `--ds-primary-hover` + elevation `sm`；active → `--ds-primary-active`；disabled → 表面 `bg-subtle` + 文字 `fg-subtle`，无阴影。
- **Tonal：** 背景 `--ds-info-bg`（primary tonal 浅底），文字 `--ds-primary`，无描边——介于 filled 与 outlined 之间的低强调主操作。
- **Outlined（secondary）：** 透明底 + `1px --ds-border-strong` + 文字 `--ds-fg`，hover 加 `bg-subtle`。
- **Text（tertiary）：** 透明底无描边，文字 `--ds-primary`，hover 加浅底。
- **FAB：** 圆角 `full` 或 `lg`，背景 `--ds-bg-elevated` 或 `--ds-primary`，elevation `md`，hover → `lg`；含图标，可带文字（extended FAB）。
- 三尺寸：高 32 / 40 / 48；触控目标 ≥44px。

### Chip
- 圆角 `full`，高 32，内边距 0 12，`1px --ds-border` + 文字 `--ds-fg`；**选中**态填 `--ds-info-bg` + 文字 `--ds-primary` + 前置对勾 SVG。可带前导图标 / 头像 / 关闭按钮。

### 输入框 input / textarea
- 高 44，圆角 `sm`，背景 `--ds-bg-sunken`，`1px --ds-border`；focus → `2px --ds-primary` + `--ds-focus-ring`。占位文字 `--ds-fg-subtle`（≥4.5:1）。支持前 / 后置图标、helper / error 文案。

### 卡片
- 圆角 `md`，背景 `--ds-bg-elevated`，elevation `sm`，内边距 24。hover → elevation `md`。结构：媒体（圆角 `lg`）/ 标题 / 正文 / 操作行。**不嵌套卡片**。

### 徽章 / 标签 badge
- 圆角 `full`，高 22，内边距 0 10，字号 `xs` `medium`。语义色用 `*-bg` 浅底 + `*-fg` 文字（不用纯色块压字）。

### 提示条 alert
- 圆角 `md`，浅底 `*-bg` + `1px` 同色系全描边 + **前置语义 SVG 图标**（对勾 / 感叹 / 叉 / i），文字 `*-fg`。**不用左侧粗色条**。

### 导航
- 顶栏：高 60，背景 `--ds-bg-elevated`，底部 `1px --ds-border`，sticky。当前项底部 `2px --ds-primary` 指示条。
- 底部标签栏（移动）：图标 + 文字，选中项图标着 `--ds-primary` + 药丸形 active indicator（`--ds-info-bg`）。

---

## 10. 可访问性

- **对比度：** 全部文字色满足 AA（正文 ≥4.5:1，大字 / 图标 ≥3:1）；占位 / 弱文字也 ≥4.5:1。
- **焦点：** 所有可交互元素有可见焦点环 `--ds-focus-ring`（底环 + primary 主环），键盘可达。
- **触控目标：** 按钮 / 图标按钮 / 标签项最小命中区 ≥44×44px。
- **可减弱动效：** 遵循 `prefers-reduced-motion`（见第 8 节）。
- **语义：** 仅图标的按钮带 `aria-label`；状态不只靠颜色，配语义 SVG 图标 / 文案。

---

## 11. Do / Don't

**Do**
- 用 tonal surface 的色调差分层（bg / elevated / subtle），靠 elevation 阴影表达高度。
- 圆角守住 8 / 12 / 16 + full 四档，FAB / chip 走 full。
- 主操作用 filled，次操作用 tonal / outlined，弱操作用 text——强调层级分明。
- 选中态用色块（chip / tab indicator），数字用 `tabular-nums`。

**Don't**
- 别同时上"重描边 + 重阴影"——M3 二选一，优先 elevation。
- 别用纯色块压小字做 badge（用 `*-bg` 浅底）。
- 别给 alert 加左侧粗色竖条（用图标 + 浅底 + 全描边）。
- 别乱混圆角档位或滥用 full（只有 FAB / chip / 头像 / 开关该 full）。
- 别把 tonal surface 改回纯白堆叠——那就丢了 M3 的身份。

---

## 12. 如何接入

1. **引入 tokens.css**（暴露全部 `--ds-*` 变量，含 `:root` 亮色与 `[data-theme="dark"], .dark` 暗色）：
   ```html
   <link rel="stylesheet" href="styles/15-material/tokens.css" />
   <link rel="stylesheet" href="_fonts/fonts.css" />
   ```
2. **用变量**（不要硬编码颜色 / 圆角 / 间距到组件）：
   ```css
   .fab {
     background: var(--ds-primary);
     color: var(--ds-primary-fg);
     border-radius: var(--ds-radius-full);
     box-shadow: var(--ds-shadow-md);
     transition: box-shadow var(--ds-dur-base) var(--ds-ease);
   }
   .fab:hover { box-shadow: var(--ds-shadow-lg); }
   ```
3. **切换主题**：给 `<html>` 设 `data-theme="dark"` 或加 `.dark` 类即可整体换肤。
4. **Tailwind 项目**：在 `tailwind.config.js` 引入预设，并保证入口已引 `tokens.css`：
   ```js
   module.exports = {
     presets: [require("./styles/15-material/tailwind.preset.js")],
     content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
   };
   ```
   之后即可用 `bg-primary text-primary-fg rounded-full shadow-md` 等工具类，颜色随主题自动切换。
