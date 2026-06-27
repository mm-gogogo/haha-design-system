# Mineral · 矿物康养编辑风（Wellness Editorial）

> 暖燕麦/石质基底、优雅衬线大标题、鼠尾草绿 + 陶土赭两味强调、大留白、细分隔线、柔和色块与安静的植物几何。给矿物护肤 / 疗愈静修 / 康养工作室的杂志式编辑站——一句话：**让肌肤与心绪都慢下来一寸**。

气质关键词：温润、克制、有触感。不是喧哗的 SaaS，不是冷硬的诊室界面，而是一本可以阅读的康养杂志内页。强调色稀少，分层靠细线与柔和色块而非重投影；imagery 与留白才是主角。

> 示例品牌 **Terra Mineral** 为虚构的矿物疗愈工作室，文案、人物、配方均为原创。

---

## 1. 一句话气质

石质暖色基底 + 衬线大标题 + 人文无衬线正文的「对比轴」，大行高大留白，鼠尾草绿与陶土赭克制点缀。截图发出去像一本编排良好的康养杂志，而不是又一张奶油色的 AI 默认页。

---

## 2. 设计哲学 / 性格

继承 Geist 基底的**语义分层 + 固定比例尺 + 状态色成对 + 双层焦点环 + 明暗双主题**骨架，但气质做了五处改写：

1. **触感优先（Tactile first）**——基底是带颗粒暖意的燕麦石色，不是冷白也不是奶油糖。表面、文字、色块都偏暖，让屏幕读起来像石头与纸张。
2. **对比轴而非单一字族**——大标题/封面用衬线（Noto Serif，字距归零、宽松呼吸），正文/控件/元信息走人文无衬线（Inter），靠字族对比建立「内容 vs 界面」的层级。
3. **两味强调，克制出场**——鼠尾草绿 `#4f6b52` 作主操作与选中，陶土赭 `#a8543a` 作链接、首字下沉与小标点缀。其余一律交给石与暖墨。
4. **靠细线、柔和色块与留白，不靠阴影**——阴影刻意做到极柔、几乎不可见；层级用 `1px` 细线、`bg-subtle` 软块、慷慨留白表达。
5. **安静的植物几何**——细 1px 的叶弧 / 矿物轮廓线，仅作分隔与点缀，低饱和、不抢戏。零 emoji，全部内联 SVG。

> 与 `07-editorial` 的区别：07 是**大胆赭橙的印刷报刊风**（新闻、报头、强对比）；本风格更**安静、更暖、imagery 更前、更 spa/retreat**，强调色换成沉静的鼠尾草绿主导。

---

## 3. 何时用 / 何时别用

**适合**
- 矿物护肤 / 天然美妆 / 香氛品牌的内容与产品站
- 疗愈静修、温泉康养、SPA、瑜伽/冥想工作室
- 慢生活、植物、食疗、生活方式的杂志型编辑站与 newsletter

**不适合**
- 数据密集的 B 端后台、仪表盘（密度太低 → 用 enterprise）
- 强营销转化、促销倒计时的落地页（克制感会削弱冲击力）
- 临床医疗 / 诊断系统（这套是康养氛围，不是医疗器械 UI → 用 enterprise / material）
- 游戏潮玩、霓虹炫技（→ 用 cute / pixel / cyberpunk / dark-tech）

---

## 4. 颜色

