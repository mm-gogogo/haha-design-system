# Aqua · Y2K 千禧水光（Frutiger Aero）

> 亮泽果冻渐变 + 顶白高光 + 水珠气泡，铺在晴空蓝到水绿的温柔渐变上。清新、乐观、有阳光晒过的清晨感——给天气、智能家居、补水 / 健康、生活方式类应用。**GLOSSY 亮泽，不磨砂、不哑光。**

---

## 1. 一句话气质

界面像一颗颗**被光打亮的水光果冻**：按钮从顶部浅色渐变到底部主色，顶端压一道 1px 白高光，像水珠最亮的那一点；卡片是亮泽的白，顶部一缕柔白渐变 + 内高光；hero 漂着半透明水珠气泡，背景是晴空蓝→水青→一点水绿。整体明亮、湿润、友好、干净——千禧年（早 2000s）那种对科技与自然都满怀乐观的"水光"气质。

---

## 2. 设计哲学 / 性格

继承 Geist 的骨架（语义分层、比例尺驱动、状态色成对、可见焦点环、明暗双主题），把「表面」做成**亮泽水光**而非磨砂玻璃：

1. **果冻是主语**：主操作 = 线性渐变（顶浅 → 底主色）+ 顶白高光（`inset 0 1px 0 rgba(255,255,255,.6)`）+ 柔影。hover 增亮并外扩一圈水蓝辉光。这是本风格 THE 招牌。
2. **亮泽不磨砂**：表面是**不透明的亮白**（`--ds-bg-elevated:#ffffff`）+ 顶部一缕白渐变 + `--ds-gloss-top` 内高光。极轻的 `backdrop-filter`（6px）只用于镀铬条 / 弹层点缀，**绝不全页磨砂化**——这是与 09-玻璃拟态（frosted blur）的根本区别。
3. **水珠 / 气泡母题**：半透明圆 + 偏左上的径向高光（`radial-gradient(circle at 35% 30%, …)`），低透明度漂浮在 hero，轻盈不喧哗，`prefers-reduced-motion` 下停止。
4. **克制的虹彩薄光**：一条细分隔条 / 一枚 chip 用多停渐变点一下即止——**不要全页彩虹**（Y2K 最容易翻车处）。
5. **很圆 + 柔影造水感**：圆角放大到 `8/14/22`，低对比大柔影让卡片像水珠悬浮。

与 09-玻璃拟态的区别（必须肉眼可辨）：09 是**半透明 + 大 blur 磨砂**；16-黏土是**哑光实色 + 厚软阴影**；本风格是**亮泽 GLOSSY**——不透明亮白 + 渐变果冻 + 顶高光 + 湿润光泽，不磨砂、不哑光。

与 Geist 的关系：**保留**语义 token、比例尺、状态色配对、焦点环、暗色双主题；**改写**表面（实色卡 → 亮泽果冻 + 顶高光）、按钮（纯色 → 渐变 gel + hover 外辉光）、圆角（变大 8/14/22）、背景（纯色 → 晴空水光渐变 + 气泡）、字体（→ Quicksand 圆体）。

---

## 3. 何时用 / 何时别用

**适合**
- 天气 / 空气 / 紫外线类应用——晴空蓝 + 气泡 + 水光卡天生契合。
- 智能家居、补水 / 健康、冥想、儿童 / 亲子类——友好、明亮、乐观。
- 消费级落地页、活动页、轻量仪表盘——果冻按钮很出片、转化感强。
- 想要"清新、阳光、湿润、年轻"而非"严肃、暗黑、克制"的产品。

**别用**
- 高密度 B 端数据后台 / 财务报表——大圆角 + 光泽会削弱信息密度与严肃感。
- 强调沉稳 / 奢华 / 极简的品牌（金融、法律、高端制造）——水光显得"轻"。
- 必须极致克制中性灰的政务 / 企业内网（用 03 / 05 这类）。
- 想要哑光（用 16-黏土）或磨砂（用 09-玻璃拟态）质感时——本风格是亮泽的。

---

## 4. 颜色

水光的核心是**晴空蓝系浅底 + 亮泽白卡 + 果冻渐变按钮**。表面是不透明实色（亮白 / 深海蓝），可读性优先；亮泽来自渐变与高光，而非透明度。

### 表面与文字（亮 / 暗）

