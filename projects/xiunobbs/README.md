# XiunoNext · xiunobbs 论坛设计系统 Kit

> **基于「企业风」+ xiunobbs 定制。** 在企业风的可信、规整、克制之上换肤为「清爽现代论坛社区」气质：主色用清爽社区蓝（蓝青同 family），更轻盈友好、信息层级清晰、利于长时间浏览阅读。暗色模式完整。
>
> **延续性优先**（呼应 SPEC §1.0）：XiunoNext 是 Xiuno BBS 的现代化正统续作——版块/分类、主题帖+回复+楼层、置顶/精华/标签、积分/勋章/签到、个人中心、后台运营，论坛心智 100% 延续；只把工程实现换成现代栈（Inertia 2 + React 19 + Tailwind 4 + shadcn/ui）。本设计系统的取舍第一准则始终是：**对老站长/老用户/老社区是否平滑延续。**

---

## 1. 一句话气质

xiunobbs 设计系统是一套「让人愿意长时间泡在里面」的论坛界面语言：**清爽通透、列表可扫读、正文舒适、层级一眼分明**。
它继承企业风的秩序与克制，但把冷峻的商务感调成了**社区的轻盈与友好**——用清爽社区蓝（`#1a73d1`）当唯一情绪锚点，其余交给留白与细描边。

适合：社区论坛 / BBS / 知识问答 / 兴趣圈子 / 内容社区。

---

## 2. 设计哲学 / 性格

1. **延续性优先**：版块、主题帖、楼层、置顶/精华、积分/勋章——所有论坛心智沿用 Xiuno，视觉只做现代化换肤，不重塑用户认知。
2. **扫读与阅读兼顾**：列表区高密度、可快速扫读（版块/主题帖列表）；正文区低密度、行高宽松、舒适久读（楼层正文）。一套系统服务两种节奏。
3. **清爽通透**：以白/冷蓝灰承载界面，细描边 + 低阴影分层（而非重边框重阴影），留白充足，绝不「一眼 AI 模板」。
4. **社区蓝作锚点**：社区蓝只点在主操作、链接、当前选择、置顶强调、未读标记上；铺多了显廉价、失去清爽。
5. **语义分层 + 完整暗色**：背景四层、文字三档、状态色成对；暗色为独立深蓝夜 token（非简单反相），项目硬性要求。

**与企业风基底的关系**

- **继承**：语义分层、比例尺驱动、状态色成对、双层焦点环、明暗双主题、轻边轻影、克制 ease-out 动效、Inter 字族、AA 对比。
- **改动**：商务蓝 `#2563eb` → 清爽社区蓝 `#1a73d1`（更友好，且白字达 AA 4.5:1）；中性灰底注入一丝冷蓝（`#f4f7fb`）显通透；圆角整体放大一档（sm 6→7、md 10→12、lg 16→18）显轻盈；行高放宽（正文 1.5→1.55、长文 1.7→1.75）利久读；阴影带极淡蓝调辉光；新增**论坛专属组件章节**。

---

## 3. 何时用 / 何时别用

**适合用**
- 社区论坛 / BBS（XiunoNext 默认主题「Lumen 清新」落地）
- 知识问答、兴趣圈子、内容社区、产品官方论坛
- 需要「版块—主题帖—楼层」三级心智、长时间浏览阅读的站点
- 强调暗色模式、长文可读、信息层级清晰的内容型产品

**不建议用**
- 强视觉冲击的 campaign 落地页（→ editorial / dark-tech）
- 面向儿童 / 游戏的趣味产品（→ cute / pixel）
- 极简工具型 SaaS 后台（直接用企业风基底即可，无需论坛组件）

---

## 4. 颜色

