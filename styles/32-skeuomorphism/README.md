# Skeuomorphism · 拟物写实 (Rich Skeuo)

> 为桌面札记、录音整理、个人工作台类产品准备的 Rich Skeuo 设计系统：亚麻纸面、缝线皮革、毛毡托盘、拉丝金属、凝胶按钮、雕版文字和真实多层阴影。

---

## 1. 一句话气质

LedgerDesk 式的旧式数字工作台：内容落在干净纸面上，操作件像真实材料制成。它不是 08 Neumorphism 的单色软挤出，而是用丰富材质、颜色、光泽、缝线、木纹、金属和凹凸边缘建立触感。

---

## 2. 设计哲学 / 性格

继承 Geist / base 契约的语义 token、间距比例、状态色、焦点环和明暗主题；改写视觉语言为 Rich Skeuo：

1. **材料先于装饰**：皮革、亚麻、毛毡、金属、木纹、凝胶只用于建立可操作层级，不做满屏噪声。
2. **正文必须在纯净表面上**：纹理可以出现在边框、托盘、背景和图槽，但正文区域用 `--ds-bg-elevated` 或低噪声纸面。
3. **触感来自多层光影**：每个抬起面都有顶部高光、轻微 bevel、真实投影；按下态和输入槽用 inset 阴影。
4. **旧式但不复古玩具化**：圆角比 neumorphism 更小，按钮更像真实凝胶或机械件，整体保持生产力工具的克制密度。
5. **AA 优先**：纹理、渐变和图片叠字不能牺牲正文对比；暗色主按钮使用深字 `#08142e` 是有意为 AA 设置。

---

## 3. 何时用 / 何时别用

**适合**
- 桌面札记、日记、文档、录音转写、个人知识库。
- 音频工具、素材整理、创意工作台、复古仪表盘。
- 需要“有手感、可收藏、像真实物件”的消费级工具。
- 小到中等信息密度、用户会长时间停留的单窗应用。

**别用**
- 高密度数据后台、金融交易、工单列表等需要极快扫描的界面。
- 严肃政务、医疗合规或不允许纹理干扰的场景。
- 品牌本身极简、工业、未来感强的产品。
- 无法投入组件细节打磨的项目；粗糙的 skeuo 很快会显得廉价。

---

## 4. 颜色

亮色是 warm desk：亚麻、皮革和纸面。暗色是 night leather / dark wood：深皮革、暗木和金色边线。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#e7ddc9` | `#1f1a12` | 页面主背景 / 亚麻桌面 |
| `--ds-bg-subtle` | `#dccfb5` | `#261f15` | 分组底 / 毛毡面 |
| `--ds-bg-elevated` | `#fbf6ea` | `#2c2419` | 卡片、纸面、浮层 |
| `--ds-bg-sunken` | `#d0c2a4` | `#14100a` | 输入槽、图槽、压印轨道 |
| `--ds-fg` | `#2c2419` | `#efe6d2` | 主文字 |
| `--ds-fg-muted` | `#5a4d38` | `#b6a98c` | 次文字 |
| `--ds-fg-subtle` | `#786a4e` | `#847862` | 弱文字、辅助标签 |
| `--ds-fg-on-accent` | `#ffffff` | `#08142e` | 强调色上的文字 |
| `--ds-border` | `#cbbb98` | `#3a3122` | 常规描边 / 皮革接缝 |
| `--ds-border-strong` | `#2c2419` | `#c9a86a` | 强描边 / 金属边线 |

### 品牌与强调

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#2f6fd0` | `#5d97f0` | 主操作、选中、进度 |
| `--ds-primary-hover` | `#2860b8` | `#74a8f4` | hover |
| `--ds-primary-active` | `#21509c` | `#4d86e0` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#08142e` | 主按钮文字 |
| `--ds-accent` | `#8a6a1e` | `#c9a259` | 皮革金线、书签、链接 |
| `--ds-accent-fg` | `#fff8ec` | `#1a1408` | accent 面上的文字 |

### 语义状态

