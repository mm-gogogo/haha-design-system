# 国潮 / 新中式 Guochao

> 宣纸为底、朱红为魂、靛蓝为骨、金线点缀的现代中式设计系统。衬线作骨、水墨留白、克制不喧。给文化品牌、国货茶饮、博物文创、节庆活动与中式内容站——让"中国味"现代、克制、耐看，而非堆满龙凤祥云的廉价喜庆。

---

## 1. 一句话气质

把传统宣纸、水墨山水与朱红印章，翻译成一套能在屏幕上长期使用的现代界面语言：**纸的温度、墨的沉静、朱红的精神、金的点睛**。它该像一方好印章——分量在那儿，却不喧哗。

---

## 2. 设计哲学 / 性格

本 Kit 继承统一的 `--ds-*` Token 契约（变量名、文件结构、组件清单全部一致），在此之上"换肤"出新中式气质。它继承的是工程骨架，改写的是色、字、形、节奏四件事。

1. **宣纸而非纯白。** 主背景是带暖意的宣纸色（`#f5efe2`），文字是带暖的墨（`#2b2620`）。屏幕不再是冷白的纸，而是有温度的宣。
2. **朱红是精神，不是底色。** 朱红只出现在主操作、选中态、印章与极少数点睛处——稀少，所以有力。绝不大面积铺红。
3. **金线只描边、不填面。** 金（`#b8893a`）是点缀色，用于细描边、印章、分隔线的金丝，**从不**作通用文字色或大色块（饱和金当文字过不了 AA，也显俗）。
4. **留白即章法。** 借水墨的"计白当黑"：区块之间慷慨留白，靠分隔线与节奏分层，而不是靠阴影堆叠。
5. **衬线作骨、黑体作肉。** 标题走宋体类衬线（思源宋/Songti），带笔锋与文气；正文走无衬线，保证屏幕可读。两者对比本身就是层级。

**与基底的关系：** 继承 Geist 的变量契约与组件结构；改掉它的中性灰与冷白——这套风格的身份恰恰在于暖纸、朱红与衬线。

---

## 3. 何时用 / 何时别用

**适合**
- 文化品牌、博物馆 / 美术馆、非遗与文创电商。
- 国货、茶饮、白酒、糕点、香道等"东方生活方式"品牌。
- 春节 / 中秋 / 二十四节气等节庆活动页与营销专题。
- 中式内容站：诗词、书画、典籍、长文阅读。

**不适合**
- 需要高密度数据 / 强工具感的 B 端后台（用企业 / B-side）。
- 强科技 / 极客气质的开发者产品（用暗黑科技）。
- 面向儿童的活泼场景（用可爱风）。
- 追求极致中性、品牌无色彩倾向的通用系统。

> 提醒：别把"中国风"做成满屏龙凤、大红配大金。本风格的高级感来自**克制**——大量宣纸留白 + 一点朱红 + 一缕金线。

---

## 4. 颜色

所有颜色走 `--ds-*` 语义 Token，组件不硬编码色值。下表 hex 为参考，实际以 `tokens.css` 为准。

### 表面与文字

| Token | 亮（宣纸） | 暗（夜墨） | 用途 |
| --- | --- | --- | --- |
| `--ds-bg` | `#f5efe2` | `#1a1714` | 主背景（宣纸 / 深墨） |
| `--ds-bg-subtle` | `#efe7d6` | `#221d18` | 次背景 · 区块底 |
| `--ds-bg-elevated` | `#fffdf7` | `#2a241e` | 浮层 / 卡片（略亮于纸） |
| `--ds-bg-sunken` | `#e8dfc9` | `#15110d` | 凹陷 · 输入槽 / 代码块 |
| `--ds-fg` | `#2b2620` | `#efe7d6` | 主文字 · 墨（对底 ≥11.9:1） |
| `--ds-fg-muted` | `#6b6253` | `#b9ad97` | 次要文字（≥5.0:1） |
| `--ds-fg-subtle` | `#6f6657` | `#94886f` | 占位 / 弱文字（≥4.5:1，达标正文） |
| `--ds-fg-on-accent` | `#fbf5e9` | `#1a1714` | 落在强调色上的文字 |
| `--ds-border` | `#e0d8c5` | `#3a332a` | 常规描边 / 分隔线 |
| `--ds-border-strong` | `#c9bea6` | `#534938` | 强描边 / 分隔 |

