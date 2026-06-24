/**
 * 🌿 哈哈 · haha-soft-research Tailwind 预设
 * 基于「极简 editorial 风」换肤为「开源软件全家桶官网 + 文档」气质。
 * 全部消费 tokens.css 里的 CSS 变量（--ds-*），所以亮/暗主题自动跟随。
 *
 * 用法：
 *   // tailwind.config.js
 *   module.exports = { presets: [require('./projects/haha-soft-research/tailwind.preset.js')] }
 *   // 并在入口引入 tokens.css
 *   import './projects/haha-soft-research/tokens.css'
 *
 * 提示：本定制主轴是「sans 主力（产品 UI/正文/文档）+ serif 仅大标题/品牌点缀」。
 *   产品卡、表格、按钮、表单用 font-sans；大标题/品牌字可 font-serif；代码 font-mono。
 *   文档正文容器建议 max-w-reading（720px），配 leading-relaxed。
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
        focus: 'var(--ds-focus-ring)',
      },

      fontFamily: {
        // 主力：无衬线（产品 UI / 正文 / 文档）
        sans: 'var(--ds-font-sans)',
        // 点缀：衬线（大标题 / 品牌）
        serif: 'var(--ds-font-serif)',
        // 代码：等宽
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

      // 文档/正文容器宽度（产品文档约 720px，比纯阅读站稍宽）
      maxWidth: {
        reading: '720px',
        prose: '720px',
        // 产品矩阵网格容器
        shell: '1120px',
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
