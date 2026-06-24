# HahaTool · 哈哈工具 设计系统 Kit

> **基于「企业风 Enterprise」+ hahatool 定制。**
> 给「中文 AI 工具导航站」（对标 toolify.ai）换肤：在企业风的克制、可信、规整骨架上，注入现代科技紫的产品气质——让一个数据密集、卡片成片的导航站，既专业可信，又有 AI 工具站该有的现代感。

本 Kit 同时满足两套约定：设计系统的 `--ds-*` 契约，以及 hahatool 项目 frontend 现有的 `--brand-*`（RGB 三元组）+ 4 套主题色切换 + `--chart-*` 图表变量。两者通过「`--ds-primary` 桥接到 `rgb(var(--brand-*))`」打通——**切主题色时，整套强调系统一起换肤**。

---

## 1. 一句话气质

HahaTool 是一套「让人放心点进每一款工具」的导航站界面语言：版式规整、数据对齐、颜色克制，主色是一束现代科技紫，落在主操作、链接、当前选择与图表强调上，其余交给秩序感。

适合：AI 工具导航 / 收录站、工具排行榜、对比评测、资讯快讯频道。

---

## 2. 设计哲学 / 性格

1. **克制优先**：默认中性冷灰（slate 系）承载 90% 的界面，品牌紫只用于「主操作 / 链接 / 当前选择 / 图表强调 / 推广标识」。继承企业风的克制。
2. **数据可信**：深墨蓝文字 `#0f172a` 而非纯黑，配 slate 边框；数字列一律 `tabular-nums` + 等宽，体现导航站「数据说话」的严谨。
3. **品牌即主题**：品牌色不是写死的紫，而是一个**可换肤的变量套**（紫/蓝/绿/橙 4 套）。整套 `--ds-*` 强调色桥接到 `--brand-*`，换一个 `data-accent` 全站变脸。
4. **语义分层**：背景 `bg / bg-subtle / bg-elevated / bg-sunken` 四层；文字 `fg / fg-muted / fg-subtle` 三档；状态色成对（主色 + 浅底 + 底上文字）。
5. **零图表库**：雷达、流量柱状、地区条形全部手写 SVG，配色走 `var(--chart-grid)` / `var(--chart-label)` / `rgb(var(--brand-600))`，明暗自动切换。

**与企业风基底的关系**
- **继承**：冷灰 slate 表面、深墨蓝文字、语义分层、克制柔阴影、ease-out 无弹跳动效、双层焦点环、明暗双主题。
- **改动**：把企业风固定的商务蓝主色，换成**桥接 `--brand-*` 的可换肤紫**（默认 violet）；圆角调柔（sm 6→8、md 10→12px）更贴近现代工具站；新增 `--chart-*` 图表变量；info 状态从蓝改为「跟随品牌色」（导航站里 info 与品牌同源更统一）。

---

## 3. 何时用 / 何时别用

**适合用**
- AI 工具导航 / 收录站、工具详情页、排行榜、对比（PK）页
- 资讯 / 快讯时间线频道、提示词库
- 数据密集、卡片成片、需要「专业可信 + 现代感」的内容站

**不建议用**
- 面向儿童 / 娱乐 / 游戏的趣味产品（→ 用 cute / pixel）
- 强视觉冲击、满屏渐变玻璃拟态的 campaign 落地页（→ 用 dark-tech / editorial）

---

## 4. 颜色

颜色一律走 token，组件内**不准硬编码 hex（尤其禁止硬编码紫色）**。亮暗两套随 `[data-theme="dark"]` / `.dark` 自动切换；品牌色随 `data-accent` 在 4 套间切换。

### 4.1 表面与文字（企业风冷灰）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#ffffff` | `#0b1220` | 主背景 |
| `--ds-bg-subtle` | `#f7f9fc` | `#0f1729` | 次背景 / 区块分组底 |
| `--ds-bg-elevated` | `#ffffff` | `#131c30` | 抬起表面（工具卡 / 弹层 / 顶栏） |
| `--ds-bg-sunken` | `#eef2f7` | `#080d18` | 凹陷表面（搜索框槽 / 代码块） |
| `--ds-fg` | `#0f172a` | `#e8eef7` | 主文字（深墨蓝） |
| `--ds-fg-muted` | `#475569` | `#9fb0c8` | 次要文字 / 工具简介 |
| `--ds-fg-subtle` | `#64748b` | `#7888a3` | 占位 / 弱文字（≥4.5:1） |
| `--ds-fg-on-accent` | `#ffffff` | `#ffffff` | 落在品牌色上的文字 |
| `--ds-border` | `#e2e8f0` | `#1f2c45` | 常规描边 |
| `--ds-border-strong` | `#cbd5e1` | `#314465` | 强描边 / 分隔 |

