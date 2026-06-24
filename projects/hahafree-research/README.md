# hahafree调研 · TRAE 项目情报台设计系统

> **基于「B 端风」+ hahafree调研 定制，正式化其既有 `DESIGN.md`。**
> 把项目里已有的 oklch 设计令牌（玫瑰主色 + 冷分析强调 + 白底中性面 + 高密度表格）升级为完整、机器可读、契约对齐的 `--ds-*` Kit。给「6000+ 比赛项目、文件线索、分类统计、预测与潜力股 watchlist」的数据分析台用——表格密、数字齐、扫读快、颜色克制。

---

## 1. 一句话气质

**安静的研究台，亮光office下办公：白面、墨字、克制玫瑰高亮、冷调分析强调。** 信息密度第一，颜色让位于数据；玫瑰只点主操作与选中，冷蓝/青承担分析信号，一屏塞满 6000+ 项目仍可逐行比对。

---

## 2. 设计哲学 / 性格

继承「B 端风」的 **密度优先 + 描边分隔 + tabular 数字 + 双层焦点环 + 极克制动效** 骨架，并把项目既有 `DESIGN.md` 的色彩主张正式化为契约：

1. **密度优先**：控件默认 32px，行距紧、区块间距收敛。一屏信息量是首要 KPI（数据台要同屏看更多项目、更多列）。
2. **颜色让位于数据**：界面 90%+ 是白底 + 低彩中性面；**玫瑰 `#9e4799` 是品牌动作色**，只出现在主按钮、选中行、当前赛道、潜力股高亮。
3. **品牌动作 vs 分析信号分色**：玫瑰 = 你要点的操作；**冷青 `#007985`（accent）+ 冷蓝 `#3578b8`（info）= 系统在告诉你的分析结论**（链接、趋势、统计），二者不混。
4. **描边分隔 > 阴影分隔**：表格、指标卡、watchlist 卡片靠 1px 描边划界；阴影只留给下拉/弹层/模态。
5. **数字即数据**：质量分、浏览数、金额、项目数、占比、分页一律 `tabular-nums` + 右对齐，纵向可比对。

**与 B 端基底的关系**：保留全部变量契约与气质；**改**主色（克制蓝 → 项目玫瑰）、accent（同蓝 → 独立冷青分析色）、中性面（纯灰 → 玫瑰微染的低彩中性，对齐 DESIGN.md 的 hue 285/330），**新增** `--chart-*` 手写 SVG 图表令牌（赛道分类序列 + 趋势 + 质量条底槽）。
**与项目 `DESIGN.md` 的关系**：oklch 取值 1:1 转 hex（已逐一验 AA），保留其玫瑰/冷分析/白底中性方向，补齐 hover/active、暗色全主题、语义浅底+底上文字、焦点环、控件三档与图表令牌。

---

## 3. 何时用 / 何时别用

**适合**
- 本项目：TRAE 比赛项目情报台（总览 KPI、密集项目表、赛道分类、预测、潜力股 watchlist）。
- 同类数据分析台 / 情报台 / 监控大盘 / 排行榜（密集表格 + 指标卡 + 手写图表）。
- 内部数据工具、B2B 分析工作台。

**不适合**
- C 端营销页、品牌官网、活动落地页（太克制、缺情绪）。
- 内容消费型阅读产品、娱乐/游戏类（→ 用 editorial / cute）。
- 需要强视觉冲击的发布会 Hero（→ 用 dark-tech）。

---

## 4. 颜色

强调克制，全部满足 WCAG AA（正文 ≥4.5:1，大字/图形 ≥3:1）。色值由项目 `DESIGN.md` 的 oklch 转 hex 并经对比度校验。

