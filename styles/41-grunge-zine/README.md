# Grunge / Zine Photocopy Punk

DIY photocopied punk-zine design system for **STATIC PIT RECORDS**, a fictional record shop, basement gig desk, and skate-zine counter. It is raw, cut, taped, stamped, and loud, but every interface state remains legible and intentional.

## 设计哲学 / 性格

1. **Photocopy first, interface second.** The surface feels like copied paper: grain, torn edges, marker underlines, staple marks, and hard ink shadows.
2. **Raw is not broken.** Rotations are small, contrast is controlled, and content stays aligned to a usable product rhythm.
3. **Orange means action.** Safety orange is reserved for primary commands, focus, urgency, and stamped emphasis.
4. **Pink is the highlighter.** Highlighter pink marks links, selected metadata, and cultural details without replacing action color.
5. **Inherited system discipline.** It keeps the fixed `--ds-*` contract, source spacing scale, large type scale, hard timing, and token-driven Tailwind mapping.

This kit is distinct from cozy scrapbook collage, soft pastel print texture, blue/yellow brutal layouts, and red/black constructivist posters. The identity is a photocopied punk flyer that has been cleaned up enough to ship as a design system.

## 何时用 / 何时别用

Use it for:

- Record stores, indie venue calendars, skate zines, DIY workshops, gig posters, maker collectives, counterculture editorial products.
- Interfaces that need attitude but still have real tables, forms, settings, and purchase flows.
- Campaign surfaces where stamp blocks, cut letters, and torn paper can carry brand memory.

Do not use it for:

- Medical, financial, legal, or enterprise workflows where visual noise reduces trust.
- Long-form reading products where decorative texture competes with paragraphs.
- Luxury, wellness, or calm productivity brands.
- Any product that cannot accept square corners, hard ink edges, and assertive contrast.

## 颜色

### Light Theme

| Token | Value | Use |
|---|---:|---|
| `--ds-bg` | `#e8e6df` | Main photocopy paper background |
| `--ds-bg-subtle` | `#ddd9cf` | Grouped surface, section band |
| `--ds-bg-elevated` | `#f4f2ea` | Cards, menus, raised paper |
| `--ds-bg-sunken` | `#cfcabb` | Inputs, wells, code blocks |
| `--ds-fg` | `#141210` | Ink text and hard rules |
| `--ds-fg-muted` | `#44403a` | Secondary copy |
| `--ds-fg-subtle` | `#66615a` | Placeholder and weak metadata |
| `--ds-border` | `#bcb4a4` | Quiet paper edge |
| `--ds-border-strong` | `#141210` | Ink borders and offset shadow |
| `--ds-primary` | `#d6320f` | Safety-orange primary action |
| `--ds-primary-hover` | `#bb2a0c` | Hover action |
| `--ds-primary-active` | `#9c2209` | Pressed action |
| `--ds-accent` | `#d6147a` | Highlighter-pink links and tags |

### Dark Theme

| Token | Value | Use |
|---|---:|---|
| `--ds-bg` | `#0d0c0a` | Ink-room background |
| `--ds-bg-subtle` | `#14120f` | Grouped dark surface |
| `--ds-bg-elevated` | `#1a1714` | Raised dark card |
| `--ds-bg-sunken` | `#060504` | Deep slot or input |
| `--ds-fg` | `#ece8df` | Reversed paper text |
| `--ds-fg-muted` | `#b0a898` | Secondary reversed copy |
| `--ds-fg-subtle` | `#837c6e` | Weak reversed metadata |
| `--ds-border` | `#2e2a22` | Quiet dark edge |
| `--ds-border-strong` | `#ece8df` | Reversed ink border |
| `--ds-primary` | `#ff5a2c` | Bright safety-orange action |
| `--ds-primary-hover` | `#ff6e44` | Hover action |
| `--ds-primary-active` | `#ee4c20` | Pressed action |
| `--ds-accent` | `#ff4b9e` | Bright highlighter pink |

### Semantic Colors

