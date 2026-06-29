# 复古音响 · Hi-Fi / Vintage Audio

> 为虚构音响品牌 **声谷音响 · Vale Audio** 准备的 light-first 设计系统：香槟色拉丝铝面板、琥珀背光 VU 表、滚花旋钮、线性推子、分段电平灯、调谐频率刻度与胡桃木侧板共同组成温暖、精密、可操作的模拟 Hi-Fi 控制台。

---

## 1. 一句话气质 / One-line Mood

像一台 1970s/80s 立体声接收机的前面板：白天是香槟金属、清晰刻度和温暖木边，夜间切换到胡桃木与石墨黑控制台，保留琥珀仪表光和模拟机械反馈。

In one sentence: a modern interface dressed as a well-maintained vintage stereo receiver, precise enough for software, warm enough to feel collectible.

---

## 2. 设计哲学 / Philosophy

继承 base 契约的语义 token、状态色、间距、焦点环和明暗主题；改写视觉语言为 Vintage Audio：

1. **控制面板优先 / Control surface first**：界面像可调的接收机面板，关键操作落在旋钮、推子、拨钮、VU 表和调谐刻度上。
2. **轻主题为默认 / Light-first**：`--ds-bg` 是日间香槟金属底，不是暗色舞台。暗色只是夜间胡桃木 + 石墨控制台覆盖。
3. **纹理低对比 / Low-contrast material**：拉丝铝使用细密横向纹理，胡桃木只做外框或分区，不承载长正文。
4. **模拟反馈 / Analog feedback**：hover 是旋钮微转、灯点变亮、针表轻微回弹；动效短、克制、可关闭。
5. **精密但不冷 / Warm precision**：单元边角小、数字用等宽字、标尺细密，但主色是琥珀铜，避免未来感霓虹。

---

## 3. 何时用 / When To Use

**适合 / Good for**

- 音乐播放器、播客工具、音频工作站、设备控制台。
- 复古消费电子、收藏品管理、创作者控制面板。
- 需要温暖、可靠、模拟手感的 light-first 产品。
- 有大量状态、刻度、数值、音量、频率、电平的界面。

**别用 / Avoid for**

- 极高密度后台、纯文档阅读器、法律或医疗合规系统。
- 需要完全无装饰、无材质暗示的企业管理界面。
- 想要科幻数字发光、玻璃霓虹或高亮塑料质感的产品。
- 无法投入组件细节的项目；旋钮、表盘、刻度需要一致实现。

---

## 4. 颜色 / Color

亮色是香槟拉丝铝面板；暗色是胡桃木 + 石墨黑夜间控制台。胡桃木侧板建议使用装饰色 `#5a3d28`（亮色）与 `#3a2718`（暗色），不要加入 `--ds-*` token。

### 表面与文字 / Surfaces & Text

| Token | Light | Dark | 用途 / Use |
|---|---|---|---|
| `--ds-bg` | `#e7e5df` | `#1a1816` | 页面主背景 / receiver body |
| `--ds-bg-subtle` | `#dcd9d1` | `#221f1c` | 面板分组、轨道底 / grouped bands |
| `--ds-bg-elevated` | `#f4f2ec` | `#2a2622` | 卡片、抬起控制区 / raised faceplate |
| `--ds-bg-sunken` | `#cdcabf` | `#131110` | 输入槽、表盘井、推子槽 / wells and tracks |
| `--ds-fg` | `#26241f` | `#ece6da` | 主文字 / primary text |
| `--ds-fg-muted` | `#54514a` | `#b0a99b` | 次文字、标签 / secondary labels |
| `--ds-fg-subtle` | `#57544c` | `#938d82` | 弱标签、刻度辅助 / subtle markings |
| `--ds-fg-on-accent` | `#ffffff` | `#1a0f02` | 强色面文字 / text on strong fills |
| `--ds-border` | `#bcb9af` | `#36312b` | 常规描边 / standard divider |
| `--ds-border-strong` | `#8f8c82` | `#4d463e` | 面板边、硬件边 / hardware edge |

### 品牌与强调 / Brand & Accent

| Token | Light | Dark | 用途 / Use |
|---|---|---|---|
| `--ds-primary` | `#a8621a` | `#e0962f` | 琥珀铜主操作、仪表光 / amber copper primary |
| `--ds-primary-hover` | `#925416` | `#eaa648` | hover |
| `--ds-primary-active` | `#7c4712` | `#cf8526` | active / pressed |
| `--ds-primary-fg` | `#ffffff` | `#1a0f02` | 主按钮文字 / text on primary |
| `--ds-accent` | `#1f6f6a` | `#4fb8ad` | 青绿色调谐指针、链接 / tuner teal |
| `--ds-accent-fg` | `#ffffff` | `#04201d` | accent 面文字 / text on accent |

