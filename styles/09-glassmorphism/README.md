# Glassmorphism · 玻璃拟态

> 半透明磨砂玻璃面 + `backdrop-filter:blur` + 1px 高光描边，漂浮在鲜艳渐变之上。通透、轻盈、有空气感与景深——给作品集、产品落地页、媒体 / 音乐应用、轻量仪表盘。

---

## 1. 一句话气质

界面像一叠**磨砂玻璃片**：每张卡都是半透明的白（或暗色低透白），透出身后**鲜艳的蓝紫粉渐变**并把它**模糊**成柔光；卡片边缘有一道 1px 的亮高光描边，像玻璃被光照亮的棱。层级靠「透明度 + 模糊 + 高光边 + 柔影」营造，而非实色块。空气感强、现代、轻盈。

---

## 2. 设计哲学 / 性格

继承 Geist 的骨架（语义分层、比例尺驱动、状态色成对、可见焦点环、明暗双主题），但把「表面」从实色卡整体换成**玻璃面**：

1. **玻璃是主语**：所有抬起表面 = 半透明底 (`--ds-bg-elevated`) + `backdrop-filter:blur` + 1px 高光描边 (`--ds-border`)。背后必须有内容（渐变 / 图片）才"成玻璃"。
2. **鲜艳渐变垫底**：玻璃只在彩色背景上才好看。hero 与区块底用蓝 → 紫 → 粉的鲜艳渐变，再让玻璃把它揉成柔光。
3. **高光描边 + 顶部内高光**：1px 亮边 (`--ds-border`) 勾出玻璃轮廓，顶部 `inset` 内高光 (`--ds-glass-inset`) 模拟光打在玻璃顶棱——这两笔是"玻璃"与"半透明卡"的分水岭。
4. **柔影造漂浮**：低对比的大柔影 (`--ds-shadow-*`) 让玻璃片悬浮在渐变之上，而非贴死。
5. **对比度优先于通透**：玻璃天生低对比。承载文字的玻璃面**主动提高不透明度**（亮 .72 / 暗 .14 量级），叠底后文字仍 ≥4.5:1；纯装饰玻璃才更透（详见第 10 节）。

与 Geist 的关系：**保留**语义 token、比例尺、状态色配对、焦点环、暗色双主题；**改写**表面（实色→玻璃半透明 + blur）、描边（灰线→白高光边）、圆角（变大 16/20/28）、背景（纯色→鲜艳渐变垫底）。

---

## 3. 何时用 / 何时别用

**适合**
- 作品集、个人站、产品落地页——渐变 + 玻璃的"高级轻盈"很出片。
- 媒体 / 音乐 / 视频 / 相册类应用——玻璃叠在封面大图上极契合。
- 轻量仪表盘、概览卡、Widget——信息密度适中，玻璃卡分组清爽。
- 想要"现代、空气感、有景深"而非"厚重、商务严肃"的产品。

**别用**
- 高信息密度的 B 端表格 / 数据后台——大量半透明叠加会让密集文字"发灰发糊"。
- 纯色 / 无背景的场景——没有彩色或图片垫底，玻璃就退化成普通半透明卡，失去灵魂。
- 极致性能 / 低端设备 / 长列表——`backdrop-filter:blur` 是 GPU 重操作，滚动多层玻璃会掉帧（见第 10 节降级）。
- 强合规可访问性（政务 / 医疗）且不接受任何对比妥协——玻璃低对比是老大难，需格外谨慎。

---

## 4. 颜色

玻璃拟态的核心是**半透明表面叠在鲜艳渐变之上**。表面色 (`bg-elevated` / `bg-sunken` / `border`) 是 `rgba`，最终呈现取决于背后内容；承载文字的玻璃面已为对比度提高不透明度。

