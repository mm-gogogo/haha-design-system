# HahaClean · 哈哈清理 设计系统

> 基于「新拟物风」+ hahaclean 定制。一套为「平静、单窗、人人会用」的 macOS 清理工具量身换肤的设计系统：洁净薄荷绿 / 松石青 + 同色基底 + 双向软阴影，把按钮捏成可触摸的凸起、把选中导航与进度槽压成凹陷。气质：平静、可信、不吓人——清理类工具要让用户安心（先扫描再清、可恢复到废纸篓、有保护名单）。

---

## 1. 一句话气质

整个界面像一块被「捏」出形状的**薄荷色软塑料**：背景、卡片、按钮共用一个洁净底色，不靠色差、不靠描边，全靠**左上白高光 + 右下青灰暗影**的双向软阴影让大主操作按钮凸起、让左侧选中导航和进度槽凹陷。主色是清新的薄荷青绿（呼应「清理 / 扫帚」的洁净感），整体安静、克制、有手感——一眼就让人放下「会不会删错」的紧张。**亮色是主场**（项目固定浅色），亮色要做到最好；暗色仍提供，供官网 `site/` 与系统深色场景使用。

---

## 2. 设计哲学 / 性格

继承新拟物风基底（同色分层、双向软阴影、大圆角、inset 凹陷、对比度优先），换肤到「平静 macOS 清理工具」气质：

1. **同色分层 + 双向软阴影是灵魂**：背景 / 卡片 / 按钮共用 `--ds-bg`，抬起靠外阴影、凹陷靠 `inset` 内阴影。单一斜上光源，方向永远一致。
2. **洁净薄荷换肤**：主色从基底的柔蓝换成**薄荷青绿 `#11806c`**，accent 用**松石青 `#1f7a93`**，底色带极淡薄荷冷调——色彩本身就在说「干净 / 清爽」，呼应扫帚与清理。
3. **平静不吓人**：清理工具最怕「删错的恐惧」。视觉语言主动降温——柔和单色、低饱和、慢动效（200–280ms）、按下是温柔的「凸→凹」物理过渡，而非弹跳。危险操作（删除 / 高温）才用 danger 红，且永远配文案与图标，不靠纯色吓人。
4. **可信感来自一致与留白**：相邻控件至少 16px 间距给软阴影呼吸；大主操作按钮（扫描 / 清理）是唯一的视觉焦点，其余克制。
5. **对比度优先于风格纯粹**：新拟物天生低对比，本 Kit 主动加深文字与主色，宁可牺牲一点「同色纯净」也要守住 WCAG AA——清理工具的可回收大小、勾选项、温度数字必须看得清（详见第 10 节）。

与基底的关系：**保留**全部 `--ds-*` 语义 token、比例尺、双向阴影 / inset 系统、大圆角、焦点环；**改写**主色 / accent / 底色冷调（蓝→薄荷青）、阴影暗面着色（中性灰→青灰）、字族（偏向 macOS 圆体），并新增一个 `--ds-primary-strong`（主色当文字用时的加深版）。

---

## 3. 何时用 / 何时别用

**适合**
- 本项目 hahaclean 全部界面：单窗 + 左侧分组导航（概览 + 清理 7 页 + 硬件 3 页）。
- 同气质的 macOS 桌面工具 / 控制面板 / 系统工具——平静、单窗、控件密度适中。
- 需要「让用户安心、不紧张」的破坏性操作类工具（清理 / 卸载 / 删除前预览）。

**别用**
- 高信息密度的 B 端表格后台——同色 + 软阴影会让密集行「糊」成一片（清理结果列表已按密集场景做了破例处理，见第 9 节）。
- 鲜艳、热闹、强营销的落地页——薄荷柔色 + 软质感是「安静工具」，不是「吸睛广告」。
- 极小尺寸 widget / 低分辨率——细腻双向阴影在小尺寸下看不清凸凹。

