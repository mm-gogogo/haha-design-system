# Pop Art / 波普艺术 设计系统

> FizzBang 漫画汽水工作室的界面语言：奶油纸底、主红、印刷蓝、粗黑 keyline、Ben-Day 网点、漫画气泡、爆炸形贴纸与硬偏移阴影。它适合需要一眼有记忆点的 zine、展览、饮料发布、文化活动和轻量消费品牌。

---

## 1. 一句话气质

像一格印在奶油纸上的漫画广告：**大声、平面、原色、粗黑描边、网点阴影、气泡对白**。它不是 Memphis 的几何彩纸，也不是 Risograph 的柔软双色印刷；Pop Art 的识别点是漫画书式的黑线、Ben-Day 点、shout 与 action burst。

---

## 2. 设计哲学 / 性格

与 Geist 中性基底的关系：**继承**固定 `--ds-*` token 契约、4px 间距比例、AA 对比底线与可访问性；**改写**视觉气质为漫画出版物：主红/印刷蓝、奶油纸、粗黑 keyline、气泡圆角、硬偏移阴影和 Ben-Day 装饰。

1. **漫画先于装饰**：黑色 keyline、分镜面板、气泡、爆炸形和网点必须共同出现，不能只换一组鲜艳颜色。
2. **正文永远在纯色纸面上**：Ben-Day 点只做阴影、角标、图片处理或背景纹理，不能压在长正文下面。
3. **一屏一个 shout**：真正的大标题、爆炸形或气泡只保留一个主声部，其余信息用普通卡片承接。
4. **原色但不失控**：主红负责动作，印刷蓝负责强调与链接，黄色 `#ffd21a` 只作装饰或贴纸，不做正文前景。
5. **平面层级**：用 2-3px keyline、硬偏移阴影和色块叠放表达层级，不使用柔影、玻璃、拟物高光。

---

## 3. 何时用 / 何时别用

**适合**
- 漫画展、zine 商店、艺术活动、音乐/文化厂牌。
- 饮料、零食、潮流周边等需要明快货架感的消费品牌。
- 作品集、活动页、轻量产品发布页，需要强识别和短篇幅表达。
- 创意后台或内容编辑工具，但界面密度要受控。

**别用**
- 医疗、金融、法律、政务等需要安静可信的长流程。
- 长时间数据分析后台；高饱和面板和硬线条会造成疲劳。
- 高端奢侈、极简建筑、安静 editorial 品牌。
- 需要大量正文沉浸阅读的内容站，除非把 Pop Art 限制在封面和导航层。

---

## 4. 颜色

所有组件颜色通过 `var(--ds-*)` 使用。黄色 `#ffd21a` 是装饰色，用于 Ben-Day 点、burst、贴纸或极短标签，不能作为正文/链接前景。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#fbf3df` | `#14110a` | 主背景：奶油纸 / comic night |
| `--ds-bg-subtle` | `#f3e9cd` | `#1c1810` | 次背景、分组底 |
| `--ds-bg-elevated` | `#fffdf6` | `#221d12` | 卡片、弹层、气泡 |
| `--ds-bg-sunken` | `#efe3c2` | `#0e0b06` | 输入槽、代码块 |
| `--ds-fg` | `#15130e` | `#fbf3df` | 主文字、黑色 keyline 语感 |
| `--ds-fg-muted` | `#44403a` | `#b8b09a` | 次要正文 |
| `--ds-fg-subtle` | `#6a665c` | `#8a8270` | 占位、辅助说明 |
| `--ds-fg-on-accent` | `#ffffff` | `#1a0604` | 强调色上的通用前景 |
| `--ds-border` | `#ddd2b4` | `#34301f` | 次级分隔线 |
| `--ds-border-strong` | `#15130e` | `#fbf3df` | 2-3px keyline / 强描边 |

### 品牌与强调

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#d8241b` | `#ff5247` | 主按钮、选中态、红色动作块 |
| `--ds-primary-hover` | `#bd1f17` | `#ff6e64` | hover |
| `--ds-primary-active` | `#a01a13` | `#ee4339` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#1a0604` | 主按钮文字；暗色使用深色文字是有意的 AA 选择 |
| `--ds-accent` | `#1546d6` | `#5b86ff` | 链接、次强调、蓝色印刷块 |
| `--ds-accent-fg` | `#ffffff` | `#04102e` | 蓝色块上的文字；暗色同样用深色文字保 AA |

