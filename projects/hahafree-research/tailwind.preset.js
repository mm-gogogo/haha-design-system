/**
 * hahafree调研 · TRAE 项目情报台 · Tailwind Preset
 * ------------------------------------------------------------
 * 基于「B 端风」定制，正式化项目既有 DESIGN.md。
 * 消费本 kit 的 tokens.css 中的 CSS 变量（--ds-* / --chart-*），不硬编码取值。
 *
 * 用法：
 *   1. 入口引入本 kit 的 tokens.css（提供 --ds-* / --chart-* 与亮/暗主题）。
 *   2. tailwind.config.js:
 *        module.exports = {
 *          presets: [require('./projects/hahafree-research/tailwind.preset.js')],
 *        };
 *   3. 暗色：<html data-theme="dark"> 或 class="dark"。
 *
 * 适配项目栈：React 19 + HeroUI + Tailwind 4 + Hono。
 * 数据台高密度：用 h-control-md(32px) 默认控件、tabular-nums 对齐数字列。
 */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--ds-bg)',
        'bg-subtle': 'var(--ds-bg-subtle)',
        'bg-elevated': 'var(--ds-bg-elevated)',
        'bg-sunken': 'var(--ds-bg-sunken)',
        fg: 'var(--ds-fg)',
        'fg-muted': 'var(--ds-fg-muted)',
        'fg-subtle': 'var(--ds-fg-subtle)',
        'fg-on-accent': 'var(--ds-fg-on-accent)',
        border: 'var(--ds-border)',
        'border-strong': 'var(--ds-border-strong)',
        primary: {
          DEFAULT: 'var(--ds-primary)',
          hover: 'var(--ds-primary-hover)',
          active: 'var(--ds-primary-active)',
          fg: 'var(--ds-primary-fg)',
        },
        accent: {
          DEFAULT: 'var(--ds-accent)',
          fg: 'var(--ds-accent-fg)',
        },
        success: {
          DEFAULT: 'var(--ds-success)',
          bg: 'var(--ds-success-bg)',
          fg: 'var(--ds-success-fg)',
        },
        warning: {
          DEFAULT: 'var(--ds-warning)',
          bg: 'var(--ds-warning-bg)',
          fg: 'var(--ds-warning-fg)',
        },
        danger: {
          DEFAULT: 'var(--ds-danger)',
          bg: 'var(--ds-danger-bg)',
          fg: 'var(--ds-danger-fg)',
        },
        info: {
          DEFAULT: 'var(--ds-info)',
          bg: 'var(--ds-info-bg)',
          fg: 'var(--ds-info-fg)',
        },
        focus: 'var(--ds-focus)',
        // 手写 SVG / 图表序列（赛道分类、质量条、趋势）
        chart: {
          1: 'var(--chart-1)',
          2: 'var(--chart-2)',
          3: 'var(--chart-3)',
          4: 'var(--chart-4)',
          5: 'var(--chart-5)',
          6: 'var(--chart-6)',
          grid: 'var(--chart-grid)',
          axis: 'var(--chart-axis)',
          track: 'var(--chart-track)',
          positive: 'var(--chart-positive)',
          negative: 'var(--chart-negative)',
          highlight: 'var(--chart-highlight)',
        },
      },
      borderColor: {
        DEFAULT: 'var(--ds-border)',
      },
      borderRadius: {
        sm: 'var(--ds-radius-sm)',
        md: 'var(--ds-radius-md)',
        lg: 'var(--ds-radius-lg)',
        full: 'var(--ds-radius-full)',
      },
      spacing: {
        1: 'var(--ds-space-1)',
        2: 'var(--ds-space-2)',
        3: 'var(--ds-space-3)',
        4: 'var(--ds-space-4)',
        5: 'var(--ds-space-5)',
        6: 'var(--ds-space-6)',
        7: 'var(--ds-space-7)',
        8: 'var(--ds-space-8)',
        9: 'var(--ds-space-9)',
        10: 'var(--ds-space-10)',
        11: 'var(--ds-space-11)',
        12: 'var(--ds-space-12)',
      },
      height: {
        'control-sm': 'var(--ds-control-sm)',
        'control-md': 'var(--ds-control-md)',
        'control-lg': 'var(--ds-control-lg)',
      },
      minHeight: {
        'control-sm': 'var(--ds-control-sm)',
        'control-md': 'var(--ds-control-md)',
        'control-lg': 'var(--ds-control-lg)',
      },
      fontFamily: {
        sans: 'var(--ds-font-sans)',
        serif: 'var(--ds-font-serif)',
        mono: 'var(--ds-font-mono)',
      },
      fontSize: {
        xs: 'var(--ds-text-xs)',
        sm: 'var(--ds-text-sm)',
        base: 'var(--ds-text-base)',
        md: 'var(--ds-text-md)',
        lg: 'var(--ds-text-lg)',
        xl: 'var(--ds-text-xl)',
        '2xl': 'var(--ds-text-2xl)',
        '3xl': 'var(--ds-text-3xl)',
      },
      lineHeight: {
        tight: 'var(--ds-leading-tight)',
        normal: 'var(--ds-leading-normal)',
        relaxed: 'var(--ds-leading-relaxed)',
      },
      fontWeight: {
        normal: 'var(--ds-weight-normal)',
        medium: 'var(--ds-weight-medium)',
        bold: 'var(--ds-weight-bold)',
      },
      letterSpacing: {
        tight: 'var(--ds-tracking-tight)',
        normal: 'var(--ds-tracking-normal)',
      },
      boxShadow: {
        sm: 'var(--ds-shadow-sm)',
        md: 'var(--ds-shadow-md)',
        lg: 'var(--ds-shadow-lg)',
        focus: 'var(--ds-focus-ring)',
      },
      transitionTimingFunction: {
        ds: 'var(--ds-ease)',
      },
      transitionDuration: {
        fast: 'var(--ds-dur-fast)',
        base: 'var(--ds-dur-base)',
        slow: 'var(--ds-dur-slow)',
      },
      fontVariantNumeric: {
        tabular: 'tabular-nums',
      },
    },
  },
  plugins: [],
};
