# Orbit HUD · 航天终端 / 科幻 HUD

> 暗色优先的「航天接入终端 / 在轨控制」设计系统。深蓝黑海军底 + 一束克制的离子蓝辉光 + 玻璃面板 + 等宽坐标 / 状态标注。为遥测面板、控制台、技术感 SaaS 而生——打开就像坐进了一台昂贵、精密、近未来的控制席。

---

## 1. 一句话气质

深蓝海军做底、一束离子蓝做光、冷白字做骨——电影感、克制、可审计。它**只点一种光**：不是繁忙霓虹赛博，而是一台造价不菲的轨道终端。默认即暗色，亮色是它的「白昼运维模式」。

---

## 2. 设计哲学 / 性格

本风格继承同一套 `--ds-*` 语义骨架（**语义分层 + 比例尺驱动 + 状态色成对 + 可见焦点环**），但在气质上做了五处关键取舍：

1. **暗色优先（Dark First）** —— `:root` 直接写暗色（深蓝海军 `#060810`），`[data-theme="light"]` / `.light` 才翻成亮色。控制席长时间盯屏，深空底是默认体验，亮色是补充。
2. **一束光，不是一片光** —— 全系统只用**一种**离子蓝 `#4d8dff` 做强调；accent 是同族冰蓝 `#56c8ff`，**不引入第二种霓虹色**。这是它区别于 cyberpunk（霓虹粉故障）与 dark-tech（青/紫双霓虹）的核心。光只点在主操作 / 链接 / 选中 / 状态灯上，越克制越显贵。
3. **玻璃与仪表（Glass & Instrument）** —— 面板是抬起的冷蓝玻璃（`--ds-bg-elevated #101626` 带蓝调），背景叠一层**极淡的仪表栅格**与**一束穹顶离子蓝渐晕**，营造控制席氛围而不抢内容。
4. **坐标即语言** —— 等宽 `JetBrains Mono` 大写承载坐标 / 状态 / 数据（`LAT 34.05 // LON -118.24`、`LINK · SECURE`、`SYS NOMINAL`）；标题用 `Inter` 紧字距，读作一款工程感 grotesk。**正文不大写**。
5. **利落不花哨** —— 动效 150–250ms，可有一次性扫光 / 状态灯微呼吸，但 `prefers-reduced-motion` 一律关闭装饰动效。

---

## 3. 何时用 / 何时别用

**适合：**
- 遥测 / 监控 / 可观测性面板、运维控制台、指挥席。
- 航天 / 硬科技 / 安防 / 仿真 / 自动驾驶等「近未来技术」产品。
- 需要「精密 · 高造价 · 高信息密度」气质且偏好暗色的 SaaS 与 Dashboard。
- 偏冷静专业的开发者 / 数据工具（比 dark-tech 更克制、更"机构感"）。

**别用：**
- 面向大众消费、需要亲和温暖的品牌（电商、母婴、生活方式）。
- 内容阅读为主、要长时间浅色舒适阅读的资讯 / 文档站（除非主打暗色）。
- 想要「热闹炫技」的霓虹赛博气质——那是 cyberpunk / dark-tech 的活儿，本风格刻意收敛。
- 打印 / 低饱和墨水场景——辉光与深底会失效。

---

## 4. 颜色

> 取值随主题切换由 `tokens.css` 提供。**`:root` 默认暗色**；亮色由 `[data-theme="light"]` / `.light` 覆盖；`[data-theme="dark"]` / `.dark` 与 `:root` 同值（便于在亮色容器内强制局部暗色）。

### 4.1 表面与文字