### 表面与文字（白底 + 玫瑰微染低彩中性面）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#ffffff` | `#121115` | 主背景 / 分析画布 |
| `--ds-bg-subtle` | `#f8f6f8` | `#1a191d` | 表头底、分组底、页面槽 |
| `--ds-bg-elevated` | `#ffffff` | `#212024` | 卡片、下拉、弹层 |
| `--ds-bg-sunken` | `#efebef` | `#0c0a0e` | 输入槽、斑马深行、质量条底槽 |
| `--ds-fg` | `#12111b` | `#eeecee` | 主文字、表格正文（18.7:1） |
| `--ds-fg-muted` | `#585865` | `#aca9b0` | 表头、辅助说明（7.0:1） |
| `--ds-fg-subtle` | `#9899a3` | `#75737a` | 占位符、禁用、弱提示（仅大字/装饰） |
| `--ds-fg-on-accent` | `#fafafa` | `#fafafa` | 落在强调色上的文字 |
| `--ds-border` | `#dddde3` | `#333236` | 表格线、卡片边、分隔 |
| `--ds-border-strong` | `#c7c6cf` | `#4e4c52` | 输入框边、表头底线、激活分隔 |

### 品牌（玫瑰，保留给主操作/选中）与强调（冷青分析）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#9e4799` | `#a34f9e` | 主按钮、选中行、当前赛道、潜力股高亮（白字 AA：亮 5.27 / 暗 5.04） |
| `--ds-primary-hover` | `#8e3489` | `#be67b7` | hover |
| `--ds-primary-active` | `#7d2278` | `#8e3489` | active / pressed |
| `--ds-primary-fg` | `#fafafa` | `#fafafa` | 主操作上的文字 |
| `--ds-accent` | `#007985` | `#2fabb7` | 链接、分析强调（冷青，与玫瑰品牌动作区分） |
| `--ds-accent-fg` | `#fafafa` | `#0c0a0e` | accent 上的文字 |

> 玫瑰梯度（亮）：`#9e4799`(主) → `#8e3489`(hover) → `#7d2278`(active)。
> **分色原则**：玫瑰 = 用户主动作；冷青/冷蓝 = 系统分析信号。别把玫瑰泼到统计图与链接上。

### 语义状态（主色 + 很淡的底 + 底上文字，底上文字均 ≥6.6:1）

| 语义 | 主色（亮/暗） | 浅底（亮/暗） | 底上文字（亮/暗） | 用途 |
|---|---|---|---|---|
| success | `#1e7546` / `#3fb171` | `#e5faeb` / `#122d1d` | `#006133` / `#8ee0ab` | 已实现、通过、上升趋势 |
| warning | `#ba8400` / `#c58d04` | `#fff1d2` / `#32240a` | `#6f4700` / `#f0c374` | 待观察、Demo/原型、即将到期 |
| danger  | `#bc4945` / `#e2726b` | `#ffe9e6` / `#3a1d1b` | `#9a2929` / `#ffaea6` | 失败、离线、不可访问、下降趋势 |
| info    | `#3578b8` / `#4c9deb` | `#e2f6ff` / `#14283c` | `#00569f` / `#92d0ff` | 进行中、普通提示、统计标注 |

> 浅底用于赛道分类标签 / 状态徽章 / Alert；状态列用「状态点 + 文字」双编码。

### 手写 SVG 图表令牌 `--chart-*`

数据台的趋势条、赛道占比、质量分进度全用纯 SVG/CSS 手绘，不引图表库。分类序列稳定上色，全部对比度 ≥3:1（亮）/ ≥6.6:1（暗）可作图形。

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--chart-1` | `#9e4799` | `#cb7fc5` | rose · 主序列 / 当前选中赛道 |
| `--chart-2` | `#3578b8` | `#5aa3ec` | blue · 冷分析强调 |
| `--chart-3` | `#007985` | `#00b5c5` | teal · 冷分析强调 |
| `--chart-4` | `#1e7546` | `#51b67a` | green · 正向 / 已实现 |
| `--chart-5` | `#b5820c` | `#c8942d` | amber · 待观察 / Demo |
| `--chart-6` | `#6959ae` | `#9e8fe9` | violet · 创意设想 / 第六类 |
| `--chart-grid` | = `--ds-border` | = `--ds-border` | 网格线 / 基准线 |
| `--chart-axis` | = `--ds-fg-subtle` | = `--ds-fg-subtle` | 轴标签 / 刻度 |
| `--chart-track` | = `--ds-bg-sunken` | = `--ds-bg-sunken` | 进度 / 质量条底槽 |
| `--chart-positive` | = `--ds-success` | = `--ds-success` | 上升趋势 |
| `--chart-negative` | = `--ds-danger` | = `--ds-danger` | 下降趋势 |
| `--chart-highlight` | = `--ds-primary` | = `--ds-primary` | 高亮数据点 / 潜力股 |

