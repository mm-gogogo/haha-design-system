# Film Noir · 黑色电影 (Cinematic) 设计系统

> 高反差黑白 + 单一暖色强调，威尼斯百叶阴影、key-light / vignette、场记板、细颗粒与深红霓虹。给复映影院、爵士俱乐部、侦探播客与电影节档案页使用。**暗为主。**

---

## 1. 一句话气质

Film Noir 是一套暗为主的电影化设计系统：夜色作为舞台，象牙白文字像字幕，烟熏琥珀承担行动，深红只在片头、警示和霓虹线索中出现。示例品牌为原创的 **Nocturne House** 复映影院 / 爵士俱乐部，不复刻任何第三方电影或品牌。

---

## 2. 设计哲学 / 性格

1. **可读性先于情绪。** 黑色电影不是把界面压暗到看不清；正文永远用 `--ds-fg` 落在 `--ds-bg` 上。
2. **光是叙事工具。** hero 使用 key-light 径向光、vignette 与 venetian-blind stripes，让光线切开界面。
3. **琥珀负责行动，深红负责线索。** `--ds-primary` 用于按钮 / 当前态；`--ds-accent` 只给大号、加粗、戏剧化的文字或霓虹点缀。
4. **锐利、低圆角、强描边。** 圆角 1 / 2 / 4px，像票根、档案夹和场记板。
5. **从 Luxury / Newspaper / Swiss 中区分出来。** Noir 不是安静奢侈、不是报纸排版、也不是冷静网格；它是高反差、戏剧光、百叶阴影和夜场气氛。

---

## 3. 何时用 / 何时别用

**适合：**
- 复映影院、电影节专题、午夜放映、影迷会员系统
- 爵士俱乐部、黑胶夜、侦探播客、犯罪纪实栏目
- 需要戏剧感但仍要清晰售票 / 排片 / 档案阅读的体验

**不适合：**
- 日间亲子、教育、医疗、政务等需要明亮亲和的场景
- 信息密度极高的企业后台或安静网格系统
- 需要彩色、多品牌、多情绪表达的营销活动
- 以黄金留白表达高级感的奢侈品牌页

---

## 4. 颜色

语义 token 名固定为 `--ds-*`。本风格默认即暗色。

### 暗（默认 · `:root` / `[data-theme="dark"]` / `.dark`）

| Token | 取值 | 用途 |
|---|---|---|
| `--ds-bg` | `#0c0c0e` | noir night 主背景 |
| `--ds-bg-subtle` | `#141416` | 分组 / 次背景 |
| `--ds-bg-elevated` | `#1a1a1d` | 卡片 / 菜单 / 弹层 |
| `--ds-bg-sunken` | `#060607` | 输入槽 / 深阴影 |
| `--ds-fg` | `#ece9e2` | 正文 / 标题，16.12:1 |
| `--ds-fg-muted` | `#a8a59c` | 次级正文，7.94:1 |
| `--ds-fg-subtle` | `#79766d` | 非正文弱提示 / swatch 展示 |
| `--ds-fg-on-accent` | `#1a1206` | 琥珀底文字 |
| `--ds-border` | `#2a2a2d` | 常规描边 |
| `--ds-border-strong` | `#ece9e2` | 强描边 / 高光线 |
| `--ds-primary` | `#d9a441` | smoky amber 主操作 |
| `--ds-primary-hover` | `#e6b357` | hover |
| `--ds-primary-active` | `#c8923a` | active |
| `--ds-primary-fg` | `#1a1206` | 主按钮文字，8.24:1 |
| `--ds-accent` | `#c83a30` | crimson neon，大号 / 加粗强调 |
| `--ds-accent-fg` | `#ffffff` | accent 底文字 |

### 亮（`[data-theme="light"]` / `.light` · high-key paper dossier）

