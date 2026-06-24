# 日系极简 Japanese / MUJI-like（生活方式）

> 米白 / 原木为底，墨色为字，低饱和大地色只作偶尔点缀。细线分层，几乎不用阴影，适度留白是这套系统的语言。

文件：`tokens.css`（CSS 变量）· `tokens.json`（机器可读）· `tailwind.preset.js`（Tailwind 预设）· `preview.html`（自包含展示页）· 本文档。

---

## 1. 一句话气质

无印良品感的克制与自然——给生活方式品牌、杂货 / 家居电商、安静内容站、极简产品与冥想 / 阅读类应用。看起来像一张被自然光照着的米白纸，上面只有该有的东西。

---

## 2. 设计哲学 / 性格

与基底 Geist 的关系：**继承**其中性、克制、不喧哗的工程气质与同一套 `--ds-*` 契约；**改写**它的冷白中性灰——换成暖米白 + 原木 + 墨，并把「靠阴影分层」改成「靠细线 + 留白分层」。

1. **素之美 · 做减法**：极简不是空无一物，而是克制——知道哪些东西可以不出现。强调色稀少，装饰几乎为零。
2. **留白是语言**：适度留白是排版手段而非浪费；区块之间慷慨呼吸，但不空旷到失去信息密度。
3. **细线分层，几乎无影**：用 1px 的 `--ds-border` 与留白建立层级；阴影极弱（仅浮层用一点），不堆叠投影。
4. **暖而非冷**：米白而非纯白，墨而非纯黑；色温偏暖，长时间观看更安定。
5. **自然材质感**：图片用自然光照片、米白细边框；色彩取自原木、苔藓、陶土、藏青等低饱和大地色。

---

## 3. 何时用 / 何时别用

**适合**
- 生活方式 / 家居 / 杂货品牌站与电商
- 安静的内容站、品牌故事、季节企划
- 极简工具型产品、冥想 / 阅读 / 笔记类 App
- 想要「克制、自然、耐看、不过时」气质的项目

**别用**
- 需要强促销刺激、高对比 CTA 轰炸的电商大促（强调太稀少）
- 数据极密的 B 端控制台（留白会显得奢侈、信息密度不够）
- 想要活泼鲜艳、童趣或科技炫酷气质的产品（与本风格相反）

---

## 4. 颜色

语义 token 一律 `--ds-*`，组件不硬编码颜色。全部满足 WCAG AA（正文 ≥4.5:1，大字 / UI ≥3:1）。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
| --- | --- | --- | --- |
| `--ds-bg` | `#f4f1ea` | `#1c1a17` | 米白主背景 / 深墨褐底 |
| `--ds-bg-subtle` | `#ece7db` | `#232019` | 次背景 · 区块底 |
| `--ds-bg-elevated` | `#faf8f3` | `#2a2620` | 抬起表面 · 卡片 / 弹层 |
| `--ds-bg-sunken` | `#e6e0d2` | `#151310` | 凹陷 · 输入槽 / 代码块 |
| `--ds-fg` | `#33312c` | `#e8e4da` | 墨色主文字（亮 11.3:1） |
| `--ds-fg-muted` | `#6b6862` | `#aaa493` | 次要文字（亮 5.0:1） |
| `--ds-fg-subtle` | `#6f6b61` | `#928c7c` | 占位 / 弱文字（亮 4.7:1） |
| `--ds-fg-on-accent` | `#faf8f3` | `#1c1a17` | 落在强调色上的文字 |
| `--ds-border` | `#e2ddd2` | `#38342c` | 细描边 / 分隔线（**主要分层手段**） |
| `--ds-border-strong` | `#cfc8b9` | `#4f4a3f` | 强描边 |

### 品牌与强调（强调色梯度）

