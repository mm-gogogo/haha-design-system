# hahamail · 邮件管理后台设计系统

> **基于「B 端风」+ hahamail 定制。** 为「轻量自托管邮件服务器」量身的后台设计系统——收发信、路由规则、可观测指标、认证结果都要一眼可读。沉稳靛蓝点睛、中性冷灰打底、高密度、可观测后台感；暗色完整（运维常用暗色）。

---

## 1. 一句话气质

**像 SMTP 日志一样冷静，像监控大盘一样可扫读。** 中性冷灰承载海量收发记录与路由规则，沉稳的**邮件蓝/靛蓝** `#3d4eea` 只点主操作、链接、选中行与关键状态；小圆角、紧间距、弱阴影靠描边，数字一律等宽。给那些「盯着队列深度和退信率过日子」的自托管运维。

---

## 2. 设计哲学 / 性格

继承「B 端风」的 **密度优先 + 描边分隔 + 成对状态色 + 双层焦点环 + tabular 数字** 骨架，把气质从「通用后台」收向「基建 / 邮件管理」：

1. **密度优先**：控件默认 32px，行距紧、区块收敛。收件箱、路由表、指标卡一屏塞满仍可扫读。
2. **中性承载、靛蓝克制**：界面 95% 是冷灰阶，邮件蓝 `#3d4eea` 只出现在主操作、链接、当前选择、进行中状态上——区别于 hahafree 的玫瑰色，主打**沉稳可信**。
3. **描边分隔 > 阴影分隔**：路由表、指标卡、收件箱列表靠 1px 描边划界，阴影只留给下拉、Popover、模态。
4. **数字即数据**：收发计数、队列深度、邮箱数、时间戳、spam 分数一律 `tabular-nums` 等宽，纵向可比对。
5. **状态双编码**：队列 / 重试 / 退信、SPF / DKIM / DMARC 通过失败，一律「点/图标 + 文字 + 浅底徽章」三重表达，色盲可辨、日志可粘。
6. **Mono 是一等公民**：DNS 记录（SPF/DKIM/DMARC）、邮箱地址、token、Hash、`Authentication-Results` 头全用等宽字体，可一键复制粘贴到 DNS 面板。

**与 B 端风基底的关系**：保留全部 `--ds-*` 变量契约、小圆角（4/6/8px）、紧凑密度、弱阴影、tabular 数字约定；**换肤**——主色由克制蓝 `#165dff` 改为沉稳**靛蓝 `#3d4eea`**，中性灰转**冷灰带蓝调**，并把语义色对到邮件运维场景（成功=投递/认证通过、警告=队列重试、危险=退信/认证失败、信息=进行中）。

---

## 3. 何时用 / 何时别用

**适合**
- hahamail 内嵌 Web UI：一次性收件箱、邮件详情、写信、管理面板。
- 邮件 / 消息基建后台：路由规则、队列监控、域名 & DNS 管理、限流策略。
- 可观测大盘：收发计数、队列深度、邮箱数、退信率（指标卡 + 密集表）。
- 运维 / DevOps 工作台：长时盯屏、暗色优先、日志友好。

**不适合**
- hahamail 的对外营销 / 落地页（太克制、缺情绪 → 用 C 端风格）。
- 内容消费 / 阅读型产品（→ editorial）。
- 儿童 / 娱乐 / 游戏（→ cute / pixel）。
- 需要强视觉冲击的发布会 Hero（→ dark-tech）。

---

## 4. 颜色

界面默认中性冷灰，颜色只承担「操作 / 状态 / 选择」语义。所有色值满足 WCAG AA（正文 ≥4.5:1，大字/图形 ≥3:1）。

