# Neumorphism · 新拟物风

> 同色基底 + 双向软阴影，造出软塑料 / 软泥般的凸起与凹陷。柔和触感、平静、高级——给桌面工具、音乐 / 健康、控制面板、单窗应用。

---

## 1. 一句话气质

界面像一整块被「捏」出形状的软塑料：背景与控件**同一种颜色**，不靠色差、不靠描边，全靠**左上白高光 + 右下深暗影**的双向软阴影让按钮凸起、输入框凹陷。安静、克制、可触摸感强。

---

## 2. 设计哲学 / 性格

继承 Geist 的骨架（语义分层、比例尺驱动、状态色成对、可见焦点环、明暗双主题），但把「层级表达」从「色差 + 投影」整体换成「**同色 + 双向软阴影**」：

1. **同色分层**：背景、卡片、按钮共用一个底色（`--ds-bg`），抬起 / 凹陷只由阴影区分——这是新拟物的根本。
2. **双向软阴影是灵魂**：每个控件都同时投出左上方的白色高光和右下方的灰暗影，模拟单一斜上方光源照在软材质上。凸起用外阴影，凹陷用 `inset` 内阴影。
3. **大圆角软质感**：圆角一律偏大（10 / 16 / 24px），强化「软塑料 / 软泥」的触感。
4. **平静柔和**：单色基底 + 低饱和柔蓝主色，动效柔顺（200–280ms），按下是「凸→凹」的物理过渡。
5. **对比度优先于风格纯粹**：新拟物天生低对比，本 Kit **主动加深文字与主色**，宁可牺牲一点「同色纯净」也要守住 WCAG AA（详见第 10 节）。

与 Geist 的关系：**保留**语义 token、比例尺、状态色配对、焦点环；**改写**表面分层逻辑（色差→阴影）、阴影系统（单向投影→双向软阴影 + inset）、圆角（变大）。

---

## 3. 何时用 / 何时别用

**适合**
- 桌面工具、控制面板、仪表盘、设置面板（控件密度适中、操作明确）。
- 音乐 / 播客 / 健康 / 冥想类应用——柔软触感契合「平静」气质。
- 单窗应用、小工具、Widget——视觉统一、不需要复杂信息密度。
- 想要「高级、安静、有手感」而非「鲜艳、热闹」的产品。

**别用**
- 高信息密度的 B 端表格 / 数据后台——同色 + 软阴影会让密集元素「糊」成一片。
- 强可访问性要求且无法接受任何对比妥协的场景（政务、医疗合规）——新拟物本就是对比度老大难。
- 需要强烈视觉层级 / 大量状态色快速区分的界面——同色基底削弱了色彩区分力。
- 极小屏 / 低分辨率——细腻的双向阴影在小尺寸下容易看不清凸凹。

---

## 4. 颜色

新拟物的核心是**背景与控件同色**：表面层级靠阴影而非色值区分。下面色值已为对比度做过加深处理。

### 表面与文字（亮 / 暗）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#e8ebf0` | `#2a2d35` | 主背景（控件也用它） |
| `--ds-bg-subtle` | `#e4e7ec` | `#272a31` | 次背景 / 区块分组底 |
| `--ds-bg-elevated` | `#e8ebf0` | `#2a2d35` | 卡片 / 弹层（**同色**，靠凸阴影抬起） |
| `--ds-bg-sunken` | `#e0e3e9` | `#25282f` | 凹陷表面 / 输入槽 / 代码块 |
| `--ds-fg` | `#3a4252` | `#d8dce4` | 主文字（亮 8.2:1 / 暗 9.6:1） |
| `--ds-fg-muted` | `#5b6273` | `#a3a9b5` | 次要文字（≥5.4:1） |
| `--ds-fg-subtle` | `#6b7280` | `#9097a3` | 占位 / 弱文字（≥4.6:1） |
| `--ds-fg-on-accent` | `#ffffff` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#d2d6de` | `#3a3e48` | 常规描边（几乎不用，靠阴影） |
| `--ds-border-strong` | `#bcc2cd` | `#4a4f5b` | 强描边 / 分隔 |

