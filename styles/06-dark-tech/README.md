# Dark Tech / 暗黑科技风

> 暗色优先的「开发者 / AI 控制台」设计系统。纯黑近黑底 + 霓虹青强调 + 终端代码感 + 辉光描边。为开发者工具、AI 产品、Dashboard 而生——打开就像进了一台漂亮的终端。

---

## 1. 一句话气质

深空黑做底、霓虹青做光、等宽字做骨——冷静、未来、有代码味。默认即暗色，亮色是它的「白天模式」。

---

## 2. 设计哲学 / 性格

本风格继承 Geist 基底的**语义分层 + 比例尺驱动 + 状态色成对 + 可见焦点环**骨架，但在气质上做了三处关键改造：

1. **暗色优先（Dark First）** —— 与其它风格相反：`:root` 直接写暗色（深空黑），`[data-theme="light"]` / `.light` 才翻成亮色。开发者工具长时间盯屏，暗底是默认体验，亮色是补充。
2. **霓虹强调，黑底承托** —— 抛弃 Geist 的中性克制。背景压到近黑（`#0a0a0f`），把对比预算全留给霓虹青 `#00e0c6` 与霓虹紫 `#8b5cf6`，强调色只点在「主操作 / 链接 / 选中 / 状态灯」上，黑底越纯，霓虹越亮。
3. **辉光即材质（Glow as Material）** —— 阴影不只是投影，更叠一层主色 glow（`0 0 0 1px border, 0 8px 24px 黑, 0 0 24px 青光`）；focus 环自带霓虹光晕；状态灯是会发光的圆点。辉光是这套系统的「金属反光」。
4. **终端 / 代码感** —— 等宽字 `JetBrains Mono` 提到一等位置：数据、标签、标题、代码块都走 mono；卡片可带 `▍` 光标与 `$` 提示符，营造 console 体感。
5. **利落不花哨** —— 动效 150–250ms，可有扫光 / 微辉光呼吸，但 `prefers-reduced-motion` 一律关闭装饰动效。

---

## 3. 何时用 / 何时别用

**适合：**
- 开发者工具、CLI 配套 Web、SDK / API 控制台。
- AI 产品（对话台、Agent 编排、模型监控）。
- 运维 / 数据 Dashboard、可观测性面板、日志台。
- 需要「极客 / 未来 / 高信息密度」气质的 SaaS。

**别用：**
- 面向大众消费、需要亲和温暖的品牌（电商、母婴、生活方式）。
- 内容阅读为主、要长时间舒适浅色阅读的资讯 / 文档站（除非主打暗色）。
- 政务 / 金融合规等要求克制中性、避免炫技的 B 端（见 enterprise / gov-cn）。
- 打印 / 低饱和墨水场景——霓虹与辉光会失效。

---

## 4. 颜色

> 取值随主题切换由 `tokens.css` 提供。**`:root` 默认暗色**；亮色由 `[data-theme="light"]` / `.light` 覆盖。

### 4.1 表面与文字

| 语义 token | 暗（默认 :root） | 亮（.light） | 用途 |
|---|---|---|---|
| `--ds-bg` | `#0a0a0f` | `#ffffff` | 主背景（深空黑 / 纯白） |
| `--ds-bg-subtle` | `#111119` | `#f6f7f9` | 次背景、分组底 |
| `--ds-bg-elevated` | `#14141c` | `#ffffff` | 抬起表面：卡片、弹层（带轻微蓝调） |
| `--ds-bg-sunken` | `#08080c` | `#eef0f3` | 凹陷表面：输入槽、代码块 |
| `--ds-fg` | `#e6e6f0` | `#0e1117` | 主文字 |
| `--ds-fg-muted` | `#9a9ab0` | `#51596b` | 次要文字 |
| `--ds-fg-subtle` | `#62627a` | `#6b7385` | 占位 / 弱文字（仅用于辅助或大字） |
| `--ds-fg-on-accent` | `#04120f` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#26263a` | `#e1e4ea` | 常规描边 |
| `--ds-border-strong` | `#383850` | `#c7ccd6` | 强描边 / 分隔 |

### 4.2 品牌与强调