---

## 4. 颜色

新拟物核心是**背景与控件同色**，层级靠阴影而非色值。下列色值已为对比度做过加深处理，全部满足 AA。

### 表面与文字（亮 / 暗）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#e6eeec` | `#22302c` | 主背景（控件也用它，带极淡薄荷冷调） |
| `--ds-bg-subtle` | `#e1eae7` | `#1f2c28` | 次背景 / 区块分组底 |
| `--ds-bg-elevated` | `#e6eeec` | `#22302c` | 卡片 / 弹层（**同色**，靠凸阴影抬起） |
| `--ds-bg-sunken` | `#dce7e3` | `#1d2925` | 凹陷表面 / 输入槽 / 进度槽 / 选中导航 |
| `--ds-fg` | `#2f3e3a` | `#d6e0db` | 主文字（亮 9.5:1 / 暗 10.2:1） |
| `--ds-fg-muted` | `#51625d` | `#9fb0a9` | 次要文字（≥5.5:1） |
| `--ds-fg-subtle` | `#5e6f6a` | `#8fa099` | 占位 / 弱文字（≥4.5:1，**中文正文禁用此级**） |
| `--ds-fg-on-accent` | `#ffffff` | `#06231d` | 落在强调 / 主色上的文字 |
| `--ds-border` | `#cdd9d4` | `#34433d` | 常规描边（几乎不用，靠阴影） |
| `--ds-border-strong` | `#b8c6c0` | `#46564f` | 强描边 / 密集列表分隔 |

### 品牌与强调（梯度）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#11806c` | `#46d6b8` | 薄荷青绿主操作色（扫描 / 清理 / 选中），白字 4.85:1 |
| `--ds-primary-hover` | `#0c7a66` | `#58dcc1` | hover |
| `--ds-primary-active` | `#0a6a59` | `#6ce0c9` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#06231d` | 主操作上的文字 |
| `--ds-primary-strong` | `#0b6655` | `#5fdcc0` | **主色当文字用时的加深版**（链接 / 选中导航文字落在 bg 上），亮 5.9:1 |
| `--ds-accent` | `#1f7a93` | `#5ec8e0` | 松石青链接 / 次强调，白字 4.9:1 |
| `--ds-accent-fg` | `#ffffff` | `#04222b` | accent 上的文字 |

> 为什么有 `--ds-primary-strong`？薄荷青绿 `#11806c` 落白字达 AA（用于填充按钮），但**作为文字色直接画在浅 bg 上**只有 4.1:1（差一点）。所以选中导航 / 链接这类「主色文字」专用更深的 `#0b6655`（5.9:1）。填充按钮用 `--ds-primary`，主色文字用 `--ds-primary-strong`——这是本 Kit 的一条关键纪律。

### 语义状态（主色 + 浅底 + 底上文字）

| 语义 | 亮 主 / 底 / 字 | 暗 主 / 底 / 字 | 清理工具里的含义 |
|---|---|---|---|
| success | `#157f5b` / `#dcefe6` / `#0c5a3f` | `#4fc795` / `#15352b` / `#bff0dd` | 可回收 / 清理完成 / 受保护安全 |
| warning | `#b97e1f` / `#f5ead0` / `#6b4709` | `#e0a23b` / `#372810` / `#fbe6c0` | 谨慎 / 大占用 / 温度偏高 |
| danger | `#c23a3a` / `#f4dede` / `#7c1d1d` | `#e87b7b` / `#3a2022` / `#fad9d9` | 删除 / 卸载 / 高温告警 |
| info | `#1f7a93` / `#d6eae6` / `#15584b` | `#5ec8e0` / `#13322c` / `#bdeee2` | 提示 / 扫描中 / 中性信息 |

> 状态浅底（`-bg`）取「比基底略偏色」而非纯白，避免在同色界面里像漂浮异物；底上文字（`-fg`）均 ≥6.5:1，远超 AA。