| 语义 token | 暗（默认 :root） | 亮（.light） | 用途 |
|---|---|---|---|
| `--ds-bg` | `#060810` | `#f7f9fe` | 主背景（深蓝海军 / 浅蓝白） |
| `--ds-bg-subtle` | `#0b0f1c` | `#eef2fb` | 次背景、分组底 |
| `--ds-bg-elevated` | `#101626` | `#ffffff` | 抬起表面：卡片、弹层（冷蓝玻璃） |
| `--ds-bg-sunken` | `#04060c` | `#e7edf8` | 凹陷表面：输入槽、终端块、chip |
| `--ds-fg` | `#e8eefc` | `#0a1222` | 主文字（冷白 / 近黑蓝） |
| `--ds-fg-muted` | `#8a99bd` | `#46546f` | 次要文字（冷蓝灰） |
| `--ds-fg-subtle` | `#5a6788` | `#687792` | 占位 / 弱文字（仅用于辅助或大字） |
| `--ds-fg-on-accent` | `#04101f` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#1b2740` | `#dde4f0` | 常规描边（也用作栅格线） |
| `--ds-border-strong` | `#2c3c5e` | `#c2cde0` | 强描边 / 分隔 / chip 边 |

### 4.2 品牌与强调

| 语义 token | 暗 | 亮 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#4d8dff` | `#1f5fe0` | 主操作色（离子蓝；亮色下压至 AA） |
| `--ds-primary-hover` | `#6ba2ff` | `#1a54c8` | hover |
| `--ds-primary-active` | `#2f74ef` | `#1748ab` | active / pressed |
| `--ds-primary-fg` | `#04101f` | `#ffffff` | 主操作上的文字 |
| `--ds-accent` | `#56c8ff` | `#0f6fd6` | 链接 / 次强调（同族冰蓝，非第二种霓虹） |
| `--ds-accent-fg` | `#021018` | `#ffffff` | accent 上的文字 |

> **强调色梯度（暗）**：active `#2f74ef` → 主 `#4d8dff` → hover `#6ba2ff`，由深到亮，hover 更亮即「点亮」。亮色版整体下压（主 `#1f5fe0`）以满足白底 AA（≥4.5:1 正文）。

### 4.3 语义状态（仪表灯）

每个含 主色 + `-bg` 浅底 + `-fg` 底上文字。暗色下 `-bg` 是「深底」（深里透色），亮色下是「浅底」。

| 语义 | 暗 主 / bg / fg | 亮 主 / bg / fg |
|---|---|---|
| success | `#3ee08f` / `#06231a` / `#b6ffd9` | `#07823f` / `#e6f8ee` / `#044523` |
| warning | `#ffb53d` / `#271a04` / `#ffe6b8` | `#9a6400` / `#fff4e0` / `#4d3200` |
| danger  | `#ff5c72` / `#2a0b12` / `#ffccd4` | `#d11a3f` / `#ffe9ee` / `#6b0a20` |
| info    | `#4d8dff` / `#08172e` / `#cfe0ff` | `#0073c4` / `#e5f3ff` / `#003a66` |

> info 故意与 primary 同色（离子蓝即「信息 / 链接」），强化单一光源身份；其余状态色保持各自语义，但都压到偏冷的仪表灯色温。

### 4.4 焦点

| token | 值 |
|---|---|
| `--ds-focus`（暗 / 亮） | `#4d8dff` / `#1f5fe0` |
| `--ds-focus-ring`（暗） | `0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus), 0 0 16px -2px rgba(77,141,255,.6)` |
| `--ds-focus-ring`（亮） | `0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus), 0 0 12px -3px rgba(31,95,224,.4)` |

> 双层环（底环隔开背景 + 主色环）+ 第三层离子蓝 glow，键盘可达且「会发光」。亮色下 glow 显著收敛。

---

## 5. 字体（仅本地，离线可用）

- **字族**：
  - `--ds-font-sans`：`"Inter", -apple-system, "Segoe UI", "PingFang SC", …` —— 标题与正文主力。Inter 加 `-0.02em` 紧字距，读作一款冷静的工程 grotesk。
  - `--ds-font-mono`：`"JetBrains Mono", ui-monospace, "SF Mono", Menlo, …` —— **本风格的"仪表语言"**。坐标 / 状态 chip / 数据 / 终端块 / 小标签全走 mono，常配大写 + `0.04–0.1em` 字距。
  - `--ds-font-serif`：`"Noto Serif", …` —— 仅作回退，本风格基本不用衬线。