| 语义 token | 暗 | 亮 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#00e0c6` | `#00786a` | 主操作色（霓虹青；亮色收敛至 AA） |
| `--ds-primary-hover` | `#2af0d8` | `#008f7e` | hover |
| `--ds-primary-active` | `#00c2ab` | `#005f54` | active / pressed |
| `--ds-primary-fg` | `#04120f` | `#ffffff` | 主操作上的文字 |
| `--ds-accent` | `#8b5cf6` | `#7c3aed` | 链接 / 次强调（霓虹紫） |
| `--ds-accent-fg` | `#0a0612` | `#ffffff` | accent 上的文字 |

> **强调色梯度（暗）**：active `#00c2ab` → 主 `#00e0c6` → hover `#2af0d8`，由深到亮，hover 更亮即「点亮」。亮色版整体下压（主 `#00786a`）以满足白底 AA。

### 4.3 语义状态（霓虹）

每个含 主色 + `-bg` 浅底 + `-fg` 底上文字。暗色下 `-bg` 是「深底」（黑里透色），亮色下是「浅底」。

| 语义 | 暗 主 / bg / fg | 亮 主 / bg / fg |
|---|---|---|
| success | `#00e676` / `#06231a` / `#9affc9` | `#07823f` / `#e6f8ee` / `#044523` |
| warning | `#ffb020` / `#261800` / `#ffe2a8` | `#9a6400` / `#fff4e0` / `#4d3200` |
| danger  | `#ff4d6d` / `#2a0a12` / `#ffc4cf` | `#d11a3f` / `#ffe9ee` / `#6b0a20` |
| info    | `#00b3ff` / `#04203a` / `#b3e6ff` | `#0073c4` / `#e5f3ff` / `#003a66` |

### 4.4 焦点

| token | 值 |
|---|---|
| `--ds-focus`（暗 / 亮） | `#00e0c6` / `#00786a` |
| `--ds-focus-ring`（暗） | `0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus), 0 0 14px -2px rgba(0,224,198,.55)` |
| `--ds-focus-ring`（亮） | `0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus), 0 0 10px -3px rgba(0,120,106,.35)` |

> 双层环（底环隔开背景 + 主色环）+ 第三层霓虹 glow，键盘可达且「会发光」。

---

## 5. 字体

- **字族**：
  - `--ds-font-mono`：`"JetBrains Mono", "Geist Mono", ui-monospace, …` —— **本风格一等公民**。用于数据、标签、标题、代码块、状态值，撑起终端感。
  - `--ds-font-sans`：`"Geist", "Inter", -apple-system, …` —— 长段正文与表单文案，保证可读。
  - `--ds-font-serif`：仅作回退，本风格基本不用衬线。
- **选择理由**：等宽字天生有「代码 / 控制台」气质，数字等宽利于 Dashboard 对齐；标题用 mono 强化极客感，正文用 sans 防止大段等宽阅读疲劳。
- **比例尺**（`--ds-text-*`）：xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48。base 14 贴近开发者工具的高密度。
- **字重**：normal 400 / medium 500 / bold 600（标题与强调用 600，不上更粗，保持冷峻）。
- **行高**：tight 1.2（标题）/ normal 1.5（UI）/ relaxed 1.7（长正文）。
- **字距**：tight `-0.02em`（大标题收紧）/ normal `0`。等宽小标签可酌情加 `0.04em` 字距强化「终端 label」感（preview 中示范）。
- **中文适配**：sans 链回退 `PingFang SC` / `Microsoft YaHei`，中文走无衬线；中文不强制等宽（等宽中文易撑乱），mono 主要承载英文 / 数字 / 符号。

---

## 6. 间距与布局