### 表面与文字（冷灰带蓝调，机房后台感）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#ffffff` | `#14151c` | 主背景 / 内容区 |
| `--ds-bg-subtle` | `#f4f5f9` | `#1a1b24` | 次背景：表头底、分组底、页面槽 |
| `--ds-bg-elevated` | `#ffffff` | `#20222c` | 抬起表面：指标卡、下拉、弹层 |
| `--ds-bg-sunken` | `#eceef4` | `#101118` | 凹陷：输入槽、DNS 代码块、斑马深行 |
| `--ds-fg` | `#1a1c2b` | `#e7e8ee` | 主文字、表格正文、邮件标题 |
| `--ds-fg-muted` | `#4a4f63` | `#9a9eb0` | 次要文字、表头、发件人、辅助说明 |
| `--ds-fg-subtle` | `#828799` | `#686d7e` | 占位符、禁用、时间戳弱提示 |
| `--ds-fg-on-accent` | `#ffffff` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#e2e4ee` | `#2b2d39` | 常规描边：表格线、卡片边、分隔 |
| `--ds-border-strong` | `#c5c9d8` | `#41434f` | 强描边：输入框、激活分隔、表头底线 |

### 品牌与强调（邮件蓝 / 靛蓝梯度）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#3d4eea` | `#5462ec` | 主按钮、选中行、当前项（暗色压深保白字 AA ≈4.84:1） |
| `--ds-primary-hover` | `#2c39c9` | `#7d8aff` | hover（亮色压深、暗色提亮） |
| `--ds-primary-active` | `#1f2a9e` | `#4150d8` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#ffffff` | 主操作上的文字 |
| `--ds-accent` | `#3d4eea` | `#5462ec` | 链接、次强调（同主色，B 端不另设色相） |
| `--ds-accent-fg` | `#ffffff` | `#ffffff` | accent 上的文字 |

> 靛蓝梯度（亮）：`#ecedfd`(底) → `#8b97f5`(浅) → `#3d4eea`(主) → `#2c39c9`(hover) → `#1f2a9e`(active)。

### 语义状态（主色 + 很淡的底 + 底上文字）——对到邮件运维场景

| 语义 | 主色（亮/暗） | 浅底（亮/暗） | 底上文字（亮/暗） | 邮件场景用途 |
|---|---|---|---|---|
| success | `#15a05a` / `#34c47a` | `#e6f8ee` / `#0c2a1a` | `#0a5e34` / `#a8eec6` | 投递成功、在线、**SPF/DKIM/DMARC 通过**、catch-all 已配 |
| warning | `#c97a00` / `#e3a23a` | `#fdf3e2` / `#2c1f08` | `#7a4900` / `#f8d99a` | **队列重试中**、待处理、DKIM 即将到期、限流接近上限 |
| danger  | `#dc3340` / `#f06472` | `#fdecee` / `#2c1316` | `#9b1420` / `#ffc4ca` | **退信(bounce)**、离线、认证失败、**DMARC p=reject**、删除 |
| info    | `#3d4eea` / `#7886f6` | `#ecedfd` / `#161a3a` | `#2030a8` / `#c4ccfb` | **队列中/进行中**、普通提示、neutral 认证结果 |

> 浅底用于状态徽章 / Tag / Alert；底上文字保证 ≥4.5:1。表格内状态优先用「状态点 + 文字」最省空间。

---

## 5. 字体

**字族**：`"Inter", -apple-system, "PingFang SC", "Microsoft YaHei", …`。Inter 中宫稳、数字清晰，是后台 UI 的事实标准；中文落到 PingFang / 雅黑系统字，免外链。

**真实字体内嵌**：`preview.html` 在 `<head>` 顶部引入共享字体表 `<link rel="stylesheet" href="../../_fonts/fonts.css">`，本地 woff2 提供 **Inter**（400/500/600/700）与 **JetBrains Mono**（400/500）拉丁字形；中文仍走系统 PingFang / 思源回退。`--ds-font-sans` 以 `"Inter"` 打头、`--ds-font-mono` 以 `"JetBrains Mono"` 打头，字体名与 `fonts.css` 声明一致，**无需改 token**。除这一张本地字体表外不引任何外网资源。

**Mono 比一般 B 端更吃重**：hahamail 充斥 DNS 记录、邮箱地址、token、Hash、`Authentication-Results` 头与原始 RFC822。`--ds-font-mono` 选 `"JetBrains Mono"`（0 带斜杠、字形分辨高），用于 DNS 代码块、地址、ID、日志、原文。