- **选择理由**：本套**无 Space Grotesk**（不引入外部字体）。改用 Inter 紧字距充当技术体显示字，既离线可用又有冷峻 grotesk 观感；mono 专门承载坐标与状态，强化 HUD 体感。
- **比例尺**（`--ds-text-*`）：xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48。base 14 贴近控制台的高密度。
- **字重**：normal 400 / medium 500 / bold 600（标题与强调用 600，不上更粗，保持冷峻）。
- **行高**：tight 1.2（标题）/ normal 1.5（UI）/ relaxed 1.7（长正文）。
- **字距**：tight `-0.02em`（大标题收紧）/ normal `0`。等宽坐标 / 状态 label 加 `0.08–0.1em` 字距强化「仪表读数」感。
- **大小写**：mono 小标签 / 坐标 / 状态**大写**；标题与**正文一律不大写**（大写正文损可读，也显廉价）。
- **中文适配**：sans 链回退 `PingFang SC` / `Microsoft YaHei`，中文走无衬线；中文不强制等宽（等宽中文易撑乱），mono 主要承载英文 / 数字 / 符号 / 坐标。

---

## 6. 间距与布局

- **比例尺**（`--ds-space-1…12`，4px 基）：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96。
- **节奏**：组内 8px、组间 16px、区块间 32–40px。仪表信息密度高，控件内边距偏紧（按钮 0 16px、input 0 12px）。
- **容器宽**：内容主区建议 max-width 1180–1440px；侧栏 220–280px；卡片栅格 12 列、gap 16–24px。
- **栅格**：控制台常用「侧栏 + 主区」两栏；主区内用玻璃卡承载指标。表格行高 40–44px，保证触控与扫读。背景仪表栅格用 22px 细格 + 88px 主格双层，极低不透明度。
- **响应式 / 移动端**：
  - **断点**：`≤860px` hero 两栏 / 桌面小样侧栏塌成单栏；`≤720px` 控制台两栏转单栏；`≤640px` 所有多列栅格（`.cards`、`.sw-grid`、`.media-cards`）收为一列，容器边距由 24px 收到 16px，顶栏换行、步骤条转纵向。
  - **流式栅格**：默认用 `repeat(auto-fit/auto-fill, minmax(…, 1fr))`，列数随容器宽自动增减；窄屏下 `minmax` 自然退化，断点只做兜底「强制一列」。
  - **横向滚动兜底**：`≤680px` 时 `html{overflow-x:hidden}` + `body{overflow-x:clip}` 消除整页横滑，宽表格改 `display:block` 内部横滑。
  - **移动框**：iPhone 套壳（`.dvc17`，由共享 `_assets/device.css` 提供）；暗色屏内加 `sb-light` 让状态栏文字转白；触控行高 ≥ 44px，主操作按钮整宽便于拇指点击。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：sm `4px`（控件 / 徽章）、md `8px`（卡片 / 弹层）、lg `12px`（大表面 / 模态）、full `9999px`（药丸 / 状态灯 / 头像 / chip）。比 dark-tech 更锐利一档，强化仪器面板的硬朗。
- **阴影 + 辉光**（暗）：
  - sm：`0 0 0 1px border, 0 2px 8px -2px 黑.7`
  - md：`0 0 0 1px border, 0 12px 32px -10px 黑.8, 0 0 28px -12px 蓝光.25`
  - lg：`0 0 0 1px border, 0 24px 64px -16px 黑.85, 0 0 48px -14px 蓝光.35`
  - 第一层 `0 0 0 1px border` 是「描边即结构」，离子蓝 glow 是最后一层、且**只有一束**。亮色下辉光显著减弱为常规阴影 + 极轻蓝晕。
- **描边**：暗底以 `--ds-border #1b2740` 勾勒玻璃卡轮廓（暗色下分层主要靠描边 + 极淡抬起色，而非阴影深浅）；强分隔与 chip 边用 `--ds-border-strong`。
- **图标**：统一内联线性 SVG（`viewBox="0 0 24 24"`、`stroke="currentColor"`、线宽 ~1.8、圆头圆角），随上下文取色。暗色下 `.icon-glow` 叠一层 `drop-shadow` 细辉光呼应离子材质；亮色下关闭辉光保 AA 与清晰。**零彩色 / 象形 emoji**。
- **层级**：组件层叠用语义 `--ds-z-*` 尺度（dropdown < sticky < modal-backdrop < modal < toast < tooltip），不用 9999 之类魔法值。

