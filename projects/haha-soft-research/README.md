# 哈哈 · haha-soft-research 设计系统

> 基于「极简 editorial 风」(`styles/07-editorial`) + haha-soft-research 定制。
> 把「排版优先、克制、好读」的 editorial 骨架，换肤成**免费开源软件全家桶官网 + 文档**的气质：清新、产品感、可信、友好开源。

气质关键词：**清新、干净、可信、友好开源**。干净浅冷白底 + 清新开源绿/松石青强调 + 充足留白；排版仍优先，但更「产品/文档」而非「书卷」。

---

## 1. 一句话气质

干净浅底（极淡青味冷白，非暖纸）+ 无衬线为主力（产品 UI/文档正文）+ 衬线仅大标题/品牌点缀 + 清新开源绿/松石青双强调。留白充足、分隔靠线与空白而非阴影，整体像 Keka / 少数派那种「小而美工具」官网——克制、清爽、值得信任。

与 editorial 风（同基底的「文学暖纸」赭橙调）**明显区别**：那边是暖纸 + 衬线正文 + 赭橙文学调；这边是冷白干净底 + 无衬线产品正文 + 开源绿/青，更轻、更产品、更开源。

---

## 2. 设计哲学 / 性格

继承 editorial 基底的**语义分层 + 固定比例尺 + 状态色成对 + 双层焦点环 + 明暗双主题 + 大留白克制**骨架，但气质做了五处改写，向「开源软件全家桶」靠拢：

1. **产品/文档优先，而非书卷**——保留好读排版与克制，但 **sans 升为主力**（产品 UI、文档正文、表格、表单都用无衬线，利于扫读与界面感），**serif 退为点缀**（仅大标题 h1/h2、品牌字、特性大字）。
2. **冷白干净底代替暖纸**——基底是 `#f7faf9` 极淡青味冷白 + `#ffffff` 纯白卡片，干净、轻、有产品感；文字是 `#16241f` 深松石墨，不再用暖纸暖墨。
3. **清新开源绿/松石青双强调**——`--ds-primary` 开源绿 `#0f7d5e`（主操作/下载/CTA），`--ds-accent` 松石青 `#0e6f8a`（链接/次强调/平台标识）。绿与青分工，传达「开源、可信、清新」，区别于文学赭橙。
4. **靠留白与分隔线 + 极轻阴影分层**——仍以空白、浅色块底、`1px` 分隔线为主；但产品卡可用 `shadow-sm/md` 一点点提升「可点」的产品感（比纯阅读站略可见，依旧克制）。
5. **友好但专业的开源气质**——徽章（免费/开源/无广告/隐私）、对标对比表、GitHub/下载并列，传达「免费且开源、内无广告、营收靠赞助/爱发电」的诚实定位。

---

## 3. 何时用 / 何时别用

**适合**
- 哈哈全家桶**产品矩阵官网**（gallery 网格、软件产品卡、下载/赞助 CTA）
- **研究/需求知识库与文档站**（PRD、TOC + 正文、规格文档）
- 开源工具的着陆页、特性页、对标对比页、信任/隐私说明页
- 需要「清新、可信、友好开源」气质的内容/产品页

**不适合**
- 数据密集的 B 端后台/仪表盘（密度太低 → 用 enterprise）
- 暗黑科技、霓虹炫技、强促销冲击的活动页（清新克制感会被削弱）
- 游戏/潮玩/儿童向重 C 端（太素 → 用 cute / pixel）
- 浓「文学/书卷」气质的纯阅读站（那是 editorial 风的活）

---

## 4. 颜色

清新开源绿/松石青双强调 + 干净冷白中性。亮色是日间产品页，暗色是夜间工具模式。所有正文级取值满足 WCAG AA（≥4.5:1）。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#f7faf9` | `#0e1714` | 主背景 · 干净浅冷白 / 深松石墨 |
| `--ds-bg-subtle` | `#eef4f2` | `#14201c` | 次背景 · 区块/分组底 |
| `--ds-bg-elevated` | `#ffffff` | `#1a2723` | 浮层/卡片 · 纯白抬起（产品感） |
| `--ds-bg-sunken` | `#e6efec` | `#0a110e` | 凹陷 · 输入槽/代码块 |
| `--ds-fg` | `#16241f` | `#e4efea` | 深松石墨 · 主文字 |
| `--ds-fg-muted` | `#4c5d57` | `#9fb3ab` | 次要文字 · 元信息 |
| `--ds-fg-subtle` | `#5f706a` | `#7e928a` | 占位/弱文字（≥4.5:1） |
| `--ds-fg-on-accent` | `#f7fdfb` | `#07120e` | 落在强调色上的文字 |
| `--ds-border` | `#dde7e3` | `#2a3833` | 常规描边/分隔线 |
| `--ds-border-strong` | `#c5d4ce` | `#3e4f48` | 强描边 |

