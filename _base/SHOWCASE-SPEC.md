# Showcase 规范 v2（preview.html 富化标准）— 所有 Kit 统一执行

> 目标：把 preview 从"色板 + 组件清单"升级为**有图、有布局、信息饱满、专业正式**的作品级展示页。
> 红线不变：`--ds-*` 契约不改名、WCAG AA、保留 fonts.css、内联 SVG 图标（零 emoji）、保留各风格身份特征。
> **新增红线：除 `../../_fonts/fonts.css` 与 `../../_assets/**` 本地素材外，仍不引任何外网资源。**

## 一、共享素材库（直接引用，路径相对每个 kit 都是 `../../_assets/...`）

```
_assets/photos/   workspace city mountain ocean forest coffee desk street food travel tech architecture
                  hero-studio hero-summit hero-gallery   portrait1 portrait2   square1 square2 square3   (.jpg)
_assets/avatars/  a1 a5 a8 a12 a15 a23 a33 a47 (.jpg, 256²)
_assets/gen/      <style>-hero.jpg  （各风格专属美术图，见下表）
                  product-shoe product-watch food-bowl abstract-wave (.jpg, 通用)
```

**各风格 hero 对应**（`_assets/gen/<x>-hero.jpg`）：cute / pixel / enterprise / bside / gov / darktech / editorial / neumorph / glass / guochao / luxury / brutalism / cyberpunk / japanese / material / clay。
项目 Kit 用其基底风格的 hero（如 hahatool=enterprise-hero、hahaagent=darktech-hero、hahamail=bside-hero …），或按需用通用图（product/food/abstract）。

> 若某素材文件暂缺，用同目录任一现有图替代，**不要**写外网 URL。图片一律 `loading="lazy"` + 有意义 `alt`。

## 二、preview.html 必须新增的区块（加在现有色板/字体/组件之后或穿插）

### 1) Hero 首屏（顶部，**消灭大留白**）
整页顶部放一个**有图的 hero**：风格 hero 图作背景或分栏图 + 标题/副标题/CTA 按钮 + 关键信息。占满首屏宽度，信息饱满。

### 2) 图片用法 Image Usage（重点，演示"图片如何应用"）
至少覆盖：
- **宽高比框**：16:9 / 4:3 / 1:1 / 3:4，统一用 `aspect-ratio` + `object-fit:cover`；圆角按本风格。
- **媒体卡 Media Card**：图在上/左 + 标题正文操作（≥3 张成网格）。
- **图片网格 / 画廊**：masonry 或等高网格（≥6 图）。
- **图文混排**：大图 + 文字段落并排（编辑/产品介绍感）。
- **图上叠字 Overlay**：图 + 渐变 scrim + 标题（保证文字 AA）。
- **头像用法**：尺寸阶（24/32/40/48）、头像组(堆叠 avatar-stack)、用户行（头像+名+签名）。
- **背景大图区**：full-bleed 背景图 + 半透明遮罩 + 内容。
- 每种**图片圆角/边框/阴影处理要符合本风格**（见第四节）。

### 3) 图标用法 Icon Usage（演示"图标如何用"）
- **图标集**：把本 kit 的内联 SVG 图标排成网格展示（≥12 个，带名）。
- **尺寸阶**：16 / 20 / 24 / 32，基线对齐。
- **线性 vs 实心**、**单色 vs 双色**对比。
- **在场景里**：图标按钮(仅图标，有 aria-label)、按钮内前/后置图标、输入框前/后置图标、列表项前导图标、状态图标(语义色)、带数字的徽标图标。

### 4) 桌面端多布局 Desktop Layouts（≥2 个完整小样）
从以下挑 **2–3 个**，用本风格 token + 真实图片做成**可信的缩略界面**（不是占位块）：
- **应用外壳/仪表盘**：侧边导航 + 顶栏 + 内容区（KPI 卡 + 图表占位 + 表格）。
- **落地页/营销**：hero + 特性三栏(带图标) + 图文 + 价格/CTA。
- **列表-详情**：左列表(带缩略图) + 右详情(大图 + 元信息 + 正文)。
- **媒体/电商**：商品网格(配图+价格+按钮) 或 内容流。
每个布局放进一个带浏览器 chrome 的 frame（圆点 + 地址栏），标注布局名。

### 5) 移动端多布局 Mobile Layouts（≥2 个 ~390px 手机框）
从以下挑 **2–3 个**：
- **App 首页**：顶栏 + 卡片流/feed + 底部标签栏(图标)。
- **详情/个人页**：大图 header + 信息 + 操作。
- **列表/收件箱**：带头像或缩略图的列表行。
手机框要有听筒/状态栏意象；内容真实饱满。

## 三、正式感与"填白" Do

- 用**栅格与分栏**组织（12 栏意识），区块之间节奏分明但不空旷；每屏信息密度饱满。
- 文案写**真实可信**的内容（产品名/指标/句子），不要 "Lorem"、不要"示例示例"。
- 统一图片宽高比与圆角；统一图标线宽与尺寸；统一卡片间距。
- 章节用一致的标题样式（小标题 + 简短英文/说明），不堆装饰。
- 数字用 `tabular-nums`；标题字距 ≥ -0.04em；语义 `--ds-z-*`。

## 四、各风格的图片/图标处理（保持身份，差异化）

- 像素：图片 `image-rendering:pixelated` + 硬边 2–3px + 硬实心偏移阴影；图标方块化。
- 新拟物：图片放进 inset 凹槽或凸起卡，大圆角柔影；图标轻浮雕。
- 玻璃拟态：图片上叠 `backdrop-filter:blur` 玻璃卡；半透明描边。
- 粗野主义：图片 grayscale/高对比 + 粗黑边 + 无圆角 + 硬投影；图标粗线。
- 赛博朋克：图片叠霓虹渐变/扫描线 + 青粉描边发光；图标霓虹。
- 奢侈高端：图片 full-bleed 优雅 + 细金描边 + 大留白克制（此风格留白是高级感，别填太满）。
- 国潮/新中式：图片配工笔/水墨边框、朱红/靛蓝点缀、留白讲究。
- 日系极简：自然光照片、米白底、细边、克制（同样适度留白）。
- 可爱：圆角大 + 贴纸描边 + 柔彩影；图标圆头。
- 企业/B端/Material/editorial/政府：规整框、统一圆角、克制阴影、专业排布。

> 例外：奢侈、日系、editorial 三者的"留白"是风格语言，按其气质适度即可，不必塞满。

## 五、自检

1. preview 顶部有 hero 图，**首屏无大片空白**；图片/头像均来自 `_assets/`，`loading=lazy`+`alt`。
2. 含【图片用法】【图标用法】【桌面布局 ≥2】【移动布局 ≥2】四大新区块。
3. 仅 `fonts.css` + `_assets/**` 为本地引用，**无外网链接**；无 emoji；`--ds-*` 未改名；AA 达标；亮暗(或多主题)正常。
4. 标签闭合配平。