颜色一律走语义 token，组件内**不准硬编码 hex**。亮暗两套随 `[data-theme="dark"]` / `.dark` 自动切换。暗色为独立深蓝夜配色。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#ffffff` | `#0c141f` | 主背景 |
| `--ds-bg-subtle` | `#f4f7fb` | `#111c2c` | 次背景 / 区块分组底（带一丝冷蓝，显通透） |
| `--ds-bg-elevated` | `#ffffff` | `#15212f` | 抬起表面（卡片 / 弹层 / 顶栏 / 楼层卡） |
| `--ds-bg-sunken` | `#eaf0f7` | `#080f18` | 凹陷表面（输入槽 / 引用块 / 楼中楼底） |
| `--ds-fg` | `#14202e` | `#e9f0f8` | 主文字（深蓝墨，非纯黑） |
| `--ds-fg-muted` | `#4a5b70` | `#a4b5c9` | 次要文字 / 元信息（作者、时间、回复数） |
| `--ds-fg-subtle` | `#64748b` | `#7d8fa6` | 占位 / 弱文字（≥4.5:1） |
| `--ds-fg-on-accent` | `#ffffff` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#e4ebf3` | `#213149` | 常规描边（列表分隔、卡片描边） |
| `--ds-border-strong` | `#cdd9e6` | `#314765` | 强描边 / 分隔 |

### 品牌与强调（社区蓝）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#1a73d1` | `#4ba0f0` | 主操作色（发帖按钮 / 选中 / 未读 / 置顶强调） |
| `--ds-primary-hover` | `#1560b3` | `#74b6f5` | hover |
| `--ds-primary-active` | `#114f93` | `#1d7ee0` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#06121f` | 主操作上的文字 |
| `--ds-accent` | `#0a8290` | `#2ad0dd` | 链接 / 次强调 / 标签（青系，与蓝同 family） |
| `--ds-accent-fg` | `#ffffff` | `#06121f` | accent 上的文字 |

> **强调色梯度（社区蓝）**：`#eaf3fc`(底) → `#1a73d1`(主, hover `#1560b3`) → `#114f93`(active) → `#0b3a6b`(深, 底上文字)。浅档作底（如 info 提示、当前 tab 底），深档作字。

### 语义状态（配淡底，社区友好）

| 角色 | 主色（亮/暗） | 浅底（亮/暗） | 底上文字（亮/暗） |
|---|---|---|---|
| Success | `#16a34a` / `#34d399` | `#e9faf0` / `#082619` | `#064b25` / `#c4f5dd` |
| Warning | `#d97706` / `#fbbf24` | `#fff6e6` / `#2a1d05` | `#6b3b00` / `#fdeec2` |
| Danger | `#dc2626` / `#f87171` | `#fef0f0` / `#2c1012` | `#6b0e0e` / `#ffd9d9` |
| Info | `#1a73d1` / `#4ba0f0` | `#eaf3fc` / `#0c2138` | `#0b3a6b` / `#d3e7fb` |

> 论坛常用映射：**精华**用 success（绿），**置顶**用 primary（蓝）或 warning 描边强调，**新帖/未读**用 primary，**警告/违规**用 danger，**官方公告/提示**用 info。

---

## 5. 字体

- **Sans（UI / 正文）**：`"Inter", -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Source Han Sans SC", ...`
  Inter 字形中性、可读性高、数字友好、x-height 大；中文优雅回退到苹方 / 思源黑体 / 微软雅黑——长文久读不累。
- **Serif（少量标题点缀，可选）**：`"Source Serif 4", Georgia, "Songti SC", serif`。
- **Mono（楼层号 / 积分 / 时间戳 / 代码块）**：`"JetBrains Mono", ui-monospace, "SF Mono", Menlo, ...`。

**比例尺**（字号）：`xs 12 · sm 13 · base 14 · md 16 · lg 20 · xl 24 · 2xl 32 · 3xl 48`（px）。论坛正文基准 14px；**帖子楼层正文建议用 md 16px** 提升久读舒适度。

**字重**：`400` 正文 / `500` 强调与按钮 / `600` 标题与主题帖标题。**不上 700+**，保持清爽克制。

**字距**：标题略紧 `--ds-tracking-tight: -0.01em`（仅作用于拉丁字母观感更佳）；正文 `0`。

**行高**：`tight 1.25`（标题 / 列表项）/ `normal 1.55`（UI / 元信息）/ `relaxed 1.75`（楼层正文长文）。

**中文适配**：中文不收紧字距；**楼层正文行高用 relaxed（1.75）**，配 md 16px 字号，长帖久读最舒适；列表区用 normal 求密度。measure（每行字符）控制在 66–80 利阅读。

---

## 6. 间距与布局

