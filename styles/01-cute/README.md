# Cute · 可爱风设计系统

> 圆润、糖果多巴胺色、俏皮有角色感、温暖治愈。给 C 端、儿童/萌宠、IP、社交、轻应用——让界面像被捏过的软糖一样让人想戳一下。

---

## 1. 一句话气质

软糯草莓奶油色的界面：大圆角、彩色柔影、稍弹的动效，文字用暖墨而非冷黑。一打开就觉得"甜、暖、可爱"，但仍然干净可用、对比度达标。

---

## 2. 设计哲学 / 性格

可爱风继承 Geist 的骨架——**语义分层 + 固定比例尺 + 成对状态色 + 可见焦点环 + 明暗双主题**——但把 Geist 的"极致克制中性灰"换成"克制中的甜":

1. **圆是性格**：所有可交互元素偏大圆角（药丸按钮、圆润卡片），让界面没有尖锐的攻击感。
2. **多巴胺但不刺眼**：主色草莓粉、accent 天蓝，背景奶白；强调色只用于主操作/链接/选择/状态（沿用 Geist 的克制原则），不让整页糊满糖。
3. **暖墨代替纯黑**：文字用 `#4a3b44` 暖墨、暗色用 `#ffeaf2` 粉白，让对比柔和不扎眼。
4. **彩色柔影**：阴影带粉调、无冷灰硬边，元素像浮在奶油上。
5. **稍弹的动效**：hover 轻微放大、按下回弹，给"角色感"，但始终尊重 `prefers-reduced-motion`。

**与 Geist 的关系**：结构/变量名/分层思想全部继承；改的是取值——圆角更大、阴影染粉、字体更圆润、字重更粗、动效带回弹、主色从中性墨换成草莓粉。

---

## 3. 何时用 / 何时别用

**适合**
- C 端消费产品、社交/社区、IP/角色周边、儿童与萌宠、轻工具/小程序、活动营销页。
- 想传达"温暖、友好、好亲近、有人情味"的品牌。

**不适合**
- 金融/政务/企业 B 端等需要严肃权威感的场景（用 enterprise / gov-cn）。
- 高密度数据看板、专业生产力工具（甜色与大圆角会削弱专业感与信息密度）。
- 需要极致中性、内容优先的阅读类长文（用 editorial）。

---

## 4. 颜色

强调色梯度（亮）：`primary #ff6b9d → hover #ff5294 → active #ec3f86`。文字落在主色上用深莓 `#5a1030`（对比 5.05:1，AA 通过），而非白字（白字在浅粉上仅 2.7:1 不达标）。

### 表面与文字

| Token | 亮 | 暗 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#fff7fb` | `#241a22` | 主背景（奶白带粉 / 深莓紫） |
| `--ds-bg-subtle` | `#ffeef6` | `#2e2029` | 次背景，区块/分组底 |
| `--ds-bg-elevated` | `#ffffff` | `#382835` | 卡片/弹层 |
| `--ds-bg-sunken` | `#ffe2ef` | `#1c141a` | 输入槽/代码块（凹陷） |
| `--ds-fg` | `#4a3b44` | `#ffeaf2` | 主文字（暖墨 / 粉白） |
| `--ds-fg-muted` | `#7a5d6b` | `#d9aebf` | 次要文字 |
| `--ds-fg-subtle` | `#86697a` | `#b890a0` | 占位/弱文字（≥4.5:1） |
| `--ds-fg-on-accent` | `#5a1030` | `#3a0a1c` | 落在强调色上的文字 |
| `--ds-border` | `#ffd4e5` | `#4d3744` | 常规糖粉描边 |
| `--ds-border-strong` | `#ffabcb` | `#6b4a59` | 强描边/分隔 |

### 品牌与强调

