# Pixel / 8-bit 设计系统

> 8-bit 复古游戏、硬边、CRT 霓虹、街机感。给网页小游戏、像素工具、复古品牌用。一眼像红白机开机画面。

像素风把界面当成游戏机屏幕来对待：**无圆角、粗黑描边、硬实心偏移阴影、跳帧动效、等宽像素字**。它继承 Geist 的语义分层与比例尺骨架，但把所有"柔软"的东西全部砸碎——模糊阴影换成实心方块投影，平滑缓动换成 `steps()` 跳帧，圆角归零，中性灰换成旧屏米黄与饱和像素色。

---

## 1. 一句话气质

像红白机/街机的 UI：硬边方块、黑色像素描边、按键式硬阴影、CRT 霓虹配色。复古、硬核、好玩，但仍是一套讲规矩的设计系统。

## 2. 设计哲学 / 性格

继承 Geist 的**语义分层 + 比例尺 + 状态色成对 + 可见焦点环**骨架，气质上做五条改造：

1. **硬边至上**：圆角几乎为 0（sm/md/full 都是 0，lg 最多 2px）。所有边都是 2–3px 实线黑描边，像素方块感。
2. **硬实心偏移阴影**：阴影绝不模糊，一律 `Npx Npx 0 0 #1a1a2e` 的实心方块投影，营造"贴纸/按键"立体；按下时位移并吃掉阴影。
3. **跳帧动效**：过渡用 `steps(4)` 而非平滑曲线，模拟低帧率精灵动画；hover 偏移/闪烁，但尊重 `prefers-reduced-motion`。
4. **像素字体优先**：等宽/像素字族（`VT323` / `Press Start 2P` 回退，正文也偏 monospace），仅声明回退，不外链字体。
5. **饱和而非中性**：背景是旧屏米黄（亮）/ 深空蓝黑（暗），状态色用饱和像素色，强调街机霓虹。绝不照抄 Geist 的克制中性灰。

## 3. 何时用 / 何时别用

**适合**
- 网页小游戏、像素工具、游戏 launcher、游戏化积分/成就系统。
- 复古 / 街机 / 赛博朋克品牌站、活动页、彩蛋页。
- 想要鲜明个性、玩味十足的开发者工具或社区站。

**别用**
- 长文阅读、密集数据后台、金融/医疗等需要冷静专业的产品（像素字长段落易疲劳）。
- 需要极高信息密度、强调"隐形界面"的企业级 B 端（用 enterprise 风）。
- 对无障碍要求极严且用户群含大量低视力用户的政务/公共服务（像素字小字号可读性弱）。

## 4. 颜色

强调色只用于主操作 / 链接 / 当前选择 / 状态；底色承载界面。所有取值满足 WCAG AA（正文 4.5:1，大字/UI 3:1）。

### 亮色（旧屏米黄 + 近黑墨蓝）

| Token | 值 | 用途 |
|---|---|---|
| `--ds-bg` | `#f4f0e1` | 主背景，旧 CRT 屏米黄 |
| `--ds-bg-subtle` | `#ebe6d3` | 次背景 / 分组底 |
| `--ds-bg-elevated` | `#fffdf5` | 抬起表面（卡片/弹层），近白 |
| `--ds-bg-sunken` | `#e2dcc6` | 凹陷（输入槽/代码块） |
| `--ds-fg` | `#1a1a2e` | 主文字，近黑墨蓝 |
| `--ds-fg-muted` | `#3e3e58` | 次要文字（≈7:1） |
| `--ds-fg-subtle` | `#5b5b73` | 弱/占位（≈4.8:1） |
| `--ds-fg-on-accent` | `#1a1a2e` | 落在亮色强调上的近黑文字 |
| `--ds-border` | `#1a1a2e` | 常规像素描边（默认即粗黑） |
| `--ds-border-strong` | `#000000` | 强描边 / 分隔，纯黑 |
| `--ds-primary` | `#3ab44a` | 主操作，经典像素绿 |
| `--ds-primary-hover` | `#2f9c3e` | hover |
| `--ds-primary-active` | `#237a30` | active / pressed |
| `--ds-primary-fg` | `#1a1a2e` | 绿上近黑字（≈6.3:1 AA；像素键帽常见深字） |
| `--ds-accent` | `#c2410c` | 链接 / 次强调，深像素橙（保文本 AA） |
| `--ds-accent-fg` | `#ffffff` | accent 上文字 |