---

## 8. 动效

- **时长**：fast 150ms（hover / 按下）、base 200ms（颜色 / 展开）、slow 250ms（弹层 / 主题切换）。
- **曲线**：`--ds-ease: cubic-bezier(.2,.8,.2,1)`，快进慢出、利落。
- **典型过渡**：
  - 按钮 hover → 边框 / 文字转主色 + 外发 `0 0 18px -2px primary` 离子蓝辉光。
  - 状态灯 → 缓慢辉光呼吸（opacity / blur 微动，~2.6s 循环）。
  - hero 头部一道极淡扫光（sweep）一次性掠过，呼应「雷达扫描」。
  - 品牌光标 / 终端块光标缓慢闪烁。
- **`prefers-reduced-motion`**：tokens.css 与 preview.html 双重内置媒体查询，把动画 / 过渡压到 ~0ms 并停掉迭代——**扫光、状态灯呼吸、光标闪烁、弹层入场、移动端选中辉光全部关闭**，只留即时状态变化。

---

## 9. 组件规格

> 全部走 `var(--ds-*)`，不硬编码颜色。尺寸默认中号。

### 按钮（高 40px / 小 32px / 大 48px，圆角 sm，内边距 0 16px）

| 变体 | 默认 | hover | active | disabled |
|---|---|---|---|---|
| primary | 底 `--ds-primary`，字 `--ds-primary-fg` | 底 `--ds-primary-hover` + 离子蓝 glow | 底 `--ds-primary-active` | 50% 透明、不可点 |
| secondary（离子描边） | 透明底，`1px --ds-border-strong`，字 `--ds-fg` | 边框 / 字转 `--ds-primary` + 外发辉光 | 边框 `--ds-primary-active` | 50% 透明 |
| tertiary（幽灵） | 透明，字 `--ds-fg-muted` | 底 `--ds-bg-subtle`，字 `--ds-fg` | 底 `--ds-bg-sunken` | 50% 透明 |
| danger | 底 `--ds-danger`，字 `#fff` | 提亮 + 红光 glow | 压暗 | 50% 透明 |

所有按钮 focus 用 `--ds-focus-ring`。

### 坐标 / 状态 chip（药丸 full，等宽大写小标签 + 离子蓝描边）

- 底 `--ds-bg-sunken`，`1px --ds-border-strong`，字 11px mono 大写 + `0.1em` 字距；lead 用 `--ds-fg-subtle`，数值用 `--ds-fg` + `tabular-nums`。
- `link` 变体：`1px --ds-primary` 描边 + 极轻 glow + 前置呼吸状态灯，用于「链路 / 连接」类读数。
- 用于 hero 与任意需要「坐标 / 遥测读数」的位置，是本风格的招牌元素。

### 输入框 input / textarea（高 40px，圆角 sm）

- 底 `--ds-bg-sunken`（凹陷槽），`1px --ds-border`，字 `--ds-fg`，占位 `--ds-fg-subtle`。
- focus：边框转 `--ds-primary` + `--ds-focus-ring`。
- 错误：边框 `--ds-danger` + 下方 `--ds-danger` mono 提示。
- 内边距 0 12px；textarea 上下 8px。坐标 / 数值输入可用 `--ds-font-mono`。

### 卡片（玻璃面板卡）

- 底 `--ds-bg-elevated`（冷蓝玻璃），`1px --ds-border`，圆角 md，阴影 `--ds-shadow-md`（含一束离子蓝辉光）。
- 可带标题 + `▍` 主色光标 + 等宽小标签 / 指标（`tabular-nums`）。
- 内边距 20–24px；标题 16/600，正文 14/400。

### 徽章 / 标签（药丸 full，高 20–22px，字 12 mono）

- 中性：底 `--ds-bg-subtle`，字 `--ds-fg-muted`，`1px --ds-border`。
- 语义：底 `<sem>-bg`，字 `<sem>-fg`，可加 `1px <sem>` 描边。等宽大写更「仪表」。

### 状态指示灯（带 glow 圆点）

- 8–10px 圆点，色取 `--ds-success/warning/danger/info`，外发 `0 0 8px <sem>` 辉光。
- 在线态可加缓慢辉光呼吸（reduced-motion 关闭）。