---

## 5. 字体

**字族**：`"Inter", -apple-system, "PingFang SC", "Microsoft YaHei", …`。Inter 中宫稳、数字清晰，是数据台 UI 事实标准；中文落系统字免外链。**Mono** 用于项目 ID、来源链接、Hash、CLI 输出。

**数字必须 `tabular-nums`**（`--ds-numeric: tabular-nums`）：质量分、浏览数、金额、项目数、占比、时间戳、分页——每个数字等宽，纵向对齐可比对。这是情报台扫读 6000+ 行的关键。

**字号偏小**（base 14px，密度优先）：

| Token | 值 | 用途 |
|---|---|---|
| `--ds-text-xs` | 12px | 表内 Tag、时间戳、轴标签、帮助文字 |
| `--ds-text-sm` | 13px | 密集表格态、次要正文 |
| `--ds-text-base` | 14px | **正文基准**、表单、按钮、表格 |
| `--ds-text-md` | 16px | 卡片标题、区块小标题 |
| `--ds-text-lg` | 18px | 区块标题 |
| `--ds-text-xl` | 20px | 页标题 |
| `--ds-text-2xl` | 24px | 主标题 |
| `--ds-text-3xl` | 30px | KPI 核心大数 |

**字重**：normal 400 / medium 500（表头、按钮、KPI 数）/ bold 600（标题）。靠字号与颜色建层级，少用粗体。
**字距**：标题 `-0.01em`，正文与中文 0。**行高**：紧凑 1.3（标题/表格）、常规 1.5（正文）、宽松 1.7（长说明）。

---

## 6. 间距与布局