两味克制强调（鼠尾草绿 + 陶土赭）+ 暖燕麦中性。亮色是日间石面，暗色是「黄昏的静修地」。所有正文级取值满足 WCAG AA（≥4.5:1）。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#f4f1e8` | `#1c1f1a` | 燕麦石 · 主背景 |
| `--ds-bg-subtle` | `#ede8dc` | `#232721` | 次背景 · 区块/分组底、柔和色块 |
| `--ds-bg-elevated` | `#fffdf8` | `#2a2e27` | 浮层/卡片（略亮于燕麦） |
| `--ds-bg-sunken` | `#e7e1d2` | `#161812` | 凹陷 · 输入槽/代码块/图位 |
| `--ds-fg` | `#2a2723` | `#ece7da` | 暖墨 · 主文字（AA 13.2:1） |
| `--ds-fg-muted` | `#5f5a4d` | `#a8a290` | 次要文字 · 元信息（AA ≥6:1） |
| `--ds-fg-subtle` | `#7a7363` | `#837d6c` | 占位/弱标签（大字/UI；正文一律用 muted） |
| `--ds-fg-on-accent` | `#fbfaf5` | `#16190f` | 落在强调色上的文字 |
| `--ds-border` | `#e0d9c8` | `#353a30` | 常规描边/分隔线（主力分层手段） |
| `--ds-border-strong` | `#cabfa8` | `#4a5142` | 强描边 · 植物几何线 |

### 品牌与强调（鼠尾草绿 → 陶土赭）

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#4f6b52` | `#8fb084` | 鼠尾草绿主操作色（按钮/选中/步进） |
| `--ds-primary-hover` | `#5c7a5f` | `#a0c096` | hover |
| `--ds-primary-active` | `#425a45` | `#7da072` | active / pressed |
| `--ds-primary-fg` | `#fbfaf5` | `#16190f` | 主操作上的文字（AA ≥5.6:1） |
| `--ds-accent` | `#a8543a` | `#d98b6f` | 陶土赭 · 链接 / 首字下沉 / 小标 |
| `--ds-accent-fg` | `#fff8f3` | `#2a140c` | accent 上的文字 |

> **强调梯度**：primary 走绿向暗（`5c7a5f → 4f6b52 → 425a45`）；accent 陶土赭一档即可。两味强调全页合计出场不多于 6–8 处，其余交给石与暖墨。

### 语义状态（主色 + 浅暖底 + 底上深字）

| 语义 | 主色（亮/暗） | -bg（亮/暗） | -fg（亮/暗） |
|---|---|---|---|
| success | `#3f7a4e` / `#7fc08c` | `#e8f1e6` / `#16271a` | `#1f3d27` / `#cfeed4` |
| warning | `#8a5e15` / `#e0b257` | `#f6ecd6` / `#26190a` | `#42300a` / `#f6e6c0` |
| danger | `#b14430` / `#e58a72` | `#f6e2dc` / `#2a130d` | `#5a1c12` / `#f8d8cc` |
| info | `#436576` / `#82acbd` | `#e3eef1` / `#13242b` | `#1f3640` / `#d6e9f0` |

### 焦点

| Token | 值 | 说明 |
|---|---|---|
| `--ds-focus` | `#4f6b52` / `#8fb084` | 焦点环主色（= primary） |
| `--ds-focus-ring` | `0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus)` | 双层环：先一圈底色断开，再一圈鼠尾草绿 |

---

## 5. 字体

对比轴 = **衬线大标题 + 人文无衬线正文**。preview 走本地 `_fonts/`，无外链；缺字回退 system serif / sans。

| 角色 | Token | 字族 | 选择理由 |
|---|---|---|---|
| 大标题 / 封面 | `--ds-font-serif` | `"Noto Serif", Georgia, "Songti SC", serif` | 优雅衬线撑起「编辑」气质；字重 400/600，字距归零，行高宽松，**只用于大标题、首字下沉与封面**，不下放到正文。 |
| 正文 / 控件 / 元信息 | `--ds-font-sans` | `"Inter", -apple-system, "PingFang SC", sans-serif` | 人文无衬线，正文与界面同族，安静好读，中文回退苹方/思源黑。 |
| 小标 eyebrow / 数字 | `--ds-font-mono` | `"JetBrains Mono", ui-monospace, monospace` | 等宽，仅用于大写 eyebrow 小标、tabular 数字、引用代码——**克制使用，不是每节都贴**。 |

### 比例尺（px）