| Token | 亮 | 暗 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#ff6b9d` | `#ff8fb5` | 主操作色（按钮/选中） |
| `--ds-primary-hover` | `#ff5294` | `#ffa3c3` | hover |
| `--ds-primary-active` | `#ec3f86` | `#ff77a6` | active/pressed |
| `--ds-primary-fg` | `#5a1030` | `#3a0a1c` | 主操作上的文字 |
| `--ds-accent` | `#5cc8ff` | `#7fd6ff` | 链接/次强调（天蓝） |
| `--ds-accent-fg` | `#0a3a5a` | `#06243a` | accent 上的文字 |

### 语义状态（软糖色：主色 + 浅底 `-bg` + 底上深字 `-fg`）

| 状态 | 主色（亮/暗） | 浅底 `-bg` | 底上文字 `-fg` |
|---|---|---|---|
| success 薄荷 | `#3ecf8e` / `#5fe0a6` | `#e3fbef` / `#0e3a28` | `#0a5e3c` / `#c8ffe6` |
| warning 蜜橙 | `#ffb648` / `#ffc874` | `#fff3dd` / `#3a2700` | `#7a4a00` / `#ffeccb` |
| danger 西瓜红 | `#ff5d6c` / `#ff8090` | `#ffe6e9` / `#3d1219` | `#7a0e1c` / `#ffdfe3` |
| info 天蓝 | `#5cc8ff` / `#7fd6ff` | `#e6f6ff` / `#0a2c44` | `#0a5a8a` / `#d8f1ff` |

> 浅底 + 深字组合均已校验 AA（success 7.2:1、warning 6.8:1、danger 9.3:1、info 6.7:1）。

---

## 5. 字体

- **字族（sans）**：`"Quicksand","Baloo 2","Varela Round",-apple-system,"PingFang SC",...`。圆润无衬线，几何字形带圆角终端，天然有萌感。仅作 font-family 回退声明，**preview 不外链字体**，环境无对应字体时优雅回退到 system（PingFang SC / 微软雅黑同样圆润，中文适配良好）。
- **字重**：可偏粗——normal **500** / medium **600** / bold **700**。可爱风用 500 起步避免太细显单薄。
- **字距**：`tight 0` / `normal 0.01em`（略正，给圆字"喘气感"，不收紧）。
- **比例尺**：xs 12 · sm 13 · base 14 · md 16 · lg 20 · xl 24 · 2xl 32 · 3xl 48（px）。
- **行高**：tight 1.25 / normal 1.55 / relaxed 1.75（比 Geist 略松，配合圆字更透气）。
- **中文适配**：回退链含 PingFang SC / 微软雅黑；中文标题建议 600–700 字重以匹配圆润气质。

---

## 6. 间距与布局

- **比例尺（4px 基）**：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96。
- **节奏**：组内 8px、组间 16–20px、区块间 32–40px（沿用 Geist 节奏，间距略放松配合大圆角）。
- **容器宽**：内容 ≤ 1200px；卡片栅格建议 12 列、gutter 16–24px。
- **断点**（继承 Geist）：sm 401 · md 601 · lg 961 · xl 1200 · 2xl 1400。
- 大圆角元素之间留白要够，否则圆角互相"咬"显拥挤。

### 响应式断点（preview.html 实现）

可爱风的栅格全部用 `auto-fill / auto-fit minmax()` 自适应，并在两档断点收敛：

| 断点 | 行为 |
|---|---|
| `≤ 960px`（平板） | 容器内边距收窄到 `--ds-space-4`，给大圆角卡片留呼吸位。 |
| `≤ 640px`（手机） | 多列栅格统一收为 **单列**（`.grid → 1fr`，色板用更小 `minmax(132px)`）；顶栏导航 `.nav` 折叠隐藏、改显 **汉堡按钮 `.nav-toggle`**；英雄标题从 `3xl` 降到 `2xl`；步骤条由横排转**竖排**；模态操作区允许换行。 |

