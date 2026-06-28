# Terminal / TUI 终端绿磷

> A dark-first phosphor CRT design kit for self-hosted ops tools, package managers, BBS-style consoles, and TUI-inspired dashboards: all-monospace, hard ASCII frames, green text glow, amber warnings, status lines, and dense readable tables.

---

## 1. 一句话气质

`Terminal / TUI` 像一台可维护、可审计的复古工作站：绿磷主屏、琥珀告警、全等宽文本、`haha@studio:~$` 提示符、ASCII box-drawing 框、vim/tmux 状态线。它不是现代 AI 霓虹控制台，也不是粉蓝 glitch；它的气质来自 CRT、TUI 和仪器级精确。

---

## 2. 设计哲学 / 性格

本风格继承固定 `--ds-*` token 契约、双主题、语义状态、焦点环、空间比例尺和组件覆盖范围，但把视觉语言改成纯终端：

1. **全等宽**：`--ds-font-sans`、`--ds-font-serif`、`--ds-font-mono` 都指向 `"JetBrains Mono", ui-monospace, monospace`。大标题可局部使用本地 `VT323` 做复古显示字。
2. **文本先于装饰**：品牌感来自 prompt、状态线、mono table、命令面板和 ASCII 框，不靠大面积图片或复杂渐变。
3. **硬边结构**：默认圆角为 `0px`，卡片、输入、按钮都靠 1px 描边分层。`--ds-radius-lg` 仅保留 `2px`，用于大容器的微小 CRT 外壳感。
4. **绿磷 + 琥珀**：主色 `#2ee06a` 是 phosphor green，accent `#ffb000` 是 amber terminal。暗色按钮刻意使用深色文字，以保证 AA。
5. **动效可撤销**：闪烁 block cursor 与 scanline drift 是氛围层；`prefers-reduced-motion` 下停止闪烁与扫描线运动。

---

## 3. 何时用 / 何时别用

**适合：**
- 自托管 Dashboard、包管理器、内部运维面板、日志 / 审计工具。
- BBS、复古计算机、TUI 风格的实验性产品。
- 需要高密度表格、命令面板、状态行、代码块的工具。
- 想表达 hacker、instrument-precise、terminal-first 的品牌。

**别用：**
- 消费级生活方式、教育儿童、医疗护理等需要柔和亲和的产品。
- 长篇阅读型内容站，尤其是正文持续几千字的浅色阅读场景。
- 需要现代 glass/neon/cyberpunk 视觉的页面；这套风格必须保持 CRT/TUI。
- 不能接受等宽字体密度或命令行隐喻的业务系统。

---

## 4. 颜色

`:root` 默认是暗色 phosphor CRT；`[data-theme="light"], .light` 是 paper terminal / printout。所有组件只消费 `var(--ds-*)`。

### 4.1 表面与文字

| token | 暗色 :root | 亮色 `.light` | 用途 |
|---|---:|---:|---|
| `--ds-bg` | `#050a06` | `#eef2ec` | 主背景 |
| `--ds-bg-subtle` | `#0a140c` | `#e2e8df` | 分组底、导航底 |
| `--ds-bg-elevated` | `#0e1a10` | `#f7faf4` | 卡片、弹层 |
| `--ds-bg-sunken` | `#020503` | `#d8e0d4` | 输入槽、代码块 |
| `--ds-fg` | `#c8f5d2` | `#0e2014` | 主文字 |
| `--ds-fg-muted` | `#7fb890` | `#3f5a48` | 次文字 |
| `--ds-fg-subtle` | `#5a8568` | `#5f7a68` | 辅助文字、占位、大字 |
| `--ds-fg-on-accent` | `#04140a` | `#ffffff` | 强调色上的文字 |
| `--ds-border` | `#1c3322` | `#c8d4c6` | 常规描边 |
| `--ds-border-strong` | `#2ee06a` | `#0e2014` | 强描边、ASCII 框 |

### 4.2 品牌与强调

| token | 暗色 :root | 亮色 `.light` | 用途 |
|---|---:|---:|---|
| `--ds-primary` | `#2ee06a` | `#157a3e` | 主操作、光标、选中 |
| `--ds-primary-hover` | `#4af07f` | `#126a36` | hover |
| `--ds-primary-active` | `#25c85a` | `#0f5a2e` | active |
| `--ds-primary-fg` | `#04140a` | `#ffffff` | 主按钮文字 |
| `--ds-accent` | `#ffb000` | `#8a5a00` | amber alt、警示候选 |
| `--ds-accent-fg` | `#1a1200` | `#ffffff` | accent 上的文字 |

### 4.3 语义状态

