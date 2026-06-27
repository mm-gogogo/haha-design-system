# Newspaper · 报刊风 (Broadsheet)

> 以大号 serif masthead、双线报头、密集多栏正文、hairline 栏线、粗重标题、deck、byline/dateline、小型大写 kicker、灰阶图片和一抹 editorial red 组成的经典报纸式设计系统。它不是安静舒适的长文 editorial，而是信息密集、层级强烈、版面驱动的 broadsheet。

气质关键词：报头、版心、墨色、栏线、密度、截稿感。默认亮色是 newsprint 日刊，暗色是 late/night edition。

---

## 1. 一句话气质

`#f2efe8` 新闻纸底 + `#1a1a18` 油墨黑 + 单一 `#a8201a` 编辑红。标题、正文和 masthead 全部走 serif，UI 控件才走 sans，dateline/kicker 用 mono 小型大写，整体像一张可以扫描、折叠、排版严谨的城市日报首页。

---

## 2. 设计哲学 / 性格

继承 07 editorial 的固定 `--ds-*` 契约、4px spacing、字号比例尺、双主题、状态色和焦点环，但性格做了明确改写：

1. **Masthead first**：品牌不是左上角小 logo，而是大号 nameplate。报头必须有上下 rule、dateline、edition、vol/no 和 price。
2. **Density with hierarchy**：密集不是拥挤。用粗重 headline、deck、kicker、byline、column rule 和 double rule 组织信息。
3. **Serif body, serif headline**：报纸正文和标题同属 serif 系统，sans 只服务 UI、表单、控件和辅助标签。
4. **Flat ink, no softness**：radius 全 0，阴影退化为 1px keyline。层级来自规则线、粗细、版心和留白，而不是投影。
5. **One red only**：红色只用于 kicker、焦点、重点状态和少量版面标记。不要再引入蓝紫、橙、绿色品牌色。

---

## 3. 何时用 / 何时别用

**适合**
- 新闻站、城市观察、调查报道、日报/周报、政策解读、历史档案
- 需要“可信、权威、信息密集、可扫读”的内容型产品
- 需要突出刊名、栏目、版次、发布日期、编辑节奏的品牌内容

**不适合**
- Calm reading-comfort 博客、散文站、文档站：请用 `07-editorial`
- 高转化营销页、潮流活动页、儿童/游戏产品
- 强数据仪表盘或后台操作台：报纸多栏会干扰复杂任务
- 需要大圆角、插画、渐变、软阴影的友好型消费应用

---

## 4. 颜色

亮色是 newsprint paper，暗色是 late/night edition。所有正文级文本对主背景满足 WCAG AA。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#f2efe8` | `#161512` | 主纸面 / 夜刊墨底 |
| `--ds-bg-subtle` | `#e9e5da` | `#1d1b16` | 分组底、栏目底 |
| `--ds-bg-elevated` | `#fbf9f3` | `#211f19` | 卡片、弹层、报纸小盒 |
| `--ds-bg-sunken` | `#e2ddd0` | `#100f0b` | 输入槽、代码块、嵌入区 |
| `--ds-fg` | `#1a1a18` | `#ece8dc` | 主文字、标题、油墨 |
| `--ds-fg-muted` | `#4a4a45` | `#aaa595` | byline、caption、辅助说明 |
| `--ds-fg-subtle` | `#6e6e66` | `#7e7a6c` | 占位、弱信息、大字辅助 |
| `--ds-fg-on-accent` | `#f6f3ea` | `#161512` | 落在强调底上的文字 |
| `--ds-border` | `#d6d0c2` | `#34322a` | hairline 分隔 |
| `--ds-border-strong` | `#1a1a18` | `#ece8dc` | masthead rule、强边框 |

### 品牌与强调

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#1f1f1c` | `#e8e4d8` | 主操作、强墨色按钮 |
| `--ds-primary-hover` | `#000000` | `#fffdf4` | hover |
| `--ds-primary-active` | `#000000` | `#d6d2c6` | active/pressed |
| `--ds-primary-fg` | `#f6f3ea` | `#161512` | 主操作上的文字 |
| `--ds-accent` | `#a8201a` | `#e0564e` | 唯一 editorial red |
| `--ds-accent-fg` | `#ffffff` | `#1a0a08` | red 底上的文字 |