### 品牌与强调（梯度）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#4a6fc4` | `#6e9bff` | 主操作色（按钮 / 选中） |
| `--ds-primary-hover` | `#3f63b4` | `#5e8df5` | hover |
| `--ds-primary-active` | `#36569e` | `#4f7fe8` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#0c1733` | 主操作上文字 |
| `--ds-accent` | `#6f5fd6` | `#a394ff` | 柔紫链接 / 次强调 |
| `--ds-accent-fg` | `#ffffff` | `#150f33` | accent 上文字 |

> brief 给的柔蓝 `#5b8def` 偏浅，落白字仅约 3:1 达不到正文 AA；本 Kit 将主色加深到 `#4a6fc4`（白字 4.6:1），保留同样的柔蓝气质同时守住对比度。

### 语义状态（主色 + 浅底 + 底上文字）

| 语义 | 亮 主 / 底 / 字 | 暗 主 / 底 / 字 |
|---|---|---|
| success | `#2f9b6b` / `#dceee6` / `#0f5639` | `#54c595` / `#16352a` / `#c6f3df` |
| warning | `#b97e1f` / `#f3e8d2` / `#6e480a` | `#e0a23b` / `#38290f` / `#fbe7c2` |
| danger | `#cf4b4b` / `#f3dede` / `#7c1d1d` | `#e87b7b` / `#3a2022` / `#fad9d9` |
| info | `#4a6fc4` / `#dce4f3` / `#213a73` | `#6e9bff` / `#18233f` / `#d3e0fb` |

> 状态浅底（`-bg`）取「比基底略偏色」而非纯白，避免在同色界面里像漂浮异物；底上文字（`-fg`）均 ≥4.5:1。

---

## 5. 字体

- **字族**：`"Inter","PingFang SC",-apple-system,sans-serif`。Inter 柔和、字形开阔、中性，与软质表面气质相符；中文回退 PingFang SC / 微软雅黑，保证简体显示。
- **字重**：中等为主——normal `400` / medium `500` / bold `600`。新拟物忌用过细字重（细字在低对比同色底上更难读），正文用 400，标签 / 按钮用 500。
- **比例尺**：`xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48`。
- **行高**：tight `1.25`（标题）/ normal `1.55`（正文）/ relaxed `1.75`（长文）。
- **字距**：标题 tight `-0.01em`，正文 normal `0`。
- **中文适配**：中文笔画密，**不要用 fg-subtle 级别的弱色承载中文正文**——同色低对比下中文比拉丁字更易糊，正文中文一律用 `--ds-fg` 或 `--ds-fg-muted`。

---

## 6. 间距与布局

- **比例尺（4px 基）**：`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`（`--ds-space-1` … `-12`）。
- **节奏**：组内 8px、组间 16px、区块间 32–40px。
- **软阴影留白**：因为每个凸起控件都向四周投 6–10px 软阴影，**相邻控件间距至少留 16px**，否则阴影互相叠加会脏。这是新拟物布局最关键的一条。
- **容器宽**：单窗 / 工具类建议 720–960px；面板分栏不超过 3 列。
- **栅格**：12 列，gutter 24px；卡片间距 24–32px（给阴影呼吸空间）。

### 响应式 / 移动端