> 设计意图用色为像素橙 `#f59e0b`，但作为**正文链接**它在米黄上不达 4.5:1。因此链接文字用深一档的 `--ds-accent: #c2410c`（≈5.6:1），而 `#f59e0b` 保留为**焦点环 `--ds-focus`** 与装饰用色（大色块/像素方块），两全。

### 暗色（深空蓝黑 CRT 底 + 霓虹绿）

| Token | 值 | 用途 |
|---|---|---|
| `--ds-bg` | `#16161e` | 主背景，深空蓝黑 CRT 底 |
| `--ds-bg-subtle` | `#1d1d28` | 次背景 |
| `--ds-bg-elevated` | `#22222f` | 抬起表面 |
| `--ds-bg-sunken` | `#101017` | 凹陷 |
| `--ds-fg` | `#e6e6f0` | 主文字，CRT 冷白 |
| `--ds-fg-muted` | `#b6b6cc` | 次要文字（≈8:1） |
| `--ds-fg-subtle` | `#8d8da6` | 弱/占位（≈4.9:1） |
| `--ds-fg-on-accent` | `#0a0a12` | 霓虹色上的近黑 |
| `--ds-border` | `#3a3a52` | 常规描边 |
| `--ds-border-strong` | `#5a5a7a` | 强描边 |
| `--ds-primary` | `#4ce86a` | 主操作，霓虹绿 |
| `--ds-primary-hover` | `#6cf088` | hover（更亮） |
| `--ds-primary-active` | `#34c452` | active |
| `--ds-primary-fg` | `#0a0a12` | 霓虹绿上近黑字 |
| `--ds-accent` | `#ff5cf0` | 霓虹品红，强调 |
| `--ds-accent-fg` | `#0a0a12` | accent 上文字 |

### 语义状态（主 / -bg 浅底 / -fg 底上文字）

| 语义 | 亮 主/底/字 | 暗 主/底/字 |
|---|---|---|
| success | `#237a30` / `#d9f5dd` / `#0d3314` | `#4ce86a` / `#0c2914` / `#c8ffd6` |
| warning | `#8a6b00` / `#fdf3c9` / `#3d2f00` | `#f5c518` / `#2e2400` / `#fff3c4` |
| danger | `#c1272d` / `#fcdcdd` / `#470a0c` | `#ff6b73` / `#330c10` / `#ffd9dc` |
| info | `#1f5fb0` / `#d9e9fb` / `#0a2547` | `#5cc8ff` / `#06223a` / `#d3f0ff` |

> 像素游戏机经典状态色（绿/黄/红/蓝）在亮色下为保证文本 AA 各取深一档；浅底+深字组合做 alert/badge。

### 强调色梯度（primary）
`hover` 比 default 深一档（亮）/ 亮一档（暗），`active` 再深一档——配合"按下位移消阴影"形成实体按键反馈。

## 5. 字体

