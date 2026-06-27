# Bauhaus 包豪斯风 · 设计系统 Kit

> 暖画布、黑色 keyline、蓝 / 红 / 黄基础几何。给设计学校、印刷工坊、剧场节、实验出版与视觉教育产品——理性、构成、功能优先。
> 示例实体为虚构的德绍设计学校与印刷工坊 **Formwerk Dessau**，其网格与图形系统名为 **FORMKREIS**。

---

## 1. 一句话气质

Bauhaus Kit 是一套 1920s constructivist 风格的界面语言：蓝色方块、红色圆形、黄色三角、粗黑 keyline、暖色纸面与非对称网格共同组织信息。
它不是 Swiss 的单红克制，也不是 Brutalism 的偏移硬阴影；它用多主色基础形、平面几何与功能主义排版建立秩序。

适合：设计教育、印刷工坊、剧场节视觉系统、作品集、实验出版、展演导览、文化机构活动页、需要强视觉识别但仍要求清晰可用的产品界面。

---

## 2. 设计哲学 / 性格

1. **基础形即系统**：圆、方、三角不是装饰贴纸，而是网格里的结构标记、分区信号与节奏控制。
2. **功能主义优先**：按钮、表单、表格先保证可读、可点、可扫；视觉表现服务任务，不遮挡任务。
3. **三色构成**：蓝是主操作，红是强调 / 危险，黄仅作装饰和几何高光，不直接作为正文色。
4. **黑色 keyline 建深度**：无柔和投影、无玻璃、无渐变气氛；层级来自 2-3px 硬描边、分隔线和布局轴线。
5. **非对称但可解释**：版面可以偏置、交错、斜切，但必须落在清楚的栏栅和模数上。

**与 Geist 基底的关系**：
- **继承**：固定 `--ds-*` 语义契约、亮暗双主题、状态色成对、焦点环、4px spacing、字体比例尺、Tailwind preset 结构。
- **改动**：主色改为 Bauhaus 蓝，accent / danger 使用红，加入装饰黄；圆角全 0；shadow 退化为 keyline ring；字族改为 Inter + JetBrains Mono；界面加入基础几何、强边框、非对称构成。

---

## 3. 何时用 / 何时别用

**适合用**
- 设计学校、创意工坊、印刷 / 字体 / 海报相关项目
- 剧场节、展演活动、文化教育专题、艺术课程报名
- 需要鲜明视觉系统但仍保持清晰结构的官网、工具台、展陈界面
- 需要区分模块、课程、状态、版块的内容密集页面

**不建议用**
- 严肃金融、政府办事、医疗后台等需要低情绪和制度感的场景
- 奢侈品、婚礼、自然疗愈等需要柔和材质 / 细腻摄影的品牌
- 儿童娱乐或夸张派对风活动页（不要把 Bauhaus 做成 Memphis）
- 已经有大量品牌渐变、玻璃拟态或圆角柔影的成熟产品

---

## 4. 颜色

颜色一律走语义 token，组件内不硬编码 hex。亮暗两套自动随 `[data-theme="dark"]` / `.dark` 切换。黄色 `#f5c518` 是装饰性构成色：用于三角、色块、图表底、几何提示，不作为正文文字色。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#f4f1e8` | `#141414` | 主背景：暖画布 / constructivist night |
| `--ds-bg-subtle` | `#ebe6d8` | `#1c1c1c` | 区块底、分组背景 |
| `--ds-bg-elevated` | `#fffdf8` | `#202020` | 卡片、顶栏、弹层 |
| `--ds-bg-sunken` | `#e3ddca` | `#0c0c0c` | 输入槽、代码块、凹陷面 |
| `--ds-fg` | `#1a1a1a` | `#f0ede4` | 主文字 |
| `--ds-fg-muted` | `#4a4a4a` | `#a8a8a8` | 次要文字、说明 |
| `--ds-fg-subtle` | `#6e6e6e` | `#888888` | 占位、弱文字 |
| `--ds-fg-on-accent` | `#ffffff` | `#ffffff` | 深色 / 强强调背景上的文字 |
| `--ds-border` | `#ddd6c4` | `#2e2e2e` | 常规描边 |
| `--ds-border-strong` | `#1a1a1a` | `#f0ede4` | 粗 keyline、结构线、强分隔 |

### 品牌与强调

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#1b3fae` | `#3f63d6` | 主操作、选中、蓝色方块 |
| `--ds-primary-hover` | `#163590` | `#4e72e2` | primary hover |
| `--ds-primary-active` | `#112a73` | `#3354c0` | primary active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#ffffff` | primary 上的文字 |
| `--ds-accent` | `#c1272d` | `#e8635f` | 红色圆形、重点、链接 / 次强调 |
| `--ds-accent-fg` | `#ffffff` | `#160606` | accent / danger 实底上的文字 |

**强调梯度**：
- Blue primary：`#e3e8f7` → `#1b3fae` → `#112a73`
- Red accent：`#f8e2e1` → `#c1272d` → `#5a1010`
- Decorative yellow：`#f5c518` 只做形状 / 高光，避免作为正文色。