**4px 基，偏紧凑**——数据台密度高，节奏比通用 UI 收一档：

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-space-1` | 4px | 图标文字间隙、Tag 内距 |
| `--ds-space-2` | 8px | 控件内水平内距、表格单元上下 |
| `--ds-space-3` | 12px | 表单项垂直间距、表格单元水平内距 |
| `--ds-space-4` | 16px | 组内间距、卡片内距、KPI 卡 gap |
| `--ds-space-6` | 24px | 区块内距、卡片间距 |
| `--ds-space-7` | 32px | 区块间距 |
| `--ds-space-8`–`12` | 40–96px | 大区块 / 页面留白（数据台少用） |

**控件高度三档**：`--ds-control-sm` **24px**（筛选条、行内操作）/ `--ds-control-md` **32px**（**默认**——按钮、输入、选择）/ `--ds-control-lg` **36px**（主提交、显眼操作）。

**布局骨架（对齐项目 DESIGN.md）**：应用外壳 = 紧凑顶栏（48–56px）+ 桌面左侧筛选轨 + 主分析画布；窄屏筛选器堆叠在表格上方。相关分析面板相邻，避免深层嵌套卡片。
**容器**：分析画布铺满；详情/表单 ≤ 720px。**栅格**：12/24 列流式，gutter 16px。

### 响应式 / 移动端

数据台的栅格随宽度收档，但**密集表绝不压列、不换行**——窄屏改横向滚动以保住「逐行逐列比对」的核心价值。断点（`max-width`）：

| 断点 | 处理 |
|---|---|
| ≤ 880px | KPI 卡 `minmax` 收窄至 150px，自动减列 |
| ≤ 640px | **栅格收一列**：KPI / watchlist 单列、色板两列；顶栏搜索与筛选输入弹性占满；分页换行（总数独占一行）；步骤条转纵向、隐藏连接线；Toast 左右贴边 |

- **密集表横向滚动**：`.tbl-wrap { overflow-x:auto }` + `table { min-width:680px }`——窄屏整表横滑，列宽与 `tabular-nums` 对齐不变；表头吸顶 / 首列固定（可选）配合滚动仍可定位。
- **移动端视图（≈375px 手机框）**：KPI 改 2 列紧凑卡；项目表降级为**精简列表**（状态点 + 项目名/ID + 质量分），省去次要列；主操作按钮整宽。窄屏优先「看得见、点得中」，密度让位于触控目标（关键操作 ≥44px）。

---

## 7. 圆角 / 阴影 / 描边

**圆角——小**（数据台不宜过圆）：`--ds-radius-sm` 4px（输入、Tag、状态徽章）/ `--ds-radius-md` 6px（按钮、卡片、下拉）/ `--ds-radius-lg` 8px（KPI 卡、弹层、模态）/ `--ds-radius-full`（状态点、头像、开关）。

**阴影——很弱**（仅浮层，平面靠描边）：
- `--ds-shadow-sm` `0 1px 2px rgba(18,17,27,.05)` — 极轻抬起
- `--ds-shadow-md` — 下拉、Popover、Tooltip
- `--ds-shadow-lg` — 模态、抽屉

> 表格、KPI 卡、watchlist 卡片、分组**一律描边**分隔——这是本风格关键气质，避免「卡片满天飞」。

**描边**：常规 `--ds-border` 1px；`--ds-border-strong` 用于输入框边、表头底线、激活分隔。

---

## 8. 动效

**极克制**——情报台是工作场所，动效只服务于「状态变化可感知」（对齐 DESIGN.md：150–200ms，无页面加载编排）。

- 曲线：`--ds-ease` = `cubic-bezier(.25,.1,.25,1)`（ease-out）。
- 时长：`--ds-dur-fast` 120ms（hover/focus）、`--ds-dur-base` 160ms（默认/选中态/详情面板切换）、`--ds-dur-slow` 200ms（下拉/抽屉）。
- 典型：按钮/输入色变 120ms；行 hover 底色 120ms；选中行/详情面板 160ms；Tab 仅底线滑动。
- **无**弹跳、缩放、视差、页面加载编排。

**`prefers-reduced-motion`**：所有过渡降为 0ms / 仅透明度。

```css
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: .01ms !important; animation-duration: .01ms !important; }
}
```

---

## 9. 组件规格

> 数据情报台专属重点：**指标卡(KPI)、密集数据表、赛道分类标签、潜力股 watchlist、筛选器、分页（每页条数/跳页）、手写图表**；交互浮层与导航：**模态框 Modal、下拉菜单 Dropdown、工具提示 Tooltip、Toast 通知、步骤条 Stepper、面包屑 Breadcrumb**。

### 指标卡 KPI（总览六大计数）

- 结构：短标签（`--ds-fg-muted` 12–13px）+ 核心大数（`--ds-text-3xl` `tabular-nums`）+ 副信息/趋势（`--ds-text-xs`，上升 `--chart-positive`、下降 `--chart-negative`）。
- 卡片：`--ds-bg-elevated` 底 + `--ds-border` 1px 描边 + `--ds-radius-lg`，内距 16px；**不加阴影**。
- 选中/高亮 KPI（如潜力股口径）可在左侧加 3px `--ds-primary` 竖条。

### 密集数据表（**核心组件**）

情报台主角，承载 6000+ 项目。规范：

- **表头**：底 `--ds-bg-subtle`，文字 `--ds-fg-muted` 14px medium，底线 `--ds-border-strong`；可排序列带升/降/无三态图标（激活态 `--ds-primary`，配 `aria-sort`）。
- **行**：单元上下内距 8–10px（紧凑），水平 12px；行底线 `--ds-border`；hover 底 `--ds-bg-subtle`（120ms）；选中行底用浅玫瑰 / `--ds-info-bg`。
- **赛道/类目列**：浅底语义 Tag 或 `--chart-*` 圆点 + 文字。
- **质量分列**：数字（右对齐 `tabular-nums`）+ 迷你进度条（底槽 `--chart-track`，填充按分值映射 `--chart-1`/`--chart-4`/`--chart-5`）。
- **浏览/数量/金额列**：右对齐 `tabular-nums`。
- **状态列**：状态点（实心圆 6–8px，色随语义）+ 文字双编码（已实现/Demo/创意/不可访问）。
- **操作列**：tertiary 文本按钮，sm 尺寸；危险操作用 danger 文本。
- **空态/加载**：空态居中说明 + 主操作；加载用骨架行或顶部细进度条。
- **吸顶/固定列**：长表表头吸顶、固定首列（项目名）。

### 按钮（高度 sm 24 / md 32 / lg 36；圆角 6px；字重 500）

| 类型 | 底色 | 文字 | 边框 | hover | active |
|---|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | 无 | `--ds-primary-hover` | `--ds-primary-active` |
| secondary（线框） | `--ds-bg` | `--ds-fg` | `--ds-border-strong` | 边框/字→`--ds-primary` | 底浅玫瑰 |
| tertiary（文本） | 透明 | `--ds-fg-muted` | 无 | 底 `--ds-bg-subtle` | 底 `--ds-bg-sunken` |
| danger | `--ds-danger` | `#fff` | 无 | 压深 | 更深 |
| disabled | `--ds-bg-sunken` | `--ds-fg-subtle` | `--ds-border` | — | `not-allowed` |

