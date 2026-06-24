# 哈哈智能 hahaagent · 设计系统

> **基于「暗黑科技风」(styles/06-dark-tech) + hahaagent 定制。**
> 为「给普通开发者的可掌控 AI Agent 工作台」量身换肤的 **AI Agent 控制台**设计系统。暗色优先 · 电光青强调 · 终端 / Agent 代码感 · 辉光 focus。打开就像进了一台漂亮、可掌控、会发光的 Agent 控制台。

---

## 1. 一句话气质

深空黑做底、**电光青蓝**做电流、等宽字做骨——冷静、专业、有「Agent 在跑」的代码味。默认即暗色，亮色是它认真的「白天模式」。一切状态清晰、可读、可掌控。

---

## 2. 设计哲学 / 性格

继承暗黑科技基底的**语义分层 + 比例尺驱动 + 状态色成对 + 可见辉光焦点环**骨架，并为 hahaagent「可掌控 Agent 工作台」做品牌定制：

1. **暗色优先（Dark First）** —— 与多数风格相反：`:root` 直接写暗色（深空黑 `#0a0b10`），`[data-theme="light"]` / `.light` 才翻成亮色。开发者长时间盯控制台，暗底是默认体验。
2. **电光青蓝品牌色** —— 主色从基底霓虹青（`#00e0c6`，偏绿）右移到**电光青蓝 `#22d3ee`**（偏蓝 / 天空），更像「AI 电流 / 数据流」，与基底略作区分而有辨识度；accent 用**霓虹紫 `#a78bfa`** 做互补，承载链接、Agent 标识、次强调。
3. **辉光即材质（Glow as Material）** —— 阴影叠一层主色 glow；focus 环自带电光青光晕；**Agent 状态灯是会发光的圆点**（running 青色呼吸 / success 绿 / error 红）。辉光是这套系统的「电流反光」。
4. **终端 / Agent 感** —— 等宽字 `JetBrains Mono` 是一等公民：工具调用名、参数、日志、token 计量、状态值、代码块全走 mono；卡片可带 `▍` 光标与 `$`/`›` 提示符，营造 console / agent-run 体感。
5. **可掌控（In Control）** —— hahaagent 的北极星是「透明、可审计、不黑箱」。设计上对应：**状态永远清晰**（每个 Agent / 工具调用都有显式 running/success/error 态 + 文字 + 图标，不只靠颜色），信息密度高但层级分明，让人随时看懂 Agent 在干什么。
6. **利落不花哨** —— 动效 150–250ms，可有扫光 / 状态灯辉光呼吸，但 `prefers-reduced-motion` 一律关闭装饰动效。

---

## 3. 何时用 / 何时别用

**适合：**
- hahaagent 自身：Web 聊天台、运营后台、CLI 配套界面、Agent 编排 / 监控面板。
- 开发者工具、CLI 配套 Web、SDK / API 控制台。
- AI 产品（对话台、Agent run、工具调用可视化、模型 / token 监控）。
- 运维 / 数据 Dashboard、日志台、可观测性面板。

**别用：**
- 面向大众消费、需要亲和温暖的品牌（电商、母婴、生活方式）。
- 内容阅读为主、要长时间舒适浅色阅读的资讯 / 文档站（除非主打暗色）。
- 政务 / 金融合规等要求克制中性、避免炫技的 B 端。
- 打印 / 低饱和墨水场景——霓虹与辉光会失效。

---

## 4. 颜色

> 取值随主题切换由 `tokens.css` 提供。**`:root` 默认暗色**；亮色由 `[data-theme="light"]` / `.light` 覆盖；`[data-theme="dark"]` / `.dark` 为显式暗色（同 `:root`）。

### 4.1 表面与文字

