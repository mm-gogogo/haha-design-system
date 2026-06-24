# 苏北游 · 像素旅行设计系统（subei-travel Design Kit）

> **基于像素风（02-pixel）+ subei-travel 定制。** 一套给「苏北游」3D 网页小游戏专用的复古旅行探索 HUD 设计系统：保留像素风的硬边、硬实心偏移阴影、`steps()` 跳帧动效、像素字体回退；把通用像素绿换肤为「苏北水乡」配色——**湖青/江蓝 + 暖土黄/麦色 + 复古红点缀**，一眼是一台正在跑「上海人北上认老家」的复古掌机。

---

## 1. 一句话气质

像一台老旅行掌机的开机界面：旧地图麦纸底、深江墨蓝描边、湖青按键、复古红盖章。硬边方块、像素盖章感、跳帧反馈，但 HUD 信息扫得清——游戏里要一眼看到「第几站、收了几枚、资源还剩多少」。

## 2. 设计哲学 / 性格

继承像素风（= Geist 骨架的像素化改造）的五条基因，并为「旅行探索游戏 HUD」再调三处：

1. **硬边至上**：圆角几乎为 0（sm/md/full=0，lg 最多 2px）。所有边 2–3px 实线深江墨蓝描边，像素方块感。
2. **硬实心偏移阴影**：阴影绝不模糊，一律 `Npx Npx 0 0` 实心方块投影 = 盖章 / 贴纸 / 键帽立体；按下时位移并吃掉阴影。
3. **跳帧动效**：过渡用 `steps(4)` 模拟低帧率精灵动画；hover 抬起 / 按下位移 / 收集闪烁，但尊重 `prefers-reduced-motion`。
4. **像素字体优先**：等宽/像素字族（`Press Start 2P` / `VT323` 回退，正文也偏 monospace），仅声明回退、不外链。
5. **换肤为旅行温度**：不照搬通用像素绿。底色用**旧旅行地图麦纸色**（亮）/ **夜行江面深青墨蓝**（暗）；主色用**苏北水乡湖青**，强调用**复古旅行红**，焦点/装饰用**暖土黄（复古车票黄）**，状态色带江蓝/苇绿/麦黄温度。
6. **HUD 优先可读**：这是游戏 HUD，不是阅读页。关键数字（站数 / 印章 / 资源）用 mono 大字 + 主色高亮；卡片标题用主色左竖条；信息分块清晰，扫读 > 美观。
7. **盖章语义**：「收集 / 完成」复用旅行盖章隐喻——城市印章歪斜盖章、手账卡集齐 4 枚、toast 带方形印戳，强化「逐站点亮」的成就感。

## 3. 何时用 / 何时别用

**适合**
- 苏北游本体的全部 HUD：任务面板、路线总览、城市印章、旅行手账、沪客问答、玩法看板、收集 toast、方向键。
- 同气质的复古旅行/探索类网页小游戏、地图收集游戏、像素化文旅互动页。

**别用**
- 长文阅读、密集数据后台、需要冷静专业的 B 端产品（像素字长段落易疲劳）。
- 对低视力用户友好度要求极高的政务/公共服务（像素小字可读性弱）。

## 4. 颜色

强调色只用于主操作 / 链接 / 当前选择 / 状态 / 盖章；底色承载界面。所有正文文本满足 WCAG AA（4.5:1），大字/UI ≥3:1。

### 亮色（旧旅行地图麦纸 + 深江墨蓝）