---

## 5. 字体

- **字族**：`"Inter", -apple-system, "SF Pro Rounded", "PingFang SC", sans-serif`。预览页经 `_fonts/fonts.css` 嵌入真实 **Inter**（本地 woff2）打头，保证跨平台字形一致；其后回退 macOS 原生圆体（呼应 hahaclean「26pt 圆体标题」与平静气质），中文回退 PingFang SC 保证简体显示。`--ds-font-sans` 以 `"Inter"` 起头是本 Kit 的约定。
- **字重**：中等为主——normal `400` / medium `500` / bold `600`。新拟物忌过细字重（细字在低对比同色底上更难读）。正文用 400，标签 / 按钮 / 导航用 500，仪表大数字与标题用 600。
- **比例尺**：`xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48`。概览仪表的健康分 / 大占用数字用 2xl–3xl 强存在感。
- **行高**：tight `1.25`（标题 / 仪表数字）/ normal `1.55`（正文）/ relaxed `1.75`（长说明）。
- **字距**：标题 tight `-0.01em`，正文 normal `0`。
- **中文适配**：中文笔画密，**不要用 `--ds-fg-subtle` 级弱色承载中文正文**——同色低对比下中文比拉丁更易糊。清理项名称、可回收大小、保护名单条目一律用 `--ds-fg` 或 `--ds-fg-muted`。

---

## 6. 间距与布局

- **比例尺（4px 基）**：`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`（`--ds-space-1` … `-12`）。hahaclean 主节奏 24px，与项目 `Theme.swift` 的 24pt 节奏一致。
- **节奏**：组内 8px、组间 16px、卡片内距 24px、区块间 32–40px。
- **软阴影留白（最关键一条）**：每个凸起控件向四周投 6–10px 软阴影，**相邻控件间距至少 16px**，否则阴影互叠会脏。
- **单窗布局**：左侧分组导航固定宽约 200–220px（凹陷选中态需要呼吸空间），右侧内容区单列为主，宽内容用最多 2 列卡片。
- **栅格**：内容区 12 列，gutter 24px；卡片间距 24–32px。

### 响应式 / 移动端

桌面单窗以「左侧固定栏 + 右侧内容」两栏为主，窄屏逐级降为单列堆叠。断点与行为：

| 断点 | 行为 |
|---|---|
| `> 760px` | 桌面：双列卡片（`.two`）、三列概览仪表、左侧栏 200–220px。 |
| `≤ 760px` | 双列卡片与概览仪表降为**单列**；卡片满宽堆叠。 |
| `≤ 640px` | **侧栏导航收到顶部**——由竖直分组栏变为顶部横向滚动导航条（抽屉入口），分组标题隐藏、选中态仍用 inset 凹陷；wrap / topbar 内距收紧，品牌副标题隐藏；概览仪表降为两列、色板两列。 |
| `≤ 400px` | 概览仪表降为单列，保证小手机上数字不挤。 |

- **移动端布局原则**：顶栏（汉堡菜单按钮 + 标题 + 健康标签）+ **大主操作按钮满宽 56px**（唯一焦点）+ 竖向扫描结果列表。预览页「移动端 Mobile」块用约 375px 手机框演示。
- **触控不缩水**：所有断点下导航项、列表行、主操作按钮、关闭按钮均保持 ≥44px 触控目标。
- **软阴影留白照旧**：窄屏控件仍需 ≥16px 间距，避免软阴影互叠变脏；横向导航条用 inset 凹槽承托，区分于内容区。

---

## 7. 圆角 / 阴影 / 描边

### 圆角（大而圆润）
| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `10px` | 按钮 / 输入 / 列表行 / 小控件 |
| `--ds-radius-md` | `16px` | 卡片 / 弹层 / 导航项 / 面板 |
| `--ds-radius-lg` | `24px` | 大卡片 / 仪表盘 / 全屏表面 |
| `--ds-radius-full` | `9999px` | 药丸标签 / 开关 / 圆形按钮 / 环形仪表 |

