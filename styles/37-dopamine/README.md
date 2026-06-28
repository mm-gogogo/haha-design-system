# Dopamine · 多巴胺撞色设计系统

> 高饱和色块、巨型圆润标题、贴纸徽章和粗粒度胶囊按钮组成的 joyful maximalist kit。适合需要第一眼就有能量、但仍保持可读和可接入的消费级体验。

---

## 1. 一句话气质

像一家名叫 Burst Bar 的虚构果汁吧发布夏日 drop：整屏 tangerine、lime、cyan、violet、sunshine 色块切分版面，标题大到像招牌，按钮像厚贴纸，正文始终落在 AA 对比的清晰表面上。

---

## 2. 设计哲学 / 性格

Dopamine 继承基础系统的固定 `--ds-*` 契约、4px 间距、Quicksand / Inter 本地字体栈、亮暗双主题、焦点环和移动端展示；改的是视觉气质和版面强度。

1. **大色块先行**：用 2-4 个大面积高饱和色块建立情绪，不靠小碎片堆热闹。
2. **巨型圆润标题**：标题用 Quicksand 最重字重，允许逐词换色，但必须可换行、不可横向溢出。
3. **贴纸化组件**：按钮、徽章、卡片使用大圆角、粗描边和 hard offset shadow，形成可触摸的厚度。
4. **饱和但有秩序**：品牌色、状态色和装饰色分工清晰；正文色只用 `--ds-fg`、`--ds-fg-muted` 或明确的 on-color 组合。
5. **快乐而可控**：动效可以有轻弹和 bob/pop，但必须受 `prefers-reduced-motion` 控制。

---

## 3. 何时用 / 何时别用

**适合**

- 果汁吧、音乐节、潮鞋 drop、创作者基金、生活方式活动等需要强记忆点的消费场景。
- 发布页、campaign dashboard、会员任务、移动端社区、轻量运营后台。
- 需要高能、年轻、乐观、丰富，但不想落入 80s confetti 或 comic pop-art 的品牌体验。

**不适合**

- 医疗、金融、政务、法务等需要低刺激和长时间审阅的业务。
- 大型数据分析、文档阅读、复杂审批流等高密度生产力界面。
- 追求柔软粉彩、复古 Memphis 几何纸屑、漫画 Ben-Day、平静插画感的项目。

---

## 4. 颜色

强调色梯度（亮）：`primary #e6187f -> hover #cc1570 -> active #b01160`，主操作文字为白色。亮色 `primary` 适合大字、图形和填充；正文尺寸按钮可使用 `primary-hover` 保持 AA。暗色主题是 neon dopamine night：`primary #ff4d9e` 搭配深色文字 `#2a0414`，这是有意设计。

### 表面与文字

| Token | 亮 | 暗 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#fdf4ec` | `#161018` | 主背景，暖奶油底让饱和块跳出 |
| `--ds-bg-subtle` | `#f6e7d8` | `#1e1622` | 分组底、弱面 |
| `--ds-bg-elevated` | `#ffffff` | `#251a2a` | 卡片、弹层、正文承载面 |
| `--ds-bg-sunken` | `#f0dcc8` | `#0e0a10` | 输入槽、代码块 |
| `--ds-fg` | `#1f1320` | `#f6ecf6` | 主文字 |
| `--ds-fg-muted` | `#4f3f50` | `#c0a8c4` | 次要文字 |
| `--ds-fg-subtle` | `#6f5f70` | `#8e7a92` | 占位、弱说明 |
| `--ds-fg-on-accent` | `#ffffff` | `#2a0414` | 强调面上的文字 |
| `--ds-border` | `#ecd9c8` | `#382a3e` | 常规描边 |
| `--ds-border-strong` | `#1f1320` | `#f6ecf6` | 粗描边、offset shadow 参照 |

### 品牌与强调

| Token | 亮 | 暗 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#e6187f` | `#ff4d9e` | 主操作、选中 |
| `--ds-primary-hover` | `#cc1570` | `#ff66ad` | hover |
| `--ds-primary-active` | `#b01160` | `#f03a8e` | active |
| `--ds-primary-fg` | `#ffffff` | `#2a0414` | 主操作文字 |
| `--ds-accent` | `#7b2ff0` | `#a36bff` | 链接、次强调 |
| `--ds-accent-fg` | `#ffffff` | `#16002e` | accent 上文字 |

### 语义状态

