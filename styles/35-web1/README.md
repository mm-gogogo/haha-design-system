# 90s Web / Web 1.0 Design System

> A crisp early-web homepage kit: tiled wallpaper, centered document columns, ruled tables, beveled controls, marquee strips, visitor counters, web-ring navigation, and serif page headings.

## 1. One-Line Character

Web1 is a deliberate homage to personal homepages and web-ring hubs: bright hyperlink blue, Times-like headings, Win95-style bevels, small status badges, counter digits, and table-era layouts, polished enough for modern AA contrast and responsive use.

## 2. Design Philosophy / Personality

1. **Document first**: the page reads like a homepage or fan directory, not a game screen. Headings lead with `Noto Serif` / Times-like forms; body text stays in readable `Inter`.
2. **Early-web furniture, modern discipline**: wallpaper, bevels, counters, badges, and ruled tables are intentional interface primitives, not broken nostalgia.
3. **Fixed token contract**: every surface, state, radius, shadow, focus ring, and type scale uses the shared `--ds-*` variables so projects can swap kits safely.
4. **Hard but legible**: radius stays near zero, shadows are crisp offsets, links are bright blue, and content panels remain high contrast.
5. **One moving thing**: the marquee is the signature motion. Everything else should be restrained, and all motion stops under `prefers-reduced-motion`.

## 3. When To Use / When Not To Use

Use Web1 for fictional fan pages, web-ring hubs, shareware corners, personal portfolios with a retro angle, zines, community directories, internal launch pages, and playful documentation.

Avoid it for dense enterprise operations, finance or medical workflows, long-form publishing that needs invisible typography, or any product where nostalgia would reduce trust. Do not use it as an 8-bit game skin; that belongs to `02-pixel`.

## 4. Color

All color tokens meet WCAG AA for intended text use. Body copy sits on `--ds-bg` or `--ds-bg-elevated`; dark-theme primary and accent intentionally use dark text for AA on bright fills.

### Light Theme: Win95 / Web1.0 Daylight

| Token | Value | Use |
|---|---:|---|
| `--ds-bg` | `#dfe3ec` | Wallpaper page background |
| `--ds-bg-subtle` | `#cdd3e0` | Ruled headers, secondary panels |
| `--ds-bg-elevated` | `#ffffff` | Main document column, cards |
| `--ds-bg-sunken` | `#b8c0d0` | Inputs, counters, inset wells |
| `--ds-fg` | `#0a0a1a` | Primary copy |
| `--ds-fg-muted` | `#2c2c50` | Secondary copy |
| `--ds-fg-subtle` | `#4a4a6a` | Low-emphasis labels and non-body accents |
| `--ds-fg-on-accent` | `#ffffff` | Text on saturated accents |
| `--ds-border` | `#8a90a8` | Standard ruled lines |
| `--ds-border-strong` | `#0a0a1a` | Strong dividers and hard outlines |
| `--ds-primary` | `#1818c0` | Hyperlink blue, primary actions |
| `--ds-primary-hover` | `#1010a0` | Primary hover |
| `--ds-primary-active` | `#0c0c80` | Pressed state |
| `--ds-primary-fg` | `#ffffff` | Text on primary |
| `--ds-accent` | `#c01878` | NEW badges, secondary accent |
| `--ds-accent-fg` | `#ffffff` | Text on accent |

### Dark Theme: Starfield BBS Night

| Token | Value | Use |
|---|---:|---|
| `--ds-bg` | `#07071a` | Starfield page background |
| `--ds-bg-subtle` | `#0e0e26` | Secondary dark panels |
| `--ds-bg-elevated` | `#14143a` | Main dark document panels |
| `--ds-bg-sunken` | `#050510` | Inset counters and inputs |
| `--ds-fg` | `#e4e4ff` | Primary copy |
| `--ds-fg-muted` | `#a6a6d8` | Secondary copy |
| `--ds-fg-subtle` | `#7676a8` | Low-emphasis labels and non-body accents |
| `--ds-fg-on-accent` | `#04102a` | Dark text on bright fills |
| `--ds-border` | `#2c2c5e` | Standard ruled lines |
| `--ds-border-strong` | `#e4e4ff` | Strong outlines |
| `--ds-primary` | `#5ab0ff` | Bright links and actions |
| `--ds-primary-hover` | `#7ac2ff` | Primary hover |
| `--ds-primary-active` | `#4a9cf0` | Pressed state |
| `--ds-primary-fg` | `#04102a` | Text on primary |
| `--ds-accent` | `#ff5ad8` | Accent badges |
| `--ds-accent-fg` | `#2a0420` | Text on accent |

### Semantic Status Tokens

| Status | Light main / bg / fg | Dark main / bg / fg |
|---|---|---|
| Success | `#1a7a1a` / `#e0f0e0` / `#0a3a0a` | `#5fd35f` / `#08240a` / `#cdeec0` |
| Warning | `#a85a00` / `#f6ead0` / `#3a2000` | `#f0b84a` / `#241a06` / `#f6e6be` |
| Danger | `#c01010` / `#f6e0e0` / `#4a0808` | `#ff6a6a` / `#2a0c0c` / `#ffd6d6` |
| Info | `#1818c0` / `#e0e0f6` / `#0c0c50` | `#5ab0ff` / `#08182a` / `#d6e8ff` |