- **比例尺**（4px / 8pt 基）：`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`px，对应 `--ds-space-1 ~ 12`。
- **节奏**：列表行内 8–12px、列表项间 0（靠分隔线）、卡片内 16–24px、楼层间 16px、区块间 32–40px。
- **密度双轨**：**列表区紧凑**（版块/主题帖列表，行高 ~52–64px 可扫读）；**正文区宽松**（楼层卡内边距 24px、正文行高 1.75）。
- **容器宽**：论坛主内容区 `max-width: 1100–1200px`；帖子阅读区正文 `680–760px`。
- **栅格**：PC 三栏布局（左导航/分类 · 中内容 · 右侧栏：热门/统计/签到），12 列 gutter 24px；移动端单栏 + 底部导航。
- **断点**：sm `401px` · md `601px` · lg `961px` · xl `1200px` · 2xl `1400px`。

### 响应式 / 移动端

- **核心断点 `≤640px`**（手机）：所有两栏（`cols` / `grid2`）收为单列；顶栏隐藏主导航与搜索框（移交底部 Tab / 搜索图标）；区块间距、容器内边距各降一档（`space-9→space-4` 等）。
- **版块 / 分类列表**：移动端收掉「帖数/主题数」「最新回复」两个次要列，仅留 版块图标（缩至 40×40）+ 版块名 + 简介；简介解除单行省略、允许换行。
- **主题帖列表**：收掉右侧「回复数/浏览数」「最后回复」列，标题允许两行换行（不省略），回复数下沉进元信息行。移动端推荐改用**卡片式**主题项（头像 + 标题 + 元信息一卡），见 preview.html「移动端 Mobile」块。
- **帖子楼层**：左侧作者栏（PC 竖排 ~140px）在 `≤640px` 转为**横排顶条**（头像 + 用户名 + 等级 + 积分右对齐），正文占满整宽，阅读不被窄栏挤压。
- **触控**：移动端交互目标保持 ≥ 44×44px（点赞/收藏/头像钮加 padding），底部 Tab 高度足够点按。
- **移动框架示意**：preview.html 新增约 375px 手机框，含 顶栏（logo + 搜索 + 通知角标 + 头像）+ 面包屑 + 卡片式主题帖列表 + 楼层 + 底部 Tab，全部走 `var(--ds-*)`、亮暗一致。

```css
@media (max-width: 640px) {
  .cols, .grid2 { grid-template-columns: 1fr; } /* 两栏收一列 */
  .nav { display: none; }                        /* 主导航移交底部 Tab */
  .fstat, .flast, .tcount, .tlast { display: none; } /* 列表收次要列 */
  .post { flex-direction: column; }              /* 楼层作者栏转横排顶条 */
}
```

---

## 7. 圆角 / 阴影 / 描边

**圆角**（比企业风放大一档，更轻盈友好）：

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `7px` | 按钮 / 输入框 / 标签 / 徽章 |
| `--ds-radius-md` | `12px` | 卡片 / 版块卡 / 楼层卡 / 菜单 / 弹层 |
| `--ds-radius-lg` | `18px` | 大表面 / 模态 / 个人中心头图卡 |
| `--ds-radius-full` | `9999px` | 药丸标签 / 头像 / 开关 / 等级胶囊 |

**阴影**（清新低阴影，带极淡蓝调辉光）：

| Token | 用途 |
|---|---|
| `--ds-shadow-sm` | 抬起卡片 / 按钮 hover / 列表项 hover |
| `--ds-shadow-md` | 下拉 / 通知面板 / 浮卡（蓝调辉光极淡） |
| `--ds-shadow-lg` | 模态 / 发帖弹层 |

> 暗色下阴影改用更深黑色不透明度（`.5–.75`），避免暗背景上阴影不可见。

**描边**：论坛界面以**细描边轻影**为主——版块卡 / 楼层卡 / 列表用 `1px solid var(--ds-border)`，需要层级再叠 `shadow-sm`，**不要边框 + 重阴影双管齐下**。列表分隔线统一用 `--ds-border`。

---

## 8. 动效

- **时长**：`fast 150ms`（hover / 颜色 / 点赞）· `base 200ms`（展开楼中楼 / 切 tab）· `slow 250ms`（弹层 / 模态 / 通知面板）。**不超过 250ms**。
- **曲线**：`--ds-ease: cubic-bezier(.22,.61,.36,1)`（ease-out），**无弹跳、无回弹**——清爽要稳。
- **典型过渡**：列表项 hover 底色 150ms、卡片 hover 抬起 + 阴影 200ms、楼中楼展开高度 200ms、通知面板淡入 + 微位移 200ms、点赞数字微跳（仅透明度/缩放，节制）。
- **可减弱动效**：尊重 `prefers-reduced-motion: reduce`——关闭非必要位移 / 缩放，仅保留瞬时透明度变化。

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

