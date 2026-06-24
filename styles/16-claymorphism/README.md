# Claymorphism · 黏土 3D 设计系统

> 胖嘟嘟、软乎乎、捏一下会回弹的黏土世界。马卡龙糖果色 + 大圆角 + 外柔影叠内高光，做出充气般的 3D 立体感。给儿童 / 教育 / 健康打卡 / 休闲社交 / 创意工具类产品——想让界面"可爱又有质感、能上手摸一摸"的场景。

---

## 1. 一句话气质

把每个控件都做成一块**软软的彩色黏土**：圆滚滚的大圆角、马卡龙配色、表面有柔和外投影把它"撑"起来，再叠上沿提亮、下沿压暗的内高光，看起来像被捏出来的充气橡皮糖。俏皮、温暖、有触感，但仍守住 WCAG AA 的清晰度。

## 2. 设计哲学 / 性格

1. **体积靠双阴影，不靠描边。** 黏土的灵魂是「外柔影（撑起体积）+ inset 内高光（上沿提亮、下沿压暗）」。描边几乎不用，圆润感全靠光影捏出来。
2. **大圆角 = 充气感。** 圆角 16 / 24 / 32px，比常规系统大一圈，让每块"黏土"看上去鼓鼓的、塞满了空气。
3. **马卡龙色，柔但不糊。** 表面用柔薰衣草灰与近白，强调色用活泼紫与薄荷，状态色是糖果调；但底上文字一律加深到 ≥4.5:1，可爱不牺牲可读。
4. **会回弹的动效。** 缓动用带 overshoot 的 `cubic-bezier(.34,1.56,.64,1)`，hover 轻轻鼓起、按下凹进去，像真的在捏黏土。
5. **与 Geist 基底的关系。** 继承 Geist 的 `--ds-*` token 契约、间距比例、语义结构；**改掉**它的中性灰与极小圆角、平面阴影——换成马卡龙色、大圆角、黏土双阴影与圆体字。

## 3. 何时用 / 何时别用

**适合**
- 儿童 / 教育 / 亲子类应用，需要亲和、不严肃的界面。
- 健康打卡、习惯养成、冥想、休闲社交、宠物等"温暖陪伴"型产品。
- 创意 / 趣味工具、活动落地页、品牌强调俏皮个性的场景。

**不适合**
- 高密度数据后台、金融交易、专业 B 端工具（黏土阴影占空间、信息密度低）。
- 需要极度严肃 / 权威的政府、法律、企业级合规界面。
- 性能极敏感、要大量复用且禁止多层 box-shadow 的超长列表（黏土阴影是多层 inset，渲染成本高于平面阴影）。

## 4. 颜色

语义 token（亮 / 暗双主题），均满足 WCAG AA（正文 ≥4.5:1，大字 / UI ≥3:1）。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#eef0fb` | `#23233a` | 主背景（柔薰衣草灰 / 深靛） |
| `--ds-bg-subtle` | `#e7eafa` | `#1e1e32` | 次背景 · 区块分组底 |
| `--ds-bg-elevated` | `#f7f8ff` | `#2c2c46` | 抬起表面 · 卡片 / 弹层 |
| `--ds-bg-sunken` | `#e3e6f7` | `#1a1a2c` | 凹陷表面 · 输入槽 / 代码块 |
| `--ds-fg` | `#3a3a55` | `#e8e8ff` | 主文字（亮 9.3:1 / 暗 12.5:1） |
| `--ds-fg-muted` | `#6b6b85` | `#aeaed0` | 次要文字（亮 5.1:1 / 暗 6.2:1） |
| `--ds-fg-subtle` | `#7c7c96` | `#9494ba` | 占位 / 弱文字（≈4.5:1） |
| `--ds-fg-on-accent` | `#ffffff` | `#ffffff` | 落在强调色上的文字 |
| `--ds-border` | `#dfe2f4` | `#3a3a5a` | 常规描边（几乎不用） |
| `--ds-border-strong` | `#c9cdec` | `#4a4a70` | 强描边 / 分隔 |

