/**
 * HahaTool · 哈哈工具 Tailwind Preset
 * 基于「企业风 Enterprise」+ hahatool 定制
 * ---------------------------------------------------------------
 * 同时暴露两套色：
 *   1) --ds-*    设计系统契约色（bg / fg / primary / 语义状态…）
 *   2) brand-*   项目品牌色，rgb(var(--brand-N) / <alpha-value>)，
 *                与 hahatool 现有 tailwind.config.ts 写法一致 → 可直接 `bg-brand-600`、`text-brand-500/80`
 *
 * 用法（项目接入，二选一）：
 *
 *  A. 完整接管（推荐新建/重构页面）：
 *     // tailwind.config.ts
 *     import preset from "../../designsystem/projects/hahatool/tailwind.preset.js";
 *     export default { presets: [preset], content: ["./src/**\/*.{ts,tsx}"] };
 *     // 入口引入 tokens.css（提供 --ds-* / --brand-* / --chart-*）
 *
 *  B. 仅补 ds-*（保留项目现有 brand-* 配置不动）：
 *     把下方 colors.brand 删掉即可，项目 globals.css 已定义 --brand-*。
 *
 * darkMode 用 'class'（对齐项目 darkMode:'class'），并兼容 [data-theme="dark"]。
 * 切换 4 套主题色：在 <html> 上加 data-accent="violet|sky|emerald|amber"（或 .brand-* 类）。
 */

/** 项目品牌色：rgb 三元组形式，支持 <alpha-value>（与项目原 config 完全一致的写法） */
const brand = Object.fromEntries(
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => [
    n,
    `rgb(var(--brand-${n}) / <alpha-value>)`,
  ]),
);

module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        /* ---- 项目品牌色（brand-*）---- */
        brand,

        /* ---- 设计系统契约色（ds-*）---- */
        bg: {
          DEFAULT: "var(--ds-bg)",
          subtle: "var(--ds-bg-subtle)",
          elevated: "var(--ds-bg-elevated)",
          sunken: "var(--ds-bg-sunken)",
        },
        fg: {
          DEFAULT: "var(--ds-fg)",
          muted: "var(--ds-fg-muted)",
          subtle: "var(--ds-fg-subtle)",
          "on-accent": "var(--ds-fg-on-accent)",
        },
        border: {
          DEFAULT: "var(--ds-border)",
          strong: "var(--ds-border-strong)",
        },
        primary: {
          DEFAULT: "var(--ds-primary)",
          hover: "var(--ds-primary-hover)",
          active: "var(--ds-primary-active)",
          fg: "var(--ds-primary-fg)",
        },
        accent: {
          DEFAULT: "var(--ds-accent)",
          fg: "var(--ds-accent-fg)",
        },
        success: { DEFAULT: "var(--ds-success)", bg: "var(--ds-success-bg)", fg: "var(--ds-success-fg)" },
        warning: { DEFAULT: "var(--ds-warning)", bg: "var(--ds-warning-bg)", fg: "var(--ds-warning-fg)" },
        danger:  { DEFAULT: "var(--ds-danger)",  bg: "var(--ds-danger-bg)",  fg: "var(--ds-danger-fg)" },
        info:    { DEFAULT: "var(--ds-info)",    bg: "var(--ds-info-bg)",    fg: "var(--ds-info-fg)" },
        focus: "var(--ds-focus)",

        /* ---- 图表色（手写 SVG 可用 theme('colors.chart.grid')）---- */
        chart: {
          grid: "var(--chart-grid)",
          label: "var(--chart-label)",
        },
      },
      borderColor: { DEFAULT: "var(--ds-border)" },
      borderRadius: {
        sm: "var(--ds-radius-sm)",
        md: "var(--ds-radius-md)",
        lg: "var(--ds-radius-lg)",
        full: "var(--ds-radius-full)",
      },
      spacing: {
        1: "var(--ds-space-1)", 2: "var(--ds-space-2)", 3: "var(--ds-space-3)", 4: "var(--ds-space-4)",
        5: "var(--ds-space-5)", 6: "var(--ds-space-6)", 7: "var(--ds-space-7)", 8: "var(--ds-space-8)",
        9: "var(--ds-space-9)", 10: "var(--ds-space-10)", 11: "var(--ds-space-11)", 12: "var(--ds-space-12)",
      },
      fontFamily: {
        sans: "var(--ds-font-sans)",
        serif: "var(--ds-font-serif)",
        mono: "var(--ds-font-mono)",
        /* 兼容项目原有 font-display 别名 */
        display: "var(--ds-font-sans)",
      },
      fontSize: {
        xs: "var(--ds-text-xs)", sm: "var(--ds-text-sm)", base: "var(--ds-text-base)", md: "var(--ds-text-md)",
        lg: "var(--ds-text-lg)", xl: "var(--ds-text-xl)", "2xl": "var(--ds-text-2xl)", "3xl": "var(--ds-text-3xl)",
      },
      lineHeight: {
        tight: "var(--ds-leading-tight)",
        normal: "var(--ds-leading-normal)",
        relaxed: "var(--ds-leading-relaxed)",
      },
      fontWeight: {
        normal: "var(--ds-weight-normal)",
        medium: "var(--ds-weight-medium)",
        bold: "var(--ds-weight-bold)",
      },
      letterSpacing: {
        tight: "var(--ds-tracking-tight)",
        normal: "var(--ds-tracking-normal)",
      },
      boxShadow: {
        sm: "var(--ds-shadow-sm)",
        md: "var(--ds-shadow-md)",
        lg: "var(--ds-shadow-lg)",
        focus: "var(--ds-focus-ring)",
      },
      ringColor: {
        DEFAULT: "var(--ds-focus)",
        focus: "var(--ds-focus)",
      },
      transitionTimingFunction: { ds: "var(--ds-ease)" },
      transitionDuration: {
        fast: "var(--ds-dur-fast)",
        base: "var(--ds-dur-base)",
        slow: "var(--ds-dur-slow)",
      },
    },
  },
  plugins: [],
};