---

## 9. 组件规格（通用）

> 所有组件均走 `var(--ds-*)`。高度基线：小 32 / 中 40 / 大 48px。论坛专属组件见 §13。

### 按钮 Button

| 变体 | 底 | 文字 | 边框 | 用途 |
|---|---|---|---|---|
| **Primary（实底蓝）** | `--ds-primary` | `--ds-primary-fg` | 无 | 发帖 / 回复 / 主操作（每屏唯一） |
| **Secondary（描边）** | `--ds-bg` | `--ds-fg` | `1px --ds-border-strong` | 次操作（编辑 / 引用） |
| **Tertiary（幽灵）** | 透明 | `--ds-fg-muted` | 无 | 弱操作（点赞 / 收藏 / 工具栏） |
| **Danger** | `--ds-danger` | `#fff` | 无 | 删帖 / 封禁等危险操作 |

- 尺寸：sm `h32 / px12 / text-sm` · md `h40 / px16 / text-base` · lg `h48 / px20 / text-md`。圆角 `--ds-radius-sm`(7px)，字重 `500`。
- 状态：hover → primary 用 `--ds-primary-hover`，secondary/tertiary 用 `--ds-bg-subtle` 底；active → `--ds-primary-active`；focus-visible → `box-shadow: var(--ds-focus-ring)`；disabled → `opacity:.5; cursor:not-allowed`。

### 输入框 Input / Textarea / Select

- 高 40px（md），内边距 `0 12px`，圆角 7px，底 `--ds-bg`，边框 `1px --ds-border-strong`，文字 `--ds-fg`，占位 `--ds-fg-subtle`。
- focus → 边框转 `--ds-primary` + `box-shadow: var(--ds-focus-ring)`；error → 边框 `--ds-danger` + 下方 `--ds-danger` 辅助文字；disabled → 底 `--ds-bg-sunken`。

### 卡片 Card

- 底 `--ds-bg-elevated`，边框 `1px --ds-border`，圆角 `--ds-radius-md`(12px)，内边距 `--ds-space-6`(24px)，阴影 `--ds-shadow-sm`。
- hover（可点击卡）→ 阴影升 `--ds-shadow-md`，过渡 200ms。

### 徽章 / 标签 Badge

- 高 20–24px，内边距 `0 8px`，圆角 `--ds-radius-full`，字号 `text-xs / 500`。语义色用 `*-bg` 作底、`*-fg` 作字。

### 提示条 Alert

- 内边距 `--ds-space-4`，圆角 `--ds-radius-md`，左侧 3px 主色条或图标。四语义：底 `*-bg`、文字 `*-fg`、强调线/图标 `*`。

### 导航 Navigation

- 顶栏：高 56–64px，底 `--ds-bg-elevated`，下边框 `1px --ds-border`，左 logo + 中导航 + 右（搜索/通知/头像）。
- 导航项：默认 `--ds-fg-muted`，hover `--ds-fg`，当前项 `--ds-fg` + 底部 2px `--ds-primary` 指示条。
- Tab（最新/热门/精华）：当前项 `--ds-primary` 文字 + 2px 下划线；其余 `--ds-fg-muted`。

### 表格 Table

- 表头底 `--ds-bg-subtle`，文字 `--ds-fg-muted / text-sm / 600`；行分隔线 `1px --ds-border`，hover 行底 `--ds-bg-subtle`；数字列 `font-mono` 右对齐。

---

## 10. 可访问性

