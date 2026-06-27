# Blueprint · 蓝图技术风

> 暗色优先的工程蓝图 / CAD 制图设计系统。蓝图纸底、细白与青蓝技术线、fine + coarse drafting grid、尺寸线、箭头、测量标签、十字定位点、标题栏和等宽注释，服务于工业家具、机器人、硬件装配与工程审阅界面。

---

## 1. 一句话气质

像一张可交付的工程图纸：平面、哑光、精确、可审计。它不是 17-scifi-hud 的发光离子蓝 HUD，而是蓝图纸上的 1px 制图线、尺寸标注和标题栏。

---

## 2. 设计哲学 / 性格

1. **制图优先**：界面先像工程图，后像应用。网格、尺寸线、编号 callout、标题栏是身份核心。
2. **暗色优先**：`:root` 是深蓝图纸，`[data-theme="light"]` / `.light` 是白底 CAD，`[data-theme="dark"]` / `.dark` 与 `:root` 同值。
3. **平面哑光**：只用实体填充、1px 描边和双层 focus ring；不使用霓虹、外发光、模糊、径向渐晕。
4. **等宽注释**：`JetBrains Mono` 大量承载图号、尺寸、BOM、状态、标签；标题和正文用 Inter 保持清晰。
5. **继承固定契约**：变量名仍是统一 `--ds-*`，只更换值与气质，方便项目无痛切换。

---

## 3. 何时用 / 何时别用

**适合：**
- 工业 / 硬件 / 机器人 / 家具制造 / CAD 审阅 / BOM / 装配指导。
- 需要强调规格、尺寸、审计记录、版本修订的 B2B 工具。
- 想要技术感但不想要科幻发光或赛博霓虹的产品。
- 深色优先的工程台、车间看板、制造质量控制界面。

**别用：**
- 温暖生活方式、电商、教育、母婴等需要柔和亲和的品牌。
- 长篇阅读型文档站，除非有明确工程蓝图叙事。
- 需要真实照片主导、弱化线框标注的营销页。
- 想要发光 HUD、全屏霓虹、玻璃拟态或强透视 3D 的界面。

---

## 4. 颜色

`:root` 默认暗色蓝图纸；亮色是白底 CAD。以下值必须与 `tokens.css` / `preview.html` 保持一致。

### 4.1 表面与文字

| Token | 暗色 :root | 亮色 .light | 用途 |
|---|---:|---:|---|
| `--ds-bg` | `#0d2747` | `#f4f7fb` | 主背景 / 图纸底 |
| `--ds-bg-subtle` | `#123257` | `#e9eff6` | 分组底、导航 |
| `--ds-bg-elevated` | `#163a63` | `#ffffff` | 卡片、弹层、标题栏 |
| `--ds-bg-sunken` | `#0a1f3a` | `#dfe8f4` | 输入槽、代码块 |
| `--ds-fg` | `#e8f0fb` | `#122742` | 主文字 |
| `--ds-fg-muted` | `#a8c0e0` | `#44597a` | 次级文字 |
| `--ds-fg-subtle` | `#7c9cc4` | `#6a7fa0` | 弱标签、辅助说明 |
| `--ds-fg-on-accent` | `#07203a` | `#ffffff` | 强调色上文字 |
| `--ds-border` | `#2a4a72` | `#cdd9ec` | 细网格、普通描边 |
| `--ds-border-strong` | `#5a82b8` | `#2f5a92` | 粗网格、标题栏、重点描边 |

### 4.2 品牌与强调

| Token | 暗色 :root | 亮色 .light | 用途 |
|---|---:|---:|---|
| `--ds-primary` | `#7cc4ff` | `#155fb0` | 主操作、尺寸线、选中态 |
| `--ds-primary-hover` | `#9ad2ff` | `#124f93` | hover |
| `--ds-primary-active` | `#5aa6f0` | `#0f4178` | active |
| `--ds-primary-fg` | `#07203a` | `#ffffff` | primary 上文字 |
| `--ds-accent` | `#ffb84d` | `#9a6210` | 警示测量、次强调 |
| `--ds-accent-fg` | `#2a1800` | `#ffffff` | accent 上文字 |

