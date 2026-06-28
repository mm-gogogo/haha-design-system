# Constructivism 构成主义 · 设计系统 Kit

> 旧纸米色、红黑强对比、斜向构成、粗黑规则线与红黑双色照片拼贴。适合虚构的 **Signal Yard Print Co-op**：一间为路线海报、咖啡窗口菜单、字样样张和站台通知服务的印刷合作社。

---

## 1. 一句话气质

Constructivism Kit 是一套 1920s agitprop poster 灵感的界面语言：红色楔形、黑色横杆、旧纸底、硬偏移阴影、重型 grotesque 标题和红黑 photomontage 共同制造推进感。
它不是 23-bauhaus 的蓝红黄基础形和教学秩序，也不是 20-swiss 的冷静正交栅格；它必须读成红黑、斜切、压迫、快速、印刷味很重的构成主义海报系统。

适合：印刷合作社、字体样张室、交通运营工具、展览导视、咖啡俱乐部会员系统、海报档案、文化活动后台、需要高识别度且仍可用的内容密集界面。

---

## 2. 设计哲学 / 性格

1. **斜线驱动视线**：红色楔形和黑色斜杆是结构，不是贴纸。它们负责导向主行动、分割层级和制造运动感。
2. **黑线压住版面**：3px 粗规则线、硬边框和 offset shadow 是骨架，替代柔和阴影、玻璃和渐变。
3. **照片必须印刷化**：图片进入红黑双色、强对比、粗裁切的 photomontage 语境，不使用自然照片的柔和情绪。
4. **红色谨慎承载文字**：红底只放大号、加粗、短标签；正文永远落在 cream/ink 或 ink/cream 组合上。
5. **非对称但可读**：布局可以强烈偏置、旋转、切入，但文本区域必须保持清晰扫描路径。

**与 Geist 基底的关系**：
- **继承**：固定 `--ds-*` 变量契约、亮暗双主题、状态色成对、焦点环、4px spacing、字体比例尺、Tailwind preset 结构。
- **改动**：主色换为构成主义红，accent 换为黑/cream，圆角收紧，阴影改为硬偏移，视觉层加入斜切楔形、粗规则线、星形/齿轮/喇叭 motif 和 duotone photomontage。

---

## 3. 何时用 / 何时别用

**适合用**
- 交通、导视、站台通知、票务、路线图和运营看板
- 印刷工坊、字体样张室、海报档案、文化活动系统
- 咖啡俱乐部、会员通知、短促行动导向的活动页
- 需要强烈红黑识别、厚重印刷感和动态非对称的界面

**不建议用**
- 严肃金融、医疗、政府办事等需要低情绪和制度稳定感的场景
- 儿童娱乐、疗愈、奢侈品、婚礼等需要柔软或轻盈情绪的品牌
- 已经有大面积彩色摄影、渐变、玻璃、柔影的成熟产品
- 长篇阅读为主且需要长时间低刺激阅读的内容站

---

## 4. 颜色

颜色一律走语义 token，组件内不硬编码 hex。亮暗两套自动随 `[data-theme="dark"]` / `.dark` 切换。红色是行动和构成色，不是正文底色。

### 表面与文字

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-bg` | `#ece4d3` | `#15120e` | 主背景：旧纸米色 / 夜间油墨底 |
| `--ds-bg-subtle` | `#e0d6c0` | `#1c1813` | 区块底、分组背景 |
| `--ds-bg-elevated` | `#f7f1e3` | `#221d16` | 卡片、顶栏、弹层 |
| `--ds-bg-sunken` | `#d4c8ac` | `#0d0b08` | 输入槽、代码块、纸张压痕 |
| `--ds-fg` | `#1a1714` | `#f0e8d6` | 主文字 |
| `--ds-fg-muted` | `#4a4339` | `#b4a890` | 次要正文、说明 |
| `--ds-fg-subtle` | `#6e6454` | `#847a64` | 弱元信息，仅用于非正文或较大文字 |
| `--ds-fg-on-accent` | `#f7f1e3` | `#fff8ec` | 深色/强强调背景上的文字 |
| `--ds-border` | `#c9bb9c` | `#342d22` | 常规描边 |
| `--ds-border-strong` | `#1a1714` | `#f0e8d6` | 粗规则线、结构线、强分隔 |

### 品牌与强调

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-primary` | `#c1271f` | `#e0392c` | 主操作、红色楔形、当前态 |
| `--ds-primary-hover` | `#a51f18` | `#ec4d40` | primary hover |
| `--ds-primary-active` | `#8a1812` | `#cf2e22` | primary active / pressed |
| `--ds-primary-fg` | `#f7f1e3` | `#fff8ec` | primary 上的大号加粗文字 |
| `--ds-accent` | `#1a1714` | `#f0e8d6` | 黑/cream 强强调、横杆、链接 |
| `--ds-accent-fg` | `#f7f1e3` | `#15120e` | accent 实底上的文字 |