| 语义 token | 暗（默认 :root） | 亮（.light） | 用途 |
|---|---|---|---|
| `--ds-bg` | `#0a0b10` | `#ffffff` | 主背景（深空黑 / 纯白） |
| `--ds-bg-subtle` | `#111320` | `#f5f7fa` | 次背景、分组底、侧栏 |
| `--ds-bg-elevated` | `#151826` | `#ffffff` | 抬起表面：卡片、弹层、助手气泡（带轻微蓝调） |
| `--ds-bg-sunken` | `#07080d` | `#eef1f5` | 凹陷表面：输入槽、代码块、终端块 |
| `--ds-fg` | `#e7e9f5` | `#0d1018` | 主文字 |
| `--ds-fg-muted` | `#9698b4` | `#50586b` | 次要文字、时间戳 |
| `--ds-fg-subtle` | `#62647e` | `#6b7385` | 占位 / 弱文字（仅辅助或大字） |
| `--ds-fg-on-accent` | `#04121a` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#25283c` | `#e0e4ea` | 常规描边 |
| `--ds-border-strong` | `#383c56` | `#c6ccd6` | 强描边 / 分隔 |

### 4.2 品牌与强调

| 语义 token | 暗 | 亮 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#22d3ee` | `#0e7490` | 主操作色（电光青蓝；亮色收敛至 AA） |
| `--ds-primary-hover` | `#4fe3f5` | `#0891b2` | hover（更亮 = 点亮） |
| `--ds-primary-active` | `#0fb6d6` | `#155e75` | active / pressed |
| `--ds-primary-fg` | `#04121a` | `#ffffff` | 主操作上的文字 |
| `--ds-accent` | `#a78bfa` | `#7c3aed` | 链接 / 次强调 / Agent 标识（霓虹紫） |
| `--ds-accent-fg` | `#0c0617` | `#ffffff` | accent 上的文字 |

> **强调色梯度（暗）**：active `#0fb6d6` → 主 `#22d3ee` → hover `#4fe3f5`，由深到亮，hover 更亮即「点亮」。亮色版整体下压（主 `#0e7490`）以满足白底 AA（≥ 5.3:1）。

### 4.3 语义状态（霓虹）

每个含 主色 + `-bg` 浅底 + `-fg` 底上文字。暗色下 `-bg` 是「深底」（黑里透色），亮色下是「浅底」。直接服务 Agent 状态：success=运行成功、warning=注意、danger=错误、info=信息 / 流式中。

| 语义 | 暗 主 / bg / fg | 亮 主 / bg / fg |
|---|---|---|
| success | `#34e6a0` / `#062418` / `#9bffd2` | `#07823f` / `#e6f8ee` / `#044523` |
| warning | `#ffb020` / `#261800` / `#ffe2a8` | `#9a6400` / `#fff4e0` / `#4d3200` |
| danger  | `#ff4d6d` / `#2a0a12` / `#ffc4cf` | `#d11a3f` / `#ffe9ee` / `#6b0a20` |
| info    | `#38bdf8` / `#042036` / `#bfe9ff` | `#0369a1` / `#e5f3ff` / `#003a66` |

### 4.4 焦点

| token | 值 |
|---|---|
| `--ds-focus`（暗 / 亮） | `#22d3ee` / `#0e7490` |
| `--ds-focus-ring`（暗） | `0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus), 0 0 14px -2px rgba(34,211,238,.55)` |
| `--ds-focus-ring`（亮） | `0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus), 0 0 10px -3px rgba(14,116,144,.35)` |

> 双层环（底环隔开背景 + 主色环）+ 第三层电光青 glow，键盘可达且「会发光」。

---

## 5. 字体

- **字族**：
  - `--ds-font-mono`：`"JetBrains Mono", "Geist Mono", ui-monospace, …` —— **本系统一等公民**。工具调用名 / 参数 / 结果、日志流、token 计量、状态值、代码块、标签、标题都走 mono，撑起终端 / Agent 感。
  - `--ds-font-sans`：`"Geist", "Inter", -apple-system, …` —— 聊天正文、长段文案与表单，保证可读。
  - `--ds-font-serif`：仅作回退，本系统基本不用衬线。