| 语义 | 亮 主 / 底 / 字 | 暗 主 / 底 / 字 |
|---|---|---|
| success | `#3a7a3a` / `#e6f1e2` / `#123a12` | `#6fbf6f` / `#102a10` / `#cdeec0` |
| warning | `#9a6a14` / `#f6ead0` / `#43300a` | `#e0b35a` / `#241a06` / `#f6e6be` |
| danger | `#b03a2e` / `#f7e2de` / `#551410` | `#e07a5f` / `#2a0f08` / `#f8d6c8` |
| info | `#2f6fd0` / `#e3ecf8` / `#0e2c5a` | `#5d97f0` / `#0c1c3a` / `#d6e4fb` |

---

## 5. 字体

- **Sans**：`'Inter',-apple-system,'PingFang SC',sans-serif`。用于主体 UI，保持现代可读。
- **Serif**：`'Noto Serif', Georgia, serif`。用于少量皮革标签、章标题或 letterpress 小标题，不用于密集正文。
- **Mono**：`'JetBrains Mono',monospace`。用于时间码、字数、文件 ID 和表格数字。
- **比例尺**：`12 / 13 / 14 / 16 / 20 / 24 / 32 / 48px`。
- **字重**：`400 / 500 / 600`，避免过细字重落在纹理背景上。
- **字距**：`--ds-tracking-tight:-0.01em`，正文 `0`。

---

## 6. 间距与布局

- **比例尺**：`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`。
- **容器宽**：文档 / 工作台建议 960–1120px，读写区保持 60–76 字符行宽。
- **材料层次**：背景桌面 -> 毛毡/皮革面板 -> 纸面卡片 -> 凝胶按钮 / 金属开关。
- **留白**：真实阴影比扁平投影更占空间，卡片间距建议 ≥24px，密集表格只保留轻描边。
- **移动端**：工具栏和按钮目标 ≥44px；纹理强度降低但不要完全消失。

---

## 7. 圆角 / 阴影 / 描边

### 圆角

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `6px` | 凝胶按钮、输入、菜单项 |
| `--ds-radius-md` | `12px` | 卡片、弹层、图槽 |
| `--ds-radius-lg` | `18px` | 大面板、皮革托盘、移动卡 |
| `--ds-radius-full` | `9999px` | 开关、徽章、圆按钮 |