**强调梯度**：
- Red primary：`#f6e0dc` -> `#c1271f` -> `#8a1812`
- Night red：`#2a0c08` -> `#e0392c` -> `#cf2e22`
- Ink accent：`#1a1714` / `#f0e8d6` 随主题反转。

### 语义状态

| 角色 | 主色（亮 / 暗） | 浅底（亮 / 暗） | 底上文字（亮 / 暗） |
|---|---|---|---|
| Success | `#3a6b2e` / `#6fbf6f` | `#e6efe0` / `#102a10` | `#13310e` / `#cdeec0` |
| Warning | `#9a6a14` / `#e0b35a` | `#f4e8cf` / `#241a06` | `#43300a` / `#f6e6be` |
| Danger | `#c1271f` / `#e0392c` | `#f6e0dc` / `#2a0c08` | `#5a120c` / `#f8d6cf` |
| Info | `#1f4a6b` / `#5a9fd0` | `#e0e9f0` / `#0a2030` | `#0c2436` / `#d6e8f5` |

---

## 5. 字体

- **Sans（UI / 正文 / 标题）**：`"Inter", -apple-system, "PingFang SC", sans-serif`。Inter 的紧凑字面适合 heavy grotesque 标题和中英文混排。
- **Serif（可选）**：`"Noto Serif", serif`，只用于长引文或档案说明，不参与主视觉。
- **Mono（编号 / 标语 / 路线）**：`"JetBrains Mono", monospace`。用于路线号、打样编号、uppercase slogan strip 和表格数字。

**比例尺**：`xs 12 · sm 13 · base 14 · md 16 · lg 20 · xl 24 · 2xl 32 · 3xl 48`（px）。

**字重**：`400` 正文 / `500` 辅助强调 / `600` token bold；大标题和海报式 H1 可在组件层使用 `800-900`。

**字距**：沿用 token：`--ds-tracking-tight: -0.02em`、`--ds-tracking-normal: 0`。正文和中文不额外压缩；斜向大标题、按钮、slogan strip 可用 uppercase 与 tight tracking。

---

## 6. 间距与布局

- **比例尺**（4px 基）：`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`px，对应 `--ds-space-1 ~ 12`。
- **节奏**：控件内 8-16px，卡片内 24px，区块间 48-96px；用粗线、斜切和色块制造层级。
- **容器宽**：主内容建议 `max-width: 1100px`；长文 `680-760px`。
- **栅格**：可以从正交网格起步，但必须通过 12-28 度斜线、楔形和错位块制造动态。
- **几何系统**：红 wedge 指向主行动；黑 bar 切分层级；circle/star/gear/megaphone motif 用作品牌信号，不承载长文本。
- **Photomontage**：照片使用 grayscale + contrast + red/black blend；文字必须落在 scrim 或 cream/ink 上。

---

## 7. 圆角 / 阴影 / 描边

**圆角**

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `0px` | 按钮、输入、徽章 |
| `--ds-radius-md` | `0px` | 卡片、菜单、表格框 |
| `--ds-radius-lg` | `2px` | 大表面、modal、hero frame |
| `--ds-radius-full` | `9999px` | 圆形几何、头像、开关圆点 |

**阴影 / 深度**

| Token | 亮色 | 暗色 | 用途 |
|---|---|---|---|
| `--ds-shadow-sm` | `2px 2px 0 var(--ds-border-strong)` | `2px 2px 0 var(--ds-border-strong)` | 小组件硬偏移 |
| `--ds-shadow-md` | `4px 4px 0 var(--ds-border-strong)` | `4px 4px 0 var(--ds-border-strong)` | 下拉、卡片 hover |
| `--ds-shadow-lg` | `8px 8px 0 var(--ds-border-strong)` | `8px 8px 0 rgba(0,0,0,.6)` | hero、modal、强框 |

描边是本风格的骨架：常规组件 2px，关键区块 3px，黑/cream 强线随主题切换。不要加入柔和 drop-shadow。

---

## 8. 动效

- **时长**：`fast 150ms` / `base 200ms` / `slow 250ms`，沿用 Bauhaus 的功能性节奏。
- **曲线**：`cubic-bezier(.22,.61,.36,1)`，干净、短促、机械。
- **典型过渡**：按钮颜色、边框色、硬阴影位移、菜单入场、tab 当前态。
- **几何动效**：斜切块可以短促滑入或压入，但不弹跳、不漂浮、不连续旋转。
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
| Primary | `--ds-primary` | `--ds-primary-fg` | 2px transparent | 主操作，必须 15px 以上且加粗 |
| Secondary | `--ds-bg` | `--ds-fg` | 2px `--ds-border-strong` | 次操作 |
| Tertiary | transparent | `--ds-fg-muted` | transparent | 工具栏 / 弱操作 |
| Danger | `--ds-danger` | `--ds-accent-fg` 或大号文字 | transparent | 危险操作 |