**强调梯度**：红色 `#a01a13 → #bd1f17 → #d8241b`（active→hover→default），暗色红 `#ee4339 → #ff6e64 → #ff5247`。蓝色不做 hover 梯度，作为稳定链接/强调色使用。

### 语义状态

| 语义 | 主色（亮 / 暗） | -bg（亮 / 暗） | -fg（亮 / 暗） |
|---|---|---|---|
| success | `#1f8a3a` / `#4cc26a` | `#e4f2e6` / `#0c2614` | `#0a3618` / `#c9f5d4` |
| warning | `#9a6a00` / `#ffd21a` | `#f8eccb` / `#241c00` | `#42300a` / `#fff0bf` |
| danger | `#d8241b` / `#ff5247` | `#f9e1df` / `#2a0c0a` | `#5a100c` / `#ffd4d0` |
| info | `#1546d6` / `#5b86ff` | `#e3e8f9` / `#0c1838` | `#0c1f5a` / `#d6e0ff` |

---

## 5. 字体

- `--ds-font-sans`: `"Inter", -apple-system, "PingFang SC", sans-serif`。正文、说明、表单使用 Inter，中文走系统回退。
- `--ds-font-mono`: `"JetBrains Mono", monospace`。按钮、贴纸、标签、数字和 comic shout 使用等宽字体，制造漫画标题的机械重音。
- `--ds-font-serif`: `"Inter", Georgia, "Songti SC", serif`，保留契约字段，不作为主要风格声音。

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-text-xs` | 12px | 标签、脚注 |
| `--ds-text-sm` | 14px | 表头、辅助说明 |
| `--ds-text-base` | 16px | 正文 |
| `--ds-text-md` | 19px | 小标题、重点正文 |
| `--ds-text-lg` | 24px | 卡片标题 |
| `--ds-text-xl` | 34px | 区块标题 |
| `--ds-text-2xl` | 52px | 页面主标题 |
| `--ds-text-3xl` | 76px | Hero shout / burst 文案 |

字重：`400 / 600 / 800`。标题和按钮用 800；正文 400，重点 600。行高保持 `1.02 / 1.5 / 1.7`。`--ds-tracking-tight` 继承源 kit 的 `-0.04em`，仅用于大字号 shout，正文保持 `0`。

---

## 6. 间距与布局

- **比例尺**：4px 基，`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`。
- **节奏**：组内 `space-2~4`，组件之间 `space-5~6`，页面区块 `space-10~12`。
- **容器宽**：主内容 `max-width: 1120px`，长正文行宽 ≤75ch。
- **布局语言**：使用漫画分镜式面板，允许红/蓝色块与网点作为装饰层，但正文层必须有纯色底。
- **移动端**：所有 burst、bubble、dot field 都要被父容器 `overflow:hidden` 或 `max-width:100%` 约束，390px 视口不产生横向滚动。

---

## 7. 圆角 / 阴影 / 描边

| Token | 值 | 说明 |
|---|---|---|
| `--ds-radius-sm` | `4px` | 小控件、输入框 |
| `--ds-radius-md` | `8px` | 面板、图片 |
| `--ds-radius-lg` | `14px` | 卡片、浏览器 frame |
| `--ds-radius-full` | `9999px` | 徽章、胶囊、开关 |
| `--ds-shadow-sm` | `2px 2px 0 var(--ds-border-strong)` | 小贴纸偏移 |
| `--ds-shadow-md` | `4px 4px 0 var(--ds-border-strong)` | 卡片、按钮 hover |
| `--ds-shadow-lg` | `6px 6px 0 var(--ds-border-strong)` | Hero、大框架 |

描边：组件外边用 `2-3px` `--ds-border-strong`，内部次分隔可用 `--ds-border`。不要用 1px 灰线替代漫画 keyline。

---

## 8. 动效

- `--ds-dur-fast: 80ms`，用于按钮 hover / active。
- `--ds-dur-base: 140ms`，用于卡片、图片、导航态。
- `--ds-dur-slow: 240ms`，用于主题切换或大面板过渡。
- `--ds-ease: cubic-bezier(.2,0,0,1)`，短促硬收尾，不做弹簧。
- 典型交互：hover `translate(-2px,-2px)` 并强化硬阴影；active `translate(3px,3px)` 并吃掉阴影。
- `@media (prefers-reduced-motion: reduce)` 下关闭 transition 和 animation，保留静态层级。

---

## 9. 组件规格

- **按钮 Button**：默认高 44px，sm 36px，lg 52px；3px strong keyline；`shadow-sm`；文字 mono uppercase。primary 为红底，亮色白字、暗色深字；accent 为蓝底，同样遵守 `accent-fg`。
- **输入框 Input / Textarea / Select**：`bg-sunken`，3px strong keyline，4px 圆角，高 44px；focus 显示 `--ds-focus-ring`；placeholder 用 `fg-subtle`。
- **卡片 Card**：`bg-elevated`，3px keyline，14px 圆角，`shadow-md`。可在角落放低透明度网点，但正文区域必须纯色。
- **徽章 / 标签 Badge**：mono uppercase，胶囊圆角，语义 `*-bg` + `*-fg` + 语义边色；黄色贴纸只用于短标签和装饰。
- **提示条 Alert**：语义浅底 + 语义前景 + 3px keyline + 内联 SVG。warning 的暗色主色为亮黄，但正文落在 `warning-bg` 上并使用 `warning-fg`。
- **导航 Nav / Tabs**：顶栏 3px 底边，tab 选中为纸面底 + strong keyline + 3px 主红指示。
- **表格 Table**：表头 mono uppercase；数字 tabular；行分隔 2px keyline；状态用语义圆点和文字，不只靠颜色。
- **移动端 dvc17 demo**：不重写 device frame；浅色 kit 使用默认深色状态栏；屏内按钮/导航触控目标 ≥44px。

---

## 10. 可访问性

- 亮/暗主题正文对比均按 WCAG AA：正文 ≥4.5:1，大字/图标 ≥3:1。
- `--ds-fg-subtle` 仍可用于辅助文字；不要在更浅的网点背景上叠正文。
- 黄色 `#ffd21a` 只做装饰、burst 或短贴纸，正文、链接和按钮文字不使用黄色前景。
- 暗色 primary/accent 使用深色文字（`#1a0604` / `#04102e`）是有意设计，用来保证红/蓝亮块上的 AA 对比。
- 所有交互控件必须有 `:focus-visible`，使用 `--ds-focus-ring`。
- 触控目标 ≥44px，移动底部导航 ≥48px。
- 支持 `prefers-reduced-motion`，关闭动效不影响信息理解。

