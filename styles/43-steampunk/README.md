# 蒸汽朋克 / Steampunk

> 旧羊皮纸为底、黄铜为主、铜绿为辅、油墨深褐为字的维多利亚机械时代设计系统。它像一间燃着煤气灯的飞艇工坊：压力表、齿轮、铆钉金属板、雕刻双线框、角花与等宽仪表读数共同构成界面气质，适合虚构飞艇航线、钟表工坊、机械档案、复古工业品牌与叙事型工具。

示例主体「**Brass Meridian Airship Co.**」为原创虚构实体，仅作展示，无任何第三方设计引用。

---

## 1. 一句话气质

把维多利亚机械时代的温暖工业感翻译成可切换主题的现代 UI：**羊皮纸承载内容，黄铜承担操作，铜绿提示状态，油墨深褐保障阅读，压力表与铆钉让系统有机器骨架**。它应当显得考究、机械、温暖，而不是舞台道具式的堆叠。

---

## 2. 设计哲学 / 性格

本 Kit 继承统一的 `--ds-*` Token 契约，保留 21 Art Deco 的间距、字号、行高、字重、字距与动效节奏；改写的是颜色、圆角、阴影、字体栈与装饰语言。

1. **羊皮纸先于金属。** 界面主体保持浅色优先，`--ds-bg #e8e0cf` 与 `--ds-bg-elevated #f4eeda` 提供可长时间阅读的纸面。
2. **黄铜做主操作，铜绿做次强调。** `--ds-primary` 是黄铜，负责按钮、选中态与铆钉金属板；`--ds-accent` 是氧化铜绿，用于链接、表针、细节线与信息提示。
3. **装饰必须像零件。** 压力表刻度、齿轮、铆钉、雕刻双线框和角花都应对齐、重复、有结构，避免随意贴花。
4. **维多利亚衬线领导层级。** 标题用 `Noto Serif` / Georgia，正文用 Inter，仪表读数与表格数字用 JetBrains Mono。
5. **区别于相邻风格。** 它不是 21 Art Deco 的几何太阳放射，也不是 11 Luxury 的极简炭灰金线，更不是 32 Skeuomorphism 的现代皮革/凝胶质感；这里的核心是黄铜机械与旧纸工坊。

---

## 3. 何时用 / 何时别用

**适合**
- 虚构飞艇航线、钟表工坊、机械博物馆、复古工业品牌。
- 有叙事感的工具：航线预订、工坊档案、发明日志、机械库存。
- 需要温暖、手工、历史感的品牌页或活动页。
- 以仪表、读数、工单、铭牌为视觉主线的界面。

**不适合**
- 极简企业后台、医疗/金融等需要高度中性的场景。
- 现代科技、赛博、玻璃拟态、纯奢侈品方向。
- 儿童、轻娱乐、明亮糖果色产品。
- 需要完全无装饰、高密度长表格的生产系统。

---

## 4. 颜色

所有颜色走 `--ds-*` 语义 Token，组件不硬编码色值。亮色是 aged parchment workshop，暗色是 gaslit workshop night。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
| --- | --- | --- | --- |
| `--ds-bg` | `#e8e0cf` | `#181410` | 主背景 |
| `--ds-bg-subtle` | `#ddd3bd` | `#201a14` | 分组底 / 次背景 |
| `--ds-bg-elevated` | `#f4eeda` | `#271f17` | 卡片 / 浮层 |
| `--ds-bg-sunken` | `#d0c4a8` | `#100c08` | 输入槽 / 仪表槽 |
| `--ds-fg` | `#2a2018` | `#ece0cc` | 主文字 |
| `--ds-fg-muted` | `#5a4a38` | `#b4a488` | 次文字 |
| `--ds-fg-subtle` | `#776550` | `#847460` | 弱文字 / 占位 |
| `--ds-fg-on-accent` | `#f4eeda` | `#1a0e04` | 强调底上的文字 |
| `--ds-border` | `#c4b496` | `#3a2e20` | 常规描边 |
| `--ds-border-strong` | `#2a2018` | `#c9a86a` | 强描边 / 雕刻线 |

### 品牌与强调