- **移动布局**：见 preview「移动端 Mobile」块——约 375px 手机框内含 顶栏（汉堡 + 标题 + 头像）/ 主卡片（全宽主按钮）/ 列表（行式条目 + 徽章）。手机端按钮多用 `width:100%` 占满，命中区天然 ≥ 44px。
- **原则**：先单列堆叠保证可读，再按宽度逐档展开为多列；导航优先折叠而非横向滚动；卡片间距随屏缩小但圆角不缩（圆角是性格）。

---

## 7. 圆角 / 阴影 / 描边

- **圆角**（偏大，药丸感强）：`sm 10px` 日常控件/输入框 · `md 18px` 卡片/菜单 · `lg 28px` 大表面/对话框 · `full 9999px` 按钮药丸/头像/徽章。
- **阴影**（柔和带粉调，禁用冷灰硬阴影）：
  - `sm` `0 2px 6px -2px rgba(255,107,157,.20)`
  - `md` `0 6px 16px -4px rgba(255,107,157,.25), 0 2px 6px -2px rgba(255,107,157,.18)`
  - `lg` `0 14px 32px -8px rgba(255,107,157,.30), 0 6px 14px -6px rgba(255,107,157,.22)`
  - 暗色用深底沉影 + 极淡粉色描边光晕。
- **描边**：糖粉色 `#ffd4e5`（常规）/ `#ffabcb`（强）。卡片可用 1–2px 彩色描边强化"贴纸"感，或纯柔影二选一。

---

## 8. 动效

- **时长**：fast 200ms / base 260ms / slow 320ms（比 Geist 略长，给回弹空间）。
- **曲线**：`--ds-ease: cubic-bezier(.34,1.56,.64,1)`——轻微过冲回弹，是"可爱感"的关键。
- **典型过渡**：
  - 按钮/卡片 hover：`transform: scale(1.03)` + 抬升阴影。
  - 按钮 active：回弹到 `scale(0.97)` 再弹回。
  - 输入框 focus：焦点环淡入 + 边框转主色。
- **`prefers-reduced-motion`**：必须在该媒体查询下关闭缩放/位移与回弹，仅保留必要的颜色/透明度过渡（见 preview.html 实现）。

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition-duration: .01ms !important; }
  .btn:hover, .card:hover { transform: none !important; }
}
```

---

## 9. 组件规格

### 按钮（高度 sm 32 / md 40 / lg 48；圆角 `full` 药丸；字重 600）
| 变体 | 底 | 文字 | 边 | hover | active | disabled |
|---|---|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | 无 | 底→`primary-hover` + scale1.03 | 底→`primary-active` + scale0.97 | 50% 透明、不缩放 |
| secondary | `--ds-bg-elevated` | `--ds-fg` | 1px `--ds-border-strong` | 底→`--ds-bg-subtle` | 同上 | 同上 |
| tertiary | 透明 | `--ds-fg-muted` | 无 | 底→`--ds-bg-subtle` | 底加深 | 同上 |
| danger | `--ds-danger` | `#fff` | 无 | 略加深 + scale1.03 | scale0.97 | 同上 |

> primary 可带轻微"下沉立体边"：底部 2px 暗一档内阴影（按下时消除）模拟糖果按钮。

### 输入框（高 40，圆角 `sm` 10px）
- 底 `--ds-bg-elevated`，边 1px `--ds-border`，文字 `--ds-fg`，占位 `--ds-fg-subtle`。
- focus：边框 → `--ds-primary`，外加 `--ds-focus-ring`。
- 错误态：边框 → `--ds-danger`，下方 12px `--ds-danger-fg` 提示文字。
- textarea / select 同规格；checkbox / radio / switch 选中态用 `--ds-primary`，圆角偏大（radio/switch 用 full）。

### 卡片（圆角 `md` 18px）
- 底 `--ds-bg-elevated`，柔影 `--ds-shadow-md`，可选 1px `--ds-border`。
- hover（可交互卡）：scale1.03 + `--ds-shadow-lg`。
- 内边距 20–24px，标题 / 正文 / 操作三段式。