| Token | 亮色 | 暗色 | 用途 |
| --- | --- | --- | --- |
| `--ds-primary` | `#3a4a5a` | `#8ba6bd` | 藏青主操作色（沉静）。暗色提亮 |
| `--ds-primary-hover` | `#2f3d4a` | `#9cb4c8` | hover |
| `--ds-primary-active` | `#26313c` | `#7d99b1` | active / pressed |
| `--ds-primary-fg` | `#faf8f3` | `#1c1a17` | 主操作上的文字 |
| `--ds-accent` | `#5d6e4f` | `#9bb087` | 苔绿次强调 / 链接 |
| `--ds-accent-fg` | `#faf8f3` | `#1c1a17` | accent 上的文字 |

> 备选主色：陶土 `#8a7a6a`（更暖、更原木）。若品牌偏暖木调，可把 `--ds-primary` 换成陶土系并相应调 hover / active，accent 仍用苔绿。

### 语义状态（低饱和大地色：主色 + 浅底 + 底上深字）

| 语义 | 主色（亮 / 暗） | -bg（亮 / 暗） | -fg（亮 / 暗） |
| --- | --- | --- | --- |
| success | `#5d7a52` / `#9cb888` | `#e8eee2` / `#222a1c` | `#2c3d26` / `#dde9d2` |
| warning | `#a07535` / `#d2a55f` | `#f3ead8` / `#2c2110` | `#543a14` / `#f3e3c6` |
| danger | `#a8513f` / `#d2856f` | `#f1e2dc` / `#2e1812` | `#582316` / `#f3ddd4` |
| info | `#4a6275` / `#82a3bc` | `#e2e8ed` / `#16222c` | `#243440` / `#d7e5ef` |

---

## 5. 字体

**对比轴**：标题用衬线 **Noto Serif**（端庄、文学感），正文与控件用无衬线 **Inter**（清爽、现代）。两者的对比本身就是一种层级。中文标题走系统明朝 / 宋体回退（`Hiragino Mincho ProN` / `Source Han Serif SC` / `Songti SC`），正文走 `Hiragino Kaku Gothic` / `PingFang SC`。

- `--ds-font-sans`：`"Inter", -apple-system, "Hiragino Kaku Gothic ProN", "PingFang SC", …`
- `--ds-font-serif`：`"Noto Serif", "Hiragino Mincho ProN", "Source Han Serif SC", "Songti SC", Georgia, …`
- `--ds-font-mono`：`"JetBrains Mono", ui-monospace, "SF Mono", Menlo, …`（数据 / 价格 / 代码）

**字号比例尺**（克制拉开）：xs 12 · sm 13 · base 15 · md 17 · lg 20 · xl 26 · 2xl 34 · 3xl 46。

**字重**：normal 400 / medium 500 / bold 600（标题用 600 serif，不上更重）。

**字距**：标题 `--ds-tracking-tight: -0.02em`（不低于 −0.04em 下限）；正文 0。**行高舒适**：tight 1.3 / normal 1.6 / relaxed 1.8。

---

## 6. 间距与布局

4px 基的间距尺（`--ds-space-1…12` → 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96）。本风格偏松：**组内** 8–12，**组间** 20–32，**区块层级** 48–80。

- **节奏**：留白分明但不空旷，每屏信息密度饱满（留白是语言，不是借口）。
- **容器宽**：内容容器约 1080px；正文阅读容器约 680–720px。
- **栅格**：12 栏意识，常用 3 / 4 栏卡片网格 + 等高 / masonry 画廊。

### 响应式（移动端）

- `≤880px`：hero 单列（图在上）、画廊 / 媒体卡 / 商品 2 栏、仪表盘侧栏转横排。
- `≤640px`：多列栅格收为单列，顶栏导航隐藏，手机框满宽。

---

## 7. 圆角 / 阴影 / 描边

- **圆角（小而克制）**：`sm 4px` / `md 8px` / `lg 12px` / `full 9999px`。卡片 / 图片用 md(8)，弹层用 lg(12)，按钮 / 输入用 sm(4)。
- **阴影（极弱 / 几乎无）**：`sm/md/lg` 都很轻，仅浮层（菜单 / 模态 / toast / hero frame）用一点 md/lg；卡片**不用**阴影，靠 1px 细线。
- **描边**：1px `--ds-border` 是**主要分层手段**——卡片、输入、图片、表格分隔、区块标题下划线全用它；强调 / 分隔用 `--ds-border-strong`。

