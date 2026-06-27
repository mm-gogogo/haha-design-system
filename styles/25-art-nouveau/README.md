# Art Nouveau · 新艺术运动植物温室（Botanical Conservatory）

> 暖羊皮纸基底、鼠尾草青绿主操作、哑金细线、sepia 墨色文字、鸢尾/百合/藤蔓线稿与拱形装饰框。适合植物香氛、茶馆、温室、歌剧沙龙等带有手工感和叙事感的体验。

示例品牌 **Maison Liora** 是虚构的植物香氛茶馆；文案、人物、香调和空间均为原创。风格参考 Art Nouveau 的有机曲线语言，但不复制任何第三方图形或作品。

---

## 1. 一句话气质

像一张哑金线稿落在暖羊皮纸上：有机、纤细、植物性、带拱窗感。它与 `21-art-deco` 的几何对称完全不同；本套强调藤蔓式的 whiplash 曲线、花茎、鸢尾、百合、孔雀羽眼和不规则的植物流动。

---

## 2. 设计哲学 / 性格

继承 Geist 基底的固定 `--ds-*` 语义 token、双主题、状态色、焦点环、间距与字体比例尺，但将视觉性格改写为植物温室：

1. **有机优先**：曲线像藤蔓生长，不做镜像几何、不做放射状硬结构。
2. **装饰是边界，不是内容**：花饰只能围绕 hero、分隔线、面板角落与图像框，不能穿过正文。
3. **哑金细线**：`--ds-accent` 是线稿和少量链接强调，不是大面积背景色。
4. **暖纸与 sepia 墨**：大面积使用 `--ds-bg` 与 `--ds-fg`，保留阅读舒适度。
5. **衬线展示， sans 承载**：标题用 Noto Serif 承担时代气质，正文和控件保持 Inter / PingFang SC 的清晰。

---

## 3. 何时用 / 何时别用

**适合**
- 植物香氛、花艺、茶馆、温室、剧院/歌剧、精品沙龙。
- 需要优雅叙事、预约、菜单、内容手记、展览导览的页面。
- 希望有历史感、手工感、植物性，但仍要可读和可用的轻量产品界面。

**不适合**
- 高密度 B 端后台、交易系统、实时监控屏。
- 需要强促销、大面积饱和 CTA、游戏化反馈的落地页。
- 医疗诊断、金融风控等需要极低装饰干扰的高风险场景。
- Art Deco 几何、赛博、极简 SaaS 或儿童可爱风项目。

---

## 4. 颜色

亮色是暖羊皮纸与 sepia 墨；暗色是夜间温室，保留绿与金的可见度。正文级文本按 AA 思路选取：body 对背景 ≥4.5:1，大字和 UI ≥3:1。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#f5f0e6` | `#181c18` | 页面主背景 |
| `--ds-bg-subtle` | `#ede6d6` | `#1f241f` | 区块底、面板组 |
| `--ds-bg-elevated` | `#fffdf6` | `#252b25` | 卡片、菜单、弹层 |
| `--ds-bg-sunken` | `#e5dcc8` | `#11140f` | 输入槽、代码块、图位底 |
| `--ds-fg` | `#2a2820` | `#ece4d2` | 主文字 |
| `--ds-fg-muted` | `#514c3e` | `#aaa48f` | 次要文字、图注、元信息 |
| `--ds-fg-subtle` | `#756e5b` | `#7e7866` | 弱标签、placeholder、辅助说明 |
| `--ds-fg-on-accent` | `#f5f0e6` | `#11140f` | 强调色/深浅实心底上的文字 |
| `--ds-border` | `#ddd3bd` | `#353c33` | 常规分隔线 |
| `--ds-border-strong` | `#3e3a2c` | `#b89a4a` | 强描边、装饰框重点线 |

### 品牌与强调

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#3e6b5e` | `#6fae90` | 主按钮、选中、进度、当前项 |
| `--ds-primary-hover` | `#345a4f` | `#82bda0` | hover |
| `--ds-primary-active` | `#284740` | `#5e9a7e` | pressed |
| `--ds-primary-fg` | `#f5f0e6` | `#11140f` | primary 上文字 |
| `--ds-accent` | `#7d6212` | `#cba24e` | 哑金线稿、链接、首字下沉 |
| `--ds-accent-fg` | `#f5f0e6` | `#1a1408` | accent 实心底上的文字 |

