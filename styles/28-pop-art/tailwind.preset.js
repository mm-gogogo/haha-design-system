/**
 * Pop Art / 波普艺术 — Tailwind Preset
 * ---------------------------------------------------------------------------
 * 全量映射 --ds-* CSS 变量。先在入口引入 tokens.css（提供 :root + 暗色变量），
 * 再在 tailwind.config.js 里 `presets: [require('./tailwind.preset.js')]`。
 *
 * 暗色：使用 [data-theme="dark"] 或 .dark；本预设 darkMode 同时支持二者。
 * Pop Art 气质要点：2-3px comic keyline、Ben-Day 网点作装饰、圆角贴近漫画
 * 气泡、shadow 为硬实心偏移。黄色只做装饰或大色块，不做正文前景。
 */
module.exports = {
  darkMode: ['variant', ['&:where([data-theme="dark"] *)', '&:where(.dark *)']],
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

        success: { DEFAULT: 'var(--ds-success)', bg: 'var(--ds-success-bg)', fg: 'var(--ds-success-fg)' },
        warning: { DEFAULT: 'var(--ds-warning)', bg: 'var(--ds-warning-bg)', fg: 'var(--ds-warning-fg)' },
        danger:  { DEFAULT: 'var(--ds-danger)',  bg: 'var(--ds-danger-bg)',  fg: 'var(--ds-danger-fg)' },
        info:    { DEFAULT: 'var(--ds-info)',    bg: 'var(--ds-info-bg)',    fg: 'var(--ds-info-fg)' },

        focus: 'var(--ds-focus)',
      },

      borderColor: {
        DEFAULT: 'var(--ds-border)',
        strong: 'var(--ds-border-strong)',
      },

      borderRadius: {
        sm: 'var(--ds-radius-sm)',
        md: 'var(--ds-radius-md)',
        lg: 'var(--ds-radius-lg)',
        full: 'var(--ds-radius-full)',
      },

      borderWidth: {
        // Comic keylines
        DEFAULT: '2px',
        thick: '3px',
      },

      spacing: {
        1: 'var(--ds-space-1)',  2: 'var(--ds-space-2)',  3: 'var(--ds-space-3)',  4: 'var(--ds-space-4)',
        5: 'var(--ds-space-5)',  6: 'var(--ds-space-6)',  7: 'var(--ds-space-7)',  8: 'var(--ds-space-8)',
        9: 'var(--ds-space-9)',  10: 'var(--ds-space-10)', 11: 'var(--ds-space-11)', 12: 'var(--ds-space-12)',
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
        // Hard offset shadows, no blur
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
    },
  },
  plugins: [],
};