- **对比度**：满足 WCAG **AA**——正文 ≥ 4.5:1，大字 / 图标 ≥ 3:1。`fg`/`fg-muted`/`fg-subtle` 在对应背景均达标；状态 `*-fg` 在 `*-bg` 上达标；社区蓝 `#1a73d1` 白字 ≈ 4.75:1、accent `#0a8290` 白字 ≈ 4.56:1（均 AA 通过）。
- **焦点**：所有可聚焦控件 `focus-visible` 显示 `var(--ds-focus-ring)`（底环 + 社区蓝环），不靠颜色单独传达。
- **触控目标**：交互元素最小 **44×44px**（移动端点赞/收藏/头像钮加 padding）。
- **可减弱动效**：尊重 `prefers-reduced-motion`，关闭非必要位移 / 缩放。
- **不只靠颜色**：置顶配 置顶 SVG 图标 + 文案、精华配 文字标记、未读配 圆点 + 加粗，danger 配 警告 SVG 图标 + 文案——色盲友好。Radix 基座保证键盘 / 读屏可达。

---

## 11. Do / Don't

**Do**
- 列表区求密度可扫读、楼层正文区求宽松可久读——两种节奏分明。
- 社区蓝只点在主操作 / 链接 / 选中 / 未读 / 置顶强调，其余靠中性灰阶。
- 卡片 / 楼层 / 列表用细描边 + 低阴影，需要层级再升阴影。
- 楼层号 / 积分 / 时间用 `font-mono` 对齐，元信息用 `--ds-fg-muted`。
- 置顶 / 精华 / 未读除颜色外都加图标或文字标记，色盲友好。

**Don't**
- 别把社区蓝铺满界面——蓝是锚点不是底色，铺多了显廉价、失去清爽。
- 别用纯黑 `#000` 当文字、别用 0 圆角硬棱角（太冷，不友好）。
- 别给版块卡 / 楼层卡同时上重边框 + 重阴影，显脏。
- 别让列表正文行高过密（< 1.4）伤久读，也别让扫读列表行高过松失密度。
- 别上弹跳 / 回弹动效、别超 250ms、别硬编码 hex、别堆 emoji 当功能图标。

---

## 12. 如何接入

**1) 引入 tokens.css**
```html
<link rel="stylesheet" href="./projects/xiunobbs/tokens.css" />
```
```js
import "./projects/xiunobbs/tokens.css"; // 或打包入口
```

**2) 用变量（不硬编码）**
```css
.btn-post {
  background: var(--ds-primary); color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm); height: 40px; padding: 0 var(--ds-space-4);
  font: var(--ds-weight-medium) var(--ds-text-base)/1 var(--ds-font-sans);
  transition: background var(--ds-dur-fast) var(--ds-ease);
}
.btn-post:hover { background: var(--ds-primary-hover); }
.btn-post:focus-visible { box-shadow: var(--ds-focus-ring); outline: none; }
```

**3) 切换暗色（项目硬性要求，prefers + 手动）**
```js
document.documentElement.dataset.theme = "dark"; // 暗
document.documentElement.dataset.theme = "";      // 亮
// 或 class：document.documentElement.classList.toggle("dark")
```

**4) Tailwind（Inertia 2 + React 19 + Tailwind 4 默认栈）引 preset**
```js
// tailwind.config.js
module.exports = {
  presets: [require("./projects/xiunobbs/tailwind.preset.js")],
  content: ["./resources/**/*.{tsx,ts,jsx,js,blade.php}"],
};
```
之后即可：`class="bg-bg-elevated text-fg border border-border rounded-md shadow-sm"`、`class="bg-primary text-primary-fg hover:bg-primary-hover"`。

---

## 13. 论坛专属组件（xiunobbs 核心）

> 论坛是本系统的主场。以下组件覆盖 Xiuno 心智的全部场景，全部走 `var(--ds-*)`，亮暗自动切换。

### 13.1 版块 / 分类列表 Forum / Category List

- **分类组（Category）**：标题 `text-md / 600 / --ds-fg`，可折叠；底 `--ds-bg-subtle`，上下内边距 12px。
- **版块行（Forum row）**：底 `--ds-bg-elevated`，分隔 `1px --ds-border`，行高 ~64px。左：48×48 版块图标（圆角 md）+ 版块名(`text-base/600`) + 简介(`text-sm/--ds-fg-muted`)。中：**帖数 / 主题数**（`font-mono / --ds-fg-muted`，两段竖排或并排）。右：**最新回复**（最后回帖标题(单行省略, `--ds-accent` 链接) + 头像 + 用户名 + 相对时间(`text-xs/--ds-fg-subtle`)）。
- **有新帖标记**：版块图标左上角 `--ds-primary` 小圆点或图标着色 `--ds-primary`。
- hover：行底转 `--ds-bg-subtle`，过渡 150ms。