### 语义状态

| 语义 | 主色（亮/暗） | -bg（亮/暗） | -fg（亮/暗） |
|---|---|---|---|
| success | `#3e7a4e` / `#6fbf86` | `#e6f1e6` / `#0e2a1a` | `#0e3a22` / `#cdeed7` |
| warning | `#8a6d18` / `#cba24e` | `#f5ecce` / `#241c08` | `#42330a` / `#f6e6be` |
| danger | `#a8423a` / `#e08078` | `#f6e2df` / `#2a100e` | `#561712` / `#f8d6d2` |
| info | `#3a6478` / `#6fa6bd` | `#e2edf2` / `#0e2530` | `#16323e` / `#cfe7f2` |

### 焦点

| Token | 值 | 说明 |
|---|---|---|
| `--ds-focus` | `#3e6b5e` / `#6fae90` | 与 primary 同源，亮暗都清晰 |
| `--ds-focus-ring` | `0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus)` | 双层焦点环，先用背景断开，再用焦点色描边 |

---

## 5. 字体

| 角色 | Token | 字族 | 用法 |
|---|---|---|---|
| 展示标题 | `--ds-font-serif` | `"Noto Serif", Georgia, "Songti SC", serif` | Hero、h1/h2、首字下沉、卡片标题。字距保持 0，避免廉价复古感。 |
| 正文/UI | `--ds-font-sans` | `"Inter", -apple-system, "PingFang SC", sans-serif` | 正文、按钮、表单、导航、元信息。保证中文和数字可读。 |
| 小标/数字 | `--ds-font-mono` | `"JetBrains Mono", monospace` | eyebrow、表格数字、代码。不用于长段正文。 |

### 比例尺

| Token | 值 | 用途 |
|---|---|---|
| `--ds-text-3xl` | 52px | Hero 标题 |
| `--ds-text-2xl` | 38px | 页面 h1 / 大区块标题 |
| `--ds-text-xl` | 28px | h2 |
| `--ds-text-lg` | 22px | h3 / 卡片标题 |
| `--ds-text-md` | 19px | 导语 |
| `--ds-text-base` | 17px | 正文 |
| `--ds-text-sm` | 14px | 控件 / 元信息 |
| `--ds-text-xs` | 13px | eyebrow / 脚注 |

字重 `400 / 500 / 600`；行高 `1.25 / 1.55 / 1.85`；tracking 继承源 kit：`tight -0.015em`，`normal 0`。中文标题回退宋体，正文回退苹方。

---

## 6. 间距与布局

- `--ds-space-1..12` 继承源 kit：`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px`。
- 页面容器约 `1080px`；长文阅读容器约 `680px`。
- Hero 可非对称分栏；右侧使用拱形图框，左侧保留 30rem 左右的短叙事。
- 卡片栅格用 `auto-fill minmax(260px,1fr)`；移动端一列。
- 装饰 SVG 必须被容器裁剪或限定 `max-width: 100%`，尤其 390px 宽移动端。

---

## 7. 圆角 / 阴影 / 描边

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | 4px | 按钮、输入框、小控件；克制而不现代泡泡化 |
| `--ds-radius-md` | 10px | 卡片、菜单、alert |
| `--ds-radius-lg` | 18px | 面板、图像、媒体卡 |
| `--ds-radius-full` | 9999px | pill、头像、switch |

Art Nouveau 的拱形不是通过改 token 名实现，而是在组件层用 `border-radius` 组合做拱窗：例如顶部 `48% 48% 18px 18px / 26% 26% 18px 18px`。阴影保持轻：亮色 `0 8px 22px -12px rgba(42,40,32,.2)`，暗色 `0 8px 22px -12px rgba(0,0,0,.6)`；真正的层级靠描边、留白与细金线。

---

## 8. 动效

| Token | 值 | 用途 |
|---|---|---|
| `--ds-ease` | `cubic-bezier(.22,.61,.36,1)` | 温柔 ease-out |
| `--ds-dur-fast` | 160ms | hover / focus |
| `--ds-dur-base` | 240ms | modal、toast、主题切换 |
| `--ds-dur-slow` | 300ms | 图片 scale、整页色彩过渡 |

任何藤蔓 shimmer、线稿描边或图片缩放都必须包在 `@media (prefers-reduced-motion: reduce)` 的降级规则下。当前 preview 保持轻微过渡，不做强动画。