### 语义状态 / Semantic States

| 语义 | Light 主 / 底 / 字 | Dark 主 / 底 / 字 |
|---|---|---|
| success | `#2f7a4a` / `#e0efe5` / `#1b4a2c` | `#6ccb87` / `#122b1b` / `#b6e6c6` |
| warning | `#9a6510` / `#f3ead2` / `#5e3e08` | `#e0b25e` / `#2a2010` / `#f3d79a` |
| danger | `#b23b2e` / `#f6e3df` / `#7a2018` | `#e3675a` / `#2c1614` / `#f4b0a8` |
| info | `#1f6f6a` / `#dcecea` / `#124542` | `#4fb8ad` / `#0e2a28` / `#b6e8e2` |

---

## 5. 字体 / Typography

- **Sans**：`'Inter', -apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif`。用于标签、标题、按钮和正文，保持现代 UI 可读性。
- **Mono**：`'JetBrains Mono', 'SF Mono', 'Cascadia Code', ui-monospace, monospace`。用于频率、dB、计时、电平读数和表格数字，建议开启 tabular 数字。
- **Serif**：`Georgia, 'Songti SC', serif` 仅作为备用变量保留，不作为本风格主表达。
- **比例尺 / Scale**：`12 / 13 / 14 / 16 / 20 / 24 / 32 / 48px`。
- **字重 / Weights**：`400 / 500 / 600`。刻度和按钮标签不使用过细字重。
- **字距 / Tracking**：`0`。不要使用负字距；硬件标签需要清晰、稳定。

---

## 6. 间距与布局 / Spacing & Layout

- **间距比例 / Spacing scale**：`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96`。
- **容器宽 / Container**：桌面控制台建议 1040–1180px；面板内部使用 12 或 24px 的机械网格。
- **布局层级 / Layers**：页面底座 -> 胡桃木侧板 -> 拉丝金属面板 -> 仪表井 / 控件槽 -> 旋钮与按钮。
- **扫描节奏 / Scan rhythm**：标签在上，读数在下；频率和 dB 数字靠等宽字体对齐。
- **移动端 / Mobile**：压缩为 pocket receiver faceplate，控制组换行，表盘和刻度按比例缩放，不能横向溢出。

---

## 7. 圆角 / 阴影 / 描边

### 圆角 / Radius

| Token | 值 | 用途 |
|---|---|---|
| `--ds-radius-sm` | `3px` | 按钮、输入、刻度槽 |
| `--ds-radius-md` | `6px` | 卡片、表盘、菜单、推子槽 |
| `--ds-radius-lg` | `10px` | 接收机面板、弹层、移动设备屏内卡 |
| `--ds-radius-full` | `999px` | 旋钮、LED、徽章、拨钮 |

### 阴影 / Shadow

| Token | 气质 / Mood | 用途 / Use |
|---|---|---|
| `--ds-shadow-sm` | 微高光 + 轻投影 | 小按钮、LED 底座、徽章 |
| `--ds-shadow-md` | 面板凸起 + 短投影 | 卡片、菜单、旋钮组 |
| `--ds-shadow-lg` | 控制台浮起 | hero faceplate、桌面 frame |
| `--ds-shadow-inset` | 金属槽内凹 | 输入、推子槽、表盘井 |
| `--ds-shadow-inset-sm` | 细浅内凹 | 分段 LED 槽、tab 容器 |

描边不要过亮。亮色强描边是氧化铝边缘，暗色强描边是石墨面板边缘。

---

## 8. 动效 / Motion

- `--ds-dur-fast:140ms`：按钮 hover、LED 点亮。
- `--ds-dur-base:220ms`：拨钮、tab、表单 focus。
- `--ds-dur-slow:420ms`：VU 针回弹、hero 控件入场。
- `--ds-ease:cubic-bezier(.2,.72,.18,1)`：模拟机械回落。
- 典型动效：旋钮 hover 微转 6–10deg；VU 针以小角度 settle；LED 段做 1–3% 亮度闪动；推子帽在 focus/hover 时上浮 1px。
- 必须支持 `@media (prefers-reduced-motion: reduce)`：取消循环闪动和旋转，只保留静态状态。

---

## 9. 组件规格 / Components

### 按钮 / Buttons

