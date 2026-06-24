/**
 * Glassmorphism · 玻璃拟态 Tailwind 预设
 * 全部消费 tokens.css 里的 CSS 变量（--ds-*），亮/暗主题自动跟随。
 * 玻璃面 = 半透明 bg-elevated + backdrop-blur + 1px 高光描边(border) + glass-inset 顶高光。
 * 用法：
 *   // tailwind.config.js
 *   module.exports = { presets: [require('./styles/09-glassmorphism/tailwind.preset.js')] }
 *   // 并在入口引入 tokens.css
 *   import './styles/09-glassmorphism/tokens.css'
 *
 *   <div class="bg-bg-elevated backdrop-blur-glass border border-border rounded-md
 *               shadow-md shadow-glass-inset text-fg">玻璃卡</div>
 *   <button class="bg-primary text-primary-fg rounded-sm shadow-md
 *                  transition duration-base ease-ds">主操作</button>
 *
 * 注意：玻璃效果需在元素上同时使用 backdrop-blur-glass + bg-bg-elevated + border-border，
 *       承载正文的玻璃面请使用 bg-elevated（高不透明度），保证文字 ≥4.5:1。
 */
module.exports = {
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
      },

      borderRadius: {
        sm: 'var(--ds-radius-sm)',
        md: 'var(--ds-radius-md)',
        lg: 'var(--ds-radius-lg)',
        full: 'var(--ds-radius-full)',
      },

      boxShadow: {
        sm: 'var(--ds-shadow-sm)',
        md: 'var(--ds-shadow-md)',
        lg: 'var(--ds-shadow-lg)',
        // 玻璃顶部内高光（与外阴影叠加）
        'glass-inset': 'var(--ds-glass-inset)',
        // 焦点环
        focus: 'var(--ds-focus-ring)',
      },

      // 玻璃模糊半径（配 backdrop-blur-glass / backdrop-blur-glass-sm）
      backdropBlur: {
        glass: 'var(--ds-glass-blur)',
        'glass-sm': 'var(--ds-glass-blur-sm)',
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

      zIndex: {
        dropdown: 'var(--ds-z-dropdown)',
        sticky: 'var(--ds-z-sticky)',
        'modal-backdrop': 'var(--ds-z-modal-backdrop)',
        modal: 'var(--ds-z-modal)',
        toast: 'var(--ds-z-toast)',
        tooltip: 'var(--ds-z-tooltip)',
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
  // 暗色用 [data-theme="dark"] 或 .dark 任一驱动
  darkMode: ['selector', '[data-theme="dark"]'],
};