### 品牌与强调（梯度）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#7c6cff` | `#9a8cff` | 主操作色（活泼紫） |
| `--ds-primary-hover` | `#6a5aee` | `#aa9eff` | hover |
| `--ds-primary-active` | `#5b4cdb` | `#8a7cf5` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#1a1330` | 主操作上的文字 |
| `--ds-accent` | `#2bb89a` | `#38d6b0` | 链接 / 次强调（薄荷） |
| `--ds-accent-fg` | `#ffffff` | `#053229` | accent 上的文字 |

> 主色梯度：`primary`（默认）→ `primary-hover`（提亮 / 暗色更亮）→ `primary-active`（压深，配合 clay-pressed 凹陷）。`accent` 薄荷在亮色下做链接文字时取值已加深至 4.6:1。

### 语义状态（主色 + `-bg` 浅底 + `-fg` 底上文字）

| 状态 | 主色（亮/暗） | `-bg`（亮/暗） | `-fg`（亮/暗） |
|---|---|---|---|
| success | `#2eb88a` / `#44d3a3` | `#d8f5ec` / `#12352a` | `#0c5a42` / `#bdf5e3` |
| warning | `#ffb648` / `#ffc874` | `#fff1d8` / `#3a2a0c` | `#7a4d00` / `#ffe9c4` |
| danger | `#ff7a85` / `#ff96a0` | `#ffe2e5` / `#3d1c22` | `#8a1722` / `#ffdadd` |
| info | `#7c6cff` / `#9a8cff` | `#e6e3ff` / `#25214a` | `#322a8a` / `#ddd7ff` |

## 5. 字体

- **字族**：`Quicksand`（圆润几何无衬线，圆头字形天生契合黏土气质），回退 `Varela Round` → 系统 `-apple-system / Segoe UI / PingFang SC / Microsoft YaHei`。中文走系统圆体 / 黑体回退，整体保持圆润饱满。
- **字重**：本风格基线偏重——`normal: 500` / `medium: 600` / `bold: 700`。圆体在 500 起才有"胖"的感觉，正文也用 500。
- **字距**：标题 `--ds-tracking-tight: -0.02em`（不低于 -0.04em 下限，避免圆字粘连）；正文 `0`。
- **比例尺**：xs 12 / sm 13 / base 14 / md 16 / lg 20 / xl 24 / 2xl 32 / 3xl 48（px）。
- **行高**：tight 1.2（标题）/ normal 1.55（正文）/ relaxed 1.75（长文）。
- **中文适配**：圆体仅覆盖拉丁字形，中文回退系统圆 / 黑体；标题中文建议用 700，正文 500，避免过细显得"软塌"。

## 6. 间距与布局

- **比例尺（4px 基）**：`--ds-space-1..12` = 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96。
- **节奏**：黏土卡片阴影外溢明显，区块间距比常规系统略大（区块间用 `space-10/64`，组内用 `space-4/16`），给阴影"呼吸位"，避免互相吃影。
- **容器宽**：内容主体建议 `max-width: 1120px` 居中；正文行宽 ≤ 75ch。
- **栅格**：12 栏意识；卡片网格用 `repeat(auto-fill, minmax(280px, 1fr))`，间距 `space-4/16` 起步，让胖卡片之间不挤。

## 7. 圆角 / 阴影 / 描边

### 圆角（大而圆，充气感）
`--ds-radius-sm: 16px` / `md: 24px` / `lg: 32px` / `full: 9999px`。小控件用 sm，卡片 / 弹层用 md~lg，药丸按钮 / 头像 / 标签用 full。

### 阴影 —— 黏土双阴影（灵魂）

每块黏土 = **一层柔和外投影**（撑起体积、给地面）+ **两层 inset**（上沿白高光提亮、下沿主色暗影压凹）。直接用以下语义变量，不要手写：