- **字族**：像素/等宽优先。`--ds-font-mono` = `"Press Start 2P", "VT323", ui-monospace, …`（**标题 / 显示位 / 数据**用真像素字），`--ds-font-sans` = `"VT323", "Press Start 2P", ui-monospace, …`（**正文 / 数据正文**用更易读的像素终端体），`--ds-font-serif` 同以 `"VT323"` 打头。回退链未装像素字时优雅退到系统等宽（`ui-monospace`/`Menlo`/`Consolas`），气质不崩。
- **真字体嵌入**：preview.html `<head>` 引入本地 `../../_fonts/fonts.css`（OFL 开源 woff2，**唯一引用，不引任何外网**），使 Press Start 2P / VT323 真正渲染；字体名与 token 声明完全一致，无需改 token。
- **大字宽适配（重要）**：Press Start 2P 字宽极大，真渲染后易撑破组件。preview 的处理：① 标题统一 `letter-spacing:0`（像素字内置字隙，不再加 tracking）、`overflow-wrap:anywhere` 允许折行；② 大显示位（2xl/3xl）用 `.display` 类按 0.62–0.68 缩放；③ 按钮 / 页签 / 标签 / 表头等 mono 元素字号压到 8–12px、`line-height:1–1.4`、必要处 `white-space:nowrap` 并加大内边距，确保不溢出、不裁字。VT323 正文字宽正常，不受影响。
- **比例尺**：xs 12 / sm 13 / base 15 / md 17 / lg 22 / xl 28 / 2xl 38 / 3xl 56。比 Geist 略大——像素字笔画粗，需要更大字号才清晰可读。
- **字重**：像素字本无多档字重，统一 `normal` 与 `medium` 都用 400，仅 `bold` 用 700（用于强调标题）。
- **字距**：`tracking-tight: 0`、`tracking-normal: 0.02em`——像素字略加字距可减轻挤压、增强街机标牌感。
- **行高**：标题 1.15，正文 1.5，宽松 1.7。
- **中文适配**：像素字族不含中文字形，中文将回退到系统等宽渲染（圆体/黑体等宽 fallback）。建议中文界面**适度加大字号、加大行高（≥1.6）**，避免像素字与中文混排时的密度不均；纯中文长文不建议用 mono 标题。

## 6. 间距与布局

- **比例尺（4px 基）**：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96（`--ds-space-1` … `-12`）。沿用 Geist 的 4px 网格——像素艺术本就建立在网格上，天然契合。
- **节奏**：组内 8px、组间 16px、区块间 32–40px。
- **容器宽**：内容主体建议 max-width 960–1100px，居中。
- **栅格**：12 列，列间距 16–24px；像素卡片建议对齐到 4px 网格，使硬阴影偏移（2/4/6px）落在整像素上。
- **建议**：对像素图标/装饰块用 `image-rendering: pixelated`，放大不糊。

### 响应式 / 断点

像素栅格在窄屏下务必**收一列、堆叠**，避免 Press Start 2P 这类大字宽字体横向溢出。

- **断点**：`@media (max-width: 640px)` 为主收口断点（手机）。preview 内置：`.cards` 多列 → 单列；表单 `.grid` → 单列；`.swatches` 最小列宽收到 120px；顶栏换行并隐藏 tagline；容器内边距收窄一档。
- **流式列**：组件库统一用 `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`，天然随容器收放；640px 断点再硬切单列兜底。
- **移动布局（约 375px 手机框）**：顶栏（标题 + 汉堡键）+ 卡片 + 通栏按钮 + 列表 + 底部 tabbar，全部保持硬边 / 硬实心偏移阴影 / 直角；**触控目标 ≥44px**（tabbar 按钮、汉堡键、列表项）。窄屏断点下手机框 `width:100%` 自适应满宽。
- **大字宽自适应**：Press Start 2P 字宽极大——窄屏下标题用 `overflow-wrap: anywhere` 允许折行，按钮/标签 `white-space: nowrap` 但字号已压到 9–11px，列间收一列后均不溢出。
- **横向滚动**：仅表格用 `overflow-x:auto` 容器允许横滚，其余一律收窄不横滚。

## 7. 圆角 / 阴影 / 描边

