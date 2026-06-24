# B 端风 · 后台控制台（B-side Console）

> 高密度、信息优先、中性克制的后台控制台设计系统。为管理系统、数据看板、控制台、运营平台而生——表格友好、表单密集、效率至上。对标 Ant Design / Arco 的克制版。

---

## 1. 一句话气质

**信息密度第一，颜色让位于数据。** 中性灰打底，克制蓝点睛，圆角小、间距紧、阴影弱；一屏能塞下更多内容，且每一处都可扫读。给那些「用户一天盯八小时」的后台。

---

## 2. 设计哲学 / 性格

继承 Geist 的 **语义分层 + 比例尺 + 成对状态色 + 双层焦点环** 骨架，但把气质调向「企业后台」：

1. **密度优先**：控件比通用 UI 更矮（默认 32px），行距更紧，区块间距收敛。一屏信息量是首要 KPI。
2. **中性承载、强调克制**：界面 95% 是灰阶，克制蓝 `#165dff` 只出现在主操作、链接、当前选择、关键状态上。
3. **描边分隔 > 阴影分隔**：表格、卡片、分组靠 1px 描边划界，阴影只留给真正浮起的层（下拉、弹层、模态）。
4. **数字即数据**：所有数值列、统计、ID 一律 `tabular-nums` 等宽对齐，右对齐数字便于纵向比对。
5. **可扫读**：表头清晰、对齐稳定、状态点一眼可辨；动效极克制，不打断阅读。

**与 Geist 的关系**：保留变量契约与思想；**改**圆角（16px→8px 收小）、间距（更紧）、字号（更小 base 14px）、主色（黑→克制蓝），并新增控件高度三档与 tabular-nums 约定。

---

## 3. 何时用 / 何时别用

**适合**
- 管理后台 / CMS / 运营平台 / 工单系统
- 数据看板、报表、监控大盘（密集表格 + 指标卡）
- 控制台（云控制台、设备管理、配置中心）
- 内部工具、B2B SaaS 工作台

**不适合**
- C 端营销页、品牌官网、活动落地页（太克制、缺情绪）
- 儿童 / 娱乐 / 游戏类产品（→ 用 cute / pixel）
- 内容消费型阅读产品（→ 用 editorial）
- 需要强视觉冲击的发布会/Hero 场景（→ 用 dark-tech）

---

## 4. 颜色

强调克制：界面默认中性，颜色只承担「操作 / 状态 / 选择」语义。所有色值满足 WCAG AA（正文 ≥4.5:1，大字/图形 ≥3:1）。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#ffffff` | `#17171a` | 主背景 / 内容区 |
| `--ds-bg-subtle` | `#f5f6f8` | `#1d1d20` | 次背景：表头底、分组底、页面槽 |
| `--ds-bg-elevated` | `#ffffff` | `#232328` | 抬起表面：卡片、下拉、弹层 |
| `--ds-bg-sunken` | `#eef0f3` | `#131316` | 凹陷：输入槽、代码块、斑马纹深行 |
| `--ds-fg` | `#1d2129` | `#e8e8ea` | 主文字、表格正文 |
| `--ds-fg-muted` | `#4e5969` | `#9da0a8` | 次要文字、表头、辅助说明 |
| `--ds-fg-subtle` | `#86909c` | `#6b6e76` | 占位符、禁用、弱提示 |
| `--ds-fg-on-accent` | `#ffffff` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#e5e6eb` | `#2e2e33` | 常规描边：表格线、卡片边、分隔 |
| `--ds-border-strong` | `#c9cdd4` | `#44454c` | 强描边：输入框、激活分隔、表头底线 |

### 品牌与强调（克制蓝梯度）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#165dff` | `#2f6fea` | 主按钮、选中行、当前项（暗色压深以保白字 AA 4.58:1） |
| `--ds-primary-hover` | `#0e42d2` | `#5c95ff` | hover（亮色压深、暗色提亮） |
| `--ds-primary-active` | `#0a30a0` | `#1f63e6` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#ffffff` | 主操作上的文字 |
| `--ds-accent` | `#165dff` | `#2f6fea` | 链接、次强调（同主色，B端不另设色相） |
| `--ds-accent-fg` | `#ffffff` | `#ffffff` | accent 上的文字 |