| 级别 | 值 | 用途 |
|---|---|---|
| `--ds-text-3xl` | 52 | 封面大标题（serif） |
| `--ds-text-2xl` | 38 | h1 / 区块大标题（serif） |
| `--ds-text-xl` | 28 | h2（serif） |
| `--ds-text-lg` | 22 | h3 / 卡片标题（serif） |
| `--ds-text-md` | 19 | 导语 lede |
| `--ds-text-base` | 17 | 正文（sans，可读基线） |
| `--ds-text-sm` | 14 | 元信息 / 控件 |
| `--ds-text-xs` | 13 | eyebrow / 脚注 |

字重 `400 / 500 / 600`；行高 `tight 1.25 / normal 1.55 / relaxed 1.85`（正文用 relaxed，中文方块字需要）。字距：大标题 `tracking-normal (0)`，正文 `0`；mono 小标手动加 `.14–.18em` letter-spacing 与 uppercase。**中文适配**：正文回退苹方，标题回退宋体；正文 `text-wrap: pretty`、标题 `text-wrap: balance`。

---

## 6. 间距与布局

- **比例尺**：`--ds-space-1..12` 映射 `4,8,12,16,20,24,32,40,48,64,80,96`（4px 基，editorial 偏松）。
- **节奏**：工序/段落 `space-6 (24)`，章节 `space-8 (40)`，大区块 `space-11 (80)` 及以上。留白是这套风格的呼吸。
- **编辑容器**：正文锁 `max-width: 680px`（约 40rem），每行字数克制，眼睛回行不迷路。
- **栅格**：页面容器 `max-width: 1080px`；Hero 非对称分栏（`1.02fr / .98fr`，左叙事 + 右仪式图叠卡）；卡片 / 媒体卡 `auto-fill minmax(260px,1fr)`，窄屏收一列。

---

## 7. 圆角 / 阴影 / 描边

| 维度 | 取值 | 气质 |
|---|---|---|
| `--ds-radius-sm` | 6px | 按钮 / 输入 / 徽标 |
| `--ds-radius-md` | 10px | 卡片 / 菜单 / alert |
| `--ds-radius-lg` | 18px | 图片 / 媒体卡 / 柔和色块（明显柔软，强化触感） |
| `--ds-radius-full` | 9999px | 头像 / 药丸标签 / 开关 |

**阴影**刻意做到极柔（暖色、低透明、大模糊负扩散）：`sm` 几乎只是一道暖灰发丝，`md / lg` 是远而薄的一层。层级真正的主力是 **`1px` 细描边 + `bg-subtle` 柔和色块 + 留白**。康养风绝不靠重投影堆「质感」。

---

## 8. 动效

| Token | 值 |
|---|---|
| `--ds-ease` | `cubic-bezier(.22,.61,.36,1)`（温柔 ease-out，无弹跳） |
| `--ds-dur-fast` | 160ms（hover / 焦点） |
| `--ds-dur-base` | 240ms（主题切换、模态、toast） |
| `--ds-dur-slow` | 300ms（图片缩放、整页换肤） |

典型过渡：按钮/输入 hover 与焦点走 fast；卡片 / 图片 `scale(1.03)` 走 slow；模态/toast 位移 8px 淡入走 base。全站包 `@media (prefers-reduced-motion: reduce)`，把动画/过渡压到 `.01ms`、`scroll-behavior: auto`。

---

## 9. 组件规格

**按钮**（控件走 sans，高度 40，圆角 sm）
- `primary`：底 `--ds-primary`，字 `--ds-primary-fg`；hover→`primary-hover`，active→`primary-active`。
- `secondary`：底 `--ds-bg-elevated`，`1px` `border-strong`；hover 底 `bg-subtle`。
- `tertiary`：透明底、字 `--ds-primary`；hover 底 `bg-subtle`。
- `danger`：底 `--ds-danger`、白字（AA 5.6:1）。
- 尺寸：sm 32 / 默认 40 / lg 48；disabled `opacity .5`；focus 走 `--ds-focus-ring`。