---

## 9. 组件规格

**按钮**
- 高度：sm 32px / 默认 40px / lg 48px；圆角 `--ds-radius-sm`。
- primary：底 `--ds-primary`，字 `--ds-primary-fg`；hover/active 使用对应 token。
- secondary：底 `--ds-bg-elevated`，描边 `--ds-border-strong`，hover 到 `--ds-bg-subtle`。
- tertiary：透明底、字 `--ds-primary`，hover 到 `--ds-bg-subtle`。
- danger：底 `--ds-danger`，字用 `--ds-fg-on-accent`，避免把 danger panel 的 `--ds-danger-fg` 误用到实心按钮。

**输入框**
- 高 40px，底 `--ds-bg-elevated`，描边 `--ds-border`，圆角 sm。
- focus：`border-color: --ds-primary` + `--ds-focus-ring`。
- error：描边与 hint 使用 danger。

**卡片 / 面板**
- 卡片底 `--ds-bg-elevated`，`1px --ds-border`，hover 到 `--ds-border-strong`。
- Art Nouveau 面板可加拱角、角花和 inset 哑金线，但正文区不要被花饰覆盖。

**徽章 / 标签**
- 高 22px，圆角 full。语义标签用 `*-bg` 与 `*-fg`；primary 标签可实心。

**Alert**
- 浅语义底 + 语义文字 + 语义描边，左侧用 inline SVG，禁止 emoji。

**导航**
- sticky 顶栏可用半透明背景和 blur；tabs 用 primary 下划线表达当前项。
- 面包屑、分页、stepper 都用 `--ds-primary` 表示当前/完成。

**表格**
- 表头 sans + uppercase，数字列用 mono/tabular-nums。移动端允许表格横向滚动，不让整页横向滚动。

---

## 10. 可访问性

- 正文：`--ds-fg` 对 `--ds-bg` 在亮暗主题均远高于 4.5:1；`--ds-fg-muted` 也按正文级使用。
- 弱文字：`--ds-fg-subtle` 仅用于 placeholder、eyebrow、辅助标签；长正文不要使用它。
- parchment 对比：落在 `--ds-bg` 或 `--ds-bg-elevated` 上的正文必须保持 ≥4.5:1。
- 焦点：所有交互元素使用 `--ds-focus-ring`，不要只靠颜色变化。
- 触控：移动端按钮、tab、动作条建议命中区 ≥44px。
- 装饰：SVG 需 `aria-hidden="true"`，不能表达唯一信息；花饰不得遮挡文本。
- 动效：遵守 `prefers-reduced-motion: reduce`。

---

## 11. Do / Don't

**Do**
- 用 S 形 whiplash 曲线、藤蔓、鸢尾、百合、孔雀羽眼建立有机气质。
- 用哑金细线和拱形框装饰边界，不侵入正文。
- 保持正文对暖羊皮纸底 ≥4.5:1。
- 用衬线标题制造时代感，用 sans 保证 UI 可读。
- 明确区别于 Art Deco：曲线可以不对称、可以像植物生长。

**Don't**
- 不要做几何太阳放射、硬对称、阶梯线框，那会变成 Art Deco。
- 不要让花饰穿过段落、按钮文字或表单内容。
- 不要用大面积金色背景；金色只做细线、链接、小面积强调。
- 不要使用 emoji 当图标；全部用 inline SVG。
- 不要把色板调成单一绿色或单一棕色，暖纸、青绿、哑金、sepia 必须共同出现。
- 不要复制任何第三方画作、海报、商标或图案。

---

## 12. 如何接入

1. 引入 token：`import './styles/25-art-nouveau/tokens.css'`。
2. 使用变量：组件只消费 `var(--ds-*)`，不要硬编码颜色或替换变量名。
3. 切换暗色：在根节点设置 `data-theme="dark"`，或添加 `.dark`。
4. Tailwind：`presets: [require('./styles/25-art-nouveau/tailwind.preset.js')]`。
5. 预览：双击 `styles/25-art-nouveau/preview.html` 离线打开；只依赖本地 `../../_fonts/fonts.css` 与 `../../_assets/device.css`。
6. 迁移提示：从其他 kit 切换时保留组件的 `--ds-*` 消费方式，只替换 token 文件与少量装饰类。