- **选择理由**：等宽字天生有「代码 / 控制台 / agent-run」气质，数字等宽利于 token / 用量对齐；标题用 mono 强化极客感，对话正文用 sans 防止大段等宽阅读疲劳。
- **比例尺**（`--ds-text-*`）：xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48。base 14 贴近开发者工具的高密度。
- **字重**：normal 400 / medium 500 / bold 600（标题与强调用 600，不上更粗，保持冷峻）。
- **行高**：tight 1.2（标题）/ normal 1.5（UI）/ relaxed 1.7（聊天长文 / 日志）。
- **字距**：tight `-0.02em`（大标题收紧）/ normal `0`。等宽小标签可酌情加 `0.04em` 字距强化「终端 label」感（如 `TOOL` `RUNNING` `TOKENS`）。
- **中文适配**：sans 链回退 `PingFang SC` / `Microsoft YaHei`，中文走无衬线；中文不强制等宽（等宽中文易撑乱），mono 主要承载英文 / 数字 / 符号 / 代码。
- **真实字体嵌入**：`preview.html` 在 `<head>` 引入共享 `../../_fonts/fonts.css`（本地 woff2，OFL 开源，不走外网），落地等宽 **JetBrains Mono**（mono 链首位）与无衬线 **Inter**（sans 链内）。`Geist` 仅作可选前置回退，未安装时自动落到 Inter / JetBrains Mono，气质不变。除 `fonts.css` 外页面不引任何外网资源。

---

## 6. 间距与布局

- **比例尺**（`--ds-space-1…12`，4px 基）：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96。
- **节奏**：组内 8px、组间 16px、区块间 32–40px。控制台信息密度高，控件内边距偏紧（按钮 0 14px、input 0 12px）。
- **容器宽**：内容主区建议 max-width 1200–1440px；**会话侧栏 240–280px**；卡片栅格 12 列、gap 16–24px。
- **聊天布局**：经典「左会话侧栏 + 主对话区 + 可选右工具 / artifact 面板」三栏；对话区气泡列宽 ≤ 760px 以保证可读；输入条吸底。
- **栅格**：运营后台用「侧栏 + 主区」两栏；主区内用卡片网格承载指标。表格行高 40–44px。

### 6.1 响应式 / 移动端

- **断点**：以 `≤640px` 为移动主断点（控制台主栅格 `≤820px` 已先收成单栏）。原则是「先收栅格、后折侧栏、再压字号 / 内边距」，不重排信息层级。
- **栅格收一列**：`@media(max-width:640px)` 下 `.flex` 双列内容竖排、`.col` 解除 `min-width`、色板格 `minmax` 收窄；表格压字号与单元格内边距。
- **会话侧栏折叠**：窄屏把「侧栏 + 主区」两栏收成单栏，会话列表由竖向左竖条改为**横向滚动**条带（选中态由「左 3px 竖条」改为「底 3px 下划线」），让手机上仍能一眼切会话。
- **Stepper 折叠**：横向步骤条在窄屏转竖排并隐藏连接线，避免挤压。
- **移动端形态**：约 375px 手机框内含 顶栏（mono 品牌 + 汉堡菜单 SVG 图标）+ 聊天气泡 + 工具调用卡 + 吸底输入栏（input + 纸飞机发送 SVG 图标）。气泡列宽放宽到 ~88%，工具卡占满宽、字号下调到 xs，保持终端 / Agent 气质。
- **暗 / 亮一致**：所有响应式结构仅改布局、不改色彩来源，默认暗色与 `[data-theme="light"]` 下均成立（颜色全走 `var(--ds-*)`）。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：sm `6px`（控件 / 徽章 / 工具卡）、md `10px`（卡片 / 弹层 / 气泡）、lg `14px`（大表面 / 模态）、full `9999px`（药丸 / 状态灯 / 头像）。整体偏小，保留科技硬朗。
- **阴影 + 辉光**（暗）：
  - sm：`0 0 0 1px border, 0 2px 6px -2px 黑.6`
  - md：`0 0 0 1px border, 0 8px 24px -8px 黑.7, 0 0 24px -10px 青光.25`
  - lg：`0 0 0 1px border, 0 16px 48px -12px 黑.8, 0 0 40px -12px 青光.35`
  - 第一层 `0 0 0 1px border` 是「描边即结构」，电光青 glow 是最后一层「电流反光」。亮色下辉光显著减弱。
