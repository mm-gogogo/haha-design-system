# Kit 模板与 Token 契约（所有风格/项目必须遵守）

> 任何一套设计系统（无论风格还是项目定制）都按本契约产出。**变量名固定、文件结构固定、preview 章节固定**，只换取值与气质。这样任意项目都能无痛切换风格。

## 一、文件清单（每套 Kit）

```
<kit>/
  README.md            # 设计系统规范（Markdown，主交付物，别人直接读这个就能用）
  tokens.css           # CSS 变量实现（:root 亮色 + [data-theme="dark"] 暗色）
  tokens.json          # 机器可读 token（同一套语义）
  tailwind.preset.js   # Tailwind 预设（消费 CSS 变量，给 React/Tailwind 项目）
  preview.html         # 自包含可视化展示页（双击即开，内联样式，无外链依赖）
```

> 项目定制 Kit 可省略 `tokens.json`，但 README/tokens.css/preview.html/tailwind.preset.js 四件必齐。

## 二、Token 契约（CSS 变量名，**不可改名**）

所有 Kit 必须定义以下全部变量。值随风格变，名字一律 `--ds-` 前缀。

### 颜色 · 表面与文字
```
--ds-bg            主背景
--ds-bg-subtle     次背景（区块/分组底）
--ds-bg-elevated   抬起表面（卡片/弹层）
--ds-bg-sunken     凹陷表面（输入框槽/代码块）
--ds-fg            主文字
--ds-fg-muted      次要文字
--ds-fg-subtle     占位/弱文字（须 ≥4.5:1 或仅大字）
--ds-fg-on-accent  落在强调色上的文字
--ds-border        常规描边
--ds-border-strong 强描边/分隔
```

### 颜色 · 品牌与强调
```
--ds-primary        主操作色（按钮/选中）
--ds-primary-hover  hover
--ds-primary-active active/pressed
--ds-primary-fg     主操作上的文字
--ds-accent         链接/次强调
--ds-accent-fg      accent 上的文字
```

### 颜色 · 语义状态（每个含 主色 + -bg 浅底 + -fg 底上文字）
```
--ds-success / --ds-success-bg / --ds-success-fg
--ds-warning / --ds-warning-bg / --ds-warning-fg
--ds-danger  / --ds-danger-bg  / --ds-danger-fg
--ds-info    / --ds-info-bg    / --ds-info-fg
```

### 焦点
```
--ds-focus          焦点环主色
--ds-focus-ring     完整 box-shadow 焦点环（含底环+主色环）
```

### 圆角
```
--ds-radius-sm  --ds-radius-md  --ds-radius-lg  --ds-radius-full
```

### 间距比例（4px 基，可按风格调密/松）
```
--ds-space-1 ... --ds-space-12   （建议映射 4,8,12,16,20,24,32,40,48,64,80,96）
```

### 字体
```
--ds-font-sans   --ds-font-serif   --ds-font-mono
--ds-text-xs ... --ds-text-3xl     （字号比例尺）
--ds-leading-tight --ds-leading-normal --ds-leading-relaxed
--ds-weight-normal --ds-weight-medium --ds-weight-bold
--ds-tracking-tight --ds-tracking-normal
```

### 阴影 / 高度
```
--ds-shadow-sm  --ds-shadow-md  --ds-shadow-lg
```

### 动效
```
--ds-ease         主缓动曲线
--ds-dur-fast --ds-dur-base --ds-dur-slow
```

## 三、示例 tokens.css（映射 Geist —— 每套风格复制此文件后「重新换肤」）

