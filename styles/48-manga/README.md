# 漫画 · Manga / Ink & Screentone 设计系统

> 墨线漫画 · Inkline Comics 的界面语言：淡米色单行本纸、浓黑墨线分镜、灰阶网点、集中线、斜切面板、拟声词芯片，以及唯一高声量朱红点睛。Light-first，适合漫画阅读器、创作工作室、连载发布、zine 归档与叙事型品牌界面。

---

## 1. 一句话气质

像翻开一页高对比漫画原稿：**纸面安静，墨线很重，网点有节奏，朱红只在真正需要冲击的地方落下**。It feels like an inked manga spread rendered as a usable interface: narrative panels first, decoration second.

---

## 2. 设计哲学 / 性格

与 Geist 中性基底的关系：**继承**固定 `--ds-*` token 契约、4px 间距比例、亮暗双主题、可访问性底线和 Tailwind 消费方式；**改写**视觉气质为日本漫画与墨线出版语言：单行本纸、厚分镜边、灰阶 screentone、集中线、朱红印章与拟声词。

1. **Light-first paper system**：默认主题必须像温暖的纸，不是纯白软件界面。暗色是白墨落在墨黑纸上，不是霓虹夜景。
2. **Panel before ornament**：分镜、粗边、斜切与留白先建立叙事结构；网点和集中线只增强焦点。
3. **One vermilion strike**：朱红只做主操作、危险、印章、冲击线或少量重音；不要扩展成多色品牌系统。
4. **Screentone is shading**：网点是灰阶阴影，不是背景噪声。长正文必须落在纯色纸面。
5. **Readable drama**：标题可以夸张，正文、表单、数据必须清晰、可扫读、AA 对比达标。

---

## 3. 何时用 / 何时别用

**适合**
- 漫画阅读器、webtoon 竖向阅读、连载发布页。
- 漫画工作室、创作者后台、分镜管理、原稿归档。
- zine、独立出版、叙事型活动页、艺术展览导览。
- 需要强视觉记忆但仍要保持可读性的内容产品。

**别用**
- 医疗、金融、法律、政务等需要安静可信的长流程。
- 高频数据分析后台；厚墨线与强分镜会增加扫描成本。
- 奢侈、极简建筑、柔和生活方式等要求低声量的品牌。
- 长篇沉浸阅读站点，除非把漫画语言限制在封面、章节头和重点模块。

---

## 4. 颜色

所有组件颜色通过 `var(--ds-*)` 使用。品牌视觉只允许黑、纸白、灰阶网点和一个朱红点色。语义状态色用于功能反馈，不参与主视觉扩展。

### 表面与文字

| Token | 亮色 Light | 暗色 Dark | 用途 |
|---|---|---|---|
| `--ds-bg` | `#f2f1eb` | `#0d0d0d` | 主背景：单行本纸 / 墨黑纸 |
| `--ds-bg-subtle` | `#e8e6de` | `#151515` | 次背景、分组底、网点层托底 |
| `--ds-bg-elevated` | `#fbfaf6` | `#1c1c1c` | 卡片、弹层、纸片 |
| `--ds-bg-sunken` | `#dedcd2` | `#060606` | 输入槽、代码块、凹陷区域 |
| `--ds-fg` | `#141414` | `#f2f0e8` | 主文字、墨线、主图标 |
| `--ds-fg-muted` | `#4a4a48` | `#b2b0a8` | 次要正文 |
| `--ds-fg-subtle` | `#6a6a66` | `#88867e` | 占位、辅助说明 |
| `--ds-fg-on-accent` | `#f5f3ec` | `#1a0805` | 强调色上的通用前景 |
| `--ds-border` | `#cdcbc2` | `#2a2a2a` | 次级分隔线 |
| `--ds-border-strong` | `#141414` | `#f2f0e8` | 3-5px 分镜边、强描边 |

### 品牌与强调

| Token | 亮色 Light | 暗色 Dark | 用途 |
|---|---|---|---|
| `--ds-primary` | `#cf2417` | `#ff4436` | 主按钮、危险、朱红印章、冲击标记 |
| `--ds-primary-hover` | `#b21f13` | `#ff5e52` | hover |
| `--ds-primary-active` | `#971a10` | `#e83a2d` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#1a0805` | 主色块上的文字 |
| `--ds-accent` | `#141414` | `#f2f0e8` | 链接、墨黑按钮、反色重点 |
| `--ds-accent-fg` | `#f5f3ec` | `#0d0d0d` | accent 上的文字 |