### 13.2 主题帖列表 Thread List

- **行结构**（高 ~56–60px，可扫读）：左侧作者头像 36×36（圆角 full）→ 标题区 → 右侧元信息。
- **标题**：`text-base / 500 / --ds-fg`，单行省略；hover 转 `--ds-primary`。已读标题可降为 `--ds-fg-muted`，未读保持 `--ds-fg` + `600`。
- **置顶**：标题前置 置顶 SVG 图标（实心五角星，`--ds-primary` 或 `--ds-warning`）+「置顶」药丸标签（primary/warning -bg 底）；置顶行可加极淡 `--ds-info-bg` 行底。
- **精华**：标题前/后「精华」标签，用 success（`--ds-success-bg` 底 + `--ds-success-fg` 字）+ 可选 菱形/勋章 SVG 图标。
- **标签**：标题后跟 1–3 个标签药丸（见 13.4）。
- **元信息（右侧，`--ds-fg-muted`）**：作者名 + 发帖时间｜**回复数 / 浏览数**（`font-mono` 对齐）｜**最后回复**（用户名 + 相对时间，`--ds-fg-subtle`）。
- **状态标记**：未读=标题加粗 + 行首 `--ds-primary` 竖条；锁定=锁 SVG 图标 + 文案标记；热帖=回复数着色 `--ds-primary`。

### 13.3 帖子楼层 Post / Floor

- **楼层卡**：底 `--ds-bg-elevated`，边框 `1px --ds-border`，圆角 `--ds-radius-md`，内边距 24px，楼层间距 16px。
- **左栏（作者区，宽 ~140px）**：头像 56×56（圆角 md）+ 用户名(`--ds-fg/600`) + 等级胶囊 + 头衔 + 关键积分（`font-mono`）。
- **右栏（内容区）**：
  - **顶条**：楼主标「楼主 / LZ」药丸（`--ds-primary-bg` 底）+ **楼层号**（`#1F / #2F`，`font-mono / --ds-fg-subtle`，右对齐）+ 发帖时间(`--ds-fg-subtle`)。
  - **正文**：字号 **md 16px**、行高 **relaxed 1.75**、`--ds-fg`，measure 66–80 字符；引用块用 `--ds-bg-sunken` 底 + 左 3px `--ds-border-strong`。
  - **签名档**：上方 `1px --ds-border` 分隔，`text-sm / --ds-fg-subtle`，克制展示。
  - **操作行**：点赞 / 回复 / 引用 / 收藏 / 举报，tertiary 幽灵按钮，`--ds-fg-muted`，hover `--ds-primary`；点赞数 `font-mono`。
- **楼中楼 Sub-reply**：嵌在楼层底部，底 `--ds-bg-sunken`，圆角 md，缩进；每条：头像 24×24 + 用户名(`--ds-accent`，回复对象用「→ 某某」) + 内容(`text-sm`) + 时间(`text-xs/--ds-fg-subtle`)。展开/收起过渡 200ms。

### 13.4 标签 Tag

- 药丸：圆角 full，高 22px，内边距 `0 10px`，`text-xs / 500`。
- 默认标签：底 `--ds-bg-subtle`，字 `--ds-fg-muted`，hover 底 `--ds-info-bg` + 字 `--ds-primary`。
- 强调/热门标签：底 `--ds-info-bg`，字 `--ds-info-fg`。前缀可加 `#`。

### 13.5 用户徽章 / 等级 / 积分 / 勋章

- **等级胶囊 Level**：圆角 full，`text-xs / 600`，底 `--ds-primary-bg`（即 info-bg），字 `--ds-primary`（如「Lv.6」）。高等级可用渐变描边或 `--ds-accent`。
- **角色徽章**：管理员=danger 系、版主=warning 系、官方=primary 系、VIP=accent 系，统一 `*-bg` 底 + `*-fg` 字。
- **积分 Credits**：`font-mono / --ds-fg`，配小图标 + 单位文案（金币/经验/威望），多币种横排，数值右对齐。
- **勋章 Medal**：32×32 圆/方图标网格，hover 显 tooltip（名称+获得条件），未获得勋章降透明度 + 灰度。

### 13.6 签到 Check-in