**数字必须 `tabular-nums`**：收发计数、队列深度、邮箱数、分页、时间戳、spam 分数全用 `font-variant-numeric: tabular-nums`，纵向对齐可比对。变量 `--ds-numeric: tabular-nums`。

**字号偏小**（base 14px，密度优先）：

| Token | 值 | 用途 |
|---|---|---|
| `--ds-text-xs` | 12px | 时间戳、表内 Tag、附件标记、认证细节 |
| `--ds-text-sm` | 13px | 表格密集态、收件箱预览片段、次要正文 |
| `--ds-text-base` | 14px | **正文基准**、表单、按钮、表格、邮件正文 |
| `--ds-text-md` | 16px | 卡片标题、邮件主题 |
| `--ds-text-lg` | 18px | 区块标题 |
| `--ds-text-xl` | 20px | 页标题 |
| `--ds-text-2xl` | 24px | 主标题 |
| `--ds-text-3xl` | 30px | 指标卡核心大数（收/发/队列深度） |

**字重**：normal 400 / medium 500（表头、按钮、未读主题、强调）/ bold 600（标题、指标大数）。靠字号与颜色建层级，少用粗体。
**字距**：标题 `-0.01em`，正文 0；中文不用负字距。
**行高**：紧凑 1.3（标题/表格/列表）、常规 1.5（正文/邮件）、宽松 1.7（长说明）。

---

## 6. 间距与布局