**强调梯度**：亮色朱红 `#971a10 -> #b21f13 -> #cf2417`（active -> hover -> default），暗色朱红 `#e83a2d -> #ff5e52 -> #ff4436`。除朱红外不要增加新的品牌高饱和色。

### 语义状态

| 语义 | 主色（亮 / 暗） | -bg（亮 / 暗） | -fg（亮 / 暗） |
|---|---|---|---|
| success | `#2f7d3f` / `#6ccb7a` | `#e2efe2` / `#122b16` | `#1c4a26` / `#b6e6bf` |
| warning | `#8a5a10` / `#e0b25e` | `#f4ecd6` / `#2a2010` | `#563908` / `#f3d79a` |
| danger | `#cf2417` / `#ff4436` | `#f7e2df` / `#2c1310` | `#7e160d` / `#ffb3ab` |
| info | `#2563a8` / `#6fa8e0` | `#dde7f3` / `#0e2236` | `#143e6e` / `#bcd6f2` |

---

## 5. 字体

- `--ds-font-serif`: `"Noto Serif", "Noto Serif CJK SC", "Source Han Serif SC", "Songti SC", serif`。用于 hero、章节标题、拟声词和印章，字重要重，形成墨块感。
- `--ds-font-sans`: `"Inter", -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif`。用于正文、表单、表格、说明文字，保持清晰。
- `--ds-font-mono`: `"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace`。用于分镜编号、按钮、标签、代码、数据和短 caption。

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-text-xs` | 12px | 分镜编号、脚注、标签 |
| `--ds-text-sm` | 14px | 表头、辅助说明 |
| `--ds-text-base` | 16px | 正文 |
| `--ds-text-md` | 19px | 小标题、重点正文 |
| `--ds-text-lg` | 24px | 卡片标题、拟声词芯片 |
| `--ds-text-xl` | 34px | 区块标题 |
| `--ds-text-2xl` | 52px | 页面主标题 |
| `--ds-text-3xl` | 76px | Hero 漫画标题 |

字重：`400 / 600 / 800`。标题与拟声词使用 `800`；正文使用 `400`；重点正文与按钮使用 `600/800`。行高保持 `1.02 / 1.5 / 1.7`，字距全部为 `0`，避免大字挤压成不可读墨块。

---

## 6. 间距与布局

- **比例尺**：4px 基，`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`。
- **节奏**：组内 `space-2~4`，组件之间 `space-5~6`，页面区块 `space-10~12`。
- **容器宽**：主内容 `max-width: 1120px`，长正文行宽 <= 75ch。
- **分镜语言**：用粗黑 gutter 切分内容，可使用少量斜切面板。斜切与集中线必须由父容器 `overflow:hidden` 约束。
- **网点密度**：建议四档 `10% / 20% / 35% / 55%`，通过 CSS `radial-gradient` tile 实现。正文区优先使用 `10%` 或纯色纸面。
- **移动端**：390px 视口不得横向滚动；宽表格内部横滑，整页保持 `overflow-x: clip/hidden` 策略。

---

## 7. 圆角 / 阴影 / 描边

| Token | 值 | 说明 |
|---|---|---|
| `--ds-radius-sm` | `0` | 输入框、按钮、小控件，像裁切纸边 |
| `--ds-radius-md` | `2px` | 面板、图片、下拉层 |
| `--ds-radius-lg` | `4px` | 卡片、桌面 frame |
| `--ds-radius-full` | `999px` | 徽章、开关、圆形印章 |
| `--ds-shadow-sm` | `2px 2px 0 var(--ds-border-strong)` | 小纸片偏移 |
| `--ds-shadow-md` | `4px 4px 0 var(--ds-border-strong)` | 卡片、按钮 hover |
| `--ds-shadow-lg` | `7px 7px 0 var(--ds-border-strong)` | Hero、桌面 frame、重面板 |

描边：核心组件外边使用 `3px` 或 `4px` `--ds-border-strong`；hero/分镜容器可用 `5px`。内部次分隔用 `--ds-border`。不要用柔影、玻璃或 1px 灰线替代墨线。

---

## 8. 动效

- `--ds-dur-fast: 80ms`，按钮 hover / active。
- `--ds-dur-base: 150ms`，拟声词冲击、控件状态。
- `--ds-dur-slow: 280ms`，分镜揭示、主题切换。
- `--ds-ease: cubic-bezier(.2,0,0,1)`，短促、干净、像纸片落位。
- 典型交互：hover `translate(-2px,-2px)` 并强化硬阴影；active 回落并移除阴影。
- 分镜揭示与冲击脉冲必须放在 `@media (prefers-reduced-motion: no-preference)` 中；`reduce` 下关闭 transition 与 animation，不影响信息理解。

---

## 9. 组件规格

- **按钮 Button**：默认高 44px，sm 36px，lg 52px；3px strong 墨线；`shadow-sm`；文字 mono。primary 为朱红，accent 为墨黑/白墨反色。
- **输入框 Input / Textarea / Select**：`bg-sunken`，3px strong 墨线，0 半径，高 44px；focus 显示 `--ds-focus-ring`；placeholder 用 `fg-subtle`。
- **卡片 Card**：`bg-elevated`，3px strong 墨线，4px 半径，`shadow-md`。可在角落加低透明度 screentone，但正文区域保持纯色。
- **分镜 Panel**：外层用强墨线 gutter，允许斜切 `clip-path`。任何斜切、集中线和装饰 SVG 都必须裁切在父容器内。
- **徽章 / 标签 Badge**：mono uppercase，3px 边，胶囊只用于语义标签或短状态。朱红徽章只用于 danger 或核心动作。
- **提示条 Alert**：语义浅底 + 语义前景 + 3px 边 + 内联 SVG。不要只靠颜色表达状态。
- **导航 Nav / Tabs**：顶栏 4px 底边，tab 选中为纸面底 + strong 边 + 朱红底部指示。
- **表格 Table**：表头 mono uppercase；数字 tabular；行分隔用 2px 次边；状态使用圆点、文字和语义色。
- **移动端 dvc17 demo**：共享 iPhone 17 Pro Max frame 不重写；屏内触控目标 >= 44px；竖向漫画条必须无横向溢出。

---

## 10. 可访问性

- 亮/暗主题正文对比按 WCAG AA：正文 >= 4.5:1，大字/粗字/图标 >= 3:1。
- `--ds-fg-subtle` 只用于辅助信息；不要把小字放在 35% 或 55% 网点上。
- 朱红按钮在暗色主题使用深色前景（`#1a0805`）是有意设计，用来保证对比。
- 所有交互控件必须有 `:focus-visible`，使用 `--ds-focus-ring`。
- 触控目标 >= 44px；移动底部导航 >= 48px。
- 不使用 emoji 作为图标；图标统一内联 SVG，并提供必要的 aria label。
- 支持 `prefers-reduced-motion`，关闭动效后仍保留同等信息层级。

