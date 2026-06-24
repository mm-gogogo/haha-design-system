/* ============================================================================
   🧭 subei-travel · 苏北游 设计系统 — tailwind.preset.js
   ----------------------------------------------------------------------------
   基于「像素风」+ subei-travel 定制（复古旅行探索游戏 HUD）。
   所有工具类全部消费 tokens.css 里的 CSS 变量（var(--ds-*)），
   故必须先在项目里引入 tokens.css，再 require 本 preset。

   用法：
     // tailwind.config.js
     module.exports = { presets: [require('./tailwind.preset.js')] };
   然后可用：bg-primary text-primary-fg border-strong shadow-pixel-md
            rounded-sm font-mono ease-pixel duration-base 等。
   ============================================================================ */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg:            'var(--ds-bg)',
        'bg-subtle':   'var(--ds-bg-subtle)',
        'bg-elevated': 'var(--ds-bg-elevated)',
        'bg-sunken':   'var(--ds-bg-sunken)',
        fg:            'var(--ds-fg)',
        'fg-muted':    'var(--ds-fg-muted)',
        'fg-subtle':   'var(--ds-fg-subtle)',
        'fg-on-accent':'var(--ds-fg-on-accent)',
        border:        'var(--ds-border)',
        'border-strong':'var(--ds-border-strong)',

        primary:         'var(--ds-primary)',
        'primary-hover': 'var(--ds-primary-hover)',
        'primary-active':'var(--ds-primary-active)',
        'primary-fg':    'var(--ds-primary-fg)',
        accent:          'var(--ds-accent)',
        'accent-fg':     'var(--ds-accent-fg)',

        success:      'var(--ds-success)',
        'success-bg': 'var(--ds-success-bg)',
        'success-fg': 'var(--ds-success-fg)',
        warning:      'var(--ds-warning)',
        'warning-bg': 'var(--ds-warning-bg)',
        'warning-fg': 'var(--ds-warning-fg)',
        danger:       'var(--ds-danger)',
        'danger-bg':  'var(--ds-danger-bg)',
        'danger-fg':  'var(--ds-danger-fg)',
        info:         'var(--ds-info)',
        'info-bg':    'var(--ds-info-bg)',
        'info-fg':    'var(--ds-info-fg)',

        focus: 'var(--ds-focus)',
      },

      // 像素风描边偏好 2–3px 实线
      borderColor: {
        DEFAULT: 'var(--ds-border)',
        strong:  'var(--ds-border-strong)',
      },
      borderWidth: {
        DEFAULT: '2px',
        pixel:   '2px',
        'pixel-strong': '3px',
      },

      borderRadius: {
        sm:   'var(--ds-radius-sm)',
        md:   'var(--ds-radius-md)',
        lg:   'var(--ds-radius-lg)',
        full: 'var(--ds-radius-full)',
      },

      spacing: {
        1: 'var(--ds-space-1)',  2: 'var(--ds-space-2)',  3: 'var(--ds-space-3)',
        4: 'var(--ds-space-4)',  5: 'var(--ds-space-5)',  6: 'var(--ds-space-6)',
        7: 'var(--ds-space-7)',  8: 'var(--ds-space-8)',  9: 'var(--ds-space-9)',
        10:'var(--ds-space-10)', 11:'var(--ds-space-11)', 12:'var(--ds-space-12)',
      },

      fontFamily: {
        sans:  'var(--ds-font-sans)',
        serif: 'var(--ds-font-serif)',
        mono:  'var(--ds-font-mono)',
      },
      fontSize: {
        xs:  'var(--ds-text-xs)',
        sm:  'var(--ds-text-sm)',
        base:'var(--ds-text-base)',
        md:  'var(--ds-text-md)',
        lg:  'var(--ds-text-lg)',
        xl:  'var(--ds-text-xl)',
        '2xl':'var(--ds-text-2xl)',
        '3xl':'var(--ds-text-3xl)',
      },
      lineHeight: {
        tight:   'var(--ds-leading-tight)',
        normal:  'var(--ds-leading-normal)',
        relaxed: 'var(--ds-leading-relaxed)',
      },
      fontWeight: {
        normal: 'var(--ds-weight-normal)',
        medium: 'var(--ds-weight-medium)',
        bold:   'var(--ds-weight-bold)',
      },
      letterSpacing: {
        tight:  'var(--ds-tracking-tight)',
        normal: 'var(--ds-tracking-normal)',
      },

      // 硬实心偏移阴影（盖章/键帽/贴纸感），绝不模糊
      boxShadow: {
        'pixel-sm': 'var(--ds-shadow-sm)',
        'pixel-md': 'var(--ds-shadow-md)',
        'pixel-lg': 'var(--ds-shadow-lg)',
        focus:      'var(--ds-focus-ring)',
      },

      // steps 跳帧曲线
      transitionTimingFunction: {
        pixel: 'var(--ds-ease)',
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