```css
/* 黏土凸起（卡片 / 默认按钮）—— 胖嘟嘟外凸 */
.clay-raised { box-shadow: var(--ds-clay-raised); }
/* 写法本体：
   0 16px 30px -12px rgba(86,80,158,.34),       外柔影（撑体积）
   inset 0 3px 4px rgba(255,255,255,.95),        上沿内高光（提亮）
   inset 0 -6px 10px rgba(86,80,158,.16);        下沿内暗影（压凹）
*/

/* 黏土按下（:active / 选中 / 输入槽）—— 像手指按进黏土 */
.clay-pressed { box-shadow: var(--ds-clay-pressed); }
/* 写法本体：
   0 4px 10px -6px rgba(86,80,158,.22),          外影收小
   inset 0 5px 9px rgba(86,80,158,.22),          顶部内凹加深
   inset 0 -2px 3px rgba(255,255,255,.7);        底部留一点回光
*/

/* 强调色凸起（落在 primary 上的黏土）—— 内高光偏弱、下沿用主色暗影 */
.clay-accent { box-shadow: var(--ds-clay-accent); }
```

通用高度别名：`--ds-shadow-sm / md / lg` 也都已内置黏土内高光，可直接用于不同层级的抬起。**凸起态 → 按下态**只需把 `clay-raised` 换成 `clay-pressed`，配合 `transform: scale(.97)` 即可得到"被捏一下"的反馈。

### 描边
几乎不用。仅在需要切分相邻同色面、或低对比场景兜底时，用 `--ds-border`（1px）。**不要**给黏土卡片同时加粗描边——会破坏充气的软体感。

## 8. 动效

- **时长**：`--ds-dur-fast: 180ms`（hover / 按下）/ `base: 240ms`（卡片抬起 / 主题切换）/ `slow: 320ms`（弹层）。
- **曲线**：`--ds-ease: cubic-bezier(.34,1.56,.64,1)`——带 overshoot 的回弹，黏土被捏后弹回的俏皮感。
- **典型过渡**：hover `transform: scale(1.03)` 微鼓起 + 阴影从 raised 变深；`:active` `scale(.97)` + 切到 `clay-pressed` 凹下去；开关 / 选中切到按下态。
- **`prefers-reduced-motion`**：必须提供降级——关闭 `transform` 缩放与 overshoot，仅保留极短的颜色 / 阴影过渡（≤0.01ms 或直接去除）。

## 9. 组件规格

### 按钮 Buttons
- 圆角 `full`（药丸）；高度 sm 32 / md 40 / lg 48；左右内距 16 / 22 / 28。
- **Primary**：`bg: --ds-primary`，文字 `--ds-primary-fg`，阴影 `--ds-clay-accent`；hover→`primary-hover` + `scale(1.03)`；active→`primary-active` + `clay-pressed` + `scale(.97)`；disabled→`opacity .5`、去阴影、禁缩放。
- **Secondary**：`bg: --ds-bg-elevated`，文字 `--ds-fg`，阴影 `--ds-clay-raised`；hover 提亮底色。
- **Tertiary**：透明底、`--ds-fg-muted` 文字，hover 显 `--ds-bg-subtle`、无阴影。
- **Danger**：`bg: --ds-danger`，白字，阴影 raised；hover 提亮。
- 焦点：`:focus-visible` 用 `--ds-focus-ring`（双层环）。触控目标 ≥44px（md/lg 满足）。

### 输入框 Input / Textarea / Select
- 圆角 `md`；高度 40（textarea 自适应，min 84）；`bg: --ds-bg-sunken`，阴影 `--ds-clay-pressed`（凹槽感，输入区天然"凹进去"）。
- placeholder 用 `--ds-fg-subtle`（≥4.5:1）；focus 加 `--ds-focus-ring` + 主色边；错误态边框 / 文案用 `--ds-danger` / `--ds-danger-fg`。

### 卡片 Card
- 圆角 `lg`；`bg: --ds-bg-elevated`；阴影 `--ds-clay-raised`；内距 `space-6/24`。
- hover：`scale(1.025)` + 阴影变 `--ds-shadow-lg`。**禁止**卡片嵌套卡片；**禁止**同时加粗描边 + 大模糊阴影（保持单一软体感）。

### 徽章 / 标签 Badge
- 圆角 `full`；内距 5×14；字号 xs、字重 bold。各语义用 `*-bg` 浅底 + `*-fg` 文字；可选前置语义圆点 / SVG 图标。

