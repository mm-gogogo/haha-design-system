# 企业风 Enterprise · 设计系统 Kit

> 稳重、专业、可信赖、克制。给官网、SaaS 控制台、产品站、品牌门户——传达可信与秩序。
> 在 Geist 极简骨架上注入一点「商务蓝」的温度，但仍克制：界面靠中性灰阶承载，蓝色只点在主操作、链接与当前选择上。

---

## 1. 一句话气质

企业风是一套「让人放心签合同」的界面语言：版式规整、对比清晰、颜色克制。
它不抢戏、不卖萌、不炫技，用商务蓝（`#2563eb`）作为唯一的情绪锚点，其余交给秩序感。

适合：企业官网 / SaaS 产品后台 / 品牌门户 / 文档站 / B 端控制台。

---

## 2. 设计哲学 / 性格

1. **克制优先**：默认中性灰阶（slate 系）承载 90% 的界面，商务蓝只用于「主操作 / 链接 / 当前选择 / info 状态」。继承 Geist 的极致克制。
2. **稳重可信**：深墨蓝文字 `#0f172a` 而非纯黑，配 slate 边框，整体偏冷、偏专业，传达「值得托付」。
3. **比例尺驱动**：字号、间距、圆角全部来自固定比例尺，不随手取值——继承 Geist 的比例尺思想。
4. **语义分层**：背景 `bg / bg-subtle / bg-elevated / bg-sunken` 四层；文字 `fg / fg-muted / fg-subtle` 三档；状态色成对（主色 + 浅底 + 底上文字）。
5. **可见焦点环**：键盘可达性靠双层 box-shadow 焦点环（底环 + 商务蓝环），任何可聚焦控件都要有。

**与 Geist 基底的关系**：
- **继承**：语义分层、比例尺、状态色成对、焦点环、明暗双主题、克制柔和的多层弱阴影。
- **改动**：把 Geist 的纯中性黑灰主色，换成 **slate 冷灰 + 商务蓝**；圆角中性化（md 12→10px）；字族换成 Inter；状态色采用更通用的 Tailwind 蓝/绿/橙/红梯度，更贴近 B 端审美。

---

## 3. 何时用 / 何时别用

**适合用**
- 企业官网、品牌门户、产品介绍站
- SaaS 控制台、管理后台、数据看板
- 需要传达「专业、可信、秩序」的 B 端界面
- 多人协作、长期维护、强调一致性的中大型项目

**不建议用**
- 面向儿童 / 娱乐 / 游戏的趣味产品（→ 用 cute / pixel）
- 强个性、强视觉冲击的 campaign 落地页（→ 用 editorial / dark-tech）
- 需要大量插画、渐变、玻璃拟态的消费级活动页

---

## 4. 颜色

颜色一律走语义 token，组件内**不准硬编码 hex**。亮暗两套自动随 `[data-theme="dark"]` / `.dark` 切换。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#ffffff` | `#0b1220` | 主背景 |
| `--ds-bg-subtle` | `#f7f9fc` | `#0f1729` | 次背景 / 区块分组底 |
| `--ds-bg-elevated` | `#ffffff` | `#131c30` | 抬起表面（卡片 / 弹层 / 顶栏） |
| `--ds-bg-sunken` | `#eef2f7` | `#080d18` | 凹陷表面（输入槽 / 代码块） |
| `--ds-fg` | `#0f172a` | `#e8eef7` | 主文字（深墨蓝，非纯黑） |
| `--ds-fg-muted` | `#475569` | `#9fb0c8` | 次要文字 / 描述 |
| `--ds-fg-subtle` | `#64748b` | `#7888a3` | 占位 / 弱文字（≥4.5:1） |
| `--ds-fg-on-accent` | `#ffffff` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#e2e8f0` | `#1f2c45` | 常规描边 |
| `--ds-border-strong` | `#cbd5e1` | `#314465` | 强描边 / 分隔 |

### 品牌与强调（商务蓝）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#2563eb` | `#3b82f6` | 主操作色（按钮 / 选中） |
| `--ds-primary-hover` | `#1d4ed8` | `#60a5fa` | hover |
| `--ds-primary-active` | `#1e40af` | `#2563eb` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#08111f` | 主操作上的文字 |
| `--ds-accent` | `#0e7490` | `#22d3ee` | 链接 / 次强调（青系，与蓝同family） |
| `--ds-accent-fg` | `#ffffff` | `#08111f` | accent 上的文字 |

