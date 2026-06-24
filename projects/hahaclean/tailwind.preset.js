/**
 * 🧹 HahaClean · 哈哈清理 Tailwind 预设
 * 基于新拟物风预设 + hahaclean 定制（洁净薄荷 / 松石青换肤）。
 * 全部消费 tokens.css 里的 CSS 变量（--ds-*），亮 / 暗主题自动跟随。
 * 含双向软阴影：shadow-sm/md/lg（凸起）+ shadow-inset/inset-sm（凹陷）+ shadow-focus（焦点环）。
 *
 * 用法：
 *   // tailwind.config.js
 *   module.exports = { presets: [require('./projects/hahaclean/tailwind.preset.js')] }
 *   // 并在入口引入 tokens.css
 *   import './projects/hahaclean/tokens.css'
 *
 *   <button class="bg-primary text-primary-fg rounded-sm shadow-md active:shadow-inset
 *                  transition duration-base ease-ds">扫描</button>
 *   <input class="bg-bg-sunken text-fg rounded-sm shadow-inset" />
 *   <a class="text-primary-strong">查看可回收项</a>   // 主色文字落在 bg 上（AA）
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
          strong: 'var(--ds-primary-strong)', // 主色文字（链接 / 选中导航文字，AA on bg）
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
        // 凸起（软塑料抬起）
        sm: 'var(--ds-shadow-sm)',
        md: 'var(--ds-shadow-md)',
        lg: 'var(--ds-shadow-lg)',
        // 凹陷（输入 / 进度槽 / 选中导航 / 按下态）
        inset: 'var(--ds-shadow-inset)',
        'inset-sm': 'var(--ds-shadow-inset-sm)',
        // 焦点环
        focus: 'var(--ds-focus-ring)',
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
  // 暗色用 [data-theme="dark"] 或 .dark 任一驱动（项目固定浅色，暗色供官网 site/）
  darkMode: ['selector', '[data-theme="dark"]'],
};