### 提示条 alert（圆角 md，前置语义 SVG 图标 + 浅底 + 1px 全描边）

- 底 `<sem>-bg`，字 `<sem>-fg`，`1px <sem>` 全描边（不用粗色竖条）。success / warning / danger / info 四种。
- 行首一枚语义线性 SVG 图标（对勾 / 感叹三角 / 叉 / i），`currentColor` 取对应语义色。

### 导航

- **顶栏**：底 `--ds-bg-subtle`，下边 `1px --ds-border`，高 56px；品牌走 sans，当前项底色 / 下划线 `--ds-primary`。
- **侧栏**：底 `--ds-bg-subtle`，宽 220–280px；项 hover 底 `--ds-bg-elevated`，选中项左 3px `--ds-primary` 竖条 + 文字转主色。
- **Tab / segmented**：选中项底 `--ds-bg-elevated` + 文字主色 + 极轻描边光，未选 `--ds-fg-muted`。

### 表格（暗色仪表表）

- 表头底 `--ds-bg-subtle`、字 `--ds-fg-muted` mono 大写小标签；行高 40–44px，斑马纹用 `--ds-bg-subtle`，行 hover `--ds-bg-elevated`。
- 数值列用 `--ds-font-mono` + 右对齐 + `tabular-nums`，便于扫读。

### 终端 / 日志块

- 底 `--ds-bg-sunken`，`1px --ds-border`，圆角 md/sm，字 `--ds-font-mono`；提示符 / 关键值点 `--ds-primary`，成功 / 警告点对应语义色；可带 `inset` 内辉光与闪烁光标。

### 模态框 modal（圆角 lg，居中弹层）

- 遮罩 `rgba(4,4,8,.72)` + 轻 blur；弹层底 `--ds-bg-elevated`，`1px --ds-border-strong`，阴影 `--ds-shadow-lg`（含一束离子蓝辉光）。
- 标题 + `▍` 主色光标；右上角线性「叉」SVG 图标关闭，hover 转 `--ds-primary`。
- 入场 `modalIn`（上移 + 缩放渐显，250ms）；`Esc` / 点遮罩关闭；reduced-motion 下关入场动画。

### 下拉菜单 dropdown（圆角 md，悬浮层）

- 菜单底 `--ds-bg-elevated`，`1px --ds-border-strong`，阴影 `--ds-shadow-md`；项 mono。
- hover：底 `--ds-bg-subtle`、字转 `--ds-primary`、`inset` 内辉光；选中项右侧线性「对勾」SVG 图标并维持主色；危险项前置线性「叉」图标、hover 转 `--ds-danger`。
- 点外部 / `Esc` 关闭；入场 `dropIn`（下落渐显，150ms，reduced-motion 关闭）。

### 工具提示 tooltip（小气泡，mono）

- 气泡底 `--ds-bg-sunken`，`1px --ds-primary` 描边 + `0 0 16px primary` 辉光；下方三角同主色。
- hover / `focus-within` 显示（上浮渐显）；纯装饰信息，关键信息不只靠 tooltip 传达。

### 分页 pagination（页码按钮，高 36px，圆角 sm）

- 常态：透明底、`1px --ds-border`、字 `--ds-fg-muted` mono。
- hover：边框 / 字转 `--ds-primary` + 外发辉光；focus 用 `--ds-focus-ring`。
- 当前页（active）：离子蓝填充 `--ds-primary` 底、`--ds-primary-fg` 字 + glow；端点（prev/next）禁用态 40% 透明。

### Toast 通知（圆角 md，前置语义 SVG 图标 + 1px 全描边）

- 底 `--ds-bg-elevated`，`1px <sem>` 全语义描边（不用粗色竖条），阴影 `--ds-shadow-md`；前置图标取 success / danger / info 语义色。
- 标题、说明 `--ds-fg-muted`；右滑入场 `toastIn`（reduced-motion 关闭）；线性「叉」SVG 图标手动关闭。

### 步进器 / 步骤条 stepper