- **描边**：暗底以 `--ds-border #25283c` 勾勒卡片 / 气泡 / 工具卡轮廓（暗色分层主要靠描边 + 极淡抬起色，而非阴影深浅）；强分隔用 `--ds-border-strong`。

---

## 8. 动效

- **时长**：fast 150ms（hover / 按下）、base 200ms（颜色 / 展开工具卡）、slow 250ms（弹层 / 主题切换）。
- **曲线**：`--ds-ease: cubic-bezier(.2,.8,.2,1)`，快进慢出、利落。
- **典型过渡**：
  - 按钮 hover → 边框 / 文字转主色 + 外发 `0 0 18px -2px primary` 辉光。
  - **Agent running 状态灯** → 缓慢辉光呼吸（opacity / blur 微动，2–3s 循环），表「正在跑」。
  - **流式输出** → 助手气泡尾部 `▍` 光标闪烁（typing）。
  - 工具调用卡展开 / 折叠 → 高度过渡 + 内容淡入。
  - 卡片 / 对话区头部可有一道极淡扫光（sweep）一次性掠过。
- **`prefers-reduced-motion`**：tokens.css 内置媒体查询，把动画 / 过渡压到 ~0ms 并停掉迭代——状态灯呼吸、光标闪烁、扫光全部关闭，只留即时状态变化（仍以颜色 + 图标 + 文字表达状态）。

---

## 9. 组件规格

> 全部走 `var(--ds-*)`，不硬编码颜色。尺寸默认中号。

### 按钮（高 40px / 小 32px / 大 48px，圆角 sm，内边距 0 14px）

| 变体 | 默认 | hover | active | disabled |
|---|---|---|---|---|
| primary | 底 `--ds-primary`，字 `--ds-primary-fg` | 底 `--ds-primary-hover` + glow | 底 `--ds-primary-active` | 50% 透明、不可点 |
| secondary（霓虹描边） | 透明底，`1px --ds-border-strong`，字 `--ds-fg` | 边框 / 字转 `--ds-primary` + 外发辉光 | 边框 `--ds-primary-active` | 50% 透明 |
| tertiary（幽灵） | 透明，字 `--ds-fg-muted` | 底 `--ds-bg-subtle`，字 `--ds-fg` | 底 `--ds-bg-sunken` | 50% 透明 |
| danger | 底 `--ds-danger`，字 `#fff` | 提亮 + 红光 glow | 压暗 | 50% 透明 |

所有按钮 focus 用 `--ds-focus-ring`。

### 输入框 input / textarea（高 40px，圆角 sm）

- 底 `--ds-bg-sunken`（凹陷槽），`1px --ds-border`，字 `--ds-fg`，占位 `--ds-fg-subtle`。
- focus：边框转 `--ds-primary` + `--ds-focus-ring`。
- 错误：边框 `--ds-danger` + 下方 `--ds-danger` 提示。
- 内边距 0 12px；textarea 上下 8px。聊天输入框 / 数值输入可用 `--ds-font-mono`。

### 卡片（终端感卡片）

- 底 `--ds-bg-elevated`（带轻微蓝调），`1px --ds-border`，圆角 md，阴影 `--ds-shadow-md`。
- 可带 mono 标题 + `▍` 光标 / `$` `›` 提示符 + 等宽小标签（如 `STATUS`）。
- 内边距 20–24px；标题 16/600 mono，正文 14/400 sans。

### 徽章 / 标签（药丸 full，高 20–22px，字 12 mono）

- 中性：底 `--ds-bg-subtle`，字 `--ds-fg-muted`，`1px --ds-border`。
- 语义：底 `<sem>-bg`，字 `<sem>-fg`，可加 `1px <sem>` 描边。等宽大写更「终端」。

### 状态指示灯（带 glow 圆点）

- 8–10px 圆点，色取 `--ds-success/warning/danger/info` 或 `--ds-primary`（running），外发 `0 0 8px <sem>` 辉光。
- running / 在线态加缓慢辉光呼吸（reduced-motion 关闭）。

### 提示条 alert（前置语义图标 + 浅底 + 1px 全描边）