强调色梯度：暗色 `#5aa6f0 -> #7cc4ff -> #9ad2ff`，亮色 `#0f4178 -> #155fb0 -> #124f93`。暗色主色像蓝图纸上的浅青制图线；亮色主色压深以满足白底 AA。

### 4.3 语义状态

| 语义 | 暗色 主 / bg / fg | 亮色 主 / bg / fg |
|---|---|---|
| success | `#5fd39a` / `#06281c` / `#c9f5dd` | `#1f7a4d` / `#e2f1ea` / `#0a3a26` |
| warning | `#ffb84d` / `#241a06` / `#fff0cf` | `#9a6210` / `#f6ecd2` / `#42300a` |
| danger | `#ff7a72` / `#2a0f0d` / `#ffd6d2` | `#b53a32` / `#f7e3e1` / `#5a160f` |
| info | `#7cc4ff` / `#0a2342` / `#d6e8fb` | `#155fb0` / `#e3edf7` / `#0c2a4f` |

### 4.4 焦点

| Token | 值 |
|---|---|
| `--ds-focus` | 暗 `#7cc4ff` / 亮 `#155fb0` |
| `--ds-focus-ring` | `0 0 0 2px var(--ds-bg),0 0 0 4px var(--ds-focus)` |

---

## 5. 字体

- `--ds-font-sans`: `"Inter",-apple-system,"PingFang SC",sans-serif`。用于标题、正文、说明，保持现代工程工具的清晰度。
- `--ds-font-mono`: `"JetBrains Mono",ui-monospace,monospace`。用于尺寸、图号、标题栏字段、BOM、状态、表格数字，是本风格的主要语气。
- `--ds-font-serif`: `Georgia,"Songti SC",serif`。仅作契约回退，本风格基本不用衬线。
- 比例尺继承 17：12 / 13 / 14 / 16 / 20 / 24 / 32 / 48。
- 字重 400 / 500 / 600；不要用过粗标题，避免破坏制图线的轻薄感。
- 字距沿用 `--ds-tracking-tight:-0.02em` 与 `--ds-tracking-normal:0`；mono 标签可局部加 `0.06em-0.1em`。
- 中文走 `PingFang SC`；中文说明不强制等宽，图号与尺寸标签才用 mono。

---

## 6. 间距与布局

- 间距比例尺：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96。
- 主背景使用双层制图网格：fine grid 约 8px，coarse grid 约 80px，颜色来自 `--ds-border` / `--ds-border-strong`。
- 容器建议 `max-width:1180-1440px`，复杂看板可用 12 列网格。
- 组内 8-12px，组间 16-24px，区块间 40-64px。
- 尺寸线、schematic SVG、标题栏必须包在容器内；移动端不允许造成横向滚动。

---

## 7. 圆角 / 阴影 / 描边

- 圆角：sm `0px`、md `2px`、lg `4px`、full `9999px`。控件基本锐利，只给少量加工倒角。
- 阴影：全部是平面描边。
  - sm `0 0 0 1px var(--ds-border)`
  - md `0 0 0 1px var(--ds-border)`
  - lg `0 0 0 1px var(--ds-border-strong)`
- 描边是层级语言：普通内容用 `--ds-border`，标题栏、尺寸线和激活态用 `--ds-border-strong` / `--ds-primary`。
- 图标统一内联 SVG，`currentColor`，线宽约 1.8；不用 emoji，不用外部图标包。

---

## 8. 动效

- 时长继承 17：fast 150ms、base 200ms、slow 250ms。
- 曲线：`cubic-bezier(.2,.8,.2,1)`。
- 典型过渡：按钮 hover 改变填充 / 描边；tab 与菜单项用 1px inset 描边；弹层轻微位移淡入。
- `prefers-reduced-motion: reduce` 下关闭动画循环和入场动效，只保留即时状态变化。
- 不做扫描光、不做呼吸灯、不做外发光。

---

## 9. 组件规格

### 按钮