**4px 基，偏紧凑**。邮件后台密度高，节奏比通用 UI 收一档：

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-space-1` | 4px | 图标与文字间隙、Tag 内边距、状态点与标签 |
| `--ds-space-2` | 8px | 控件内水平内边距、收件箱行上下、表格单元上下 |
| `--ds-space-3` | 12px | 表单项垂直间距、表格单元水平内边距 |
| `--ds-space-4` | 16px | 组内间距、卡片内边距、指标卡 gutter |
| `--ds-space-6` | 24px | 区块内边距、卡片间距 |
| `--ds-space-7` | 32px | 区块间距 |
| `--ds-space-8`–`12` | 40–96px | 大区块 / 页面留白（后台少用） |

**控件高度三档**（密度核心）：
- `--ds-control-sm` **24px**：路由表行内操作、收件箱筛选条、行内编辑
- `--ds-control-md` **32px**：**默认**——按钮、输入、选择
- `--ds-control-lg` **36px**：写信「发送」、路由「保存规则」等主提交

**节奏**：表单项间 12px、组内 8px、组间 16px、区块间 32px。
**容器**：内容区铺满（后台）；写信/路由表单 ≤ 720px；邮件详情两栏（左列表 + 右正文）。
**栅格**：24 列流式（对齐 Ant/Arco 习惯），常用 gutter 16px；指标卡区常用 4 列。
**布局骨架**：左侧导航（收起 48px / 展开 220px：收件箱 / 路由 / 域名 / 队列 / 指标）+ 顶栏 48–56px（Logo / 搜索 / 通知 / 当前邮箱）+ 内容区。

**响应式 / 移动端**（单断点，桌面优先）：

- **断点 `≤640px`**：两栏区（`.grid2`：收件箱 + 认证、写信 + 路由表单、导航演示）**收为一列**；指标卡由 4 列收为 1 列；步骤条转竖排并隐藏连接线；分页页码组换行占满整行。
- **规则表横向滚动**：高密度的**路由规则表**外层包 `.scrollx`（`overflow-x:auto`），窄屏下表格保持最小宽度并**横向滚动**，不挤压列、不破坏 mono 地址对齐。
- **顶栏自适应**：≤640 时顶栏内边距收紧，搜索框 `flex:1` 自适应剩余宽度。
- **移动端骨架**：`preview.html` 含约 **375px 手机框**演示——顶栏（Logo + 搜索/写信图标）+ 收件箱列表（未读点 / mono 发件人 / 主题 / 预览 / 时间）+ 认证徽章条（SPF/DKIM/DMARC + spam）+ 底部 Tab 导航；触控目标 ≥44px，沿用同一套 `--ds-*` 变量、AA 对比与亮暗主题。
- **触控**：移动/触屏控件视觉可保持密度，但点击热区不小于 44px。

---

## 7. 圆角 / 阴影 / 描边

**圆角——小**（B 端不宜过圆）：

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | 4px | 输入、Tag、认证徽章、状态徽章、小按钮 |
| `--ds-radius-md` | 6px | 按钮、指标卡、下拉、输入框、DNS 代码块 |
| `--ds-radius-lg` | 8px | 卡片、弹层、模态、邮件详情卡 |
| `--ds-radius-full` | 9999px | 状态点、未读小圆点、开关、药丸标签、未读计数 badge |

**阴影——很弱**（仅浮层用，平面靠描边）：
- `--ds-shadow-sm`：`0 1px 2px rgba(26,28,43,.05)` — 极轻抬起
- `--ds-shadow-md`：下拉、Popover、Tooltip
- `--ds-shadow-lg`：模态、抽屉

> 指标卡、路由表、收件箱列表**一律用描边**而非阴影分隔——这是本风格的关键气质，避免「卡片满天飞」的浮夸感。

**描边**：常规 `--ds-border` 1px 划线；`--ds-border-strong` 用于输入框边、表头底线、激活分隔。

---

## 8. 动效

**极克制**——运维后台是工作场所，动效服务于「状态变化可感知」，绝不炫技。

- 曲线：`--ds-ease` = `cubic-bezier(.25,.1,.25,1)`（ease-out，干净利落）
- 时长：`--ds-dur-fast` 120ms（hover/focus）、`--ds-dur-base` 160ms（默认过渡）、`--ds-dur-slow` 200ms（下拉/抽屉）
- 典型过渡：按钮/输入色变 120ms；收件箱/路由行 hover 背景 120ms；下拉/Popover 淡入+轻微位移 160ms；切换 Tab 仅底线滑动。
- 新邮件到达可用一次性 160ms 淡入提示；队列深度变化可数字渐变，**不**弹跳、**不**缩放、**不**视差。

**`prefers-reduced-motion`**：所有过渡降为 ~0ms / 仅透明度。

```css
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: .01ms !important; animation-duration: .01ms !important; }
}
```

---

## 9. 组件规格

> 重点：**收件箱列表**、**路由规则表**、**认证结果徽章**、**指标卡**、**DNS 代码块**——hahamail 的主角。其余给关键尺寸/色/态。

> **图标系统**：全站统一**紧凑线性内联 SVG**（`viewBox="0 0 24 24"`、`stroke="currentColor"`、线宽 ~1.6、`stroke-linecap/linejoin:round`），通过 `<symbol>`/`<use>` 精灵复用；颜色继承上下文（认证/状态图标走对应语义色）。**不使用任何彩色/象形 emoji**——收发、路由、域名、队列、指标、附件、认证勾叉、趋势升降全部为单色 SVG，与运维冷静气质一致。

### 按钮（高度三档：sm 24 / md 32 / lg 36；圆角 md 6px；字重 500）

| 类型 | 底色 | 文字 | 边框 | hover | active |
|---|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | 无 | `--ds-primary-hover` | `--ds-primary-active` |
| secondary（线框） | `--ds-bg` | `--ds-fg` | `--ds-border-strong` | 边框→`--ds-primary`、字→`--ds-primary` | 底 `--ds-info-bg` |
| tertiary（文本） | 透明 | `--ds-fg-muted` | 无 | 底 `--ds-bg-subtle` | 底 `--ds-bg-sunken` |
| danger（删规则/删信） | `--ds-danger` | `#fff` | 无 | 压深 | 更深 |
| disabled | `--ds-bg-sunken` | `--ds-fg-subtle` | `--ds-border` | — | `cursor:not-allowed` |

- 内边距：sm `0 8px` / md `0 12px` / lg `0 16px`；图标按钮为正方形（24/32/36）。
- focus：`box-shadow: var(--ds-focus-ring)`；outline:none。

### 输入框 / 表单密度（写信 & 路由规则表单）

