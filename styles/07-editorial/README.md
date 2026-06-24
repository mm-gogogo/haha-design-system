# Editorial · 极简 editorial 风（阅读）

> 排版优先、衬线为骨、暖纸为底、大留白大行高的阅读系统。给阅读站、博客、文档、内容社区、长文——一句话：**让长文读起来舒服**。

气质关键词：克制、优雅、安静。界面退到背景里，文字与留白才是主角。强调色一年只出场几次，分隔靠线与空白而非阴影。

---

## 1. 一句话气质

暖纸色基底 + 衬线正文 + 无衬线控件的「对比轴」，大行高大留白，单一赭橙强调。读三千字不累眼，截图发出去像一本好书的内页。

---

## 2. 设计哲学 / 性格

继承 Geist 基底的**语义分层 + 固定比例尺 + 状态色成对 + 双层焦点环 + 明暗双主题**骨架，但气质做了五处改写：

1. **排版优先（Typography first）**——正文不是装饰，是产品。正文用衬线、字号偏大（17px 起）、行高拉到 1.85（中文需要），阅读容器锁 ~680px。
2. **对比轴而非单一字族**——Geist 全 Geist Sans；这里正文/标题走衬线，控件/元信息/数据走无衬线，靠字族对比建立「内容 vs 界面」的层级。
3. **暖纸代替冷白**——不要 `#ffffff` 的冷白与 Geist 中性灰。基底是 `#faf8f3` 暖纸、文字是 `#2b2722` 暖墨，长时间阅读更柔和。
4. **靠留白与分隔线，不靠阴影**——阴影几乎不可见（仅浮层一点点）。层级用空白、暖色块底、`1px` 分隔线表达。
5. **单一克制强调**——赭橙 `#b4541e` 只用于主操作、链接、当前选择、首字下沉。其余一律墨与纸。

---

## 3. 何时用 / 何时别用

**适合**
- 阅读站、个人/团队博客、技术文档、知识库
- 内容社区、newsletter、杂志型站点、长文专栏
- 需要「安静、可信、耐读」气质的品牌内容页

**不适合**
- 数据密集的 B 端后台、仪表盘（密度太低、衬线不利于扫读 → 用 enterprise）
- 强营销转化的落地页、促销活动（克制感会削弱冲击力）
- 游戏/潮玩/儿童向 C 端（太素 → 用 cute / pixel）
- 暗黑科技、霓虹炫技场景（→ 用 dark-tech）

---

## 4. 颜色

单一克制强调 + 暖纸中性。亮色是日间纸面，暗色是夜读模式。所有正文级取值满足 WCAG AA（≥4.5:1）。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#faf8f3` | `#1a1714` | 纸 · 主背景 |
| `--ds-bg-subtle` | `#f3efe6` | `#221e1a` | 次背景 · 区块/分组底 |
| `--ds-bg-elevated` | `#fffdf8` | `#2a2520` | 浮层/卡片（略亮于纸） |
| `--ds-bg-sunken` | `#ece7db` | `#15110e` | 凹陷 · 输入槽/代码块 |
| `--ds-fg` | `#2b2722` | `#ece5d8` | 暖墨 · 主文字 |
| `--ds-fg-muted` | `#5c554a` | `#b3a994` | 次要文字 · 元信息 |
| `--ds-fg-subtle` | `#6f6757` | `#8f846f` | 占位/弱文字（≥4.5:1） |
| `--ds-fg-on-accent` | `#fdf6ef` | `#1a1714` | 落在强调色上的文字 |
| `--ds-border` | `#e5dfd2` | `#3a342c` | 常规描边/分隔线 |
| `--ds-border-strong` | `#d4ccbb` | `#524a3e` | 强描边 |

### 品牌与强调（强调色梯度）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#b4541e` | `#d97746` | 赭橙主操作色 |
| `--ds-primary-hover` | `#9c4517` | `#e2885a` | hover |
| `--ds-primary-active` | `#823609` | `#c9663a` | active/pressed |
| `--ds-primary-fg` | `#fdf6ef` | `#1a1714` | 主操作上的文字 |
| `--ds-accent` | `#3f6f5f` | `#7bae9c` | 墨绿次强调/链接 |
| `--ds-accent-fg` | `#fdf6ef` | `#112019` | accent 上的文字 |

