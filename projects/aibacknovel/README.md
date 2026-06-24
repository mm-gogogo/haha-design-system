# aibacknovel · 小说阅读站设计系统

> **基于 editorial 风（`styles/07-editorial`）+ aibacknovel 定制**，把项目既有的 `DESIGN.md` / `cfsite/static/app.css` 视觉系统**正式化升级**为一套完整的 `--ds-*` Kit。沿用其克制暖墨书卷调、单一赭橙强调、衬线正文 × 无衬线 UI 对比轴、大行高、40rem 阅读容器与克制动效；不引入任何与既有令牌冲突的改写，仅做契约化映射与三主题落地。

服务对象：长篇小说《带着 26 年的人工智能穿越回高考后》的阅读站——长文阅读 + 段落级评论 + 夜读切换。一句话：**让人安安静静读完几十万字，顺手在段落边留句话。**

### 三主题切换（本 Kit 关键能力）

阅读站需要三档纸面，全部在 `tokens.css` 用同一组 `--ds-*` 覆盖：

| 主题 | 选择器 | 基调 | 强调赭橙 |
|---|---|---|---|
| **纸白**（默认 light） | `:root` | 暖纸 `#f7f4ee` + 暖墨 `#23201b` | 文字 `#8a4e16` / 填充 `#a85b18` |
| **暖褐**（sepia） | `[data-theme="sepia"]` | 更黄的纸 `#ece0c8` + 更暖的墨 `#33291b` | 文字 `#7c4413` / 填充 `#9a5417` |
| **夜间**（dark） | `[data-theme="dark"]`，兼容 `.dark` | 深暖墨底 `#15130f` + 暖纸白字 `#ece6da` | 提亮 `#e8a05a` |

```js
document.documentElement.dataset.theme = 'sepia'; // 'sepia' | 'dark' | 删除属性=纸白
// localStorage 记忆用户选择
```

> 三主题下正文、占位均 ≥4.5:1，全部满足 WCAG AA（见 §10）。

---

## 1. 一句话气质

暖纸（或暖褐 / 深墨）基底 + 衬线正文 + 无衬线控件的「对比轴」，行高拉到 1.95（中文），阅读容器锁 40rem，单一赭橙只在主操作、链接、当前选择、有评论的段评气泡出场。读三十万字不累眼，段评不打扰主线。

---

## 2. 设计哲学 / 性格

继承 editorial 基底（语义分层 + 固定比例尺 + 状态色成对 + 双层焦点环 + 多主题），并落实 aibacknovel `DESIGN.md` 的五条命门：

1. **阅读优先**——正文是产品。衬线、字号偏大（18px 标准档）、行高 1.95、容器 40rem，每行约 32–40 汉字。
2. **对比轴**——正文/标题/书名走衬线 `Noto Serif SC`；控件/元信息/评论走无衬线 `Noto Sans SC`，一衬一非建立「内容 vs 界面」层级。
3. **克制配色（Restrained）**——暖墨书卷调，单一赭橙强调，**不用渐变文字、不用霓虹**。赭橙只用于链接 / 主操作 / 当前选择 / 有评论的段评气泡。
4. **靠留白与 1px 分隔线分层**——阴影极轻（交互件 ≤8px blur，不与边框并用成 ghost-card），层级用空白、暖色块底、`1px` 线表达。
5. **段评不打扰**——段落右侧轻气泡默认隐藏，hover/聚焦才现；有评论才常驻并以赭橙显数字。点击→抽屉。主线干净，互动可达。

> 与既有 DESIGN.md 的关系：**全部保留**，本 Kit 只把 `--accent / --bg / --ink / --serif …` 映射进 `--ds-*` 契约，并补齐 editorial 缺的第三套主题（暖褐）与全套语义状态色。

---

## 3. 何时用 / 何时别用

**适合**
- 长篇小说 / 连载 / 长文阅读站；章节制内容 + 段落级评论。
- 需要「安静、可信、耐读、护眼」气质的内容站；多档字号 + 夜读。

**不适合**
- 数据密集 B 端后台 / 仪表盘（密度太低、衬线不利扫读）。
- 强营销转化落地页 / 促销活动（克制感削弱冲击）。
- 游戏 / 潮玩 / 儿童向 C 端、暗黑科技霓虹场景。