### 品牌与强调

| Token | 亮 | 暗 | 用途 |
| --- | --- | --- | --- |
| `--ds-primary` | `#c8341f` | `#e0533a` | 朱红 · 主操作 / 选中（对底 ≥5.0:1） |
| `--ds-primary-hover` | `#aa2817` | `#ea6850` | hover |
| `--ds-primary-active` | `#8f1f10` | `#cf4730` | active / pressed |
| `--ds-primary-fg` | `#fbf5e9` | `#1a1714` | 朱红上的文字（≥5.1:1） |
| `--ds-accent` | `#1b3b6f` | `#7ea3d6` | 靛蓝 · 链接 / 次强调（≥9.6:1 / 7.1:1） |
| `--ds-accent-fg` | `#fbf5e9` | `#131c2b` | accent 上的文字 |
| `--ds-gold` | `#b8893a` | `#d3a85a` | **金 · 仅描边 / 印章 / 分隔点缀**（非通用文字色） |

**强调色梯度（朱红）：** `primary-active 8f1f10` → `primary c8341f` → `primary-hover aa2817`。
按下更深、悬停略深、默认居中——形成自然的"按压感"。暗色整体提亮一档，保证在深墨底上仍醒目且达标。

> **金的纪律：** `--ds-gold` 仅用于 1px 细描边、印章图形、分隔金线与小面积点睛。**不要**用它写正文或铺大色块——饱和金当文字对宣纸过不了 4.5:1，且会立刻显得廉价喜庆。

### 语义状态

每个语义色含 主色 + `-bg` 浅底 + `-fg` 底上文字，低饱和、偏暖，呼应宣纸。

| 语义 | 亮 主色 / 底 / 文字 | 暗 主色 / 底 / 文字 |
| --- | --- | --- |
| success | `#4f7a3f` / `#e8eedc` / `#2a4421` | `#8db877` / `#1e2a16` / `#dcecca` |
| warning | `#b0791a` / `#f6ecd3` / `#5a3d05` | `#d8aa4a` / `#2c2208` / `#f6e7c4` |
| danger | `#b3271a` / `#f7e3df` / `#5e150d` | `#e87a68` / `#321410` / `#f7ddd6` |
| info | `#1b3b6f` / `#e2e8f1` / `#142a4d` | `#7ea3d6` / `#121d2e` / `#d8e3f1` |

---

## 5. 字体

**对比轴：衬线标题 + 无衬线正文。** 标题用宋体类衬线带来文气与笔锋，正文用无衬线保证屏幕可读，两者的反差本身即层级。

- `--ds-font-serif`：`"Noto Serif", "Source Han Serif SC", "Noto Serif SC", "Songti SC", "STSong", Georgia, serif`
  拉丁字形走本地 Noto Serif；**中文走思源宋 / Songti 系统回退**——预览页不外链任何中文字体，靠系统宋体呈现宋韵。
- `--ds-font-sans`：`"Inter", -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif`（正文 / 控件 / 元信息）。
- `--ds-font-mono`：`"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace`（数据 / 代码 / tabular 数字）。

**比例尺**（标题拉开、正文舒适）：

| Token | px | 典型用途 |
| --- | --- | --- |
| `--ds-text-3xl` | 52 | 首屏大标题 |
| `--ds-text-2xl` | 38 | h1 |
| `--ds-text-xl` | 28 | h2 |
| `--ds-text-lg` | 22 | h3 / 小标题 |
| `--ds-text-md` | 18 | 导语 |
| `--ds-text-base` | 16 | 正文 |
| `--ds-text-sm` | 14 | 元信息 / 控件 |
| `--ds-text-xs` | 12 | 脚注 / 标签 |

