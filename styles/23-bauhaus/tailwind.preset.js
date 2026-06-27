/**
 * Bauhaus · 包豪斯风 Tailwind Preset
 * ---------------------------------------------------------------
 * 消费 tokens.css 暴露的 CSS 变量（--ds-*）。
 * 颜色一律走变量 → 亮/暗主题随 [data-theme="dark"] / .dark 自动切换，无需重配 Tailwind。
 * 注意：本风格圆角全 0（方角），阴影即黑色 keyline/ring，无柔和投影。
 *
 * 用法：
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require("./styles/23-bauhaus/tailwind.preset.js")],
 *     content: ["./src/**\/*.{html,js,ts,jsx,tsx,vue}"],
 *   }
 *   // 别忘了在入口引入 tokens.css
 *
 * darkMode 用 class（.dark）与 [data-theme="dark"] 双兼容；
 * 这里设为 'class'，并在 tokens.css 里让 .dark 复用 [data-theme="dark"] 的暗色值。
 */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--ds-bg)",
          subtle: "var(--ds-bg-subtle)",
          elevated: "var(--ds-bg-elevated)",
          sunken: "var(--ds-bg-sunken)",
        },
        fg: {
          DEFAULT: "var(--ds-fg)",
          muted: "var(--ds-fg-muted)",
          subtle: "var(--ds-fg-subtle)",
          "on-accent": "var(--ds-fg-on-accent)",
        },
        border: {
          DEFAULT: "var(--ds-border)",
          strong: "var(--ds-border-strong)",
        },
        primary: {
          DEFAULT: "var(--ds-primary)",
          hover: "var(--ds-primary-hover)",
          active: "var(--ds-primary-active)",
          fg: "var(--ds-primary-fg)",
        },
        accent: {
          DEFAULT: "var(--ds-accent)",
          fg: "var(--ds-accent-fg)",
        },
        success: {
          DEFAULT: "var(--ds-success)",
          bg: "var(--ds-success-bg)",
          fg: "var(--ds-success-fg)",
        },
        warning: {
          DEFAULT: "var(--ds-warning)",
          bg: "var(--ds-warning-bg)",
          fg: "var(--ds-warning-fg)",
        },
        danger: {
          DEFAULT: "var(--ds-danger)",
          bg: "var(--ds-danger-bg)",
          fg: "var(--ds-danger-fg)",
        },
        info: {
          DEFAULT: "var(--ds-info)",
          bg: "var(--ds-info-bg)",
          fg: "var(--ds-info-fg)",
        },
        focus: "var(--ds-focus)",
      },
      borderColor: {
        DEFAULT: "var(--ds-border)",
      },
      borderRadius: {
        sm: "var(--ds-radius-sm)",
        md: "var(--ds-radius-md)",
        lg: "var(--ds-radius-lg)",
        full: "var(--ds-radius-full)",
      },
      spacing: {
        1: "var(--ds-space-1)",
        2: "var(--ds-space-2)",
        3: "var(--ds-space-3)",
        4: "var(--ds-space-4)",
        5: "var(--ds-space-5)",
        6: "var(--ds-space-6)",
        7: "var(--ds-space-7)",
        8: "var(--ds-space-8)",
        9: "var(--ds-space-9)",
        10: "var(--ds-space-10)",
        11: "var(--ds-space-11)",
        12: "var(--ds-space-12)",
      },
      fontFamily: {
        sans: "var(--ds-font-sans)",
        serif: "var(--ds-font-serif)",
        mono: "var(--ds-font-mono)",
      },
      fontSize: {
        xs: "var(--ds-text-xs)",
        sm: "var(--ds-text-sm)",
        base: "var(--ds-text-base)",
        md: "var(--ds-text-md)",
        lg: "var(--ds-text-lg)",
        xl: "var(--ds-text-xl)",
        "2xl": "var(--ds-text-2xl)",
        "3xl": "var(--ds-text-3xl)",
      },
      lineHeight: {
        tight: "var(--ds-leading-tight)",
        normal: "var(--ds-leading-normal)",
        relaxed: "var(--ds-leading-relaxed)",
      },
      fontWeight: {
        normal: "var(--ds-weight-normal)",
        medium: "var(--ds-weight-medium)",
        bold: "var(--ds-weight-bold)",
      },
      letterSpacing: {
        tight: "var(--ds-tracking-tight)",
        normal: "var(--ds-tracking-normal)",
      },
      boxShadow: {
        sm: "var(--ds-shadow-sm)",
        md: "var(--ds-shadow-md)",
        lg: "var(--ds-shadow-lg)",
        focus: "var(--ds-focus-ring)",
      },
      ringColor: {
        DEFAULT: "var(--ds-focus)",
        focus: "var(--ds-focus)",
      },
      transitionTimingFunction: {
        ds: "var(--ds-ease)",
      },
      transitionDuration: {
        fast: "var(--ds-dur-fast)",
        base: "var(--ds-dur-base)",
        slow: "var(--ds-dur-slow)",
      },
    },
  },
  plugins: [],
};