| Token | 值 | 用途 |
|---|---|---|
| `--ds-bg` | `#f3ead2` | 主背景：旧旅行地图麦纸色 |
| `--ds-bg-subtle` | `#e9dcbd` | 次背景 / 分组底 |
| `--ds-bg-elevated` | `#fcf6e7` | 抬起表面（卡片/弹层），近白米纸 |
| `--ds-bg-sunken` | `#ddcca6` | 凹陷（输入槽/进度槽） |
| `--ds-fg` | `#1d2f33` | 主文字：深江墨蓝（≈11.6:1） |
| `--ds-fg-muted` | `#3a4f52` | 次要文字（≈7.2:1） |
| `--ds-fg-subtle` | `#5a6b65` | 弱/占位（≈4.7:1） |
| `--ds-fg-on-accent` | `#1d2f33` | 落在麦色/亮强调上的深字 |
| `--ds-border` | `#1d2f33` | 常规像素描边（默认即粗墨蓝黑） |
| `--ds-border-strong` | `#0c1719` | 强描边 / 分隔 |
| `--ds-primary` | `#0d7a72` | 主操作：苏北水乡湖青 |
| `--ds-primary-hover` | `#0a6c64` | hover（深一档） |
| `--ds-primary-active` | `#085851` | active / pressed |
| `--ds-primary-fg` | `#fcf6e7` | 湖青上的米白字（≈4.8:1 AA） |
| `--ds-accent` | `#b23a2e` | 链接 / 次强调 / 盖章：复古旅行红（≈4.95:1） |
| `--ds-accent-fg` | `#fcf6e7` | accent 上文字 |

> 焦点/装饰色用**暖土黄 `#e0a020`（复古车票黄）**，它在麦纸底上对比偏低，因此**仅用作焦点环与装饰色块**（地图当前站、route step 当前点），不当正文链接色——这与基底像素风「`#f59e0b` 只作焦点/装饰」的策略一致。正文链接一律用 `--ds-accent`。

### 暗色（夜行江面 CRT 底 + 霓虹湖青）

| Token | 值 | 用途 |
|---|---|---|
| `--ds-bg` | `#0f1c1f` | 主背景：夜江深青墨蓝 CRT 底 |
| `--ds-bg-subtle` | `#142528` | 次背景 |
| `--ds-bg-elevated` | `#1a2e31` | 抬起表面 |
| `--ds-bg-sunken` | `#0a1416` | 凹陷 |
| `--ds-fg` | `#ecf3ec` | 主文字：CRT 暖白（≈15.4:1） |
| `--ds-fg-muted` | `#b7cabd` | 次要文字（≈10.1:1） |
| `--ds-fg-subtle` | `#84988c` | 弱/占位（≈5.7:1） |
| `--ds-fg-on-accent` | `#0a1416` | 霓虹色上的近黑 |
| `--ds-border` | `#345255` | 常规描边 |
| `--ds-border-strong` | `#5a7d80` | 强描边 |
| `--ds-primary` | `#2fd4c4` | 主操作：霓虹湖青 |
| `--ds-primary-hover` | `#57e3d6` | hover（更亮） |
| `--ds-primary-active` | `#1fb5a7` | active |
| `--ds-primary-fg` | `#06201e` | 霓虹湖青上近黑字（≈9.2:1） |
| `--ds-accent` | `#ff7a5c` | 霓虹复古橙红，强调（≈6.8:1） |
| `--ds-accent-fg` | `#2a0c06` | accent 上文字 |

### 语义状态（主 / -bg 浅底 / -fg 底上文字）

| 语义 | 亮 主/底/字 | 暗 主/底/字 | HUD 用途 |
|---|---|---|---|
| success | `#2f7d3c` / `#dcf0d6` / `#103317` | `#4fd16a` / `#0c2914` / `#c8ffd2` | 苇绿：盖章成功 / 收集 +1 |
| warning | `#97650a` / `#f8ecc4` / `#3c2900` | `#f0c23a` / `#2e2400` / `#fff1c4` | 麦黄：资源告急 |
| danger | `#b23a2e` / `#f7d9d2` / `#44100a` | `#ff7a6e` / `#331009` / `#ffd9d2` | 复古红：选错断 combo / 失误 |
| info | `#1f5fa8` / `#d6e6f7` / `#0a2347` | `#5cb8ff` / `#06223a` / `#d3eaff` | 江蓝：下一步建议 / 提示 |

