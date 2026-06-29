# 票据印章 · Ticketing / Pass & Postal

> 面向虚构机构 **环线票务 · Loop Transit & Post** 的轻色优先票据系统：温灰安全票纸、蓝黑权威墨、邮政红验讫章、可撕票根、虚线裁切、单色条码、mono 序列号与 guilloche 安全线纹。它像一张城市环线通行证，也像一份盖章邮递凭据。

气质关键词：official, tactile paper, perforation, security print, mono serial, validation stamp, postal dispatch。

---

## 1. 一句话气质

`#f0efe9` 近中性的温灰票纸 + `#22324f` 蓝黑权威墨 + `#b8362a` 盖章红。界面不是营销页，也不是柔软消费卡片，而是可验证、可扫描、可撕取、可归档的官方通行证系统。

---

## 2. 设计哲学 / Personality

继承基础模板的固定 `--ds-*` 契约、4px 间距、双主题、状态色和焦点环，但视觉性格完全转向票据与邮递凭证：

1. **Serial first**：序列号、日期、闸口、座位、区域、优惠码是界面身份。JetBrains Mono 必须高频出现。
2. **Two-part document**：核心卡片由主票面和可撕票根组成，中间用虚线和半圆孔表达裁切。
3. **Security print texture**：背景可使用细密 guilloche、微型点阵、细线网纹，但必须保持低对比，不能干扰正文。
4. **Stamped authority**：红色主要服务验讫章、警示、危险和少量重点标识。章印可轻微旋转，但文字必须清楚。
5. **Crisp, not soft**：圆角小，描边明确，阴影像纸张浮起，不像玻璃拟态或柔软卡片。

---

## 3. 何时用 / 何时别用

**适合**

- 票务、通行证、预约凭证、物流凭据、邮递调度、城市服务入口
- 需要表现“官方、可核验、可归档、可打印”的产品界面
- 需要大量日期、序列、闸口、区域、条码、凭证号的后台或移动端
- 活动签到、会员凭证、优惠券、收据和存根系统

**不适合**

- 娱乐化、儿童、游戏、社交内容流
- 需要大面积照片叙事或情绪化插画的品牌页
- 需要柔和圆角、渐变、漂浮光斑、玻璃拟态的消费应用
- 极复杂金融交易终端；本风格偏凭证和调度，不是高频交易桌面

---

## 4. 颜色 / Color

亮色是默认主题：接近中性的温灰安全票纸，温度来自墨色和章红，而不是饱和奶油背景。暗色是夜间出发终端：深 slate 底，纸白文字，蓝色高亮。

### 表面与文字

| Token | 亮色 Light | 暗色 Dark | 用途 |
|---|---|---|---|
| `--ds-bg` | `#f0efe9` | `#16181c` | 页面底、票纸外背景 |
| `--ds-bg-subtle` | `#e7e5dd` | `#1c1f24` | 区块底、票根底、导航底 |
| `--ds-bg-elevated` | `#faf9f5` | `#23262c` | 主票面、卡片、弹层 |
| `--ds-bg-sunken` | `#dedcd3` | `#101216` | 输入槽、条码底、嵌入图形 |
| `--ds-fg` | `#1f1d1a` | `#ece9e2` | 主文字、标题、条码 |
| `--ds-fg-muted` | `#55524b` | `#b0ada4` | 说明、次级字段 |
| `--ds-fg-subtle` | `#6f6c63` | `#88857c` | 占位、辅助标签 |
| `--ds-fg-on-accent` | `#ffffff` | `#0c1420` | 强调底上的文字 |
| `--ds-border` | `#cbc8bd` | `#2e323a` | 常规票据线 |
| `--ds-border-strong` | `#a8a497` | `#434853` | 裁切线、票面强边框 |

### 品牌与强调

| Token | 亮色 Light | 暗色 Dark | 用途 |
|---|---|---|---|
| `--ds-primary` | `#22324f` | `#6fa8d6` | 主操作、站点代码、闸口字段 |
| `--ds-primary-hover` | `#1a2840` | `#88b9e2` | hover |
| `--ds-primary-active` | `#141f33` | `#5b97c8` | active/pressed |
| `--ds-primary-fg` | `#ffffff` | `#0c1420` | 主按钮文字 |
| `--ds-accent` | `#b8362a` | `#e3675a` | 验讫章、危险、关键提醒 |
| `--ds-accent-fg` | `#ffffff` | `#1a0e0c` | 红底文字 |

### 语义状态