### 语义状态

| 语义 | 主色（亮/暗） | -bg（亮/暗） | -fg（亮/暗） |
|---|---|---|---|
| success | `#1f6e3a` / `#5fb87a` | `#e4f0e6` / `#0e2a1a` | `#0a3219` / `#cdeed7` |
| warning | `#8a5e10` / `#d6b25a` | `#f5ecce` / `#241c08` | `#42300a` / `#f6e6be` |
| danger | `#a8201a` / `#e0564e` | `#f6e0de` / `#2a0e0c` | `#561010` / `#f8d4d0` |
| info | `#1d4e7a` / `#6fa6d0` | `#e2ecf4` / `#0c2030` | `#0c2740` / `#cfe6f4` |

强调色梯度：亮色只有 `#a8201a`，暗色提亮到 `#e0564e`。危险色复用红色，避免第二个红系。

---

## 5. 字体

- `--ds-font-serif`: `"Noto Serif", Georgia, "Songti SC", serif`。用于 masthead、headline、deck、正文、pull quote。
- `--ds-font-sans`: `"Inter", -apple-system, "PingFang SC", sans-serif`。用于按钮、表单、导航、辅助 UI。
- `--ds-font-mono`: `"JetBrains Mono", monospace`。用于 kicker、dateline、edition、vol/no、price、数字元信息。

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-text-xs` | 13px | dateline、kicker、caption |
| `--ds-text-sm` | 14px | UI 标签、表头、byline |
| `--ds-text-base` | 17px | 正文，多栏文本 |
| `--ds-text-md` | 19px | deck、摘要、重要说明 |
| `--ds-text-lg` | 22px | 小标题、卡片标题 |
| `--ds-text-xl` | 28px | section headline |
| `--ds-text-2xl` | 38px | lead headline |
| `--ds-text-3xl` | 52px | masthead / front-page hero headline |

字重保持 `400 / 500 / 600`。tracking 保持 `-0.015em / 0`，大标题略紧，正文正常。正文可以 `text-align: justify`，但中文长段在窄屏要回到自然左对齐。

---

## 6. 间距与布局

`--ds-space-1..12` = `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px`，继承 07。

- **版心**：桌面 broadsheet 容器建议 `1080-1120px`；内页可用 `max-width: 1120px`。
- **多栏正文**：桌面 2-3 columns，`column-gap: 32px`，`column-rule: 1px solid var(--ds-border)`。
- **移动端**：≤640px 所有多栏收为 1 column，避免 390px 宽度横向溢出。
- **规则线**：section 之间用 single rule 或 double rule，masthead 用强线。
- **图片**：灰阶处理，`filter: grayscale(1) contrast(1.05)`，加 `1px var(--ds-border-strong)` keyline 和 caption。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：`sm/md/lg = 0px`，`full = 9999px` 仅保留头像、开关、pill 这类语义圆形。
- **阴影**：`sm/md = 0 0 0 1px var(--ds-border)`，`lg = 0 0 0 1px var(--ds-border-strong)`。这是 keyline，不是投影。
- **描边**：`--ds-border` 做 hairline，`--ds-border-strong` 做 masthead、boxed quote、重点卡片、表格外框。

---

## 8. 动效

报纸风不需要弹跳或大位移。保留 07 的克制 motion：

- `--ds-ease: cubic-bezier(.22,.61,.36,1)`
- `--ds-dur-fast: 160ms`
- `--ds-dur-base: 240ms`
- `--ds-dur-slow: 300ms`

典型过渡：hover 边线变强、按钮底色变深、主题切换颜色渐变、菜单透明度切换。必须尊重：

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

---

## 9. 组件规格

### 按钮

高 40px，左右 16px，`radius: 0`，font-sans 14px medium，focus 用 `--ds-focus-ring`。

| 变体 | 背景 | 文字 | 边框 | hover |
|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | none | `--ds-primary-hover` |
| secondary | `--ds-bg-elevated` | `--ds-fg` | `1px --ds-border-strong` | `--ds-bg-subtle` |
| tertiary | transparent | `--ds-accent` | none | `--ds-bg-subtle` |
| danger | `--ds-danger` | white / danger contrast text | none | darker via token/filter |

### 输入框

高 40px，padding 0 12px，底 `--ds-bg-elevated`，边 `--ds-border`，focus 边 `--ds-accent` + `--ds-focus-ring`。错误态用 `--ds-danger`。

### 卡片

底 `--ds-bg-elevated`，`1px --ds-border`，radius 0，shadow keyline。新闻卡片标题 serif，meta sans/mono，小 kicker 用 accent red。

### 徽章 / 标签

默认底 `--ds-bg-subtle`，文字 `--ds-fg-muted`。状态 badge 用 `*-bg`/`*-fg`。版面 kicker 建议大写、小型字距、红色文字，不要做成彩色胶囊。

### 提示条 Alert

底 `*-bg`，文字 `*-fg`，`1px` 全描边，前置 inline SVG。不要 emoji。标题 sans medium，正文可 sans 或 serif。

### 导航

报头导航用 masthead + dateline；站内 nav 用 1px bottom rule。当前栏目可用红色 kicker 或 `2px --ds-border-strong` 下划线。

### 表格

表头 sans/mono 小型大写，数字 `font-variant-numeric: tabular-nums`。行线 hairline，hover 只用 `--ds-bg-subtle`。

---

## 10. 可访问性

- **正文对比度**：light `--ds-fg` on `--ds-bg` 约 15.6:1；dark 约 14.6:1。
- **次级文字**：light muted 约 7.8:1；dark muted 约 7.4:1。subtle 在 light 约 4.48:1、dark 约 4.25:1，只用于占位、caption 辅助或大字，不作为正文色。
- **主按钮**：light `--ds-primary-fg` on `--ds-primary` 约 15:1；dark `--ds-primary-fg` on `--ds-primary` 约 14:1。
- **焦点**：双层 focus ring 用唯一红色，键盘可见。
- **触控目标**：按钮、icon button、switch、分页目标 ≥44px。
- **动效**：必须支持 `prefers-reduced-motion`。
- **移动排版**：多栏必须收一栏，正文不强制 justify，避免窄屏出现异常字距和横向滚动。

---

## 11. Do / Don't

**Do**
- 用大 masthead、双 rule、dateline/edition/price 建立报纸身份。
- 让正文多栏、带 column-rule、首字下沉、byline/dateline、小型大写 kicker。
- 图片灰阶并加黑色 keyline，caption 用 muted sans/mono。
- 全局只用一种 editorial red。
- 在移动端把多栏收成一栏，表格横滑，避免 390px 溢出。
- 用 rule、字重、版心和密度建立层级。

**Don't**
- 不要做成 07 editorial 那种舒适大留白长文页；Newspaper 必须更密、更像 broadsheet。
- 不要引入第二个品牌色或彩色插画。
- 不要使用圆角卡片、柔和阴影、渐变大 hero 来替代报头。
- 不要让三栏正文在手机继续并排。
- 不要把所有文字都做同一字号，必须有 headline/deck/body/byline 层级。
- 不要用 emoji 当图标或版面标记。

---

## 12. 如何接入

**1. 引入 tokens.css**

```html
<link rel="stylesheet" href="./styles/26-newspaper/tokens.css">
```

```js
import './styles/26-newspaper/tokens.css'
```

**2. 使用变量**

```css
.front-page {
  background: var(--ds-bg);
  color: var(--ds-fg);
  font-family: var(--ds-font-serif);
}

.masthead {
  border-top: 3px double var(--ds-border-strong);
  border-bottom: 3px double var(--ds-border-strong);
}

.story-columns {
  column-count: 3;
  column-gap: var(--ds-space-7);
  column-rule: 1px solid var(--ds-border);
}

@media (max-width: 640px) {
  .story-columns { column-count: 1; }
}
```

**3. 切换暗色**

```js
document.documentElement.dataset.theme = 'dark'
// or document.documentElement.classList.add('dark')
```

**4. Tailwind 项目**

```js
module.exports = {
  presets: [require('./styles/26-newspaper/tailwind.preset.js')]
}
```

```jsx
<article className="max-w-reading mx-auto bg-bg text-fg font-serif">
  <p className="font-mono text-xs uppercase tracking-normal text-accent">Metro Desk</p>
  <h1 className="text-3xl font-bold tracking-tight">Harbor Council Opens the Waterfront Ledger</h1>
</article>
```