> 强调色梯度（亮）：`#823609`(active 最深) → `#9c4517`(hover) → `#b4541e`(default) → 暗色提亮到 `#d97746`。链接用墨绿 accent 与赭橙 primary 分工，避免满屏一种橙。

### 语义状态（低饱和：主色 + 浅暖底 + 底上深字）

| 语义 | 主色（亮/暗） | -bg（亮/暗） | -fg（亮/暗） |
|---|---|---|---|
| success | `#4a7c59` / `#7bb389` | `#e9f1e8` / `#1a2c1f` | `#244430` / `#d7ecdb` |
| warning | `#b8860b` / `#d8a93a` | `#f7efd8` / `#2e2408` | `#5e4404` / `#f6e8c2` |
| danger | `#b03a2e` / `#e07a6c` | `#f7e5e0` / `#341511` | `#5e1a13` / `#f7ddd6` |
| info | `#3f6f8f` / `#6fa3c2` | `#e4eef3` / `#122631` | `#1d3a4c` / `#d6e8f1` |

---

## 5. 字体

**核心是「对比轴」：正文衬线 + UI 无衬线。** 这是本风格最该味儿的地方。

- `--ds-font-serif`（正文/标题，主角）：`"Source Han Serif SC","Noto Serif SC","Songti SC",Georgia,serif`——衬线承载阅读体验，中文走思源宋/宋体。
- `--ds-font-sans`（控件/元信息/数据）：`"Inter","PingFang SC",sans-serif`——按钮、标签、表单、日期、作者署名等界面文字用无衬线，与正文拉开层级。
- `--ds-font-mono`（引用代码）：`"JetBrains Mono",ui-monospace,Menlo,monospace`。

**比例尺**（字号偏大可读，标题拉开）

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-text-xs` | 13px | 脚注/版权（sans） |
| `--ds-text-sm` | 14px | 元信息/标签（sans） |
| `--ds-text-base` | 17px | **正文**（serif） |
| `--ds-text-md` | 19px | 导语/大正文（serif） |
| `--ds-text-lg` | 22px | h3 |
| `--ds-text-xl` | 28px | h2 |
| `--ds-text-2xl` | 38px | h1 |
| `--ds-text-3xl` | 52px | 大标题/封面 |

**字重**：`normal 400 / medium 500 / bold 600`（衬线无需过重，600 即足）。

**字距**：标题略紧 `--ds-tracking-tight: -0.015em` 收敛大字的松散；正文 `0`。标题加 `text-wrap: balance` 避免末行孤字，正文加 `text-wrap: pretty`。

**行高（中文适配关键）**：`relaxed 1.85` 给正文，`normal 1.55` 给中等文本，`tight 1.25` 给大标题。中文方块字需要比英文更大的行距，1.85 是阅读舒适区下限。

---

## 6. 间距与布局

4px 基比例尺，但**用得松**——editorial 的高级感一半来自留白。

`--ds-space-1..12` = `4,8,12,16,20,24,32,40,48,64,80,96`px。

- **节奏**：段落间距 24px（space-6）；标题与下文 16px、与上文 40px（h2 上 space-8）；区块间 64–96px（space-10/12）。
- **阅读容器**：正文列宽锁 **~680px（40rem）**，每行 ~32–40 汉字，超过会增加回扫成本。
- **栅格**：内容页通常单列居中；列表/卡片页 2–3 列，gap 32px（space-7）起。
- **页边距**：桌面正文左右留白宽裕（容器外大量空白即设计），移动端 20–24px。

### 响应式（移动端）

断点取 **≤640px**（手机/窄屏），收敛策略：

- **多列收一列**：色板、状态卡、卡片、表单、文章翻页等 `grid` 在 ≤640px 全部 `grid-template-columns: 1fr`，避免横向挤压。
- **阅读容器满宽留边**：桌面锁 ~680px 的 `.article` / `.lede` 在移动端解除上限（`max-width: 100%`），左右靠页边距 **20px（space-5）** 留边——满宽但不贴边。
- **移动端字号**：正文 `--ds-text-base` 维持 **17px**、行高仍 **1.85**（阅读体验不退化）；仅大标题降档防溢出——h1 `2xl(38)→xl(28)`、h2 `xl(28)→lg(22)`。字号比例尺演示行改为换行排布。
- **顶栏 / 间距**：顶栏内边距收到 16px、控件间距收紧；区块间距由 80px 降到 48px（space-9），页面上下内边距同步收敛。
- **浮层**：Toast 由右下定位改为左右贴边（`left/right: 16px`）+ 底部，宽度自适应。
- **移动端阅读视图**：`.phone`（~375px 框）演示真实手机阅读——含阅读顶栏（目录/字号/夜读）、文章排版（kicker + serif 标题 + sans 署名 + 正文）与目录列表（当前项 `--ds-primary` 高亮）。

---

## 7. 圆角 / 阴影 / 描边

- **圆角（温和）**：`sm 6px`（按钮/输入/标签）、`md 10px`（卡片/弹层）、`lg 14px`（大表面/图片）、`full 9999px`（药丸/头像）。不追求大圆角的「软萌」，温和即可。
- **阴影（极轻）**：`sm` 几乎看不见、`md` 浮层一点点、`lg` 模态稍多。editorial 不靠阴影建立层级——靠留白、暖色块底、分隔线。
- **描边**：`1px solid var(--ds-border)` 的暖灰分隔线是本风格的主力分层手段（章节分隔、表格行线、卡片边）。需要强调时用 `--ds-border-strong`。

---

## 8. 动效

温柔、克制、无弹跳——阅读场景拒绝跳脱。

- **曲线**：`--ds-ease: cubic-bezier(.22,.61,.36,1)`（ease-out，收尾平滑）。
- **时长**：`fast 160ms`（hover/focus）、`base 240ms`（主过渡）、`slow 300ms`（主题切换/展开）。
- **典型过渡**：链接下划线渐显、按钮底色渐变、卡片 hover 边色微变、亮暗主题切换全局过渡。
- **prefers-reduced-motion**：必须尊重——

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

---

## 9. 组件规格

控件用 `--ds-font-sans`，正文相关用 `--ds-font-serif`。触控目标 ≥44px。

### 按钮（高 40px / 内边距 0 16px / radius sm / font-sans / weight medium）

| 变体 | 底 | 文字 | 边 | hover |
|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | 无 | 底→`--ds-primary-hover` |
| secondary | `--ds-bg-elevated` | `--ds-fg` | `1px --ds-border-strong` | 底→`--ds-bg-subtle` |
| tertiary | 透明 | `--ds-primary` | 无 | 底→`--ds-bg-subtle` |
| danger | `--ds-danger` | `#fff` | 无 | 加深 |

