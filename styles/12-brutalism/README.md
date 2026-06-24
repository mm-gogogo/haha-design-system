# Brutalism / 粗野主义 设计系统

> 把结构袒露出来。粗黑边、零圆角、硬实心偏移阴影、等宽特大粗标题——一套**不修饰、敢喊话**的设计系统，给独立产品、作品集、活动站、开发者工具、文化/音乐厂牌用，越用越有态度。

---

## 1. 一句话气质

混凝土的诚实搬到屏幕上：**高对比、粗边、硬阴影、零圆角**。界面像贴在墙上的丝网海报——没有柔化、没有渐变、没有圆角糖衣，所有结构（栅格、边、层级）都摊开给你看。

---

## 2. 设计哲学 / 性格

与 Geist 中性基底的关系：**继承** token 契约、间距比例、AA 对比要求与可访问性底线；**改写**几乎所有"软"的部分——把圆角归零、把柔影换成硬偏移、把中性灰换成纸灰白 + 电光蓝 + 荧光黄、把字体换成等宽做标题。

1. **诚实优于精致**——边就是边（2–3px 纯黑），阴影就是实色块偏移（`6px 6px 0`），不装作有景深。
2. **高对比即层级**——靠黑/白/电光蓝/荧光黄的硬碰撞分主次，而非灰度渐变。
3. **零圆角**——所有 `--ds-radius-*` 一律 `0`。圆角是被本风格主动拒绝的语言。
4. **等宽是声音**——标题/强调用 JetBrains Mono，特大、字距紧（但守住 `-0.04em` 下限），像机器打出来的宣言。
5. **暴露栅格**——分隔线、列边、基线都可见，不藏结构。布局错位、叠压是特性不是 bug。

---

## 3. 何时用 / 何时别用

**适合**
- 独立产品 / SaaS 着陆页要一眼记住、敢和别人不一样。
- 作品集、个人站、活动/演出/展览站、唱片/文化厂牌。
- 开发者工具、技术博客、hackathon、archive/索引类站点。

**别用**
- 需要温柔、安抚、信任感的场景（医疗、儿童、金融理财）——硬碰撞会显得咄咄逼人。
- 重度密集表单 / 企业后台需要长时间盯屏——高对比久看疲劳，宜降饱和或换企业风。
- 强调奢华细腻留白的高端品牌——粗野与"高级克制"是两套语言。

---

## 4. 颜色

语义 token（亮 + 暗）。所有颜色只通过 `var(--ds-*)` 使用，组件内不硬编码。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#f4f4f0` | `#0a0a0a` | 主背景（纸灰白 / 纯黑） |
| `--ds-bg-subtle` | `#e9e9e2` | `#141414` | 次背景 / 分组底 |
| `--ds-bg-elevated` | `#ffffff` | `#1a1a1a` | 卡片 / 弹层（靠粗边+硬阴影抬起，非渐变） |
| `--ds-bg-sunken` | `#e2e2da` | `#050505` | 输入槽 / 代码块 |
| `--ds-fg` | `#0a0a0a` | `#f4f4f0` | 主文字 |
| `--ds-fg-muted` | `#303030` | `#c4c4c0` | 次要文字（≥11:1） |
| `--ds-fg-subtle` | `#525250` | `#9a9a96` | 占位 / 弱文字（≥6:1，AA 安全） |
| `--ds-fg-on-accent` | `#0a0a0a` | `#0a0a0a` | 落在荧光强调色上的近黑字 |
| `--ds-border` | `#0a0a0a` | `#f4f4f0` | 常规描边（2px；暗色翻亮仍是粗硬边） |
| `--ds-border-strong` | `#000000` | `#ffffff` | 强描边 / 分隔（3px） |

### 品牌与强调（梯度）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#1a1aff` 电光蓝 | `#ffe600` 荧光黄 | 主操作 / 选中 |
| `--ds-primary-hover` | `#1414d6` | `#ffec40` | hover |
| `--ds-primary-active` | `#0f0fae` | `#e6cf00` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#0a0a0a` | 主操作上的文字 |
| `--ds-accent` | `#ffe600` 荧光黄 | `#6e6eff` 电光蓝 | 高亮块 / 次强调（链接见下） |
| `--ds-accent-fg` | `#0a0a0a` | `#ffffff` | accent 上的文字 |