---

## 4. 颜色

单一克制赭橙 + 暖纸中性，三主题。**注意品牌色分工**：明亮赭橙 `#c9762b` 作白字填充仅 3.4:1（不达正文 AA），故契约里——

- `--ds-primary`：按钮**填充**色，取更深赭橙让白字过 AA。
- `--ds-accent`：**文字/链接**强调，= 项目 `accent-ink`，作正文色 ≥4.5:1。
- `--ds-accent-soft`：**非文字装饰**用的明亮赭橙（= 项目 `accent-soft`），用于段评气泡底、首字下沉、品牌渐变、选区——**切勿放灰字/小字**。
- `--ds-brand`：品牌赭橙 `#c9762b` 端点（logo / 渐变），非文字。

### 表面与文字

| Token | 纸白 | 暖褐 | 夜间 | 用途 |
|---|---|---|---|---|
| `--ds-bg` | `#f7f4ee` | `#ece0c8` | `#15130f` | 纸 · 主背景 |
| `--ds-bg-subtle` | `#efe9df` | `#e2d4b8` | `#1d1a15` | 次背景 · 分组底 |
| `--ds-bg-elevated` | `#fffdf9` | `#f5ecd6` | `#1d1a15` | 浮层/卡片/顶栏 |
| `--ds-bg-sunken` | `#efe9df` | `#e2d4b8` | `#100e0b` | 凹陷 · 输入槽/引用块 |
| `--ds-fg` | `#23201b` | `#33291b` | `#ece6da` | 暖墨 · 正文 |
| `--ds-fg-muted` | `#514b42` | `#5d4e36` | `#bcb5a6` | 次要 · 元信息 |
| `--ds-fg-subtle` | `#756e62` | `#776545` | `#928b7c` | 占位/弱文字（≥4.5:1） |
| `--ds-fg-on-accent` | `#fff8ef` | `#fff8ef` | `#1a1510` | 落在强调填充上的文字 |
| `--ds-border` | `#e4ddd0` | `#d9c9a8` | `#2a261f` | 常规描边/分隔线 |
| `--ds-border-strong` | `#d6ccba` | `#cbb78c` | `#39342b` | 强描边 |

### 品牌与强调

| Token | 纸白 | 暖褐 | 夜间 | 用途 |
|---|---|---|---|---|
| `--ds-primary` | `#a85b18` | `#9a5417` | `#e8a05a` | 主操作填充（白字/夜间深字过 AA） |
| `--ds-primary-hover` | `#944f14` | `#874913` | `#efb074` | hover |
| `--ds-primary-active` | `#7e420f` | `#733d0f` | `#d98e3f` | active/pressed |
| `--ds-primary-fg` | `#fff8ef` | `#fff8ef` | `#1a1510` | 主操作上的文字 |
| `--ds-accent` | `#8a4e16` | `#7c4413` | `#e8a05a` | **文字/链接**强调（AA 达标） |
| `--ds-accent-soft` | `#e8a05a` | `#d98e3f` | `#c9762b` | 非文字装饰（气泡底/首字/渐变） |
| `--ds-brand` | `#c9762b` | `#b3661f` | `#e8a05a` | logo / 渐变端点（非文字） |

> 赭橙梯度（纸白填充）：`#7e420f`(active) → `#944f14`(hover) → `#a85b18`(default)；夜间反向提亮到 `#e8a05a`。链接/文字用 accent，气泡装饰用 accent-soft，三者分工避免满屏一种橙。

### 语义状态（低饱和 · 主色 + 浅暖底 + 底上深字）