尺寸：小 32px / 中 40px / 大 48px（内边距随之 0 12 / 0 16 / 0 24）。focus 用 `--ds-focus-ring`。disabled 降透明度 .5 + `cursor:not-allowed`。

### 输入框 / textarea（高 40px / 内边距 0 12px / radius sm / font-sans）
底 `--ds-bg-elevated`，边 `1px --ds-border`，文字 `--ds-fg`，占位 `--ds-fg-subtle`。focus：边→`--ds-primary` + `--ds-focus-ring`。错误态：边→`--ds-danger`。

### 卡片（radius md / 内边距 24px / 边 1px --ds-border）
底 `--ds-bg-elevated`，阴影 `--ds-shadow-sm`（或仅靠边线）。hover 边→`--ds-border-strong`。卡片标题用 serif，元信息用 sans muted。

### 徽章/标签（高 22px / 内边距 0 8px / radius full 或 sm / font-sans / 13px）
中性：底 `--ds-bg-subtle` 文字 `--ds-fg-muted`。语义：底 `*-bg` 文字 `*-fg`。文章 tag 推荐 `radius-full` 药丸。

### 提示条 alert（radius md / 内边距 16px / 前置语义 SVG 图标 + 1px 全描边）
底 `*-bg`，文字 `*-fg`，`1px` 全框描边（语义色与 border 混色，克制不抢眼，无粗侧边色条）。行首一枚语义 SVG 图标（成功对勾 / 警告三角 / 危险叉 / 信息 i，图标取语义主色）。标题 sans medium、正文可 serif。四语义：success / warning / danger / info。

### 导航（阅读顶栏）
高 56–64px，底 `--ds-bg`（或半透明 + blur），底边 `1px --ds-border`。左 logo（serif），右控件区（sans）：**字号切换（A− / A / A＋）+ 主题切换（日/夜）+ 目录**。当前项用 `--ds-primary` 下划线或文字色。tab：未选 `--ds-fg-muted`，选中 `--ds-fg` + 下方 2px `--ds-primary`。