- 内距：sm `0 8px` / md `0 12px` / lg `0 16px`；focus：`box-shadow: var(--ds-focus-ring)`。

### 输入框 / 筛选器（数据台密度）

- 高度跟控件三档（默认 32px、筛选条 24px）；圆角 4–6px；边框 `--ds-border-strong`；内距 `0 12px`；14px。
- 态：hover 描边 `--ds-fg-subtle`；focus 描边 `--ds-primary` + `--ds-focus-ring`；error 描边 `--ds-danger` + 下方红字；disabled 底 `--ds-bg-sunken`。
- **筛选器**：搜索框 + 状态/赛道分段选择（segmented）+ 刷新动作；分段选中态底 `--ds-primary` / 浅玫瑰、字 `--ds-primary`。
- checkbox/radio 16px，选中 `--ds-primary`；switch 药丸高 20px，开 `--ds-primary`。

### 赛道分类标签 / 状态点 / 徽章

- Tag：浅底（语义 `-bg` 或 `--chart-*` 同色淡底）+ 底上文字，圆角 4px，高 20–22px，12px。
- 状态点：实心圆 + 标签文字，表内首选，最省空间。
- 数字徽章：药丸，`--ds-danger` 底 + 白字（未读/异常计数）。

### 潜力股 watchlist 卡片网格

- 卡片网格（responsive grid，gap 16px）：`--ds-bg-elevated` 底 + `--ds-border` 描边 + `--ds-radius-lg`，内距 16px，**无阴影**。
- 内容：项目名（`--ds-text-md` 600）+ 赛道 Tag + 质量分（`tabular-nums` + 迷你条）+ 浏览/趋势副行。
- 潜力高亮：左/顶 `--ds-primary` 细条或玫瑰星标（`--chart-highlight`）；hover 描边转 `--ds-primary`。

### 分页（含每页条数 / 跳页）

- 紧凑：页码方块 28–32px；当前页 `--ds-primary` 底 + 白字（`aria-current="page"`）；hover 描边 `--ds-primary`；上一/下一页边界禁用（`--ds-fg-subtle` + `not-allowed`）。
- **每页条数**：`select`（20 / 50 / 100 / 200），高 30px，边框 `--ds-border-strong`，focus 玫瑰环。
- **跳页**：`tabular-nums` 数字输入框（约 52px）「跳至 __ 页」，回车跳转。
- 总数 / 页码 / 跳页框一律 `tabular-nums`；窄屏总数独占一行、页码换行不挤压。

### 模态框 Modal