> 蓝梯度（亮）：`#e8f3ff`(底) → `#4080ff`(浅) → `#165dff`(主) → `#0e42d2`(hover) → `#0a30a0`(active)。

### 语义状态（主色 + 很淡的底 + 底上文字）

| 语义 | 主色（亮/暗） | 浅底（亮/暗） | 底上文字（亮/暗） | 用途 |
|---|---|---|---|---|
| success | `#00b42a` / `#27c346` | `#e8ffea` / `#0f2914` | `#006622` / `#aef2bd` | 成功、在线、通过 |
| warning | `#ff7d00` / `#ff9a2e` | `#fff7e8` / `#2e1c07` | `#8c4b00` / `#ffdcae` | 警告、待处理、即将到期 |
| danger  | `#f53f3f` / `#ff6b6b` | `#ffece8` / `#2e1213` | `#a8071a` / `#ffc9c9` | 错误、离线、失败、删除 |
| info    | `#165dff` / `#3c7eff` | `#e8f3ff` / `#0e1c3a` | `#0a30a0` / `#bcd6ff` | 普通提示、进行中 |

> 浅底用于 Tag / Alert / 状态徽章；底上文字保证 ≥4.5:1。状态点（dot）直接用主色实心圆，配文字标签。

---

## 5. 字体

**字族**：`"Inter", -apple-system, "PingFang SC", "Microsoft YaHei", …`。Inter 中宫稳、字形开、数字清晰，是后台 UI 的事实标准；中文落到 PingFang / 雅黑系统字，免外链。**Mono** 以 `"JetBrains Mono"` 打头，用于 ID、日志、Hash、配置代码。

**真实字体（本地 woff2，免外网）**：preview.html `<head>` 顶部引入共享字体表 `<link rel="stylesheet" href="../../_fonts/fonts.css" />`，提供 Inter（400/500/600/700）与 JetBrains Mono（400/500）的本地 woff2，拉丁字形即时可见，中文仍走系统回退。字体名与 `--ds-font-sans` / `--ds-font-mono` 的声明一致，**无需改 token**；除 fonts.css 外不引任何外网资源。

**数字必须 `tabular-nums`**：所有数据列、统计指标、分页、时间戳，用 `font-variant-numeric: tabular-nums` 让每个数字等宽，纵向对齐可比对。变量 `--ds-numeric: tabular-nums`。

**字号偏小**（base 13–14px，密度优先）：

| Token | 值 | 用途 |
|---|---|---|
| `--ds-text-xs` | 12px | 辅助说明、表格内 Tag、时间戳 |
| `--ds-text-sm` | 13px | 表格密集态、次要正文 |
| `--ds-text-base` | 14px | **正文基准**、表单、按钮、表格 |
| `--ds-text-md` | 16px | 小标题、卡片标题 |
| `--ds-text-lg` | 18px | 区块标题 |
| `--ds-text-xl` | 20px | 页标题 |
| `--ds-text-2xl` | 24px | 主标题、统计大数 |
| `--ds-text-3xl` | 30px | 看板核心指标 |

**字重**：normal 400 / medium 500（表头、按钮、强调）/ bold 600（标题）。后台少用粗体，靠字号与颜色建立层级。
**字距**：标题 `-0.01em`，正文 0。
**行高**：紧凑 1.3（标题/表格）、常规 1.5（正文）、宽松 1.7（长说明）。
**中文适配**：中文不用负字距；中英混排靠 system 中文回退，字号 13–14 在中文下仍清晰。

---

## 6. 间距与布局