| 语义 | 暗色 主 / bg / fg | 亮色 主 / bg / fg |
|---|---|---|
| success | `#2ee06a` / `#06200f` / `#bff5cd` | `#157a3e` / `#e2f0e6` / `#0a3a1e` |
| warning | `#ffb000` / `#241800` / `#ffe6b0` | `#8a5a00` / `#f4ecd2` / `#3e2a00` |
| danger | `#ff5f56` / `#260a08` / `#ffd2ce` | `#b3302a` / `#f6e0dd` / `#511210` |
| info | `#56d4ff` / `#06202a` / `#cdeeff` | `#1f5f8a` / `#e2edf4` / `#0c2a3e` |

### 4.4 焦点与阴影

| token | 值 |
|---|---|
| `--ds-focus` | 暗 `#2ee06a` / 亮 `#157a3e` |
| `--ds-focus-ring` | `0 0 0 2px var(--ds-bg),0 0 0 4px var(--ds-focus)` |
| `--ds-shadow-sm` | `0 0 0 1px var(--ds-border)` |
| `--ds-shadow-md` | `0 0 0 1px var(--ds-border-strong)` |
| `--ds-shadow-lg` | 暗 `0 0 0 1px var(--ds-border-strong), 0 0 24px -6px rgba(46,224,106,.4)` / 亮 `0 0 0 1px var(--ds-border-strong)` |

---

## 5. 字体

- **全部等宽**：`--ds-font-sans`、`--ds-font-serif`、`--ds-font-mono` 都是 `"JetBrains Mono", ui-monospace, monospace`。
- **显示标题**：preview 的大标题局部使用 `"VT323", "JetBrains Mono", monospace`，只做复古 CRT 显示感，不新增 token 名。
- **比例尺**：xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48，继承 06 的 text scale。
- **字重**：400 / 500 / 600；不要用过粗黑体，避免破坏终端字符质感。
- **行高**：tight 1.2 / normal 1.5 / relaxed 1.7。日志与代码块可用 relaxed。
- **字距**：token 保持 `--ds-tracking-tight: -0.02em` 与 `--ds-tracking-normal: 0`；实际 TUI 标签优先使用 normal，必要时只给小标签轻微正字距。
- **中文适配**：中文也使用 mono 回退栈，但注意行宽；长中文说明不放进固定宽 ASCII 框。

---

## 6. 间距与布局

- **间距比例尺**：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96。
- **密度**：组内 8px，控件间 12px，卡片内 20–24px，区块间 64px 左右。
- **容器**：preview 主容器 max-width 1180px；终端面板、代码块、表格必须可在自身内部横向滚动。
- **ASCII 框**：宽命令、box-drawing 文本、pre/code 放入 `.term-scroll` 或 `.code`，使用 `overflow-x:auto`，不让页面横向滚动。
- **表格**：正文 14px，表头 11px mono；数字列右对齐，启用 tabular nums。
- **移动端**：`.dvc17` 设备框不重定义；暗色移动屏保留 `sb-light` 状态栏，亮色主题覆盖状态栏为深色文字。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：`sm 0px` / `md 0px` / `lg 2px` / `full 9999px`。终端面板、按钮、输入框都应近似硬角。
- **描边优先**：层级靠 `--ds-border` 与 `--ds-border-strong`，不是靠柔和投影。
- **CRT glow**：只在暗色主题使用轻量 phosphor glow，例如标题 text-shadow、状态灯、`--ds-shadow-lg`。亮色主题基本回到纸面打印描边。
- **ASCII box system**：关键面板可使用真实 box-drawing 字符 `┌─┐│└┘`；普通组件用 CSS 1px 边框，但视觉上要像 TUI frame。
- **图标**：只用内联 SVG / currentColor；不使用 emoji 图标。

---

## 8. 动效

- **基础曲线**：`--ds-ease: cubic-bezier(.2,.8,.2,1)`。
- **时长**：fast 150ms / base 200ms / slow 250ms，继承 06 的 motion scale。
- **典型动效**：
  - block cursor `▍` 用 steps blink。
  - scanline overlay 使用低透明 repeating-linear-gradient，并可轻微 drift。
  - 状态灯可缓慢呼吸。
  - 按钮 hover 点亮 1px 描边，不做弹跳。
- **reduced motion**：`prefers-reduced-motion: reduce` 下停止 cursor blink、scanline drift、状态灯呼吸、弹层入场和 toast 入场；文本 glow 收敛。

---

## 9. 组件规格

### 按钮

| 变体 | 默认 | hover | active | disabled |
|---|---|---|---|---|
| primary | `--ds-primary` 底，`--ds-primary-fg` 字 | `--ds-primary-hover` | `--ds-primary-active` | 50% 透明 |
| secondary | 透明底，`1px --ds-border-strong` | 字和边框转 `--ds-primary` | 转 `--ds-primary-active` | 50% 透明 |
| tertiary | 透明，`--ds-fg-muted` | 底 `--ds-bg-subtle`，字 `--ds-fg` | 底 `--ds-bg-sunken` | 50% 透明 |
| danger | `--ds-danger` 底，`--ds-fg-on-accent` 字 | 轻 glow / brightness | pressed | 50% 透明 |