- **比例尺**（`--ds-space-1…12`，4px 基）：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96。
- **节奏**：组内 8px、组间 16px、区块间 32–40px。Dashboard 信息密度高，控件内边距偏紧（按钮 0 14px、input 0 12px）。
- **容器宽**：内容主区建议 max-width 1200–1440px；侧栏 240–280px；卡片栅格 12 列、gap 16–24px。
- **栅格**：控制台常用「侧栏 + 主区」两栏；主区内用卡片网格承载指标。表格行高 40–44px，保证触控与扫读。
- **响应式 / 移动端**：
  - **断点**：`≤720px` 侧栏 + 主区两栏塌成单栏；`≤640px` 所有多列栅格（卡片网格 `.cards`、色板 `.sw-grid`）收为一列，容器边距由 24px 收到 16px，顶栏换行、步骤条转纵向。
  - **流式栅格**：默认用 `repeat(auto-fit/auto-fill, minmax(…, 1fr))`，列数随容器宽自动增减；窄屏下 `minmax` 自然退化，断点只做兜底「强制一列」。
  - **移动框**：约 375px 手机框（顶栏 + 终端卡片 + 全宽按钮 + 列表），暗色霓虹基调在小屏同样成立；触控行高 ≥ 44px，主操作按钮整宽便于拇指点击。
  - **暗色一致**：移动块与新组件全部走 `var(--ds-*)`，默认暗色下辉光 / 描边成立，切到 `[data-theme="light"]` 亮色亦不破坏。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：sm `6px`（控件 / 徽章）、md `10px`（卡片 / 弹层）、lg `14px`（大表面 / 模态）、full `9999px`（药丸 / 状态灯 / 头像）。整体偏小，保留科技硬朗。
- **阴影 + 辉光**（暗）：
  - sm：`0 0 0 1px border, 0 2px 6px -2px 黑.6`
  - md：`0 0 0 1px border, 0 8px 24px -8px 黑.7, 0 0 24px -10px 青光.25`
  - lg：`0 0 0 1px border, 0 16px 48px -12px 黑.8, 0 0 40px -12px 青光.35`
  - 第一层 `0 0 0 1px border` 是「描边即结构」，霓虹 glow 是最后一层「材质反光」。亮色下辉光显著减弱。
- **描边**：暗底以 `--ds-border #26263a` 勾勒卡片轮廓（暗色下分层主要靠描边 + 极淡抬起色，而非阴影深浅）；强分隔用 `--ds-border-strong`。
- **图标**：统一内联线性 SVG（`viewBox="0 0 24 24"`、`stroke="currentColor"`、线宽 ~1.8、圆头圆角），随上下文取色。暗色下 `.icon-glow` 叠一层 `drop-shadow` 细辉光呼应霓虹材质；亮色下关闭辉光保 AA 与清晰。不使用彩色 / 象形 emoji。
- **层级**：组件层叠用语义 `--ds-z-*` 尺度（dropdown < sticky < modal-backdrop < modal < toast < tooltip），不用 9999 之类魔法值。

---

## 8. 动效

- **时长**：fast 150ms（hover / 按下）、base 200ms（颜色 / 展开）、slow 250ms（弹层 / 主题切换）。
- **曲线**：`--ds-ease: cubic-bezier(.2,.8,.2,1)`，快进慢出、利落。
- **典型过渡**：
  - 按钮 hover → 边框 / 文字转主色 + 外发 `0 0 18px -2px primary` 辉光。
  - 状态灯 → 缓慢辉光呼吸（opacity / blur 微动，2–3s 循环）。
  - 卡片 / 主区头部可有一道极淡扫光（sweep）一次性掠过。
- **`prefers-reduced-motion`**：tokens.css 内置媒体查询，把动画 / 过渡压到 ~0ms 并停掉迭代——辉光呼吸、扫光全部关闭，只留即时状态变化。

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
- 内边距 0 12px；textarea 上下 8px。等宽数值输入可用 `--ds-font-mono`。

### 卡片（终端感卡片）

- 底 `--ds-bg-elevated`（带轻微蓝调），`1px --ds-border`，圆角 md，阴影 `--ds-shadow-md`。
- 可带 mono 标题 + `▍` 光标 / `$` 提示符 + 等宽小标签（如 `STATUS`）。
- 内边距 20–24px；标题 16/600 mono，正文 14/400 sans。

### 徽章 / 标签（药丸 full，高 20–22px，字 12 mono）

- 中性：底 `--ds-bg-subtle`，字 `--ds-fg-muted`，`1px --ds-border`。
- 语义：底 `<sem>-bg`，字 `<sem>-fg`，可加 `1px <sem>` 描边。等宽大写更「终端」。

### 状态指示灯（带 glow 圆点）

- 8–10px 圆点，色取 `--ds-success/warning/danger/info`，外发 `0 0 8px <sem>` 辉光。
- 在线态可加缓慢辉光呼吸（reduced-motion 关闭）。

### 提示条 alert（圆角 md，前置语义 SVG 图标 + 浅底 + 1px 全描边）