### 阴影（灵魂 · 双向软阴影）
单一斜上光源 → 左上白高光 + 右下**青灰**暗影（暗面着了薄荷冷调，比基底中性灰更贴气质）。**凸起**用外阴影，**凹陷**用 `inset`。

凸起（亮色）：
```css
--ds-shadow-sm: -3px -3px 6px rgba(255,255,255,.75), 3px 3px 6px rgba(120,148,138,.30);
--ds-shadow-md: -6px -6px 12px rgba(255,255,255,.85), 6px 6px 12px rgba(120,148,138,.35);
--ds-shadow-lg: -10px -10px 20px rgba(255,255,255,.9), 10px 10px 20px rgba(120,148,138,.40);
```
**凹陷（inset）**——选中导航 / 进度槽 / 输入框 / 按钮按下：
```css
--ds-shadow-inset:    inset 4px 4px 8px rgba(120,148,138,.40), inset -4px -4px 8px rgba(255,255,255,.85);
--ds-shadow-inset-sm: inset 2px 2px 5px rgba(120,148,138,.35), inset -2px -2px 5px rgba(255,255,255,.8);
```
> 用法口诀：**抬起 = 外阴影（shadow-md），按下 / 凹槽 / 选中 = 内阴影（shadow-inset）**。同色底下，过渡时只换阴影即得「凸→凹」物理感。

### 描边
新拟物**几乎不用描边**——层级靠阴影。仅两处破例：(1) **扫描结果列表 / 磁盘占用列表**这类密集行，软阴影会糊，改用极轻 `--ds-border` 行分隔；(2) input error 态叠加 1px danger 描边。

---

## 8. 动效

- **时长**：fast `200ms` / base `240ms` / slow `280ms`——柔顺、平静，不急促（清理工具不该让人焦虑）。
- **曲线**：`--ds-ease: cubic-bezier(.25,.46,.45,.94)`（easeOutQuad 类，柔和收尾）。
- **典型过渡**：
  - 大主操作按钮（扫描 / 清理）按下：`box-shadow` 从 `--ds-shadow-md`（凸）→ `--ds-shadow-inset`（凹），base 时长。
  - 导航切换：选中项阴影由无 → `--ds-shadow-inset`（被按入感）。
  - 进度 / 扫描中：进度条在 inset 凹槽内主色填充平移；不用刺眼闪烁，用柔和脉动。
  - hover：主色微变 + 阴影略增，**不做位移弹跳**（与平静气质冲突）。
- **prefers-reduced-motion**：减弱时去掉过渡，仅保留终态阴影切换（仍要能看出凸 / 凹），不保留任何位移 / 缩放。tokens.css 已内置该媒体查询。

---

## 9. 组件规格

通用：所有控件**底色 = `--ds-bg`**，凸起用 `--ds-shadow-md`，圆角按件型取 sm/md。触控目标 ≥44px。图标颜色用 `--ds-fg` 或主色，**务必 ≥4.5:1**，不靠阴影暗示图标。

### 左侧分组导航（凹陷选中态 · 核心组件）
- 容器：底 `--ds-bg`，宽 200–220px，分组标题用 `--ds-fg-subtle` / xs / medium（非中文短词可用 subtle）。
- 未选中项：平面无阴影，文字 `--ds-fg-muted` + 图标；hover 出 `--ds-shadow-sm` 微凸。
- **选中项**：做 `--ds-shadow-inset`（被按入凹陷）+ 底 `--ds-bg-sunken`，文字与图标转 `--ds-primary-strong`，圆角 `--ds-radius-md`。这是「我在这一页」的物理表达。
- 实时小指标（侧边栏温度 / 内存）：用 `--ds-fg-muted`，温度超阈值转 `--ds-warning` / `--ds-danger`。