- 底 `<sem>-bg`，字 `<sem>-fg`，`1px <sem>` 全描边（不用侧边色条）。前置一个语义色内联 SVG 图标（对勾 / 感叹 / 叉 / i）。success / warning / danger / info 四种。

### 导航

- **顶栏**：底 `--ds-bg-subtle`，下边 `1px --ds-border`，高 56px；品牌 `hahaagent` 走 mono；当前项底色 `--ds-primary` 文字 / 下划线。
- **侧栏（会话列表）**：底 `--ds-bg-subtle`，宽 240–280px；项 hover 底 `--ds-bg-elevated`，选中项左 3px `--ds-primary` 竖条 + 文字转主色。
- **Tab**：选中项下边 2px `--ds-primary` + 文字主色，未选 `--ds-fg-muted`。

### 表格（暗色表格）

- 表头底 `--ds-bg-subtle`、字 `--ds-fg-muted` mono 大写小标签；行高 40–44px，斑马纹用 `--ds-bg-subtle`，行 hover `--ds-bg-elevated`。
- 数值列（token / 用量 / 余额）用 `--ds-font-mono` + 右对齐，便于扫读。

### 代码块

- 底 `--ds-bg-sunken`，`1px --ds-border`，圆角 sm，字 `--ds-font-mono` 13/1.7；关键字可点 `--ds-primary` / `--ds-accent`。

### 模态框 Modal（圆角 lg，霓虹辉光描边）

- **遮罩**：`rgba(4,8,16,.62)` + `backdrop-filter:blur(2px)`，压暗背景突出对话。
- **面板**：底 `--ds-bg-elevated`，`1px --ds-primary` 描边 + `--ds-shadow-lg` 叠 `0 0 40px -8px --ds-primary` 辉光，圆角 lg。三段式 头 / 体 / 脚：头部 mono 标题（可挂状态灯）+ 关闭按钮（内联 SVG 叉图标，hover 转 `--ds-danger` + 红光）；脚部右对齐主 / 危险操作。
- 关闭按钮 focus 用 `--ds-focus-ring`；`role="dialog"` `aria-modal` `aria-labelledby`。

### 下拉菜单 Dropdown（圆角 md）

- 面板底 `--ds-bg-elevated`，`1px --ds-border-strong`，`--ds-shadow-lg`；顶部可带 mono 大写分组标签（`PROVIDERS`）。
- **项状态**：默认透明；**hover / 键盘聚焦** = `--ds-bg-subtle` 底 + `--ds-primary` 描边 + 文字转主色 + 内发辉光；**选中**项文字主色 + 末尾对勾 SVG 图标；危险项 hover 转 `--ds-danger`。每项 `tabindex` / `role="menuitem"`，右侧 mono 快捷键。

### 工具提示 Tooltip

- 气泡：底 `--ds-bg-elevated`，`1px --ds-primary` + `0 0 20px -6px --ds-primary` 辉光，mono 12；带向下小三角。
- **触发**：`:hover` 与 `:focus-within` 同时显隐（键盘可达），淡入 + 轻微上移；`role="tooltip"`。reduced-motion 下可用「常显」静态变体。

### 分页 Pagination（mono 数字）

- 页码按钮 36×36 起，`1px --ds-border`，圆角 sm。**hover / 聚焦** = `--ds-primary` 描边 + 辉光；**当前页** = 实心 `--ds-primary` 底 + `--ds-primary-fg` 字 + 辉光（`aria-current="page"`）；**首 / 末页** 禁用降透明、去辉光。省略号 `…` 用 `--ds-fg-subtle`。

### Toast 通知（圆角 md，1px 语义全描边 + 辉光）

- 底 `--ds-bg-elevated`，`--ds-shadow-md` 叠语义色微辉光；`1px <sem>` 全描边（不用侧边色条），前置语义色内联 SVG 图标 + mono 标题 + 正文 + 关闭按钮（SVG 叉图标）。
- 入场 `toast-in`（淡入 + 上移 8px，250ms）；`role="status"`（普通）/ `role="alert"`（错误）；reduced-motion 关入场动画。

### 步进器 / 步骤条 Stepper（横向，呼应 Planner→Executor→Critic）