> 状态浅底+深字组合做 badge/alert/toast，皆 ≥11:1（亮）。状态主色作 UI（进度点/竖条）≥3:1。

### 强调色梯度（primary）
`hover` 比 default 深一档（亮）/ 亮一档（暗），`active` 再深一档——配合「按下位移消阴影」形成实体按键反馈。

## 5. 字体

- **字族**：像素/等宽优先。`--ds-font-mono` = `"Press Start 2P", "VT323", ui-monospace, …`（**标题**用真像素字），`--ds-font-sans` = `"VT323", "Press Start 2P", ui-monospace, …`（**正文 / HUD 数据**用更易读的像素终端体）。即标题以 `Press Start 2P` 打头、正文/数据以 `VT323` 打头。
- **真字体内嵌**：`preview.html` 已在 `<head>` 顶部引入仓库内本地字体 `../../_fonts/fonts.css`（OFL 开源、本地 woff2、`font-display:swap`），离线可用、**除该文件外不引任何外网**。字体名与 token 声明一致，无需改 token；未命中时仍优雅退到系统等宽。中文字形不在像素字内，走系统 `PingFang SC`/`Microsoft YaHei` 回退。
- **防溢出（Press Start 2P 字宽大）**：该字体每字符近乎正方且很宽，标题/eyebrow/小标统一加 `overflow-wrap:anywhere` + `word-break` + 紧字距，并给 flex 容器 `min-width:0`，避免撑破窗口或卡片；HUD 计数数字改用 `--ds-font-sans`（VT323，更窄）以适配紧凑宫格。
- **比例尺**：xs 12 / sm 13 / base 15 / md 17 / lg 22 / xl 28 / 2xl 38 / 3xl 56。比常规略大——像素字笔画粗，HUD 数字要给足字号。
- **字重**：像素字本无多档，`normal`/`medium` 均 400，`bold` 用 700（强调标题/分数）。
- **字距**：`tracking-normal: 0.02em`——略加字距增强街机标牌/车票感。
- **行高**：标题 1.15，正文 1.5，宽松 1.7。
- **中文适配**：像素字族不含中文字形，中文回退系统等宽（已在字族尾部加 `PingFang SC`/`Microsoft YaHei`）。建议中文 HUD **适度加大字号、行高 ≥1.6**；纯中文长段落不用 mono 标题。

## 6. 间距与布局

- **比例尺（4px 基）**：4/8/12/16/20/24/32/40/48/64/80/96（`--ds-space-1…-12`）。像素艺术本就建立在网格上。
- **节奏**：HUD 卡内组内 8px、组间 16px；卡片之间 20–24px。
- **固定全端视口（项目硬约束）**：整页**不滚动**——地图舞台 + 信息面板固定在一屏，仅信息面板内部滚动。桌面端双栏（地图 ~1.15fr｜信息面板 1fr）等高；移动端上地图、下信息面板。
- **栅格**：信息面板内卡片按 4px 网格对齐，使硬阴影偏移（2/4/6px）落在整像素上。
- **建议**：地图 marker / 印章 / 手账图标用 `image-rendering: pixelated`，放大不糊。

### 响应式断点（preview 内置）

- **HUD 双栏断点**：桌面 `.hud` 为 `1.15fr｜1fr`；`@media (max-width:760px)` 起塌成单列（地图列在前，自然先排，呼应「上地图下面板」）。组件库 `.comp-grid` 同样 760px 起单列。
- **≤640px 手机断点**：`@media (max-width:640px)` 再做一档收口——`.hud`/`.comp-grid` 强制单列上下堆叠；顶栏改纵向、切换按钮右对齐；任务 4 宫格降为 **2×2**、手账降为 **2 列**、印章降为 4 列，数字不再被挤；`h1` 收到 `lg`、`.wrap` 内边距收窄，配合 Press Start 2P 断行规则防像素字溢出窄屏。
- **移动 HUD 演示框（约 375px）**：`.phone` 为纵向 `flex`，三段式——**上**固定高地图区（`flex:none`）、**中**任务面板（`flex:1; min-height:0; overflow:auto`，**仅此区滚动**）、**下**固定 D-pad 控制条；外框 `overflow:hidden` 实现整框不滚，精确复刻项目「固定视口 / 仅内容面板滚 / 上地图下内容」契约。mini D-pad 键帽 38px、行动按钮撑满右栏便于拇指点按。