### 大号主操作按钮（扫描 / 清理 · 凸起，按下凹陷）
| 状态 | 底 | 文字 | 阴影 |
|---|---|---|---|
| default | `--ds-primary` | `--ds-primary-fg` | `--ds-shadow-md` |
| hover | `--ds-primary-hover` | `--ds-primary-fg` | `--ds-shadow-md` |
| active（按下） | `--ds-primary-active` | `--ds-primary-fg` | `--ds-shadow-inset`（**凸→凹**） |
| disabled | `--ds-bg` | `--ds-fg-subtle` | `--ds-shadow-sm`，opacity .6 |
| focus | （任意） | | 叠加 `--ds-focus-ring` |

尺寸：主操作用大号 高 48–56px、padding 0 28px、字号 md、`--ds-radius-sm`，居中页面是唯一视觉焦点。次按钮（secondary）同色软凸：底 `--ds-bg`、文字 `--ds-fg`、`--ds-shadow-md`，active 转 inset。danger 按钮（删除 / 卸载）底 `--ds-danger` + 白字 + 文案 + 图标。

### 扫描结果列表（可回收项 + 大小 + 勾选）
- 容器卡片：底 `--ds-bg-elevated`，`--ds-shadow-md`，圆角 md，内距 0（行自带 padding）。
- **行（密集场景破例）**：行间用极轻 1px `--ds-border` 分隔（不堆软阴影），行高 ≥44px，hover 整行底转 `--ds-bg-subtle`。
- 每行：勾选框（凹槽 `--ds-bg-sunken` + `--ds-shadow-inset-sm`，勾选时填 `--ds-primary`）+ 图标 + 项名（`--ds-fg`）+ 路径（`--ds-fg-muted` / sm）+ 右侧**大小**（`--ds-fg` / 等宽 tabular，medium）。
- 表头行：可回收总计用 success；「全选 / 全不选」用 tertiary 按钮。

### 概览仪表 / 环形与磁盘占用条
- **环形仪表（健康分 / 磁盘）**：圆形凹槽底 `--ds-bg-sunken` + `--ds-shadow-inset`，主色弧 `--ds-primary`（或按健康度切 success/warning/danger），中心大数字 `--ds-fg` / 2xl–3xl / 600。
- **磁盘占用条**：凹槽轨道 `--ds-bg-sunken` + `--ds-shadow-inset`，已用段主色填充；多类型占用用 primary / accent / warning 分段，段间留 1px 间隙，下方图例带文案（不只靠色）。

### 进度态（扫描中 / 清理中）
- 条形进度：inset 凹槽 + 主色填充平移；旁附文案（「正在扫描缓存…」`--ds-fg-muted`）。
- 不确定进度：凹槽内主色光带柔和脉动（非闪烁），尊重 reduced-motion。

### 风扇 / 温度仪表
- 温度：环形或半环仪表，凹槽 inset，弧色按阈值 78/85°C 切 `--ds-success`→`--ds-warning`→`--ds-danger`，中心数字 `--ds-fg` / 2xl + 单位 °C（`--ds-fg-muted`）。
- 风扇转速：滑块（range）凹槽轨道 inset + 圆形凸起手柄（`--ds-bg` + `--ds-shadow-sm`），当前 RPM 用 `--ds-fg` 显示，封顶值用 `--ds-fg-subtle` 标注。

### 确认对话框
- 卡片底 `--ds-bg-elevated`，`--ds-shadow-lg`，圆角 lg，内距 24px。
- 标题 `--ds-fg` / lg / 600，正文说明 `--ds-fg-muted`，**强调可恢复性**（「删除项将移到废纸篓，可恢复」用 success 文案安抚）。
- 操作区：主操作右对齐（确认删除用 danger，确认清理用 primary），取消用 secondary 软凸。