```css
:root {
  /* 表面与文字 */
  --ds-bg: #ffffff;            --ds-bg-subtle: #fafafa;
  --ds-bg-elevated: #ffffff;   --ds-bg-sunken: #f2f2f2;
  --ds-fg: #171717;            --ds-fg-muted: #4d4d4d;
  --ds-fg-subtle: #8f8f8f;     --ds-fg-on-accent: #ffffff;
  --ds-border: #ebebeb;        --ds-border-strong: #d4d4d4;
  /* 品牌与强调 */
  --ds-primary: #171717;       --ds-primary-hover: #2a2a2a;
  --ds-primary-active: #000000;--ds-primary-fg: #ffffff;
  --ds-accent: #006bff;        --ds-accent-fg: #ffffff;
  /* 语义状态 */
  --ds-success: #008a2e; --ds-success-bg: #ecfdec; --ds-success-fg: #003a00;
  --ds-warning: #ab6400; --ds-warning-bg: #fff6de; --ds-warning-fg: #561900;
  --ds-danger:  #ea001d; --ds-danger-bg:  #ffeeef; --ds-danger-fg:  #47000c;
  --ds-info:    #006bff; --ds-info-bg:    #f0f7ff; --ds-info-fg:    #002359;
  /* 焦点 */
  --ds-focus: #006bff;
  --ds-focus-ring: 0 0 0 2px var(--ds-bg), 0 0 0 4px var(--ds-focus);
  /* 圆角 */
  --ds-radius-sm: 6px; --ds-radius-md: 12px; --ds-radius-lg: 16px; --ds-radius-full: 9999px;
  /* 间距 */
  --ds-space-1: 4px;  --ds-space-2: 8px;  --ds-space-3: 12px; --ds-space-4: 16px;
  --ds-space-5: 20px; --ds-space-6: 24px; --ds-space-7: 32px; --ds-space-8: 40px;
  --ds-space-9: 48px; --ds-space-10: 64px; --ds-space-11: 80px; --ds-space-12: 96px;
  /* 字体 */
  --ds-font-sans: "Geist", -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  --ds-font-serif: "Geist", Georgia, "Songti SC", serif;
  --ds-font-mono: "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace;
  --ds-text-xs: 12px; --ds-text-sm: 13px; --ds-text-base: 14px; --ds-text-md: 16px;
  --ds-text-lg: 20px; --ds-text-xl: 24px; --ds-text-2xl: 32px; --ds-text-3xl: 48px;
  --ds-leading-tight: 1.2; --ds-leading-normal: 1.5; --ds-leading-relaxed: 1.7;
  --ds-weight-normal: 400; --ds-weight-medium: 500; --ds-weight-bold: 600;
  --ds-tracking-tight: -0.02em; --ds-tracking-normal: 0;
  /* 阴影 */
  --ds-shadow-sm: 0 2px 2px rgba(0,0,0,.04);
  --ds-shadow-md: 0 1px 1px rgba(0,0,0,.02), 0 4px 8px -4px rgba(0,0,0,.04), 0 16px 24px -8px rgba(0,0,0,.06);
  --ds-shadow-lg: 0 1px 1px rgba(0,0,0,.02), 0 8px 16px -4px rgba(0,0,0,.04), 0 24px 32px -8px rgba(0,0,0,.06);
  /* 动效 */
  --ds-ease: cubic-bezier(.2,.8,.2,1);
  --ds-dur-fast: 120ms; --ds-dur-base: 200ms; --ds-dur-slow: 320ms;
}

[data-theme="dark"] {
  --ds-bg: #000000;            --ds-bg-subtle: #0a0a0a;
  --ds-bg-elevated: #1a1a1a;   --ds-bg-sunken: #000000;
  --ds-fg: #ededed;            --ds-fg-muted: #a0a0a0;
  --ds-fg-subtle: #707070;     --ds-fg-on-accent: #ffffff;
  --ds-border: #2e2e2e;        --ds-border-strong: #454545;
  --ds-primary: #ededed;       --ds-primary-hover: #d4d4d4;
  --ds-primary-active: #ffffff;--ds-primary-fg: #000000;
  --ds-accent: #006efe;        --ds-accent-fg: #ffffff;
  --ds-success: #62c073; --ds-success-bg: #002608; --ds-success-fg: #d8ffe4;
  --ds-warning: #f5b549; --ds-warning-bg: #2a1700; --ds-warning-fg: #fff3d5;
  --ds-danger:  #ff5c6c; --ds-danger-bg:  #330a11; --ds-danger-fg:  #ffe9ed;
  --ds-info:    #52a8ff; --ds-info-bg:    #06193a; --ds-info-fg:    #eaf6ff;
  --ds-focus: #006efe;
  --ds-shadow-sm: 0 2px 2px rgba(0,0,0,.4);
  --ds-shadow-md: 0 4px 8px -4px rgba(0,0,0,.5), 0 16px 24px -8px rgba(0,0,0,.6);
  --ds-shadow-lg: 0 8px 16px -4px rgba(0,0,0,.5), 0 24px 32px -8px rgba(0,0,0,.7);
}
```

> `.dark` 类兼容：在 tokens.css 末尾加 `.dark { ... }` 复用同一组暗色值，或用 `[data-theme="dark"], .dark { }` 选择器同时覆盖。

## 四、README.md 章节结构（固定顺序）

1. **标题 + 一句话气质**（这套风格是谁、给谁、什么感觉）
2. **设计哲学 / 性格**（3–5 条原则；与 Geist 基底的关系：继承什么、改什么）
3. **何时用 / 何时别用**
4. **颜色** —— 语义 token 表（亮+暗），含取值与用途；强调色梯度
5. **字体** —— 字族选择理由、比例尺、字重、字距、中文适配
6. **间距与布局** —— 比例尺、节奏、容器宽、栅格
7. **圆角 / 阴影 / 描边** —— 取值与气质说明
8. **动效** —— 时长、曲线、典型过渡、`prefers-reduced-motion`
9. **组件规格** —— 至少：按钮(全状态)、输入框、卡片、徽章/标签、提示条(alert)、导航。给尺寸/色/态
10. **可访问性** —— 对比度、焦点、触控目标 ≥44px、可减弱动效
11. **Do / Don't** —— 各 4–6 条，点出本风格最容易翻车的点
12. **如何接入** —— 引 tokens.css、用变量、（Tailwind 项目）引 preset

## 五、preview.html 章节清单（自包含，双击即开）

- 顶部：风格名 + 一句话 + **亮/暗切换按钮**（JS 切 `document.documentElement.dataset.theme`）
- 色板：所有语义色 + 状态色 swatch（标注变量名与 hex）
- 字体：完整字号比例尺示例 + 字重
- 按钮：primary/secondary/tertiary/danger × default/hover/disabled + 大中小三尺寸
- 表单：input / textarea / select / checkbox / radio / switch（含 focus 态演示）
- 卡片：标题+正文+操作 的内容卡 ×2–3
- 徽章/标签：各语义色
- 提示条 alert：success/warning/danger/info 四种
- 导航：一个顶栏 + 一组 tab 或侧边项
- 表格：一个带表头的小数据表（体现 tabular 数字/密度）
- 全部用 `var(--ds-*)`，**内联 `<style>`**，不外链 CSS/JS/字体（字体用 system 回退即可）。

## 六、质量红线（Do / Don't）

- 应：变量名严格照契约；色值满足 WCAG AA（正文 4.5:1，大字 3:1）。
- 应：亮暗双主题都要可用，preview 两个主题都要好看。
- 应：风格要"够味"——气质差异要肉眼可辨，不是换个主色的同一张脸。
- 忌：不外链任何 CDN/字体/JS（preview 必须离线双击可用）。
- 忌：不堆 emoji 当图标；不硬编码颜色到组件（一律走变量）。
- 忌：不照抄 Geist 的中性灰——除非该风格本就该克制（如企业/B端）。