### 语义状态

| 角色 | 主色（亮 / 暗） | 浅底（亮 / 暗） | 底上文字（亮 / 暗） |
|---|---|---|---|
| Success | `#1f7a3d` / `#4cc26a` | `#e3f1e7` / `#0c2614` | `#0a3a1c` / `#c9f5d4` |
| Warning | `#9a6a00` / `#f5c518` | `#fbeecb` / `#241c00` | `#473006` / `#fff0bf` |
| Danger | `#c1272d` / `#ef6b66` | `#f8e2e1` / `#2a0e0d` | `#5a1010` / `#ffd4d1` |
| Info | `#1b3fae` / `#5a82ef` | `#e3e8f7` / `#0e1838` | `#0e2057` / `#d6e0ff` |

---

## 5. 字体

- **Sans（UI / 正文 / 标题）**：`"Inter", "Helvetica Neue", Arial, "PingFang SC", sans-serif`。Inter 的几何感、清晰数字和高 x-height 适合 Bauhaus 的功能主义排版。
- **Serif（少用）**：`"Source Serif 4", Georgia, "Songti SC", "SimSun", serif`，仅作为长文或引用备选。
- **Mono（编号 / 标签 / 数据）**：`"JetBrains Mono", monospace`。用于 `01 / 02 / 03`、课程编号、样本编号和表格数字。

**比例尺**：`xs 12 · sm 13 · base 14 · md 16 · lg 20 · xl 24 · 2xl 32 · 3xl 48`（px）。

**字重**：`400` 正文 / `500` 辅助强调 / `600` 标题基准；预览中的大 headline 可在组件层用 `700–800`。

**字距**：沿用 token：`--ds-tracking-tight: -0.02em`、`--ds-tracking-normal: 0`。品牌 wordmark、eyebrow、按钮标签可在组件层使用宽跟踪大写（`.08em–.16em`）。

**中文适配**：中文正文保持自然字距；中英文混排时让拉丁大写标签承担几何节奏，中文负责信息清晰。

---

## 6. 间距与布局

- **比例尺**（4px 基）：`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`px，对应 `--ds-space-1 ~ 12`。
- **节奏**：控件内 8–16px，卡片内 24px，区块间 48–96px；用粗分隔线而不是阴影制造层级。
- **容器宽**：主内容建议 `max-width: 1100px`；长文 `680–760px`。
- **栅格**：12 列为基础，可用 5/7、4/8、3/9 等非对称分栏。偏置必须有结构理由。
- **几何系统**：蓝方块代表主行动 / 模块，红圆代表注意 / 当前，黄三角代表装饰焦点或图表底，不直接承载正文。
- **断点**：小屏收为单列；表格在 `≤680px` 使用横向滚动规则；移动 demo 使用外部 `_assets/device.css` 的 `.dvc17`。

---

## 7. 圆角 / 阴影 / 描边

**圆角**

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `0px` | 按钮、输入、徽章 |
| `--ds-radius-md` | `0px` | 卡片、菜单、表格框 |
| `--ds-radius-lg` | `0px` | 大表面、modal、hero frame |
| `--ds-radius-full` | `9999px` | 圆形几何、头像、开关圆点 |

**阴影 / 深度**

| Token | 值 | 用途 |
|---|---|---|
| `--ds-shadow-sm` | `0 0 0 1px var(--ds-border)` | 常规 keyline |
| `--ds-shadow-md` | `0 0 0 1px var(--ds-border)` | 下拉 / 小浮层 |
| `--ds-shadow-lg` | `0 0 0 2px var(--ds-border-strong)` | hero、modal、强框 |

描边是本风格的骨架：常规组件 1–2px，关键区块 2–3px，黑 / 白强线随主题切换。不要加入柔和 drop-shadow 或偏移硬阴影；那会变成 brutalism。

---

## 8. 动效

- **时长**：`fast 150ms` / `base 200ms` / `slow 250ms`，沿用 Swiss 的功能性节奏。
- **曲线**：`cubic-bezier(.22,.61,.36,1)`，干净的 ease-out。
- **典型过渡**：按钮颜色、边框色、选中条移动、modal 轻微入场。避免弹跳、漂浮、过度缩放。
- **几何动效**：形状可做切换 / 旋转 / 位置变化，但要短促、机械、可解释。
- **Reduced motion**：必须尊重 `prefers-reduced-motion: reduce`，关闭非必要位移和缩放。

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

---

## 9. 组件规格

### 按钮 Button

| 变体 | 底 | 文字 | 边框 | 用途 |
|---|---|---|---|---|
| Primary | `--ds-primary` | `--ds-primary-fg` | 2px transparent | 主操作，蓝色方块语义 |
| Secondary | `--ds-bg` | `--ds-fg` | 2px `--ds-border-strong` | 次操作 |
| Tertiary | transparent | `--ds-fg-muted` | transparent | 工具栏 / 弱操作 |
| Danger | `--ds-danger` | `--ds-accent-fg` | transparent | 危险操作 |

