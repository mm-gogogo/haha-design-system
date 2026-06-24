# Cyberpunk · 赛博朋克风 Design Kit

> 暗色优先的「霓虹夜城」设计系统：暗紫夜底 + 霓虹品红/青/电黄 + 发光描边、扫描线、轻故障感 + 等宽 HUD。给义体黑客控制台、Web3 / 游戏 / 电竞 / 数据港、夜店级营销页用——一眼就该是夜城。

本 Kit 严格遵守 `ds-token-contract@1`：`--ds-*` 变量名固定，仅取值随风格变，任何项目都能无痛切换风格。除 `../../_fonts/fonts.css` 与 `../../_assets/**` 本地素材外，preview/README 不引任何外网资源。

---

## 1. 一句话气质

赛博朋克 = 在近黑的暗紫夜空里，用霓虹品红与青色发光的等宽 HUD。它不是「换个紫色主题」，而是一整套发光、扫描线、轻故障的视觉语言。`:root` 默认即暗色（夜城基调），`[data-theme="light"]` / `.light` 提供干净白底亮版（青/品红收敛达 AA），方便白天 / 打印 / 嵌入亮色容器。

---

## 2. 设计哲学 / 性格

与 Geist 中性基底相比，本风格**继承**其变量契约、间距比例、利落动效曲线；**改写**几乎所有视觉气质：

1. **暗色优先（dark-first）。** `:root` 即暗：深紫黑底 `#0a0612`，主区抬升到 `#14091f`。亮版只是「覆盖」，不是默认。
2. **霓虹三色发光。** 品红 `#ff2bd6`（主操作）、青 `#00f0ff`（链接/强调/focus）、电黄 `#ffe600`（警示）。强调靠**发光阴影**而非渐变填色。
3. **扫描线 + 轻故障。** 全屏极淡扫描线纹理；display 标题可加 glitch（青/品红错位描边）。点到为止，不抢内容。
4. **等宽即身份。** display 与所有数据/HUD 走 `JetBrains Mono`；长正文用 `Inter` 保证可读。
5. **硬朗小圆角。** 2 / 6 / 10，棱角分明，配合霓虹辉光阴影，而非柔和投影。
6. **克制无障碍。** 辉光/glitch/扫描线全部在 `prefers-reduced-motion` 下关闭；亮版自动关辉光以保 AA。

---

## 3. 何时用 / 何时别用

**适合：** 义体黑客 / 终端 / 控制台类工具、Web3 / 加密 / NFT、游戏与电竞官网、夜店 / 音乐节 / 潮牌营销页、数据可视化大屏、需要强烈未来夜感的产品。

**别用：** 政务 / 金融 / 医疗 / 法务等需要稳重信任感的场景；面向银发或低视力为主的用户群（高饱和霓虹长时间阅读疲劳）；需要大量长文阅读的内容站（可改用 editorial）；预算要求极致克制、零装饰的 B 端后台（用 enterprise / material）。

---

## 4. 颜色

所有颜色走 `var(--ds-*)`，切主题时取值翻转。下表给暗版（默认）+ 亮版取值与用途。已逐对核验 WCAG：正文 ≥4.5:1，大字/图标 ≥3:1。

### 表面与文字

| Token | 暗（默认） | 亮 | 用途 |
| --- | --- | --- | --- |
| `--ds-bg` | `#0a0612` | `#ffffff` | 主背景（夜城底） |
| `--ds-bg-subtle` | `#100a1c` | `#f7f4fb` | 次背景 / 分组底 |
| `--ds-bg-elevated` | `#14091f` | `#ffffff` | 抬起表面 / 卡片 / 弹层 |
| `--ds-bg-sunken` | `#070410` | `#f0ebf7` | 凹陷 / 输入槽 / 代码块 |
| `--ds-fg` | `#e8e0ff` | `#1a1026` | 主文字（紫白） |
| `--ds-fg-muted` | `#9a86c0` | `#574a6b` | 次要文字 |
| `--ds-fg-subtle` | `#8a78ac` | `#6e6285` | 占位 / 弱文字（已 ≥4.5:1） |
| `--ds-fg-on-accent` | `#0a0612` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#2a1a3a` | `#e6dcf0` | 常规描边 |
| `--ds-border-strong` | `#422a5c` | `#cdbce0` | 强描边 / 分隔 |

### 品牌与强调

| Token | 暗 | 亮 | 用途 |
| --- | --- | --- | --- |
| `--ds-primary` | `#ff2bd6` | `#c40d9e` | 主操作（按钮/选中），霓虹品红 |
| `--ds-primary-hover` | `#ff52e0` | `#d61bb0` | hover |
| `--ds-primary-active` | `#e016ba` | `#a4067f` | active / pressed |
| `--ds-primary-fg` | `#0a0612` | `#ffffff` | 主操作上的文字 |
| `--ds-accent` | `#00f0ff` | `#00708a` | 链接 / 次强调 / focus，青 |
| `--ds-accent-fg` | `#04121a` | `#ffffff` | accent 上的文字 |