### 模态框 Modal（确认对话框 · 凸起浮层）
- 结构：凹陷遮罩 `.modal-scrim`（底 `--ds-bg-subtle` + `--ds-shadow-inset`，把背景「压」下去）上托起凸起浮层 `.modal`（底 `--ds-bg-elevated`，`--ds-shadow-lg`，圆角 lg，内距 24px，`max-width 400px`）。
- 破坏性操作头部带语义图标圆牌（`--ds-danger-bg` / `--ds-danger-fg` + `--ds-shadow-sm`），标题 `--ds-fg` / lg / 600，说明 `--ds-fg-muted`。
- 文案纪律：可恢复操作强调「移废纸篓、可恢复」（success 文案）；不可逆删除明确写「直接删除、不进废纸篓、不可撤销」（danger 文案），靠信息降温。
- 操作区右对齐：主操作（确认删除用 danger / 确认清理用 primary）+ 取消（secondary 软凸）。可访问性：`role="dialog"` `aria-modal` `aria-labelledby`。

### 下拉菜单 Dropdown
- 容器 `.menu`：底 `--ds-bg-elevated`，`--ds-shadow-lg`，圆角 md，内距 8px；`role="menu"`。
- 菜单项 `.menu-item`：min-height 40px、圆角 sm、文字 `--ds-fg`、图标 `--ds-fg-muted`。**hover** 出 `--ds-shadow-sm` 微凸；**按下 / 选中** 转 `--ds-bg-sunken` + `--ds-shadow-inset-sm` + 主色文字 `--ds-primary-strong`（右侧勾标）。
- 分隔用 1px `--ds-border`；危险项文字用 `--ds-danger-fg`（≥AA）。`focus-visible` 用 `--ds-focus-ring`。

### 工具提示 Tooltip
- 凸起气泡：底 `--ds-bg-elevated`，`--ds-shadow-lg`，圆角 sm，文字 `--ds-fg`（≥4.5:1），字号 sm；同色小箭头用 border 三角指向触发元素。
- 出现在元素上方、`pointer-events:none`；`role="tooltip"`。仅承载补充信息，关键信息勿只靠 tooltip。

### 分页 Pagination
- 页码按钮 `.pg`：min-width 40px、高 40px（触控达标）、底 `--ds-bg` + `--ds-shadow-sm` 微凸。
- 状态：**hover** 增凸 `--ds-shadow-md`；**按下** 微凹 `--ds-shadow-inset-sm`；**当前页** 凹陷 `--ds-shadow-inset` + `--ds-bg-sunken` + 主色文字 `--ds-primary-strong` / 600；**禁用**（首尾边界）`--ds-fg-subtle` + opacity .6；省略号 `…` 无阴影、`--ds-fg-muted`、不可点。`focus-visible` 用焦点环；上一/下一页按钮带 `aria-label`。

### Toast 通知
- 右下角短暂浮层栈 `.toast-stack`（`gap` 12px，`max-width` 420px）。单条 `.toast`：底 `--ds-bg-elevated`，`--ds-shadow-lg`，圆角 md，左侧 4px 语义色条（success/warning/danger/info）。
- 内容：语义色图标 + 标题（`--ds-fg` / 600）+ 描述（`--ds-fg-muted` / sm）+ 可聚焦关闭按钮（hover 微凸，`aria-label`）。`role="status"` 供读屏播报。
- **状态永远配图标 + 文案，不只靠色**；动效遵守 reduced-motion（柔和淡入，不弹跳）。

### 步骤条 Stepper（扫描 → 预览 → 清理）
- 呼应「先扫描再清」核心流程。三态：
  - **已完成 done**：圆点凸起主色实心（`--ds-primary` + `--ds-primary-fg` + `--ds-shadow-sm`，打勾），标签 `--ds-fg`；其后连接线填 `--ds-primary`。
  - **当前 current**：圆点凹陷（`--ds-bg-sunken` + `--ds-shadow-inset`）+ 主色文字 `--ds-primary-strong` / 600，「我在这一步」。
  - **未来**：圆点平面凸起（`--ds-shadow-md`）+ 弱文字 `--ds-fg-muted`；连接线 inset 凹槽。