---

## 11. Do / Don't

**Do**
- 用 3-5px strong 墨线定义分镜、按钮、卡片和弹层轮廓。
- 把 screentone 当灰阶阴影使用，控制在 10/20/35/55 四档。
- 每屏只放一个主要拟声词、朱红印章或集中线焦点。
- 使用 Noto Serif 重字重做标题和拟声词，Inter 做正文。
- 让长正文落在纯色 `bg-elevated` 或 `bg-subtle` 表面上。
- 用内联 SVG 绘制图标、冲击标记和装饰线。

**Don't**
- 不要增加第二个高声量品牌色。
- 不要把正文直接放在高密度网点或集中线之上。
- 不要把所有卡片都做成斜切；斜切只用于叙事转场或动作面板。
- 不要用柔影、玻璃拟态、渐变光斑削弱墨线语言。
- 不要引用真实漫画、出版社、角色或公司。
- 不要用 emoji、外部字体、CDN 或远程脚本。

---

## 12. 如何接入

1. **引入变量**：
   ```html
   <link rel="stylesheet" href="path/to/48-manga/tokens.css">
   ```

2. **使用变量，不硬编码组件色**：
   ```css
   .btn-primary{
     background: var(--ds-primary);
     color: var(--ds-primary-fg);
     border: 3px solid var(--ds-border-strong);
     border-radius: var(--ds-radius-sm);
     box-shadow: var(--ds-shadow-sm);
     font-family: var(--ds-font-mono);
   }
   ```

3. **切换暗色**：给 `<html>` 设置 `data-theme="dark"`，或在根节点加 `.dark`。

4. **Tailwind 项目**：
   ```js
   module.exports = { presets: [require('path/to/48-manga/tailwind.preset.js')] }
   ```

5. **字体**：使用共享 `../../_fonts/fonts.css` 的本地 Noto Serif、Inter、JetBrains Mono；不引入远程字体或 CDN。