- **圆角**：`sm 0` / `md 0` / `lg 2px` / `full 0`。像素世界没有曲线——除 `lg` 给极轻的 2px 阶梯（用于大表面软化锯齿），其余一律直角。
- **阴影（硬实心偏移，绝不模糊）**：
  - `--ds-shadow-sm: 2px 2px 0 0 #1a1a2e`
  - `--ds-shadow-md: 4px 4px 0 0 #1a1a2e`
  - `--ds-shadow-lg: 6px 6px 0 0 #1a1a2e`
  - 暗色改用纯黑 `#000000` 底，在深底上仍立体。
  - 气质：实心方块投影 = "贴纸/按键"。按钮 `:active` 时 `translate(2px,2px)` 并把阴影缩到 0，做出实体按下反馈。
- **描边**：粗硬边 2–3px 实线，用 `--ds-border`（默认即近黑）/ `--ds-border-strong`（纯黑）。按钮、卡片、徽章、输入框都带明显黑描边——这是像素风的灵魂。

## 8. 动效

- **曲线**：`--ds-ease: steps(4, end)`——跳帧，模拟低帧率精灵动画，不平滑。
- **时长**：`fast 80ms` / `base 140ms` / `slow 240ms`（偏短促，像素动画干脆）。
- **典型过渡**：
  - 按钮 hover：`transform: translate(-1px,-1px)`（轻微抬起）+ 阴影加深，用 `steps`。
  - 按钮 active：`translate(2px,2px)` 吃掉阴影（按下）。
  - 选中/出现：闪烁 1–2 帧（`steps` 控制的不透明度跳变）。
- **`prefers-reduced-motion`**：必须尊重。在该模式下取消所有位移/闪烁/跳帧，仅保留颜色变化与即时状态切换（`transition: none` 或仅 color）。preview 与组件均内置该媒体查询。

## 9. 组件规格

所有组件颜色一律走 `var(--ds-*)`，绝不硬编码。统一特征：**2–3px 黑描边 + 硬实心偏移阴影 + 直角**。

### 按钮（红白机按键式）
| 变体 | 底 | 文字 | 描边 | 阴影 | 高 | 内边距 |
|---|---|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | 2px `--ds-border-strong` | `shadow-sm`(默认) | 40px | 0 16px |
| secondary | `--ds-bg-elevated` | `--ds-fg` | 2px `--ds-border` | `shadow-sm` | 40px | 0 16px |
| tertiary | 透明 | `--ds-fg` | 2px transparent（hover 显边） | 无 | 40px | 0 16px |
| danger | `--ds-danger` | `#ffffff` | 2px `--ds-border-strong` | `shadow-sm` | 40px | 0 16px |

- **状态**：hover → 底色用 `-hover`、`translate(-1px,-1px)`、阴影增至 `shadow-md`；active → `-active`、`translate(2px,2px)`、阴影归 0；disabled → 50% 透明、去阴影、`cursor: not-allowed`；focus-visible → `--ds-focus-ring`。
- **尺寸**：小 32px / 中 40px / 大 48px（触控目标见可访问性）。

### 输入框（方正）
- 底 `--ds-bg-sunken`，文字 `--ds-fg`，占位 `--ds-fg-subtle`，2px `--ds-border` 实线，直角，高 40px，内边距 0 12px。
- focus：`--ds-focus-ring` + 边框变 `--ds-border-strong`。
- textarea / select 同款方正描边；select 自定义像素三角箭头。

### 卡片
- 底 `--ds-bg-elevated`，2px `--ds-border` 描边，直角（`radius-lg` 可给 2px），`shadow-md` 硬投影，内边距 `space-6`(24px)。标题用 `font-mono`，正文 `font-sans`。

### 徽章 / 标签（方块）
- 直角方块，2px 描边，内边距 2px 8px，小字号。语义色：底用 `*-bg`，文字用 `*-fg`，描边用对应主色或 `--ds-border`。

### 提示条 alert
- success / warning / danger / info 四种：底 `*-bg`，文字 `*-fg`，2px 硬全描边，直角。**前置语义像素 SVG 图标**（对勾/感叹/叉/i，方块化路径、`currentColor` 取对应主色），不用侧边粗色条。