| 变体 | 默认 | hover | active | disabled |
|---|---|---|---|---|
| primary | `--ds-primary` 底，`--ds-primary-fg` 字 | `--ds-primary-hover` + 内描边 | `--ds-primary-active` | 50% 透明 |
| secondary | 透明底，`1px --ds-border-strong` | 底 `--ds-bg-sunken`，边框 / 字转 primary | primary-active 描边 | 50% 透明 |
| tertiary | 透明，字 muted | 底 `--ds-bg-subtle` | 底 `--ds-bg-sunken` | 50% 透明 |
| danger | `--ds-danger` 底 | 内描边强调 | 保持 danger | 50% 透明 |

高度：sm 32px、md 40px、lg 48px。focus 用 `--ds-focus-ring`。

### 输入框

高 40px，底 `--ds-bg-sunken`，`1px --ds-border`，radius sm。focus 边框转 primary 并使用双层 focus ring。错误态边框为 danger，错误文字用 mono。

### 卡片

底 `--ds-bg-elevated`，`1px --ds-border`，radius md，shadow md。标题可用 `▍` 主色标记；指标用 mono + tabular-nums。

### 徽章 / 标签

mono 12px，大写，pill 用 full radius。语义 badge 使用 `<sem>-bg`、`<sem>-fg`、`1px <sem>`。

### Alert

语义浅底、1px 全描边、前置内联 SVG。不要粗色竖条或发光图标。

### 导航

顶栏高 56px，底 `--ds-bg-subtle`，下边 / 外框 1px。当前项用 primary 下划线。侧栏选中项使用左侧 3px primary 和 elevated 背景。

### 表格

表头 mono 11px 大写，底 `--ds-bg-subtle`。数值右对齐，tabular-nums。移动端保留内部横向滚动兜底。

---

## 10. 可访问性

- 暗色正文 `#e8f0fb` 对 `#0d2747` 约 12.9:1；muted `#a8c0e0` 约 7.4:1；primary `#7cc4ff` 对背景约 7.9:1。
- 亮色正文 `#122742` 对 `#f4f7fb` 约 13.2:1；muted `#44597a` 约 6.5:1；primary `#155fb0` 对白底约 6.2:1。
- 按钮文字：暗色 primary-fg `#07203a` 对 `#7cc4ff` 约 8.5:1；亮色 primary-fg 白对 `#155fb0` 约 6.2:1。
- focus ring 必须保留；不要只靠颜色变化表达状态。
- 触控目标 ≥44px；移动端 tab、列表行、主操作都按此设计。
- 图上叠字必须加底色遮罩或放进独立标题块，不能直接压在复杂图片上。
- 支持 `prefers-reduced-motion`。

---

## 11. Do / Don't

**Do**
- 用 8px fine grid + 80px coarse grid 建立图纸底。
- 用尺寸线、箭头、测量标签、leader line、编号 callout 和标题栏表达身份。
- 让 mono 标签保持短、准、可扫读。
- 把表格数字和尺寸用 tabular-nums 对齐。
- 用平面 1px 描边区分层级。

**Don't**
- 不要做成 glowing sci-fi-HUD；Blueprint 必须 flat/no-glow。
- 不要添加径向渐晕、发光阴影、模糊滤镜或霓虹光束。
- 不要让注释小到不可读；尺寸标签至少 11-12px。
- 不要把网格不透明度拉太高，正文必须优先。
- 不要复制真实 CAD 软件或第三方品牌视觉；只取制图语言。

---

## 12. 如何接入

### 普通 CSS

```html
<link rel="stylesheet" href="styles/29-blueprint/tokens.css">
```

然后在组件中使用固定变量：

```css
.panel {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 1px solid var(--ds-border);
  border-radius: var(--ds-radius-md);
  box-shadow: var(--ds-shadow-md);
}
```

### Tailwind

```js
module.exports = {
  presets: [require('./styles/29-blueprint/tailwind.preset.js')],
};
```

可使用 `bg-bg text-fg border-border bg-primary text-primary-fg shadow-md shadow-line` 等工具类；实际值始终由 `--ds-*` 提供。