- **高度跟控件三档**：默认 32px、紧凑 24px、大 36px；圆角 4–6px；边框 `--ds-border-strong` 1px；内边距 `0 12px`；字号 14px。地址/DNS 类输入用 `--ds-font-mono`。
- 态：默认 `--ds-border-strong`；hover `--ds-fg-subtle`；focus `--ds-primary` + `--ds-focus-ring`；error `--ds-danger` + 下方红字（如「不是合法地址」）；disabled 底 `--ds-bg-sunken`、字 `--ds-fg-subtle`。
- 占位符：`--ds-fg-subtle`。
- **路由规则表单**：`地址/匹配`（mono 输入，如 `*@example.com`）+ `动作` 选择（store / forward / drop / webhook）+ 条件目标（forward→邮箱、webhook→URL，按动作显隐）。表单项垂直 12px。
- checkbox / radio：16px；选中 `--ds-primary`；switch：药丸，开 `--ds-primary`、关 `--ds-border-strong`，高 20px（如「启用规则」「catch-all」）。

### 收件箱列表（**核心组件**）

一次性收件箱 / IMAP INBOX 的主视图，行式高密度：

- **行高**：紧凑，单元上下 8–10px；行底线 `--ds-border` 1px；hover 底 `--ds-bg-subtle`（120ms）；选中/打开行底 `--ds-info-bg`。
- **未读**：行首 `--ds-primary` 实心小圆点（8px，`--ds-radius-full`）+ 主题 `--ds-fg` medium(500)；**已读**无圆点 + 主题 `--ds-fg-muted` normal。
- **结构**：`未读点｜发件人(mono 可选, --ds-fg-muted)｜主题 + 预览片段(--ds-fg-subtle, 13px)｜附件标记｜时间戳(右, tabular-nums, --ds-fg-subtle)`。
- **附件标记**：回形针 SVG 图标 + 件数（紧凑线性内联 SVG，非 emoji），`--ds-fg-muted` 12px。
- **认证 / spam 角标**（可选）：行尾小徽章（见下）或 spam 分数 Tag。
- **空态**：居中说明「收件箱为空」+ 复制地址按钮；加载用骨架行。

### 认证结果徽章 SPF / DKIM / DMARC（**核心组件**）

邮件详情顶部的认证条，三枚徽章并排，每枚 = 圆角 4px 浅底 Tag：

| 结果 | 底 / 文字 | 含义 |
|---|---|---|
| `SPF pass` `DKIM pass` `DMARC pass` | `--ds-success-bg` / `--ds-success-fg` | 通过（前缀 ✓ 图标） |
| `... fail` / `DMARC reject` | `--ds-danger-bg` / `--ds-danger-fg` | 失败 / 被拒（前缀 ✕ 图标） |
| `... none` / `neutral` | `--ds-bg-subtle` / `--ds-fg-muted` | 无策略 / 中立（前缀 — 图标） |

- 高 20–22px，字 12px medium，内边距 `0 8px`，图标 + 「协议名 + 结果」双编码（不仅靠色）。
- 旁附 spam 分数 Tag：低分 success-bg、中分 warning-bg、高分 danger-bg。

### 路由规则表（**核心组件**）：地址 → 动作 + 状态点

Cloudflare 风路由规则的密集表：

- **表头**：底 `--ds-bg-subtle`，文字 `--ds-fg-muted` 14px medium，底线 `--ds-border-strong` 1px。
- **列**：`匹配地址(mono)｜动作 Tag｜目标(mono, forward→邮箱 / webhook→URL / store|drop→—)｜状态点｜启用开关｜操作`。
- **动作 Tag**：`store` info-bg、`forward` success-bg、`drop` 中性 bg-subtle、`webhook` warning-bg（浅底 + 底上文字），圆角 4px。
- **状态点**：实心圆 6–8px + 文字标签——`生效中`(success)、`已停用`(fg-subtle 灰点)、`webhook 失败`(danger)。
- **行**：单元上下 10px，水平 12px；hover 底 `--ds-bg-subtle`；行底线 `--ds-border`。
- **操作列**：tertiary「编辑」+ danger 文本「删除」，sm 尺寸。
- **数字 / 命中数列**右对齐 + `tabular-nums`。