### 面包屑 Breadcrumb（font-sans / text-sm）
水平排列，链接 `--ds-fg-muted`、hover → `--ds-primary` + 渐显下划线；分隔符 `/` 用 `--ds-fg-subtle`；当前页 `aria-current="page"`、色 `--ds-fg` 不可点。造型靠间距与弱色，无背景块。

### 分页 Pagination（font-sans）
- **页码分页**：每格 ≥38px、`1px --ds-border` + `radius-sm` + `--ds-bg-elevated`；hover → `border-strong` + `--ds-bg-subtle`；当前页 `.active` 边与字均 `--ds-primary`（无填充，克制）；省略号 `…` 用 `--ds-fg-subtle` 无边。
- **文章翻页（上一篇/下一篇）**：两列卡片，`radius-md` + `1px --ds-border`，含方向小标（sans uppercase muted）+ 标题（serif）；hover → `border-strong` + `shadow-md`；下一篇右对齐。≤640px 收为单列。

### 步进器 / 阅读进度 Stepper（font-sans）
横向等分。圆点 30px：未达 `1px --ds-border-strong` + muted 字；当前 `.current` 边与字 `--ds-primary`；已完成 `.done` 填 `--ds-primary` + `--ds-primary-fg`（显内联 SVG 对勾）。连接线 `1px`：已过段落 `--ds-primary`，未过 `--ds-border`。标签 sans，激活态升为 `--ds-fg`。

### 下拉菜单 Dropdown（浮层 / font-sans）
触发按钮 `aria-haspopup` + `aria-expanded`（尾部内联 SVG chevron）。菜单 `--ds-bg-elevated` + `1px --ds-border` + `radius-md` + `shadow-lg`，内边距 8px。项 `radius-sm`，hover/focus → `--ds-bg-subtle`；选中项 `.selected` 文字 `--ds-primary` + 尾部内联 SVG 对勾；分组标题 sans uppercase subtle；快捷键 `.kbd` 走 mono subtle；分隔 `1px --ds-border`。点击外部 / Esc 关闭。

### 工具提示 Tooltip（深底浮泡 / font-sans / text-xs）
气泡底 `--ds-fg`、字 `--ds-bg`（反相，保证 AA），`radius-sm` + 小箭头，置于元素上方。`:hover` 与 `:focus-within` 显现（键盘可达），`role="tooltip"` + 触发元素 `aria-describedby`。`fast 160ms` 渐显。

### 模态框 Modal（浮层 / radius-lg）
遮罩 `color-mix(--ds-fg 35%)` 半透明，居中。对话框 `--ds-bg-elevated` + `1px --ds-border` + `radius-lg` + `shadow-lg`，内边距 32px；标题 serif、正文 muted、操作区右对齐（次操作 + 主/危险操作）。`role="dialog"` + `aria-modal` + `aria-labelledby`；点遮罩或 Esc 关闭；进出场 `base 240ms` 透明度 + 8px 上移。

### Toast 通知（浮层 / font-sans）
固定右下（≤640px 改为左右贴边底部）。卡片 `--ds-bg-elevated` + `1px --ds-border` + 行首语义 SVG 图标（图标取语义色：默认 primary / success / danger）+ `radius-md` + `shadow-lg`；含标题（bold）+ 正文（muted）+ 关闭按钮。`role="status"`、容器 `aria-live="polite"`；进出场 8px 上移 + 渐显，约 4s 自动消失。

---

## 9b. 文章排版规范（本风格重点）

长文是核心交付物，给出明确排版契约：