> **强调色梯度**：电光蓝 `#0f0fae → #1414d6 → #1a1aff`（active→hover→default）。荧光黄不做明暗梯度（它本就是"满档"的强调块色），交互态用位移/阴影表达。
> **链接对比注意**：荧光黄对文字不达 AA，因此**链接/正文强调一律用电光蓝**（亮色 `#1a1aff` 对白底 ≈6.4:1）；荧光黄只用于**块底/高亮**并配近黑字。暗色链接用提亮的 `#6e6eff`（对黑底 ≈5:1，AA 安全），蓝块上的文字在暗色用近黑 `accent-fg`。

### 语义状态

| 语义 | 主色（亮 / 暗） | -bg（亮 / 暗） | -fg（亮 / 暗） |
|---|---|---|---|
| success | `#008a3c` / `#2fd472` | `#d6f7e2` / `#06301a` | `#003215` / `#c8ffdd` |
| warning | `#9a6a00` / `#ffcb1f` | `#fff0c2` / `#2e2200` | `#3a2700` / `#fff1c2` |
| danger | `#ff2222` / `#ff5252` | `#ffdcdc` / `#340606` | `#5e0000` / `#ffd6d6` |
| info | `#1a1aff` / `#6a6aff` | `#dcdcff` / `#0c0c40` | `#0a0a5e` / `#dcdcff` |

> danger 用刺眼正红 `#ff2222` 做边/图标/危险按钮底；正文场景下的 danger 文字落在浅底 `*-bg` 上用深 `*-fg`，确保 AA。

---

## 5. 字体

**字族选择**
- `--ds-font-mono`：**JetBrains Mono**——标题、强调、标签、数字、代码、按钮文字全部走它。等宽的机械感是粗野主义的"声音"。
- `--ds-font-sans`：**Inter**（粗重）——正文与较长说明。粗野的正文不应难读，sans 负责可读性，mono 负责态度。
- 中文：走系统 **PingFang SC / Microsoft YaHei** 回退（fonts.css 仅提供拉丁字形）。