### 4.2 品牌与强调（桥接 brand-*，默认科技紫）

`--ds-primary` 等不写死 hex，而是引用 `rgb(var(--brand-*))`，所以会随主题色切换：

| Token | 取值（亮） | 取值（暗） | 用途 |
|---|---|---|---|
| `--ds-primary` | `rgb(var(--brand-600))` | `rgb(var(--brand-500))` | 主操作（按钮 / 选中 / 当前 Tab） |
| `--ds-primary-hover` | `rgb(var(--brand-700))` | `rgb(var(--brand-400))` | hover |
| `--ds-primary-active` | `rgb(var(--brand-800))` | `rgb(var(--brand-600))` | active |
| `--ds-primary-fg` | `#ffffff` | `#ffffff` | 主操作上的文字（紫底白字，见 §10） |
| `--ds-accent` | `rgb(var(--brand-500))` | `rgb(var(--brand-400))` | 链接 / 次强调 |
| `--ds-info` | `rgb(var(--brand-600))` | `rgb(var(--brand-400))` | info 跟随品牌色 |

### 4.3 品牌色 4 套主题（`--brand-50..900`，RGB 三元组）

值与项目 `frontend/src/app/globals.css` 完全一致，新增「橙」时选了 AA 友好的琥珀橙：

| 主题 | 切换值 | brand-600（主） | brand-50（底） | 气质 |
|---|---|---|---|---|
| 紫 violet（默认） | `data-accent="violet"` | `124 58 237` | `245 243 255` | 现代科技紫，工具站默认 |
| 蓝 sky | `data-accent="sky"` | `2 132 199` | `240 249 255` | 冷静专业 |
| 绿 emerald | `data-accent="emerald"` | `5 150 105` | `236 253 245` | 清新增长 |
| 橙 amber | `data-accent="amber"` | `217 70 8` | `255 247 237` | 活力推广 |

> **用法**：`<html data-accent="sky">` 或加 class `.brand-sky`。两种切换写法都已在 tokens.css 注册。Tailwind 里直接 `bg-brand-600` / `text-brand-500/80`（带透明度），或走契约色 `bg-primary` / `text-accent`。

### 4.4 语义状态（企业风专业梯度，配淡底）

| 角色 | 主色（亮/暗） | 浅底（亮/暗） | 底上文字（亮/暗） |
|---|---|---|---|
| Success | `#16a34a` / `#34d399` | `#ecfdf3` / `#0a2417` | `#06401f` / `#c4f5dd` |
| Warning | `#d97706` / `#fbbf24` | `#fffaeb` / `#2a1d05` | `#6b3b00` / `#fdeec2` |
| Danger | `#dc2626` / `#f87171` | `#fef2f2` / `#2c1012` | `#6b0e0e` / `#ffd9d9` |
| Info（跟随品牌） | `brand-600` / `brand-400` | `brand-50` / `brand-900·35%` | `brand-800` / `brand-200` |

### 4.5 图表变量（手写 SVG）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--chart-grid` | `#e5e7eb` | `#374151` | 雷达网格 / 柱状基线 / 刻度线 |
| `--chart-label` | `#6b7280` | `#9ca3af` | 轴标签 / 维度名 / 数值文字 |
| 数据系列 | `rgb(var(--brand-600))` | 同（暗用 brand-500） | 雷达填充 / 柱子主色（A 系列） |
| 对比系列 B | `rgb(var(--brand-300))` 或 accent | — | PK 第二系列（区分 A/B） |

---

## 5. 字体

- **Sans（UI / 正文）**：`var(--font-display)` → `Inter` → 苹方 / 微软雅黑。对齐项目 `fontFamily.display`（layout 里注入 `--font-display`）。Inter 字形中性、数字等宽友好，专业又不冷漠。
- **Serif（少量标题点缀，可选）**：`Source Serif 4, Georgia, Songti SC`。
- **Mono（数据 / 表格数字 / 代码）**：`JetBrains Mono, ui-monospace, SF Mono`。**导航站所有数字列（访问量 / 收藏 / 评分 / 增长）用 mono + `tabular-nums`。**