| Token | 亮色 | 暗色（夜海 / 深海水光） | 用途 |
|---|---|---|---|
| `--ds-bg` | `#eef7fe` | `#061a26` | 晴空浅蓝 / 深海主背景 |
| `--ds-bg-subtle` | `#dceffb` | `#0a2533` | 次背景 / 区块分组底 |
| `--ds-bg-elevated` | `#ffffff` | `#0f303f` | **亮泽卡 · 承载文字**（顶白高光是灵魂） |
| `--ds-bg-sunken` | `#d2e8f7` | `#04141d` | 凹陷槽 / 输入框 / 代码块 |
| `--ds-fg` | `#0b2942` | `#dff1fb` | 主文字（≈13:1 / ≈14:1） |
| `--ds-fg-muted` | `#345a7d` | `#94b6ca` | 次要文字（≈6.2:1 / ≈6.5:1） |
| `--ds-fg-subtle` | `#5a7d9c` | `#6a8ca2` | 占位 / 弱文字（≈4.5:1 / ≈4.6:1，仅大字或占位） |
| `--ds-fg-on-accent` | `#ffffff` | `#042330` | 落在强调色上的文字 |
| `--ds-border` | `#b9dcf2` | `#1b3d4f` | 常规水蓝描边 |
| `--ds-border-strong` | `#8fc4e8` | `#2c5568` | 强描边 / 分隔 |

### 品牌与强调

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#00709f` | `#2bb7ef` | 晴空主操作（白字 5.0:1 / 深字 6.6:1） |
| `--ds-primary-hover` | `#0a82b5` | `#4ac4f2` | hover |
| `--ds-primary-active` | `#005a82` | `#1ba2db` | active / pressed（也是果冻渐变的底色） |
| `--ds-primary-fg` | `#ffffff` | `#042330` | 主操作上的文字 |
| `--ds-accent` | `#0a7d50` | `#45d99a` | 水绿次强调 / 链接（白字 4.6:1 / 深字） |
| `--ds-accent-fg` | `#ffffff` | `#052618` | accent 上的文字 |

> 取值说明：果冻按钮的渐变 = 顶部提亮一档 → 中段 `--ds-primary` → 底部 `--ds-primary-active`（preview 中以 `--gel-primary` / `--gel-accent` 实现）。这些渐变仅承载按钮 / 图标块（不承载小字），故对比按底色主色计。

### 语义状态（主色 / `-bg` 浅水底 / `-fg` 底上文字）

| 语义 | 亮 主色 / 底 / 文字 | 暗 主色 / 底 / 文字 |
|---|---|---|
| success | `#0c7e44` / `#e2f7ec` / `#063d23` | `#3fd587` / `#0a2a1a` / `#c9f5dd` |
| warning | `#b07908` / `#fdf2d6` / `#523808` | `#efc05a` / `#2a1f06` / `#f8e8c0` |
| danger | `#d83b37` / `#fde4e3` / `#5e1310` | `#ff6b66` / `#2c0f0e` / `#ffd6d4` |
| info | `#0086c4` / `#e0f2fd` / `#003a5c` | `#45b6ef` / `#06243a` / `#cfeafd` |

所有 `-fg` 落在对应 `-bg` 上均 ≥4.5:1（多数 ≥7:1）。

---

## 5. 字体

- **字族**：`Quicksand`（圆体，标题 / UI）+ `Inter`（长正文小字回退）+ 系统 `PingFang SC` / `Microsoft YaHei`（中文）。Quicksand 圆润友好、几何中带弧，最贴水光 / Frutiger 气质，用于标题与 UI 文案；但它在 13–14px 偏细，故**长段正文与小字改用 Inter**（preview 里通过 `.body-sans` 与对 `p / td / 菜单` 等选择器指定 Inter）兼顾可读性。等宽用 `JetBrains Mono`（数据 / 代码）。
- **比例尺**：`xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48`。
- **字重**：`400 / 500 / 600`（normal / medium / bold）。按钮用 600 圆体更"果冻"。
- **字距**：标题 `-0.02em`，大标题收到 `-0.03em`（Quicksand 已较宽，不必收太狠）；正文 `0`。
- **行高**：标题 1.2，正文 1.55，长文 1.75。
- **中文适配**：中文不加负字距（PingFang 本身紧凑），仅拉丁标题用 tracking-tight。
- **不引入任何外部字体**，全部本地 woff2，离线双击可用。

---

## 6. 间距与布局