---

## 11. Do / Don't

**Do**
- 用 2-3px strong keyline 定义组件轮廓。
- 把 Ben-Day 网点放在角落、图片上或 hero 背景里。
- 每屏只放一个主要 shout、bubble 或 burst。
- 使用主红做动作、印刷蓝做链接/次强调。
- 让正文落在纯色 `bg-elevated` 或 `bg-subtle` 表面上。
- 用内联 SVG 做图标和 burst，不用 emoji。

**Don't**
- 不要把正文直接放在网点场上。
- 不要把黄色当正文、链接或普通按钮文字。
- 不要把 Pop Art 做成 Memphis：避免随机几何 confetti 和过多抽象彩片。
- 不要把 Pop Art 做成 Risograph：避免软边、低对比、两色柔印的朦胧质感。
- 不要堆多个 shout、多个爆炸形、多个气泡争抢主视觉。
- 不要用柔影、玻璃拟态或 1px 灰线削弱漫画 keyline。

---

## 12. 如何接入

1. **引入变量**：
   ```html
   <link rel="stylesheet" href="path/to/28-pop-art/tokens.css">
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
   module.exports = { presets: [require('path/to/28-pop-art/tailwind.preset.js')] }
   ```

5. **字体**：使用共享 `../../_fonts/fonts.css` 提供 Inter 与 JetBrains Mono；不引入外部字体或 CDN。