| 语义 | 主色（白/褐/夜） | -bg（白/褐/夜） | -fg（白/褐/夜） |
|---|---|---|---|
| success | `#3f7d57` / `#3a7350` / `#5cae7d` | `#e7f0e8` / `#dde6cf` / `#16261c` | `#234534` / `#21412f` / `#cfe9d5` |
| warning | `#b8860b` / `#97700a` / `#d8a93a` | `#f6edd5` / `#ecddb4` / `#2a2008` | `#5e4404` / `#4f3a03` / `#f3e2bb` |
| danger | `#b8442c` / `#a83e27` / `#e0795e` | `#f6e3dc` / `#ecd5c4` / `#2e1410` | `#5e1d11` / `#531a0f` / `#f6d6ca` |
| info | `#3f6f8f` / `#3a6480` / `#6fa3c2` | `#e3edf2` / `#d6e0e0` / `#112430` | `#1d3a4c` / `#1b3645` / `#d2e6f0` |

> `--ds-danger` 同时承担项目 `--warn`（计数超限、举报、删除等错误/警示提示）。

---

## 5. 字体

**核心是「对比轴」：正文衬线 + UI 无衬线。**

- `--ds-font-serif`（正文/标题/书名，主角）：`"Noto Serif SC","Songti SC","Source Han Serif SC",ui-serif,Georgia,serif`。
- `--ds-font-sans`（控件/元信息/评论/数据）：`"Noto Sans SC","PingFang SC","Hiragino Sans GB","Microsoft YaHei",system-ui,sans-serif`。
- `--ds-font-mono`（引用代码）：`"JetBrains Mono",ui-monospace,Menlo,monospace`。

**比例尺**（正文偏大可读，标题拉开）

| Token | 值 | 典型用途 |
|---|---|---|
| `--ds-text-xs` | 12px | 章节元信息/版权（sans） |
| `--ds-text-sm` | 14px | 元信息/标签/评论次要（sans） |
| `--ds-text-base` | 18px | **正文**（serif，标准档 1.125rem） |
| `--ds-text-md` | 20px | 导语/大正文档（serif） |
| `--ds-text-lg` | 23px | h3 / 特大正文档 |
| `--ds-text-xl` | 27px | **章标题 h2** |
| `--ds-text-2xl` | 34px | h1 |
| `--ds-text-3xl` | 50px | hero 封面大标题 |

**字号档位**（阅读顶栏 A− / A / A＋ / A＋＋ 切 `--ds-text-base`）：`:root[data-fs="s|l|xl"]` 对应 16 / 20 / 22px，行高随档位 1.85→2.05。

**字重**：`normal 400 / medium 500 / bold 700`（书名/章标题用 700）。

**字距**：中文不收紧——标题用极轻正字距 `--ds-tracking-tight: 0.005em`，正文 `0`。标题 `text-wrap:balance` 避免末行孤字，长正文 `text-wrap:pretty`。

**行高（中文适配关键）**：`relaxed 1.95` 给正文，`normal 1.6` 给 UI/评论，`tight 1.25` 给大标题。中文方块字需更大行距。

---

## 6. 间距与布局

4px 基比例尺，editorial 用得松。`--ds-space-1..12` = `4,8,12,16,20,24,32,40,48,64,80,96`px。

- **节奏**：段落间距 24px（space-6，项目 1.25rem 量级）；章节块 32–40px（space-7/8）制造节奏；区块间 64px+（space-10）。
- **阅读容器**：正文列宽锁 **40rem**（`max-w-reading`），每行约 32–40 汉字，超过增加回扫成本。
- **首页/目录**：书架/区块用 62rem 宽容器；章节卡片网格 `minmax(15rem,1fr)` 自适应，gap 8–12px。
- **页边距**：桌面正文左右留白宽裕（容器外空白即设计），移动端 16–20px（`space-4`/`space-5`）。
- **段落右槽**：`.para` 右留 ~2.7rem 给段评气泡，气泡绝对定位不挤正文；移动端收到 ~2.3rem。

### 响应式（断点 `≤640px`）

阅读站移动优先，单一断点 `@media (max-width:640px)`：