- **比例尺**（4px 基）：`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`（`--ds-space-1…12`）。
- **节奏**：水光卡内边距偏舒展（`space-6`/`space-7`），卡间距 `space-6`，区块间 `space-9`/`space-10`——清新感来自留白与气泡的呼吸。
- **容器宽**：内容主列 ≈1120px；hero 与渐变背景区 full-bleed 占满宽度。
- **栅格**：12 栏意识；卡片网格用 `auto-fit/minmax`，桌面 3–4 列、移动 1 列。
- **正文行宽** ≤ 75ch。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：`sm 8 / md 14 / lg 22 / full`。很圆但比黏土克制，配水光的湿润果冻感。
- **柔影**：`sm 0 1px 2px / md 0 6px 16px -6px / lg 0 16px 34px -10px`，色相带水蓝 `rgba(10,80,120,…)`；**关键**：md / lg 自带 `0 1px 0 rgba(255,255,255,.7) inset` 顶白高光，让每个抬起面都"亮一道"——这是水光质感的灵魂，写进了 shadow token。
- **描边**：1px 水蓝实线 `--ds-border`（不是白高光描边——那是 09 的做法）。
- **水光配方**（卡片）：`background:#fff` + 顶部一缕白渐变 `linear-gradient(180deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 40%)` + 1px `--ds-border` + `box-shadow: var(--ds-shadow-md), var(--ds-gloss-top)`。
- **果冻配方**（按钮，THE 招牌）：`background: var(--gel-primary)`（顶浅 → 底主色渐变）+ `inset 0 1px 0 rgba(255,255,255,.6)` 顶高光 + `radius-md/full` + 柔影；hover 增亮 + 外扩水蓝辉光 `0 0 0 4px color-mix(in srgb, var(--ds-primary) 26%, transparent)`。
- **关于 ghost-card 例外**：抬起面"顶高光 + 柔影"并存是本风格**身份**，不视为 ghost-card，予以保留。

---

## 8. 动效

- **时长**：`fast 140ms / base 220ms / slow 360ms`。
- **曲线**：`cubic-bezier(.2,.8,.2,1)`（水珠般顺滑减速）。
- **典型过渡**：按钮 hover 上浮 1px + 增亮 + 外辉光（像水珠被托起反光）；active 下沉、内压暗；主题切换给 `background`/`color` 加 `slow` 过渡；hero 气泡 7s 缓慢上下漂浮。
- **`prefers-reduced-motion`**：统一把 `transition`/`animation` 压到 0.01ms（含气泡漂浮，见 preview 末尾）。

---

## 9. 组件规格

> 水光配方 = 亮泽白底 + 顶白高光 + 顶部一缕白渐变 + 柔影。果冻配方 = 渐变 + 顶高光 + hover 外辉光。

- **按钮 Button（招牌：果冻 gel）**
  - 主色：`background: var(--gel-primary)`（顶浅 → `--ds-primary` → `--ds-primary-active`）+ `inset 0 1px 0 rgba(255,255,255,.6)` 顶高光，`color:var(--ds-primary-fg)`，`radius-md`，高 40px，600 字重，`shadow-md`。
  - 次级（亮泽白）：`linear-gradient(180deg,#fff,#eaf6ff)` + 1px `border-strong` + 顶高光，文字用 `--ds-primary`。
  - 三级：透明，hover 浮出 `bg-subtle`。danger：果冻红渐变。
  - 状态：default / hover（增亮 + 上浮 + **外扩水蓝辉光**）/ active（下沉 + 内压暗）/ focus（`focus-ring`）/ disabled（opacity .5）。
  - 尺寸：sm 32 / md 40 / lg 48；图标按钮 44×44（圆形）。
- **输入框 Input / Textarea / Select**：`bg-sunken`（水光凹陷槽）+ 1px `border`，高 42px，`radius-sm`；focus 加 `focus-ring`。占位用 `fg-subtle`。
- **卡片 Card**：水光配方完整体；标题 `lg/600`、正文 `sm/muted`（Inter）、内边距 `space-6`；图标块用果冻渐变 + 顶高光。
- **徽章 / 标签 Badge**：语义 `-bg` 浅水底 + `-fg` 文字，`radius-full`，前置语义 SVG 圆点。
- **提示条 Alert**：`-bg` 浅底 + 1px `border` + **前置语义 SVG 图标**（圆形高光底盘），**禁止侧边色条**。
- **导航 Nav / Tabs**：水光顶栏（sticky）；tab 选中态用亮泽白果冻片 + `primary` 文字 + 顶高光。
- **虹彩薄光条 iris-bar**：仅一处装饰（字体区顶部），多停渐变，`opacity:.85` + 顶高光。
- 另含：开关 / 单选 / 复选 / 滑块 / 模态 / 下拉 / 工具提示 / 分页 / Toast / 步骤条 / 面包屑（见 preview）。

---

## 10. 可访问性