- 节点圆点 30px：未完成 `--ds-bg-sunken` + `--ds-border-strong`；完成态 `--ds-success` 描边 + `-bg` 底，节点内放线性「对勾」SVG 图标；激活态 `--ds-primary` 填充 + glow。
- 连接条 2px：已过区段转 `--ds-success`，未过 `--ds-border`；标签 mono，完成 / 激活转亮。
- 窄屏（≤640px）改纵向堆叠，连接条隐藏。

### 面包屑 breadcrumb（mono 路径）

- 链接 `--ds-fg-muted`，hover 转 `--ds-primary` + 文字辉光（text-shadow）；分隔符 `/` 用 `--ds-fg-subtle`。
- 当前项 `--ds-fg` 且前缀 `▍` 主色光标，标示「当前位置」；focus 用 `--ds-focus-ring`。

---

## 10. 可访问性

- **对比度**：正文 ≥ 4.5:1，大字 / 图形 ≥ 3:1，**亮暗双主题均达标**。暗底 `#e8eefc`（17.2:1）/ `#8a99bd`（7.0:1）与 `#060810` 均达 AA；离子蓝 `#4d8dff` 对深底 6.3:1，按钮文字用深字 `--ds-primary-fg #04101f`（对主色 ~6:1）。亮色版主色已下压到 `#1f5fe0`（5.3:1）满足白底 AA。`--ds-fg-subtle` 仅用于辅助 / 大字小标签。
- **焦点**：所有可交互元素用 `--ds-focus-ring`（双层环 + glow），键盘可见；不要用 `outline:none` 而不补环。
- **触控目标**：交互区 ≥ 44×44px（移动端服务行 / tab / segmented 均给足命中区）。
- **可减弱动效**：内置 `prefers-reduced-motion` 媒体查询，关闭扫光、状态灯呼吸、光标闪烁与弹层入场。
- **不靠颜色单传信息**：状态灯 / 徽章除颜色外配文字或图标（如 `secure` 文案、线性「对勾」SVG 图标）；坐标 chip 以文字读数而非纯色块传达。

---

## 11. Do / Don't

**Do**
- 底保持深蓝海军、纯净，把对比留给那一束离子蓝。
- 强调色只点在主操作 / 链接 / 选中 / 状态上，**全系统只用一种光**。
- 坐标 / 状态 / 数据善用等宽 mono 大写 + `tabular-nums`，强化 HUD 读数感。
- 用描边 + 极淡抬起色做玻璃分层，仪表栅格与穹顶渐晕保持极低不透明度。
- focus 环始终保留并带 glow；reduced-motion 下关掉一切装饰动效。
- 亮色版当作认真的「白昼运维模式」维护，别只是反色。

**Don't**
- 别把它做成 cyberpunk —— 不要霓虹粉 / 青紫双色 / 故障 glitch / 满屏发光，那是另外两套风格的活儿。
- 别加第二种强调色：再漂亮的青、紫、洋红都会破坏「单一光源、机构级克制」的身份。
- 别把整页堆满栅格 / 扫描线 —— 纹理必须极淡（≤8% 不透明度区间），只作氛围，不抢内容。
- 别大写正文或长段落（仅 mono 小标签 / 坐标大写）；别用纯白 `#fff` 大面积当暗色正文（用 `#e8eefc` 降眩光）。
- 别把离子蓝直接当小号正文色（细字 + 饱和易糊、对比不足）；别在亮色沿用暗色高亮蓝（会过曝）。
- 别硬编码十六进制到组件，一律走 `var(--ds-*)`；别忽略 reduced-motion。

---

## 12. 展示页 / 图片与图标用法（Showcase v2）

`preview.html` 是作品级展示页：顶部 hero 首屏（含坐标 / 状态 chip）+ 完整组件库 + 四大应用区块。除 `../../_fonts/fonts.css` 与 `../../_assets/**` 本地素材、`../../_assets/device.css` 设备外壳外，**无任何外网资源**，双击即可离线打开；图片一律 `loading="lazy"` + 有意义 `alt`。

### 12.1 招牌氛围（保持航天终端身份）