| Token | 亮色 | 暗色 | 用途 |
| --- | --- | --- | --- |
| `--ds-primary` | `#9a6a2e` | `#c9904a` | 黄铜主操作、铆钉、金属板 |
| `--ds-primary-hover` | `#84591f` | `#d8a05a` | hover |
| `--ds-primary-active` | `#6e4a18` | `#b8803a` | active / pressed |
| `--ds-primary-fg` | `#f4eeda` | `#1a0e04` | primary 上文字 |
| `--ds-accent` | `#2f6b66` | `#5fae9e` | 铜绿链接、表针、氧化细节 |
| `--ds-accent-fg` | `#f4eeda` | `#06201c` | accent 上文字 |

**强调色梯度：** 亮色黄铜 `#6e4a18 -> #9a6a2e -> #84591f`；暗色黄铜 `#b8803a -> #c9904a -> #d8a05a`。暗色 `primary` / `accent` 均故意使用深色文字，以保证金属亮底上的 AA 对比。

### 语义状态

| 语义 | 亮色 主色 / 底 / 文字 | 暗色 主色 / 底 / 文字 |
| --- | --- | --- |
| success | `#3a6b2e` / `#e6efe0` / `#173310` | `#6fbf6f` / `#0e260e` / `#cdeec0` |
| warning | `#9a6a2e` / `#f3e9cd` / `#42300a` | `#d8a05a` / `#241a06` / `#f6e6be` |
| danger | `#9a2e1f` / `#f3e0db` / `#4a130d` | `#d8584a` / `#2a0e0a` / `#f8d6cf` |
| info | `#2f6b66` / `#e0eceb` / `#0e2a28` | `#5fae9e` / `#08221e` / `#cfeae4` |

---

## 5. 字体

- `--ds-font-serif`: `"Noto Serif", Georgia, serif`  
  维多利亚展示标题、章节标题、品牌名。中文环境走本地字体回退，保持衬线气质。
- `--ds-font-sans`: `"Inter", -apple-system, "PingFang SC", sans-serif`  
  正文、控件、导航、标签，保证屏幕阅读。
- `--ds-font-mono`: `"JetBrains Mono", monospace`  
  压力表读数、表格数字、代码、时间和航线编号。

比例尺沿用 21：`12 / 14 / 16 / 18 / 22 / 28 / 38 / 52px`。标题用 `--ds-tracking-tight: -0.01em`，正文 `0`；行高为 `1.22 / 1.55 / 1.8`。仪表读数使用 tabular figures，避免数字跳动。

---

## 6. 间距与布局

- **比例尺**：4px 基，`1=4` 到 `12=96`，与 21 保持一致。
- **节奏**：工坊界面可以比极简风格更密，但组内仍保持 8–12px，组间 16–24px，区块 48–80px。
- **容器**：主预览约 1120px；正文行宽控制在 65–75ch。
- **栅格**：卡片 2/3/4 列；移动端单列。压力表、齿轮、铆钉等固定格式元素必须使用 `max-width`、`aspect-ratio`、`min-width:0`，防止 390px 宽度溢出。
- **装饰边界**：齿轮和角花应被所属面板 `overflow:hidden` 或明确定位约束，不能把页面撑出横向滚动。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**：`sm 3px` / `md 5px` / `lg 8px` / `full 9999px`。这比 Art Deco 更机械，也比现代拟物更克制。
- **阴影**：亮色使用油墨褐投影：`rgba(42,32,24,.18/.28/.36)`；暗色使用更深的黑色投影。阴影用于层级，不用于玻璃高光。
- **描边**：常规描边 `--ds-border`，雕刻线和结构框用 `--ds-border-strong`，黄铜细节用 `--ds-primary`，铜绿氧化细节用 `--ds-accent`。
- **框架**：重点面板使用外描边 + 内部 double line + 铆钉角点，形成 engraved double-line ornamental frame。

---

## 8. 动效

- **时长**：fast 140ms / base 220ms / slow 320ms，继承 21。
- **曲线**：`cubic-bezier(.22,.61,.36,1)`，避免弹跳。
- **典型动效**：按钮压下、卡片轻抬、主题切换、压力表针轻摆、齿轮慢速转动。
- **减弱动效**：`prefers-reduced-motion: reduce` 下停止齿轮与表针动画，并将通用过渡压到 0.01ms。