- 遮罩：`color-mix(--ds-fg 38% / 透明)` 半透明蒙层，居中，`padding` 留白防贴边。
- 面板：`--ds-bg-elevated` + `--ds-border` 描边 + `--ds-radius-lg` + **`--ds-shadow-lg`**（浮层才用阴影）；最大宽 ≈460px，窄屏 100%。
- 三段：头（标题 600 + 右上关闭按钮 SVG，底线分隔）/ 体（`--ds-text-sm` 说明，数字 `tabular-nums`）/ 脚（右对齐操作，`--ds-bg-subtle` 底 + 顶线）。
- 行为：`role="dialog"` + `aria-modal` + `aria-labelledby`；点遮罩 / 关闭按钮 / `Esc` 关闭；主操作 `--ds-primary`、次操作线框。

### 下拉菜单 Dropdown

- 锚定触发按钮（`aria-haspopup` + `aria-expanded`）；菜单 `--ds-bg-elevated` + 描边 + `--ds-radius-md` + `--ds-shadow-md`，最小宽 ≈184px，内距 4px。
- 菜单项：高 `--ds-control-sm`(24px)，`--ds-text-sm`；**hover / focus** 底 `--ds-bg-subtle`；**选中** `aria-current="true"` 浅玫瑰底 + 玫瑰字；危险项 `--ds-danger-fg` + hover `--ds-danger-bg`。
- 右侧快捷键提示走 mono；分隔线 1px `--ds-border`；点外部 / `Esc` 关闭。

### 工具提示 Tooltip

- 触发元素虚线下划线（`--ds-border-strong`）；气泡反色（底 `--ds-fg` / 字 `--ds-bg`）+ 下指小三角 + `--ds-shadow-md`，`--ds-text-xs`。
- 出现：hover **或** `focus-within`（键盘可达），120ms 透明度 + 轻位移；`role="tooltip"`；气泡内数字 `tabular-nums` + mono。

### Toast 通知

- 右下角堆叠容器（`aria-live="polite"`），单条最大宽 320px，窄屏左右贴边自适应。
- 单条：`--ds-bg-elevated` + 描边 + `--ds-shadow-lg`；前置语义色 SVG 图标（success / warning / danger / info）+ 标题（500）+ 副说明（`--ds-text-xs`）+ 关闭按钮（SVG）。
- 行为：`role="status"`；约 5s 自动消失，可手动关闭；不阻塞操作。

### 步骤条 Stepper

- 横向阶段：圆形序号节点（24px）+ 标题 / 状态副行 + 连接线（2px `--ds-border`）。
- 三态：**已完成** = `--ds-success` 实心 + 对勾 SVG + 连接线转绿；**当前** = `--ds-primary` 实心 + `--ds-focus-ring` + 玫瑰标题；**未来** = 描边空心 + `--ds-fg-muted` 序号。
- 序号 `tabular-nums`；窄屏（≤640px）转纵向堆叠、隐藏连接线。

### 面包屑 Breadcrumb

- `--ds-text-sm`，层级链接 `--ds-fg-muted`，hover 转 `--ds-accent`（冷青）+ `--ds-bg-subtle` 底；分隔符 `/` 用 `--ds-fg-subtle`；当前页 `--ds-fg` + 500 + `aria-current="page"`，不可点。
- `<nav aria-label>` 包裹；窄屏可换行。

### 提示条 Alert

- 四语义：前置语义 SVG 图标 + 浅底（`-bg`）+ 1px 全描边 + 文字（`-fg`），圆角 6px，内距 12px，可关闭。

### 导航

- 顶栏：高 48–56px，底 `--ds-bg` + 底线 `--ds-border`；含 Logo / 全局搜索 / 主题切换。
- 左侧筛选轨 / Tab：Tab 下划线选中 `--ds-primary`；侧项选中底浅玫瑰 + 左 3px `--ds-primary` 竖条。

---

## 10. 可访问性

