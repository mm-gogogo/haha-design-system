/**
 * Aqua · Y2K / 千禧水光（Frutiger Aero）Tailwind 预设
 * 全部消费 tokens.css 里的 CSS 变量（--ds-*），亮/暗主题自动跟随。
 * 水光质感 = 亮泽白 bg-elevated + 顶白高光(gloss-top) + 很圆圆角 + 柔投影。
 * 信号果冻按钮 = primary 渐变 + 顶高光 + hover 水蓝外辉光（见 preview.html 配方）。
 * GLOSSY 亮泽 —— 不磨砂、不哑光。
 * 用法：
 *   // tailwind.config.js
 *   module.exports = { presets: [require('./styles/19-y2k-aqua/tailwind.preset.js')] }
 *   // 并在入口引入 tokens.css
 *   import './styles/19-y2k-aqua/tokens.css'
 *
 *   <div class="bg-bg-elevated border border-border rounded-md
 *               shadow-md shadow-gloss-top text-fg">水光卡</div>
 *   <button class="bg-primary text-primary-fg rounded-md shadow-md shadow-gloss-top
 *                  transition duration-base ease-ds">果冻主操作</button>
 *
 * 注意：果冻光泽来自「线性渐变 + shadow-gloss-top 顶高光 + 柔影」三件套，
 *       承载正文的表面请使用 bg-elevated（亮泽白），保证文字 ≥4.5:1。
 *       backdrop-blur-gloss 仅用于镀铬条 / 弹层点缀，切勿全页磨砂化。
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
        // 果冻顶部内白高光（与外阴影叠加，是水光质感的灵魂）
        'gloss-top': 'var(--ds-gloss-top)',
        // 焦点环
        focus: 'var(--ds-focus-ring)',
      },

      // 极轻模糊半径（仅镀铬条 / 弹层点缀，配 backdrop-blur-gloss / backdrop-blur-gloss-sm）
      backdropBlur: {
        gloss: 'var(--ds-gloss-blur)',
        'gloss-sm': 'var(--ds-gloss-blur-sm)',
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