> **强调色梯度（商务蓝）**：`#eff6ff`(底) → `#2563eb`(主, hover `#1d4ed8`) → `#1e40af`(active) → `#0b357a`(深, 底上文字)。浅档作底、深档作字，与 Geist 的「100→1000 十档」同思想。

### 语义状态（专业、配淡底）

| 角色 | 主色（亮/暗） | 浅底（亮/暗） | 底上文字（亮/暗） |
|---|---|---|---|
| Success | `#16a34a` / `#34d399` | `#ecfdf3` / `#0a2417` | `#06401f` / `#c4f5dd` |
| Warning | `#d97706` / `#fbbf24` | `#fffaeb` / `#2a1d05` | `#6b3b00` / `#fdeec2` |
| Danger | `#dc2626` / `#f87171` | `#fef2f2` / `#2c1012` | `#6b0e0e` / `#ffd9d9` |
| Info | `#2563eb` / `#60a5fa` | `#eff6ff` / `#0d1f3d` | `#0b357a` / `#d6e6ff` |

---

## 5. 字体

- **Sans（UI / 正文）**：`"Inter", -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", ...`
  Inter 是 B 端事实标准：字形中性、可读性高、数字等宽友好、x-height 大，专业又不冷漠。中文优雅回退到苹方 / 微软雅黑。
- **Serif（少量标题点缀，可选）**：`"Source Serif 4", Georgia, "Songti SC", serif`。
- **Mono（代码 / 数据 / 表格数字）**：`"JetBrains Mono", ui-monospace, "SF Mono", Menlo, ...`。

**比例尺**（字号）：`xs 12 · sm 13 · base 14 · md 16 · lg 20 · xl 24 · 2xl 32 · 3xl 48`（px）。B 端正文基准 14px。

**字重**：`400` 正文 / `500` 强调与按钮 / `600` 标题。**不上 700+**，保持克制。

**字距**：标题略紧 `--ds-tracking-tight: -0.01em`；正文 `0`。

**行高**：`tight 1.2`（标题）/ `normal 1.5`（正文）/ `relaxed 1.7`（长文）。

**中文适配**：中文不收紧字距（标题 tracking 仅作用于拉丁字母时观感更好），正文行高建议 1.6–1.7 提升中文可读性。

---

## 6. 间距与布局

- **比例尺**（4px 基）：`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`px，对应 `--ds-space-1 ~ 12`。
- **节奏**：组内 8px、组间 16px、区块间 32–40px、大区块 64–96px。
- **容器宽**：内容主区建议 `max-width: 1200px`；文档 / 长文阅读区 `680–760px`。
- **栅格**：12 列，gutter 24px（`--ds-space-6`）；卡片网格在 lg 断点 3 列、md 2 列、sm 1 列。
- **断点**（沿用 Geist）：sm `401px` · md `601px` · lg `961px` · xl `1200px` · 2xl `1400px`。

### 响应式断点（移动端）

预览页落地了一组关键移动端规则，遵循「内容优先、克制收敛」：

| 断点 | 行为 |
|---|---|
| `≤ 640px`（手机） | 所有自适应栅格（色板 / 卡片 / 表单 / 阴影）**收为单列**；顶栏导航折叠（`.nav { display:none }`），交由汉堡菜单承载；容器内边距由 24px 降为 16px；Hero 标题降一档（3xl→2xl）。 |
| `641–960px`（平板） | 卡片网格自动 2 列（`auto-fit / minmax`），表单双列，导航保持横向。 |
| `≥ 961px`（桌面） | 卡片 3 列，完整顶栏导航与多列布局。 |

- **手机框**：移动端块用约 `375px` 宽的手机框演示真实排布——折叠导航顶栏（汉堡按钮，三横线 SVG 图标）+ 指标卡片 + 全宽主操作按钮 + 列表，触控目标≥44px。
- **触控间距**：移动端交互元素间距不低于 8px，主按钮建议 lg 尺寸（48px 高）并撑满一行。
- **实现**：栅格统一用 `grid-template-columns: repeat(auto-fit/auto-fill, minmax(…))` 自适应，再在 `@media (max-width:640px)` 显式收为 `1fr`，无需 JS。