### 品牌与强调（强调色梯度）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#0f7d5e` | `#3fc99a` | 开源绿主操作色（下载/CTA/选中） |
| `--ds-primary-hover` | `#0c6a50` | `#5bd4ab` | hover |
| `--ds-primary-active` | `#0a5742` | `#34b389` | active/pressed |
| `--ds-primary-fg` | `#f7fdfb` | `#07120e` | 主操作上的文字 |
| `--ds-accent` | `#0e6f8a` | `#4fb8d4` | 松石青次强调/链接/平台标识 |
| `--ds-accent-fg` | `#f7fdfb` | `#07151a` | accent 上的文字 |

> 强调色梯度（亮）：`#0a5742`(active 最深) → `#0c6a50`(hover) → `#0f7d5e`(default) → 暗色提亮到 `#3fc99a`。**绿（primary）管操作/下载，青（accent）管链接/平台**，分工明确，避免满屏一种绿。

### 语义状态（低饱和：主色 + 浅底 + 底上深字）

| 语义 | 主色（亮/暗） | -bg（亮/暗） | -fg（亮/暗） |
|---|---|---|---|
| success | `#1f8a52` / `#5fc78a` | `#e3f4ea` / `#122a1d` | `#0d4429` / `#d4f1de` |
| warning | `#9a6b00` / `#e0b34a` | `#fbf0d6` / `#2c2206` | `#523800` / `#f7ecc8` |
| danger | `#b53a2e` / `#e88275` | `#fbe6e2` / `#321410` | `#5e1a13` / `#f8ded8` |
| info | `#0e6f8a` / `#5fb8d6` | `#e0eff3` / `#0a232c` | `#073846` / `#d4ecf4` |

> success 用一支更鲜的绿，与品牌绿（primary）刻意拉开色相/饱和，避免「下载按钮」和「成功提示」撞色。info 与 accent 同走松石青系，统一冷调。

---

## 5. 字体

**主轴反转：sans 升为主力（产品/文档），serif 退为大标题/品牌点缀。** 这是本定制相对 editorial 基底最关键的换味。

- `--ds-font-sans`（**主力**：产品 UI / 文档正文 / 表格 / 表单 / 元信息）：`"Inter","PingFang SC","Microsoft YaHei",sans-serif`——产品界面与中文文档优先用无衬线，扫读快、界面感强、清新。
- `--ds-font-serif`（**点缀**：大标题 h1/h2 / 品牌字 / 特性大字）：`"Source Han Serif SC","Noto Serif SC","Songti SC",Georgia,serif`——保留 editorial 的好味，只在大字处出场，给品牌一点「内容/可信」分量。
- `--ds-font-mono`（代码 / 版本号 / 平台 / 哈希）：`"JetBrains Mono",ui-monospace,Menlo,monospace`。