- 圆点 ≥44px；横向排布，窄屏（≤640px）等分压缩、标签转 xs。

### 面包屑 Breadcrumb
- 路径项 `.crumbs a`：`--ds-fg-muted`，hover 出 `--ds-shadow-sm` 微凸转 `--ds-fg`；`focus-visible` 焦点环。
- 当前项 `.cur`：凹陷 `--ds-bg-sunken` + `--ds-shadow-inset-sm` + 主色文字 `--ds-primary-strong` / 600（≥4.5:1）。
- 分隔符 `›` 仅装饰（`aria-hidden`），层级不只靠它辨认；容器 `aria-label`，当前项 `aria-current="page"`。

### 输入框
- 天生 inset 凹槽：底 `--ds-bg-sunken`，`--ds-shadow-inset`，圆角 sm，高 40px，padding 0 16px，文字 `--ds-fg`，placeholder `--ds-fg-subtle`。
- focus：保持 inset，叠加 `--ds-focus-ring`。error：叠加 1px `--ds-danger` 描边 + danger 焦点环。

### 徽章 / 保护名单标签
- 药丸（`--ds-radius-full`），底用语义 `-bg`、文字用语义 `-fg`，可选极轻 `--ds-shadow-sm` 微凸，padding 2px 10px，字号 xs。
- **保护名单标签**：受保护项用 success（「受保护」+ 锁图标）；内置默认带锁项用 `--ds-fg-muted` + 锁图标且不可删（视觉上更克制）。

### 提示条（alert）
- 底 `<semantic>-bg`，左侧 4px `<semantic>` 主色条 + 图标，文字 `<semantic>-fg`，圆角 md，轻 `--ds-shadow-sm`。四态：success（清理完成）/ warning（大占用 / 温度）/ danger（高温 / 失败）/ info（扫描提示）。**状态永远配图标 + 文案，不只靠色。**

### 开关 / 滑块
- 开关：药丸凹槽（`--ds-bg-sunken` + `--ds-shadow-inset-sm`），圆形滑块（`--ds-bg` + `--ds-shadow-sm` 凸起），开启时凹槽填 `--ds-primary`。轨 ≥44×24，滑块 20px。
- 滑块（range，风扇转速）：凹槽轨道 inset，手柄圆形凸起。

---

## 10. 可访问性（新拟物对比度对策）

新拟物的**最大风险就是对比度**——同色基底 + 柔和阴影天然削弱文字 / 图标可读性。清理工具又必须把「可回收大小、勾选状态、温度数字」看清，所以本 Kit 的对策更严：

- **文字主动加深**：`--ds-fg` 加深到 `#2f3e3a`（亮 9.5:1），muted / subtle 均守 ≥4.5:1。**中文正文禁用 subtle 级弱色**。
- **主色双值制**：填充按钮用 `--ds-primary`（白字 4.85:1 AA）；主色**当文字**画在浅 bg 上时用更深的 `--ds-primary-strong`（5.9:1），因为薄荷青绿当文字本色只有 4.1:1。选中导航 / 链接务必用 strong 版。
- **图标也要 ≥4.5:1**：导航 / 列表 / 仪表的图标用 `--ds-fg` 或主色，**不要**用阴影暗示「这是图标」而让图标与底同色。
- **凸 / 凹要可辨**：层级靠阴影时双向阴影都要有且足够强，色盲 / 低视力用户也能从亮暗双向阴影感知凹凸（不要只投单向）。选中导航除 inset 外还转 `--ds-bg-sunken` 底色，多一重区分。
- **可见焦点环**：键盘焦点用双层 `--ds-focus-ring`（底色环 + 主色环），同色底上也清晰，绝不靠阴影代替焦点指示。
- **触控目标 ≥44px**：导航项、列表行、勾选框、按钮全不小于 44×44px。
- **状态不只靠色**：alert / badge / 磁盘分段 / 温度告警除语义色外一律加图标或文案——清理工具尤其要避免「红色 = 危险」被色盲用户误读。
- **破坏性操作降温安抚**：删除 / 卸载确认框明确写「移到废纸篓，可恢复」并用 success 文案，靠信息而非颜色消除恐惧。
- **可减弱动效**：尊重 `prefers-reduced-motion`，减弱后终态阴影仍须能看出凸 / 凹与进度。

