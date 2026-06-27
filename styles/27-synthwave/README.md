# Synthwave · 蒸汽波 / 合成波（Outrun）Design Kit

> 暗色优先的 80s retro-future 设计系统：magenta→purple→cyan/orange 日落、霓虹透视网格地平线、复古条纹太阳、chrome/outline display 字与克制扫描线。适合虚构 synth label、街机厅、海岸音乐节、电台与高氛围活动产品。

本 Kit 严格遵守 `ds-token-contract@1`：`--ds-*` 变量名固定，仅取值随风格变。`:root` 默认暗色，`[data-theme="light"]` / `.light` 为 Miami pastel day 亮色覆盖，`[data-theme="dark"]` / `.dark` 与 `:root` 同值。

---

## 1. 一句话气质

Synthwave 是「驶向霓虹日落的复古未来」：深紫夜幕、粉色主操作、青色地平线、橙黄条纹太阳与向消失点收束的网格地板。它不是雨夜反乌托邦，也不是普通紫色主题；它的第一识别信号必须是 Outrun 网格地平线 + 条纹太阳 + sunset gradient。

---

## 2. 设计哲学 / 性格

1. **暗色优先。** `:root` 即夜幕：`#150a2a` 主背景，卡片抬升到 `#251444`；亮版是 Miami pastel day 覆盖。
2. **日落三段式。** primary 粉、border purple、accent cyan、warning orange 共同构成 sunset gradient；正文仍放在实体表面上。
3. **网格和太阳是身份。** 透视网格地板收束到地平线，半圆条纹太阳藏在 headline 后，扫描线只做低透明质感。
4. **Display 可以 chrome，正文必须清晰。** 大标题可用 outline/gradient/stroke；正文、表单、表格、按钮文字必须用 AA 实体色。
5. **辉光克制。** 按钮 hover、状态灯、hero 地平线可 glow；大面积文本和密集列表不发光。
6. **动效可静止。** `prefers-reduced-motion` 下网格、扫描线、太阳和入场动画停止，保留静态画面。

---

## 3. 何时用 / 何时别用

**适合：** synth label / radio、街机厅、音乐节、游戏活动页、潮流发布页、舞台控制台、视觉型数据大屏、需要乐观复古未来感的品牌体验。

**别用：** 长文阅读、政务 / 医疗 / 金融 / 法务等高信任场景、极简 B 端后台、低视力用户为主且需要长时间操作的产品。若场景需要 dystopia、雨夜、故障、压迫感，应使用另一套风格，不要把本套做成 cyberpunk。

---

## 4. 颜色

所有颜色通过 `var(--ds-*)` 使用。暗版保持日落霓虹，亮版采用 Miami pastel day 并压低主色以满足 WCAG AA。

### 表面与文字

| Token | 暗（默认） | 亮 | 用途 |
| --- | --- | --- | --- |
| `--ds-bg` | `#150a2a` | `#fdf2f8` | 主背景 |
| `--ds-bg-subtle` | `#1d0f38` | `#f7e6f2` | 次背景 / 分组底 |
| `--ds-bg-elevated` | `#251444` | `#fffafd` | 卡片 / 弹层 |
| `--ds-bg-sunken` | `#0e0620` | `#f0d9ea` | 输入槽 / 代码块 |
| `--ds-fg` | `#f4ecff` | `#2a1535` | 主文字 |
| `--ds-fg-muted` | `#b9a8e0` | `#6a4a78` | 次要文字 |
| `--ds-fg-subtle` | `#8a76c0` | `#8a6a98` | 占位 / 弱文字 |
| `--ds-fg-on-accent` | `#1a0820` | `#ffffff` | accent 上文字 |
| `--ds-border` | `#3a2470` | `#f0cfe4` | 常规描边 |
| `--ds-border-strong` | `#6a4ac0` | `#c44a9a` | 强描边 / 地平线紫 |

### 品牌与强调

| Token | 暗 | 亮 | 用途 |
| --- | --- | --- | --- |
| `--ds-primary` | `#ff5fa2` | `#c01f72` | 主操作 / 粉色霓虹 |
| `--ds-primary-hover` | `#ff7db5` | `#a81a65` | hover |
| `--ds-primary-active` | `#ee4a90` | `#8f1556` | active |
| `--ds-primary-fg` | `#1a0820` | `#ffffff` | 主按钮文字；暗版粉按钮用深色字达 AA |
| `--ds-accent` | `#29e0e0` | `#0d6f7e` | 链接 / 次强调 / 地平线 cyan |
| `--ds-accent-fg` | `#042020` | `#ffffff` | accent 上文字 |