**比例尺**（产品/文档可读，标题拉开）

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-text-xs` | 13px | 脚注/版权/微标签（sans） |
| `--ds-text-sm` | 14px | 元信息/标签/表格（sans） |
| `--ds-text-base` | 16px | **正文/文档/UI**（sans） |
| `--ds-text-md` | 18px | 导语/产品一句话（sans） |
| `--ds-text-lg` | 22px | h3 / 卡片标题 |
| `--ds-text-xl` | 28px | h2（serif 点缀） |
| `--ds-text-2xl` | 38px | h1（serif 点缀） |
| `--ds-text-3xl` | 52px | hero 大标题/品牌 |

**字重**：`normal 400 / medium 500 / bold 600`（无衬线主力，medium 即可建立层级，600 给标题）。

**字距**：标题略紧 `--ds-tracking-tight: -0.018em`；正文 `0`。标题加 `text-wrap: balance`，正文加 `text-wrap: pretty`。

**行高（中文适配）**：`relaxed 1.8` 给文档正文，`normal 1.55` 给 UI/中等文本，`tight 1.22` 给大标题。中文方块字需要较大行距，产品正文比 editorial 阅读站略收（1.8）以增产品紧凑感。

---

## 6. 间距与布局

4px 基比例尺，editorial 的留白底子保留，但栅格更「产品网格」。

`--ds-space-1..12` = `4,8,12,16,20,24,32,40,48,64,80,96`px。

- **节奏**：段落间距 24px（space-6）；标题与下文 16px、与上文 40px；区块间 64–96px（space-10/12）。
- **文档正文容器**：锁 **~720px**（比纯阅读站 680 稍宽，容纳代码/表格/截图），每行 ~34–42 汉字。
- **产品矩阵网格（全家桶 gallery）**：响应式 2–4 列卡片，gap 24px（space-6）起；外层 shell 容器约 1120px 居中。
- **对比表**：满宽（shell 内），行高足、行线 `1px --ds-border`。
- **页边距**：桌面正文左右留白宽裕，移动端 16–20px。

### 响应式断点

移动优先收敛，桌面舒展。两条主断点：

- **≤720px**——文档双栏 `doc-layout` 退为单栏，桌面右侧 sticky `toc` 隐藏。
- **≤640px（手机）**——
  - **产品矩阵网格收一列**：`.grid` / `.cards2` / `.features` 全部 `grid-template-columns: 1fr`，卡片纵向堆叠。
  - **文档 TOC 折叠**：桌面 sticky TOC 隐藏，改用 `<details class="toc-collapse">`「本页目录」可展开折叠条（桌面端反向隐藏，仅手机出现）。
  - **顶栏导航收起**：`.topnav` 隐藏（汉堡入口），仅留品牌 + 主题/下载控件。
  - **节奏收紧**：区块上下 padding 从 `space-11` 降到 `space-9`，hero 标题降一级（`text-3xl → text-2xl`），`shell` 边距 `space-5`。
  - **步骤条竖排**：`.stepper li` 占满宽、步间箭头隐藏。
  - **宽表格横向滚动**：用 `.table-scroll` 包裹，`min-width` 兜底避免挤压，`-webkit-overflow-scrolling: touch`。
- **移动端 Mobile 演示框**：约 375px 手机框（顶栏 + 软件产品卡 + 下载 CTA），手机内产品卡纵向堆叠、按钮满宽（`width:100%`），验证窄屏下产品页与下载链路。

---

## 7. 圆角 / 阴影 / 描边

- **圆角（温和干净）**：`sm 6px`（按钮/输入/徽章）、`md 10px`（卡片/弹层）、`lg 14px`（大表面/图片/产品图标位）、`full 9999px`（药丸/头像/chip）。干净利落，不软萌。
- **阴影（轻 · 产品卡略可见）**：`sm` 几乎看不见、`md` 产品卡/浮层一点点、`lg` 模态稍多。比纯阅读站略可见，给产品卡「可点」感，但仍以留白/分隔线为主分层手段。
- **描边**：`1px solid var(--ds-border)` 的浅青灰分隔线是主力分层（卡片边、表格行线、章节分隔）。需要强调时用 `--ds-border-strong`。产品卡 hover 边色微变 + 阴影微升。

---

## 8. 动效

温柔、克制、无弹跳——产品/文档场景拒绝跳脱。

- **曲线**：`--ds-ease: cubic-bezier(.22,.61,.36,1)`（ease-out，收尾平滑）。
- **时长**：`fast 160ms`（hover/focus）、`base 240ms`（主过渡）、`slow 300ms`（主题切换/展开）。
- **典型过渡**：下载按钮底色渐变、产品卡 hover 边色/阴影微升、链接下划线渐显、亮暗主题切换全局过渡。
- **prefers-reduced-motion**：必须尊重——

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

---

## 9. 组件规格

主力控件/正文用 `--ds-font-sans`，大标题/品牌可用 `--ds-font-serif`，代码用 `--ds-font-mono`。触控目标 ≥44px。

### 按钮（高 40px / 内边距 0 16px / radius sm / font-sans / weight medium）

| 变体 | 底 | 文字 | 边 | hover |
|---|---|---|---|---|
| primary（下载/CTA） | `--ds-primary` | `--ds-primary-fg` | 无 | 底→`--ds-primary-hover` |
| secondary（GitHub/次操作） | `--ds-bg-elevated` | `--ds-fg` | `1px --ds-border-strong` | 底→`--ds-bg-subtle` |
| tertiary（文字按钮） | 透明 | `--ds-primary` | 无 | 底→`--ds-bg-subtle` |
| danger | `--ds-danger` | `#fff` | 无 | 加深 |