### 表面与文字（亮 / 暗）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#eef1f8` | `#0f1226` | 主背景（渐变垫底之上的安全底色） |
| `--ds-bg-subtle` | `#e6eaf5` | `#0c0f20` | 次背景 / 区块分组底 |
| `--ds-bg-elevated` | `rgba(255,255,255,.72)` | `rgba(255,255,255,.14)` | **玻璃卡 · 承载文字**（叠底后对比安全） |
| `--ds-bg-sunken` | `rgba(255,255,255,.42)` | `rgba(255,255,255,.07)` | 凹陷玻璃 / 输入槽 / 代码块（更透） |
| `--ds-fg` | `#14182a` | `#eef0ff` | 主文字（玻璃上 ≈17:1 / ≈11:1） |
| `--ds-fg-muted` | `#44496a` | `#aeb2da` | 次要文字（≈8.4:1 / ≈6:1） |
| `--ds-fg-subtle` | `#565b7d` | `#9499c9` | 占位 / 弱文字（≈6.4:1 / ≈4.5:1） |
| `--ds-fg-on-accent` | `#ffffff` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `rgba(255,255,255,.60)` | `rgba(255,255,255,.18)` | **1px 高光描边**（玻璃灵魂） |
| `--ds-border-strong` | `rgba(255,255,255,.85)` | `rgba(255,255,255,.32)` | 强高光描边 |

### 品牌与强调

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#5b5ef0` | `#818cf8` | 主操作（白字 4.9:1 / 深字 6.2:1） |
| `--ds-primary-hover` | `#4f51e6` | `#939dfa` | hover |
| `--ds-primary-active` | `#4346d4` | `#a3acff` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#0c1033` | 主操作上的文字 |
| `--ds-accent` | `#db2777` | `#f472b6` | 玫红次强调 / 链接（白字 4.6:1 / 深字 6.9:1） |
| `--ds-accent-fg` | `#ffffff` | `#2a0a18` | accent 上的文字 |

> 取值说明：品牌气质取自 `#6366f1`（靛）/`#ec4899`（玫红）。`--ds-primary` 微调到 `#5b5ef0` 让白字过 4.5:1；`--ds-accent` 文字版用更深的 `#db2777`。更鲜艳的 `#6366f1`/`#ec4899` 仅作 hero/装饰渐变的色标（不承载小字），见 preview。

### 语义状态（主色 / `-bg` 浅玻璃底 / `-fg` 底上文字）

| 语义 | 亮 主色 / 底 / 文字 | 暗 主色 / 底 / 文字 |
|---|---|---|
| success | `#0e9f6e` / `#d7f2e6` / `#0f6e4e` | `#34d399` / `#103226` / `#7be0b0` |
| warning | `#b97e0c` / `#fbecd2` / `#7a4a06` | `#fbbf24` / `#332306` / `#f0c069` |
| danger | `#e02424` / `#fbe0e3` / `#9b1c2e` | `#f87171` / `#361a22` / `#f7a3ac` |
| info | `#5b5ef0` / `#e2e8fd` / `#1d3a8a` | `#818cf8` / `#18203f` / `#aab4ff` |

所有 `-fg` 落在对应 `-bg` 上均 ≥5:1（亮）/ ≥8:1（暗）。

---

## 5. 字体

- **字族**：`Inter`（拉丁）+ 系统 `PingFang SC` / `Microsoft YaHei`（中文回退）。Inter 字形开阔、几何中性，玻璃的轻盈通透需要一款克制不抢戏的无衬线；等宽用 `JetBrains Mono`（数据 / 代码）。
- **比例尺**：`xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48`。
- **字重**：`400 / 500 / 600`（normal / medium / bold）。玻璃面对比偏弱，强调优先用 **600 字重 + 字号**，不靠重色。
- **字距**：标题 `-0.02em`，大标题收到 `-0.04em`（不低于此下限，避免粘字）；正文 `0`。
- **行高**：标题 1.2，正文 1.55，长文 1.75。
- **中文适配**：中文不加负字距（PingFang 本身紧凑），仅拉丁标题用 tracking-tight。

---

## 6. 间距与布局