| 状态 | 背景 | 文字 | 边缘与反馈 |
|---|---|---|---|
| primary | `--ds-primary` 金属按钮面 | `--ds-primary-fg` | 顶部细高光，active 使用 `--ds-primary-active` |
| secondary | `--ds-bg-elevated` 拉丝面 | `--ds-fg` | 1px `--ds-border`，hover 增强高光 |
| tertiary | 透明或低强调面 | `--ds-fg-muted` | hover 才出现底面 |
| danger | `--ds-danger` | `--ds-fg-on-accent` | 用于断开、删除、保护性操作 |
| disabled | `--ds-bg-subtle` | `--ds-fg-subtle` | opacity `.55`，不显示动态反馈 |

### 输入 / Inputs

输入框是压入面板的金属槽：`--ds-bg-sunken`、1px `--ds-border`、`--ds-shadow-inset`、`--ds-radius-sm`。Focus 叠加 `--ds-focus-ring`，placeholder 使用 `--ds-fg-subtle`。

### 卡片 / Cards

卡片是仪表面板上的小模块：`--ds-bg-elevated`、`--ds-border`、`--ds-shadow-md`、`--ds-radius-md`。正文不直接落在木纹上。

### 徽章 / Badges

语义徽章使用 `-bg` / `-fg` 配对；状态必须有文字，不只靠颜色。成功可联想到绿色电平，警告是琥珀，危险是红色削波。

### 提示条 / Alerts

提示条像面板上的服务提示窗：浅语义底、语义文字、左侧小圆 LED 或线性图标。不要做大面积闪烁。

### 导航 / Navigation

Tabs 坐在凹槽里；选中项像机械按钮被按下。侧栏导航可使用小 LED 点表示当前来源或通道。

### VU Meter

VU 表必须包含：半圆刻度、dB 数字、琥珀背光、中心轴、细针。动效只做小角度回弹，避免夸张摆动。

### Rotary Knob

旋钮包含圆形金属面、径向滚花刻、指标线和轻 bevel。hover 可微转；active 像被按住。

### Fader

推子由长槽、刻度线、滑块帽组成。槽用 `--ds-bg-sunken` 和 inset，滑块帽用拉丝金属渐变。

### LED Meter

分段电平灯从绿色到琥珀再到红色。红色只出现在 peak / clipping，不做整屏发光。

---

## 10. 可访问性 / Accessibility

- 亮色 `--ds-fg` on `--ds-bg`、`--ds-bg-elevated` 满足 WCAG AA；暗色同样满足。
- `--ds-fg-muted` 可用于正文级次要信息；`--ds-fg-subtle` 只用于短标签、刻度、占位或大字号。
- 主按钮文字使用 `--ds-primary-fg`，暗色主按钮为深字落在琥珀色上。
- 焦点环固定为 `0 0 0 2px var(--ds-bg),0 0 0 4px var(--ds-focus)`。
- 所有可点控件触控目标 ≥44px；旋钮和推子需要键盘可达。
- 背光、闪动、针表动画必须受 `prefers-reduced-motion` 控制。
- 图标必须有 aria-label 或可见文字；装饰性刻度和 LED 使用 `aria-hidden="true"`。

---

## 11. Do / Don't

**Do**

- 用拉丝铝、胡桃木、琥珀表盘和细刻度建立 vintage audio 气质。
- 用等宽字体承载频率、dB、时间码和电平数字。
- 让旋钮、推子、拨钮、LED 都有明确状态，而不是纯装饰。
- 保持纹理低对比，正文始终落在干净表面。
- 为 dark theme 保留琥珀背光，但降低背景亮度和投影。

**Don't**

- 不要引用任何真实音响品牌、型号或商标。
- 不要使用照片、CDN 字体、远程图片或网络导入作为 preview 资产。
- 不要把界面做成数字霓虹 HUD；本风格是模拟音响面板。
- 不要使用高光塑料、玻璃泡泡、过度 glossy 的控件。
- 不要让胡桃木纹承载长正文。
- 不要用大圆角破坏 1970s/80s 硬件的精密直边感。

---

## 12. 如何接入 / Integration

### CSS

```html
<link rel="stylesheet" href="styles/49-hifi/tokens.css">
```

组件中只消费固定变量：

```css
.receiver-button {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-sm);
  box-shadow: var(--ds-shadow-md);
}
```

### Tailwind

```js
module.exports = {
  presets: [require('./styles/49-hifi/tailwind.preset.js')],
};
```

再在入口加载：

```js
import './styles/49-hifi/tokens.css';
```

### 主题 / Theme

```html
<html data-theme="dark">
```

或使用 `.dark` 类。变量名不要改，项目只替换 token 值或在组件层增加本地样式。