---

## 8. 动效

- **时长**：`--ds-dur-fast 160ms` / `base 240ms` / `slow 320ms`。
- **曲线**：`--ds-ease: cubic-bezier(.22,.61,.36,1)`（温柔 ease-out，**无弹跳**——日系不跳脱）。
- **典型过渡**：hover 改 `border-color` / `background`；主题切换 `background/color` 用 slow；图片 hover 轻微 `scale(1.04)`。
- **`prefers-reduced-motion: reduce`**：全局把动画 / 过渡时长降到 0.01ms，关闭平滑滚动。

---

## 9. 组件规格

### 按钮（高 40px / 内边距 0 20px / radius sm / font-sans / weight medium）
- **primary**：藏青底 + 米白字；hover→`--ds-primary-hover`，active→`--ds-primary-active`。
- **secondary**：elevated 底 + 1px `--ds-border-strong` + 主文字；hover 改 subtle 底。
- **tertiary**：透明底 + 主色字；hover subtle 底。
- **danger**：danger 底 + 米白字。
- 尺寸：sm 32 / 中 40 / lg 48；图标按钮 40×40（必须 `aria-label`）；disabled `opacity .45`。
- 焦点：`box-shadow: var(--ds-focus-ring)`（双环）。

### 输入框 / textarea / select（高 40px / 内边距 0 12px / radius sm）
- 默认 **sunken 槽底** + 1px border；focus 改 elevated 底 + 主色边 + 焦点环；错误态 danger 边 + danger 提示。可前置图标（左 38px 内缩）。

### 卡片（radius md / 内边距 24px / 边 1px --ds-border / 无阴影）
- elevated 底；hover 仅加深描边到 `--ds-border-strong`，**不加阴影**。不嵌套卡片。

### 徽章 / 标签（高 22px / 内边距 0 12px / radius full / font-sans / 12px）
- 语义版用 `*-bg` 浅底 + `*-fg` 字 + 主色 35% 细边；primary 版实底。可带前导小图标。

### 提示条 Alert（radius md / 内边距 16px / 前置语义 SVG 图标 + 1px 全描边）
- **无侧边色条**；浅底（`*-bg`）+ 1px 全描边（主色 45% 混 border）+ 前置语义图标（对勾 / 三角 / 叉 / i）。

### 导航（顶栏 sticky / tabs）
- 顶栏：60px 高 + 毛玻璃 + 1px 底边 + 品牌标记 + 主导航 + 主题切换。tabs：底部 1px 选中线（primary），无背景块。

### 表格（细线分隔 / tabular 数字）
- 每行 1px 底边；表头小号大写 muted；数字列右对齐 + `font-mono` + `tabular-nums`；行 hover subtle 底。

### 下拉菜单 / 工具提示 / 模态框 / Toast（浮层）
- 浮层用 elevated 底 + 1px border + `--ds-shadow-lg`；模态 radius lg；toast 右下角；层级走语义 `--ds-z-*`（见可访问性 / 第 12 节）。

---

## 9b. 图片与图标用法（v2 新区块）

### 图片处理（保持身份）
- **风格做法**：自然光照片 + **米白细边框（1px `--ds-border`）+ 8px 小圆角 + 几乎无阴影**；克制、适度留白。
- **宽高比框**：统一 `aspect-ratio` + `object-fit:cover`，覆盖 16:9 / 4:3 / 1:1 / 3:4。
- **媒体卡 / 画廊**：图在上 + 标题正文操作（≥3 张网格）；等高 / masonry 画廊（≥6 图）。
- **图文混排**：大图 + 段落并排；**图上叠字**用底部渐变 scrim（米墨色），保证白字 AA。
- **背景大图区**：full-bleed 图 + 半透明遮罩 + 内容。
- **头像**：尺寸阶 24 / 32 / 40 / 48；堆叠 avatar-stack；用户行（头像 + 名 + 签名）。