### 徽章 / 标签（圆角 `full`，字号 xs–sm，字重 600）
- 每语义色：底 `<color>-bg`、文字 `<color>-fg`，或实色底 `<color>` + 白/深字。圆点药丸造型。

### 提示条 Alert（圆角 `md`）
- 四态：底 `<color>-bg`、文字 `<color>-fg`、**1px `<color>` 全描边** + 前置语义内联 SVG 图标（对勾 / 感叹 / 叉 / i），不用侧边粗色条。

### 导航
- 顶栏：底 `--ds-bg`/`--ds-bg-elevated`，高 56–64，底边 1px `--ds-border`。≤640px 时主导航折叠为汉堡按钮 `.nav-toggle`（药丸方钮，3 条横线）。
- Tab：选中项文字 `--ds-primary`、下方 3px 药丸下划线；侧边项选中态底 `--ds-bg-subtle` + 文字 `--ds-primary`。

### 模态框 Modal（圆角 `lg` 28px）
- 遮罩：`color-mix(in srgb, --ds-fg 28%, transparent)` 半透暖墨，柔和不死黑。
- 弹层：底 `--ds-bg-elevated`、1px `--ds-border`、`--ds-shadow-lg`，内边距 24px，最大宽 ~420px 居中。
- 关闭按钮：右上 32×32 药丸（`full`），底 `--ds-bg-subtle`；hover → 旋转 90° + 加深底；`focus-visible` 走 `--ds-focus-ring`。
- 结构：标题（lg/700）+ 说明（sm/muted）+ 右对齐操作区（tertiary + primary）。

### 下拉菜单 Dropdown（圆角 `md` 18px）
- 容器：底 `--ds-bg-elevated`、1px `--ds-border`、`--ds-shadow-lg`，内边距 8px。
- 分组标题 `.mlabel`：xs、`--ds-fg-subtle`、大写字距。
- 项 `.mitem`：圆角 `sm`，前置内联 SVG 图标；**hover** 底 `--ds-bg-subtle`；**选中** `.is-active` 底 subtle + 文字 `--ds-primary-active` + 行尾内联 SVG 对勾；**危险项** `.danger` 文字 `--ds-danger-fg`、hover 底 `--ds-danger-bg`；分隔线 `.msep` 1px `--ds-border`。

### 工具提示 Tooltip
- 气泡：深底 `--ds-fg` + 反相文字 `--ds-bg`，xs/600，圆角 `sm`，`--ds-shadow-md`，带 6px 三角尖角指向触发元素。
- 触发：实际由 hover / focus 弹出（preview 常驻展示外观），出现走 `--ds-dur-fast` + `--ds-ease`，reduced-motion 下仅淡入。

### 分页 Pagination（药丸 `full`，单元 40px）
- 页码 `.pg`：底 `--ds-bg-elevated`、1px `--ds-border`；**hover** 底 subtle + `scale(1.06)`；**当前页** `.is-current` 底 `--ds-primary` + 文字 `--ds-primary-fg` + 轻下沉内阴影；**禁用**（首/末箭头）45% 透明、不缩放；省略号 `.pg-gap` 用 `--ds-fg-subtle`。命中区 ≥ 40px。

### Toast 通知（圆角 `md` 18px）
- 浮层卡：底 `--ds-bg-elevated`、1px `--ds-border`、`--ds-shadow-lg`。
- 结构：圆形语义底 + 内联 SVG 图标（默认 primary / `t-suc` / `t-war` / `t-dan`）+ 标题（sm/700）+ 描述（xs/muted）+ 右侧关闭键 `.tx`（内联 SVG 叉，hover 转 `--ds-fg`）。建议自动消失 3–4s，reduced-motion 下取消滑入。