- **阅读容器满宽留边**：`.reader` 解锁 40rem 上限改 `max-width:none`，左右留 `space-4`（16px）边距独占小屏宽度；`.wrap` 同步收到 `space-4`，竖向间距压一档（区块 `space-9`）。
- **段评抽屉底部上拉**：`.drawer` 由桌面「右滑入」改为底部上拉——`width:100vw`、`height:86vh`、顶圆角 20px、`transform:translateY(100%)→0`，并加 `--ds-border-strong` 下拉把手（drawer-head `::before` 短条）。该断点也对桌面段评 `.seg` 常驻显示（`opacity:.9`）并加大触达。
- **网格塌一列**：色板 `.sw` 与卡片 `.cards` 在小屏转单列；步进器 `.stepper` 字号收一档。
- **触达**：触屏（`hover:none`/小屏）段评气泡放大到 ≥2rem，配合 §10 的 ≥44px 触控目标。
- **预览自检**：`preview.html` 末附「移动端 Mobile」≈375px 手机框，含阅读顶栏 + 衬线正文 + 段评气泡，三主题均成立。

> 容器与抽屉的断点都用同一 `≤640px`；圆角/把手为组件层硬值（20px / 把手短条），仍在 §7 的 ≤20px 上限内。

---

## 7. 圆角 / 阴影 / 描边

- **圆角（温和，≤20px 防过圆 AI 感）**：`sm 8px`（标签/小控件）、`md 12px`（卡片/输入/抽屉条目）、`lg 14px`（大表面/图片，= 项目 radius）、`full 9999px`（药丸按钮/段评气泡/头像）。模态用 18px、移动底部抽屉顶 20px（组件层硬值，仍在 20px 上限内）。
- **阴影（极轻）**：`sm` 交互件抬升（≤8px blur，**不与 1px 边框并用成 ghost-card**）、`md` 浮层、`lg` 抽屉/模态/插图。editorial 靠留白与分隔线，不靠投影。
- **描边**：`1px solid var(--ds-border)` 暖灰分隔线是主力分层手段（章节分隔、评论行线、卡片边、顶栏底边）。需要强调时用 `--ds-border-strong`。

---

## 8. 动效

温柔、克制、无 bounce/elastic——阅读场景拒绝跳脱。

- **曲线**：`--ds-ease: cubic-bezier(.22,.61,.21,1)`（ease-out-quint，自然缓出）。
- **时长**：`fast 150ms`（hover/focus/气泡显隐）、`base 240ms`（主过渡/抽屉）、`slow 300ms`（主题切换全局过渡）。
- **典型过渡**：段评气泡 opacity+translateX 渐显；抽屉/模态用 transform+opacity 滑入；进度条用 width（细线，低开销）；亮/褐/夜主题切换全局 `background/color .3s`。
- **prefers-reduced-motion**：必须尊重——位移降级为淡入/瞬切：

```css
@media (prefers-reduced-motion: reduce) {
  *,*::before,*::after { animation-duration:.001ms !important; transition-duration:.001ms !important; }
}
```

---

## 9. 组件规格

控件用 `--ds-font-sans`，正文相关用 `--ds-font-serif`。触控目标 ≥44px。组件章节针对阅读站。

### 按钮（高 40px / 内边距 0 16px / radius full 药丸 / font-sans / weight medium）

| 变体 | 底 | 文字 | 边 | hover |
|---|---|---|---|---|
| primary | `--ds-primary` | `--ds-primary-fg` | 无 | 底→`--ds-primary-hover` |
| secondary | `--ds-bg-elevated` | `--ds-fg` | `1px --ds-border-strong` | 边→`--ds-accent-soft` + `shadow-sm` |
| tertiary/ghost | 透明 | `--ds-fg-muted` | 无 | 底→`--ds-bg-subtle` |
| danger | `--ds-danger` | `#fff` | 无 | 加深 |

全状态（项目要求齐）：`default / hover（translateY(-1px)） / focus-visible（--ds-focus-ring） / active（scale .99） / disabled（opacity .55 + not-allowed） / loading（禁用 + 转圈）`。尺寸：小 32 / 中 40 / 大 48px。

### 阅读顶栏（sticky / 高 54px / 半透磨砂 / 下滚隐藏）

底 `color-mix(--ds-bg-elevated 84%,transparent)` + `backdrop-filter:blur(12px)`，底边 `1px --ds-border`，`z: var(--ds-z-topbar)`。左：品牌「带」角标（serif + 赭橙渐变 mark）。右控件区（sans，`.iconbtn` 40×40）：**字号切换 A− / A / A＋ + 主题切换（纸白/暖褐/夜间循环）+ 目录 + 登录/头像**。当前项用 `--ds-primary` 文字/下划线。`.topbar.hide{transform:translateY(-100%)}` 下滚隐藏。

