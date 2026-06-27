/**
 * Blueprint · 蓝图技术风 — Tailwind Preset
 * ---------------------------------------------------------------------------
 * 全量映射 --ds-* CSS 变量。先在入口引入 tokens.css（提供 :root 暗色基底 +
 * [data-theme="light"]/.light 亮色覆盖），再在 tailwind.config.js 里：
 *   presets: [require('./tailwind.preset.js')]
 *
 * 暗色优先：:root 即暗色蓝图纸，亮色靠 [data-theme="light"] / .light 覆盖。
 *
 * 蓝图气质要点：
 *   - radius 极锐利（sm0/md2/lg4），像切割规整的 CAD 面板。
 *   - shadow 只做 1px 技术描边，不做投影。
 *   - boxShadow.line / line-strong 提供平面制图描边工具类。
 *   - 动效利落 150–250ms，reduced-motion 下关闭装饰动画。
 */
module.exports = {
  // 默认暗。提供 light 变体：&:where([data-theme="light"] *) / &:where(.light *)
  darkMode: ['variant', ['&:where([data-theme="dark"] *)', '&:where(.dark *)', '&:where(:root)']],
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
        sm: 'var(--ds-shadow-sm)',
        md: 'var(--ds-shadow-md)',
        lg: 'var(--ds-shadow-lg)',
        focus: 'var(--ds-focus-ring)',
        line: '0 0 0 1px var(--ds-border)',
        'line-strong': '0 0 0 1px var(--ds-border-strong)',
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