- 底 `<sem>-bg`，字 `<sem>-fg`，`1px <sem>` 全描边（不用粗色竖条）。success / warning / danger / info 四种。
- 行首一枚语义线性 SVG 图标（对勾 / 感叹三角 / 叉 / i），`currentColor` 取对应语义色。

### 导航

- **顶栏**：底 `--ds-bg-subtle`，下边 `1px --ds-border`，高 56px；品牌走 mono；当前项底色 `--ds-primary` 文字 / 下划线。
- **侧栏**：底 `--ds-bg-subtle`，宽 240–280px；项 hover 底 `--ds-bg-elevated`，选中项左 3px `--ds-primary` 竖条 + 文字转主色。
- **Tab**：选中项下边 2px `--ds-primary` + 文字主色，未选 `--ds-fg-muted`。

### 表格（暗色表格）

- 表头底 `--ds-bg-subtle`、字 `--ds-fg-muted` mono 大写小标签；行高 40–44px，斑马纹用 `--ds-bg-subtle`，行 hover `--ds-bg-elevated`。
- 数值列用 `--ds-font-mono` + 右对齐，便于扫读。

### 代码块

- 底 `--ds-bg-sunken`，`1px --ds-border`，圆角 sm，字 `--ds-font-mono` 13/1.7；关键字可点 `--ds-primary` / `--ds-accent`。

### 模态框 modal（圆角 lg，居中弹层）

- 遮罩 `rgba(4,4,8,.72)` + 轻 blur；弹层底 `--ds-bg-elevated`，`1px --ds-border-strong`，阴影 `--ds-shadow-lg`（含霓虹辉光）。
- 标题 mono + `▍` 光标；右上角线性「叉」SVG 图标关闭，hover 转 `--ds-primary`。
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
- 当前页（active）：霓虹填充 `--ds-primary` 底、`--ds-primary-fg` 字 + glow；端点（prev/next）禁用态 40% 透明。

### Toast 通知（圆角 md，前置语义 SVG 图标 + 1px 全描边）

- 底 `--ds-bg-elevated`，`1px <sem>` 全语义描边（不用粗色竖条），阴影 `--ds-shadow-md`；前置图标取 success / danger / info 语义色。
- 标题 mono、说明 `--ds-fg-muted`；右滑入场 `toastIn`（reduced-motion 关闭）；线性「叉」SVG 图标手动关闭。

### 步进器 / 步骤条 stepper

- 节点圆点 30px：未完成 `--ds-bg-sunken` + `--ds-border-strong`；完成态 `--ds-success` 描边 + `-bg` 底，节点内放线性「对勾」SVG 图标；激活态 `--ds-primary` 填充 + glow。
- 连接条 2px：已过区段转 `--ds-success`，未过 `--ds-border`；标签 mono，完成 / 激活转亮。
- 窄屏（≤640px）改纵向堆叠，连接条隐藏。

### 面包屑 breadcrumb（mono 路径）

- 链接 `--ds-fg-muted`，hover 转 `--ds-primary` + 文字辉光（text-shadow）；分隔符 `/` 用 `--ds-fg-subtle`。
- 当前项 `--ds-fg` 且前缀 `▍` 主色光标，标示「当前位置」；focus 用 `--ds-focus-ring`。

---

## 10. 可访问性

- **对比度**：正文 ≥ 4.5:1，大字 / 图形 ≥ 3:1。暗底 `#e6e6f0/#9a9ab0` 与 `#0a0a0f` 均达 AA；`--ds-fg-subtle` 仅用于辅助或大字。霓虹青在暗底上对文字用 `--ds-primary-fg #04120f`（深字）保证按钮文字对比。亮色版主色已下压到 `#008f7e` 以满足白底 AA。
- **焦点**：所有可交互元素用 `--ds-focus-ring`（双层环 + glow），键盘可见；不要用 `outline:none` 而不补环。
- **触控目标**：交互区 ≥ 44×44px（按钮默认 40 高时给足横向 padding / 命中区）。
- **可减弱动效**：内置 `prefers-reduced-motion` 媒体查询，关闭扫光与辉光呼吸。
- **不靠颜色单传信息**：状态灯 / 徽章除颜色外配文字或图标（如 `success` 文案、线性「对勾」SVG 图标）。

---

## 11. Do / Don't