- 横排节点（34px 圆，mono 序号）+ 连接线：**done** = `--ds-success` 实心 + 绿光连线；**active** = `--ds-primary` 实心 + 辉光呼吸；**pending** = `--ds-border-strong` 描边 / 灰字。节点下挂 mono 标题 + 描述。
- 与 §9b 竖向「任务步骤时间线」互补：Stepper 表阶段总览（横），时间线表逐步执行细节（竖）。窄屏（≤640px）转竖排、隐藏连接线。

### 面包屑 Breadcrumb（mono）

- mono 路径：链接项 `--ds-fg-muted`，hover / 聚焦 = `--ds-primary` + 描边 + 辉光；分隔符 `/` 用 `--ds-fg-subtle`；当前项 `--ds-primary` + 中等字重 + `aria-current="page"`。

---

## 9b. Agent / 终端专属组件（hahaagent 定制）

> 这是本系统区别于通用暗黑科技的核心。全部走 `var(--ds-*)`，状态除颜色外必带文字 + 图标，呼应「可掌控 / 透明」。

### 聊天对话气泡

- **用户气泡**：右对齐；底 `--ds-bg-subtle`，`1px --ds-border`，字 `--ds-fg`，圆角 md（右下角可收为 sm）。正文走 sans。
- **助手气泡**：左对齐；底 `--ds-bg-elevated`，`1px --ds-border`，左侧可挂 `▍` 青色光标 / Agent 头像；圆角 md。流式中尾部 `▍` 闪烁（typing），完成后消失。
- 头像 / 角色标签用 mono 大写小标签（`USER` / `AGENT`），时间戳用 `--ds-fg-muted` 12px mono。
- 列宽 ≤ 760px；气泡间距 12–16px。

### 工具调用卡（tool call）

- 卡片：底 `--ds-bg-sunken`，`1px --ds-border`，圆角 sm，等宽。三段式：
  1. **头**：左 内联 SVG 工具（扳手）图标 + 工具名 mono `--ds-primary`（如 `calculator`）+ 右侧**状态徽章**（pending / running / success / error，取对应语义色 + 文字 + 状态灯）。可点击折叠。
  2. **参数（Args）**：mono `--ds-fg-muted` 小标签 `ARGS` + JSON 代码块（`--ds-bg`，关键字青 / 值紫）。
  3. **结果（Result）**：mono 小标签 `RESULT` + 代码块；error 时改用 `--ds-danger-bg` 底 + `--ds-danger-fg` 字。
- 状态全靠头部状态徽章（语义色 + 状态灯 + 文字）传达，卡片用 `1px --ds-border` 全描边（不用侧边色条）。

### Agent 运行状态（running / success / error）

- 一行「状态条」：左 **glow 状态灯** + mono 状态文字 + 可选耗时 / token。
  - `running`：灯 `--ds-primary` 辉光呼吸，文字 `RUNNING`。
  - `success`：灯 `--ds-success`，文字 `SUCCESS` + 对勾 SVG 图标。
  - `error`：灯 `--ds-danger`，文字 `ERROR` + 叉 SVG 图标（配错误摘要）。
- 永远「色 + 灯 + 文字 + 图标」四重表达，不靠颜色单传（可访问 + 可掌控）。

### 日志流 / 终端块（log / terminal）

- 底 `--ds-bg-sunken`，`1px --ds-border`，圆角 sm；mono 13/1.7。
- 左侧**行号**列 `--ds-fg-subtle`（不可选）；行可带时间戳前缀。
- **ANSI 色映射**：绿→`--ds-success`、黄→`--ds-warning`、红→`--ds-danger`、青→`--ds-primary`、蓝→`--ds-info`、紫→`--ds-accent`、灰→`--ds-fg-muted`。
- 顶部可带 `›_ hahaagent` 提示符与一个 running 状态灯；支持「跟随滚动」。

### 任务步骤时间线（steps）

- 竖向时间线：每步左侧一个节点（圆点 / 序号），节点色随状态（done=`--ds-success`、active=`--ds-primary` 呼吸、pending=`--ds-border-strong`、failed=`--ds-danger`），节点间用 `1px --ds-border` 连线。
- 步骤标题 mono `--ds-fg`，描述 sans `--ds-fg-muted`；对应 Planner→Executor→Critic 的深任务循环。