### 步骤条 Stepper
- 节点 `.sdot` 36px 圆：**已完成** `.done` 实心 `--ds-primary` + `--ds-primary-fg` + 连接线染主色；**当前** `.current` 描边 `--ds-primary` + 4px `--ds-bg-subtle` 光晕 + 标签加粗主色；**未开始** 描边 `--ds-border-strong` + 文字 muted。连接线 `.sline` 3px 圆头。≤640px 转竖排（隐藏横线）。

### 面包屑 Breadcrumb
- 链接：药丸 `full`、文字 `--ds-fg-muted`，hover 底 `--ds-bg-subtle` + 文字 `--ds-fg`。
- 分隔符 `›` 用 `--ds-fg-subtle`；当前页 `.here` 文字 `--ds-primary-active`/700 + 底 `--ds-bg-subtle` 药丸，标 `aria-current="page"`。

### 触控目标
- 所有可点击元素命中区 ≥ 44×44px（小按钮用内边距补足）。

---

## 10. 可访问性

- **对比度**：正文 ≥ 4.5:1、大字/UI ≥ 3:1，全部色对已校验 AA（fg/bg 10:1、primary-fg/primary 5.05:1、accent-fg/accent 6.3:1、各状态浅底深字 6.7–9.3:1）。白字勿直接放浅粉主色上（仅 2.7:1）——用 `--ds-primary-fg` 深莓字。
- **焦点**：键盘可达，统一 `--ds-focus-ring`（底环 + 主色环双层 box-shadow），可见不被裁切。
- **触控目标** ≥ 44×44px。
- **可减弱动效**：`prefers-reduced-motion: reduce` 下关闭缩放/位移/回弹。
- **不靠颜色单独传义**：状态除颜色外辅以图标/文案。

---

## 11. Do / Don't

**Do**
- 用大圆角 + 彩色柔影传达"软糯"，元素间留足白。
- 文字用暖墨 / 粉白，强调色克制只点主操作与状态。
- 按钮文字用 `--ds-primary-fg` 深莓字保证 AA。
- 动效带轻微回弹，但提供 reduced-motion 兜底。
- 装饰小圆点 / 星星用 CSS 画；图标统一用内联 SVG（圆头圆角描边）。

**Don't**
- 别把白字直接放浅粉主色按钮上（对比不足）。
- 别用冷灰硬阴影（破坏奶油质感）。
- 别整页糊满高饱和糖色——会刺眼又掉档次。
- 别堆 emoji 当图标（统一改内联 SVG）。
- 别把圆角缩到很小（会失去可爱性格，变成普通 UI）。
- 别用纯黑 `#000` 文字（太硬，用暖墨）。

---

## 12. 如何接入

```html
<!-- 1) 引入变量（亮暗主题随 data-theme / .dark 自动切换） -->
<link rel="stylesheet" href="./styles/01-cute/tokens.css" />
```

```css
/* 2) 组件里只用变量，不硬编码颜色 */
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-full);
  box-shadow: var(--ds-shadow-sm);
  font-family: var(--ds-font-sans);
  font-weight: var(--ds-weight-medium);
  transition: transform var(--ds-dur-fast) var(--ds-ease),
              background var(--ds-dur-fast) var(--ds-ease);
}
.btn-primary:hover  { background: var(--ds-primary-hover); transform: scale(1.03); }
.btn-primary:active { background: var(--ds-primary-active); transform: scale(0.97); }
.btn-primary:focus-visible { box-shadow: var(--ds-focus-ring); outline: none; }
```

```js
// 3) 切换暗色
document.documentElement.dataset.theme = 'dark'; // 或移除回到亮色
// 也兼容 document.documentElement.classList.toggle('dark')
```

**Tailwind 项目**：在 `tailwind.config.js` 引入预设，并在入口 import `tokens.css`：

```js
module.exports = { presets: [require('./styles/01-cute/tailwind.preset.js')] };
// className 即可用：bg-primary text-primary-fg rounded-full shadow-md font-sans
```