---

## 7. 圆角 / 阴影 / 描边

**圆角**（中性，不圆不锐）：

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `6px` | 按钮 / 输入框 / 徽章 |
| `--ds-radius-md` | `10px` | 卡片 / 菜单 / 弹层 |
| `--ds-radius-lg` | `16px` | 大表面 / 模态 / hero 块 |
| `--ds-radius-full` | `9999px` | 药丸 / 头像 / 开关 |

**阴影**（克制柔和、多层弱阴影，接近 Geist，不夸张）：

| Token | 值 | 用途 |
|---|---|---|
| `--ds-shadow-sm` | `0 1px 2px rgba(16,24,40,.06)` | 抬起卡片 / 按钮 hover |
| `--ds-shadow-md` | 多层弱阴影 | 下拉 / 弹层 / 浮卡 |
| `--ds-shadow-lg` | 多层柔阴影 | 模态 / 对话框 |

> 暗色下阴影改用更深的黑色不透明度（`.5–.75`），避免暗背景上阴影不可见。

**描边**：B 端界面以**轻边轻影**为主——卡片优先用 `1px solid var(--ds-border)`，需要层级时再叠 `shadow-sm`，不要边框+重阴影双管齐下。

---

## 8. 动效

- **时长**：`fast 150ms`（hover / 颜色） · `base 200ms`（展开 / 位移） · `slow 250ms`（弹层 / 模态）。**不超过 250ms**。
- **曲线**：`--ds-ease: cubic-bezier(.22,.61,.36,1)`（ease-out），**无弹跳、无回弹**——企业风要稳。
- **典型过渡**：按钮背景色 150ms、卡片 hover 抬起 + 阴影 200ms、弹层淡入 + 微位移 200ms。
- **可减弱动效**：必须尊重 `prefers-reduced-motion: reduce`——关闭非必要位移与缩放，仅保留瞬时透明度变化。

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

---

## 9. 组件规格

> 所有组件均走 `var(--ds-*)`；以下给关键尺寸/色/态。高度沿用 Geist 基线：小 32 / 中 40 / 大 48px。

### 按钮 Button

| 变体 | 底 | 文字 | 边框 | 用途 |
|---|---|---|---|---|
| **Primary（实底蓝）** | `--ds-primary` | `--ds-primary-fg` | 无 | 页面主操作（唯一） |
| **Secondary（描边）** | `--ds-bg` | `--ds-fg` | `1px --ds-border-strong` | 次操作 |
| **Tertiary（幽灵）** | 透明 | `--ds-fg-muted` | 无 | 弱操作 / 工具栏 |
| **Danger** | `--ds-danger` | `#fff` | 无 | 危险操作 |

- 尺寸：sm `h32 / px12 / text-sm` · md `h40 / px16 / text-base` · lg `h48 / px20 / text-md`。
- 圆角 `--ds-radius-sm`(6px)，字重 `500`。
- 状态：
  - hover → primary 用 `--ds-primary-hover`；secondary/tertiary 用 `--ds-bg-subtle` 底。
  - active → `--ds-primary-active`。
  - focus-visible → `box-shadow: var(--ds-focus-ring)`。
  - disabled → `opacity: .5; cursor: not-allowed`。

### 输入框 Input / Textarea / Select

- 高 40px（md），内边距 `0 12px`，圆角 6px，底 `--ds-bg`，边框 `1px --ds-border-strong`，文字 `--ds-fg`，占位 `--ds-fg-subtle`。
- focus → 边框转 `--ds-primary` + `box-shadow: var(--ds-focus-ring)`。
- error → 边框 `--ds-danger`，下方辅助文字 `--ds-danger`。
- disabled → 底 `--ds-bg-sunken`，文字 `--ds-fg-subtle`。

### 卡片 Card

- 底 `--ds-bg-elevated`，边框 `1px --ds-border`，圆角 `--ds-radius-md`(10px)，内边距 `--ds-space-6`(24px)，阴影 `--ds-shadow-sm`。
- hover（可点击卡）→ 阴影升到 `--ds-shadow-md`，过渡 200ms。
- 结构：标题(`text-lg / 600`) + 描述(`text-base / fg-muted`) + 操作区。