**比例尺**（px）：`xs 12 · sm 13 · base 14 · md 16 · lg 20 · xl 24 · 2xl 32 · 3xl 48`。正文基准 14px。
**字重**：`400` 正文 / `500` 强调与按钮 / `600` 标题。不上 700+。
**字距**：标题略紧 `-0.01em`（仅作用拉丁字母观感更好）；正文 `0`。
**行高**：`tight 1.2`（标题）/ `normal 1.5`（正文）/ `relaxed 1.7`（长文）。**中文正文建议 1.6–1.7。**

---

## 6. 间距与布局

- **比例尺**（4px 基）：`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`px → `--ds-space-1 ~ 12`。
- **节奏**：组内 8px、组间 16px、区块间 32–40px、大区块 64–96px。
- **容器宽**：内容主区 `max-width: 1200px`；长文阅读区 `680–760px`。
- **栅格**：工具卡网格 lg 4 列 / md 3 列 / sm 2 列 / xs 1 列，gutter 16–24px；排行榜单列、PK 表两列。
- **断点**：sm `401` · md `601` · lg `961` · xl `1200` · 2xl `1400`px。

### 6.1 响应式 Responsive（preview.html 已落地）

- **关键断点 `≤640px`（手机）**：工具卡网格 `.cols-3` 收为 **1 列**；提示条 Alert 双列收 1 列；能力雷达从横排转纵排；容器内边距收紧（`16px 14px`），`h2` 降到 20px；表格/领奖台尺寸压缩。
- **导航折叠**：`≤640px` 时主导航 `.nav` 隐藏，顶栏右侧出现**汉堡按钮 `.nav-toggle`**（内联 SVG，`aria-label`），点开抽屉式菜单（移动端用法）。
- **移动端框（约 375px）**：`.phone` 模块演示真机视图——顶栏（logo + 标题 + 汉堡）+ 搜索框 + 工具卡 + 整宽主操作按钮 + Top 榜单；内容区可滚动，顶栏 `sticky`。所有色仍走 `--ds-*` / `rgb(var(--brand-*))`，**随 4 主题色与明暗一起换肤**。
- **触控**：移动端可点元素维持 ≥44px 高（按钮整宽、榜单行加 padding），数字列保持 mono + `tabular-nums`。
- **写法**：用 `@media (max-width:640px)` 单断点收口为主，配合 `grid-template-columns:1fr` 与隐藏/显示切换；尊重 `prefers-reduced-motion`。

---

## 7. 圆角 / 阴影 / 描边

**圆角**（比企业风略柔，更现代工具站）：

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `8px` | 按钮 / 输入 / 徽章 / 标签 |
| `--ds-radius-md` | `12px` | 工具卡 / 菜单 / 弹层 |
| `--ds-radius-lg` | `16px` | hero / 模态 / 广告大卡 |
| `--ds-radius-full` | `9999px` | 药丸 / 头像 / 开关 / logo 圆角 |

**阴影**（克制柔和、多层弱阴影）：`sm` 抬起卡片 / 按钮 hover；`md` 下拉 / 浮卡；`lg` 模态。暗色改用更深黑透明度（.5–.75）。

**描边**：以**轻边轻影**为主——工具卡优先 `1px solid var(--ds-border)`，hover 时再叠 `shadow-md`，不要边框+重阴影双管齐下。

---

## 8. 动效

- **时长**：`fast 150ms`（hover / 颜色） · `base 200ms`（展开 / 位移） · `slow 250ms`（弹层 / 模态）。不超过 250ms。
- **曲线**：`--ds-ease: cubic-bezier(.22,.61,.36,1)`（ease-out），**无弹跳无回弹**。
- **典型过渡**：工具卡 hover 抬起 + 阴影 200ms；按钮背景色 150ms；搜索建议下拉淡入 + 微位移 200ms；快讯跑马灯线性匀速（项目已有 `ticker-scroll`，hover 暂停）。
- **可减弱动效**：尊重 `prefers-reduced-motion: reduce`，关闭非必要位移/缩放与跑马灯。

---

## 9. 组件规格

> 所有组件走 `var(--ds-*)` 或 `rgb(var(--brand-*))`；高度基线：小 32 / 中 40 / 大 48px；交互目标 ≥44px。

### 按钮 Button