尺寸：sm `32px` / md `40px` / lg `48px`。全部方角、宽跟踪 uppercase、focus 使用 `--ds-focus-ring`。

### 输入框 Input / Textarea / Select

高 40px，`2px --ds-border-strong`，底 `--ds-bg`，文字 `--ds-fg`，placeholder `--ds-fg-subtle`。Focus 转 `--ds-primary` + `--ds-focus-ring`；error 边框 `--ds-danger`。

### 卡片 Card

底 `--ds-bg-elevated`，2px 强描边，内边距 24px，无柔影。可点击卡 hover 只改变边框 / keyline，不做浮起投影。

### 徽章 Badge

方角、小写或 uppercase 均可；主徽章用蓝底白字，语义徽章用 `*-bg` + `*-fg`。不要用黄色徽章承载小字。

### 提示条 Alert

浅底 + 语义文字 + 2px 语义边框 + 内联 SVG 图标。状态不能只靠颜色表达，必须有标题与文本。

### 导航 Navigation

顶栏高 56–64px，底 `--ds-bg-elevated`，3px 强底线。当前项用蓝或红色条标记；wordmark 用宽跟踪大写。

### 表格 Table

表头 `--ds-bg-subtle`，行分隔 `--ds-border`，数字列 `font-mono + tabular-nums + right align`。小屏横滑，不压缩到不可读。

### 叠层组件 Overlay

Dropdown / Modal / Toast 使用 `--ds-bg-elevated` + 强 keyline。Modal 最大宽 440px，进入动效短促；Toast 左侧语义图标。

---

## 10. 可访问性

- **对比度**：亮暗双主题按 WCAG AA 设计，正文 ≥ 4.5:1，大字 / 图标 ≥ 3:1。
- **Primary 按钮**：`#1b3fae` + 白字、暗色 `#3f63d6` + 白字均满足 AA。
- **Accent / Danger 实底**：亮色红底用白字；暗色红底用 `#160606`，避免浅红配白字失败。
- **Muted / Subtle**：`--ds-fg-muted`、`--ds-fg-subtle` 在主背景上保持正文级可读。
- **黄色限制**：`#f5c518` 只作为形状 / 背景 / 图表装饰；文本放在黄色上时使用 `--ds-fg` 且字号和面积足够。
- **焦点**：所有可聚焦控件使用 `var(--ds-focus-ring)`，不靠颜色单独传达。
- **触控目标**：移动端按钮、icon button、tab bar 项建议 ≥44px。
- **可减弱动效**：遵守 `prefers-reduced-motion`。

---

## 11. Do / Don't

**Do**
- 让圆、方、三角对应信息结构，不要随意撒形状。
- 用 2–3px 黑色 keyline 建立层级和构成轴线。
- 保持暖画布 + 蓝 / 红 / 黄三色的明确分工。
- 使用宽跟踪 uppercase wordmark、标签和按钮，正文保持清晰。
- 保持非对称网格；偏置、斜线和色块必须有对齐关系。
- 在暗色主题中保留 constructivist night 的强对比。

**Don't**
- 不要把黄色当正文色，也不要在饱和黄 / 红上放低对比文字。
- 不要加入 Swiss 式单红极简，Bauhaus 必须有多主色基础几何。
- 不要滑向 Memphis：避免随意波浪、彩色碎片、无意义图案。
- 不要使用 Brutalism 的偏移硬阴影；本风格是平面 keyline。
- 不要圆角柔影、玻璃、渐变光斑或装饰性 bokeh。
- 不要删除或改名任何 `--ds-*` token。

---

## 12. 如何接入

**1) 引入 tokens.css**

```html
<link rel="stylesheet" href="./styles/23-bauhaus/tokens.css" />
```

```js
import "./styles/23-bauhaus/tokens.css";
```

**2) 在样式里用变量**

```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  box-shadow: var(--ds-shadow-sm);
  height: 40px;
  padding: 0 var(--ds-space-4);
  font: var(--ds-weight-bold) var(--ds-text-base) / 1 var(--ds-font-sans);
}
.btn-primary:hover { background: var(--ds-primary-hover); }
.btn-primary:focus-visible { outline: none; box-shadow: var(--ds-focus-ring); }
```

**3) 切换暗色主题**

```js
document.documentElement.dataset.theme = "dark";
document.documentElement.dataset.theme = "";
document.documentElement.classList.toggle("dark");
```

**4) Tailwind 项目引 preset**

```js
module.exports = {
  presets: [require("./styles/23-bauhaus/tailwind.preset.js")],
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
};
```

仍需在入口引入 `tokens.css` 提供变量。之后即可使用 `bg-bg`, `bg-bg-elevated`, `text-fg`, `border-border-strong`, `bg-primary`, `text-primary-fg`, `shadow-lg` 等映射。

---

*Bauhaus Kit · 示例实体 Formwerk Dessau / 几何系统 FORMKREIS · 固定变量契约见 `_base/KIT-TEMPLATE.md`*
