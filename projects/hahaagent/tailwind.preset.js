/**
 * 哈哈智能 hahaagent — Tailwind 预设
 * 基于「暗黑科技风」+ hahaagent「AI Agent 控制台」品牌定制。
 *
 * 消费 tokens.css 暴露的 CSS 变量（--ds-*），不硬编码颜色。
 * 暗色优先：tokens.css 的 :root 即暗色；亮色由 .light / [data-theme="light"] 覆盖。
 * 这里把 darkMode 设为 class，但语义颜色全走 var(--ds-*)，
 * 因此「主题切换」实际由 tokens.css 的选择器驱动，工具类无需切换。
 *
 * 用法：
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('./tailwind.preset.js')],
 *     content: ['./src/**\/*.{html,js,ts,jsx,tsx}'],
 *   };
 * 同时确保引入了 tokens.css（提供 --ds-* 变量）。
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 暗色由 tokens.css 的 :root / [data-theme] 驱动；class 仅为兼容
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // 表面与文字
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

        // 品牌与强调
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

        // 语义状态
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
        // 霓虹辉光工具类：外发主色 / accent 光晕（用于 hover / 状态灯）
        glow: '0 0 18px -2px var(--ds-primary)',
        'glow-accent': '0 0 18px -2px var(--ds-accent)',
        focus: 'var(--ds-focus-ring)',
      },

      ringColor: {
        DEFAULT: 'var(--ds-focus)',
        focus: 'var(--ds-focus)',
      },

      transitionTimingFunction: {
        ds: 'var(--ds-ease)',
      },

      transitionDuration: {
        fast: 'var(--ds-dur-fast)',
        base: 'var(--ds-dur-base)',
        slow: 'var(--ds-dur-slow)',
      },
    },
  },
  plugins: [],
};