### 徽章 / 标签 Badge

- 高 20–24px，内边距 `0 8px`，圆角 `--ds-radius-full`，字号 `text-xs / 500`。
- 语义色用 `*-bg` 作底、`*-fg` 作字（如 success：`bg=--ds-success-bg`、`fg=--ds-success-fg`）。

### 提示条 Alert

- 内边距 `--ds-space-4`，圆角 `--ds-radius-md`，前置语义 SVG 图标 + 1px 全描边（不用侧边色条）。
- 四种语义：底 `*-bg`、文字 `*-fg`、前置图标 `*`（success / warning / danger / info），1px 边框取语义色。

### 导航 Navigation（商务顶栏）

- 顶栏：高 56–64px，底 `--ds-bg-elevated`，下边框 `1px --ds-border`，左 logo + 中导航项 + 右操作。
- 导航项：默认 `--ds-fg-muted`，hover `--ds-fg`，当前项 `--ds-fg` + 底部 2px `--ds-primary` 指示条。
- Tab：当前项 `--ds-primary` 文字 + 2px 下划线；其余 `--ds-fg-muted`。

### 表格 Table

- 表头：底 `--ds-bg-subtle`，文字 `--ds-fg-muted / text-sm / 600`。
- 行：分隔线 `1px --ds-border`，hover 行底 `--ds-bg-subtle`。
- 数字列建议 `font-mono` + 右对齐（tabular 对齐）。

### 面包屑 Breadcrumb

- 路径项用 `text-sm`，分隔符 `/` 取 `--ds-fg-subtle`。
- 链接默认 `--ds-fg-muted`，hover 转 `--ds-primary` + 浅底 `--ds-bg-subtle`；当前项 `--ds-fg / 500` 不可点（`aria-current="page"`）。
- 焦点 → `box-shadow: var(--ds-focus-ring)`。

### 步骤条 Stepper

- 节点圆点 28px、圆角 full，连接线 2px。三态：
  - **待办**：底 `--ds-bg`、字 `--ds-fg-subtle`、边 `--ds-border-strong`，连线 `--ds-border`。
  - **当前**：蓝描边 `--ds-primary` + 蓝字 + `box-shadow: var(--ds-focus-ring)`，标签 `--ds-fg / 500`。
  - **已完成**：实底 `--ds-primary` + `--ds-primary-fg`（对勾 SVG），其前连线转 `--ds-primary`。

### 分页 Pagination

- 页码按钮 36×36（min-width），圆角 `--ds-radius-sm`，边 `--ds-border-strong`。
- 状态：默认 `--ds-bg`；hover（非当前）→ 主色描边 + 主色字 + `--ds-bg-subtle` 底；active → `--ds-bg-sunken`；当前页 → 实底 `--ds-primary / --ds-primary-fg`（`aria-current="page"`）；禁用 → `opacity:.5`。
- 省略号 `…` 用 `--ds-fg-subtle`，焦点环同上。

### 下拉菜单 Dropdown

- 菜单面板：底 `--ds-bg-elevated`，边 `1px --ds-border`，圆角 `--ds-radius-md`，阴影 `--ds-shadow-md`，内边距 `--ds-space-2`，min-width 200px，`z-index:20`。
- 展开过渡：`opacity + translateY(-4px→0)`，200ms。
- 菜单项：hover → `--ds-bg-subtle`；选中项 → 主色字 + `--ds-info-bg` 底（对勾 SVG）；危险项 → `--ds-danger` 字、hover `--ds-danger-bg` 底；分隔线 1px `--ds-border`。所有项前置统一线性 SVG 图标。

### 工具提示 Tooltip

- 气泡：底 `--ds-fg`、字 `--ds-bg`（反色），`text-xs`，圆角 `--ds-radius-sm`，`--ds-shadow-md`，下方三角箭头。
- 触发：`:hover` 与 `:focus-within`（键盘可达），淡入 + 微上移 150ms，`z-index:25`。

### 模态框 Modal