**字重：** normal 400 / medium 500 / **bold 700**（标题用 700，宋体加粗笔锋更足）。
**字距：** 标题 `--ds-tracking-tight: -0.02em`（不低于 -0.04em 下限，避免粘字）；正文 0。
**行高：** tight 1.22（标题）/ normal 1.55 / relaxed 1.8（中文长正文）。

**中文适配：** 标题宋体配 -0.02em 略收，正文黑体行高 1.8、行宽锁 ≤75ch（约 36 汉字），方块字读起来才不累。

---

## 6. 间距与布局

- **比例尺**（4px 基）：1=4 / 2=8 / 3=12 / 4=16 / 5=20 / 6=24 / 7=32 / 8=40 / 9=48 / 10=64 / 11=80 / 12=96。
- **节奏：** 组内 8–12、组间 16–24、区块层级 48–80。新中式偏疏朗——区块之间敢留白，是"计白当黑"的章法。
- **容器宽：** 内容站约 1080px；长文阅读容器锁 ~680px（≤75ch）。
- **栅格：** 12 栏意识，常用 2 / 3 / 4 列卡片网格，≤640px 收为单列。

---

## 7. 圆角 / 阴影 / 描边

- **圆角（小而雅）：** `sm 4` / `md 8` / `lg 12` / `full 9999`。新中式收得克制——大圆角会冲淡器物的端正感。
- **阴影（克制）：** 三档极轻投影，靠留白与分隔线分层，而非堆叠投影。`sm` 几乎贴边，`md/lg` 仅在浮层 / 弹层用一层柔影。**不做** 1px 描边 + 大模糊阴影并存的 ghost-card。
- **描边：** 常规 `--ds-border`、强调 `--ds-border-strong`；点睛处可用 `--ds-gold` 画 1px 金丝细边（如印章、精选卡），但仅作点缀。

---

## 8. 动效

- **时长：** fast 140ms / base 220ms / slow 320ms。
- **曲线：** `--ds-ease: cubic-bezier(.22,.61,.36,1)`——温润 ease-out，如笔墨晕开，无弹跳。
- **典型过渡：** 按钮底色 / 描边渐变、卡片 hover 抬升、浮层淡入上移、主题切换全页色彩流动。
- **`prefers-reduced-motion`：** 预览页与组件均在 `@media (prefers-reduced-motion: reduce)` 下将动画 / 过渡降到 0.01ms，并关闭平滑滚动。

---

## 9. 组件规格

控件文字走无衬线，标题走衬线；颜色一律 `var(--ds-*)`。

- **按钮（全状态）**
  - 高度：小 32 / 中 40 / 大 48；圆角 `--ds-radius-sm`(4)；字号 sm/base。
  - 主操作：朱红底 `--ds-primary` + `--ds-primary-fg`，hover→`-hover`、active→`-active`。
  - 次操作：`--ds-bg-elevated` 底 + `--ds-border-strong` 边 + `--ds-fg`。
  - 文字按钮：透明底 + 朱红字。危险：`--ds-danger` 底 + 白字。
  - 禁用：`opacity:.5` + `not-allowed`；焦点：`--ds-focus-ring`。
- **输入框 / 表单**：高 40、圆角 4、`--ds-bg-elevated` 底 + `--ds-border` 边；focus 换 `--ds-primary` 边 + 焦点环；错误态 `--ds-danger` 边 + 提示字；含 textarea / select / checkbox / radio / switch（`accent-color: --ds-primary`）。
- **卡片**：`--ds-bg-elevated` + 1px `--ds-border` + `--ds-radius-md` + `--ds-shadow-sm`；hover 升至 `--ds-shadow-md` 并强描边。精选卡可加 1px 金丝边点缀。
- **徽章 / 标签**：药丸（`--ds-radius-full`），高 22；默认中性，另有 primary / success / warning / danger / info；可做金丝描边的 `＃标签`。
- **提示条 Alert**：**前置语义 SVG 图标 + 浅色 `*-bg` 底 + 1px 全描边**（无侧边色条）；四语义齐全。
- **导航**：顶栏（sticky，半透明纸底 + 1px 底分隔 + 朱红品牌点）+ Tabs（下划线选中走朱红）+ 面包屑 + 分页。
- **其他**：下拉菜单、工具提示、模态框、Toast、步进器——层级走语义 `--ds-z-*`（dropdown<sticky<modal-backdrop<modal<toast<tooltip）。