| 状态 | 主色（亮 / 暗） | 背景 `-bg`（亮 / 暗） | 背景上文字 `-fg`（亮 / 暗） |
|---|---|---|---|
| success | `#1f8a4c` / `#5fd38a` | `#e2f3e8` / `#0e2a18` | `#0c3a20` / `#c9f5d8` |
| warning | `#b5790a` / `#f0c050` | `#f8edcf` / `#241a06` | `#43300a` / `#f6e6be` |
| danger | `#e0322a` / `#ff6a5e` | `#fbe2df` / `#2a0e0a` | `#5a120d` / `#ffd6d0` |
| info | `#1f6fe0` / `#6a9aff` | `#e2ebfb` / `#0c1c3a` | `#0e2c5e` / `#d6e4ff` |

### Colour-Block Brights

These are fills only, not body text colors: tangerine `#ff7a1a` / `#ff8c3a`, lime `#7fce00` / `#a6e83a`, cyan `#14c6e0` / `#3ad6ea`, violet `#8b3bff` / `#b07aff`, sunshine `#ffc400` / `#ffd34d`. Put text on these blocks in white or near-black only after checking AA: body text >= 4.5:1, large display text >= 3:1.

---

## 5. 字体

- **Sans**：`"Quicksand","Inter",-apple-system,"PingFang SC",sans-serif`。Quicksand supplies rounded chunky display forms; Inter in the stack keeps UI body text stable.
- **Mono**：`"JetBrains Mono",monospace`。用于 token 名、数字和技术标签。
- **比例尺**：12 / 13 / 14 / 16 / 20 / 24 / 32 / 48px，继承 24 的共享基线。
- **字重**：500 / 600 / 700。Hero 和色块标题使用 700；正文 500；按钮、标签、KPI 使用 700。
- **字距**：`tight 0`、`normal 0.01em`。不使用负字距，避免圆体挤压。
- **中文适配**：中文标题保持短句和主动换行；大标题用 `clamp()`，390px 宽度下不得产生横向滚动。

---

## 6. 间距与布局

- **比例尺**：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96。
- **容器**：preview 使用 1120px 主容器；大色块可 full-bleed 到容器边缘，但内部内容保留 20-48px padding。
- **构图**：2-4 个大色块组成一屏节奏；卡片和表单继续用清晰栅格，防止 maximalism 破坏可扫读性。
- **响应式**：标题和色块使用 `clamp()`、`minmax()`、`overflow-wrap:anywhere`；390px 移动端无横向溢出。
- **色块文本**：大号标题可放在饱和色块上，正文优先放在白色或深色贴纸面上。

---

## 7. 圆角 / 阴影 / 描边

| Token | 值 | 说明 |
|---|---|---|
| `--ds-radius-sm` | `10px` | 输入框、小标签、菜单项 |
| `--ds-radius-md` | `18px` | 卡片、菜单、Toast |
| `--ds-radius-lg` | `28px` | Hero、色块面板、大弹层 |
| `--ds-radius-full` | `9999px` | 胶囊按钮、头像、徽章 |

- **描边**：关键交互用 `2px solid var(--ds-border-strong)`；色块卡片用强描边约束高饱和面。
- **阴影**：亮色为 hard offset：`0 2px 0`、`4px 4px 0`、`8px 8px 0`。暗色用黑色透明 hard offset，保持夜间厚度。
- **形状**：贴纸、blob、burst 可以不规则，但文字容器必须有稳定边界和足够 padding。

---

## 8. 动效

- **时长**：fast 200ms / base 260ms / slow 320ms，继承 24。
- **曲线**：`cubic-bezier(.34,1.56,.64,1)`，轻微回弹，适合 pill button 和 sticker pop。
- **典型动效**：按钮 hover 上移 1-2px、贴纸 badge 慢速 bob、色块卡片 hover 小幅抬升。
- **减弱动效**：`prefers-reduced-motion: reduce` 下关闭 bob、pop、旋转和位移，仅保留必要颜色变化。

---

## 9. 组件规格

### 按钮

| 变体 | 背景 | 文字 | 边框 | hover | active | disabled |
|---|---|---|---|---|---|---|
| primary | `--ds-primary-hover` for body labels, `--ds-primary` for large display fills | `--ds-primary-fg` | 2px `--ds-border-strong` | `--ds-primary-active` + shadow 加深 | `--ds-primary-active` + 下压 | 50% 透明 |
| secondary | `--ds-bg-elevated` | `--ds-fg` | 2px `--ds-border-strong` | `--ds-bg-subtle` | shadow 收短 | 50% 透明 |
| tertiary | 透明 | `--ds-fg-muted` | 2px transparent | subtle 底 | subtle 底加深 | 50% 透明 |
| danger | `--ds-danger` | 白色 | 2px `--ds-border-strong` | 加深 | 下压 | 50% 透明 |