尺寸：sm `32px` / md `40px` / lg `48px`。全部方角、uppercase 或短中文命令、focus 使用 `--ds-focus-ring`。

### 输入框 Input / Textarea / Select

高 40px，`2px --ds-border-strong`，底 `--ds-bg`，文字 `--ds-fg`，placeholder 使用 `--ds-fg-muted`。Focus 转 `--ds-primary` + `--ds-focus-ring`；error 边框 `--ds-danger`。

### 卡片 Card

底 `--ds-bg-elevated`，2px 强描边，内边距 24px，硬偏移阴影。可点击卡 hover 可加强 shadow，不做柔和浮起。

### 徽章 Badge

小字徽章优先使用 `*-bg` + `*-fg`。红色主徽章使用红色描边和浅红底，避免小字落在红底上。

### 提示条 Alert

浅底 + 语义文字 + 2px 语义边框 + 内联 SVG 图标。状态不能只靠颜色表达，必须有标题与文本。

### 导航 Navigation

顶栏高 56-64px，底 `--ds-bg-elevated`，3px 强底线。当前项用红色条标记；wordmark 用 heavy uppercase 或中英文短名。

### 表格 Table

表头 `--ds-bg-subtle`，行分隔 `--ds-border`，数字列 `font-mono + tabular-nums + right align`。小屏横滑，不压缩到不可读。

### 叠层组件 Overlay

Dropdown / Modal / Toast 使用 `--ds-bg-elevated` + 强 keyline + hard offset shadow。Modal 最大宽 440px，进入动效短促。

---

## 10. 可访问性

- **正文对比度**：亮色 cream + ink、暗色 night + cream 满足 WCAG AA；正文使用 `--ds-fg` 或 `--ds-fg-muted`。
- **红色限制**：红底按钮只放大号、加粗、短标签，满足 large-text AA；正文不放在红底上。
- **小字策略**：小号元信息使用 `--ds-fg-muted`；`--ds-fg-subtle` 仅用于弱辅助、非正文或较大文字。
- **状态色**：alert/badge 使用 `*-bg` + `*-fg` 组合，并配图标和文本，不只靠颜色。
- **焦点**：所有可聚焦控件使用 `var(--ds-focus-ring)`，红色焦点在两主题中都可见。
- **触控目标**：移动端按钮、icon button、tab bar 项建议 ≥44px。
- **动效减弱**：遵守 `prefers-reduced-motion`。

---

## 11. Do / Don't

**Do**
- 用红色楔形和黑色斜杆建立信息方向。
- 把旋转形状限制在 `overflow:hidden` 容器内，避免移动端横向溢出。
- 让照片变成红黑双色拼贴，而不是自然摄影展示。
- 保持正文在 cream/ink 或 ink/cream 上，保证长文本清晰。
- 用 heavy grotesque 标题、Mono 编号和粗规则线形成海报语气。
- 明确区别于 Bauhaus 的 playful primary shapes 和 Swiss 的冷静正交网格。

**Don't**
- 不要把红底当正文容器，尤其不要放小号、细字重文字。
- 不要加入蓝黄基础形，否则会滑回 Bauhaus。
- 不要把所有内容都旋转；文本主体必须稳定可读。
- 不要使用真实政治口号、历史组织名或第三方海报文案。
- 不要使用柔和阴影、玻璃、渐变光斑或圆角卡片风。
- 不要删除或改名任何 `--ds-*` token。

---

## 12. 如何接入

**1) 引入 tokens.css**

```html
<link rel="stylesheet" href="./styles/33-constructivism/tokens.css" />
```

```js
import "./styles/33-constructivism/tokens.css";
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
  font: var(--ds-weight-bold) max(15px, var(--ds-text-base)) / 1 var(--ds-font-sans);
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
  presets: [require("./styles/33-constructivism/tailwind.preset.js")],
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
};
```

仍需在入口引入 `tokens.css` 提供变量。之后即可使用 `bg-bg`, `bg-bg-elevated`, `text-fg`, `border-border-strong`, `bg-primary`, `text-primary-fg`, `shadow-lg` 等映射。

---

*Constructivism Kit · 示例实体 Signal Yard Print Co-op / 红黑拼贴系统 REDLINE MONTAGE · 固定变量契约见 `_base/KIT-TEMPLATE.md`*