### 章节标题与正文排版

- **章节元信息 `.chap-meta`**：`text-xs` sans，色 `--ds-fg-subtle`，字距 .03em。
- **章标题 `.chap-title`**：`text-xl`(27px) serif weight 700，`leading-tight`，`text-wrap:balance`；上 0 下 24px。
- **正文段落 `.para p`**：`text-base`(18px) serif，`leading-relaxed`(1.95)，色 `--ds-fg`；段间 24px；`text-wrap:pretty`；右留 2.7rem 给段评。
- **h2/h3**：serif，上 32–40px；h3 色 `--ds-fg-muted`。
- **引用 blockquote**：`--ds-bg-sunken` 底 + 内左缩进，serif `--ds-fg-muted`；引号用 `--ds-accent-soft`。
- **首字下沉（可选）**：首段首字 serif、`float:left`、约 3 行高、色 `--ds-accent-soft`。
- **分隔 hr**：居中 `· · ·`，色 `--ds-fg-subtle`，上下 32px。
- **图片 fig**：radius lg + `shadow-lg`，图注 `text-sm` sans `--ds-fg-subtle` 居中。

### 段评气泡 `.seg`（右侧轻气泡 / 药丸 / font-sans）

段落右侧绝对定位，`min-width 1.95rem / height 1.65rem`，radius full，底 `--ds-bg-elevated`，边 `1px --ds-border-strong`，色 `--ds-fg-subtle`。
- **默认隐藏**：`opacity:0; transform:translateX(5px)`；`.para:hover / :focus-visible` 显现。
- **有评论常驻显数字 `.seg.has`**：`opacity:1`，色 `--ds-accent`，边 `--ds-accent-soft`，底 `color-mix(--ds-accent-soft 16%, --ds-bg-elevated)`，weight 600，显评论数。
- **hover**：色/边→`--ds-accent`。点击→打开评论抽屉（`aria-expanded`）。
- **触屏（hover:none）**：常驻 `opacity:.9`，加大触达到 2.3rem。

### 评论抽屉 `.drawer`（桌面右滑 / 移动底部上拉）

桌面：`right:0` 固定，`width:min(420px,92vw)`，底 `--ds-bg-elevated`，左边 `1px --ds-border`，`shadow-lg`，`transform:translateX(100%)→0`，`z: var(--ds-z-drawer)`，遮罩 `--ds-z-mask`。
移动（≤560px）：底部上拉，`height:86vh`，顶圆角 20px，带下拉把手（`--ds-border-strong` 短条）。
内容：抽屉头（标题 serif + 段落序号 sub）/ **引用该段 `.quote`**（`--ds-bg-sunken` 底 + 赭橙引号）/ 评论列表（头像渐变、楼层、点赞/举报/回复）/ 发表框 `.composer`（textarea + 字数计数，超限变 `--ds-danger`）。焦点陷阱 + Esc 关闭。

### 登录模态（居中卡片 / radius 18px）

`width:min(380px,94vw)`，底 `--ds-bg-elevated`，边 `1px --ds-border`，`shadow-lg`，遮罩 `--ds-z-modal-mask`。标题 serif，副标 sans muted，字段 `.field`（label sans + input radius 12 + focus 赭橙环），Turnstile 占位，错误行 `--ds-danger`，登录/注册切换链接走 `--ds-accent`。焦点陷阱 + Esc。

### 输入框 / textarea（radius 12px / font-sans）

底 `--ds-bg`（或 elevated），边 `1px --ds-border-strong`，文字 `--ds-fg`，占位 `--ds-fg-subtle`。focus：边→`--ds-accent-soft` + `0 0 0 3px color-mix(--ds-accent-soft 22%,transparent)`。错误态：边→`--ds-danger`。

### 骨架屏 / 空态