尺寸：小 32px / 中 40px / 大 48px（内边距 0 12 / 0 16 / 0 24）。focus 用 `--ds-focus-ring`。disabled 降透明度 .5 + `cursor:not-allowed`。

### 输入框 / textarea（高 40px / 内边距 0 12px / radius sm / font-sans）
底 `--ds-bg-elevated`，边 `1px --ds-border`，文字 `--ds-fg`，占位 `--ds-fg-subtle`。focus：边→`--ds-primary` + `--ds-focus-ring`。错误态：边→`--ds-danger`。

### 卡片（radius md / 内边距 24px / 边 1px --ds-border）
底 `--ds-bg-elevated`（纯白），阴影 `--ds-shadow-sm`。hover 边→`--ds-border-strong` + 阴影升 `--ds-shadow-md`。卡片标题用 sans/serif 均可，元信息用 sans muted。

### 徽章/标签（高 22px / 内边距 0 8px / radius full 或 sm / font-sans / 13px）
中性：底 `--ds-bg-subtle` 文字 `--ds-fg-muted`。语义：底 `*-bg` 文字 `*-fg`。信任徽章（免费/开源/无广告/隐私）推荐 `radius-full` 药丸 + success/info 浅底。

### 提示条 alert（radius md / 内边距 16px / 前置语义 SVG 图标 + 浅底 + 1px 全描边）
底 `*-bg`，文字 `*-fg`，**前置语义图标**（内联 SVG，按语义上色：成功对勾 / 警告三角感叹 / 危险叉 / 信息 i），**1px 语义着色全描边**（`color-mix` 语义色掺入 `--ds-border`，不用侧边色条），标题 sans medium、正文 sans。四语义：success / warning / danger / info。

### 导航（产品/文档顶栏）
高 56–64px，底 `--ds-bg`（或半透明 + blur），底边 `1px --ds-border`。左 logo（品牌字可 serif）+ 产品/文档/赞助 导航，右控件区（sans）：**主题切换（日/夜）+ GitHub 链接 + 下载主 CTA（primary 按钮）**。当前项用 `--ds-primary` 下划线或文字色。tab：未选 `--ds-fg-muted`，选中 `--ds-fg` + 下方 2px `--ds-primary`。≤640px 顶栏导航收起（汉堡），仅留品牌 + 主题/下载控件。

### 面包屑 Breadcrumb（文档导航）
水平排列：链接项 `--ds-fg-muted`（hover → `--ds-primary`），分隔符 `/` 用 `--ds-fg-subtle` + `aria-hidden`，当前页用 `--ds-fg` + medium + `aria-current="page"`（不可点）。`text-sm` font-sans，用于文档/PRD「首页 / 知识库 / PRD / 章节」层级定位。

### 下拉菜单 Dropdown
触发按钮 `aria-haspopup` + `aria-expanded`；菜单浮层走纯白抬起（`--ds-bg-elevated`）+ `1px --ds-border` + `radius-md` + `--ds-shadow-lg`，渐显（opacity + translateY，`dur-fast`）。菜单项 `mitem`：hover/active → `--ds-bg-subtle`；单选项 `role="menuitemradio"` 选中态尾部追加对勾图标（内联 SVG，`--ds-primary` 填充，经 mask 蒙版上色）；分组标签 `mlabel`（`text-xs` subtle 大写），分隔 `msep`（`1px --ds-border`）。focus 走 `--ds-focus-ring`。点击外部/Esc 关闭。

### 工具提示 Tooltip
`position:relative` 容器包裹触发元素 + `.tip` 浮层；提示用**反相**（底 `--ds-fg`、字 `--ds-bg`）小卡 `text-xs` + 下指箭头，默认 `opacity:0 + pointer-events:none`，`:hover` / `:focus-within` 渐显（`dur-fast`）。`role="tooltip"`，键盘聚焦也能触发。

### 分页 Pagination
页码项 `page-item`：纯白底 + `1px --ds-border` + `radius-sm`，最小 36×36px 触控；hover → `--ds-bg-subtle` + 边 strong；**当前页** `aria-current="page"` 填充 `--ds-primary` + `--ds-primary-fg`；省略号 `.gap`（无边框、subtle）；上一页/下一页禁用态降透明 `.45` + `pointer-events:none` + `aria-disabled`。focus 走 `--ds-focus-ring`。