| 变体 | 底 | 文字 | 边框 | 用途 |
|---|---|---|---|---|
| **Primary（实底紫）** | `--ds-primary` | `--ds-primary-fg` | 无 | 页面主操作（每屏唯一，如「官网直达」） |
| **Secondary（描边）** | `--ds-bg` | `--ds-fg` | `1px --ds-border-strong` | 次操作（「加入对比」「收藏」） |
| **Tertiary（幽灵）** | 透明 | `--ds-fg-muted` | 无 | 弱操作 / 工具栏 |
| **Danger** | `--ds-danger` | `#fff` | 无 | 危险操作 |

尺寸 sm `h32/px12` · md `h40/px16` · lg `h48/px20`；圆角 8px；字重 500。
hover → primary 用 `--ds-primary-hover`；focus-visible → `box-shadow: var(--ds-focus-ring)`；disabled → `opacity:.5`。

### 输入框 / 搜索框 Input / Search

- 高 40px（搜索可 44–48px），内边距 `0 12px`（带 lucide `search` 图标时左留 36px），圆角 8px，底 `--ds-bg`，边框 `1px --ds-border-strong`，占位 `--ds-fg-subtle`。
- focus → 边框转 `--ds-primary` + `box-shadow: var(--ds-focus-ring)`。
- **搜索建议下拉**：抬起表面 `--ds-bg-elevated` + `shadow-md`，每条 = logo(圆角 full) + 工具名 + 简介(`fg-muted/text-sm`)，hover 行底 `--ds-bg-subtle`，键盘高亮项底 `--ds-info-bg`。

### 工具卡片 Tool Card

- 底 `--ds-bg-elevated`，边框 `1px --ds-border`，圆角 `--ds-radius-md`(12px)，内边距 `--ds-space-5`(20px)，阴影 `--ds-shadow-sm`。
- **结构**：头部（logo 40–48px 圆角 full / 失败降级首字母头像底用 `brand-100` 字用 `brand-700` + 工具名 `text-md/600` + 定价徽章）→ 简介 `tagline`（`fg-muted/text-sm`，2 行截断）→ 数据脚（访问量 / 收藏 / 评分，mono + `tabular-nums`，图标 lucide `eye`/`heart`/`star`）。
- hover（整卡可点）→ 阴影升 `--ds-shadow-md` + 边框转 `--ds-border-strong`，过渡 200ms。
- **推广卡**：右上角「推广」徽章（底 `--ds-info-bg` 字 `--ds-info-fg`）；空运营位 = 虚线边框 `1px dashed --ds-border-strong` + 居中「广告位 AD · 虚位以待」（`fg-subtle`）。

### 能力雷达 Radar（手写 SVG 思路）

五维评分（易用性 / 功能强度 / 性价比 / 生态集成 / 中文友好），详情页与 PK 页共用。**纯 SVG，零库**：

1. **画布**：`viewBox="0 0 200 200"`，中心 `(100,100)`，半径 `r=80`。
2. **网格**：5 维 → 每维角度 `θ = -90° + i·72°`。画 3–4 圈同心多边形（`stroke=var(--chart-grid)`，`fill=none`）+ 5 条从中心到顶点的轴线（同色）。
3. **顶点**：`x = 100 + r·s·cos(θ)`，`y = 100 + r·s·sin(θ)`，`s = 分值/满分`（0–1）。
4. **数据多边形**：A 系列 `fill="rgb(var(--brand-600) / .18)"` + `stroke="rgb(var(--brand-600))"` `stroke-width=2`，顶点描 `r=3` 圆点。
5. **维度标签**：在每轴外侧 `r+14` 处放 `<text fill="var(--chart-label)" font-size=11>`，`text-anchor` 按象限调 start/middle/end。
6. **PK 双系列**：B 系列改用 `rgb(var(--brand-300))`（或 accent）+ 虚线 `stroke-dasharray`，图例用色块区分 A/B，色盲友好（不靠颜色单独区分，B 用虚线）。

### 流量柱状 / 地区条形（手写 SVG）

- 柱状（近 6 月）：基线与刻度 `var(--chart-grid)`，柱子 `rgb(var(--brand-500))`，hover 柱 `rgb(var(--brand-600))`，数值标签 `var(--chart-label)` mono。
- 地区条形：横向条 `rgb(var(--brand-400))`，百分比文字右对齐 mono `tabular-nums`。

### 排行榜 / 领奖台 Ranking & Podium