- **骨架 `.skel`**：评论列表加载用 shimmer 条（`--ds-bg-sunken`→`--ds-border` 渐变扫光），`reduced-motion` 时静止为 `--ds-bg-sunken`。
- **空态 `.empty`**：居中 `--ds-fg-subtle` 文案 + 引导（「还没有人评论这段，来抢沙发」）。
- **错误**：toast（底 `--ds-fg` 反白）+ 行内 `--ds-danger` 提示。

### 广告位 `.ad`（低调，可标「推广」）

`margin 32px 0`，radius 12，未填充 `border:1px dashed --ds-border-strong` + `--ds-bg-sunken` 底；已填充 `data-filled` 转 `--ds-bg-elevated`。右上 `.label` 角标「推广」`text-xs` `--ds-fg-subtle` opacity .75。`z: var(--ds-z-ad)`，不抢正文注意力。

### 徽章 / 标签（高 22px / radius full / font-sans / 13–14px）

中性：底 `--ds-bg-subtle` 文字 `--ds-fg-muted`。强调：底 `color-mix(--ds-accent-soft 22%,--ds-bg-subtle)` 文字 `--ds-accent`。语义：底 `*-bg` 文字 `*-fg`（VIP、封禁等用 success/warning/danger）。

### 提示条 alert（radius md / 内边距 16px / 前置语义 SVG 图标 + 1px 全描边）

底 `*-bg`，文字 `*-fg`，**前置细线语义 SVG 图标**（对勾 / 感叹三角 / i，随 `*-fg` 着色 ≥4.5:1），`1px` 全描边取 `color-mix(*-色 45%,*-bg)` 软描边——**不用侧边粗色条**。标题 sans medium、正文可 serif。四语义 success / warning / danger / info。

### 模态框 Modal `.modal`（居中卡片 / radius 18px / 呼应登录·注册）

遮罩 `rgba(20,14,4,.46)` + `blur(2px)`，`z: var(--ds-z-modal-mask)`；卡片 `width:min(380px,94vw)`，底 `--ds-bg-elevated`，边 `1px --ds-border`，`shadow-lg`，`z: var(--ds-z-modal)`。入场 `transform:translateY(10px) scale(.985)→0`。标题 serif，副标 sans `--ds-fg-muted`；字段复用 `.field`（focus 赭橙环）；底部「主操作 100% 宽」+ 登录/注册切换链接走 `--ds-accent`。右上 `.x` 关闭按钮 hover 进 `--ds-bg-subtle`。遮罩点击 / Esc 关闭，焦点陷阱。与「评论抽屉」同源但居中、更短。

### 下拉菜单 Dropdown `.menu`（主题·字号·账号操作）

锚定触发器下方 `top:calc(100%+.4rem)`，`min-width:11rem`，底 `--ds-bg-elevated`，边 `1px --ds-border`，`shadow-md`，`z: var(--ds-z-menu)`。入场 `opacity+translateY(-4px)`。
- **菜单项 `.mitem`**：高 38px，sans，左侧 `.mi` 图标槽 `--ds-fg-subtle`。**hover/focus** → 底 `--ds-bg-subtle`。
- **选中态**（`role="menuitemradio" aria-checked="true"`）：文字与图标转 `--ds-accent`，weight 600。
- **危险项 `.danger`**：文字 `--ds-danger`，hover 底 `--ds-danger-bg` 文字 `--ds-danger-fg`（退出登录等）。
- `.msep` 分隔线 `1px --ds-border`。点击外部 / Esc 关闭，`aria-expanded` 同步。

### 工具提示 Tooltip `.tip`（反白小卡 / hover·focus 触发）

触发元素 `.tiplabel`（虚线下边线，`cursor:help`）；提示盒 `.tipbox` 反白——底 `--ds-fg` 文字 `--ds-bg`（三主题对比 ≥10.9:1），sans `.76rem`，下方三角同 `--ds-fg`，`shadow-md`，`z: var(--ds-z-tip)`。`hover / focus-within` 时 `opacity` 渐显。键盘可达（容器 `tabindex`）。

### 分页 Pagination `.pager`（章节翻页 / 目录页码）