---

## 9. 组件规格

- **按钮**：小 32 / 中 40 / 大 48；主按钮黄铜底 `--ds-primary` + `--ds-primary-fg`，hover/active 使用对应 token。次按钮为抬起纸面 + 强描边；危险按钮用 `--ds-danger`。
- **输入框**：40px 高，`--ds-bg-elevated` 底 + `--ds-border`，focus 使用 `--ds-focus-ring`。错误态使用 danger 描边与提示文字。
- **卡片**：`--ds-bg-elevated`、1px 描边、`--ds-radius-md`、轻投影。重点卡可加内嵌雕刻双线和小铆钉。
- **徽章 / 标签**：小半径、宽字距、短文本。`primary` 为黄铜底，`info` 为铜绿底；brass outline 标签用于铭牌。
- **提示条**：四语义齐全，浅底/深底分别使用 `*-bg` + `*-fg`，前置线性 SVG 图标。
- **导航**：顶栏用半透明羊皮纸底 + 1px 分隔，品牌徽可用齿轮或铆钉圆章；tab 选中使用黄铜。
- **装饰系统**：压力表为主签名；齿轮用于背景运动；铆钉用于板边；雕刻双线用于分隔；角花用于重点面板四角。全部使用内联 SVG 或 CSS token，不使用 emoji。

---

## 10. 可访问性

- **对比度**：正文、次文字、按钮文字与语义提示按 WCAG AA 配置；亮暗双主题均检查。`--ds-fg-subtle` 只用于非关键占位、装饰性小字或大字号弱文本，不用于正文信息。
- **暗色文字策略**：暗色黄铜 `--ds-primary #c9904a` 与铜绿 `--ds-accent #5fae9e` 都使用深色前景，这是有意设计。
- **焦点可见**：所有交互控件必须保留 `--ds-focus-ring`，不要用装饰框替代焦点。
- **触控目标**：移动端按钮、tab、底栏项最小可点区域 ≥44px。
- **可减弱动效**：齿轮与压力表针必须响应 `prefers-reduced-motion`。
- **图标语义**：装饰 SVG 使用 `aria-hidden="true"`；按钮图标必须有文本或 `aria-label`。

---

## 11. Do / Don't

**Do**
- 用羊皮纸背景、黄铜主操作、铜绿细节建立风格骨架。
- 让压力表、齿轮、铆钉、双线框成系统出现，并保持对齐。
- 用维多利亚衬线标题和等宽仪表数字制造时代感。
- 保持正文区域清爽，装饰集中在 hero、重点卡、分隔与铭牌上。
- 暗色亮金属底使用深色文字，保证 AA。

**Don't**
- 不要把 Steampunk 做成 Art Deco：少用太阳放射、扇形光、人字几何。
- 不要满屏黄铜、满屏纹理或厚重皮革；那会变成道具化拟物。
- 不要用 emoji 代替齿轮、警告、状态或装饰图标。
- 不要在组件里硬编码颜色；用 `var(--ds-*)`。
- 不要让齿轮、边框、设备壳或表格在 390px 宽度产生横向溢出。

---

## 12. 如何接入

1. 引入 token：
   ```html
   <link rel="stylesheet" href="./styles/43-steampunk/tokens.css">
   ```

2. 使用变量：
   ```css
   .btn-primary {
     background: var(--ds-primary);
     color: var(--ds-primary-fg);
     border-radius: var(--ds-radius-sm);
   }

   .gauge-readout {
     font-family: var(--ds-font-mono);
     color: var(--ds-fg);
     background: var(--ds-bg-sunken);
   }
   ```

3. 切换主题：
   ```js
   document.documentElement.dataset.theme = 'dark';
   ```
   或给根节点加 `.dark`。

4. Tailwind 项目：
   ```js
   module.exports = {
     presets: [require('./styles/43-steampunk/tailwind.preset.js')]
   };
   ```

5. 字体：预览页只引用本地 `../../_fonts/fonts.css`；生产项目可按同一字体栈接入本地字体文件，不依赖外部 CDN。