**Do**
- 底保持近黑、纯净，把对比留给霓虹强调。
- 强调色只点在主操作 / 链接 / 选中 / 状态上，克制使用。
- 数据、标签、标题善用等宽 mono，强化终端感。
- 用描边 + 极淡抬起色做暗色分层，辉光作点睛。
- focus 环始终保留并带 glow；reduced-motion 下关掉装饰动效。
- 亮色版当作认真的「白天模式」维护，别只是反色。

**Don't**
- 别把整页堆满霓虹——满屏发光等于没有重点，且刺眼。
- 别用纯白 `#fff` 大面积当暗色文字（用 `#e6e6f0`，降眩光）。
- 别滥用辉光呼吸 / 扫光，更别忽略 reduced-motion。
- 别把霓虹色直接当小号正文色（细字 + 高饱和易糊、对比不足）。
- 别硬编码十六进制到组件，一律走 `var(--ds-*)`。
- 别在亮色模式沿用暗色的高亮霓虹（会过曝、对比不足）。

---

## 12. 展示页 / 图片与图标用法（Showcase v2）

`preview.html` 已升级为作品级展示页：顶部 hero 首屏 + 完整组件库 + 四大应用区块。除 `../../_fonts/fonts.css` 与 `../../_assets/**` 本地素材外，无任何外网资源；图片一律 `loading="lazy"` + 有意义 `alt`。

### 12.1 图片处理（保持暗黑科技身份）

所有图片走统一的 `.media` 容器，叠三层处理，让任何素材都「进入控制台语境」：

1. **青/紫霓虹 duotone 叠色**：`mix-blend-mode: screen` 叠一道 `--ds-primary`（青）→ 透明 → `--ds-accent`（紫）的对角渐变。
2. **扫描线**：`repeating-linear-gradient` 极淡横纹，呼应 CRT / 终端质感。
3. **青色辉光描边**：`.media.glow` 叠 `0 0 26px var(--ds-primary)` 外发光 + `inset 0 0 0 1px` 青色内描边。

亮色模式下叠色自动转 `multiply` 并降饱和、辉光收敛为常规阴影，保证 AA 与清晰。统一用 `aspect-ratio`（16:9 / 4:3 / 1:1 / 3:4）+ `object-fit:cover`，圆角走 `--ds-radius-md`。

**覆盖范围**：宽高比框、媒体卡（图 + 标题正文操作）、等高画廊、图文混排 split、图上叠字 overlay（渐变 scrim 保 AA）、头像（尺寸阶 24/32/40/48 + 堆叠 av-stack + 用户行）、full-bleed 背景大图区。

### 12.2 图标用法

统一内联线性 SVG（`viewBox="0 0 24 24"`、`stroke="currentColor"`、线宽 ~1.8、圆头圆角），零彩色 / 象形 emoji：

- **图标集**：≥12 枚控制台语义图标（pulse / chip / node / core / term / lock / scan / deploy / clock / logs / shield / net），网格展示带名。
- **尺寸阶**：16 / 20 / 24 / 32，基线对齐；暗版可叠 `.icon-glow` 细辉光，亮版关闭保 AA。
- **线性 vs 实心 / 单色 vs 双色**对比示范。
- **场景里**：仅图标按钮（带 `aria-label`）、按钮前/后置图标、输入框前/后置图标、状态图标（语义色）、带数字徽标的图标。

### 12.3 桌面布局（≥2）

用本风格 token + 真实素材做成可信缩略界面，置于带浏览器 chrome 的 `.frame`（红/黄/绿圆点 + 地址栏）中：

- **开发者控制台 / 仪表盘**：侧边导航 + KPI 卡 + 霓虹渐变柱图 + 数据表。
- **落地页 / 产品**：hero + 三栏特性（带图标）+ CTA。
- **列表-详情**：左列表（带缩略图）+ 右详情（大图 + 标签 + 正文 + 用户行）。

### 12.4 移动布局（≥2）

三个 ~300px 手机框（状态栏 + 听筒意象 + 底部标签栏）：

- **App 首页 feed**：头图 + 卡片流 + 底部图标标签栏。
- **个人主页**：大图 header + 头像 + 指标 + 操作。
- **收件箱列表**：带头像的列表行 + 未读徽标。

内容真实饱满，触控行高 ≥ 44px；`≤860px` 桌面小样侧栏隐藏，`≤640px` 所有多列栅格收为一列。

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