- **比例尺**（4px 基）：`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`（`--ds-space-1…12`）。
- **节奏**：玻璃卡内边距偏舒展（`space-6`/`space-7`），卡间距 `space-6`，区块间 `space-9`/`space-10`——空气感来自留白。
- **容器宽**：内容主列 ≈1080px；hero 与渐变背景区 full-bleed 占满宽度。
- **栅格**：12 栏意识；卡片网格用 `auto-fit/minmax`，桌面 3–4 列、移动 1 列。
- **正文行宽** ≤ 75ch。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：`sm 16 / md 20 / lg 28 / full`。玻璃片偏大圆角，强化"圆润玻璃卡"质感，但比新拟物克制。
- **柔影**：`sm 0 2px 8px / md 0 8px 28px / lg 0 20px 56px`，色相带靛 `rgba(31,38,89,…)`、透明度低——玻璃**漂浮**在渐变上的轻柔投影，不是硬投影。
- **描边（灵魂）**：1px **白高光描边** `--ds-border`（亮 .60 白 / 暗 .18 白）勾出玻璃轮廓；顶部再叠 `--ds-glass-inset`（顶 1px 内高光）模拟光打在玻璃棱上。
- **玻璃配方**（组件必用三件套）：`background: var(--ds-bg-elevated)` + `backdrop-filter: blur(var(--ds-glass-blur))` + `border: 1px solid var(--ds-border)`，再加 `box-shadow: var(--ds-shadow-md), var(--ds-glass-inset)`。
- **关于 ghost-card 例外**：玻璃面"1px 高光描边 + 柔影"并存是本风格**身份**（POLISH-SPEC 规则 3 豁免），不视为 ghost-card，予以保留。

---

## 8. 动效

- **时长**：`fast 140ms / base 220ms / slow 360ms`。
- **曲线**：`cubic-bezier(.2,.8,.2,1)`（顺滑减速，配合玻璃的轻盈）。
- **典型过渡**：hover 时玻璃略增不透明度 + 柔影加深（像被托起一点）；主题切换给 `background`/`color` 加 `slow` 过渡。
- **`prefers-reduced-motion`**：统一把 `transition`/`animation` 压到 0.01ms（见 preview 末尾）。

---

## 9. 组件规格

> 玻璃配方 = 半透明底 + `backdrop-filter:blur` + 1px 高光描边 + 柔影 + 顶部内高光。

- **按钮 Button**
  - 主色：`background:var(--ds-primary)`，`color:var(--ds-primary-fg)`，`radius-sm`，高 40px，`shadow-md`。
  - 次级（玻璃）：`bg-elevated` + `blur` + 1px `border` + `glass-inset`（透出背后渐变）。
  - 三级：透明，hover 浮出浅玻璃底。danger：`background:var(--ds-danger)`（白字 4.7:1）。
  - 状态：default / hover（不透明度+柔影加深）/ active（`primary-active`）/ focus（`focus-ring`）/ disabled（opacity .5）。
  - 尺寸：sm 32 / md 40 / lg 48；图标按钮 44×44（圆形玻璃）。
- **输入框 Input / Textarea / Select**：`bg-sunken`（更透玻璃槽）+ `blur` + 1px `border`，高 42px，`radius-sm`；focus 加 `focus-ring`。占位用 `fg-subtle`。
- **卡片 Card**：玻璃配方完整体；标题 `lg/600`、正文 `sm/muted`、内边距 `space-6`。
- **徽章 / 标签 Badge**：语义 `-bg` 浅玻璃底 + `-fg` 文字，`radius-full`，前置语义 SVG 圆点。
- **提示条 Alert**：`-bg` 浅底 + 1px `border` + **前置语义 SVG 图标**（对勾 / 感叹 / 叉 / i），**禁止侧边色条**。
- **导航 Nav / Tabs**：玻璃顶栏（sticky + blur）；tab 选中态用玻璃片 + `primary` 文字。
- 另含：开关 / 单选 / 复选 / 滑块 / 模态 / 下拉 / 工具提示 / 分页 / Toast / 步骤条 / 面包屑（见 preview）。