页码块 `.pg` 高 38px，底 `--ds-bg-elevated`，边 `1px --ds-border`，文字 `--ds-fg-muted`，radius md，sans。
- **hover**：边 `--ds-accent-soft`，文字 `--ds-accent`。
- **当前页 `aria-current="page"`**：底 `--ds-primary`，文字 `--ds-primary-fg`，weight 600。
- **禁用**（首/末章 disabled）：`opacity .45 + not-allowed`。
- `.pgwide` 加宽放「上一章 ‹ / 下一章 ›」；`.pggap` 省略号 `--ds-fg-subtle`。两套：章节翻页 + 目录页码。

### Toast 通知 `.toast`（反白浮条 / 四语义 / 自动消失）

居中底部 `.toast-stack`（`z: var(--ds-z-toast)`，`aria-live="polite"`）堆叠。每条 `.toast` 反白——底 `--ds-fg` 文字 `--ds-bg`，radius md，`shadow-lg`，入场 `toastIn`（`translateY(8px)→0`）。左侧图标 `.ti` 按语义着色（success/info/danger 用对应主色，在反白底上仍达对比），`.tclose` 关闭。默认 ~3.6s 自动移除。错误优先用 toast + 行内 `--ds-danger`（呼应 §9 骨架/空态的「错误」约定）。

### 步进器 / 阅读进度 Stepper `.stepper` + `.progress-line`

- **进度条 `.progress-line`**：`height 4px` radius full，槽 `--ds-bg-sunken`，填充 `--ds-accent-soft`（装饰色，非文字），`width` 过渡；`role="progressbar"` + `aria-valuenow`。
- **步进器 `.step`**：CSS `counter` 编号圆点；连接线 `--ds-border`。
  - **未达**：圆点边 `--ds-border-strong` 文字 `--ds-fg-subtle`。
  - **已完成 `.done`**：圆点底 `--ds-primary` + 内置细线对勾 SVG（`--ds-primary-fg`），连接线转 `--ds-accent-soft`。
  - **当前 `.active`**：圆点边 `--ds-accent` 文字 `--ds-accent` + 赭橙光环 `0 0 0 3px color-mix(--ds-accent-soft 28%)`，标签 `--ds-accent` weight 600。
  - 用于「序章→各卷→完结」阅读里程 / 注册多步流程。

### 面包屑 Breadcrumb `.crumbs`（书架 / 书名 / 卷 / 章）

sans `.82rem`，分隔 `/` 用 `--ds-fg-subtle`。链接 `--ds-fg-muted`，hover 文字 `--ds-accent` + 底 `--ds-bg-subtle`；当前页 `aria-current="page"` 文字 `--ds-fg` weight 600（不可点）。书架 / 书名 / 卷 / 当前章四级定位。

### 移动端阅读页 `.phone`（≈375px 手机框示意）

375px 手机框：状态条 `.notch` + 阅读顶栏 `.ptop`（返回 ‹ / 书名 serif / 目录·主题 icon，复用顶栏语义）+ 细进度条 `.pbar`（填充 `--ds-accent-soft`）+ 衬线正文 `.pbody`。正文段落 `.ppara` 右留槽放段评气泡 `.pbubble`：**有评论常驻**（边 `--ds-accent-soft`、底 `color-mix(--ds-accent-soft 16%,--ds-bg-elevated)`、文字 `--ds-accent`），**无评论弱化** `.empty`（边 `--ds-border-strong`、文字 `--ds-fg-subtle`）。三主题下气泡与正文均达 AA。

---

## 10. 可访问性

- **对比度（三主题全过 AA）**：正文 `--ds-fg` 对底 纸白 14.8:1 / 暖褐 10.9:1 / 夜间 14.9:1；`--ds-fg-muted` ≥6.2:1；`--ds-fg-subtle` ≥4.6:1（对底与对 elevated 均 ≥4.5，可作正文/占位）。`--ds-accent` 作文字 ≥5.9:1；primary 填充上文字 ≥4.77:1。**彩底不放灰字**。
- **焦点**：所有可交互元素用 `--ds-focus-ring`（底环 + 赭橙环）双层 box-shadow，或 `outline:2px solid var(--ds-focus); offset:2px`；绝不裸删 outline。
- **触控目标**：交互元素 ≥44×44px（小气泡/图标按钮加 padding/热区补足；触屏段评气泡放大）。
- **可减弱动效**：尊重 `prefers-reduced-motion`（位移降淡入/瞬切，骨架停扫光，见 §8）。
- **字号控制**：阅读顶栏 A− / A / A＋（/ A＋＋）切 `:root[data-fs]`，正文 16 / 18 / 20 / 22px。
- **键盘 / ARIA**：段评气泡可聚焦（`aria-expanded`），抽屉/模态焦点陷阱 + Esc 关闭。
- **中文排版**：正文 `text-wrap:pretty`、标题 `balance`，避免两端对齐造成字间隙与孤字。