**4px 基，偏紧凑**。后台密度高，节奏比通用 UI 收一档：

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-space-1` | 4px | 图标与文字间隙、Tag 内边距 |
| `--ds-space-2` | 8px | 控件内水平内边距、表格单元上下 |
| `--ds-space-3` | 12px | 表单项垂直间距、表格单元水平内边距 |
| `--ds-space-4` | 16px | 组内间距、卡片内边距 |
| `--ds-space-5` | 20px | — |
| `--ds-space-6` | 24px | 区块内边距、卡片间距 |
| `--ds-space-7` | 32px | 区块间距 |
| `--ds-space-8`–`12` | 40–96px | 大区块 / 页面留白（后台少用） |

**控件高度三档**（密度核心）：
- `--ds-control-sm` **24px**：紧凑表格内操作、筛选条、行内编辑
- `--ds-control-md` **32px**：**默认**——按钮、输入、选择
- `--ds-control-lg` **36px**：表单主提交、显眼操作

**节奏**：表单项间 12px、组内 8px、组间 16px、区块间 32px。
**容器**：内容区无强制最大宽（后台铺满）；表单建议 ≤ 720px，详情页两栏。
**栅格**：24 列流式（对齐 Ant/Arco 习惯），常用 gutter 16px。
**布局骨架**：左侧导航（收起 48px / 展开 220px）+ 顶栏 48–56px + 内容区。

### 响应式 / 移动端

后台以桌面为主，但需在窄屏（平板竖屏 / 手机）保持可用。两档断点：

| 断点 | 处理 |
|---|---|
| **≤ 840px** | 侧边导航收起（让位内容）；**宽表横向滚动**：表格容器 `overflow-x:auto` + 表格 `min-width`（如 680px）保住列宽与对齐，不挤压数字列。 |
| **≤ 640px** | 多列栅格（`.grid-3` 指标卡 / 卡片）**收为一列**；分页条 / 工具条 `flex-wrap` 换行；内容区内边距收一档（24px→16px）；色板列更窄。 |

**宽表在窄屏的处理（重点）**：B 端表格列多，强行压缩会破坏 `tabular-nums` 对齐、让数字跳动难比对。因此**优先横向滚动**（容器滚、表头同滚或吸顶），而非换行折叠；首列（名称/ID）可固定，滚动时加阴影提示。次选「卡片化」——把每行折叠成纵向键值卡（见「移动端 Mobile」块），适合面向终端用户的轻量列表。

**移动端骨架**：顶栏（品牌 + 主操作）+ 紧凑卡片（指标 / 列表）+ 全宽按钮；卡片内边距用 `--ds-space-3`，数字仍走 `tabular-nums`。触屏控件热区建议 ≥ 44px（桌面密集态 32px 仅适合鼠标精确点击）。

```css
@media (max-width:840px){ .sidebar{display:none} .table-wrap{overflow-x:auto} table.data{min-width:680px} }
@media (max-width:640px){ .grid-3{grid-template-columns:1fr} .pager{flex-wrap:wrap} }
```

---

## 7. 圆角 / 阴影 / 描边

**圆角——小**（B 端不宜过圆，过圆显得「玩具」）：

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | 4px | 输入、Tag、徽章、小按钮 |
| `--ds-radius-md` | 6px | 按钮、卡片、下拉、输入框 |
| `--ds-radius-lg` | 8px | 卡片、弹层、模态 |
| `--ds-radius-full` | 9999px | 状态点、头像、开关、药丸标签 |

**阴影——很弱**（仅浮层用，平面靠描边）：
- `--ds-shadow-sm`：`0 1px 2px rgba(29,33,41,.04)` — 极轻抬起
- `--ds-shadow-md`：下拉、Popover、Tooltip
- `--ds-shadow-lg`：模态、抽屉

> 表格、卡片、分组**一律用描边**而非阴影分隔——这是 B 端风的关键气质，避免「卡片满天飞」的浮夸感。

**描边**：常规 `--ds-border` 1px 划线；`--ds-border-strong` 用于输入框边、表头底线、激活分隔。

**层级（语义 z-index）**：层叠顺序用语义尺度，不写 `9999` 等魔法值——
`--ds-z-dropdown`(1000) < `--ds-z-sticky`(1100) < `--ds-z-modal-backdrop`(1200) < `--ds-z-modal`(1300) < `--ds-z-toast`(1400) < `--ds-z-tooltip`(1500)。顶栏吸顶用 sticky，弹层/弹窗/提示按语义取值。

**图标**：统一为内联线性 SVG（`viewBox="0 0 24 24"`，16–18px，线宽 1.8，`stroke="currentColor"`，颜色随上下文语义色）——侧栏、Alert/Toast 语义提示、指标涨跌、表格排序、步骤完成、主题切换均走同一套，不用彩色 emoji。

---

## 8. 动效

**极克制**——后台是工作场所，动效服务于「状态变化可感知」，绝不炫技。

- 曲线：`--ds-ease` = `cubic-bezier(.25,.1,.25,1)`（ease-out，干净利落）
- 时长：`--ds-dur-fast` 120ms（hover/focus）、`--ds-dur-base` 160ms（默认过渡）、`--ds-dur-slow` 200ms（下拉展开/抽屉）
- 典型过渡：按钮/输入色变 120ms；下拉/Popover 淡入+轻微位移 160ms；行 hover 背景色 120ms；切换 Tab 无位移仅底线滑动。
- **无**弹跳、无缩放放大、无视差。

**`prefers-reduced-motion`**：所有过渡降为 0ms / 仅透明度，保证可用性。

```css
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: .01ms !important; animation-duration: .01ms !important; }
}
```

---

## 9. 组件规格

> 重点章节：**表格** 与 **表单密度**。其余给关键尺寸/色/态。

### 按钮（高度三档：sm 24 / md 32 / lg 36；圆角 md 6px；字重 500）

| 类型 | 底色 | 文字 | 边框 | hover | active |
|---|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | 无 | `--ds-primary-hover` | `--ds-primary-active` |
| secondary（默认/线框） | `--ds-bg` | `--ds-fg` | `--ds-border-strong` | 边框→`--ds-primary`、字→`--ds-primary` | 底淡蓝 `--ds-info-bg` |
| tertiary（文本） | 透明 | `--ds-fg-muted` | 无 | 底 `--ds-bg-subtle` | 底 `--ds-bg-sunken` |
| danger | `--ds-danger` | `#fff` | 无 | 压深 | 更深 |
| disabled | `--ds-bg-sunken` | `--ds-fg-subtle` | `--ds-border` | — | `cursor:not-allowed` |