- **对比度**：正文 ≥4.5:1、大字 / 图标 ≥3:1。**浅天蓝底特别留意**：`fg-muted #345a7d`≈6.2:1、`fg-subtle #5a7d9c`≈4.5:1（仅作占位 / 大字，勿做长正文）；主文字 `#0b2942`≈13:1。暗色同理（`fg-subtle`≈4.6:1）。
- **果冻按钮文字**：白字落在 `--ds-primary #00709f` 上 5.0:1（亮）；深字落在 `#2bb7ef` 上 6.6:1（暗）。渐变顶部更浅处仍 ≥4.5:1（渐变范围内主色为准）。
- **图上叠字**：图片上的水光卡 / 文字必加深色 scrim（`rgba(4,28,44,.5)` 量级），实测白字 ≥15:1。
- **焦点**：`--ds-focus-ring` 双层环（底色环 + 主色环），所有可交互元素 `:focus-visible` 可见。**注意**别让 hover 的水蓝外辉光与焦点环混淆——focus-ring 仍用实色双环。
- **触控目标** ≥44px（图标按钮 44×44、表单控件 ≥42px）。
- **减弱动效**：`prefers-reduced-motion` 时关闭过渡与气泡漂浮。
- **光泽不靠色**：强调用渐变 + 字重 + 图标，文字本身仍是高对比纯色，不依赖光泽传达信息。

---

## 11. Do / Don't

**Do**
- 主操作做成**果冻**：渐变 + 顶白高光 + hover 外辉光——这是身份，别省。
- 抬起面用**不透明亮白** + 顶高光（`--ds-gloss-top` 已在 shadow token 里），保持 GLOSSY。
- 水珠 / 气泡只在 hero 等大留白处低透明度点缀，呼应 Frutiger 的自然 + 科技。
- 自然 + 科技配图（水、天、绿、波纹）最对味；图上叠卡压 scrim 守 AA。
- 虹彩只点一处（一条 bar / 一枚 chip）。

**Don't**
- 别全页磨砂 blur——那是 09-玻璃拟态；本风格是亮泽，blur 仅 6px 点缀。
- 别哑光、别厚重软阴影——那是 16-黏土；水光要湿润有光泽。
- 别全页彩虹 / 满屏虹彩渐变——Y2K 最易俗气，克制到"一处"。
- 别把长正文放到 `fg-subtle` 或浅底低对比组合上——浅天蓝底要守住 4.5:1。
- 别用侧边粗色条做 alert（用语义图标 + 浅底 + 1px 边）；别用渐变文字（用纯色 + 字重）。
- 别让光泽喧宾夺主——内容在前台，亮泽与气泡只是恰到好处的氛围。

---

## 12. 如何接入

1. **引入 tokens 与字体**
   ```html
   <link rel="stylesheet" href="../../_fonts/fonts.css">
   <link rel="stylesheet" href="./tokens.css">
   ```
2. **水光卡 + 果冻按钮**（直接用变量）
   ```css
   .aqua-card {
     background:
       linear-gradient(180deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 40%),
       var(--ds-bg-elevated);
     border: 1px solid var(--ds-border);
     border-radius: var(--ds-radius-md);
     box-shadow: var(--ds-shadow-md), var(--ds-gloss-top);
     color: var(--ds-fg);
   }
   .aqua-btn {
     background: linear-gradient(180deg, #2a9fcf 0%, var(--ds-primary) 52%, var(--ds-primary-active) 100%);
     color: var(--ds-primary-fg);
     border-radius: var(--ds-radius-md);
     box-shadow: var(--ds-shadow-md), inset 0 1px 0 rgba(255,255,255,.6);
     font-weight: var(--ds-weight-bold);
   }
   .aqua-btn:hover { /* 增亮 + 外辉光 */
     filter: brightness(1.06);
     box-shadow: var(--ds-shadow-lg), inset 0 1px 0 rgba(255,255,255,.7),
                 0 0 0 4px color-mix(in srgb, var(--ds-primary) 26%, transparent);
   }
   ```
3. **切暗色**：给 `<html>` 设 `data-theme="dark"`（或加 `.dark` 类），变量整套切换为"夜海 / 深海水光"。
4. **Tailwind 项目**：引 `tailwind.preset.js` 预设并 import `tokens.css`：
   ```js
   // tailwind.config.js
   module.exports = { presets: [require('./styles/19-y2k-aqua/tailwind.preset.js')] }
   ```
   ```html
   <button class="bg-primary text-primary-fg rounded-md shadow-md shadow-gloss-top">果冻主操作</button>
   ```
5. **机器消费**：`tokens.json` 提供同一套语义（含 `color.light` / `color.dark` / `gloss` / `z`），可喂给 Style Dictionary 等工具。