### Accent Gradient

Rainbow rules and old-web dividers are built only from semantic tokens: `danger -> warning -> success -> info -> accent`. Use gradients for separators, not for large text blocks.

## 5. Typography

| Token | Stack | Role |
|---|---|---|
| `--ds-font-serif` | `"Noto Serif", "Times New Roman", Georgia, serif` | Homepage titles, section headings, lead copy |
| `--ds-font-sans` | `"Inter", -apple-system, "PingFang SC", sans-serif` | Body copy, forms, tables |
| `--ds-font-mono` | `"VT323", "JetBrains Mono", monospace` | Marquee, visitor counter, status lines, small labels |

The size scale stays inherited from `02-pixel`: 12 / 13 / 15 / 17 / 22 / 28 / 38 / 56. We keep the same leading, weights, and tracking tokens for cross-kit compatibility, but actual Web1 headings set local letter spacing to `0` for a cleaner newspaper-like page feel.

## 6. Spacing And Layout

Spacing keeps the shared 4px scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96. The main preview pattern is a centered content column between 960px and 1100px, sitting on a tiled wallpaper background.

Use ruled sections, compact table cells, and grouped link lists. Let content stack on mobile, keep the marquee clipped with `overflow:hidden`, and allow only tables to scroll horizontally when needed.

## 7. Radius / Shadow / Border

| Token | Value | Meaning |
|---|---:|---|
| `--ds-radius-sm` | `0px` | Authentic square controls |
| `--ds-radius-md` | `2px` | Small panel relief |
| `--ds-radius-lg` | `4px` | Larger document boxes |
| `--ds-radius-full` | `9999px` | Rare pills, counters, toggles |
| `--ds-shadow-sm` | `1px 1px 0 var(--ds-border-strong)` | Small hard offset |
| `--ds-shadow-md` | `2px 2px 0 var(--ds-border-strong)` | Beveled card depth |
| `--ds-shadow-lg` | `4px 4px 0 var(--ds-border-strong)` | Main homepage panel |

Buttons use inset bevel edges: light top/left, dark bottom/right, then reverse on `:active`. Panels use ruled borders, not soft glass effects.

## 8. Motion

The inherited motion tokens remain `steps(4,end)` with 80ms / 140ms / 240ms durations. Use the step curve for button press feedback, counter flicker, and the marquee strip.

Respect `prefers-reduced-motion: reduce`: stop the marquee, remove counter animation, and disable hover translations. Reduced-motion users should receive the same information in a static layout.

## 9. Component Specs

| Component | Spec |
|---|---|
| Button | 40px default height, 2px bevel border, `--ds-bg-subtle` secondary fill, `--ds-primary` primary fill, reversed inset edges on active, focus via `--ds-focus-ring`. Sizes: 32 / 40 / 48px. |
| Input | `--ds-bg-sunken` fill, 2px `--ds-border` inset border, 40px height, body font, focus ring plus strong border. |
| Card | `--ds-bg-elevated`, 2px ruled border, `--ds-shadow-md`, compact table-like header, 24px padding. |
| Badge / Tag | Uppercase mono labels. Semantic badges use `*-bg` and `*-fg`; Web1 badges may be inline SVG for NEW or UNDER CONSTRUCTION. |
| Alert | 2px semantic border, `*-bg` fill, `*-fg` text, inline SVG status glyph. No emoji icons. |
| Navigation | Blue underlined links for document nav; beveled buttons for web-ring Prev / Random / Next; tabs use ruled borders and a raised selected state. |
| Table | `border-collapse:collapse`, ruled cells, mono numeric columns, `--ds-bg-subtle` header row. |

## 10. Accessibility

Text contrast is AA in both themes: body on page and panels is at least 4.5:1, and large display text is at least 3:1. Normal helper copy on elevated dark panels should use `--ds-fg-muted`; `--ds-fg-subtle` is reserved for low-emphasis labels, decorative starfield dots, or large text. Primary/accent dark-theme fills intentionally pair with dark foreground tokens for AA. Focus rings are always visible, controls target at least 44px in mobile demos, and motion-sensitive users get a static marquee and counter.

## 11. Do / Don't

**Do**
- Use one marquee as a page-status flourish.
- Keep main content in a clean white or dark elevated column.
- Use serif headings, blue links, ruled tables, and bevels together.
- Use inline SVG for arrows, badges, and status icons.
- Keep copy original: fictional homepages, fan pages, link directories, and guestbooks.

**Don't**
- Turn the kit into an 8-bit game UI or use arcade display fonts.
- Add multiple marquees, flashing walls of text, or low-contrast novelty colors.
- Simulate broken HTML, misaligned layouts, or unreadable tiled backgrounds.
- Copy real 90s brands, third-party badges, or old web graphics.
- Use emoji as icons.

## 12. Adoption

Plain CSS:

```html
<link rel="stylesheet" href="styles/35-web1/tokens.css">
```

Use tokens directly:

```css
.homepage-panel {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 2px solid var(--ds-border-strong);
  box-shadow: var(--ds-shadow-lg);
}
```

Tailwind:

```js
module.exports = {
  presets: [require('./styles/35-web1/tailwind.preset.js')],
};
```