| Token | 取值 | 用途 |
|---|---|---|
| `--ds-bg` | `#f2f0ea` | 纸面档案主背景 |
| `--ds-bg-subtle` | `#e7e4db` | 次背景 |
| `--ds-bg-elevated` | `#fbfaf5` | 卡片 / 弹层 |
| `--ds-bg-sunken` | `#dcd8cd` | 输入槽 |
| `--ds-fg` | `#16140f` | 正文 / 标题，16.15:1 |
| `--ds-fg-muted` | `#4a463c` | 次级正文，8.25:1 |
| `--ds-fg-subtle` | `#6e695c` | 弱提示，4.80:1 |
| `--ds-fg-on-accent` | `#ffffff` | 深色底文字 |
| `--ds-border` | `#cfc9bb` | 常规描边 |
| `--ds-border-strong` | `#16140f` | 强描边 |
| `--ds-primary` | `#8a5a14` | dossier amber 主操作 |
| `--ds-primary-hover` | `#76490f` | hover |
| `--ds-primary-active` | `#5f3b0a` | active |
| `--ds-primary-fg` | `#ffffff` | 主按钮文字，5.91:1 |
| `--ds-accent` | `#b3302a` | crimson accent |
| `--ds-accent-fg` | `#ffffff` | accent 底文字 |

### 语义状态

| | 暗 主色 | 暗 -bg | 暗 -fg | 亮 主色 | 亮 -bg | 亮 -fg |
|---|---|---|---|---|---|---|
| success | `#6aaf6a` | `#0e220e` | `#cde6cd` | `#2f7a3a` | `#e4f0e2` | `#103a14` |
| warning | `#d9a441` | `#241a06` | `#f6e6c2` | `#8a5a14` | `#f4e8cf` | `#3e2a08` |
| danger | `#e25a4e` | `#2a0c09` | `#f8d6d0` | `#b3302a` | `#f6e0dd` | `#511210` |
| info | `#8aa6c0` | `#0c1a26` | `#d6e6f2` | `#3a5a78` | `#e2e9f0` | `#11283a` |

强调梯度：dark `#d9a441 → #e6b357 → #c8923a`；light `#8a5a14 → #76490f → #5f3b0a`。Crimson 文本：dark `#c83a30` 在 `#0c0c0e` 上 3.82:1，只用于大号 / bold；light 为 5.46:1。

---

## 5. 字体

- `--ds-font-serif`: `"Noto Serif", Georgia, serif`。标题、hero、片头字幕、引用使用；它是本风格主角。
- `--ds-font-sans`: `"Inter",-apple-system,"PingFang SC",sans-serif`。正文、控件、表格、导航使用；标签可大写并加宽字距。
- `--ds-font-mono`: `"JetBrains Mono",monospace`。`REEL 03 · SC 12`、票号、场次、代码使用。

字号沿用 11-luxury：12 / 13 / 15 / 18 / 22 / 30 / 42 / 60px。字重 400 / 500 / 600；tracking 保持 `-0.02em` 与 `0`，额外大写标签可局部使用 `.06em–.28em`。

---

## 6. 间距与布局

- 间距比例：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96px。
- 容器：主内容 `1120px`；长文 `680px`。
- Hero：大面积戏剧光 + 一侧叙事文案 + 一侧本地灰阶图；百叶条纹覆盖背景但不压文字。
- 网格：组件展示保持清晰分区；桌面端允许剧照海报式大图，移动端保持单列和可横滑表格。

---

## 7. 圆角 / 阴影 / 描边

- 圆角：`sm 1px` / `md 2px` / `lg 4px` / `full 9999px`。主界面锐利，符合票根、场记板和档案纸气质。
- 阴影：dark `0 2px 6px rgba(0,0,0,.6)`、`0 10px 28px -8px rgba(0,0,0,.75)`、`0 28px 64px -16px rgba(0,0,0,.85)`；light 对应更轻的纸面阴影。
- 描边：常规 `--ds-border`；强光边用 `--ds-border-strong`；分隔线可从 amber 过渡到 crimson。

---

## 8. 动效

