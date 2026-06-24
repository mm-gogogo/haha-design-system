/**
 * 📖 aibacknovel · 小说阅读站 Tailwind 预设
 * 基于 editorial 风 + aibacknovel 定制（正式化其 DESIGN.md）。
 * 全部消费 tokens.css 的 CSS 变量（--ds-*），三主题（纸白/暖褐/夜间）自动跟随。
 *
 * 用法：
 *   // tailwind.config.js
 *   module.exports = { presets: [require('./projects/aibacknovel/tailwind.preset.js')] }
 *   // 入口引入 tokens.css
 *   import './projects/aibacknovel/tokens.css'
 *
 * 主轴：正文/标题/书名用 font-serif；控件/元信息/评论用 font-sans；引用代码用 font-mono。
 *   阅读容器 max-w-reading（40rem）；正文配 leading-relaxed。
 *
 * 三主题切换（皆作用于 <html>）：
 *   纸白(默认) = 无 data-theme；暖褐 = data-theme="sepia"；夜间 = data-theme="dark"（或 .dark）。
 *   只有 dark 是 Tailwind 的 `dark:` 变体来源；sepia 用属性选择器自定义工具/组件层。
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
          DEFAULT: 'var(--ds-accent)',       // 文字/链接强调（AA 达标）
          fg: 'var(--ds-accent-fg)',
          soft: 'var(--ds-accent-soft)',     // 非文字装饰用明亮赭橙（气泡底/首字下沉/渐变）
        },
        // 项目品牌赭橙端点（logo/渐变，非文字）
        brand: 'var(--ds-brand)',

        success: { DEFAULT: 'var(--ds-success)', bg: 'var(--ds-success-bg)', fg: 'var(--ds-success-fg)' },
        warning: { DEFAULT: 'var(--ds-warning)', bg: 'var(--ds-warning-bg)', fg: 'var(--ds-warning-fg)' },
        danger:  { DEFAULT: 'var(--ds-danger)',  bg: 'var(--ds-danger-bg)',  fg: 'var(--ds-danger-fg)'  },
        info:    { DEFAULT: 'var(--ds-info)',    bg: 'var(--ds-info-bg)',    fg: 'var(--ds-info-fg)'    },

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
        serif: 'var(--ds-font-serif)',   // 正文/标题/书名（主角）
        sans: 'var(--ds-font-sans)',     // 控件/元信息/评论
        mono: 'var(--ds-font-mono)',     // 引用代码
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
        1: 'var(--ds-space-1)',   2: 'var(--ds-space-2)',
        3: 'var(--ds-space-3)',   4: 'var(--ds-space-4)',
        5: 'var(--ds-space-5)',   6: 'var(--ds-space-6)',
        7: 'var(--ds-space-7)',   8: 'var(--ds-space-8)',
        9: 'var(--ds-space-9)',   10: 'var(--ds-space-10)',
        11: 'var(--ds-space-11)', 12: 'var(--ds-space-12)',
      },

      // 阅读容器宽度（editorial 核心：40rem / 640px，每行约 32–40 汉字）
      maxWidth: {
        reading: '40rem',
        prose: '40rem',
      },

      zIndex: {
        ad: 'var(--ds-z-ad)',
        topbar: 'var(--ds-z-topbar)',
        progress: 'var(--ds-z-progress)',
        mask: 'var(--ds-z-mask)',
        drawer: 'var(--ds-z-drawer)',
        'modal-mask': 'var(--ds-z-modal-mask)',
        modal: 'var(--ds-z-modal)',
        toast: 'var(--ds-z-toast)',
      },

      transitionTimingFunction: { ds: 'var(--ds-ease)' },
      transitionDuration: {
        fast: 'var(--ds-dur-fast)',
        base: 'var(--ds-dur-base)',
        slow: 'var(--ds-dur-slow)',
      },
    },
  },
  // 夜间用 [data-theme="dark"] 或 .dark 驱动 `dark:` 变体；暖褐(sepia)走属性选择器自定义。
  darkMode: ['selector', '[data-theme="dark"]'],
};