### Toast 通知
轻浮层卡：纯白抬起 + **语义色着色的 1px 全描边**（`color-mix` 语义色掺入 `--ds-border`，不用侧边色条）+ `--ds-shadow-md`，最大宽 ~380px。结构：**前置语义 SVG 图标**（`ti`，按语义上色）+ 标题/说明（`ttitle` sans medium / `tdesc` text-xs muted）+ 关闭按钮（`tclose`，hover → `--ds-fg`）。四语义 success/warning/danger/info 改描边与图标色。容器 `role="status"` + `aria-live="polite"`。

### 步进器 / 步骤条 Stepper（安装 / 上手步骤）
有序步骤 `<ol>`：每步卡片（`1px --ds-border` + `radius-md` + 纯白底）含序号徽 `num`（圆，mono）+ 标题/说明。三态——**已完成 `.done`**：边 `--ds-primary`、序号徽填充 primary + 内联对勾 SVG；**当前 `.current`**：边 primary + `--ds-bg-subtle` 底 + `--ds-focus-ring`，序号 primary 文字 + `aria-current="step"`；**待办**：中性。步间 `→` 箭头（subtle）。≤640px 竖排、箭头隐藏。用于安装 / 上手引导。

### 模态框 Modal
遮罩 `modal-overlay`：`position:fixed inset:0` + `color-mix(--ds-fg 45%, transparent)` 半透明蒙层，`place-items:center`，默认 `opacity:0 + pointer-events:none`，`.open` 渐显。对话框 `modal`：纯白抬起 + `radius-lg` + `--ds-shadow-lg`，最大宽 ~460px，进场 translateY + scale（`dur-base`）。三段——**头**（标题 sans medium + 关闭 `mclose`）/**体**（`text-sm` muted 正文）/**脚**（`--ds-bg-subtle` 底 + 顶边线，右对齐 secondary 取消 + primary 确认）。`role="dialog"` + `aria-modal` + `aria-labelledby`，点遮罩 / 关闭 / Esc 关闭。

---

## 9b. 全家桶专属组件（本项目重点）

哈哈是「免费开源软件矩阵」，给出针对软件全家桶的组件契约：

### 软件产品卡（product card）
- 容器：卡片（radius md，纯白底，边 1px，`shadow-sm`，hover 升 `shadow-md` + 边 strong）。
- 结构：**应用图标**（48–56px 圆角方 radius md/lg）+ **名称**（sans/serif medium，`text-lg`）+ **一句话**（`text-sm` muted，1–2 行）+ **平台徽章**（macOS / Windows / Web / Linux，中性 chip + mono 文本）+ **操作行**（primary「下载」按钮 + secondary「GitHub」按钮并列）。
- 角标可选：右上「免费开源」success 药丸。

### 产品矩阵网格（全家桶 gallery）
- 响应式网格：移动 1 列 / 平板 2 列 / 桌面 3–4 列，gap `space-6`。
- 顶部可加分类 tab（如「图像 / 媒体 / 文档 / 效率 / 隐私」）切换筛选。
- 卡片等高，图标对齐，留白充足——传达「一批小而美工具」的清爽感。

### 对标对比表（comparison table）
- 满宽表格，首列为特性/维度，其余列为「哈哈 vs 对标软件（如 Keka / 数码荔枝某款）」。
- 表头 sans medium + `--ds-bg-subtle` 底；行线 `1px --ds-border`；「哈哈」列可加 `--ds-bg-subtle` 高亮 + 列头 primary 文字。
- 单元格用对勾图标（内联 SVG，success 色，附 `sr-only` 文本「支持」）/ 叉图标（fg-subtle，附「不支持」）/ 文本（mono 数值）。中性、诚实、不夸大。

### 文档/PRD 排版（TOC + 正文）
- 左侧或顶部 **目录 TOC**：sticky，当前章节 primary 文字 + 左 2px primary 条；其余 fg-muted。
- 正文容器 ~720px：h1/h2 可 serif 点缀，h3 + 段落 sans；段间 24px、行高 1.8。
- 行内代码 mono + `--ds-bg-sunken` 底；代码块 `--ds-bg-sunken` + radius md + 横向滚动；链接走 `--ds-accent` 松石青。
- 信息条用四语义 alert（如「I3 安全需求」「待决策」）。

### 功能特性列表（feature list）
- 每项：对勾图标（内联 SVG，success/primary 色）+ 标题（sans medium）+ 说明（sans muted）。
- 或卡片化「特性网格」：小图标 + 标题 + 一句话，2–3 列，留白足。

### 下载 / 赞助 CTA
- 下载：primary 大按钮（开源绿）+ 平台下拉/并列；旁附 GitHub secondary 按钮。
- 赞助/爱发电：accent（松石青）或 primary 描边按钮 +「赞助·推广」中性标注（不伪装成主下载，对接营收定论）。
- CTA 区可用 `--ds-bg-subtle` 块底 + 信任徽章组收尾。

### 信任徽章组（trust badges · 哈哈特有）
- `免费` / `开源` / `无广告` / `无需登录` / `隐私本地处理`——success/info 浅底药丸 chip，首屏与 CTA 区必现。
- 可配「0 bytes uploaded / 本地处理」状态条（success 色），传达隐私可信。

---

## 9c. Showcase v2 · preview 富化区块（本次升级）

`preview.html` 已从「色板 + 组件清单」升级为**有图、有布局、信息饱满**的作品级展示页。新增/改写以下区块，全部沿用 `--ds-*` 契约、亮暗双主题、AA 对比、内联 SVG（零 emoji），除 `fonts.css` 与 `_assets/**` 外无任何外链；图片一律 `loading="lazy"` + 有意义 alt。

### 有图 Hero（首屏分栏，消灭留白）
- 左文案（eyebrow + serif 大标题 + 副标题 + 双 CTA + 信任徽章组 + 4 项指标 `hero-stats`，数字 `tabular-nums`）+ 右大图（`../../_assets/gen/editorial-hero.jpg`，4:5 框 + 渐变 scrim + 角标 overlay + 浮动「0 字节上传」卡片）。
- 处理走 editorial/企业气质：radius-lg 规整框、1px 描边、`shadow-lg` 克制。

### 图片用法 Image Usage
- **宽高比框**：16:9 / 4:3 / 1:1 / 3:4，统一 `aspect-ratio` + `object-fit:cover` + radius-lg，左上 mono 比例标签。
- **媒体卡 Media Card**：图在上（16:10）+ 角标 + 元信息（mono）+ 标题/正文 + 操作行，3 张成网格，hover 图片轻微 `scale`。
- **图片网格 / 画廊**：等高网格 + 不规则跨度（`span-2col` / `span-2row`），≥7 图，底部渐变 caption。
- **图文混排 Featurette**：大图（4:3）+ 文字段落并排，含正反两向（`.rev`）。
- **图上叠字 Overlay**：21:9 横幅 + 单向渐变 scrim，白字保证 AA。
- **头像用法**：尺寸阶 24/32/40/48、堆叠组 `avatar-stack`（+N more）、用户行（头像 + 名 + mono 签名）。
- **背景大图区**：full-bleed 背景图 + 双向遮罩 + 居中内容 CTA。

### 图标用法 Icon Usage
- **图标集**：16 枚统一内联 SVG（`stroke=currentColor`、viewBox 0 0 24 24、线宽 ~1.7）排成 6 列网格，带 mono 名称。
- **尺寸阶**：16 / 20 / 24 / 32，基线对齐。
- **线性 vs 实心 · 单色 vs 双色** 四格对比。
- **在场景里**：图标按钮（aria-label）、按钮内前/后置图标、输入框前置搜索图标（`input-affix`）、列表前导图标、语义状态图标、带计数的徽标图标（`icon-badge`）。

### 桌面端多布局 Desktop Layouts（×2，含浏览器 chrome）
- **A · 开源全家桶官网首页**：mini-nav + mini-hero（带图）+ **产品矩阵网格**（3 列产品卡）+ 下载 CTA。
- **B · 文档页**：左 **TOC**（分组 + 当前项 primary 高亮）+ 正文（面包屑 + 标题 + 段落 + 代码块 + info alert）。
- 每个布局外裹 `.browser` chrome（红黄绿点 + 圆角 URL 栏 + 锁图标）。

### 移动端多布局 Mobile Layouts（×3，~375px 手机框）
- **App 首页**：顶栏 + 软件产品卡流 + 下载 CTA + 信任徽章。
- **详情 / 个人页**：大图 header（scrim + caption）+ 指标行 + 描述 + 平台 + 下载/GitHub。
- **收件箱 / 列表**：带头像/缩略图的列表行 + 底部标签栏（`ph-tabbar`，图标 tab）。

> 同时修正：Toast 文案原误述「左侧 3px 语义色条」，改为「前置语义 SVG 图标 + 语义色 1px 全描边（无侧边色条）」，与实际实现及 POLISH 红线一致。

---

## 10. 可访问性

- **对比度**：正文 `--ds-fg` 对底 亮 13.7:1 / 暗 13.5:1；`--ds-fg-muted` ≥7.2:1；`--ds-fg-subtle` ≥4.9:1（可作正文）。primary 上文字 ≥5.3:1。全部满足 AA，正文接近 AAA。
- **焦点**：所有可交互元素用 `--ds-focus-ring`（底环 + 开源绿环）双层 box-shadow，键盘可见。不要 `outline:none` 而不补焦点样式。
- **触控目标**：交互元素 ≥44×44px（小按钮/图标按钮加 padding/热区补足）。
- **可减弱动效**：尊重 `prefers-reduced-motion`（见 §8）。
- **语言/排版**：正文 `text-wrap:pretty`、标题 `balance`；中文段落避免两端对齐造成的字间隙。
- **颜色不单独承载信息**：对比表的对勾/叉图标都配 `sr-only` 文本、状态条配图标，不只靠绿/红区分。

---

## 11. Do / Don't

**Do**
- sans 做主力（产品 UI/文档/表格），serif 只在大标题/品牌点缀——这是本定制的命。
- 底用干净冷白 + 纯白卡片，不要暖纸；保持充足留白与清新感。
- 绿管操作/下载、青管链接/平台，分工克制；一屏别堆太多强调。
- 产品卡可用极轻阴影 + hover 微升，给「可点」产品感。
- 信任徽章（免费/开源/无广告/隐私）首屏与 CTA 必现，诚实标注「赞助·推广」。

**Don't**
- 别回退成暖纸 + 衬线正文（那是 editorial 风的脸，会撞）。
- 别让正文/文档用衬线主力——产品/文档扫读用无衬线。
- 别堆重阴影做层级——仍以留白/1px 分隔线为主。
- 别让 success 绿和品牌 primary 绿撞色用在相邻处。
- 别用 emoji 当功能图标，一律内联 SVG；颜色一律走变量，不硬编码。
- 别把「赞助/网盘推广」伪装成主下载——对接营收定论，诚实克制。

---

## 12. 如何接入

**1. 引入 tokens.css**（同时拿到亮/暗变量）
```html
<link rel="stylesheet" href="./projects/haha-soft-research/tokens.css">
```
```js
// 或在打包入口
import './projects/haha-soft-research/tokens.css'
```

**2. 用变量**（永远走 `var(--ds-*)`，不硬编码）
```css
.product-card {
  background: var(--ds-bg-elevated);
  border: 1px solid var(--ds-border);
  border-radius: var(--ds-radius-md);
  box-shadow: var(--ds-shadow-sm);
  font-family: var(--ds-font-sans);
}
.btn-download {
  background: var(--ds-primary); color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  transition: background var(--ds-dur-base) var(--ds-ease);
}
.doc h1 { font-family: var(--ds-font-serif); }
.doc p  { font-family: var(--ds-font-sans); line-height: var(--ds-leading-relaxed); max-width: 720px; }
a { color: var(--ds-accent); }
```

**3. 切换暗色（夜间工具模式）**
```js
document.documentElement.dataset.theme = 'dark'; // 或 .classList.add('dark')
```

**4. Tailwind 项目**——引 preset，直接用语义类（`bg-bg`、`text-fg`、`font-sans`、`max-w-reading`、`max-w-shell`、`rounded-md`、`shadow-sm` 等）
```js
// tailwind.config.js
module.exports = { presets: [require('./projects/haha-soft-research/tailwind.preset.js')] }
```
```jsx
<section className="max-w-shell mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <article className="bg-bg-elevated border border-border rounded-md shadow-sm p-6 font-sans">
    <h3 className="text-lg font-medium text-fg">哈哈图压</h3>
    <p className="text-sm text-fg-muted">本地图片压缩，不上传、无水印。</p>
    <button className="bg-primary text-primary-fg rounded-sm h-10 px-4">下载</button>
  </article>
</section>
```