沿用 11-luxury：`--ds-ease: cubic-bezier(.22,.61,.36,1)`；fast 160ms、base 260ms、slow 380ms。动效以淡入、轻微位移、描边 / 背景变化为主，不做弹跳。`prefers-reduced-motion: reduce` 下动画和过渡降到 0.01ms。

---

## 9. 组件规格

**按钮**：sm 36 / md 44 / lg 52。Primary 用 amber 底 + `--ds-primary-fg`；secondary 透明 + 强描边；tertiary 文字按钮；danger 使用 danger 主色并配 `--ds-fg-on-accent`。

**输入框**：高 44，`--ds-bg-sunken` 底，1px `--ds-border`，focus 使用 `--ds-focus-ring`。placeholder 不承担正文信息。

**卡片**：`--ds-bg-elevated` + 1px 描边 + 2px 圆角。标题用 serif，meta 用 mono / uppercase，hover 只强化描边。

**徽章 / 标签**：高 24，锐角，小号 uppercase；primary 为 amber；outline 为 amber 描边；状态徽章使用 `-bg` / `-fg`。

**提示条 alert**：前置内联 SVG，语义浅底，1px 全描边；不使用 emoji，也不使用彩色左竖条。

**导航**：sticky 顶栏、tabs、breadcrumb 均使用 `--ds-*`；当前态用 amber，禁止小字号 crimson。

---

## 10. 可访问性

- 正文：dark `--ds-fg` / `--ds-bg` = 16.12:1；light = 16.15:1。
- 次级正文：dark `--ds-fg-muted` / `--ds-bg` = 7.94:1；light = 8.25:1。
- Dark `--ds-fg-subtle` 是 exact palette 值，主背景上约 4.30:1；正文和小号说明请用 `--ds-fg-muted`，subtle 用于非正文弱装饰或色板展示。
- Crimson：dark 上 3.82:1，只用于大号 / bold；light 上 5.46:1。正文链接不直接用小号 crimson。
- 所有交互控件有 `--ds-focus-ring`；按钮 / 输入高度 ≥44px；移动表格在 680px 以下横向滚动而不撑页面。
- 图片为本地素材并统一 `grayscale(1) contrast(1.1)`，不依赖远程资源。

---

## 11. Do / Don't

**Do**
- 让正文清楚，气氛交给背景光影。
- 使用百叶阴影、key-light、vignette、subtle grain 和场记板 motif。
- 用 amber 做主操作，用 crimson 做大号 / bold 戏剧强调。
- 让照片灰阶高反差化，像复映拷贝或档案照片。
- 保持锐角、强描边和 mono 场次编码。

**Don't**
- 不要为了 mood 牺牲对比度；看不清就不是 Noir。
- 不要让百叶条纹盖住正文或按钮。
- 不要把它做成 11-luxury 的金色极简，也不要做成 26-newspaper 的报纸排版。
- 不要用大面积 crimson 小字；不要把 accent 当正文链接色。
- 不要使用外部图片、外部字体或 emoji 图标。

---

## 12. 如何接入

**1) 引入 tokens.css**

```html
<link rel="stylesheet" href="styles/38-noir/tokens.css">
<link rel="stylesheet" href="_fonts/fonts.css">
```

**2) 只使用变量**

```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  font-family: var(--ds-font-sans);
}

.title-card {
  font-family: var(--ds-font-serif);
  color: var(--ds-fg);
}
```

**3) 主题切换**

```js
document.documentElement.dataset.theme = 'light'; // high-key paper dossier
document.documentElement.dataset.theme = 'dark';  // noir night
```

**4) Tailwind 项目**

```js
module.exports = {
  presets: [require('./styles/38-noir/tailwind.preset.js')]
}
```

```jsx
<button className="bg-primary text-primary-fg rounded-sm font-sans uppercase">
  预订午夜场
</button>
<h1 className="font-serif text-3xl tracking-tight">光越硬，谜越深。</h1>
```

*Film Noir Kit · 全部取值走 `var(--ds-*)` · 暗为主 · high-key dossier 亮主题 · 内联 SVG · 满足 WCAG AA 使用规则 · 素材全本地。*