- 内边距：sm `0 8px` / md `0 12px` / lg `0 16px`；图标按钮为正方形（24/32/36）。
- focus：`box-shadow: var(--ds-focus-ring)`。

### 输入框 / 表单密度（**重点**）

- **高度跟控件三档**：默认 32px、紧凑 24px、大 36px；圆角 4–6px；边框 `--ds-border-strong` 1px；内边距 `0 12px`；字号 14px。
- 态：默认描边 `--ds-border-strong`；hover 描边 `--ds-fg-subtle`；focus 描边 `--ds-primary` + `--ds-focus-ring`；error 描边 `--ds-danger` + 下方红字；disabled 底 `--ds-bg-sunken`、字 `--ds-fg-subtle`。
- 占位符：`--ds-fg-subtle`。
- **表单密度规范**：
  - 标签建议**左对齐顶置**或**左列定宽**（如 88px）；标签字号 14、色 `--ds-fg-muted`。
  - 表单项垂直间距 **12px**（紧凑）；同行多控件 gutter 8–12px。
  - 必填星号 `--ds-danger`；帮助文字 12px `--ds-fg-subtle`，行内错误 12px `--ds-danger`。
  - 行内编辑、筛选条用 sm 24px 控件，进一步提密度。
- checkbox / radio：16px 方/圆；选中 `--ds-primary`；switch：药丸，开 `--ds-primary`、关 `--ds-border-strong`，高 20px。

### 表格（**核心组件**）

后台的主角。规范：

- **表头**：底 `--ds-bg-subtle`，文字 `--ds-fg-muted` 14px medium，底线 `--ds-border-strong` 1px；列可设排序图标（升/降/无三态，激活态图标 `--ds-primary`）。
- **行**：单元上下内边距 8–10px（紧凑）/ 12px（默认），水平 12px；行底线 `--ds-border` 1px；行 hover 底 `--ds-bg-subtle`（120ms）；选中行底 `--ds-info-bg`。
- **斑马纹（可选）**：偶数行底 `--ds-bg-subtle`；密集大表推荐开启提升扫读。
- **对齐**：文本左对齐；**数字 / 金额 / 百分比右对齐**并加 `tabular-nums`；状态/操作居中或左对齐。
- **数字列**：一律 `font-variant-numeric: tabular-nums`，等宽便于纵向比对。
- **状态列**：状态点（实心圆 `--ds-radius-full`，6–8px，色随语义）+ 文字标签；或语义 Tag（浅底 + 底上文字）。
- **操作列**：tertiary/文本按钮 + 分隔，sm 尺寸；危险操作用 danger 文本。
- **空态 / 加载**：空态居中插画位 + 说明 + 主操作；加载用骨架行或顶部细进度条。
- **固定列 / 表头吸顶**：长表固定首列与表头；横向滚动时阴影提示。