- **断点**：以 `640px` 为主断点（`@media (max-width: 640px)`）。≤640px 时所有多列栅格（卡片 `.cards`、色板 `.swatches`、模态演示 `.modal-demo`）**收成一列**，避免软阴影在窄屏互相挤叠成糊。
- **边距收紧**：窄屏外层 `.wrap` 横向内距从 24px 降到 16px，纵向同步收一档，把更多空间留给内容。
- **阴影别变小**：移动端**保持**双向软阴影强度——窄屏下凸/凹更要靠足够的明暗差辨识，缩阴影会让触感消失、对比变弱。
- **触控目标 ≥44px**：手机上把分页页码、图标按钮等放大到 ≥44px；大主按钮做满宽（`width:100%`、高 ≥52px）更易点。
- **手机框示例**：preview 的「移动端 Mobile」块用约 375px 手机框演示——顶栏（菜单 + 标题 + 设置）+ 凸起数据卡 + 满宽大主按钮 + 凹槽列表，是单窗 / 健康类移动布局的范式。
- **排版回流**：窄屏下字号比例尺（`type-row`）由横排标签改为纵向堆叠，标题降一档（2xl→xl），步骤条由单行改为两列换行。

---

## 7. 圆角 / 阴影 / 描边

### 圆角（大而圆润）
| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `10px` | 按钮 / 输入 / 小控件 |
| `--ds-radius-md` | `16px` | 卡片 / 弹层 / 面板 |
| `--ds-radius-lg` | `24px` | 大卡片 / 全屏表面 |
| `--ds-radius-full` | `9999px` | 药丸 / 开关 / 圆形按钮 |

### 阴影（灵魂 · 双向软阴影）
单一斜上光源 → 左上白高光 + 右下灰暗影。**凸起**用外阴影，**凹陷**用 `inset`。

凸起（亮色）：
```css
--ds-shadow-sm: -3px -3px 6px rgba(255,255,255,.7), 3px 3px 6px rgba(163,177,198,.45);
--ds-shadow-md: -6px -6px 12px rgba(255,255,255,.8), 6px 6px 12px rgba(163,177,198,.5);
--ds-shadow-lg: -10px -10px 20px rgba(255,255,255,.85), 10px 10px 20px rgba(163,177,198,.55);
```

**凹陷（inset）**——用于输入框天生凹槽、按钮按下态：
```css
/* 已内置为变量，可直接引用 */
--ds-shadow-inset:    inset 4px 4px 8px rgba(163,177,198,.5), inset -4px -4px 8px rgba(255,255,255,.8);
--ds-shadow-inset-sm: inset 2px 2px 5px rgba(163,177,198,.45), inset -2px -2px 5px rgba(255,255,255,.75);
```

暗色版自动切换（暗面近黑、亮面用低透白）：
```css
--ds-shadow-md:    -6px -6px 12px rgba(60,66,80,.6), 6px 6px 12px rgba(0,0,0,.6);
--ds-shadow-inset: inset 4px 4px 8px rgba(0,0,0,.6), inset -4px -4px 8px rgba(60,66,80,.55);
```

> 用法口诀：**抬起 = 外阴影（shadow-md），按下 / 输入 = 内阴影（shadow-inset）**。两者同色底，过渡时只换阴影即可得到「凸→凹」物理感。

### 描边
新拟物**几乎不用描边**——层级由阴影承担。仅在阴影不足以区分时（如紧贴同色区块的分隔线）才用 `--ds-border` / `--ds-border-strong`，且尽量细（1px）。

---

## 8. 动效

- **时长**：fast `200ms` / base `240ms` / slow `280ms`——柔顺、不急促。
- **曲线**：`--ds-ease: cubic-bezier(.25,.46,.45,.94)`（easeOutQuad 类，柔和收尾）。
- **典型过渡**：
  - 按钮按下：`box-shadow` 从 `--ds-shadow-md`（凸）→ `--ds-shadow-inset`（凹），base 时长。
  - hover：主色微变 + 阴影略增（不要做位移弹跳，与平静气质冲突）。
  - 开关：滑块在凹槽内平移 + 主色填充淡入。
- **prefers-reduced-motion**：减弱动效时去掉过渡，仅保留终态阴影切换（仍要能看出凸 / 凹），不要保留任何位移 / 缩放：
```css
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}
```

---

## 9. 组件规格

通用：所有控件**底色 = `--ds-bg`**，凸起用 `--ds-shadow-md`，圆角 `--ds-radius-sm`（大件用 md）。触控目标 ≥44px。