**输入框 / 表单**：高 40，底 `bg-elevated`，`1px border`，圆角 sm；focus 时 `border-color: primary` + 焦点环；错误态 `border-color: danger` 且 hint 转 danger 色。checkbox/radio/switch 用 `accent-color: primary`。

**卡片**：底 `bg-elevated`，`1px border`，圆角 md，`shadow-sm`；hover→`border-strong` + `shadow-md`。标题 serif，正文/元信息 sans muted。

**柔和色块（soft-block）**：底 `bg-subtle`，`1px border`，圆角 lg，padding `space-7`——康养风的承重块，用色块与细线代替阴影卡。

**徽章 / 标签**：圆角 full，高 22；语义底用 `*-bg`、字用 `*-fg`；`primary` 实心；描边款用 `border-strong`。

**提示条 alert**：浅 `*-bg` + `1px` 半语义色描边（无侧色条），前置语义色细线 SVG。

**导航**：sticky 顶栏（半透明 + `blur`）含字号 A−/A/A＋ 与日间/薄暮切换；tabs 底部 `2px primary` 下划线表当前；面包屑 / 分页 / 步进器全部走 primary 表「当前/已完成」。

---

## 10. 可访问性

- **对比度**：正文 `fg`/`fg-muted` 对 `bg` 均 ≥6:1；`primary`、`accent` 链接、所有语义 `*-fg` 对其底色 ≥4.5:1（实测见 preview 校验）。`fg-subtle` 仅用于占位/弱标签（大字/UI 档），正文一律用 `fg-muted`。两个主题都达 AA。
- **焦点**：所有可聚焦元素 `:focus-visible` 走双层 `--ds-focus-ring`，在燕麦底与暗底都清晰可见。
- **触控目标**：按钮 / 输入 / 分页项 ≥ 40px 高，移动端 tab/动作条命中区 ≥ 44px。
- **减弱动效**：`prefers-reduced-motion: reduce` 下关闭过渡与平滑滚动。
- **图片**：全部 `loading="lazy"` + 有意义中文 alt；叠字图加暖墨渐变 scrim 保证白字 AA。

---

## 11. Do / Don't

**Do**
- 大标题用衬线、字距归零、留足行高，让它「呼吸」。
- 正文与控件同走无衬线，靠字族对比建立内容 / 界面层级。
- 用 `1px` 细线、`bg-subtle` 柔和色块与慷慨留白分层。
- 鼠尾草绿管操作、陶土赭管链接与点缀，全页合计克制出场。
- imagery 前置：仪式静物、山谷、植萃、谷物餐，统一 `radius-lg` + 暖色调。

**Don't**
- 别把燕麦底做成「通用奶油 AI 默认」——一定要让真正的鼠尾草 + 陶土、衬线与 imagery 把颜色带出来。
- 别堆重投影假装高级；这套靠线与色块，不靠阴影。
- 别让 `fg-subtle` 去扛正文（对比不足）——正文用 `fg-muted`。
- 别做成临床/诊断 UI（冷白、硬边、密集表单），也别做成促销 SaaS（大色块 CTA、感叹号）。
- 别滥用 mono eyebrow 与 emoji——eyebrow 偶用即可，图标一律内联 SVG。

---

## 12. 如何接入

1. **引入 tokens**：在入口引 `styles/18-mineral-editorial/tokens.css`（已含亮 `:root` + 暗 `[data-theme="dark"], .dark`）。
2. **用变量**：组件一律走 `var(--ds-*)`，不要硬编码颜色。切主题只需在 `<html>` 上设 `data-theme="dark"`（或加 `.dark`）。
3. **Tailwind 项目**：在 `tailwind.config.js` 里 `presets: [require('./styles/18-mineral-editorial/tailwind.preset.js')]`，即可用 `bg-bg / text-fg / bg-primary / rounded-lg / shadow-md / font-serif` 等语义类，亮暗自动跟随。
4. **机器可读**：`tokens.json` 同语义可喂设计工具 / 代码生成。
5. **预览**：双击 `preview.html` 离线即开，右上角切换薄暮模式与正文字号。