**比例尺**（base 16，标题猛拉）

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-text-xs` | 12px | 标签 / 脚注 |
| `--ds-text-sm` | 14px | 次要说明 / 表头 |
| `--ds-text-base` | 16px | 正文 |
| `--ds-text-md` | 19px | 正文标题 |
| `--ds-text-lg` | 24px | 小标题 |
| `--ds-text-xl` | 34px | 区块标题 |
| `--ds-text-2xl` | 52px | 大标题 |
| `--ds-text-3xl` | 76px | Hero / 巨标题 |

**字重**：`normal 400` / `medium 600` / `bold 800`。标题用 800，正文 400/600。
**字距**：`tight -0.04em`（标题/大字，**不得再低**——POLISH 红线）；`normal 0`（正文）。
**行高**：`tight 1.02`（巨标题贴紧）/ `normal 1.5`（正文）/ `relaxed 1.7`。

---

## 6. 间距与布局

- **比例尺**：4px 基的 1–12 阶（4/8/12/16/20/24/32/40/48/64/80/96）。
- **节奏**：粗野偏紧凑、硬边界。组内 `space-2~3`、组间 `space-5~6`、区块 `space-10~12`。
- **容器宽**：内容主区 `max-width: 1120px`；正文行宽 ≤ 75ch。
- **栅格**：12 栏意识，**暴露栅格**——列边、分隔线、基线可见；允许错位/叠压做张力，但保持对齐网格可读。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：`--ds-radius-*` 全部 **0**。这是身份，不软化。
- **描边**：常规 `--ds-border` **2px 纯黑**；强分隔 / 大块 / 模态用 `--ds-border-strong` **3px**。边是结构语言，宁粗勿细。
- **阴影**：**硬实心偏移，绝不模糊**——`--ds-shadow-sm/md/lg = 3px/6px/10px 偏移 0 模糊 currentColor`。用 `currentColor` 让阴影跟随元素的描边色（黑边投黑影、暗色亮边投亮影），交互时靠"抬起/按下位移 + 吃阴影"表达，像实体按键。

> 身份红线：**粗黑边 / 硬偏移阴影 / 0 圆角不可被 ghost-card 规则中和**。本风格的"边 + 硬阴影"是唯一的抬升语言，不存在"1px 描边 + 模糊柔影"的随手装饰。

---

## 8. 动效

- **时长**：`fast 80ms` / `base 140ms` / `slow 240ms`——短、干脆。
- **曲线**：`--ds-ease: cubic-bezier(.2,0,0,1)`——硬朗收尾，无回弹。
- **典型过渡**：hover `translate(-2px,-2px)` 抬起并加深硬阴影；active `translate(3px,3px)` 按下并**吃掉阴影**（像把实体块压平到桌面）。颜色用 background 直切。
- **可减弱动效**：`@media (prefers-reduced-motion: reduce)` 下关闭所有 `transition / animation`。

---

## 9. 组件规格

所有组件：2–3px 描边、0 圆角、硬偏移阴影、mono 标签文字、焦点用硬方环 `--ds-focus-ring`，触控目标 ≥44px。

- **按钮 Button**（高 44px / sm 36 / lg 52，padding `0 20px`，mono 大写）
  - primary：电光蓝底 + 白字 + 2px 黑边 + `shadow-sm`；hover 抬起 + `shadow-md`；active 位移吃影；disabled `opacity .5` 去阴影。
  - secondary：白/抬起底 + 黑字 + 黑边 + 硬影。
  - tertiary：透明底无边无影；hover 才显边 + 硬影。
  - danger：正红底 + 白字 + 黑边。
- **输入框 Input / Textarea / Select**：凹陷底 `bg-sunken` + 2px 黑边 + 0 圆角，高 44px；focus 显 `--ds-focus-ring` + 强描边。占位用 `fg-subtle`（AA 安全）。
- **卡片 Card**：`bg-elevated` + 2px 黑边 + `shadow-md`；标题(mono) + 正文(sans) + 操作区。**不嵌套卡片、不叠柔影**。
- **徽章 / 标签 Badge**：mono 大写、`*-bg` 浅底 + 语义色 2px 边 + 0 圆角。
- **提示条 Alert**：**前置语义 SVG 图标 + `*-bg` 浅底 + 2px 全描边**（**不用侧边色条**）。四语义：success/warning/danger/info。
- **导航 Nav / Tabs**：顶栏 3px 底分隔 + 硬阴影；tab 选中=反白底 + 黑边 + 底部 3px 主色实线指示。

---

## 10. 可访问性

- **对比度**：正文 ≥4.5:1、大字/图标 ≥3:1 全部达标。荧光黄**只做块底配近黑字**（≈17:1），从不做小字前景。
- **焦点**：所有可交互元素 `:focus-visible` 显 `--ds-focus-ring`（双层硬方环：底环 + 焦点色环），在亮/暗下都清晰。
- **触控目标**：按钮 / 输入 / tab / 分页 / 底部导航项 ≥44px。
- **可减弱动效**：尊重 `prefers-reduced-motion`，关闭位移/过渡。
- **暴露栅格的可读性**：错位/叠压不得遮挡正文；分隔线靠对比而非纯靠颜色传达分组。

---

## 11. Do / Don't

**Do**
- 边宁粗勿细（2–3px），阴影宁硬勿糊（`Npx Npx 0`）。
- 标题用等宽特大、字距紧（但 ≥ `-0.04em`）。
- 高对比配色：黑 / 白 / 电光蓝 / 荧光黄硬碰撞。
- 数字用 `tabular-nums`；图片 grayscale/高对比 + 粗黑边 + 硬投影。
- 暴露结构：分隔线、列边、基线可见。

**Don't**
- 别加圆角、别用模糊柔影、别用渐变把边糊掉——这会直接抹掉风格身份。
- 别把荧光黄当小字前景色或链接色（不达 AA）。
- 别堆 emoji 当图标（用粗线条内联 SVG）。
- 别让字距低于 `-0.04em`（标题会粘字）。
- 别嵌套卡片、别用魔法 z-index（用语义 `--ds-z-*`）。

---

## 12. 如何接入

1. **引入变量**（提供 `:root` 亮色 + `[data-theme="dark"]` / `.dark` 暗色）：
   ```html
   <link rel="stylesheet" href="path/to/12-brutalism/tokens.css">
   ```
2. **用变量**（绝不硬编码颜色 / 圆角 / 阴影）：
   ```css
   .btn-primary{
     background: var(--ds-primary);
     color: var(--ds-primary-fg);
     border: 2px solid var(--ds-border);
     border-radius: var(--ds-radius-sm);   /* = 0 */
     box-shadow: var(--ds-shadow-sm);       /* 硬偏移 */
     font-family: var(--ds-font-mono);
     letter-spacing: var(--ds-tracking-tight);
   }
   ```
3. **切换暗色**：给 `<html>` 设 `data-theme="dark"`（或加 `.dark` 类）。
4. **Tailwind 项目**：先引 `tokens.css`，再在 `tailwind.config.js`：
   ```js
   module.exports = { presets: [require('path/to/12-brutalism/tailwind.preset.js')] }
   ```
   即可用 `bg-bg text-fg border-2 border-border shadow-md rounded-none font-mono` 等工具类。
5. **字体**：拉丁字形引共享 `_fonts/fonts.css`（JetBrains Mono + Inter）；中文走系统回退，无需改 token。