尺寸：sm 32px / md 40px / lg 48px；触控命中区至少 44px，圆角为 `--ds-radius-full`。

### 输入框

- 高 40px，圆角 `--ds-radius-sm`，底 `--ds-bg-elevated`，边 `2px solid var(--ds-border-strong)`。
- focus 使用 `--ds-focus-ring`，边框转 `--ds-primary`。
- 错误态使用 `--ds-danger` 边框与 `--ds-danger-fg` 文案。

### 卡片

- 底 `--ds-bg-elevated` 或单一饱和色块，边 `2px solid var(--ds-border-strong)`，圆角 `--ds-radius-md`，阴影 `--ds-shadow-md`。
- 色块卡可用 tangerine / lime / cyan / violet / sunshine，但正文应使用白色或近黑，并通过对比检查。

### 徽章 / 标签

- 圆角 `full`，字号 xs/sm，字重 700。
- 品牌徽章用 primary / accent；状态徽章用 `<state>-bg` + `<state>-fg`。
- sticker badge 可用 inline SVG blob / burst，不用表情符号图标。

### Alert

- 四态使用 `<state>-bg`、`<state>-fg`、`<state>` 描边。
- 配内联 SVG 图标和明确文案，不能只靠颜色表达状态。

### 导航

- 顶栏使用 `--ds-bg` 半透明或实色，底边 `--ds-border-strong`。
- Tab 选中项用 primary 胶囊或 hard-shadow pill；移动端导航按钮保持 44px 命中区。

---

## 10. 可访问性

- **对比度**：亮暗主题的 `--ds-fg` / `--ds-bg`、主按钮、accent、状态底文字组合按 WCAG AA 设计；亮色 `--ds-primary` + 白字只用于大字或非正文尺寸展示。
- **色块文字**：tangerine、violet、primary 等深/中深色块用白字；lime、cyan、sunshine 等亮色块用 `#1f1320` 或暗色近黑。正文 >= 4.5:1，大字 >= 3:1。
- **焦点**：统一 `--ds-focus-ring`，交互元素不得被父级裁切焦点环。
- **触控**：按钮、菜单项、底部 tab、图标按钮命中区 >= 44px。
- **动效**：所有 bob/pop/rotate/translate 都受 `prefers-reduced-motion` 控制。
- **信息表达**：状态组件同时使用颜色、图标和文本。

---

## 11. Do / Don't

**Do**

- 用大面积饱和色块建立第一眼识别，而不是撒满小图形。
- 让每个色块只承担一个清晰信息层级：hero、CTA、KPI、卡片组或活动段落。
- 用 Quicksand 700 做巨大圆润标题，并允许单词级换色。
- 把正文放在白色、深色或已验证 AA 的贴纸面上。
- 用 inline SVG 做 sticker、blob、starburst、badge 图形。
- 在移动端主动换行，保证 390px 宽度无横向滚动。

**Don't**

- 不要把高饱和等同于低对比；文字必须先过 AA。
- 不要回到 01-cute 的软糖粉彩和柔影。
- 不要保留 24-memphis 的 squiggle、confetti、terrazzo、80s 几何纸屑。
- 不要做成 28-pop-art 的漫画框、Ben-Day 点或拟声词。
- 不要把所有组件都涂满不同颜色；色块要大、少、稳定。
- 不要使用外链字体、CDN 图标库、表情符号图标或第三方设计复制。

---

## 12. 如何接入

```html
<link rel="stylesheet" href="./styles/37-dopamine/tokens.css" />
```

```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border: 2px solid var(--ds-border-strong);
  border-radius: var(--ds-radius-full);
  box-shadow: var(--ds-shadow-md);
  font-family: var(--ds-font-sans);
  font-weight: var(--ds-weight-bold);
  transition:
    transform var(--ds-dur-fast) var(--ds-ease),
    background var(--ds-dur-fast) var(--ds-ease),
    box-shadow var(--ds-dur-fast) var(--ds-ease);
}
```

```js
// tailwind.config.js
module.exports = {
  presets: [require("./styles/37-dopamine/tailwind.preset.js")]
};
```

暗色主题可用任一方式驱动：

```html
<html data-theme="dark">
<html class="dark">
```