| State | Light tokens | Dark tokens |
|---|---|---|
| Success | `#2f7a3a` on `#e3efe2`, text `#0e3314` | `#6fbf6f` on `#0e260e`, text `#cdeec0` |
| Warning | `#8a5e0a` on `#f3e9cd`, text `#3e2c04` | `#e0b35a` on `#241a06`, text `#f6e6be` |
| Danger | `#d6320f` on `#f8e0d9`, text `#551407` | `#ff5a2c` on `#2a0c04`, text `#ffd6c8` |
| Info | `#1f5f8a` on `#e0eaf0`, text `#0c2a3e` | `#5fa0d8` on `#0a1f2e`, text `#d6e8f5` |

Primary and accent text intentionally flips to dark text in dark theme:

- `--ds-primary-fg:#2a0c00`
- `--ds-accent-fg:#2a0418`

## 字体

| Token | Stack | Role |
|---|---|---|
| `--ds-font-sans` | `"Inter",-apple-system,"PingFang SC",sans-serif` | UI labels, commands, body |
| `--ds-font-serif` | `"Noto Serif",serif` | Cut-letter variation and editorial callouts |
| `--ds-font-mono` | `"JetBrains Mono",monospace` | Prices, dates, SKU-like zine metadata |

Type scale is inherited from the source kit:

| Token | Value |
|---|---:|
| `--ds-text-xs` | `12px` |
| `--ds-text-sm` | `14px` |
| `--ds-text-base` | `16px` |
| `--ds-text-md` | `19px` |
| `--ds-text-lg` | `24px` |
| `--ds-text-xl` | `34px` |
| `--ds-text-2xl` | `52px` |
| `--ds-text-3xl` | `76px` |

Use `--ds-weight-bold:800` for headline chips and stamp blocks. Use `--ds-weight-medium:600` for controls. Keep body copy on `--ds-bg` or `--ds-bg-elevated`; decorative texture should never sit directly behind small text.

## 间距与布局