### 分页（**B 端重点**）

后台大表必备。紧凑且功能完整：

- **页码按钮** 28–32px 方；当前页 `--ds-primary` 底 + 白字（边框同主色）；hover 描边/文字 `--ds-primary`；省略号 `…` 折叠中间页。前后用 `‹ ›` 翻页。
- **总数显示**：「共 N 条」左侧，数字 `tabular-nums`。
- **每页条数（page size）**：紧凑 `<select>`（sm 24px），常见 5 / 10 / 20 / 50；切换后回到第 1 页。
- **跳页（quick jump）**：「跳至 [__] 页」窄输入框（44px，居中、`tabular-nums`），回车跳转。
- 整条用 `flex`，左信息 / 右控件；窄屏 `flex-wrap` 换行（见响应式）。

### 标签 / 徽章 / 状态点

- Tag：浅底（语义 `-bg`）+ 底上文字（语义 `-fg`），圆角 4px，高 20–22px，字 12px。
- 状态点：实心圆 + 标签文字，最省空间，表格内首选。
- 数字徽章（badge）：药丸，`--ds-danger` 底 + 白字，用于未读计数。

### 提示条 Alert

- 四语义：**前置语义 SVG 图标**（成功对勾 / 警告三角 / 危险叉 / 信息 i，16px 线性、`currentColor` 随语义色）+ 浅底（`-bg`）+ **1px 全描边**（语义主色），圆角 6px，内边距 12px；可关闭。不用左侧色条。后台优先轻量、信息明确。

### 导航

- **侧边导航**：分组标题 12px `--ds-fg-subtle`；菜单项高 36px，hover 底 `--ds-bg-subtle`，选中底 `--ds-info-bg` + 左 3px `--ds-primary` 竖条 + 文字 `--ds-primary`；支持折叠到 48px 仅图标。
- **顶栏**：高 48–56px，底 `--ds-bg`，底线 `--ds-border`；含 Logo / 全局搜索 / 通知 / 用户菜单。
- **面包屑 / Tab**：Tab 下划线选中态 `--ds-primary`；面包屑文字 `--ds-fg-muted`，当前页 `--ds-fg`。

### 面包屑 Breadcrumb

- 层级链：文字 `--ds-fg-muted` 13px，分隔符 `/` 用 `--ds-fg-subtle`；hover 文字 `--ds-primary` + 底 `--ds-bg-subtle`；当前页 `--ds-fg` medium、不可点（`aria-current="page"`）。窄屏可省略中间层为 `…`。

### 步骤条 Stepper

- 横向节点：圆形序号 24px。**已完成** = `--ds-primary` 实底 + 白色对勾 SVG、连线 `--ds-primary`；**进行中（active）** = 边框/文字 `--ds-primary`、标签 medium；**未开始** = 边框 `--ds-border-strong`、文字/连线 `--ds-fg-subtle`。标签 12px。窄屏横向滚动。

### 下拉菜单 Dropdown

- 浮层：底 `--ds-bg-elevated`、1px `--ds-border`、圆角 6px、`--ds-shadow-md`；内边距 4px。
- 菜单项：高 32px、圆角 4px；**hover** 底 `--ds-bg-subtle`；**选中（active）** 底 `--ds-info-bg` + 文字 `--ds-primary` medium；**危险项** 文字 `--ds-danger-fg`（AA 安全红字）、hover 底 `--ds-danger-bg`；可带右侧快捷键（mono、`--ds-fg-subtle`）。分隔线 `--ds-border` 1px。

### 工具提示 Tooltip

- 深色气泡：底 `--ds-fg`、文字 `--ds-bg`（亮暗自动反相，保证 AA）、圆角 4px、12px、`--ds-shadow-md`，带小箭头。触发：hover / `focus-within` 淡入（120ms）；定位于目标上方 6px。承载简短说明，不放交互元素。

### 模态框 Modal

