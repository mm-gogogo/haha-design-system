# 瑞士国际主义 Swiss · 设计系统 Kit

> 客观、网格、数学化。给文化机构、美术馆、字体档案、出版与签名系统——传达秩序、清晰与中立。
> International Typographic Style（瑞士国际主义）：Neo-grotesque 字型、不对称栏栅、发丝线、大量留白、一条红线。示范实体为虚构的苏黎世美术馆与字体档案馆 **Halle Nord**，其网格/签名系统名为 **RASTER**。

---

## 1. 一句话气质

瑞士风是一套「让信息自己说话」的界面语言：版式由网格决定、对比由黑白承载、强调只用一种红。
它不装饰、不圆角、不投影——秩序即美学。中性灰阶 + 纯黑/纯白做骨架，`#cc1f16` 一抹红做唯一的情绪锚点。

适合：美术馆 / 文化机构官网、出版与目录、字体样张、签名导视、编辑型作品集、严肃数据展示。

---

## 2. 设计哲学 / 性格

1. **网格即系统**：版式不是「摆好看」，而是落在不对称栏栅上。区块以 mono 编号（`01 — Index`、`02 — Farbe`）标记，编号本身就是网格的一部分，不是装饰。
2. **客观中立**：默认黑白灰阶承载 95% 的界面，文字纯黑 `#111111`、背景纯白，传达「不带情绪的真实」。继承 Geist 的极致克制，并推到极端。
3. **唯一红线**：`#cc1f16` 红只用于「主操作 / 当前选中 / 一处分隔线 / 一个关键词」。红是信号，不是底色。
4. **扁平至上**：圆角全 0（方角），无投影——深度只来自发丝线、描边与网格留白。`shadow` token 退化为 1px ring。
5. **大字旗帜**：标题用 Neo-grotesque 重字重（700）、紧字距（-0.02em）、左对齐右不齐（flush-left ragged-right），配大量留白，像海报（Plakat）。

**与 Geist 基底的关系**：
- **继承**：语义分层、比例尺、状态色成对、焦点环、明暗双主题、变量契约。
- **改动**：圆角全部归零；阴影退化为发丝 ring（无投影）；主色换成单一信号红；字族换成 Inter（代 Helvetica）；标题字重提到 700、字距收紧到 -0.02em；引入 mono 区块编号作为可见的网格语言。

---

## 3. 何时用 / 何时别用

**适合用**
- 美术馆、画廊、文化机构、双年展官网与导视
- 出版物、目录、年报、字体样张（type specimen）
- 编辑型作品集、严肃的数据 / 档案展示
- 任何需要「冷静、专业、中立、信息密度高」的场景

**不建议用**
- 面向儿童 / 娱乐 / 游戏的趣味产品（→ 用 cute / pixel）
- 需要温度、亲和、插画与渐变的消费级活动页（→ 用 cute / glassmorphism）
- 想靠粗黑边 + 撞色 + 偏移阴影制造冲击的页面（那是 brutalism，不是 Swiss——别混淆）

> **和 12-brutalism / 03-enterprise 的区别**：brutalism 是粗黑边框 + 黄/蓝撞色 + 偏移硬阴影、故意「吵」；enterprise 是常规 SaaS 商务蓝、圆角柔影。Swiss 两者都不是——它是零圆角、零投影、黑白灰 + 一抹红、网格驱动的克制秩序。

---

## 4. 颜色

颜色一律走语义 token，组件内**不准硬编码 hex**。亮暗两套自动随 `[data-theme="dark"]` / `.dark` 切换。暗色为瑞士「反相」：纯黑底 + 提亮红。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#ffffff` | `#0a0a0a` | 主背景（纯白 / 近黑） |
| `--ds-bg-subtle` | `#f4f4f4` | `#141414` | 次背景 / 区块分组底 |
| `--ds-bg-elevated` | `#ffffff` | `#161616` | 抬起表面（卡片 / 弹层 / 顶栏） |
| `--ds-bg-sunken` | `#ededed` | `#000000` | 凹陷表面（输入槽 / 代码块） |
| `--ds-fg` | `#111111` | `#f2f2f2` | 主文字（近黑 / 近白） |
| `--ds-fg-muted` | `#555555` | `#a6a6a6` | 次要文字 / 描述 |
| `--ds-fg-subtle` | `#6f6f6f` | `#8a8a8a` | 占位 / 弱文字（≥4.5:1） |
| `--ds-fg-on-accent` | `#ffffff` | `#0a0a0a` | 落在强调色上的文字 |
| `--ds-border` | `#e0e0e0` | `#2a2a2a` | 常规发丝描边 |
| `--ds-border-strong` | `#111111` | `#f2f2f2` | 强描边 / 黑白硬分隔线（关键的「发丝线」） |