### 导航
- 顶栏：底 `--ds-bg-elevated`，底部 3px `--ds-border-strong` 实线分隔，硬下投影可选。
- tab：未选 `--ds-fg-muted` 无边；选中 `--ds-fg` + 底部 3px `--ds-primary` 实线指示，或整块反白带描边。触控目标 ≥44px。

### 面包屑 Breadcrumb
- 层级链接 + `>` 分隔符；mono 小字（9px）大写。链接 hover 显 2px `--ds-border` 描边 + `shadow-sm` + 抬起底。
- **当前层** `aria-current="page"`：凹陷底 `--ds-bg-sunken` + 2px `--ds-border-strong` 方块，不可点。focus-visible 走 `--ds-focus-ring`。

### 下拉菜单 Dropdown
- 浮层：底 `--ds-bg-elevated`，2px `--ds-border-strong` 描边，`shadow-md` 硬投影；项间 2px `--ds-border` 实线分隔，可插 `--ds-border-strong` divider。
- 项 **hover**：反白主色（底 `--ds-primary`、字 `--ds-primary-fg`）；**当前项** `aria-current` 显凹陷底 + 前置像素对勾（内联 SVG，方块化路径、`currentColor`）；右侧 mono 快捷键提示。focus-visible 走焦点环。

### 工具提示 Tooltip
- 反色气泡：底 `--ds-fg`、字 `--ds-bg`，2px `--ds-border-strong` 描边 + `shadow-sm` + 像素三角箭头（用旋转方块伪元素，无圆）。
- mono 小字（8px）大写；**hover / focus-within** 用 `steps` 跳显（opacity 0→1，无模糊渐变），尊重 `prefers-reduced-motion`。

### 分页 Pagination
- 页码按键：方块 38×38px，2px `--ds-border-strong` + `shadow-sm`；hover `translate(-1px,-1px)` 加深阴影，active `translate(2px,2px)` 消阴影（同按钮按键反馈）。
- **当前页** `aria-current="page"`：主色实底 + 按下态（位移消阴影）。`disabled` 上一/下一页 50% 透明去阴影。`…` 省略号用 `--ds-fg-subtle`。

### 步进器 Stepper
- 一体框：2px `--ds-border-strong` + `shadow-sm`；两端 ± 按键 40×40px，hover/active 翻主色（底 `--ds-primary` / `-active`，字 `--ds-primary-fg`），中段以 2px 强描边分隔。
- 数值段：凹陷底 `--ds-bg-sunken`，mono `tabular-nums`，`aria-live="polite"`。整体直角硬阴影。

### Toast 通知
- 浮条：底 `--ds-bg-elevated`，2px `--ds-border-strong` 硬全描边 + `shadow-md`；**前置语义像素 SVG 图标**（对勾/i/叉，`currentColor` 取对应语义主色），不用侧边粗色条。
- mono 大写标题（9px）+ `--ds-fg-muted` 正文 + 右侧像素关闭键。`role="status"`（普通）/`role="alert"`（危险）。多条 `toast-stack` 纵向堆叠。

### 模态框 Modal
- 对话框：3px `--ds-border-strong` 强描边 + 最重 `shadow-lg` 硬投影浮起；顶部主色标题条（底 `--ds-primary`、字 `--ds-primary-fg`、底部 3px 强描边）+ 像素关闭键（hover/active 按键位移）。
- 遮罩示意用 45° 斜纹纯 CSS 底（不外链）；`role="dialog" aria-modal="true" aria-labelledby`，底部操作区右对齐（取消 / 危险确认）。