**强调色梯度：** 暗版 hero 使用 `primary → border-strong → accent → warning`，形成 magenta → purple → cyan/orange 的日落。亮版使用 `bg → warning-bg → info-bg`，保留 Miami pastel day 的粉、桃、青，但正文不直接压在渐变上。

### 语义状态

| 语义 | 暗 主色 | 暗 -bg | 暗 -fg | 亮 主色 | 亮 -bg | 亮 -fg |
| --- | --- | --- | --- | --- | --- | --- |
| success | `#3fd58f` | `#06281c` | `#c9f5dd` | `#1f8a5a` | `#e2f4ec` | `#0a3a26` |
| warning | `#ffc24d` | `#241803` | `#fff0c0` | `#9a6a00` | `#f6eccf` | `#473006` |
| danger | `#ff5c72` | `#2a0c14` | `#ffd0d8` | `#c01f3a` | `#f9e0e4` | `#5a0f1c` |
| info | `#29e0e0` | `#04222a` | `#c0f5f5` | `#1f6f9a` | `#e2eef6` | `#0c2c40` |

---

## 5. 字体

- **`--ds-font-sans` = `"Inter",-apple-system,"PingFang SC",sans-serif`**：正文、按钮、headline 基础字族。大标题可加粗到 800/900 并使用宽字距。
- **`--ds-font-mono` = `"JetBrains Mono",monospace`**：频率、BPM、时间码、表格数字、代码与小标签。
- **`--ds-font-serif` = `"Inter",Georgia,"Songti SC",serif`**：契约保留，默认不用 serif 作为身份。
- **比例尺：** xs 12 · sm 13 · base 14 · md 16 · lg 20 · xl 24 · 2xl 32 · 3xl 48。
- **字重：** normal 400 · medium 500 · bold 600；display 可在组件 CSS 中提升。
- **字距：** token 继承 `--ds-tracking-tight:-0.04em`；Synthwave display 可局部用 `.08em` 宽 tracking，正文保持 0。
- **中文适配：** 中文走系统 `PingFang SC`，不要强行给中文使用 outline 小字号。

---

## 6. 间距与布局

- **比例尺（4px 基）：** 1=4 · 2=8 · 3=12 · 4=16 · 5=20 · 6=24 · 7=32 · 8=40 · 9=48 · 10=64 · 11=80 · 12=96。
- **节奏：** 控制台密度保持 8–16px；营销/hero 使用 32–64px 大间距，让日落场景有呼吸。
- **容器：** preview 主容器 `max-width:1180px`；正文行宽建议 ≤75ch。
- **栅格：** 卡片 `repeat(auto-fit,minmax(280px,1fr))`；桌面布局可用 180–230px 侧栏 + 流式主区。
- **Outrun scene：** grid floor 必须在容器内 `overflow:hidden`，太阳和地平线不得造成 390px 移动端横向滚动。

---

## 7. 圆角 / 阴影 / 描边

- **圆角：** sm 2 · md 6 · lg 10 · full 9999。小圆角保留街机面板感，避免变成柔软糖果风。
- **暗版阴影：**
  - sm：`0 0 0 1px var(--ds-border),0 2px 10px -4px rgba(255,95,162,.3)`
  - md：`0 0 0 1px var(--ds-border),0 8px 28px -10px rgba(0,0,0,.7),0 0 24px -8px rgba(41,224,224,.3)`
  - lg：`0 0 0 1px var(--ds-border),0 16px 48px -14px rgba(0,0,0,.8),0 0 40px -10px rgba(255,95,162,.4)`
- **亮版阴影：** `rgba(120,40,90,...)` 的柔和 Miami pastel 投影，基本不使用强 glow。
- **描边：** 常规 1px；地平线和网格线使用 `accent` / `primary` 透明混合，卡片描边使用 `border`。

---

## 8. 动效

- **曲线：** `--ds-ease:cubic-bezier(.2,.8,.2,1)`。
- **时长：** fast 150ms · base 200ms · slow 260ms。
- **典型过渡：** 按钮 hover 加 glow；网格地板缓慢漂移；扫描线低速移动；太阳轻微 pulse；modal / toast 轻位移入场。
- **`prefers-reduced-motion: reduce`：** 网格、扫描线、太阳、状态灯、toast、modal、dropdown 和光标闪烁全部停止，保留静态视觉。