> `--ds-border-strong` 在 Swiss 里很关键：它是纯黑（暗色为纯白），用作区块之间的 1px 发丝分隔线与强边框——这是真正的瑞士网格语言。

### 品牌与强调（唯一红）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#cc1f16` | `#ff453a` | 主操作色（按钮 / 选中 / 红线） |
| `--ds-primary-hover` | `#b31a12` | `#ff6157` | hover |
| `--ds-primary-active` | `#991610` | `#e63b30` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#0a0a0a` | 主操作上的文字（见下方 a11y 说明） |
| `--ds-accent` | `#cc1f16` | `#ff453a` | 链接 / 次强调（与 primary 同一红，Swiss 不引入第二色） |
| `--ds-accent-fg` | `#ffffff` | `#0a0a0a` | accent 上的文字 |

> **强调色梯度（信号红）**：`#fbe5e3`(底) → `#cc1f16`(主, hover `#b31a12`) → `#991610`(active) → `#5e0f0a`(深, 底上文字)。Swiss 只有一种强调色——红即一切；不要再引入第二个品牌色。

### 语义状态（克制，仍服从黑白红基调）

| 角色 | 主色（亮/暗） | 浅底（亮/暗） | 底上文字（亮/暗） |
|---|---|---|---|
| Success | `#1a7d3c` / `#4cc266` | `#e9f6ed` / `#0c2614` | `#0a3d1c` / `#bdf0cb` |
| Warning | `#8a5a00` / `#e0a93d` | `#fbf0d8` / `#241803` | `#4a3000` / `#f8e4b8` |
| Danger | `#cc1f16` / `#ff5b52` | `#fbe5e3` / `#2a0c0a` | `#5e0f0a` / `#ffd2ce` |
| Info | `#14467a` / `#5a9fe0` | `#e4eef8` / `#0a1f33` | `#0a2542` / `#cfe4f8` |

> Danger 与 primary 共用同一支红（信号红即「停 / 危险」），这正是瑞士导视的逻辑。其余 success/warning/info 为低饱和、不抢戏的辅助态。

---

## 5. 字体

- **Sans（UI / 正文 / 大标题）**：`"Inter", "Helvetica Neue", Helvetica, Arial, "PingFang SC", sans-serif`
  Inter 在本仓库作为 **Helvetica 的开源替身**：同属 Neo-grotesque（新怪诞体），字形中立、x-height 大、数字等宽、闭合字怀克制——正是瑞士国际主义赖以成立的字型。中文回退到苹方。
- **Serif（极少量，可选）**：`"Source Serif 4", Georgia, "Songti SC", serif`——瑞士风一般不用衬线，仅作长文备选。
- **Mono（区块编号 / 数据 / 表格数字 / 样张元信息）**：`"JetBrains Mono", ui-monospace, "SF Mono", Menlo, ...`。mono 在本风格承担「网格编号 / 标签 / caption」的功能性角色。

**比例尺**（字号）：`xs 12 · sm 13 · base 14 · md 16 · lg 20 · xl 24 · 2xl 32 · 3xl 48`（px）。正文基准 14px。大标题用 `clamp(40px, 7vw, 76px)` 旗帜级尺寸。

**字重**：`400` 正文 / `500` 强调 / `600` 副标题 / `700` 大标题。大标题要重——瑞士海报靠字重制造层级，不靠颜色。

**字距**：标题收紧 `--ds-tracking-tight: -0.02em`（拉丁大字越大越要收）；正文 `0`；mono 标签反而放宽 `.12em` 做大写小标签。

**行高**：`tight 1.2`（标题，大标题压到 ~1.02）/ `normal 1.5`（正文）/ `relaxed 1.7`（长文）。

**中文适配**：中文不收紧字距（tracking 仅在拉丁字母上观感好）；中文正文行高建议 1.6–1.7。大标题中英混排时，让英文 / 德文（Grotesk、Plakat）承担「紧字距大字」效果，中文保持自然字距。