### 按钮（全状态）
| 状态 | 底 | 文字 | 阴影 | 备注 |
|---|---|---|---|---|
| primary default | `--ds-primary` | `--ds-primary-fg` | `--ds-shadow-md` | 高 40px，padding 0 20px |
| primary hover | `--ds-primary-hover` | `--ds-primary-fg` | `--ds-shadow-md` | |
| primary active | `--ds-primary-active` | `--ds-primary-fg` | `--ds-shadow-inset` | **凸→凹** |
| secondary default | `--ds-bg` | `--ds-fg` | `--ds-shadow-md` | 同色软凸 |
| secondary active | `--ds-bg` | `--ds-fg` | `--ds-shadow-inset` | 按下凹陷 |
| tertiary | `--ds-bg` | `--ds-fg-muted` | 无 | hover 才出 `shadow-sm` |
| danger | `--ds-danger` | `#ffffff` | `--ds-shadow-md` | active 转 inset |
| disabled | `--ds-bg` | `--ds-fg-subtle` | `--ds-shadow-sm` | opacity .6，禁指针 |
| focus | （任意） | | `--ds-focus-ring` | 叠加双层焦点环 |

尺寸：小 32px / 中 40px / 大 48px，统一 `--ds-radius-sm`。

### 输入框（input / textarea）
- **天生 inset 凹槽**：底 `--ds-bg-sunken`，阴影 `--ds-shadow-inset`，圆角 `--ds-radius-sm`，高 40px，padding 0 16px。
- 文字 `--ds-fg`，placeholder `--ds-fg-subtle`。
- focus：保持 inset，叠加 `--ds-focus-ring`。
- error：叠加 1px `--ds-danger` 描边 + danger 焦点环。

### 卡片
- 底 `--ds-bg-elevated`（= bg），阴影 `--ds-shadow-md`（大卡 `--ds-shadow-lg`），圆角 `--ds-radius-md`，内距 24px。
- 标题 `--ds-fg` / xl，正文 `--ds-fg-muted` / base，操作区按钮走上表。

### 徽章 / 标签
- 药丸（`--ds-radius-full`），底用语义 `-bg`，文字用语义 `-fg`，可选极轻 `--ds-shadow-sm` 微凸。padding 2px 10px，字号 xs。

### 提示条（alert）
- 底 `<semantic>-bg`，**前置语义 SVG 图标**（嵌在 `--ds-shadow-inset-sm` 凹陷小圆坑里，用新拟物凹陷表达语义，而非粗色边条），文字 `<semantic>-fg`，圆角 `--ds-radius-md`，轻 `--ds-shadow-sm`。四态：success（对勾）/ warning（三角感叹）/ danger（圆叉）/ info（i）。图标 + 文案双重传达，不只靠色。

### 开关 / 滑块（触感件）
- **开关**：药丸凹槽（`--ds-bg-sunken` + `--ds-shadow-inset-sm`），圆形滑块（`--ds-bg` + `--ds-shadow-sm` 凸起），开启时凹槽填 `--ds-primary`。轨 ≥44×24，滑块 20px。
- **滑块（range）**：凹槽轨道 inset，手柄圆形凸起。

### 导航
- 顶栏：底 `--ds-bg`，底部用 `--ds-shadow-sm` 微凸分隔（不用描边）。
- Tab / 侧边项：选中项做 **inset 凹陷**（被按入感）+ 文字转 `--ds-primary`；未选中平面无阴影，hover 出 `shadow-sm`。

### 表格
- 表头底 `--ds-bg-subtle`，文字 `--ds-fg-muted`；行分隔用极轻 `--ds-border`（此处可破例用描边，阴影在密集行里不适用）；数字列 tabular。