## 7. 圆角 / 阴影 / 描边

- **圆角**：`sm 0` / `md 0` / `lg 2px` / `full 0`。像素世界没有曲线。
- **阴影（硬实心偏移，绝不模糊）**：
  - `--ds-shadow-sm: 2px 2px 0 0 #1d2f33`
  - `--ds-shadow-md: 4px 4px 0 0 #1d2f33`
  - `--ds-shadow-lg: 6px 6px 0 0 #1d2f33`
  - 暗色改用纯黑 `#000`，在深底上仍立体。
  - 气质：实心方块投影 = 盖章/键帽。按钮 `:active` 时 `translate(2px,2px)` 并把阴影缩到 0，做实体按下反馈。
- **描边**：粗硬边 2–3px 实线。卡片/按钮 2px，顶栏/分隔/D-pad 键帽用 3px `--ds-border-strong`。**黑描边是像素风的灵魂，所有 HUD 元件都要有。**

## 8. 动效

- **曲线**：`--ds-ease: steps(4, end)`——跳帧，模拟低帧率精灵动画。
- **时长**：`fast 80ms` / `base 140ms` / `slow 240ms`（短促干脆）。
- **典型过渡**：
  - 按钮/方向键 hover：`translate(-1px,-1px)` + 阴影加深；active：`translate(2px,2px)` 吃掉阴影。
  - 城市印章「盖章」：出现时 1–2 帧不透明度跳变 + 轻微旋转（`rotate(-4deg)`）。
  - 收集 toast：从下方跳入（steps）后停留再消失。
- **`prefers-reduced-motion`**：必须尊重。该模式下取消所有位移/闪烁/跳帧与印章旋转，仅保留即时颜色/状态切换。preview 已内置。

## 9. 组件规格

所有组件颜色一律走 `var(--ds-*)`，绝不硬编码。统一特征：**2–3px 描边 + 硬实心偏移阴影 + 直角**。

### 按钮（旅行掌机按键式）
| 变体 | 底 | 文字 | 描边 | 阴影 |
|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | 2px `--ds-border-strong` | `shadow-sm` |
| secondary | `--ds-bg-elevated` | `--ds-fg` | 2px `--ds-border` | `shadow-sm` |
| tertiary | 透明 | `--ds-fg` | 2px transparent（hover 显边） | 无 |
| danger | `--ds-danger` | `#fff` | 2px `--ds-border-strong` | `shadow-sm` |

- **状态**：hover → `-hover` 色 + `translate(-1px,-1px)` + `shadow-md`；active → `-active` + `translate(2px,2px)` + 阴影 0；disabled → 50% 透明、去阴影、`not-allowed`；focus-visible → `--ds-focus-ring`。
- **尺寸**：小 32 / 中 40 / 大 48px（触控热区见可访问性）。

### 输入框 / select（方正）
底 `--ds-bg-sunken`，文字 `--ds-fg`，占位 `--ds-fg-subtle`，2px `--ds-border` 实线，直角，高 40px。focus：`--ds-focus-ring` + 边框转 `--ds-border-strong`。

### 卡片
底 `--ds-bg-elevated`，2px `--ds-border`，`radius-lg`(2px)，`shadow-md`，内边距 `space-5`(20px)。标题 `font-mono` + **主色左竖条**（6px `--ds-primary`），副标题用 `font-mono` xs `fg-subtle`。

### 徽章 / 标签（方块）
直角方块，2px 描边，内边距 2px 8px，xs 字号。语义色：底用 `*-bg`、字用 `*-fg`、描边用对应主色。