---

## 6. 间距与布局

- **比例尺**（4px 基）：`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`px，对应 `--ds-space-1 ~ 12`。
- **节奏**：组内 8px、组间 16px、区块间发丝线 + 32–40px、大区块 64–96px。瑞士风**留白要大**——空是结构的一部分。
- **容器宽**：内容主区建议 `max-width: 1100px`；长文阅读区 `680–760px`。
- **栅格（核心）**：**12 列不对称栏栅**，gutter 20–24px。标题只占其中几列并刻意偏移（不居中），形成左对齐右不齐的张力。卡片网格 lg 3 列、md 2 列、sm 1 列。
- **区块编号系统**：每个主区块标题前缀 mono 编号（`01 — Index`、`02 — Farbe`、`03 — Schrift`…），配合顶部发丝线，构成可见的网格语言。**这是真瑞士，不是装饰**——编号让读者随时知道自己在网格的哪一格。
- **断点**：sm `401px` · md `601px` · lg `961px` · xl `1200px`。

### 响应式断点（移动端）

| 断点 | 行为 |
|---|---|
| `≤ 640px`（手机） | 所有自适应栅格（色板 / 卡片 / 表单 / 阴影）**收为单列**；12 列网格收为 1 列；顶栏导航折叠（`.nav { display:none }`）；容器内边距 24→16px；Hero 大标题随 `clamp` 自然缩小。 |
| `641–960px`（平板） | 卡片网格自动 2 列；表单双列；导航保持横向。 |
| `≥ 961px`（桌面） | 卡片 3 列，完整不对称栏栅与多列布局。 |
| `≤ 680px`（关键） | 防整页横滑：`html{overflow-x:hidden}` / `body{overflow-x:clip}`；宽表格改 `display:block + overflow-x:auto` 横滑查看（不破坏 sticky）。 |

- **手机框**：移动端用 iPhone 17 Pro Max 标准设备框（`.dvc17`）演示真实排布，触控目标 ≥44px。
- **实现**：栅格统一 `grid-template-columns: repeat(auto-fit/auto-fill, minmax(…))`，再在 `@media (max-width:640px)` 显式收 `1fr`，无需 JS。

---

## 7. 圆角 / 阴影 / 描边

**圆角（全 0，方角）**：瑞士国际主义不圆角——方角即诚实。

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `0px` | 按钮 / 输入框 / 徽章 |
| `--ds-radius-md` | `0px` | 卡片 / 菜单 / 弹层 |
| `--ds-radius-lg` | `0px` | 大表面 / 模态 / hero 块 |
| `--ds-radius-full` | `9999px` | 仅头像 / 开关圆点等少数本就该圆的元素 |

**阴影（扁平·发丝 ring，无投影）**：深度来自描边与网格，不来自模糊投影。

| Token | 值 | 用途 |
|---|---|---|
| `--ds-shadow-sm` | `0 0 0 1px var(--ds-border)` | 卡片 / 抬起表面（其实就是 1px 发丝边） |
| `--ds-shadow-md` | `0 0 0 1px var(--ds-border)` | 下拉 / 弹层 |
| `--ds-shadow-lg` | `0 0 0 1px var(--ds-border-strong)` | 模态 / 对话框（强黑/白发丝边） |

> 亮暗一致：阴影 token 在两套主题里都是 1px ring，只是边色随主题切换。这保证了「绝不出现柔和投影」的瑞士纪律。

**描边（灵魂）**：
- 常规分隔用 `1px var(--ds-border)`；**关键发丝线**用 `1px var(--ds-border-strong)`（纯黑 / 纯白），用于区块顶部分隔与强边框。
- 不要边框 + 投影双管齐下——本风格根本没有投影。一切层级靠 1px 黑白线 + 留白完成。

---

## 8. 动效

- **时长**：`fast 150ms`（hover / 颜色） · `base 200ms`（展开 / 位移） · `slow 250ms`（弹层 / 模态）。**不超过 250ms**。
- **曲线**：`--ds-ease: cubic-bezier(.22,.61,.36,1)`（ease-out），**无弹跳、无回弹**——瑞士风动效要功能性、几乎隐形。
- **典型过渡**：按钮 / 链接颜色 150ms；弹层淡入 + 极小位移 200ms；模态淡入 250ms。位移幅度要小（瑞士不晃）。
- **可减弱动效**：必须尊重 `prefers-reduced-motion: reduce`——关闭非必要位移 / 缩放，仅保留瞬时透明度变化。

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