---

## 10. 可访问性

- **对比度：** 正文 ≥4.5:1，大字 / UI ≥3:1，亮暗双主题均已校验达标（含弱文字 `--ds-fg-subtle`）。
- **金不作文字色：** 因饱和金过不了正文对比，`--ds-gold` 仅用于描边 / 图形点缀。
- **焦点：** 所有可交互元素 `:focus-visible` 显示 `--ds-focus-ring`（朱红双环），键盘可见。
- **触控目标：** 控件最小高度 ≥40px，移动端可点区域 ≥44px。
- **可减弱动效：** 遵循 `prefers-reduced-motion`。
- **语义图标：** 状态 / 章节 / logo 全部内联 SVG（零 emoji），图标带 `aria-hidden` 或图标按钮带 `aria-label`。

---

## 11. Do / Don't

**Do**
- 大量宣纸留白 + 一点朱红 + 一缕金线——克制出高级。
- 标题用衬线（宋体）、正文用黑体，保持对比轴。
- 朱红只给主操作 / 选中 / 印章等真正重要处。
- 金仅作 1px 细描边、印章、分隔点缀。
- 图片配工笔 / 水墨细边框，朱红印章角标，讲究留白。

**Don't**
- 别满屏大红配大金、堆龙凤祥云——廉价喜庆是本风格头号翻车点。
- 别用 `--ds-gold` 写正文或铺大色块（过不了 AA，且显俗）。
- 别用大圆角 / 重投影 / 渐变文字冲淡端正与文气。
- 别把朱红当背景大面积铺；别忽略中文行高（≥1.8）与行宽（≤75ch）。
- 别用 emoji 当图标 / 印章——一律内联 SVG。

---

## 12. 如何接入

1. **引入 Token（必做）：** 在入口引 `tokens.css`，即获得 `:root` 亮色 + `[data-theme="dark"]`（含 `.dark` 兼容）暗色。
   ```html
   <link rel="stylesheet" href="./styles/10-guochao/tokens.css">
   ```
2. **用变量，不硬编码：** 组件一律 `var(--ds-*)`，例如：
   ```css
   .btn-primary { background: var(--ds-primary); color: var(--ds-primary-fg); border-radius: var(--ds-radius-sm); }
   .ink-card  { background: var(--ds-bg-elevated); border: 1px solid var(--ds-border); box-shadow: var(--ds-shadow-sm); }
   .seal-edge { border: 1px solid var(--ds-gold); } /* 金丝点缀 */
   ```
3. **切换主题：** 设 `document.documentElement.dataset.theme = 'dark'`（或加 `.dark` 类）即切夜墨模式。
4. **Tailwind 项目：** 引预设并导入 tokens.css：
   ```js
   // tailwind.config.js
   module.exports = { presets: [require('./styles/10-guochao/tailwind.preset.js')] }
   ```
   即可用 `bg-bg text-fg bg-primary text-primary-fg border-border rounded-md font-serif` 等工具类，暗色自动跟随 `[data-theme="dark"]` / `.dark`。
5. **字体：** 拉丁字形可引共享 `_fonts/fonts.css`（本地 Noto Serif / Inter）；中文走思源宋 / Songti 系统回退，无需外链。

> 机器可读 Token 见 `tokens.json`；可视化总览双击 `preview.html`（自包含，仅引用 `../../_fonts/fonts.css` 与 `../../_assets/**` 本地素材，无任何外网资源）。