Spacing stays on the 4px base: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`.

Layout rules:

- Use a centered shell with `max-width:1180px`.
- Use full-width paper bands for large sections, not cards inside cards.
- Let chips, tape, and stamps overlap only inside containers with overflow containment.
- Tables and dense data stay square, plain, and aligned; texture belongs around them, not under the numbers.
- At mobile width, rotated chips wrap and tables scroll within their own box.

## 圆角 / 阴影 / 描边

| Token | Value | Meaning |
|---|---:|---|
| `--ds-radius-sm` | `0px` | Hard cut |
| `--ds-radius-md` | `1px` | Slight paper imperfection |
| `--ds-radius-lg` | `2px` | Large surface, still square |
| `--ds-radius-full` | `9999px` | Pills and switches only |
| `--ds-shadow-sm` | `2px 2px 0 var(--ds-border-strong)` | Small offset copy shadow |
| `--ds-shadow-md` | `4px 4px 0 var(--ds-border-strong)` | Cards and menus |
| `--ds-shadow-lg` | `7px 7px 0 var(--ds-border-strong)` | Hero slabs and modals |

Borders are part of the voice. Use `--ds-border` for quiet structural edges and `--ds-border-strong` for inked controls, cards, stamps, and selected states.

## 动效

The motion language is short and mechanical:

- `--ds-ease:cubic-bezier(.2,0,0,1)`
- `--ds-dur-fast:80ms`
- `--ds-dur-base:140ms`
- `--ds-dur-slow:240ms`

Use motion for pressed states, small tape jitter, focus changes, and menu reveal. Respect `prefers-reduced-motion: reduce`; the preview removes transitions and animations under that setting.

## 组件规格

### Buttons

| Variant | Background | Text | Border | Shadow | State |
|---|---|---|---|---|---|
| Primary | `--ds-primary` | `--ds-primary-fg` | `--ds-border-strong` | `--ds-shadow-sm` | Hover uses `--ds-primary-hover`; active uses `--ds-primary-active` and reduces offset |
| Secondary | `--ds-bg-elevated` | `--ds-fg` | `--ds-border-strong` | `--ds-shadow-sm` | Hover moves upward by one pixel |
| Tertiary | Transparent | `--ds-fg` | Transparent | None | Underline or marker accent on hover |
| Danger | `--ds-danger` | `--ds-primary-fg` | `--ds-border-strong` | `--ds-shadow-sm` | Use for destructive action only |

Minimum touch target is 44px. Small buttons can be visually compact only when surrounded by enough hit area.

### Inputs

- Background: `--ds-bg-elevated`
- Border: `2px solid var(--ds-border-strong)`
- Focus: `box-shadow:var(--ds-focus-ring)`
- Placeholder: `--ds-fg-subtle`
- Error state: `--ds-danger-bg` with `--ds-danger-fg`

Inputs may look like labeled paper slips, but the typed value must always be plain and readable.

### Cards

- Background: `--ds-bg-elevated`
- Border: `2px solid var(--ds-border-strong)`
- Shadow: `--ds-shadow-md`
- Radius: `--ds-radius-lg`
- Optional tape/stamp flourishes must be `aria-hidden` and not replace headings.

### Badges / Tags

Use badges for venue status, format, inventory, date, and zine issue labels. Keep all semantic badges token-backed:

- Success: `--ds-success-bg` / `--ds-success-fg`
- Warning: `--ds-warning-bg` / `--ds-warning-fg`
- Danger: `--ds-danger-bg` / `--ds-danger-fg`
- Info: `--ds-info-bg` / `--ds-info-fg`
- Accent: `--ds-accent` / `--ds-accent-fg`

### Alerts

Alerts are stamp-like but should remain scannable:

- Left border or top stamp uses the semantic main color.
- Fill uses semantic `*-bg`.
- Body text uses semantic `*-fg`.
- Include a concise heading and one action at most.

### Navigation

Use square tabs, strong active borders, and clear selected states. Avoid hiding navigation inside decorative paper unless the hit areas remain obvious.

## 可访问性

- Body text uses `--ds-fg` on `--ds-bg` or `--ds-bg-elevated`.
- Muted and subtle text meet AA against the intended surfaces.
- Primary and accent foregrounds meet AA in both themes, including the dark-theme dark text on bright ink.
- Focus rings use a two-layer `--ds-focus-ring` and must not be removed.
- Decorative tape, staples, torn edges, and grain are `aria-hidden`.
- Ransom-note headline chips use only dark-on-light or light-on-dark chip pairs.
- Motion is disabled for users who request reduced motion.
- Touch targets should be at least 44px, with mobile navigation closer to 48px.

## Do / Don't

Do:

- Use safety orange for action, not for every decoration.
- Keep highlighter pink as accent, metadata, selected notes, or links.
- Use cut letters sparingly for hero moments and stamp labels.
- Place grain and halftone behind large surfaces, never behind small body copy.
- Let square borders and hard shadows carry the system identity.
- Keep mobile chips and tape inside their containers.

Don't:

- Do not make body text fight with texture.
- Do not use random rotations larger than a few degrees in UI controls.
- Do not replace icons or controls with decorative text.
- Do not soften the kit into cozy scrapbook collage.
- Do not drift into red/black propaganda-poster styling.
- Do not paste third-party gig art, logos, or copied flyer layouts into the system.

## 如何接入

CSS:

```html
<link rel="stylesheet" href="/styles/41-grunge-zine/tokens.css">
```

Component CSS:

```css
.card {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 2px solid var(--ds-border-strong);
  border-radius: var(--ds-radius-lg);
  box-shadow: var(--ds-shadow-md);
}

.card:focus-within {
  box-shadow: var(--ds-focus-ring), var(--ds-shadow-md);
}
```

Tailwind:

```js
module.exports = {
  presets: [require("./styles/41-grunge-zine/tailwind.preset.js")],
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"]
};
```

Theme switching:

```js
document.documentElement.dataset.theme = "dark";
```

The kit is offline-friendly. The preview links only the local font sheet and the local device shell stylesheet, then uses inline styles and inline SVG for the visual language.