### 模态框（Modal · 凸起浮层）
- **一凹一凸分层**：遮罩面用 `--ds-bg-sunken` + `--ds-shadow-inset` 压成凹陷大面，浮层用 `--ds-bg-elevated` + `--ds-shadow-lg` 强凸起浮在其上——靠凹/凸对比分出前后，不靠半透明黑幕。
- 圆角 `--ds-radius-lg`，内距 24px；标题 `--ds-fg` / lg，正文 `--ds-fg-muted`。
- 关闭按钮：圆形 `--ds-shadow-sm` 凸起，hover→md，active→inset-sm。
- 底部操作区右对齐，按钮走「按钮」表（取消用 secondary，主操作用 primary/danger）。

### 下拉菜单（Dropdown）
- 触发器 = 凸起按钮（`--ds-shadow-md`）；菜单容器凸起浮卡（`--ds-shadow-md`，圆角 `--ds-radius-md`，内距 8px）。
- 菜单项：平面无阴影，**hover 微凸 `--ds-shadow-sm`**，**按下 / 选中凹陷 `--ds-shadow-inset-sm`** + 文字转 `--ds-primary`。
- 危险项文字用 `--ds-danger-fg`（守 AA），分隔用极轻 `--ds-border`。

### 工具提示（Tooltip）
- 凸起小气泡：底 `--ds-bg`，文字 `--ds-fg`（≥4.5:1），`--ds-shadow-md`，圆角 `--ds-radius-sm`，字号 xs。
- 悬停 **或键盘聚焦**（`:focus-within`）均触发，透明度过渡 base 时长；`z-index` 高于相邻内容。

### 分页（Pagination）
- 容器凹槽（`--ds-shadow-inset-sm`）盛放凸起页码；页码 `--ds-shadow-sm` 凸起，hover→md，按下→inset-sm。
- **当前页凹陷被按入**（`--ds-shadow-inset`）+ 文字转 `--ds-primary`；禁用态（首/末页箭头）opacity .5 + inset。触控目标 ≥38px（移动端建议放大到 44px）。

### Toast 通知
- 凸起浮卡：底 `--ds-bg-elevated`，`--ds-shadow-md`，圆角 `--ds-radius-md`，内距 16px。
- 左侧圆形图标盒用语义 `-bg` / `-fg` + 轻 `--ds-shadow-inset-sm`（凹陷小坑嵌图标）；正文标题 `--ds-fg`，描述 `--ds-fg-muted`。
- 三态 success / info / danger；**图标 + 文案双重传达**，不只靠色；右上关闭按钮。`role=status`（普通）/ `role=alert`（错误）。

### 步进器 / 步骤条（Stepper）
- 圆点节点：默认凸起（`--ds-shadow-md`，文字 `--ds-fg-muted`）；**已完成 = 填 `--ds-primary` + 白勾**；**当前步凹陷被按入**（`--ds-shadow-inset` + 文字转 `--ds-primary`）。
- 连接线：未完成段凹槽（`--ds-bg-sunken` + inset-sm），已完成段填 `--ds-primary`。
- 标签：当前 / 已完成用 `--ds-fg`，未来步骤 `--ds-fg-muted`。

### 面包屑（Breadcrumb）
- 整条做凹槽导航条（`--ds-shadow-inset-sm`，药丸圆角）；链接 `--ds-fg-muted`，**hover 微凸 `--ds-shadow-sm`** + 文字转 `--ds-fg`。
- 当前页 `--ds-fg` + medium 字重 + `aria-current="page"`；分隔符 `/` 用 `--ds-fg-subtle`。

---

## 10. 可访问性（新拟物重点章）

新拟物的**最大风险就是对比度**——同色基底 + 柔和阴影天然削弱文字 / 图标可读性。本 Kit 的对策：