- 卡片：底 `--ds-bg-elevated`，含「连续签到 N 天」(`font-mono`) + 主操作签到按钮（primary，已签到转 secondary + 对勾 SVG 图标 +「已签到」disabled 态）。
- 本周日历点：7 格圆点，已签 `--ds-primary` 实心，未签 `--ds-border` 空心，今日描边 `--ds-primary`。

### 13.7 分页 Pagination

- 页码按钮：32×32，圆角 sm，`font-mono / text-sm`，默认底透明 + 字 `--ds-fg-muted`，hover 底 `--ds-bg-subtle`，**当前页**底 `--ds-primary` + 字 `--ds-primary-fg`。
- 前/后/跳转：secondary 描边按钮；省略号 `--ds-fg-subtle`。论坛常配「页 X / Y」与跳页输入。

### 13.8 发帖编辑器工具条 Editor Toolbar

- 工具条（Tiptap）：底 `--ds-bg-subtle`，下边框 `1px --ds-border`，圆角顶部 md。
- 工具按钮：32×32 幽灵按钮，icon `--ds-fg-muted`，hover 底 `--ds-bg` + icon `--ds-fg`，**激活态**（如加粗已开）底 `--ds-info-bg` + icon `--ds-primary`。
- 分组：文本格式 / 列表引用 / 链接图片 / 表情附件 / 代码 —— 组间 `1px --ds-border` 竖分隔。
- 编辑区：底 `--ds-bg`，正文 md 16px / 行高 relaxed，focus 整框 `--ds-focus-ring`。

### 13.9 通知 / 消息 Notification

- 顶栏铃铛：未读时角标 `--ds-danger` 实心数字徽标（`font-mono / text-xs`）。
- 通知面板：底 `--ds-bg-elevated`，圆角 md，阴影 md，宽 ~360px。
- 通知项：未读底 `--ds-info-bg` + 行首 `--ds-primary` 圆点；已读底透明。结构：头像 + 行为文案（「@你」「回复了你」「点赞」高亮 `--ds-primary`）+ 摘要(`--ds-fg-muted`) + 相对时间(`--ds-fg-subtle`)。
- 私信/消息：列表项左头像 + 名称 + 最后一条摘要(单行省略) + 时间 + 未读数药丸。

### 13.10 个人中心卡片 Profile Card

- **头图卡**：圆角 lg，顶部 banner（可主题色渐变）+ 浮起头像 80×80（圆角 full + `2px --ds-bg` 描边）+ 用户名(`text-lg/600`) + 等级胶囊 + 头衔 + 签名。
- **数据条**：主题数 / 回帖数 / 粉丝 / 积分，`font-mono` 数值 + `text-xs/--ds-fg-muted` 标签，等分横排，分隔 `1px --ds-border`。
- **勋章墙**：13.5 勋章网格。
- **Tab**（TA的主题 / 回复 / 收藏 / 关注）：当前项 `--ds-primary` 下划线，复用 §9 Tab。

### 13.11 面包屑 Breadcrumb（版块路径 · 论坛必备）

- 用途：表达「论坛首页 › 分类 › 版块 › 主题」的层级路径，论坛导航必备。
- 容器：底 `--ds-bg-subtle`，边框 `1px --ds-border`，圆角 md，内边距 `10px 16px`，`text-sm`。
- 节点：链接项 `--ds-fg-muted`，hover 转 `--ds-primary` + `--ds-info-bg` 浅底；分隔符 `›` 用 `--ds-fg-subtle`、`user-select:none`；**当前页**节点 `--ds-fg / 600`、无链接、带 `aria-current="page"`。
- 移动端：可只保留「首页 › 当前版块」两级缩略，避免换行拥挤。

### 13.12 下拉菜单 Dropdown（帖子操作）

- 用途：帖子/楼层的「更多操作」（引用、收藏、复制链接、置顶、举报/删除）。
- 面板：底 `--ds-bg-elevated`，边框 `1px --ds-border`，圆角 md，阴影 `--ds-shadow-md`，内边距 `--ds-space-2`，最小宽 ~188px。
- 菜单项：内边距 `8px 10px`，圆角 sm，文字 `--ds-fg` + 前置 `--ds-fg-subtle` 图标。
  - **hover**：底 `--ds-bg-subtle`，文字与图标转 `--ds-primary`。
  - **选中态**（如「已收藏」）：底 `--ds-info-bg`，文字/图标 `--ds-primary`。
  - **危险项**（举报/删除）：文字 `--ds-danger`，hover 底 `--ds-danger-bg`。