---

## 9. 组件规格

| 组件 | 规格要点 |
| --- | --- |
| **按钮 Button** | 高 sm32 / md40 / lg48；圆角 sm；primary=粉色填充，暗版文字 `#1a0820`，hover 用 `primary-hover` + 粉色 glow；secondary=cyan 描边，hover 反填充 cyan；danger=语义 danger。disabled `opacity:.45` 且去 glow。 |
| **输入框 Input** | 高 40；`bg-sunken` + `border-strong`；focus 用 `--ds-focus-ring`。错误态 danger 边框 + 语义图标。 |
| **卡片 Card** | `bg-elevated`、1px border、md shadow。标题可用 mono，小指标使用 accent + tabular numbers。不要卡片套卡片。 |
| **徽章 Badge** | mono 小字、大写或短标签、圆角 sm；状态徽章使用对应 `-bg` + `-fg` + 主色描边。 |
| **提示条 Alert** | 前置 inline SVG + 语义浅底 + 全描边。不要侧边粗色条。 |
| **导航 Nav** | 顶栏 active 用 accent 下划线；侧栏 active 用实体背景 + 内发光。 |
| **表格 Table** | 表头 mono 11px uppercase，数值右对齐并启用 `tabular-nums`。 |
| **移动 Mobile** | `.dvc17` 使用共享 device.css，不重定义设备框；暗屏保留 `sb-light`，亮主题下状态栏改回深色。 |

---

## 10. 可访问性

- **对比度：** 暗亮双主题正文均 ≥4.5:1；大字 / 图标 ≥3:1。暗版粉色 primary 按钮使用深色文字 `#1a0820`，不是白字。
- **正文不压渐变。** body copy、表单、表格和说明文字放在 solid surfaces；渐变只做 hero / 装饰。
- **焦点：** `--ds-focus-ring` 有底环、主色环与 glow，暗亮均清晰。
- **触控目标：** 按钮、输入、图标按钮和移动列表行保持 40–44px 以上。
- **非颜色编码：** 状态同时使用图标 / 文字 / 颜色，不只靠色彩。
- **减弱动效：** 遵守 `prefers-reduced-motion`，停止网格、扫描线和太阳动画。

---

## 11. Do / Don't

**Do**

- 把条纹太阳、透视网格地平线和 sunset gradient 放在首屏，让风格一眼可辨。
- 用实体表面承载正文，确保 AA；让装饰停在背景层。
- 保持 glow 克制，只给 primary CTA、状态灯、地平线和少量 hero 元素。
- 让文案围绕虚构电台、街机、音乐节、合成器和海岸夜巡展开。
- 亮版主动减弱辉光，使用 pastel day 色面而不是强霓虹。

**Don't**

- 不要把正文放在渐变或图片上，除非有足够深的 scrim。
- 不要把所有元素都加 glow，会糊、会累，也会失去层级。
- 不要滑向 cyberpunk：避免雨夜、压迫、黑客、故障、危险感和粉色 glitch。
- 不要用 emoji 当图标；使用 inline SVG 和 `currentColor`。
- 不要复制第三方 Outrun 海报或品牌元素；只借鉴类型语言。
- 不要让太阳或 grid floor 超出容器导致移动端横向滚动。

---

## 12. 如何接入

**1) 引 tokens.css**

```html
<link rel="stylesheet" href="_fonts/fonts.css" />
<link rel="stylesheet" href="styles/27-synthwave/tokens.css" />
```

**2) 用变量**

```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  box-shadow: var(--ds-shadow-sm);
}
.btn-primary:hover {
  background: var(--ds-primary-hover);
  box-shadow: 0 0 22px -3px var(--ds-primary);
}
```

**3) 切主题**

```js
document.documentElement.setAttribute('data-theme', 'light');
document.documentElement.removeAttribute('data-theme');
```

也可在局部容器使用 `.light` / `.dark`。

**4) Tailwind 项目引 preset**

```js
module.exports = {
  presets: [require('./styles/27-synthwave/tailwind.preset.js')],
};
```

之后即可使用 `bg-bg text-fg border-border text-primary shadow-md shadow-glow shadow-glow-accent` 等语义工具类。

**5) Preview**

双击 `styles/27-synthwave/preview.html` 即可离线查看完整展示。仅依赖本地 `../../_fonts/fonts.css`、`../../_assets/device.css` 与已有本地素材。