- **文字主动加深**：`--ds-fg` 从常见的浅灰加深到 `#3a4252`（亮 8.2:1）；muted / subtle 均守 ≥4.5:1（正文 AA）。**中文正文禁用 subtle 级弱色**。
- **主色加深保 on-accent**：柔蓝主色加深到 `#4a6fc4`，白字 4.6:1（brief 原 `#5b8def` 白字仅 ~3:1，不达正文 AA，仅可作大字 / 装饰）。
- **图标也要 ≥4.5:1**：图标按钮的图标用 `--ds-fg` 或主色，**不要**用阴影暗示「这是图标」而让图标本身和底同色——务必有足够明度差。
- **凸 / 凹要可辨**：层级靠阴影时，确保亮 / 暗两面都有，且足够强；纯色盲 / 低视力用户也能从亮暗双向阴影感知凹凸（不要只投单向阴影）。
- **可见焦点环**：键盘焦点用双层 `--ds-focus-ring`（底色环 + 主色环），即便在同色底上也清晰可见，绝不靠阴影代替焦点指示。
- **触控目标 ≥44px**：所有可点区域不小于 44×44px。
- **状态不只靠色**：alert / badge 除语义色外加图标或文案，避免仅凭颜色传达状态。
- **可减弱动效**：尊重 `prefers-reduced-motion`（见第 8 节），但减弱后终态阴影仍须能看出凸 / 凹。
- **慎用低对比装饰阴影区分内容**：阴影适合表达「这是个控件」，不适合替代「这是重要文字」——重要信息靠字色 / 字重，不靠阴影。

---

## 11. Do / Don't

**Do**
- 背景、卡片、按钮**用同一个底色**，层级全交给阴影。
- 每个控件都投**双向**软阴影（左上白 + 右下灰），单光源方向一致。
- 按钮按下做「凸（shadow-md）→ 凹（shadow-inset）」过渡，输入框天生 inset 凹槽。
- 相邻控件至少留 16px 间距，给软阴影呼吸空间。
- 文字 / 图标守住 ≥4.5:1，宁可加深也不要纯净低对比。

**Don't**
- 别用色差或描边做主要层级——那不是新拟物，靠阴影。
- 别让所有阴影方向不一致（一会左上一会右上），会破坏「同一光源」的物理真实。
- 别用过浅的文字 / 主色（如原始柔蓝配白字），过不了 AA。
- 别在高密度表格 / 列表里堆软阴影——会糊成一片，密集区改用极轻描边。
- 别用尖角、硬投影或鲜艳大色块——与软塑料气质冲突。
- 别用阴影替代焦点指示——键盘焦点必须用清晰焦点环。

---

## 12. 如何接入

**1. 引入 tokens.css**（任意框架通用）
```html
<link rel="stylesheet" href="./styles/08-neumorphism/tokens.css" />
```
```js
// 或在打包入口
import './styles/08-neumorphism/tokens.css';
```

**2. 用变量写组件**
```css
.btn {
  background: var(--ds-bg);
  color: var(--ds-fg);
  border-radius: var(--ds-radius-sm);
  box-shadow: var(--ds-shadow-md);
  transition: box-shadow var(--ds-dur-base) var(--ds-ease);
}
.btn:active { box-shadow: var(--ds-shadow-inset); }      /* 凸→凹 */
.input { background: var(--ds-bg-sunken); box-shadow: var(--ds-shadow-inset); }
.btn:focus-visible { box-shadow: var(--ds-shadow-md), var(--ds-focus-ring); }
```

**3. 切换暗色**
```js
document.documentElement.dataset.theme = 'dark';  // 或 classList.add('dark')
```

**4. Tailwind 项目** —— 引 preset（自动消费同一套 CSS 变量）
```js
// tailwind.config.js
module.exports = { presets: [require('./styles/08-neumorphism/tailwind.preset.js')] };
```
```html
<button class="bg-bg text-fg rounded-md shadow-md active:shadow-inset transition duration-base ease-ds">
  按下变凹
</button>
<input class="bg-bg-sunken text-fg rounded-md shadow-inset" />
```

> 提供的 boxShadow 工具类：`shadow-sm/md/lg`（凸起）、`shadow-inset` / `shadow-inset-sm`（凹陷）、`shadow-focus`（焦点环）。