- 遮罩：`rgba(29,33,41,.45)` 全屏居中。
- 弹窗：底 `--ds-bg-elevated`、圆角 8px（lg）、`--ds-shadow-lg`（浮层靠阴影抬起，不再叠 1px 描边，避免「描边 + 大模糊阴影」并存）、`max-width≈420px`。
- 结构：头（标题 16px bold + 关闭 ×，底线 `--ds-border`）/ 体（`--ds-fg-muted`，内边距 16px）/ 脚（右对齐按钮组，取消 tertiary + 主操作；删除场景用 danger）。
- 无障碍：`role="dialog" aria-modal="true" aria-labelledby`；焦点锁定、Esc 关闭。

### Toast 通知

- 卡片：底 `--ds-bg-elevated`、**1px 全描边** `--ds-border` + **前置语义 SVG 图标**（success/warning/danger/info，图标取语义主色）、圆角 6px、`--ds-shadow-md`（8px 软阴影，单层不与大模糊并存）、`min-width≈280px`。不用左侧色条。
- 结构：标题 medium + 描述（13px `--ds-fg-muted`，数字 `tabular-nums`）+ 关闭 ×。通常右上/右下堆叠，数秒自动消失（reduced-motion 下立即）。区别于 Alert：Toast 是临时、浮层、轻量；Alert 是常驻、嵌入页面。

---

## 10. 可访问性

- **对比度**：正文 ≥4.5:1，大字/图标 ≥3:1。`--ds-fg-subtle` 仅用于占位/弱提示且配合足够字号；状态浅底上的 `-fg` 文字均达 AA。
- **焦点**：所有可交互元素 `:focus-visible` 显示 `--ds-focus-ring`（双层环：先 bg 底环再主色环），键盘可达。
- **触控目标**：移动/触屏场景控件 ≥44px；后台桌面密集态默认 32px 可接受（鼠标精确），但保证点击热区不小于视觉尺寸。
- **状态不仅靠色**：状态用「点 + 文字」或「图标 + 文字」双编码，色盲可辨；表格排序/选中有非色彩指示。
- **可减弱动效**：尊重 `prefers-reduced-motion`。
- **表格无障碍**：用语义 `<table><thead><th scope>`；可排序列用 `aria-sort`；行选择用真实 checkbox。

---

## 11. Do / Don't

**Do**
- 默认用 32px 控件、紧凑间距，把信息密度做满。
- 数字列一律 `tabular-nums` + 右对齐，便于比对。
- 表格 / 卡片 / 分组用 **描边** 分隔，阴影只给浮层。
- 状态用「点/图标 + 文字」双编码，浅底 Tag 表达语义。
- 颜色克制——克制蓝只点主操作、链接、选中、关键状态。

**Don't**
- 别把圆角放大（>8px）——后台显得幼稚、不专业。
- 别给每个卡片都加阴影——浮夸且破坏平面秩序。
- 别用比例字（proportional）排数字——列会跳动、难比对。
- 别滥用强调色——满屏蓝/红会淹没真正需要注意的状态。
- 别加弹跳/缩放/视差动效——干扰长时阅读。
- 别为追求「好看」牺牲密度——B 端核心价值是效率。

---

## 12. 预览页展示（preview.html）

`preview.html` 是本 Kit 的作品级展示页，除组件清单外按 Showcase v2 标准做了富化，演示「设计系统如何落到真实界面」。所有图片来自共享素材库 `../../_assets/**`（`loading="lazy"` + 有意义 `alt`），除 `../../_fonts/fonts.css` 与本地素材外无任何外链。

### 顶部 Hero

整页首屏为分栏 Hero：左侧标题 / 副标题 / CTA 按钮 + 四枚关键指标（活跃用户、交易额、可用性、P95 延迟，`tabular-nums`），右侧本风格美术图 `gen/bside-hero.jpg`（小圆角 + 1px 描边 + 悬浮状态徽标）。消灭首屏大留白，一眼传达「高密度后台」气质。

### 图片用法 Image Usage

图片处理遵循本风格身份——**规整、统一比例、小圆角（`--ds-radius-md/lg`）、靠 1px 描边而非阴影**：