### 提示条 Alert
- 圆角 `md`；**前置语义 SVG 图标 + 浅色底 `*-bg` + 1px 全描边**。**禁止**侧边粗色竖条。图标用对应语义色（success 对勾 / warning 感叹 / danger 叉 / info i）。

### 导航 Nav / Tabs
- 顶栏：sticky、半透明底 + 模糊；品牌位用 SVG 标记 + wordmark；导航项药丸（`full`），选中项 `bg: --ds-primary` + 白字。
- Tabs：选中项主色文字 + 药丸下划线（不是硬直线）。

## 10. 可访问性

- **对比度**：正文 ≥4.5:1、大字 / UI ≥3:1（见第 4 节，所有状态底上文字均已校到 AA）。占位文字也用 `--ds-fg-subtle`（≥4.5:1），不用更浅的灰糊住。
- **焦点**：所有可交互元素 `:focus-visible` 用 `--ds-focus-ring`（底色环 + 主色环双层），在彩色黏土上仍清晰。
- **触控目标**：按钮 / 输入 / 列表项最小 44×44px（md / lg 尺寸满足）。
- **可减弱动效**：`@media (prefers-reduced-motion: reduce)` 关闭缩放与 overshoot 回弹，保留必要的瞬时状态切换。
- **不靠颜色单传信息**：状态除颜色外都带 SVG 图标 / 文案，色盲可辨。

## 11. Do / Don't

**Do**
- 用语义阴影变量（`clay-raised` / `clay-pressed` / `clay-accent`）表达凸起 / 按下，别手写多层 box-shadow。
- 保持大圆角（≥16px）与马卡龙配色——这是身份，别 over-round 成普通卡片也别削成小圆角。
- 输入区永远"凹"（clay-pressed），可点的实体永远"凸"（clay-raised）——凹凸语义一致。
- 区块间留足间距给阴影呼吸；底上文字一律校到 AA。
- 图片用黏土框：大圆角 + 柔影 + 顶部内高光，和控件同语言。

**Don't**
- 别给黏土卡片再叠粗描边或第二层强阴影（ghost-card），软体感会糊。
- 别把圆角削平、把阴影抹成 Geist 式平面投影——会丢掉黏土身份（POLISH 规则 3 豁免：大圆角 + 黏土双阴影属故意特征，不可中和）。
- 别用低对比浅彩做正文（马卡龙色直接当文字会糊）；状态文字用 `*-fg`。
- 别在超长列表里给每行都上完整 clay 阴影（性能 + 视觉过载）——列表行用轻 sm 即可。
- 别堆 emoji 当图标 / 项目符号——一律内联圆头 SVG。

## 12. 如何接入

1. **引入 tokens.css**（提供全部 `--ds-*` 变量与亮 / 暗主题）：
   ```html
   <link rel="stylesheet" href="styles/16-claymorphism/tokens.css" />
   ```
   或在打包入口 `import './styles/16-claymorphism/tokens.css'`。

2. **用变量**（不要硬编码颜色 / 阴影）：
   ```css
   .my-card {
     background: var(--ds-bg-elevated);
     border-radius: var(--ds-radius-lg);
     box-shadow: var(--ds-clay-raised);
     padding: var(--ds-space-6);
     color: var(--ds-fg);
   }
   .my-card:active { box-shadow: var(--ds-clay-pressed); transform: scale(.97); }
   ```

3. **切换暗色**：给 `<html>` 设 `data-theme="dark"`（或加 `.dark` 类）即可，所有变量自动切换。

4. **Tailwind 项目**：引入预设——
   ```js
   // tailwind.config.js
   module.exports = { presets: [require('./styles/16-claymorphism/tailwind.preset.js')] }
   ```
   即可用 `bg-primary` / `rounded-lg` / `shadow-clay-raised` / `active:shadow-clay-pressed` / `duration-fast` / `ease-ds` 等类（暗色由 `[data-theme="dark"]` 或 `.dark` 驱动）。

5. **字体**：preview 通过 `../../_fonts/fonts.css` 引入 Quicksand；生产环境自行托管 Quicksand 或依赖系统圆体回退即可，无需改 token。