---

## 11. Do / Don't

**Do**
- 背景、卡片、按钮**用同一个底色** `--ds-bg`，层级全交给双向软阴影。
- 选中导航 / 进度槽 / 勾选框 / 按钮按下用 `--ds-shadow-inset` 做凹陷；大主操作按钮凸起。
- 主色**填充**用 `--ds-primary`，主色**文字**用 `--ds-primary-strong`（守 AA）。
- 危险操作配文案 + 图标，并强调「可恢复 / 在废纸篓」安抚用户。
- 密集列表（扫描结果 / 磁盘占用）用极轻描边分隔行，不堆软阴影。

**Don't**
- 别用色差或描边做主要层级——那不是新拟物，靠阴影。
- 别让阴影方向不一致（一会左上一会右上），破坏「同一光源」。
- 别把薄荷青绿当文字直接画浅底上（只 4.1:1）——文字用 strong 版。
- 别用 subtle 弱色承载中文正文 / 可回收大小 / 关键数字。
- 别用尖角、硬投影、鲜艳大色块或弹跳动效——与平静软质气质冲突。
- 别用阴影替代焦点指示——键盘焦点必须用清晰焦点环。

---

## 12. 如何接入

**1. 引入 tokens.css**（任意框架通用）
```html
<link rel="stylesheet" href="./projects/hahaclean/tokens.css" />
```
```js
import './projects/hahaclean/tokens.css';
```

**2. 用变量写组件**
```css
/* 大主操作按钮：凸起，按下凹陷 */
.btn-scan {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  box-shadow: var(--ds-shadow-md);
  transition: box-shadow var(--ds-dur-base) var(--ds-ease);
}
.btn-scan:active { box-shadow: var(--ds-shadow-inset); }      /* 凸→凹 */
.btn-scan:focus-visible { box-shadow: var(--ds-shadow-md), var(--ds-focus-ring); }

/* 选中导航：凹陷 */
.nav-item.active { background: var(--ds-bg-sunken); box-shadow: var(--ds-shadow-inset); color: var(--ds-primary-strong); }

/* 进度 / 输入凹槽 */
.progress-track, .input { background: var(--ds-bg-sunken); box-shadow: var(--ds-shadow-inset); }
```

**3. 项目固定浅色；如需暗色（官网 site/）**
```js
document.documentElement.dataset.theme = 'dark';  // 或 classList.add('dark')
```
> hahaclean 应用本体固定浅色（不切换）；暗色 token 供官网 `site/` 与系统深色场景。

**4. Tailwind 项目** —— 引 preset（消费同一套 CSS 变量）
```js
// tailwind.config.js
module.exports = { presets: [require('./projects/hahaclean/tailwind.preset.js')] };
```
```html
<button class="bg-primary text-primary-fg rounded-sm shadow-md active:shadow-inset transition duration-base ease-ds">扫描</button>
<a class="text-primary-strong">查看可回收项</a>
<div class="bg-bg-sunken rounded-full shadow-inset"><!-- 进度凹槽 --></div>
```

> 提供的 boxShadow 工具类：`shadow-sm/md/lg`（凸起）、`shadow-inset` / `shadow-inset-sm`（凹陷）、`shadow-focus`（焦点环）。颜色含 `primary-strong`（主色文字 AA 版）。