- **对比度**：正文 ≥4.5:1，大字/图形/图表 ≥3:1。本 Kit 全部色对经 oklch→sRGB 校验：`--ds-fg` 18.7:1、`--ds-fg-muted` 7.0:1、玫瑰白字 5.27:1（亮）/ 5.04:1（暗）、冷青链接 5.13:1、各语义底上文字 ≥6.6:1、`--chart-*` ≥3:1。`--ds-fg-subtle` 仅占位/装饰/大字。
- **焦点**：所有交互元素 `:focus-visible` 显示 `--ds-focus-ring`（双层环），键盘可达。
- **触控目标**：触屏场景 ≥44px；桌面密集态 32px（鼠标精确）但热区不小于视觉尺寸。
- **状态不仅靠色**：状态/趋势用「点/图标/箭头 + 文字」双编码；图表序列辅以图例文字，色盲可辨；排序列有非色彩指示（图标 + `aria-sort`）。
- **表格无障碍**：语义 `<table><thead><th scope>`；行选择用真实 checkbox。
- **可减弱动效**：尊重 `prefers-reduced-motion`。

---

## 11. Do / Don't

**Do**
- 默认 32px 控件、紧凑间距，把 6000+ 项目的信息密度做满。
- 数字列一律 `tabular-nums` + 右对齐（质量分、浏览、金额、占比）。
- 玫瑰只点主操作/选中/潜力股；冷青/冷蓝承担链接与分析信号。
- 表格、KPI 卡、watchlist 用**描边**分隔，阴影只给浮层。
- 状态/趋势「点/箭头 + 文字」双编码；图表配图例。
- 图表只走 `--chart-*` 序列，赛道颜色稳定一致。

**Don't**
- 别把玫瑰泼到统计图、链接、普通文字上——会淹没真正的主操作与潜力股高亮。
- 别放大圆角（>8px）——数据台显得不专业。
- 别给每张 KPI/watchlist 卡加阴影——破坏平面秩序。
- 别用比例字排数字——列会跳动、难比对。
- 别加弹跳/缩放/视差/页面加载编排——干扰长时分析。
- 别为「好看」牺牲密度——情报台核心价值是效率。

---

## 12. 如何接入

**1. 引入 tokens.css**（全部 `--ds-*` / `--chart-*` 变量 + 亮/暗主题）：

```html
<link rel="stylesheet" href="./projects/hahafree-research/tokens.css" />
```

**2. 用变量**（不硬编码）：

```css
.kpi-value { font: var(--ds-weight-bold) var(--ds-text-3xl)/1.1 var(--ds-font-sans);
  font-variant-numeric: var(--ds-numeric); color: var(--ds-fg); }
.btn-primary { height: var(--ds-control-md); padding: 0 var(--ds-space-3);
  background: var(--ds-primary); color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-md);
  transition: background var(--ds-dur-fast) var(--ds-ease); }
.btn-primary:hover { background: var(--ds-primary-hover); }
.btn-primary:focus-visible { box-shadow: var(--ds-focus-ring); outline: none; }
.cell--num { text-align: right; font-variant-numeric: var(--ds-numeric); }
.quality-bar > i { background: var(--chart-1); }
.quality-bar { background: var(--chart-track); }
```

**3. 切暗色**：`<html>` 上设 `data-theme="dark"` 或 `class="dark"`：

```js
document.documentElement.dataset.theme = 'dark';
```

**4. Tailwind 4 / React 19 + HeroUI 项目**：引入 preset，类名直接消费变量：

```js
// tailwind.config.js
module.exports = { presets: [require('./projects/hahafree-research/tailwind.preset.js')] };
```

```html
<button class="h-control-md px-3 bg-primary text-primary-fg rounded-md font-medium
               hover:bg-primary-hover focus-visible:shadow-focus">分析</button>
<td class="text-right tabular-nums text-fg">1,284,902</td>
<span class="inline-block size-2 rounded-full" style="background:var(--chart-1)"></span>
```

> 本 Kit 由项目 `DESIGN.md`（oklch）正式化而来，色值已逐一通过 WCAG AA 校验，可放心替换原内联令牌。