- 分隔线：`1px --ds-border`，分隔危险操作组。

### 13.13 工具提示 Tooltip

- 用途：勋章获得条件、图标按钮释义、被截断文本全称等。
- 气泡：底 `--ds-fg`、字 `--ds-bg`（深底浅字，反衬高对比，AA 达标），`text-xs / 500`，内边距 `6px 10px`，圆角 sm，阴影 md，带指向小三角（`border-top-color: --ds-fg`）。
- 触发：hover / focus 显示；触屏长按显示。`white-space:nowrap` 保持单行，过长内容换用 Popover。

### 13.14 分页 Pagination（帖子列表翻页 · 论坛重点）

- 论坛主场翻页控件。页码按钮 32×32，圆角 sm，`font-mono / text-sm`。
  - 默认：底透明，字 `--ds-fg-muted`；**hover** 底 `--ds-bg-subtle`。
  - **当前页（激活）**：底 `--ds-primary`，字 `--ds-primary-fg`，带 `aria-current="page"`。
- 前/后导航：secondary 描边按钮（`--ds-bg` 底 + `--ds-border-strong` 边）；**首/末页禁用态** `opacity:.45 + cursor:not-allowed`。
- 省略号 `…` 用 `--ds-fg-subtle`；常配「跳至 [输入] / Y 页」跳页框（`field`，宽 ~56px、居中、`font-mono`）。

### 13.15 模态框 Modal

- 用途：删帖确认、举报、发帖弹层等需阻断的操作。
- 遮罩 Scrim：`rgba(10,18,30,.42)` 半透明 + 极淡模糊，覆盖全屏。
- 弹层：底 `--ds-bg-elevated`，边框 `1px --ds-border`，圆角 `--ds-radius-lg`，阴影 `--ds-shadow-lg`，最大宽 ~440px。
  - **头**：标题 `text-md / 600` + 右上关闭钮（hover 底 `--ds-bg-subtle`）；含 `role="dialog" aria-modal="true" aria-labelledby`。
  - **体**：`text-sm / --ds-fg-muted`，关键词可用 `--ds-fg` 强调。
  - **脚**：右对齐操作（取消 secondary + 主/危险操作），底 `--ds-bg-subtle` + 上边框分隔。
- 动效：淡入 + 轻微上移（≤ slow 250ms，无弹跳）；尊重 `prefers-reduced-motion`。

### 13.16 Toast 通知

- 用途：操作结果的非阻断轻提示（发帖成功、设精华、接近上限、提交失败）。
- 卡片：底 `--ds-bg-elevated`，边框 `1px --ds-border` + **左侧 3px 语义色条**，圆角 md，阴影 `--ds-shadow-lg`，最大宽 ~360px。
  - 四语义：成功 `--ds-success` / 信息 `--ds-primary` / 警告 `--ds-warning` / 错误 `--ds-danger`（左条 + 图标着色）。
  - 结构：语义图标 + 标题(`--ds-fg/600`) + 描述(`--ds-fg-muted/text-sm`) + 右侧关闭钮。
- 行为：通常右上/右下堆叠，自动消失（成功 ~3s，错误更久或需手动关），淡入 + 微位移。

### 13.17 步进器 Stepper

- 用途：分页跳页步进、数量/楼层定位、设置项数值微调。
- 容器：横向胶囊，边框 `1px --ds-border-strong`，圆角 sm，整体 38px 高。
- 加减钮：36×38，字 `--ds-fg-muted`；**hover** 底 `--ds-bg-subtle` + 字 `--ds-primary`；**active** 底 `--ds-info-bg` + 字 `--ds-primary-active`；**focus-visible** `--ds-focus-ring`；**禁用**（到边界）`opacity:.4 + cursor:not-allowed`。
- 数值：居中 `font-mono / text-base / --ds-fg`，左右各 `1px --ds-border` 分隔。

---

*XiunoNext · xiunobbs Kit · 基于企业风 + xiunobbs 定制（社区蓝） · 延续性优先 · 变量契约见 `_base/KIT-TEMPLATE.md`*