- **领奖台（前三名）**：三柱式，金/银/铜用高度区分（中间最高），名次徽章用 lucide `trophy`/`medal`；柱底 `--ds-bg-subtle`，第 1 名描边 `2px --ds-primary`。**不用 emoji 奖杯**。
- **榜单行**：序号（mono，前 3 名用 `brand-600` 字）+ logo + 名称 + 指标列（mono `tabular-nums` 右对齐）+ 增长徽章（涨用 success、跌用 danger，配 lucide `trending-up`/`trending-down`）。行 hover 底 `--ds-bg-subtle`，分隔 `1px --ds-border`。
- 多榜 Tab（流量 / 收藏 / 增长 / 人气 / 新品）：当前项 `--ds-primary` 文字 + 2px 下划线。

### 快讯时间线 Flash Timeline

- 左侧竖时间轴 `1px --ds-border`，节点圆点 `rgb(var(--brand-500))`（最新一条加品牌色光晕 `box-shadow:0 0 0 4px brand-500/15%`）。
- 按天分组：日期分组头 `fg-muted/text-sm/600` 黏顶；每条 = 时间(mono `fg-subtle`) + 标题 + 来源徽章。
- 首页跑马灯联动：复用项目 `ticker-track`，hover 暂停。

### 对比（PK）表格 Compare Table

- 两列对打（A / B），表头吸顶，列头 = logo + 名称；逐行指标对比。
- **胜方标注**：该行更优的一侧单元格底 `--ds-success-bg` + 文字加 lucide `check` 角标 + `fg=success-fg`；劣方保持普通色。不靠颜色单独传达（带对勾图标）。
- 数字单元格 mono `tabular-nums` 右对齐；维度名列 `fg-muted` 左对齐。
- 顶部叠加双系列能力雷达（见上）。

### 模态框 Modal

- **结构**：scrim 遮罩（`rgba(8,13,24,.45)`，覆盖全屏）+ 抬起卡 `--ds-bg-elevated` 圆角 `--ds-radius-lg`(16px) + `--ds-shadow-lg`。
- **三段**：头部（图标 + 标题 `text-md/600` + 关闭按钮（lucide `x`），下边框 `1px --ds-border`）→ 主体 `--ds-space-5` 内边距 → 脚部（右对齐按钮组，底 `--ds-bg-subtle` 上边框 `1px --ds-border`）。
- **按钮**：主操作 Primary（品牌色），次操作 Secondary 描边；关闭钮 hover 底 `--ds-bg-subtle`。
- a11y：`role="dialog"` + `aria-modal="true"` + `aria-labelledby` 指向标题；ESC 关闭、焦点陷阱、打开时锁背景滚动（实现时补）。

### 下拉菜单 Dropdown

- 浮层 `--ds-bg-elevated` 圆角 `--ds-radius-md` + `--ds-shadow-md`，内边距 6px，菜单项圆角 8px。
- **菜单项**：左图标（lucide）+ 文案 + 右侧快捷键（mono `fg-subtle`）；hover 行底 `--ds-bg-subtle`；**选中项**底 `--ds-info-bg` + 文字 `--ds-info-fg` + 品牌色勾。
- **危险项**：文字 `--ds-danger`，hover 底 `--ds-danger-bg`；分组用 `1px --ds-border` 细分隔线。
- a11y：触发钮 `aria-expanded` / `aria-haspopup`；方向键导航、ESC 关闭。

### 工具提示 Tooltip

- 气泡用**反色**（底 `--ds-fg`、字 `--ds-bg`），`text-xs`，圆角 8px + `--ds-shadow-md`，带指向小三角；明暗自动反相。
- 触发：`hover` 与 `focus-within`（键盘可达），`opacity` 150ms 淡入；`pointer-events:none` 不挡交互。
- a11y：内容容器 `role="tooltip"`；触发元素须可聚焦（按钮/链接/带 `tabindex`）。**只放补充信息，不放关键操作。**

### 分页 Pagination

- 页码钮 36px 见方，`--ds-bg-elevated` + `1px --ds-border`；**当前页**实底 `--ds-primary` + `--ds-primary-fg`；hover 描边转 `--ds-border-strong` + 底 `--ds-bg-subtle`。
- 首/末页钮禁用 `aria-disabled="true"` + `opacity:.45`；省略号 `…`（`gap`，不可点）；上一页/下一页用 lucide `chevron-left/right`。
- 页码 mono + `tabular-nums` 对齐；`focus-visible` 显示焦点环。
- a11y：外层 `<nav aria-label="分页">`，当前页 `aria-current="page"`。