---

## 11. Do / Don't

**Do**
- 正文一律衬线、行高 1.95、容器锁 40rem——这是本系统的命。
- 控件/元信息/评论用无衬线，建立内容/界面对比轴。
- 强调分工：链接/文字用 `--ds-accent`，气泡/首字/渐变用 `--ds-accent-soft`，按钮填充用 `--ds-primary`。
- 三主题都测对比；彩底放对应 `*-fg`，不放灰字。
- 段评默认隐藏、有评论才常驻；标题 `balance`、正文 `pretty`。

**Don't**
- 别用纯白 `#fff` 冷底——基底必须暖纸/暖褐/深暖墨。
- 别给正文用无衬线，或把行高压到 1.85 以下（中文会挤）。
- 别用明亮 `#c9762b`/`accent-soft` 当**文字/小字**（对比不够）——文字走 accent。
- 别「1px 边 + 大阴影」并用成 ghost-card；别堆阴影做层级。
- 别让正文列宽超过 40rem；别把页面变成「橙色海报」。
- 别用渐变文字、霓虹、彩色描边卡片；圆角别超 20px；别用 emoji 当功能图标——状态/操作一律内联细线 SVG。

---

## 12. 如何接入

**1. 引入 tokens.css**（一次拿到三主题变量）
```html
<link rel="stylesheet" href="./projects/aibacknovel/tokens.css">
```

**2. 用变量**（永远走 `var(--ds-*)`，不硬编码）
```css
.article { font-family: var(--ds-font-serif); }
.article p {
  font-size: var(--ds-text-base);
  line-height: var(--ds-leading-relaxed);
  color: var(--ds-fg);
  max-width: 40rem;
}
.meta { font-family: var(--ds-font-sans); color: var(--ds-fg-muted); }
.btn-primary {
  background: var(--ds-primary); color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-full);
  transition: background var(--ds-dur-base) var(--ds-ease);
}
a.link { color: var(--ds-accent); }                         /* 文字强调走 accent */
.seg.has { color: var(--ds-accent);
  background: color-mix(in srgb, var(--ds-accent-soft) 16%, var(--ds-bg-elevated)); }
```

**3. 切换三主题**（localStorage 记忆）
```js
function setTheme(t){ // t: 'light' | 'sepia' | 'dark'
  const r = document.documentElement;
  if (t === 'light') r.removeAttribute('data-theme');
  else r.dataset.theme = t;          // 'sepia' | 'dark'（dark 也兼容 .dark）
  localStorage.setItem('theme', t);
}
setTheme(localStorage.getItem('theme') || 'light');
```

**4. 切字号**
```js
document.documentElement.dataset.fs = 's'; // s | (空=标准) | l | xl
```

**5. Tailwind 项目**——引 preset，直接用语义类（`bg-bg`、`text-fg`、`font-serif`、`max-w-reading`、`rounded-full`、`text-accent`、`bg-accent-soft` 等）
```js
// tailwind.config.js
module.exports = { presets: [require('./projects/aibacknovel/tailwind.preset.js')] }
```
```jsx
<article className="font-serif max-w-reading mx-auto text-fg leading-relaxed">
  <h1 className="text-xl font-bold tracking-tight text-balance">第一章 高考之后</h1>
  <p className="text-base">正文……</p>
</article>
```
> 夜间走 Tailwind `dark:` 变体（`[data-theme="dark"]`/`.dark`）；暖褐 sepia 用属性选择器 `[data-theme="sepia"] .xxx` 在组件层自定义。