### 移动布局 Mobile
- 约 375px 手机框：3px 强描边 + `shadow-lg`；含状态条 + 顶栏（mono 标题 + 汉堡键）+ 卡片 + 通栏按钮 + 列表（2px 行分隔）+ 底部 tabbar。
- tabbar 当前项主色实底；所有触控目标 ≥44px。窄屏断点（≤640px）手机框 `width:100%` 自适应。全部硬边 / 硬实心偏移阴影 / 直角，沿用 `var(--ds-*)`。

## 10. 可访问性

- **对比度**：所有正文文本满足 AA 4.5:1，大字/UI ≥3:1。`fg-muted`/`fg-subtle` 均经核对（亮 ≈7:1 / ≈4.8:1，暗 ≈8:1 / ≈4.9:1）。链接用 `--ds-accent`(#c2410c) 保 4.5:1，橙 `#f59e0b` 仅作焦点环/装饰。
- **焦点**：键盘可达，统一 `--ds-focus-ring`（双层硬偏移方环，无模糊，与像素气质一致），`:focus-visible` 触发，绝不 `outline:none` 而不补焦点环。
- **触控目标**：交互元素点击区 ≥44×44px（视觉可 32/40px，用内边距/伪元素补足热区）。
- **可减弱动效**：`@media (prefers-reduced-motion: reduce)` 关闭所有 `steps` 跳帧、位移与闪烁，仅保留即时颜色/状态切换。
- **像素字可读性**：像素字小字号易疲劳——正文 base 提到 15px，标题用更大字号；长段落避免纯像素字，可让正文回退到系统等宽。

## 11. Do / Don't

**Do**
- 所有边用 2–3px 实线黑描边，圆角归零（lg 最多 2px）。
- 阴影一律硬实心偏移（`Npx Npx 0 0`），按下时位移并消阴影。
- 动效用 `steps()` 跳帧，时长短促；并尊重 `prefers-reduced-motion`。
- 字体走像素/等宽回退链，未装像素字也优雅退到系统等宽。
- 正文字号给足（≥15px），保证像素字可读。

**Don't**
- 不用模糊阴影（`blur > 0`）——一糊就不像素了。
- 不用大圆角 / 药丸按钮 / 圆头像。
- 不用平滑 `ease`/`cubic-bezier` 缓动当主过渡。
- 不用细描边（<2px）或无描边的"扁平卡片"。
- 不把 `#f59e0b` 橙当正文链接色（对比不足）——它是焦点/装饰色。
- 不硬编码颜色到组件，一律走 `var(--ds-*)`。

## 12. 如何接入

1. **引入变量 + 字体**（任意项目）：
   ```html
   <link rel="stylesheet" href="../../_fonts/fonts.css" /> <!-- 真像素字，本地 woff2 -->
   <link rel="stylesheet" href="./tokens.css" />
   ```
   亮色为默认；切暗色给 `<html data-theme="dark">`（或加 `.dark` 类，二者皆兼容）。引入 fonts.css 后 Press Start 2P 字宽很大，标题/按钮等用 mono 的位置需按 §5「大字宽适配」收字号、放行高、加内边距。

2. **直接用变量**：
   ```css
   .btn {
     background: var(--ds-primary);
     color: var(--ds-primary-fg);
     border: 2px solid var(--ds-border-strong);
     border-radius: var(--ds-radius-sm);
     box-shadow: var(--ds-shadow-sm);
     font-family: var(--ds-font-mono);
     transition: transform var(--ds-dur-fast) var(--ds-ease),
                 box-shadow var(--ds-dur-fast) var(--ds-ease);
   }
   .btn:active { transform: translate(2px,2px); box-shadow: none; }
   ```

3. **Tailwind 项目**：先引 `tokens.css`，再在 `tailwind.config.js`：
   ```js
   module.exports = { presets: [require('./tailwind.preset.js')] };
   ```
   即可用 `bg-primary text-primary-fg border-strong shadow-md rounded-sm font-mono ease-pixel` 等工具类，全部消费 CSS 变量。

4. **机器可读 token**：`tokens.json` 供构建/同步到其他平台（iOS/Android/Figma）。