---

## 9. 组件规格

> 所有组件均走 `var(--ds-*)`；以下给关键尺寸/色/态。高度沿用基线：小 32 / 中 40 / 大 48px。**全部方角（radius 0）、无投影。**

### 按钮 Button

| 变体 | 底 | 文字 | 边框 | 用途 |
|---|---|---|---|---|
| **Primary（实底红）** | `--ds-primary` | `--ds-primary-fg` | 无 | 页面主操作（唯一）。亮色白字、暗色黑字。 |
| **Secondary（描边）** | `--ds-bg` | `--ds-fg` | `1px --ds-border-strong`（黑/白硬边） | 次操作 |
| **Tertiary（幽灵）** | 透明 | `--ds-fg-muted` | 无 | 弱操作 / 工具栏 |
| **Danger** | `--ds-danger` | 亮色 `#fff` / 暗色近黑 | 无 | 危险操作（与 primary 同红） |

- 尺寸：sm `h32 / px12 / text-sm` · md `h40 / px16 / text-base` · lg `h48 / px20 / text-md`。
- 圆角 `0`（方角），字重 `500`，高对比。
- 状态：hover → `--ds-primary-hover`（secondary/tertiary 用 `--ds-bg-subtle` 底）；active → `--ds-primary-active`；focus-visible → `box-shadow: var(--ds-focus-ring)`；disabled → `opacity:.5`。

### 输入框 Input / Textarea / Select

- 高 40px，内边距 `0 12px`，**方角**，底 `--ds-bg`，边框 `1px --ds-border-strong`（黑/白硬边），文字 `--ds-fg`，占位 `--ds-fg-subtle`。
- focus → 边框转红 `--ds-primary` + `box-shadow: var(--ds-focus-ring)`。
- error → 边框 `--ds-danger`，下方辅助文字 `--ds-danger`。
- disabled → 底 `--ds-bg-sunken`，文字 `--ds-fg-subtle`。

### 卡片 Card

- 底 `--ds-bg-elevated`，边框 `1px --ds-border`，**方角**，内边距 `--ds-space-6`(24px)，「阴影」即 1px ring。
- hover（可点击卡）→ 仅边色 / 极小位移变化，**不出现柔影**。
- 结构：标题(`text-lg / 600+`) + 描述(`text-base / fg-muted`) + 操作区。

### 徽章 / 标签 Badge

- 高 20–24px，内边距 `0 8px`，**方角**，字号 `text-xs / 500`。
- 语义色用 `*-bg` 作底、`*-fg` 作字（如 success：`bg=--ds-success-bg`、`fg=--ds-success-fg`）。`badge-primary` 为实底红 + `--ds-primary-fg`。

### 提示条 Alert

- 内边距 `--ds-space-4`，**方角**，前置语义 SVG 图标 + 1px 全描边（语义色边）。
- 四种语义：底 `*-bg`、文字 `*-fg`、前置图标 `*`（success / warning / danger / info）。

### 导航 Navigation

- 顶栏：高 56–64px，底 `--ds-bg-elevated`，下边框 `1px --ds-border`，左 logo + 中导航项 + 右操作。
- 导航项：默认 `--ds-fg-muted`，hover `--ds-fg`，当前项 `--ds-fg` + 底部 2px 红 `--ds-primary` 指示条（方角，不圆）。
- Tab：当前项红字 + 2px 红下划线；其余 `--ds-fg-muted`。

### 表格 Table

- 表头：底 `--ds-bg-subtle`，文字 `--ds-fg-muted / text-sm / 600`，下发丝线。
- 行：分隔线 `1px --ds-border`，hover 行底 `--ds-bg-subtle`。
- 数字列用 `font-mono` + 右对齐 + `tabular-nums`（瑞士风尤重表格数字的对齐）。

### 面包屑 / 步骤条 / 分页 Breadcrumb / Stepper / Pagination