- **统一宽高比框**：16:9 / 4:3 / 1:1 / 3:4，统一 `aspect-ratio` + `object-fit:cover`。
- **媒体卡**：图在上 + 标题 / 正文 / 状态 Tag / 操作（成网格）。
- **画廊网格**：等高网格（含一个 2×宽单元），hover 轻微放大（克制）。
- **图文混排**：大图 + 段落 + 勾选要点并排（产品介绍感）。
- **图上叠字 Overlay**：图 + 渐变 scrim + 标题，保证文字 AA。
- **头像用法**：尺寸阶 24 / 32 / 40 / 48、堆叠头像组（`avatar-stack`，含 `+N` 计数）、用户行（头像 + 名 + 签名）。
- **背景大图区**：full-bleed 背景图 + 半透明遮罩 + 内容与统计。

### 图标用法 Icon Usage

统一为内联线性 SVG（`viewBox="0 0 24 24"`、线宽 1.8、`stroke="currentColor"`），与组件区同一套图标语言：

- **图标集**：16 枚命名图标网格（dashboard / order / users / search / settings / bell …）。
- **尺寸阶**：16 / 20 / 24 / 32，基线对齐；并列演示**线性 stroke vs 实心 fill**。
- **在场景里**：图标按钮（仅图标 + `aria-label`）、按钮内前 / 后置图标、输入框前 / 后置图标、状态图标（语义色）、带数字徽标的图标。

### 桌面布局 Desktop Layouts（≥2）

每个布局放进带浏览器 chrome 的 frame（圆点 + 地址栏 + 标注），用本风格 token + 真实图片做成可信缩略界面：

1. **控制台仪表盘**：迷你侧栏导航 + 顶栏 + 三枚 KPI 卡 + 柱状趋势图（纯 CSS）。
2. **列表-详情 / 数据管理**：左侧带缩略图的资产列表（选中态、状态点）+ 右侧详情大图 + 元信息网格 + 操作按钮。

### 移动布局 Mobile Layouts（≥2）

约 300–390px 手机框，含状态栏 / 听筒意象，内容真实饱满，数字仍走 `tabular-nums`：

1. **App 首页**：顶栏 + 大图 header（叠字）+ 卡片 feed + 底部标签栏（图标）。
2. **资产详情页**：返回栏 + 大图 header + 键值信息列表 + 底部操作。
3. **工单收件箱**：带头像的列表行（名称 / 摘要 / 时间）。

> 富化区块全部复用既有 `--ds-*` 契约、`fonts.css`、组件样式与表格密度，未新增任何 token 或外链；身份特征（中性灰 + 高密度 + 小圆角 + 弱阴影靠描边、图片小圆角统一比例）一以贯之。

---

## 13. 如何接入

**1. 引入 tokens.css**（提供全部 `--ds-*` 变量与亮/暗主题）：

```html
<link rel="stylesheet" href="./styles/04-b-side/tokens.css" />
```

**2. 用变量**（不硬编码取值）：

```css
.btn-primary {
  height: var(--ds-control-md);
  padding: 0 var(--ds-space-3);
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-md);
  font: var(--ds-weight-medium) var(--ds-text-base)/1 var(--ds-font-sans);
  transition: background var(--ds-dur-fast) var(--ds-ease);
}
.btn-primary:hover  { background: var(--ds-primary-hover); }
.btn-primary:focus-visible { box-shadow: var(--ds-focus-ring); outline: none; }

.data-cell--num { text-align: right; font-variant-numeric: var(--ds-numeric); }
```

**3. 切暗色**：在 `<html>` 上设 `data-theme="dark"` 或 `class="dark"`（tokens.css 两者都覆盖）：

```js
document.documentElement.dataset.theme = 'dark';
```

**4. Tailwind 项目**：引入 preset，类名直接消费变量：

```js
// tailwind.config.js
module.exports = { presets: [require('./styles/04-b-side/tailwind.preset.js')] };
```

```html
<button class="h-control-md px-3 bg-primary text-primary-fg rounded-md font-medium
               hover:bg-primary-hover focus-visible:shadow-focus">保存</button>
<td class="text-right tabular-nums text-fg">1,284,902.50</td>
```

**5. 机器读取**：`tokens.json` 提供同一套语义，供构建脚本 / Figma / 文档工具消费。