### 代码块（artifact / 产物）

- 同 §9 代码块；artifact 可加 mono 文件名头条 + 复制按钮 + 语言徽章。

### token / 用量计量条（usage meter）

- 细长进度条：底槽 `--ds-bg-sunken`，已用段 `--ds-primary`（接近上限转 `--ds-warning`，超限 `--ds-danger`）。
- 右侧 mono 数字 `1,280 / 8,000 tokens` + 余额 credits（数字等宽右对齐）。呼应 hahaagent 透明计费 / 账本。

### 侧栏（会话列表）

- 见 §9 导航·侧栏。每个会话项：mono 标题（截断）+ `--ds-fg-muted` 时间 / 模型小标签；选中左 3px `--ds-primary` 竖条；可挂未读 / running 状态灯。

---

## 10. 可访问性

- **对比度**：正文 ≥ 4.5:1，大字 / 图形 ≥ 3:1。暗底 `#e7e9f5/#9698b4` 与 `#0a0b10` 达 AA（16.3 / 7.0）；`--ds-fg-subtle` 仅用于辅助或大字（3.4，行号 / 占位）。电光青在暗底上对按钮文字用 `--ds-primary-fg #04121a`（深字，10.5:1）。亮色版主色已下压到 `#0e7490`（白底 5.3:1）满足 AA。所有语义 `-fg/-bg` 配对均 ≥ 9:1。
- **焦点**：所有可交互元素用 `--ds-focus-ring`（双层环 + glow），键盘可见；不要 `outline:none` 而不补环。
- **触控目标**：交互区 ≥ 44×44px（按钮默认 40 高时给足横向 padding / 命中区）。
- **可减弱动效**：内置 `prefers-reduced-motion`，关闭状态灯呼吸、光标闪烁、扫光。
- **不靠颜色单传信息**：Agent 状态 / 工具调用 / 状态灯 / 徽章除颜色外必配 mono 文字（`RUNNING` / `SUCCESS` / `ERROR`）或语义 SVG 图标（对勾 / 叉）——这也是「可掌控」的可访问性表达。

---

## 11. Do / Don't

**Do**
- 底保持近黑、纯净，把对比留给电光青强调。
- 强调色只点在主操作 / 链接 / 选中 / Agent 状态上，克制使用。
- 工具调用名、参数、日志、token、状态值善用等宽 mono，强化终端 / Agent 感。
- Agent / 工具状态永远「色 + 灯 + 文字 + 图标」四重表达。
- focus 环始终保留并带 glow；reduced-motion 下关掉装饰动效。
- 亮色版当作认真的「白天模式」维护，别只是反色。

**Don't**
- 别把整页堆满霓虹——满屏发光等于没有重点，且刺眼。
- 别用纯白 `#fff` 大面积当暗色文字（用 `#e7e9f5`，降眩光）。
- 别只靠颜色表示 Agent 状态（用户色觉差异 / 你也不掌控）。
- 别把电光青直接当小号正文色（细字 + 高饱和易糊、对比不足）。
- 别硬编码十六进制到组件，一律走 `var(--ds-*)`。
- 别在亮色模式沿用暗色的高亮霓虹（会过曝、对比不足）。

---

## 12. 如何接入

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

---

## 13. 作品级展示（Showcase v2）

`preview.html` 在原有「色板 / 字体 / 组件清单」之上升级为**有图、有布局、信息饱满**的作品级展示页。新增区块全部走 `var(--ds-*)`、保持暗色优先 + 霓虹辉光 + JetBrains Mono 身份，除 `../../_fonts/fonts.css` 与 `../../_assets/**` 外无任何外链；图片一律 `loading="lazy"` + 有意义 `alt`。

### 13.1 Hero 首屏

顶部分栏 hero：左侧文案（mono 大标题、电光青强调词 + 辉光、副标题、双 CTA、三段统计），右侧 `gen/darktech-hero.jpg` 全幅图（`object-fit:cover`）叠斜向渐变 scrim + 双色径向 glow。≤820px 收为单栏、图在下。消灭首屏大留白。