### Toast 通知

- 浮层卡 `--ds-bg-elevated` + `1px --ds-border` 全描边 + `--ds-shadow-md`，**前置语义 SVG 图标**（success/info/warning/danger，图标用对应语义色）——不用侧边色条。
- **结构**：图标 + 文案（标题 `600` + 描述 `fg-muted/text-sm`）+ 关闭按钮（lucide `x`，hover 底 `bg-subtle`）。
- 不靠颜色单独传达：每类配对应 lucide 图标（`check-circle`/`info`/`alert-triangle`/`x-circle`）。
- 行为：右上/底部堆叠，自动消失（4–6s）可悬停暂停；a11y 用 `role="status"`（普通）/`role="alert"`（错误）。

### 步骤条 Stepper

- 节点圆点 30px：**已完成**=实底 `--ds-primary` + 白勾；**进行中**=品牌色描边 + `--ds-focus-ring` + 序号品牌色；**待办**=`--ds-border-strong` 描边 + `fg-subtle` 序号。
- 连接线 `.ln` 2px：已过段落 `--ds-primary`，未过 `--ds-border`；序号 mono + `tabular-nums`；标签当前步 `fg/600`、其余 `fg-muted`。
- a11y：容器 `aria-label`，当前步 `aria-current="step"`；窄屏可换行（`flex-wrap`）。

### 面包屑 Breadcrumb

- 路径项 `fg-muted`，hover 底 `bg-subtle` + 转 `fg`；**当前项**（末项）`--ds-primary` + `600`，不可点。
- 分隔符用 lucide `chevron-right`（内联 SVG，`fg-subtle`），随主题换色；**禁止 emoji 箭头**。
- a11y：外层 `<nav aria-label="面包屑">`，当前项 `aria-current="page"`。

### 广告位 Ad Slot

- 已上刊：抬起卡 `--ds-bg-elevated` + `shadow-sm` + 右上「推广」徽章（`info-bg`/`info-fg`）。
- 空位：虚线框 + 「广告位 AD · 虚位以待」+ 招商入口链接（`--ds-accent`）。尺寸按位（banner 大卡 / 信息流卡 / 侧栏窄 / 底部横幅）。

### 徽章 / 标签 · 提示条 · 导航

- **徽章**：高 20–24px，px8，圆角 full，`text-xs/500`。定价标签用语义底（免费=success-bg、付费=warning-bg、Freemium=info-bg）。
- **提示条 Alert**：内边距 `space-4`，圆角 md，**前置语义 SVG 图标 + 浅色底 `*-bg` + 1px 全描边**（不用侧边色条）；四语义底 `*-bg` 字 `*-fg`，不靠颜色单独传达。
- **导航顶栏**：高 56–64px，底 `--ds-bg-elevated` + 下边框 `1px --ds-border`；左 logo + 中导航 + 右（搜索 / 主题切换 / accent 切换 / 暗色切换）。导航项默认 `fg-muted`，当前项 `fg` + 底部 2px `--ds-primary` 指示条。

---

## 10. 可访问性

- **对比度 WCAG AA**：正文 ≥ 4.5:1，大字/图标 ≥ 3:1。各主题 `brand-600` 上白字实测：
  | 主题 | brand-600 上白字对比 | 结论 |
  |---|---|---|
  | violet `#7c3aed` | **5.70:1** | 正文白字 AA 通过 |
  | amber `#d94608` | **4.35:1** | 仅大字/加粗 AA；小字白字请降到 `brand-700` |
  | sky `#0284c7` | **4.10:1** | 仅大字/加粗 AA；正文白字请用 `brand-700` |
  | emerald `#059669` | **3.77:1** | 正文白字不达标，**实底按钮文字用白色时按钮底改 `brand-700`（5.48:1 达标）** |
  - **统一守则**：主操作实底按钮，**白字小字时按钮底用 `brand-700`** 最稳（4 套全部 ≥4.5:1）；默认 violet 用 `brand-600` 即达标。**别在 `brand-500` 及更浅档上放白色小字**（一律不达标）。暗色主操作用 `brand-500` 配深底自洽。