> **强调色梯度（暗）：** primary `#e016ba`(active) → `#ff2bd6`(default) → `#ff52e0`(hover)，由暗到亮表示交互推进；accent 青固定 `#00f0ff` 做链接与 focus，与品红形成经典赛博双色对撞。亮版整体下压一档以达 AA。

### 语义状态（每个含 主色 / `-bg` 浅底 / `-fg` 底上文字）

| 语义 | 暗 主色 | 暗 -bg | 暗 -fg | 亮 主色 | 亮 -bg | 亮 -fg |
| --- | --- | --- | --- | --- | --- | --- |
| success | `#1fffb0` | `#052418` | `#a6ffe2` | `#0a7f57` | `#e4f9f0` | `#044029` |
| warning | `#ffe600` | `#2a2400` | `#fff4a3` | `#8a6d00` | `#fdf6d6` | `#443600` |
| danger | `#ff3b6b` | `#2c0713` | `#ffc2d2` | `#d11240` | `#ffe8ee` | `#6b0a22` |
| info | `#00f0ff` | `#042430` | `#aef4ff` | `#0073a8` | `#e2f4fb` | `#003a55` |

> 电黄 `#ffe600` 是赛博朋克标志色，仅做 warning；亮版收敛到 `#8a6d00` 才能在白底达 AA（黄色在白底极难达标，必须压暗）。

---

## 5. 字体

- **`--ds-font-mono` = `JetBrains Mono`**（本地 woff2，OFL）：做 **display 标题 + 所有数据 / HUD / 代码 / 标签**。等宽是本风格身份，终端感的来源。
- **`--ds-font-sans` = `Inter`**：承载**长正文**，保证可读，避免大段等宽阅读疲劳。
- **中文**：走系统 `PingFang SC` / `Microsoft YaHei` 回退（字体文件仅含拉丁字形）。中文标题建议也用 sans 字族以保字形完整。

**比例尺：** xs 12 · sm 13 · base 14 · md 16 · lg 20 · xl 24 · 2xl 32 · 3xl 48。
**字重：** normal 400 · medium 500 · bold 600（霓虹发光已提供层级，不需要超粗字重）。
**字距：** display 标题 `--ds-tracking-tight: -0.04em`（已达打磨规范下限，更紧会粘字）；正文 0。
**数字：** 表格 / 指标 / 分页一律 `tabular-nums` 对齐。

---

## 6. 间距与布局

- **比例尺（4px 基）：** 1=4 · 2=8 · 3=12 · 4=16 · 5=20 · 6=24 · 7=32 · 8=40 · 9=48 · 10=64 · 11=80 · 12=96。
- **节奏：** 组内 8–12，组间 16–24，区块层级 32–64；控制台 / HUD 偏高密度。
- **容器宽：** 内容主轴 `max-width: 1180px` 居中；正文行宽 ≤ 75ch。
- **栅格：** 12 栏意识；卡片 `repeat(auto-fit, minmax(280px,1fr))`；图库 4 列等高网格；仪表盘 侧栏 180–220px + 流式主区。

---

## 7. 圆角 / 阴影 / 描边

- **圆角：** sm 2 · md 6 · lg 10 · full 9999。硬朗小圆角是赛博气质，别放大成可爱风。
- **阴影 = 暗投影 + 霓虹辉光（暗版）：**
  - sm：`0 0 0 1px border, 0 2px 8px -3px rgba(0,0,0,.7)`
  - md：叠 `0 0 26px -10px rgba(255,43,214,.28)`（品红辉光）
  - lg：叠 `0 0 44px -12px rgba(0,240,255,.32)`（青辉光）
  - 亮版辉光显著减弱，回到常规柔影。
- **描边：** 1px 为主；卡片用 `border` + 阴影第一层 `0 0 0 1px border` 双重勾边，强化霓虹边框感。

> **关于 ghost-card：** 暗黑科技 / 赛博的「霓虹辉光阴影 + 1px 描边」是**风格身份**（POLISH-SPEC 规则 3 明确豁免），不算随手装饰，保留。

---

## 8. 动效

- **曲线：** `--ds-ease: cubic-bezier(.2,.8,.2,1)`。
- **时长：** fast 150ms · base 200ms · slow 260ms。利落，不拖沓。
- **典型过渡：** hover 上色 + 辉光描边（box-shadow）；弹层入场 fade / 轻位移；状态灯缓慢呼吸；display 标题轻 glitch；全屏极淡扫描线。
- **`prefers-reduced-motion: reduce`：** 关闭**全部**装饰动效——扫描线、辉光呼吸、glitch、弹层入场、光标闪烁全部停掉；交互仍即时生效，仅去掉动画。

---

## 9. 组件规格