### 可观测指标卡（**核心组件**）

监控大盘的统计卡，描边分隔、无阴影：

- **结构**：标签(--ds-fg-muted, 13px) + 核心大数(`--ds-text-3xl` 30px, bold, **tabular-nums**) + 趋势/单位(`--ds-fg-subtle` 12px 或 success/danger 涨跌)。
- **典型卡**：今日收信、今日发信、**队列深度**、邮箱数、退信率、webhook 失败数。
- **状态色边角**：队列深度高 / 退信率高时，大数或趋势用 `--ds-warning` / `--ds-danger`；可加左侧 3px 语义色条。
- **边框** `--ds-border` 1px，圆角 `--ds-radius-md`，内边距 16–20px，底 `--ds-bg-elevated`。常用 4 列网格，gutter 16px。

### 状态徽章（队列 / 重试 / 退信）

- Tag：浅底（语义 `-bg`）+ 底上文字（语义 `-fg`），圆角 4px，高 20–22px，字 12px。
- 语义映射：`已投递` success、`队列中` info、`重试中(×n)` warning、`退信` danger、`已丢弃(drop)` 中性。
- 状态点：实心圆 + 标签，表格内首选，最省空间。
- 未读计数 badge：药丸，`--ds-danger` 底 + 白字，置导航/收件箱右上。

### DNS 代码块（SPF / DKIM / DMARC 粘贴）

- 底 `--ds-bg-sunken`，边框 `--ds-border` 1px，圆角 `--ds-radius-md`，内边距 12–16px，`--ds-font-mono` 13px，`white-space: pre`，横向可滚。
- 右上「复制」按钮（tertiary sm，复制后变 success 文案「已复制」120ms）。
- 多记录可分行 + 行内 `MX / TXT(SPF) / TXT(DKIM) / TXT(DMARC)` 标签注释（`--ds-fg-subtle`）。

### 提示条 Alert / 导航

- **Alert**：四语义，**前置语义 SVG 图标 + 浅底（`-bg`）+ 1px 全描边**（语义色低透明，无侧边色条）+ 文字（`-fg`），圆角 6px，内边距 12px，可关闭。用于「队列积压」「DKIM 即将过期」「PTR 未配置」等运维提醒。
- **侧边导航**：菜单项高 36px，hover 底 `--ds-bg-subtle`，选中底 `--ds-info-bg` + 左 3px `--ds-primary` 竖条 + 文字 `--ds-primary`；可折叠到 48px 仅图标。
- **顶栏**：高 48–56px，底 `--ds-bg`，底线 `--ds-border`；含 Logo / 全局搜索 / 通知 / 当前邮箱菜单。

### 模态框 Modal（写信弹窗）

- **遮罩 scrim**：`rgba(26,28,43,.42)` 半透明压暗，铺满视口（演示中铺满容器），点击或 `Esc` 关闭。
- **面板**：底 `--ds-bg-elevated`，边框 `--ds-border` 1px，圆角 `--ds-radius-lg` 8px，阴影 `--ds-shadow-lg`（弹层才用阴影），最大宽 440px，移动端 100% 宽。
- **三段式**：头（标题 + 关闭 ✕，底线 `--ds-border`）／ 体（表单，内边距 `--ds-space-5`）／ 脚（按钮右对齐，底 `--ds-bg-subtle` + 顶线）。写信弹窗体内用「收件人(mono) / 主题 / 正文」，脚为 `取消`(tertiary) + `发送·DKIM 签名`(primary)。
- **关闭按钮 ✕**：28px 方，hover 底 `--ds-bg-subtle`、focus `--ds-focus-ring`。
- **无障碍**：`role="dialog" aria-modal="true" aria-labelledby`，焦点锁定与返回触发元素。

### 下拉菜单 Dropdown（行操作 / 目标菜单）