### 阴影

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-shadow-sm` | `inset 0 1px 0 rgba(255,255,255,.55), 0 1px 2px rgba(44,36,25,.28)` | `inset 0 1px 0 rgba(255,255,255,.08), 0 1px 2px rgba(0,0,0,.55)` | 小控件高光 + 轻投影 |
| `--ds-shadow-md` | `inset 0 1px 0 rgba(255,255,255,.5), 0 4px 10px -2px rgba(44,36,25,.3)` | `inset 0 1px 0 rgba(255,255,255,.07), 0 5px 12px -2px rgba(0,0,0,.6)` | 卡片、按钮、菜单 |
| `--ds-shadow-lg` | `inset 0 1px 0 rgba(255,255,255,.5), 0 12px 28px -6px rgba(44,36,25,.4)` | `inset 0 1px 0 rgba(255,255,255,.06), 0 14px 30px -6px rgba(0,0,0,.7)` | 大浮层、木盒、皮革照片框 |

描边承担材质边缘：常规用 `--ds-border`，强接缝和金属边线用 `--ds-border-strong`。

---

## 8. 动效

- `--ds-dur-fast:200ms`，`--ds-dur-base:240ms`，`--ds-dur-slow:280ms`。
- `--ds-ease:cubic-bezier(.25,.46,.45,.94)`。
- 按钮：hover 增强高光，active 轻微 `translateY(1px)` + inset。
- 开关：金属轨道内滑块横移，开启态用 primary 渐变。
- 抽屉 / 弹层：只做短距离淡入和阴影变化，避免弹簧过度。
- `prefers-reduced-motion: reduce` 下取消动画时长，只保留终态。

---

## 9. 组件规格

### 按钮

| 状态 | 背景 | 文字 | 阴影 / 边缘 |
|---|---|---|---|
| primary | primary gel gradient | `--ds-primary-fg` | 顶部白高光 + 内阴影 + bevel |
| primary hover | `--ds-primary-hover` 渐变增强 | `--ds-primary-fg` | 高光更亮 |
| primary active | `--ds-primary-active` | `--ds-primary-fg` | `--ds-shadow-inset` |
| secondary | paper/linen gradient | `--ds-fg` | `--ds-shadow-md` |
| tertiary | 透明 / 低强调 | `--ds-fg-muted` | hover 才出现 `--ds-shadow-sm` |
| danger | danger gel gradient | `--ds-fg-on-accent` | active inset |
| disabled | paper surface | `--ds-fg-subtle` | opacity `.55` |

### 输入框

`--ds-bg-sunken` + `--ds-shadow-inset`，1px `--ds-border`，圆角 `--ds-radius-sm`。placeholder 用 `--ds-fg-subtle`，focus 叠加 `--ds-focus-ring`。

### 卡片

纸面卡使用 `--ds-bg-elevated`，轻微底部渐变，1px `--ds-border`，`--ds-shadow-md`。正文只放在低纹理面上。

### 徽章 / 标签

语义 `-bg` / `-fg` 组合，药丸圆角，轻 bevel。不要只靠颜色表达状态，搭配文字或图标。

### 提示条

浅语义底 + 语义文字 + inset 图标坑。提示条本身可带轻投影，但不要使用大面积皮革纹理承载正文。

### 导航

Tabs 坐在压印槽中；选中项像被按进皮革，文字转 primary。侧栏项 hover 才凸起，当前项 inset。

### 表格

表头用 `--ds-bg-subtle`，行分隔用 `--ds-border`。表格不使用大量阴影，避免密集信息变脏。

### Gel Button

必须有顶部高光 `rgba(255,255,255,.6)`、solid 主色渐变、下缘柔和内阴影、1px bevel 和 pressed inset。

### Brushed-Metal Toggle

轨道使用横向亮暗条纹 + 顶部高光；滑块使用金属渐变和 bevel。开启态仍保留金属质感，只把底色切到 primary。

---

## 10. 可访问性

- 亮色 `--ds-fg` on `--ds-bg`、`--ds-bg-elevated` 满足 AA；暗色 `--ds-fg` on `--ds-bg`、`--ds-bg-elevated` 也满足 AA。
- `--ds-fg-muted` 用于次信息；长正文优先 `--ds-fg`。
- `--ds-fg-subtle` 只放辅助标签、短占位或非关键说明。
- 暗色主按钮文字使用 `#08142e` 落在 `#5d97f0` 上，符合 AA，不能改成白字。
- 焦点环固定为 `0 0 0 2px var(--ds-bg),0 0 0 4px var(--ds-focus)`。
- 触控目标 ≥44px。
- 图片叠字必须有 scrim；正文不要压在忙碌纹理或照片上。

---

## 11. Do / Don't

**Do**
- 用皮革 / 木纹 / 毛毡做容器，用纸面承载正文。
- 给按钮做真实高光、内阴影和 pressed 状态。
- 在开关、滑块、图槽上使用 inset 表达物理凹陷。
- 保持纹理低透明度，优先可读性。
- 用 serif 只做少量 letterpress 标签。

**Don't**
- 不要把所有面板都铺满高对比纹理。
- 不要回到 08 Neumorphism 的单色软挤出；Skeuo 必须有丰富材料、色彩、光泽和边缘。
- 不要在照片或皮革纹理上直接放正文。
- 不要用过大圆角和纯双向阴影替代真实材质。
- 不要为了拟物添加无功能装饰件。
- 不要把暗色主按钮文字改成白色。

---

## 12. 如何接入

### CSS

```html
<link rel="stylesheet" href="styles/32-skeuomorphism/tokens.css">
```

组件中只消费固定变量：

```css
.button {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  box-shadow: var(--ds-shadow-md);
}
```

### Tailwind

```js
module.exports = {
  presets: [require('./styles/32-skeuomorphism/tailwind.preset.js')],
};
```

再在入口加载：

```js
import './styles/32-skeuomorphism/tokens.css';
```

### 主题

```html
<html data-theme="dark">
```

或使用 `.dark` 类。变量名不要改，项目只替换 token 值或组件层样式。