### 图标用法（统一细线）
- **风格做法**：内联 SVG，`stroke="currentColor"`、`stroke-width≈1.6`、`viewBox="0 0 24 24"`、`stroke-linecap/linejoin: round`；颜色继承上下文。
- 尺寸阶 16 / 20 / 24 / 32（大尺寸可降到 1.4 线宽保持视觉一致）；线性 / 实心 / 双色三态；状态图标用语义色。
- 在场景里：图标按钮（带 `aria-label`）、按钮内前 / 后置、输入框前置、列表前导、带数字的徽标图标。

### 桌面 / 移动布局（preview 含可信小样）
- 桌面：店铺后台仪表盘（侧栏 + KPI + 柱图 + 表格）、商品网格上新——均放进带浏览器 chrome 的 frame。
- 移动：App 首页（feed + 底部标签栏）、商品详情（大图 header + 操作）、订单列表（缩略图行）——~320px 手机框含状态栏意象。

---

## 10. 可访问性

- **对比度**：所有正文 / 控件文字亮暗均 ≥4.5:1，大字 / 图标 ≥3:1（见第 4 节实测值）。`--ds-fg-subtle` 占位文字亮色 4.7:1、暗色 5.2:1，均达正文标准。
- **焦点**：所有可聚焦元素 `:focus-visible` 显示 `--ds-focus-ring`（底环 + 主色环），藏青 / 提亮藏青可辨。
- **触控目标**：按钮 / 输入 / 图标按钮 ≥40px 高，移动端标签栏项 ≥44px 命中区。
- **可减弱动效**：`prefers-reduced-motion` 关闭过渡与平滑滚动。
- **语义层级**：z-index 用 `--ds-z-dropdown < sticky < modal-backdrop < modal < toast < tooltip`，**禁用 9999** 魔法值。
- **图片**：全部 `loading="lazy"` + 有意义 `alt`（装饰性头像用空 `alt`）。

---

## 11. Do / Don't

**Do**
- 用 1px 细线 + 留白分层，留白当语言用。
- 强调色留给真正重要的事（主操作、当前选中），其余交给米白与墨。
- 图片统一自然光 + 米白细边 + 8px 圆角；图标统一 1.6 细线。
- 用米白 / 墨而非纯白 / 纯黑；色彩低饱和、偏暖。
- 标题衬线、正文无衬线，建立对比轴。

**Don't**
- 别堆阴影做层级（卡片不用阴影）；别在一个元素上同时叠 1px 边 + ≥16px 模糊阴影（ghost-card）。
- 别用高饱和 / 荧光色；别让强调色到处都是，强调会失效。
- 别把留白填死成密集网格——但也别空旷到信息稀薄。
- 别用侧边粗色条做 alert（用前置图标 + 浅底 + 全描边）。
- 别用渐变文字（`background-clip:text`）；强调靠字重 / 字号 / 衬线。

---

## 12. 如何接入

**1) 引入 tokens.css（拿到全部 `--ds-*` 变量与亮暗主题）**
```html
<link rel="stylesheet" href="./styles/14-japanese/tokens.css">
```
暗色：给 `<html>` 设 `data-theme="dark"`（或加 `.dark` 类，二者都已覆盖）。

**2) 用变量，不硬编码颜色**
```css
.card {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 1px solid var(--ds-border);     /* 细线分层，不用阴影 */
  border-radius: var(--ds-radius-md);      /* 8px */
  padding: var(--ds-space-6);              /* 24px */
}
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);      /* 4px */
}
```

**3)（Tailwind 项目）引 preset**
```js
// tailwind.config.js
module.exports = { presets: [require('./styles/14-japanese/tailwind.preset.js')] }
```
```js
// 入口引入变量
import './styles/14-japanese/tokens.css'
```
之后即可用 `bg-bg-elevated text-fg border-border rounded-md`、`bg-primary text-primary-fg`、`font-serif`（标题）/ `font-sans`（正文）等，亮 / 暗主题随 `data-theme` 自动切换。

> 图片建议统一 `rounded-md border border-border`，不加阴影；图标统一 24px / 1.6 线宽，`stroke-current`。