- **面包屑**：`text-sm`，分隔符 `/` 取 `--ds-fg-subtle`；链接 hover 转红 + `--ds-bg-subtle` 底；当前项 `--ds-fg / 500` 不可点。
- **步骤条**：节点圆点 28px、连接线 2px。待办（黑/白描边灰字）· 当前（红描边 + 红字 + 焦点环）· 已完成（实底红 + 对勾，连线转红）。
- **分页**：页码按钮 36×36、**方角**、边 `--ds-border-strong`；当前页实底红；hover（非当前）红描边 + 红字；禁用 `opacity:.5`。

### 叠层组件 Overlays（Dropdown / Tooltip / Modal / Toast）

- **下拉**：面板 `--ds-bg-elevated` + `1px --ds-border` + 1px ring，**方角**，`z-index:20`；菜单项 hover `--ds-bg-subtle`，选中项红字 + `--ds-info-bg` 底，危险项红字。
- **工具提示**：气泡反色（底 `--ds-fg` / 字 `--ds-bg`），`text-xs`，方角，下三角；`:hover` 与 `:focus-within` 触发。
- **模态**：遮罩 `rgba(17,17,17,.5)`，`z-index:50`；面板 `--ds-bg-elevated` + 1px 强 ring，**方角**，max-width 440px；淡入 + 极小位移；点遮罩 / 关闭钮 / Esc 均关闭。
- **Toast**：底 `--ds-bg-elevated` + `1px --ds-border`，前置语义 SVG，**方角**；纵向堆叠 `toast-stack`。

---

## 10. 可访问性

- **对比度**：满足 WCAG **AA**（亮暗双主题）——正文 ≥ 4.5:1，大字 / 图标 ≥ 3:1。`fg` / `fg-muted` / `fg-subtle` 均在对应背景上达标；状态 `*-fg` 在 `*-bg` 上达标。
- **红色按钮文字（重要）**：
  - 亮色：primary 红 `#cc1f16` 上用**白字** `#ffffff`（≈ 5.3:1，AA 通过）。
  - 暗色：primary 红提亮为 `#ff453a`，在其上用**近黑字** `#0a0a0a`（≈ 5.1:1，AA 通过）——这是刻意的，浅红底配白字会失败，故暗色红按钮用黑字。danger 按钮在暗色同样改用近黑字。
- **fg-subtle 核验**：亮色 `#6f6f6f` on `#ffffff` ≈ 4.9:1；暗色 `#8a8a8a` on `#0a0a0a` ≈ 5.4:1——占位/弱文字均达正文阈值。
- **焦点**：所有可聚焦控件 `focus-visible` 显示 `var(--ds-focus-ring)`（底环 + 红环），不靠颜色单独传达。
- **触控目标**：交互元素最小 **44×44px**（移动端按钮 / 图标钮用 lg 尺寸或加 padding）。
- **不只靠颜色**：状态除颜色外加图标 + 文案（danger 配三角警示 SVG 与文字），色盲友好。
- **可减弱动效**：尊重 `prefers-reduced-motion`，关闭非必要位移 / 缩放。

---

## 11. Do / Don't

**Do**
- 让网格说话：标题落在不对称栏栅上、左对齐右不齐，配 mono 区块编号与顶部发丝线。
- 红只点一处：主操作 / 当前选中 / 一条线 / 一个关键词——红是信号不是底色。
- 大字大留白：标题用重字重 + 紧字距，周围留足空白制造层级。
- 数字 / 表格用 `font-mono` + `tabular-nums` 对齐，体现瑞士的严谨。
- 一切走 `var(--ds-*)`，亮暗自动切换；红按钮文字按主题（亮白 / 暗黑）。

**Don't**
- 别装饰：不加渐变、不加纹理、不加无意义图形——瑞士风的高级来自克制。
- 别圆角：本风格 radius 全 0，给按钮 / 卡片加圆角会立刻失味。
- 别投影：没有 drop-shadow，深度只靠 1px 黑白发丝线与留白。
- 别多色：不要引入第二个品牌色，红就是唯一强调；把 success/warning/info 当辅助态而非主角。
- 别和 brutalism 混淆：不要粗黑边 + 撞色 + 偏移硬阴影；瑞士是冷静的网格，不是吵闹的拼贴。
- 别硬编码 hex 到组件、别堆 emoji 当图标（一律内联 SVG）。

---

## 12. 如何接入

**1) 引入 tokens.css（任意项目）**
```html
<link rel="stylesheet" href="./styles/20-swiss/tokens.css" />
```
```js
// 或在打包入口
import "./styles/20-swiss/tokens.css";
```

