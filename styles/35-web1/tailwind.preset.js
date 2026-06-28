/**
 * 90s Web / Web 1.0 - Tailwind Preset
 * ---------------------------------------------------------------------------
 * Maps the fixed --ds-* CSS variable contract for a polished early-web kit.
 * Import tokens.css first, then add this preset to tailwind.config.js.
 *
 * Dark mode supports [data-theme="dark"] and .dark. The visual language is
 * tiled wallpaper, ruled panels, 3D bevels, hard shadows, and step motion.
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
        DEFAULT: '2px',
        web1: '3px',
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
      },

      transitionTimingFunction: {
        ds: 'var(--ds-ease)',
        web1: 'steps(4, end)',
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