1. **仪表栅格底纹**：`body::before` 叠 22px 细格 + 88px 主格双层 `linear-gradient` 细线，用 `--ds-border` 着色、极低不透明度，藏在内容之后。
2. **一束穹顶离子蓝渐晕**：顶部居中一道 `radial-gradient(rgba(77,141,255,.12))`，**只一束**，精密不喧哗；亮色下自动收敛。
3. **坐标 / 状态 chip**：hero 内 `LAT // LON`、`LINK · SECURE`、`SYS NOMINAL`、`ORBIT LEO-7` 等等宽大写读数，是本风格招牌。

### 12.2 图片处理

所有图片走统一的 `.media` 容器，叠三层处理，让任何素材都「进入控制席语境」：

1. **离子蓝 duotone 叠色**：`mix-blend-mode: screen` 叠一道 `--ds-primary` → 透明 → `--ds-accent`（同族冰蓝）的对角渐变。
2. **扫描线**：`repeating-linear-gradient` 极淡横纹，呼应屏幕 / 终端质感。
3. **离子蓝辉光描边**：`.media.glow` 叠 `0 0 26px var(--ds-primary)` 外发光 + `inset 0 0 0 1px` 蓝色内描边。

亮色模式下叠色自动转 `multiply` 并降饱和、辉光收敛为常规阴影，保证 AA 与清晰。统一用 `aspect-ratio`（16:9 / 4:3 / 1:1 / 3:4）+ `object-fit:cover`，圆角走 `--ds-radius-md`。覆盖：宽高比框、媒体卡、等高画廊、图文混排 split、图上叠字 overlay（渐变 scrim 保 AA）、头像（24/32/40/48 + 堆叠 + 用户行）、full-bleed 背景大图区。

### 12.3 图标用法

统一内联线性 SVG（`viewBox="0 0 24 24"`、`stroke="currentColor"`、线宽 ~1.8、圆头圆角），零彩色 / 象形 emoji：≥12 枚语义图标网格、16/20/24/32 尺寸阶（暗版可叠 `.icon-glow` 细辉光，亮版关闭）、线性 vs 实心 / 单色 vs 双色对比、以及「场景里」（仅图标按钮带 `aria-label`、前/后置图标、输入框前/后置图标、状态图标、带数字徽标）。

### 12.4 桌面 / 移动布局

- **桌面（≥3，置于带 chrome 的 `.frame`）**：控制台 / 仪表盘（侧栏 + KPI + 离子蓝渐变柱图 + 数据表）、落地页 / 产品（hero + 三栏特性 + CTA）、列表-详情（左列表 + 右大图详情）。
- **移动（3 台 iPhone 套壳 `.dvc17`，暗屏 + `sb-light`）**：App 首页 feed、个人主页、收件箱列表。内容真实饱满，触控行高 ≥ 44px；`≤860px` 桌面小样侧栏隐藏，`≤640px` 多列栅格收为一列。

---

## 13. 如何接入

**1) 引入 tokens.css（提供 `:root` 暗色基底 + 亮色覆盖）**

```html
<link rel="stylesheet" href="./tokens.css" />
```

页面**默认即暗色**（`:root` 写暗）。需要亮色时，在 `<html>` 或某容器上加：

```html
<html data-theme="light">  <!-- 或 class="light" -->
```

切回暗色：移除该属性，或显式 `data-theme="dark"`（与 `:root` 同值，便于在亮色容器内强制局部暗色）。

**2) 在样式 / 组件里只用变量**

```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  box-shadow: var(--ds-shadow-sm);
  transition: box-shadow var(--ds-dur-fast) var(--ds-ease);
}
.btn-primary:hover { box-shadow: 0 0 18px -2px var(--ds-primary); }
.btn-primary:focus-visible { box-shadow: var(--ds-focus-ring); }
```

**3) Tailwind 项目：引 preset**

```js
// tailwind.config.js
module.exports = {
  presets: [require('./tailwind.preset.js')],
  // 暗色优先：darkMode 已在 preset 内配置（默认暗，.light/[data-theme=light] 覆盖）
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

随后即可用 `bg-bg text-fg border-border bg-primary text-primary-fg shadow-md shadow-glow` 等工具类，全部映射 `--ds-*`。

**4) 主题切换（JS）**

```js
const root = document.documentElement;
function toggleTheme() {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
}
```