---

## 10. 可访问性

- **对比度**：正文 ≥4.5:1、大字 / 图标 ≥3:1。**关键**：承载文字的玻璃面用高不透明度（亮 `bg-elevated .72` / 暗 `.14`），叠底后 `fg` 仍 17:1（亮）/ 11:1（暗）；`fg-subtle` 兜底 ≥4.5:1。**不要**把正文放到 `.42` 以下的纯装饰玻璃上。
- **图上叠字**：图片上的玻璃卡 / 文字必加深色 scrim（`rgba(15,18,38,.5)` 量级），实测白字 ≥15:1。
- **焦点**：`--ds-focus-ring` 双层环（底色环 + 主色环），所有可交互元素 `:focus-visible` 可见。
- **触控目标** ≥44px（图标按钮 44×44、表单控件 ≥42px）。
- **降级**：`@supports not (backdrop-filter: blur(1px))` 时，玻璃面退化为**更高不透明度的实色** `bg-elevated`（直接提到 .9+），保证无 blur 也可读；性能敏感场景同理减少叠层。
- **减弱动效**：`prefers-reduced-motion` 时关闭过渡。

---

## 11. Do / Don't

**Do**
- 玻璃面**背后一定要有彩色 / 图片**——渐变垫底是玻璃成立的前提。
- 玻璃三件套齐全：半透明底 + `blur` + 1px 高光描边；顶部加内高光更"玻璃"。
- **承载正文用 `bg-elevated`（高不透明度）**，纯装饰才用 `bg-sunken`/更透。
- 用柔影 + 大圆角营造漂浮与轻盈；状态强调靠语义 `-bg` 浅底 + 图标。
- 图上叠玻璃卡时压一层 scrim，守住文字 AA。

**Don't**
- 别在纯白 / 纯色背景上用玻璃——没有内容透出，玻璃就消失了。
- 别把正文放到过透玻璃（< .5）上——会发灰发糊，掉对比。
- 别堆太多层玻璃叠玻璃——既掉性能又让画面浑浊。
- 别用侧边粗色条做 alert（用语义图标 + 浅底 + 1px 边）；别用渐变文字（用纯色 + 字重）。
- 别忘了 `@supports` 降级——无 `backdrop-filter` 的环境要有实色兜底。

---

## 12. 如何接入

1. **引入 tokens 与字体**
   ```html
   <link rel="stylesheet" href="../../_fonts/fonts.css">
   <link rel="stylesheet" href="./tokens.css">
   ```
2. **直接用变量**（玻璃三件套）
   ```css
   .glass-card {
     background: var(--ds-bg-elevated);
     backdrop-filter: blur(var(--ds-glass-blur));
     -webkit-backdrop-filter: blur(var(--ds-glass-blur));
     border: 1px solid var(--ds-border);
     border-radius: var(--ds-radius-md);
     box-shadow: var(--ds-shadow-md), var(--ds-glass-inset);
     color: var(--ds-fg);
   }
   /* 无 backdrop-filter 时的实色兜底 */
   @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
     .glass-card { background: rgba(255,255,255,.92); }
   }
   ```
3. **切暗色**：给 `<html>` 设 `data-theme="dark"`（或加 `.dark` 类），变量整套切换。
4. **Tailwind 项目**：引 `tailwind.preset.js` 预设并 import `tokens.css`：
   ```js
   // tailwind.config.js
   module.exports = { presets: [require('./styles/09-glassmorphism/tailwind.preset.js')] }
   ```
   ```html
   <div class="bg-bg-elevated backdrop-blur-glass border border-border rounded-md shadow-md shadow-glass-inset text-fg">玻璃卡</div>
   ```
5. **机器消费**：`tokens.json` 提供同一套语义（含 `color.light` / `color.dark` / `glass` / `z`），可喂给 Style Dictionary 等工具。