### 提示条 alert
success/warning/danger/info：底 `*-bg`，文字 `*-fg`，2px 全描边，直角，**前置对应语义色的像素 SVG 图标**（勾/感叹/叉/i，方块硬边风），不用侧边色条。

### 导航
顶栏：底 `--ds-bg-elevated`，3px `--ds-border-strong` 描边 + `shadow-md`。eyebrow 用 `font-mono` + `--ds-accent`。

### 面包屑 Breadcrumb（路线导航）
上级站点为可点像素片（`bg-elevated` + 2px `--ds-border` + `shadow-sm`），hover `translate(-1px,-1px)` 抬起 + 文字转 `--ds-accent`；分隔用像素箭头 `▸`（`fg-subtle`）；**当前站**用 `here`：`--ds-primary` 底 + `primary-fg` 字 + `border-strong`，不可点（`aria-current="page"`）。

### 步进器 Stepper（呼应路线阶段）
横向阶段条：每段 = 34px 方形编号 + `font-mono` 标签，编号两侧用伪元素画 4px 实色连接条（整像素对齐）。三态：`done` 苇绿打勾 + 苇绿连接条；`now` **暖土黄 `--ds-focus`** + 焦点环（`aria-current="step"`）；未到站 `bg-sunken` 凹陷灰。编号字用 `font-sans`(VT323) 防 Press Start 2P 撑爆窄段。

### 下拉菜单 Dropdown
触发用 secondary 按钮（`aria-haspopup`/`aria-expanded`）。弹层 `bg-elevated` + 2px `--ds-border-strong` + `shadow-md`，直角硬边；菜单项 ≥40px，hover/选中转 `bg-sunken` + 显边，**选中项** `--ds-primary` 字 + 像素勾 SVG（`caret`）；分隔 `divider` 2px 实线；`focus-visible` 焦点环。点击外部或 Esc 关闭。

### 工具提示 Tooltip
纯 CSS `hover` + `:focus-within` 触发（键盘可达）。气泡用反色 `--ds-fg` 底 + `--ds-bg` 字（暗反差），2px `--ds-border-strong` + `shadow-md`，**方角箭头**用旋转方块伪元素（非圆三角，守像素气质）；`role="tooltip"` + 触发元素 `aria-describedby`。

### 分页 Pagination
像素键帽：每键 ≥40×40px，`bg-elevated` + 2px `--ds-border` + `shadow-sm`；hover 抬起、active `translate(2px,2px)` 消阴影；**当前页** `aria-current="page"` → `--ds-primary` 底 + `primary-fg` 字 + `border-strong`；首尾禁用态半透明去阴影；省略号 `gap` 无边无阴影。前后页 `‹ ›` 像素箭头。

### Toast 通知
行内卡 `bg-elevated` + 左 6px 实色印戳条 + `shadow-md`；左侧 30px 方形**印戳**（盖章 success 苇绿 / +1 info 江蓝），右侧标题（`font-mono sm`）+ 说明（`sm muted`）。容器 `role="status" aria-live="polite"`；出现用 steps 跳入、停留后自动移除，尊重 `reduced-motion`。

### 模态框 Modal
遮罩 `rgba(15,28,31,.72)` 居中。弹层 `bg-elevated` + **3px** `--ds-border-strong` + `shadow-lg`；标题栏用 `--ds-primary` 底 + `primary-fg` 字（`font-mono`）+ 方形关闭键；正文可含歪斜大印戳（`rotate(-4deg)`，reduced-motion 下归零）；底部操作行右对齐（secondary + primary）。`role="dialog" aria-modal="true" aria-labelledby`；Esc / 遮罩 / 关闭键均可关，开关时管理焦点。

> 以上 7 件统一守：**2–3px 描边 + 硬实心偏移阴影 + 直角 + steps 跳帧**，全部 `var(--ds-*)`；当前/选中态一律主色高亮、当前路线阶段用暖土黄 `--ds-focus`。