| 语义 | 主色 Light/Dark | 背景 Light/Dark | 文字 Light/Dark |
|---|---|---|---|
| success | `#2f6b3f` / `#6ccb87` | `#e2efe4` / `#122b1b` | `#1c4a28` / `#b6e6c6` |
| warning | `#8a5a10` / `#e0b25e` | `#f6ecd6` / `#2a2010` | `#5a3a08` / `#f3d79a` |
| danger | `#b8362a` / `#e3675a` | `#f7e3e0` / `#2c1614` | `#7e2019` / `#f4b0a8` |
| info | `#1f6f86` / `#6fc0d6` | `#ddeef2` / `#0e2a30` | `#124654` / `#b6e4ef` |

强调梯度只允许蓝黑权威墨与章红。不要再引入真实机构色、航空色、邮政现实品牌色或高饱和装饰色。

---

## 5. 字体 / Typography

- `--ds-font-sans`: `"Inter", -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif`。用于票面标签、按钮、导航、表单、表格。
- `--ds-font-mono`: `"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace`。用于序列号、日期、时间、闸口、座位、区域、条码说明、优惠码。它是本风格的主识别点。
- `--ds-font-serif`: `"Noto Serif", Georgia, "Songti SC", serif`。用于机构标题、圆形验讫章、正式凭据标题。

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-text-xs` | 12px | 小标签、状态码、票根说明 |
| `--ds-text-sm` | 13px | 表单、表头、按钮文字 |
| `--ds-text-base` | 15px | 默认正文、说明文本 |
| `--ds-text-md` | 17px | 字段值、重要说明 |
| `--ds-text-lg` | 20px | 卡片标题、票据模块标题 |
| `--ds-text-xl` | 24px | 区块标题、凭据标题 |
| `--ds-text-2xl` | 32px | 站点代码、主序列号 |
| `--ds-text-3xl` | 44px | 风格标题、核心识别标题 |

字重为 `400 / 500 / 700`。`--ds-tracking-tight` 与 `--ds-tracking-normal` 都为 `0`，避免人为挤压中文或 mono 数字。数字字段建议开启 `font-variant-numeric: tabular-nums`。

---

## 6. 间距与布局 / Spacing & Layout

`--ds-space-1..12` = `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px`。

- **容器**：桌面最大宽度建议 `1120px`，适合票据展示、调度列表和三栏操作台。
- **票面结构**：主票面与票根使用 grid；桌面可左右分栏，移动端必须上下堆叠。
- **裁切线**：票根交界处用 `1px dashed var(--ds-border-strong)`，配合半圆孔视觉。
- **字段密度**：字段块以 4 列或 2 列排布；移动端收为 2 列或 1 列。
- **表格**：最小宽度可以大于视口，但必须放在横向滚动容器内；整页在 390px 不得横向溢出。

---

## 7. 圆角 / 阴影 / 描边

- `--ds-radius-sm: 2px`
- `--ds-radius-md: 4px`
- `--ds-radius-lg: 8px`
- `--ds-radius-full: 999px`

圆角服务纸张裁切，不服务柔软情绪。主票面、输入框、卡片保持清晰几何。圆形只用于章印、状态 pill、开关、穿孔。

阴影是轻微纸张高度：

- `--ds-shadow-sm`: 1px 纸边 + 极轻压痕
- `--ds-shadow-md`: 小票据浮起
- `--ds-shadow-lg`: 主票据或操作台浮起

描边比阴影更重要。使用 `--ds-border` 做普通分割，`--ds-border-strong` 做票据外框、裁切线和重要表格边。

---

## 8. 动效 / Motion

动效模拟“盖章 / 验票”的短促动作，而不是弹跳或漂浮。

- `--ds-ease: cubic-bezier(.2, .8, .2, 1)`
- `--ds-dur-fast: 120ms`
- `--ds-dur-base: 200ms`
- `--ds-dur-slow: 320ms`

典型动作：

- hover 时主票面边框略强调
- 按钮轻微下压
- 验讫章可以做一次短促 `scale(.92)` 的 stamp press
- 条码、票根、字段不做循环动画

必须支持减弱动效：

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

---

## 9. 组件规格 / Components

### 按钮 Button

高度 40px，`radius: var(--ds-radius-md)`，左右 16px，字体 Inter 13px medium。按钮应优先带 inline SVG 图标。

| 变体 | 背景 | 文字 | 边框 | hover |
|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | none | `--ds-primary-hover` |
| secondary | `--ds-bg-elevated` | `--ds-fg` | `--ds-border-strong` | `--ds-bg-subtle` |
| tertiary | transparent | `--ds-primary` | none | `--ds-bg-subtle` |
| danger | `--ds-danger` | `--ds-accent-fg` | none | 轻微变暗 |

### 输入框 Input

高度 40px，`padding: 0 12px`，背景 `--ds-bg`，边框 `--ds-border`。focus 用 `--ds-focus-ring`。序列号输入建议用 mono 字体或在值上单独套 `.mono`。

### 票据卡 Ticket Card

主卡由 `.ticket-main` 和 `.ticket-stub` 组成。桌面左右分栏；移动端上下分栏。必须包含：

- mono serial
- gate / seat / zone / date 字段
- barcode strip
- round validation seal
- dashed perforation line with circular punch marks
- optional guilloche security hairlines

### 徽章 Badge

默认 badge 用 `--ds-bg-subtle` + `--ds-fg-muted`。状态 badge 使用对应 `*-bg` 与 `*-fg`。不要把 badge 做成过度饱和的彩色贴纸。

### Alert

Alert 使用浅状态底、状态文字和 `1px` 状态边框。前置图标必须是 inline SVG。不要用 emoji 代替状态。

### 导航 Navigation

导航像票务柜台索引：扁平、清晰、可扫描。当前项可用 `--ds-primary` 底或 `2px` 下划线。不要用大圆角胶囊堆满导航。

### 表格 Table

表头用 sans 或 mono 小字号，序列列、时间列、闸口列用 mono 并开启 tabular numbers。行高保持紧凑，hover 只用 `--ds-bg-subtle`。

---

## 10. 可访问性 / Accessibility

- **正文对比度**：`--ds-fg` 在 `--ds-bg` 上满足 WCAG AA。
- **次级文字**：`--ds-fg-muted` 与 `--ds-fg-subtle` 可用于正文级辅助信息；不要把 subtle 用作长段正文。
- **按钮对比度**：主按钮 light/dark 的文字与背景满足 AA。
- **焦点可见**：所有表单、按钮、导航项使用 `--ds-focus-ring`。
- **触控目标**：移动端按钮、图标按钮、开关、票据动作目标不小于 44px。
- **动效减弱**：所有 stamp press、hover transition 必须尊重 `prefers-reduced-motion`。
- **移动端溢出**：票根必须折行或上下堆叠；390px 宽度下整页水平溢出为 0。
- **图标**：全部使用 inline SVG，并提供 `aria-label` 或隐藏装饰图标。

---

## 11. Do / Don't

**Do**

- 用 mono 序列号、日期、闸口、座位、区域来建立识别。
- 让票据由主票面和可撕票根组成，裁切线必须清楚。
- 使用圆形验讫章、单色条码、guilloche 安全线纹和虚线穿孔。
- 保持默认亮色，暗色作为夜间终端模式。
- 用小圆角、硬描边和纸张阴影营造正式触感。
- 在移动端把票根放到主票面下方，避免横向滚动。

**Don't**

- 不要引用任何真实交通、邮政、航空或公司品牌。
- 不要用 emoji 当图标或状态提示。
- 不要把背景做成饱和奶油色；票纸是近中性温灰。
- 不要用大圆角、玻璃拟态、强渐变或装饰光斑。
- 不要把章红扩散成全站主色；红色只给章印、危险和关键提醒。
- 不要让 guilloche 线纹压过正文和表单可读性。

---

## 12. 如何接入 / Usage

**1. 引入 tokens.css**

```html
<link rel="stylesheet" href="./styles/47-ticket/tokens.css">
```

```js
import './styles/47-ticket/tokens.css'
```

**2. 使用变量**

```css
.ticket {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 1px solid var(--ds-border-strong);
  border-radius: var(--ds-radius-lg);
  box-shadow: var(--ds-shadow-lg);
}

.ticket__serial {
  font-family: var(--ds-font-mono);
  font-variant-numeric: tabular-nums;
  color: var(--ds-primary);
}

.ticket__stub {
  border-left: 1px dashed var(--ds-border-strong);
  background: var(--ds-bg-subtle);
}

.ticket__stamp {
  font-family: var(--ds-font-serif);
  color: var(--ds-accent);
  border: 3px solid var(--ds-accent);
  border-radius: var(--ds-radius-full);
}
```

**3. 切换暗色**

```js
document.documentElement.dataset.theme = 'dark'
// or
document.documentElement.classList.add('dark')
```

**4. Tailwind 项目**

```js
module.exports = {
  presets: [require('./styles/47-ticket/tailwind.preset.js')]
}
```

```jsx
<article className="max-w-ticket bg-bg-elevated text-fg rounded-lg shadow-lg border border-border-strong">
  <p className="font-mono text-xs text-accent">LTP VALIDATION</p>
  <h1 className="font-serif text-xl font-bold">环线票务 · Loop Transit & Post</h1>
  <p className="font-mono text-2xl text-primary">LTP-47-0926</p>
</article>
```
