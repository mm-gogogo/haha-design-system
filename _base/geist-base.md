# Geist 基底规范（Vercel Design System）

> 来源：https://vercel.com/design.md ｜ https://vercel.com/design.dark.md
> 这是本仓库所有设计系统的**结构与思想基底**。每套风格都沿用 Geist 的「语义分层 + 比例尺 + 状态色 + 焦点环」骨架，只替换具体取值与气质。

## 设计哲学（要继承的）

1. **极致克制**：默认中性灰阶承载界面，强调色只用于"主操作 / 链接 / 当前选择 / 状态"。
2. **语义分层**：背景分 100/200（surface 层级），文字分 primary/secondary/tertiary，灰阶 100→1000 单调过渡。
3. **比例尺驱动**：字号、间距、圆角都来自固定比例尺，不随手取值。
4. **状态色成对**：每个语义色（蓝/红/琥珀/绿/青/紫/粉）都有 100→1000 十档，浅档作底、深档作字。
5. **可见焦点环**：键盘可达性靠双层 box-shadow 焦点环（白底环 + 主色环）。
6. **明暗双主题**：墨与底翻转，强调色在暗色下提亮（如蓝 `#006bff`→`#006efe`）。

## 颜色（Light）

| 角色 | 值 |
|---|---|
| Primary（主文字/主按钮底） | `#171717` |
| Secondary（次要文字） | `#4d4d4d` |
| Tertiary / Link（蓝） | `#006bff` |
| Neutral | `#f2f2f2` |
| Background-100（主表面） | `#ffffff` |
| Background-200（次表面） | `#fafafa` |

灰阶 Gray-100→1000：`#f2f2f2` → `#171717`（含中间档）；Alpha 灰阶 `#0000000d` → `#000000e8`（叠加用）。

强调色（各 100→1000 十档，浅→深）：
- Blue `#f0f7ff` → `#002359`
- Red `#ffeeef` → `#47000c`
- Amber `#fff6de` → `#561900`
- Green `#ecfdec` → `#003a00`
- Teal `#defffb` → `#003f34`
- Purple `#faf0ff` → `#2f004e`
- Pink `#ffe8f6` → `#460523`

> 每个强调色另有 P3 广色域 `oklch()` 等价值（用于 Display P3 屏）。

## 颜色（Dark）

| 角色 | 值 |
|---|---|
| Primary | `#ededed` |
| Secondary | `#a0a0a0` |
| Tertiary / Link（蓝） | `#006efe` |
| Neutral | `#1a1a1a` |
| Background-100 / 200 | `#000000` |

灰阶 Gray-100→1000：`#1a1a1a` → `#ededed`（mid：`#454545`、`#878787`）；Alpha 白叠加 `#ffffff12` → `#ffffffeb`。
强调色（暗）：Blue `#06193a`→`#eaf6ff`、Red `#330a11`→`#ffe9ed`、Amber `#2a1700`→`#fff3d5`、Green `#002608`→`#d8ffe4`、Teal `#00231b`→`#cbfff5`、Purple `#290c33`→`#fbecff`、Pink `#310d1e`→`#ffe9f4`。

## 字体

- **字族**：Geist Sans（UI/正文）、Geist Mono（代码/数据）。
- **Heading 比例**（heading-72 → heading-14）：72px→14px，统一 600 字重，负字距 -4.32px → -0.28px。
- **Label 比例**（label-20 → label-12）：400 字重，单行可扫读；含 `-mono` 变体。
- **Copy 比例**（copy-24 → copy-13）：400 字重正文，行高 36px→18px；含 `-mono` 变体。
- **Button 比例**（button-16 → button-12）：500 字重，行高 20px。

## 间距比例（4px 基）

`1,2,3,4,6,8,10,16,24` → `4,8,12,16,24,32,40,64,96` px。
节奏：组内 8px、组间 16px、区块间 32–40px。

## 圆角

- sm `6px`（日常控件/表面）
- md `12px`（菜单/弹层）
- lg `16px`（全屏表面）
- full `9999px`（药丸/头像/圆）

## 阴影

- 抬起卡片：`0 2px 2px rgba(0,0,0,.04)`
- 弹层/菜单：`0 1px 1px rgba(0,0,0,.02), 0 4px 8px -4px rgba(0,0,0,.04), 0 16px 24px -8px rgba(0,0,0,.06)`
- 模态/对话框：`0 1px 1px rgba(0,0,0,.02), 0 8px 16px -4px rgba(0,0,0,.04), 0 24px 32px -8px rgba(0,0,0,.06)`

## 断点

sm `401px` ｜ md `601px` ｜ lg `961px` ｜ xl `1200px` ｜ 2xl `1400px`

## 组件基线

| 组件 | 底色 | 文字 | 高 | 内边距 |
|---|---|---|---|---|
| button-primary | `#171717` | `#ffffff` | 40px | 0 10px |
| button-secondary | `#ffffff` | `#171717` | 40px | 0 10px |
| button-tertiary | 透明 | `#171717` | 40px | 0 10px |
| button-error | `#ea001d` | `#ffffff` | 40px | 0 10px |
| input | `#ffffff` | `#171717` | 40px | 0 12px |

小号 32px / 大号 48px；统一 `radius.sm`(6px)。

**焦点环**：`box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #006bff`