- **h1**：`text-2xl`(38px) serif weight 600，`tracking-tight`，`text-wrap:balance`；上 0 下 16px。
- **h2**：`text-xl`(28px) serif 600；上 40px 下 12px；可加底部 `1px --ds-border` 分隔。
- **h3**：`text-lg`(22px) serif 600；上 32px 下 8px。
- **段落 p**：`text-base`(17px) serif，`leading-relaxed`(1.85)，色 `--ds-fg`；段间 24px；`text-wrap:pretty`。
- **导语/摘要**：`text-md`(19px) muted，置于 h1 与正文之间。
- **引用 blockquote**：左边 3px `--ds-primary` 竖线 + 内左缩进 20px，文字 `--ds-fg-muted` serif italic，底可加 `--ds-bg-subtle`。
- **首字下沉（drop cap，可选）**：首段首字 serif、`float:left`、约 3 行高、色 `--ds-primary`、右下留白。
- **行内代码**：`--ds-font-mono`，底 `--ds-bg-sunken`，内边距 2px 6px，radius sm。
- **代码块**：底 `--ds-bg-sunken`，radius md，内边距 16px，mono，行高 1.6，可横向滚动。
- **链接**：色 `--ds-accent`（墨绿），hover 加下划线（渐显），访问过不变色或微降饱和。
- **脚注**：`text-sm`(14px) sans muted，上标数字回跳锚点。
- **分隔符 hr**：居中三点（· · ·）或 `1px --ds-border` 细线，上下 40px 留白。
- **列表**：项间 8px，标记色 `--ds-fg-subtle`，正文 serif。
- **图片**：radius lg，可出血到容器外（full-bleed），图注 `text-sm` sans muted 居中。

---

## 10. 可访问性

- **对比度**：正文 `--ds-fg` 对 `--ds-bg` 亮 12.6:1 / 暗 12.4:1；`--ds-fg-muted` ≥6.6:1；`--ds-fg-subtle` ≥4.5:1（可作正文）。primary 上文字 ≥5:1。全部满足 AA，正文接近 AAA。
- **焦点**：所有可交互元素用 `--ds-focus-ring`（底环 + 赭橙环）双层 box-shadow，键盘可见。不要 `outline:none` 而不补焦点样式。
- **触控目标**：交互元素 ≥44×44px（小按钮加 padding/热区补足）。
- **可减弱动效**：尊重 `prefers-reduced-motion`（见 §8）。
- **字号控制**：阅读顶栏提供 A− / A / A＋ 三档，对应放大正文 `--ds-text-base`（建议 16 / 17 / 19px）。
- **语言/排版**：正文 `text-wrap:pretty`、标题 `balance`；中文段落避免两端对齐造成的字间隙。

---

## 11. Do / Don't

**Do**
- 正文一律衬线、行高 1.85、容器锁 680px——这是本风格的命。
- 控件、元信息、数据用无衬线，建立内容/界面对比轴。
- 用留白和 1px 分隔线分层；多给区块间距（64px+）。
- 强调色克制——一屏最多一两处赭橙。
- 标题 `balance`、正文 `pretty`，避免孤字与破碎换行。

**Don't**
- 别用纯白 `#fff` 冷底或 Geist 冷灰——基底必须暖纸。
- 别给正文用无衬线，或把行高压到 1.5 以下（中文会挤）。
- 别堆阴影做层级——editorial 靠留白，不靠投影。
- 别让正文列宽超过 ~720px（行太长难回扫）。
- 别滥用强调色把页面变成「橙色海报」。
- 别用 emoji 当功能图标；颜色一律走变量，不硬编码。

---

## 12. 如何接入

**1. 引入 tokens.css**（同时拿到亮/暗变量）
```html
<link rel="stylesheet" href="./styles/07-editorial/tokens.css">
```
```js
// 或在打包入口
import './styles/07-editorial/tokens.css'
```

**2. 用变量**（永远走 `var(--ds-*)`，不硬编码）
```css
.article { font-family: var(--ds-font-serif); }
.article p {
  font-size: var(--ds-text-base);
  line-height: var(--ds-leading-relaxed);
  color: var(--ds-fg);
  max-width: 680px;
}
.meta { font-family: var(--ds-font-sans); color: var(--ds-fg-muted); }
.btn-primary {
  background: var(--ds-primary); color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  transition: background var(--ds-dur-base) var(--ds-ease);
}
```

**3. 切换暗色（夜读模式）**
```js
document.documentElement.dataset.theme = 'dark'; // 或 .classList.add('dark')
```

**4. Tailwind 项目**——引 preset，直接用语义类（`bg-bg`、`text-fg`、`font-serif`、`max-w-reading`、`rounded-md` 等）
```js
// tailwind.config.js
module.exports = { presets: [require('./styles/07-editorial/tailwind.preset.js')] }
```
```jsx
<article className="font-serif max-w-reading mx-auto text-fg leading-relaxed">
  <h1 className="text-2xl font-bold tracking-tight">标题</h1>
  <p className="text-base">正文……</p>
</article>
```