**2) 在样式里用变量（不硬编码）**
```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);     /* 亮白 / 暗黑，跟随主题 */
  border-radius: var(--ds-radius-sm);   /* = 0，方角 */
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
document.documentElement.dataset.theme = "dark"; // 切到暗色
document.documentElement.dataset.theme = "";      // 切回亮色
// 或用 class：document.documentElement.classList.toggle("dark")
```

**4) Tailwind 项目引 preset**
```js
// tailwind.config.js
module.exports = {
  presets: [require("./styles/20-swiss/tailwind.preset.js")],
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
};
// 仍需在入口引入 tokens.css 提供变量
```
之后即可：`class="bg-bg-elevated text-fg border border-border shadow-sm"`、`class="bg-primary text-primary-fg hover:bg-primary-hover"`（注意本风格 `rounded-*` 解析为 0）。

---

## 13. 预览页 Showcase（preview.html）

`preview.html` 以虚构的苏黎世美术馆 / 字体档案馆 **Halle Nord** 为示范实体，在「色板 / 字体 / 组件清单」之外，按 Showcase 富化标准补齐了**有图、有布局、信息饱满**的作品级展示，所有素材均来自本仓库 `_assets/`（`loading="lazy"` + 有意义 alt），除 `_fonts/fonts.css` 与 `_assets/device.css` 外无任何外链，双击离线可用。

### 网格与编号
整页以 mono 区块编号（`01 — Index`、`02 — Farbe`…）+ 顶部发丝线（`1px --ds-border-strong`）构成可见的瑞士网格语言；大标题用 `clamp(40px,7vw,76px)` 重字重旗帜尺寸、左对齐右不齐，并对单个关键词施加唯一红色。

### 有图首屏 Hero
左文右图的不对称分栏 hero：左侧编号 + 大旗帜标题（一处红字）+ 副标题 + 双 CTA（参观信息 / 馆藏目录）+ 指标条（创立年 / 展厅 / 馆藏字样数），右侧 `architecture.jpg` 嵌入严格方框（方角 + 1px 强边框 + 黑色 scrim 叠字 + 「开馆中」浮卡），消灭首屏留白。

### 图片用法 Image Usage（`#images`）
宽高比框（16:9 / 4:3 / 1:1 / 3:4，方角硬边）· 媒体卡（展览 / 样张主题）· 画廊（8 图等高网格 + 跨格强调）· 图文混排（大图 + 对勾要点）· 图上叠字（21:9 + 黑色 scrim 保证白字 AA）· 头像（尺寸阶 / 堆叠组 / 用户行，人物为策展人 / 档案员）· 背景大图区（full-bleed + 黑色半透明遮罩 + 双 CTA）。

### 图标用法 Icon Usage（`#icons`）
12 枚统一线性内联 SVG（`stroke="currentColor"`、`viewBox 0 0 24 24`、零 emoji）· 尺寸阶 16/20/24/32 · 线性 vs 实心 / 单色 vs 双色 · 在场景里（图标按钮 / 输入框前后置 / 列表前导 / 语义状态 / 数字徽标）。

### 桌面布局 Desktop Layouts（`#layouts`，3 个）
均置于带浏览器 chrome 的 frame 中：应用外壳 / 仪表盘（侧栏 + 顶栏 + KPI + 柱状图 + 表格）· 落地页（图文 hero + 特性三栏）· 列表-详情（左缩略图列表 + 右大图详情）。

### 移动布局 Mobile Layouts（`#mobile`，3 个）
统一套用 iPhone 17 Pro Max 标准设备框（`.dvc17`，侧键 / 灵动岛 / 状态栏 / Home 条）：App 首页 feed + 标签栏 · 详情 / 个人页 · 列表 / 收件箱。屏内按一屏设计、信息饱满，触控目标 ≥44px。

> 富化区块全部复用既有 `--ds-*` token 与组件类，保持「黑白灰 + 一抹红 + Inter Neo-grotesque + 方角 + 发丝线 + 网格编号」的风格身份；亮 / 暗主题与响应式（≤640px 收单列、≤900px 布局收敛、≤680px 防横滑）均生效。

---

*Swiss Kit · 示范实体 Halle Nord / 网格系统 RASTER · 基于 Geist 语义骨架 · 变量契约见 `_base/KIT-TEMPLATE.md`*