尺寸：sm 32px / md 40px / lg 48px。全部硬角 `--ds-radius-sm`，focus 用 `--ds-focus-ring`。

### 输入框 / Textarea / Select

底 `--ds-bg-sunken`，边 `--ds-border`，字 `--ds-fg`，placeholder `--ds-fg-subtle`。focus 时边框转 `--ds-primary` 并使用 `--ds-focus-ring`。命令缓冲区可用 `:install cache-daemon --pin stable` 这类 command-palette prompt。

### 卡片

底 `--ds-bg-elevated`，边 `--ds-border`，阴影 `--ds-shadow-md`。标题前可用 `▍` 光标；内容以状态、指标、表格和命令为主。

### 徽章 / 状态灯

中性徽章用 `--ds-bg-subtle` + `--ds-fg-muted`；语义徽章使用 `<sem>-bg` / `<sem>-fg` / `<sem>` 边。状态灯 9px，颜色来自语义 token，暗色可带小 glow。

### Alert

success / warning / danger / info 四种，底 `<sem>-bg`，字 `<sem>-fg`，边 `<sem>`，前置内联 SVG 图标。不要只靠颜色表达状态。

### 导航

顶栏高 56px，底 `--ds-bg-subtle`，边 `--ds-border`；当前项文字与下划线用 `--ds-primary`。侧栏选中项用左侧 3px 主色条或硬边框。

### 表格

表头底 `--ds-bg-subtle`，表头小号 mono；行高 40–44px；数值列 `font-variant-numeric: tabular-nums` 且右对齐。窄屏下让 table 自身横向滚动。

### Terminal Flourishes

ASCII frame、`haha@studio:~$` prompt、`▍` block cursor、vim/tmux status line、ANSI chips、mono tables 和 `:` command palette 是这套 kit 的核心识别元素。所有宽文本都必须在 overflow 容器内。

---

## 10. 可访问性

- **正文对比**：暗色 `--ds-fg #c8f5d2` on `--ds-bg #050a06` = 16.58:1；亮色 `--ds-fg #0e2014` on `--ds-bg #eef2ec` = 15.01:1。
- **次文字**：暗色 muted = 8.70:1；亮色 muted = 6.70:1。`--ds-fg-subtle` 用于占位、辅助标签或大字；暗色 4.74:1，亮色 4.15:1，亮色小号正文不要只用 subtle。
- **按钮文字**：暗色 primary 深字 `#04140a` on `#2ee06a` = 10.80:1；暗色 amber 深字 `#1a1200` on `#ffb000` = 10.14:1；亮色 primary 白字 = 5.41:1；亮色 amber 白字 = 5.93:1。
- **焦点**：所有可交互元素保留 `--ds-focus-ring`，不得只改色不加环。
- **触控目标**：移动端行项 ≥44px，主要按钮 40px 高但周边留足命中空间。
- **动效**：尊重 `prefers-reduced-motion`，停止闪烁、扫描线运动、呼吸和入场动画。

---

## 11. Do / Don't

**Do**
- 用绿磷主色和琥珀 accent，而不是粉蓝、青紫或现代 AI console 渐变。
- 把宽命令、ASCII 表格、pre/code 放入可横向滚动容器。
- 保持全等宽字体，并用 tabular nums 对齐数据。
- 用真实 box-drawing 字符、status line、prompt、ANSI chip 建立身份。
- 让亮色主题像纸面终端打印，而不是简单反相。

**Don't**
- 不要把绿磷调到刺眼，正文必须舒适可读。
- 不要堆满 glow；glow 是 CRT 余辉，不是 neon sign。
- 不要把中文长文塞进固定宽 ASCII 框，窄屏会溢出。
- 不要复用 06-dark-tech 的现代青紫 AI 控制台，也不要复用 13-cyberpunk 的粉蓝 glitch。
- 不要用 emoji 当图标；使用内联 SVG 或文本符号。
- 不要删除 preview 的基础 showcase 区块，kit 必须保持固定展示面。

---

## 12. 如何接入

**1. 引入 tokens.css**

```html
<link rel="stylesheet" href="./tokens.css" />
```

默认就是暗色 CRT。亮色纸面终端：

```html
<html data-theme="light">
```

**2. 组件只消费变量**

```css
.terminal-card {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 1px solid var(--ds-border);
  border-radius: var(--ds-radius-md);
  box-shadow: var(--ds-shadow-md);
}
```

**3. Tailwind 项目使用 preset**

```js
module.exports = {
  presets: [require('./tailwind.preset.js')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

**4. 宽终端内容用内部滚动**

```html
<div class="term-scroll">
  <pre>┌── package table ──┐
│ haha@studio:~$ ...│
└───────────────────┘</pre>
</div>
```