- 遮罩：`position:fixed; inset:0`，底 `rgba(15,23,42,.5)`，`z-index:50`，居中。
- 面板：`--ds-bg-elevated`，边 `1px --ds-border`，圆角 `--ds-radius-lg`(16px)，阴影 `--ds-shadow-lg`，max-width 440px。
- 入场：遮罩淡入 250ms + 面板 `translateY(8px)+scale(.98)→0/1`。
- 结构：标题(`text-lg`) + 关闭按钮(叉号 SVG，hover `--ds-bg-subtle`) + 正文(`fg-muted`) + 右对齐底部操作区。
- 关闭：点遮罩、按关闭按钮、按 Esc，均关闭（`aria-modal="true"`）。

### Toast 通知

- 单条：底 `--ds-bg-elevated`，边 `1px --ds-border`，前置语义 SVG 图标，圆角 `--ds-radius-md`，阴影 `--ds-shadow-md`。
- 语义：info（`--ds-primary`）/ success / warning / danger 改前置图标色，标题 `600`、说明 `fg-muted / text-sm`。
- 多条纵向堆叠（`toast-stack`，gap `--ds-space-3`，max-width 380px），右上角关闭按钮。

---

## 10. 可访问性

- **对比度**：满足 WCAG **AA**——正文 ≥ 4.5:1，大字 / 图标 ≥ 3:1。`fg`/`fg-muted`/`fg-subtle` 均在对应背景上达标；状态 `*-fg` 在 `*-bg` 上达标。
- **焦点**：所有可聚焦控件 `focus-visible` 显示 `var(--ds-focus-ring)`（底环 + 商务蓝环），不靠颜色单独传达。
- **触控目标**：交互元素最小 **44×44px**（移动端按钮 / 图标钮用 lg 尺寸或加 padding）。
- **可减弱动效**：尊重 `prefers-reduced-motion`，关闭非必要位移 / 缩放。
- **不只靠颜色**：状态除颜色外加图标 / 文案（如 danger 配三角警示 SVG 与文字），色盲友好。

---

## 11. Do / Don't

**Do**
- 主操作每屏只用一个 Primary 蓝按钮，其余降级为 secondary / tertiary。
- 颜色一律走 `var(--ds-*)`，亮暗自动切换。
- 卡片优先轻边轻影：`1px border` + `shadow-sm`，需要层级再升阴影。
- 数字 / 数据用 `font-mono` 对齐，体现 B 端严谨。
- 文字用深墨蓝 `--ds-fg`（非纯黑），整体更稳更高级。

**Don't**
- 别把蓝色铺满界面——蓝是锚点不是底色，铺多了显廉价、失去克制。
- 别用纯黑 `#000` 当文字、别用 0 圆角硬棱角（太冷）也别用过大圆角（不够专业）。
- 别给卡片同时上重边框 + 重阴影，显脏。
- 别上弹跳 / 回弹动效、别超过 250ms——企业风要稳不要跳。
- 别硬编码 hex 到组件、别堆 emoji 当图标。

---

## 12. 如何接入

**1) 引入 tokens.css（任意项目）**
```html
<link rel="stylesheet" href="./styles/03-enterprise/tokens.css" />
```
```js
// 或在打包入口
import "./styles/03-enterprise/tokens.css";
```

**2) 在样式里用变量（不硬编码）**
```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  padding: 0 var(--ds-space-4);
  height: 40px;
  font: var(--ds-weight-medium) var(--ds-text-base) / 1 var(--ds-font-sans);
  transition: background var(--ds-dur-fast) var(--ds-ease);
}
.btn-primary:hover { background: var(--ds-primary-hover); }
.btn-primary:focus-visible { box-shadow: var(--ds-focus-ring); outline: none; }
```

**3) 切换暗色主题**
```js
// 切到暗色
document.documentElement.dataset.theme = "dark";
// 切回亮色
document.documentElement.dataset.theme = "";
// 或用 class：document.documentElement.classList.toggle("dark")
```

**4) Tailwind 项目引 preset**
```js
// tailwind.config.js
module.exports = {
  presets: [require("./styles/03-enterprise/tailwind.preset.js")],
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
};
// 仍需在入口引入 tokens.css 提供变量
```
之后即可：`class="bg-bg-elevated text-fg border border-border rounded-md shadow-sm"`、`class="bg-primary text-primary-fg hover:bg-primary-hover"`。

---

*Enterprise Kit · 基于 Geist 语义骨架 · 变量契约见 `_base/KIT-TEMPLATE.md`*