---

## 游戏 HUD 组件章节（苏北游专属）

> 全部走 `var(--ds-*)`；这是本 Kit 的核心交付，针对苏北游真实界面（见 `index.html`：mission-card / gameplay-card / journal / stamp-grid / feedback-toast / mobile-controls）。

### 当前任务卡（mission-card）
- 卡片标准样式 + 主色左竖条标题「当前任务」，副标题显示**路线阶段**（如「第 2 站 · 连云港」）。
- **目标计数 4 宫格**：城市印章 / 区县边界 / 旅行手账 / 沪客问答，各一个 `bg-sunken` 方块；数字用 `font-mono md` + `--ds-primary` 高亮，标签 xs `fg-muted`。
- 含「下一步建议」提示（江蓝 info 气质）与路线控制行。

### 路线阶段进度（stage-steps）
- 横排「点—条—点」时间线：已过站 `--ds-success`，**当前站 `--ds-focus`（暖土黄）**，未到站 `--ds-bg-sunken`；点为 18px 方块（非圆），连接条 4px 实色，全部 2px `--ds-border-strong` 描边。
- 控制行三按钮：`上一站`(secondary) / `聚焦地图`(primary) / `下一站`(secondary)，等宽撑满。

### 城市印章（stamp）
- 5 列方块网格。未获得：虚线描边 `--ds-border` + `bg-sunken` + `fg-subtle` 文字。
- 已获得：实线 `--ds-accent` 描边 + `bg-elevated` + 复古红字 + `shadow-sm` + **`rotate(-4deg)` 歪斜盖章感**；顶部一个大字印戳（城市首字）。
- 触控目标随网格自适应，单元 ≥44px。

### 旅行手账收集卡（journal，4 类）
- 4 列：**景点（info 蓝）/ 街巷（warning 黄）/ 风味（accent 红）/ 风情（primary 青）**，靠图标方块颜色区分类别。
- 每卡：28px 像素图标方块（3px strong 描边）+ 类别名（mono xs）+ 收集到的具体名称。
- 未收集：`locked` 态 50% 透明 + 虚线描边 + 灰图标。集齐 4 枚触发完成态（可叠加 toast）。

### 沪客问答（quiz）
- 题面 `fg-muted sm`；每个选项为整行可点按钮（`quiz-opt`，左对齐，≥44px 高，`shadow-sm`）。
- 答对：`success-bg` + `success` 描边 + 像素勾 SVG；答错：`danger-bg` + `danger` 描边 + 像素叉 SVG。focus-visible 焦点环。
- 同结构用于「沪客事件 / 本地传闻 / 旅途变故」描述符驱动的挑战选项。

### 收集反馈 toast
- 行内卡：`bg-elevated` + 左 6px 实色条 + `shadow-md`。左侧 30px 方形**印戳**（盖章=success 苇绿、+1=info 江蓝），右侧标题(mono sm) + 说明(sm muted)。
- `role="status" aria-live="polite"`；出现用 steps 跳入，尊重 reduced-motion。

### 方向键 D-pad（mobile-controls）
- 3×3 网格，键帽 52px：上/左/右/下 用 `bg-elevated`，**中心「打听」键用 `--ds-primary`**（最重要操作高亮）。
- 键帽 2px `--ds-border-strong` + `shadow-sm`；hover 抬起、active 按下消阴影（实体按键手感）。每键 `aria-label`。

### 资源 HUD（time / energy / favor）
- 3 宫格：时间(info 蓝)、体力(success 绿)、人情(accent 红)，各 `font-mono md` 数字 + xs 标签。
- 资源见底时该格可叠加 `warning` 高亮/闪烁（reduced-motion 下仅变色）。

### 固定视口面板布局
- 桌面双栏等高（地图 + 信息面板），信息面板 `overflow:auto` 内部滚动，整页 `overflow:hidden`；移动端纵向堆叠，仅下方面板滚动。详见第 6 节。