- **面板**：底 `--ds-bg-elevated`，边框 `--ds-border`，圆角 `--ds-radius-md`，阴影 `--ds-shadow-md`，最小宽 200px，内边距 `--ds-space-1`。
- **项 `.mitem`**：高约 32px，圆角 `--ds-radius-sm`；**hover** 底 `--ds-bg-subtle`；**选中/active** 底 `--ds-info-bg` + 文字 `--ds-primary` + medium；**focus** 底 `--ds-info-bg`（键盘可达）；**danger** 项（删除规则）文字 `--ds-danger`、hover 底 `--ds-danger-bg`。
- **分组 / 分隔**：`.mlabel` 小写灰标题（`--ds-fg-subtle`）+ `.msep` 1px `--ds-border` 分隔线；右侧快捷键提示用 mono `--ds-fg-subtle`；目标地址项用 mono。

### 工具提示 Tooltip（认证细节 / 操作说明）

- **气泡**：反色底 `--ds-fg` + 文字 `--ds-bg`，字 12px，圆角 `--ds-radius-sm`，内边距 `4/8px`，阴影 `--ds-shadow-md`，下置小三角；DNS/选择子内容用 mono。
- **触发**：`:hover` 与 `:focus-within` 双触发（键盘可达），淡入 + 4px 上移（`--ds-dur-base`）；触发元素带虚线下划线提示可交互。用于 DKIM 选择子、spam 阈值、按钮动作说明等。

### Toast 通知（即时反馈）

- **容器**：右下/右上堆叠，列向 8px 间距，单条最大宽约 380px。
- **单条**：底 `--ds-bg-elevated`，边框 `--ds-border` 1px 全描边（无侧边色条）；圆形语义图标徽（success/warning/danger/info，内嵌紧凑线性 SVG）+ 标题(medium) + 描述(`--ds-fg-muted`) + 关闭（SVG ✕）。
- **用途**：邮件已发送、队列重试、退信 bounce、DNS 已传播；地址/状态码用 mono。`role="status"`（普通）/ `role="alert"`（退信等需即时播报），自动消失，`prefers-reduced-motion` 下不滑入。

### 分页 Pagination（收件箱翻页）

- **结构**：左「显示 1–50 / 共 N 封」信息（`tabular-nums`）+ 右页码组。
- **页码按钮 `.pgbtn`**：最小 28px 方，圆角 `--ds-radius-sm`，边框 `--ds-border-strong`，`tabular-nums`；**hover** 边/字 `--ds-primary`；**active(按下)** 底 `--ds-info-bg`；**当前页** `--ds-primary` 底 + 白字 + medium（`aria-current="page"`）；**禁用**（首/尾页） 底 `--ds-bg-sunken`、字 `--ds-fg-subtle`、`not-allowed`；省略号 `…` 无边框不可点。

### 步进器 / 步骤条 Stepper（DNS 配置 / 初始化向导）

- **节点 `.node`**：24px 圆，`tabular-nums` 序号；连接线 2px。
- **四态**：**待办** 描边 `--ds-border-strong` + 灰字；**完成 done** 实心 `--ds-success` + ✓ + 连线转 success；**当前 current** 实心 `--ds-primary` + 白字 + 标题 `--ds-primary` 加粗；**失败 error** 实心 `--ds-danger` + `!`（如 DMARC 未发布）。
- **结构**：节点 + 标题(medium) + 描述(`--ds-fg-subtle`，可放域名/记录名 mono)，横排 + 连接线；**移动端**（≤640）转竖排、隐藏连接线。用于添加域名 → MX → SPF/DKIM → DMARC → 验证发信。

### 面包屑 Breadcrumb（路径定位）

- **结构**：层级链接 + `/` 分隔（`--ds-fg-subtle`），末项 `.cur`（`--ds-fg` + medium，不可点）；域名 / 地址段用 mono。
- **态**：链接 `--ds-fg-muted`，**hover** 文字 `--ds-primary` + 底 `--ds-bg-subtle`，**focus** `--ds-focus-ring`。例：域名 / `example.com` / 路由规则 / `*@example.com`。

---

## 10. 可访问性