- **焦点**：所有可聚焦控件 `focus-visible` 显示 `var(--ds-focus-ring)`（底环 + 品牌色环），对齐项目 `ring-brand-500`。
- **触控目标 ≥44×44px**：移动端按钮 / 图标钮 / 榜单行 / Tab 用 lg 尺寸或加 padding。
- **数字列**：一律 `tabular-nums` + mono，对齐严谨。
- **图标**：lucide-react，图标按钮必须 `aria-label`；**禁止 emoji 当图标**（含奖杯 / 趋势箭头）。
- **不只靠颜色**：PK 胜方除底色加对勾图标；增长涨跌除红绿加箭头图标。
- **可减弱动效**：尊重 `prefers-reduced-motion`，关跑马灯与位移。

---

## 11. Do / Don't

**Do**
- 品牌色只走 `rgb(var(--brand-*))` 或 `bg-primary`/`text-accent`，让 4 套主题色切换生效。
- 主操作每屏只用一个 Primary 紫按钮，其余降级 secondary / tertiary。
- 数据 / 数字列用 mono + `tabular-nums`，体现导航站严谨。
- 新 UI 一律配 `dark:` 暗色变体；图表用 `var(--chart-*)` + 品牌色，明暗自洽。
- 工具卡轻边轻影：`1px border` + `shadow-sm`，hover 再升阴影。

**Don't**
- **别硬编码紫色 hex**（`#7c3aed` / `#8b5cf6` 等）——破坏 4 主题切换，违反项目硬约束。
- 别把紫色铺满界面——紫是锚点不是底色，铺多了显廉价。
- 别用 emoji 当图标（奖杯 / 火箭 / 箭头），一律 lucide。
- 别在浅档品牌色（500 及更浅）上放白色小字——对比不达标。
- 别引图表库——雷达 / 柱状 / 条形全手写 SVG。
- 别上弹跳 / 回弹动效、别超 250ms。

---

## 12. 如何接入

### 1) 这套 Kit 与项目现有 brand-* 的关系

项目 `frontend/src/app/globals.css` 已定义 `--brand-50..900`（4 套）与 `--chart-*`。本 Kit 的 `tokens.css` **复刻了同样的值**（并补了第 4 套「橙」与 `.brand-*` class 切换写法），同时**新增 `--ds-*` 契约层**并把 `--ds-primary` 桥接到 `rgb(var(--brand-*))`。

- **只想用 ds-* 而保留项目原 brand-* 定义**：把本 `tokens.css` 里的「一、品牌色 4 套主题」整段删掉再引入（项目 globals.css 已提供 `--brand-*`），只保留「二/三」的 `--ds-*` 与 `--chart-*`。
- **想统一由本 Kit 接管**：直接引入完整 `tokens.css`，项目里的 brand 段可删（注意保留 default=violet）。

### 2) 引入 tokens.css

```css
/* globals.css 顶部（在 @tailwind 之后）*/
@import "../../../designsystem/projects/hahatool/tokens.css";
```

### 3) 引 Tailwind preset（同时拿到 ds-* 与 brand-*）

```ts
// tailwind.config.ts
import preset from "../../designsystem/projects/hahatool/tailwind.preset.js";
export default {
  presets: [preset],
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
};
```

之后即可：`class="bg-bg-elevated text-fg border border-border rounded-md shadow-sm"`、`class="bg-primary text-primary-fg hover:bg-primary-hover"`、`class="bg-brand-600 text-white"`、`class="text-brand-500/80"`。

### 4) 切换暗色

```js
document.documentElement.classList.toggle("dark");      // 项目惯例 darkMode:'class'
// 或 document.documentElement.dataset.theme = "dark";   // 两者本 Kit 都支持
```

### 5) 切换 4 套主题色

```js
document.documentElement.dataset.accent = "sky";   // violet(默认) | sky | emerald | amber
// 或 className：document.documentElement.classList.add("brand-emerald");
```

### 6) 手写 SVG 图表配色

```jsx
<polyline stroke="var(--chart-grid)" fill="none" />        {/* 网格 */}
<text fill="var(--chart-label)">易用性</text>               {/* 标签 */}
<polygon fill="rgb(var(--brand-600) / .18)" stroke="rgb(var(--brand-600))" /> {/* 数据 */}
```

---

*HahaTool Kit · 基于企业风 + hahatool 定制 · 契约 `--ds-*` / 品牌 `--brand-*` / 图表 `--chart-*` · 变量契约见 `_base/KIT-TEMPLATE.md`*