## 10. 可访问性

- **对比度**：正文 ≥4.5:1，大字/UI ≥3:1。亮：fg 11.6 / muted 7.2 / subtle 4.7 / primary 上米白 4.8 / accent 链接 4.95。暗：fg 15.4 / muted 10.1 / subtle 5.7 / primary 上近黑 9.2 / accent 6.8。状态浅底+深字均 ≥11:1（亮）。
- **焦点**：键盘可达，统一 `--ds-focus-ring`（双层硬偏移方环，无模糊，暖土黄主环），`:focus-visible` 触发，绝不 `outline:none` 而不补焦点环。
- **触控目标**：交互元素点击区 ≥44×44px（D-pad 键帽 52px；问答选项行 ≥44px；视觉小元件用内边距/伪元素补热区）。
- **可减弱动效**：`@media (prefers-reduced-motion: reduce)` 关闭所有 steps 跳帧、位移、闪烁与印章旋转，仅保留即时颜色/状态切换。
- **像素字可读性**：HUD 关键数字给足字号（md/lg）；长说明回退系统等宽；中文加大行高。
- **语义**：toast `aria-live="polite"`；方向键/印章带 `aria-label`；color 不作唯一区分（手账/状态同时用图标/文字）。

## 11. Do / Don't

**Do**
- 所有边 2–3px 实线深江墨蓝描边，圆角归零（lg 最多 2px）。
- 阴影一律硬实心偏移（`Npx Npx 0 0`），按下时位移并消阴影。
- HUD 关键数字（站数/印章/资源）用 mono 大字 + 主色高亮，扫读优先。
- 用旅行盖章隐喻表达「收集/完成」（歪斜印章、方形印戳）。
- 动效用 steps 跳帧并尊重 reduced-motion；像素图标用 `image-rendering: pixelated`。

**Don't**
- 不用模糊阴影（`blur > 0`）——一糊就不像素了。
- 不用大圆角 / 药丸按钮 / 圆头像 / 圆点进度。
- 不用平滑 `ease`/`cubic-bezier` 当主过渡。
- 不把暖土黄 `#e0a020` 当正文链接（对比不足）——它是焦点/装饰/当前站色。
- 不让整页滚动——固定视口，仅信息面板内部滚。
- 不硬编码颜色到组件，一律走 `var(--ds-*)`。

## 12. 如何接入

1. **引入变量**：
   ```html
   <link rel="stylesheet" href="./tokens.css" />
   ```
   亮色默认；切暗色给 `<html data-theme="dark">`（或加 `.dark` 类，二者兼容）。

2. **直接用变量**（示例：打听按钮）：
   ```css
   .talk {
     background: var(--ds-primary);
     color: var(--ds-primary-fg);
     border: 2px solid var(--ds-border-strong);
     border-radius: var(--ds-radius-sm);
     box-shadow: var(--ds-shadow-sm);
     font-family: var(--ds-font-mono);
     transition: transform var(--ds-dur-fast) var(--ds-ease),
                 box-shadow var(--ds-dur-fast) var(--ds-ease);
   }
   .talk:active { transform: translate(2px,2px); box-shadow: none; }
   ```

3. **Tailwind 项目**：先引 `tokens.css`，再在 `tailwind.config.js`：
   ```js
   module.exports = { presets: [require('./tailwind.preset.js')] };
   ```
   即可用 `bg-primary text-primary-fg border-strong shadow-pixel-md rounded-lg font-mono ease-pixel duration-fast` 等工具类，全部消费 CSS 变量。

4. **预览**：双击 `preview.html` 即开（内联样式、可亮暗切换；唯一外引为本地 `../../_fonts/fonts.css` 真像素字，离线可用）。展示色板/字体、全套游戏 HUD 组件、深化组件库（模态框 / 下拉菜单 / 工具提示 / 分页 / Toast / 步进器 / 面包屑）与移动端 375px 手机 HUD 演示。