- **对比度**：正文 ≥4.5:1，大字/图标 ≥3:1。所有语义浅底上的 `-fg` 文字、暗色主色上的白字均经核验达 AA（如暗色 primary `#5462ec` 上白字 ≈4.84:1，亮色 primary `#3d4eea` 上白字 ≈6.04:1）。
- **焦点**：所有可交互元素 `:focus-visible` 显示 `--ds-focus-ring`（双层环：先 bg 底环再主色环），键盘可达。
- **触控目标**：移动/触屏控件 ≥44px；后台桌面密集态默认 32px（鼠标精确）可接受，但点击热区不小于视觉尺寸。
- **状态不仅靠色**：未读用「圆点 + medium 字重」、认证结果用「✓/✕/— 图标 + 协议名文字」、路由状态用「点 + 文字」，色盲可辨。
- **表格无障碍**：路由表/收件箱用语义 `<table><thead><th scope>`；可排序列 `aria-sort`；行选择用真实 checkbox。
- **可减弱动效**：尊重 `prefers-reduced-motion`，新邮件/队列动效降为透明度。

---

## 11. Do / Don't

**Do**
- 默认 32px 控件、紧凑间距，把收件箱/路由表/指标卡密度做满。
- 所有计数（收发/队列深度/邮箱数/spam 分）用 `tabular-nums` + 右对齐。
- 指标卡、路由表、收件箱用 **描边** 分隔，阴影只给浮层。
- 认证结果、路由状态、未读用「图标/点 + 文字」双编码。
- DNS 记录、邮箱地址、token、Hash 一律 mono + 一键复制。
- 靛蓝克制——只点主操作、链接、选中、进行中状态。

**Don't**
- 别把圆角放大（>8px）——基建后台显得幼稚、不专业。
- 别给每张指标卡都加阴影——浮夸且破坏平面秩序。
- 别用比例字排数字——队列深度/计数列会跳动、难比对。
- 别只靠红/绿区分认证通过失败——必须配图标 + 文字。
- 别滥用靛蓝/红——满屏色彩会淹没真正需要注意的退信与重试。
- 别为「好看」牺牲密度——运维核心价值是一屏看全、效率至上。

---

## 12. 如何接入

**1. 引入 tokens.css**（提供全部 `--ds-*` 变量与亮/暗主题）：

```html
<link rel="stylesheet" href="./projects/hahamail/tokens.css" />
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

/* 指标卡核心大数 / 队列深度 */
.metric-value { font-size: var(--ds-text-3xl); font-weight: var(--ds-weight-bold);
                font-variant-numeric: var(--ds-numeric); }
/* 认证徽章（通过） */
.auth-badge--pass { background: var(--ds-success-bg); color: var(--ds-success-fg);
                    border-radius: var(--ds-radius-sm); }
/* DNS 代码块 */
.dns-block { background: var(--ds-bg-sunken); border: 1px solid var(--ds-border);
             border-radius: var(--ds-radius-md); font-family: var(--ds-font-mono); }
```

**3. 切暗色**（运维默认暗色）：在 `<html>` 上设 `data-theme="dark"` 或 `class="dark"`（tokens.css 两者都覆盖）：

```js
document.documentElement.dataset.theme = 'dark';
```

**4. Tailwind 项目**：引入 preset，类名直接消费变量：

```js
// tailwind.config.js
module.exports = { presets: [require('./projects/hahamail/tailwind.preset.js')] };
```

```html
<button class="h-control-md px-3 bg-primary text-primary-fg rounded-md font-medium
               hover:bg-primary-hover focus-visible:shadow-focus">发送</button>
<td class="text-right tabular-nums text-fg">1,284</td>  <!-- 队列深度 -->
<span class="bg-success-bg text-success-fg rounded-sm px-2 text-xs"><svg class="ic-svg w-3 h-3"><use href="#i-check"/></svg> DKIM pass</span>
```

**5. 预览**：双击 `preview.html` 即开（自包含、亮暗切换），含指标卡 + 路由规则表 + 收件箱列表 + 认证结果徽章 + DNS 代码块，全走变量。