### 13.2 图片用法 Image Usage

- **宽高比框**：16:9 / 4:3 / 1:1 / 3:4，统一 `aspect-ratio` + `object-fit:cover` + md 圆角 + 角标。
- **媒体卡 Media Card**（≥3）：16:9 图 + mono 标题 + 正文 + 状态徽章/操作；hover 图片轻微放大（reduced-motion 关闭）。
- **图文混排**：4:3 大图 + 段落 + 按钮组并排。
- **图上叠字 Overlay**：21:9 图 + 横向暗渐变 scrim，文字用 `--ds-fg`/`--ds-fg-muted` 保证 AA。
- **头像用法**：尺寸阶 24/32/40/48、堆叠组（`av-stack` 负边距 + `+N`）、用户行（头像 + mono 名 + 签名）。
- **背景大图区 full-bleed**：`darktech-hero.jpg` 铺满 + 径向暗罩 + 居中文案/按钮。
- 图片处理符合暗黑科技身份：md/lg 圆角 + `--ds-border` 描边 + 暗罩/青光，而非随手装饰。

### 13.3 图标用法 Icon Usage

- **图标集**（16 个）：统一霓虹线性 SVG（`viewBox 0 0 24 24`、`stroke=currentColor`、线宽 2），网格带名，hover 转主色 + 辉光。
- **尺寸阶**：16 / 20 / 24 / 32 基线对齐。
- **线性 vs 实心 · 单色 vs 双色**对比（双色用 `--ds-primary` 低透明填充 + 描边）。
- **在场景里**：图标按钮（仅图标 + `aria-label`）、按钮内前/后置图标、输入框前/后置图标（`input-icon`）、列表项前导图标（语义色）、带数字徽标（铃铛 + 红点计数）。

### 13.4 桌面布局 Desktop Layouts（×2）

每个布局包在带浏览器 chrome 的 `frame`（红/黄/绿圆点 + mono 地址栏 + 锁图标）里：

- **布局 ① Agent 控制台**：三栏「会话侧栏（200px，选中左 3px 青条）+ 聊天主区（顶栏 + 气泡 + 工具调用卡 + 吸底输入）+ 右侧面板（迷你日志 ANSI + token 用量条 + 阶段灯）」。
- **布局 ② 落地页 / 产品**：hero（mono 标题 + 青光 + CTA + 4:3 配图）+ 特性三栏（图标 + 标题 + 说明）+ 价格 CTA 条。
- ≤820px 均收为单栏（控制台隐藏侧栏 / 右栏，落地页特性竖排）。

### 13.5 移动布局 Mobile Layouts（×2，约 375px 手机框）

两套手机框并排，均含听筒 notch + 顶栏意象：

- **布局 ① 聊天 + 输入**：顶栏（mono 品牌 + 汉堡）+ 聊天气泡 + 工具调用卡 + 吸底输入（input + 纸飞机发送）。
- **布局 ② App 首页 feed**：顶栏（标题 + 搜索）+ 卡片流（封面图 + 标题 + 说明 + 状态行）+ 底部标签栏（4 个 SVG 图标，选中态青色 + 辉光）。

### 13.6 素材与红线

- **素材来源**：`gen/darktech-hero.jpg`、`gen/abstract-wave.jpg`、`photos/{tech,desk,workspace,architecture,city}.jpg`、`avatars/{a1,a5,a8,a12,a15,a23,a33,a47}.jpg`，路径统一 `../../_assets/...`。
- **身份保持**：暗色优先（`:root` 暗）、霓虹辉光（hero / 状态灯 / focus 环，非 ghost-card）、JetBrains Mono 一等公民；`prefers-reduced-motion` 关闭辉光呼吸 / 光标闪烁 / hero 文字 glow / 媒体卡放大。
- **未改契约**：`--ds-*` token 全部沿用未改名；`fonts.css`、原 7 组件、Agent/终端专属组件（聊天 / 工具卡 / 状态灯 / ANSI 日志）、移动端块与响应式断点均保留；暗 / 亮双态文字与图标对比 ≥ AA。