| 组件 | 规格要点 |
| --- | --- |
| **按钮 Button** | 高 sm32 / md40 / lg48；圆角 sm(2)；等宽字。primary=品红填充，hover 加品红辉光；secondary=青描边，hover 反白填充青；tertiary=透明，hover 浅底；danger=danger 填充。disabled `opacity .45` 且去辉光。focus 走 `--ds-focus-ring`。 |
| **输入框 Input** | 高 40；`bg-sunken` 凹槽 + `border-strong`；focus 边框转青 + 青辉光环。支持前/后置图标（`has-lead`/`has-trail`）。错误态 danger 边框 + 前置 danger 图标。占位文字 `fg-subtle`（已达 AA）。 |
| **卡片 Card** | `bg-elevated` + 1px border + md 辉光阴影；标题等宽带 ▍ 光标；指标青色等宽 `tabular-nums`。不嵌套卡片。 |
| **徽章 / 标签 Badge** | 等宽小字、大写、字距 .06em；圆角 sm；各语义色用 `-bg` 底 + 主色描边 + `-fg` 字。 |
| **提示条 Alert** | 前置语义 SVG 图标 + 浅 `-bg` 底 + 1px 全描边。**不用侧边粗色条**（POLISH-SPEC 规则 2）。 |
| **导航 Nav** | 顶栏等宽链接，active 项青色下划线；侧栏 active 项青色 + inset 辉光（非粗色条）。 |
| **进阶** | modal / dropdown / tooltip / toast / pagination / stepper / breadcrumb 全部到位，状态齐全；层级走语义 `--ds-z-*`（dropdown<sticky<modal-backdrop<modal<toast<tooltip），无 9999 魔法值。 |

---

## 10. 可访问性

- **对比度：** 全部语义色对核验 WCAG——正文 ≥4.5:1，大字 / 图标 ≥3:1，暗亮双版均达标。电黄、青等高难色在亮版均已压暗到达标值。
- **焦点：** 所有可交互元素 `:focus-visible` 显示 `--ds-focus-ring`（双层环 + 青辉光），暗亮版都清晰可见。
- **触控目标：** 按钮 / 输入 ≥40px 高；图标按钮 40×40；移动端列表行 ≥44px。
- **可减弱动效：** `prefers-reduced-motion` 下关闭辉光呼吸 / 扫描线 / glitch / 入场动画。
- **图标语义：** 装饰图标 `aria-hidden="true"`；纯图标按钮带 `aria-label`；状态用图标 + 文字双编码，不靠颜色单独传达。

---

## 11. Do / Don't

**Do**

- 用霓虹**发光阴影**做强调与层级，让品红 / 青在暗底「亮起来」。
- display 与数据走等宽；数字用 `tabular-nums` 对齐。
- 图片统一加 青/品红 duotone + 扫描线 + 霓虹描边（见第 12 节示例）。
- 文案写真实可信的夜城内容（节点名、延迟、报酬），不要 Lorem。
- 亮版主动收敛饱和与辉光，先过 AA 再谈好看。

**Don't**

- 别用渐变填充文字（`background-clip:text`）——改纯色 + 字重 / 字号 / 发光阴影（POLISH-SPEC 规则 2）。
- 别堆 emoji 当图标——一律内联 SVG（`currentColor`，线宽 ~1.8）。
- 别把霓虹饱和度铺满整页——暗底为主，霓虹是点缀，否则刺眼且无层级。
- 别用侧边粗色条做 alert——改前置图标 + 浅底 + 全描边。
- 别在亮版保留强辉光——会糊掉文字、破坏 AA。
- 别放大圆角——硬朗小圆角是身份，放大就成了可爱风。

---

## 12. 如何接入

**1) 引 tokens.css（提供 `:root` 暗色基底 + 亮色覆盖）**

```html
<link rel="stylesheet" href="styles/13-cyberpunk/tokens.css" />
<link rel="stylesheet" href="_fonts/fonts.css" />
```

**2) 用变量（永远别硬编码颜色）**

```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  font-family: var(--ds-font-mono);
}
.btn-primary:hover { box-shadow: 0 0 22px -3px var(--ds-primary); }
.card:focus-within { box-shadow: var(--ds-focus-ring); }
```

**3) 切主题（暗 ⇄ 亮）**

```js
// 默认即暗（:root）。切到亮色：
document.documentElement.setAttribute('data-theme', 'light');
// 切回暗色：
document.documentElement.removeAttribute('data-theme');
```

也可用 `.dark` / `.light` 类在亮色容器内强制局部主题。

**4) Tailwind 项目引 preset**

```js
// tailwind.config.js
module.exports = {
  presets: [require('./styles/13-cyberpunk/tailwind.preset.js')],
};
```

之后即可用 `bg-bg text-fg border-border text-primary shadow-md shadow-glow` 等语义工具类；`shadow-glow` / `shadow-glow-accent` / `shadow-glow-warning` 提供霓虹发光。

**5) 图片处理（保持赛博身份）**

给图片容器叠 青/品红 duotone（`mix-blend-mode:screen` 的对角渐变）+ 扫描线（`repeating-linear-gradient`）+ 霓虹描边（`box-shadow`）。亮版把 blend 改 `multiply`、降低辉光。完整可复制实现见 `preview.html` 的 `.media` / `.hero-media` / `.overlay-card` / `.bg-feature`。

---

**文件清单：** `README.md` · `tokens.css` · `tokens.json` · `tailwind.preset.js` · `preview.html`。双击 `preview.html` 即可离线查看完整展示（默认暗色，右上角可切亮色）。
