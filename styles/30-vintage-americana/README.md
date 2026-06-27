# Vintage Americana / 复古美式（Diner / Retro Signage）

> 1950s roadside diner and soda-fountain signage for fictional hospitality brands: warm cream paper, retro red, deep teal-navy, mustard starbursts, ribbon banners, pinstripe frames, scalloped edges, and bold serif display type.

This kit is loud, warm, and nostalgic. It is not a calm reading skin; it should feel like a menu board, a route-side sign, a booth placemat, and a stamped house special.

---

## 1. 一句话气质

Warm cream paper + retro red + deep teal-navy + decorative mustard signage. Headlines are bold serif, labels are wide-tracked uppercase sans, and the signature motif is a starburst seal such as `EST. 1952` or `GRADE A`.

---

## 2. 设计哲学 / 性格

1. **Signage first**: pages should read like diner signs, counter menus, tickets, badges, and road-side placards.
2. **Warm, not garish**: cream paper softens the red/teal palette; mustard is a small decorative spark, never body text.
3. **One hero badge**: starbursts and seals create the identity, but the layout needs one dominant badge and a few smaller repeats.
4. **Pinstripe structure**: double lines, inset borders, ribbons, scallops, and price tags replace modern minimalist separators.
5. **Geist contract, Americana skin**: the fixed `--ds-*` semantic contract remains intact; only values, typography, component dressing, and copy change.

---

## 3. 何时用 / 何时别用

**Use for**
- Diners, soda fountains, BBQ joints, motels, hardware counters, pop-up menus, retro hospitality campaigns.
- Product pages that need warmth, nostalgia, and visible brand character.
- Marketing dashboards or internal tools for a themed venue where scanning still matters.

**Avoid for**
- Quiet long-form reading products; use a calmer reading kit.
- Dense enterprise admin systems where badges/ribbons would slow repeated work.
- Luxury, medical, legal, or government interfaces that require restraint and institutional neutrality.
- Any brand that cannot support humorous or theatrical signage language.

---

## 4. 颜色

All required colors are fixed `--ds-*` semantic variables. `--ds-gold` is a decorative extension for starbursts, seals, pinstripes, and small badge details only.

### 表面与文字

| Token | Light | Dark | Use |
|---|---:|---:|---|
| `--ds-bg` | `#f7efdf` | `#1c160f` | Warm cream paper / diner-night base |
| `--ds-bg-subtle` | `#efe4cc` | `#241c12` | Section bands, menu lanes |
| `--ds-bg-elevated` | `#fffaf0` | `#2a2116` | Cards, tickets, floating panels |
| `--ds-bg-sunken` | `#e6d8bc` | `#140f08` | Input wells, code, recessed panels |
| `--ds-fg` | `#2a1f16` | `#f4e8d2` | Main text |
| `--ds-fg-muted` | `#5a4a3a` | `#b8a888` | Secondary copy |
| `--ds-fg-subtle` | `#766349` | `#8a7c62` | Decorative or inactive metadata; prefer muted for normal small text |
| `--ds-fg-on-accent` | `#fff8ec` | `#1c0c08` | Text on strong accent surfaces |
| `--ds-border` | `#dcc9a6` | `#3a2f1e` | Normal pinstripes and dividers |
| `--ds-border-strong` | `#2a1f16` | `#f4e8d2` | Heavy sign outlines |

### 品牌与强调

| Token | Light | Dark | Use |
|---|---:|---:|---|
| `--ds-primary` | `#c0392b` | `#e0584a` | Retro red primary actions and ribbons |
| `--ds-primary-hover` | `#a52f23` | `#ea6e60` | Hover |
| `--ds-primary-active` | `#8a271d` | `#d04a3d` | Active/pressed |
| `--ds-primary-fg` | `#fff8ec` | `#1c0c08` | Primary button text; dark mode intentionally uses dark text for AA |
| `--ds-accent` | `#1f5a6b` | `#4aa8bf` | Deep teal-navy links, panels, secondary signs |
| `--ds-accent-fg` | `#fff8ec` | `#06222a` | Text on accent |
| `--ds-gold` | `#d99a2b` | `#e8b34a` | Decorative mustard only |

### 语义状态

| State | Main light/dark | BG light/dark | FG light/dark |
|---|---|---|---|
| success | `#3f7a3a` / `#5fb85f` | `#e7f1e2` / `#0e260e` | `#123c12` / `#cdeec0` |
| warning | `#9a6a14` / `#e8b34a` | `#f6ead0` / `#241a06` | `#43300a` / `#f6e6be` |
| danger | `#c0392b` / `#e0584a` | `#f8e3df` / `#2a0f0b` | `#5a140d` / `#f8d6cf` |
| info | `#1f5a6b` / `#4aa8bf` | `#e2eef1` / `#08242c` | `#0c2c34` / `#cfeaf2` |

---

## 5. 字体

- `--ds-font-serif`: `'Noto Serif', Georgia, serif` for display headlines, menu names, badge labels, and warm diner copy.
- `--ds-font-sans`: `'Inter',-apple-system,'PingFang SC',sans-serif` for UI, labels, nav, tickets, and uppercase signage text.
- `--ds-font-mono`: `'JetBrains Mono',monospace` for tabular prices, codes, counters, and implementation snippets.

The cloned scale is preserved: `13, 14, 17, 19, 22, 28, 38, 52px`; line-height remains `1.25 / 1.55 / 1.85`; weights are `400 / 500 / 600`; tracking keeps `-0.015em / 0`. Signage labels add local uppercase letter-spacing around `.10em-.14em` without changing the core contract.

---

## 6. 间距与布局

Spacing remains the shared 4px-based scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px`.

- Use `space-6` to `space-8` for menu cards and ticket interiors.
- Use `space-9` to `space-11` between big signboard sections.
- Keep content max width near `1080px`, with readable copy columns near `680px`.
- Use full-width bands for diner counters and placemats; use cards only for repeated menu items, tickets, modals, and framed demos.
- At mobile widths, starbursts, ribbons, tables, and price tags must stay inside their containers and wrap instead of creating horizontal overflow.

---

## 7. 圆角 / 阴影 / 描边

- Radius: `sm 4px`, `md 8px`, `lg 16px`, `full 9999px`. Small controls feel sign-painted and mechanical; large hero frames can soften to `lg`.
- Shadows: warmer and more visible than the calm reading styles, but still restrained: `sm`, `md`, `lg` use brown/black alpha by theme.
- Borders: this style relies on `--ds-border-strong`, double-line borders, inset pinstripes, and scalloped strips. Use thick outlines for hero signs and thin double rules for tables and cards.

---

## 8. 动效

Motion keeps the cloned timing contract: `160ms`, `240ms`, `300ms` with `cubic-bezier(.22,.61,.36,1)`.

Typical motion:
- Button hover shifts from red to darker red and lifts only through shadow.
- Starburst badges may gently rotate or scale on hover.
- Ribbons and cards transition border/shadow, not layout.
- Respect `prefers-reduced-motion: reduce`; preview disables animation and transition duration for reduced-motion users.

---

## 9. 组件规格

**Buttons**: `40px` default height, `32px` small, `48px` large. Primary uses red fill with `--ds-primary-fg`; secondary uses cream fill with strong outline; tertiary uses red text; danger uses danger red. Labels should be short and signage-like.

**Inputs**: cream elevated background, `1px` border, `4px` radius, focus ring from `--ds-focus-ring`. Labels use uppercase sans for menu-order clarity.

**Cards**: use `--ds-bg-elevated`, strong top/bottom pinstripes, `8px` radius, and serif titles. Menu cards may include a small price tag or badge seal.

**Badges / labels**: default badges use cream or status backgrounds. Specialty seals use starburst or circular badge shapes with decorative gold and red/teal outlines.

**Alerts**: full bordered panels with inline SVG icons; status backgrounds and foregrounds come from semantic tokens. Avoid large mustard text.

**Navigation**: top nav uses a signboard brand, uppercase links, double-line bottom border, and clear active red or teal treatment.

**Tables**: uppercase sans headers, mono tabular prices, cream rows, and hover bands. Keep the mobile table horizontal-scroll rule.

**Diner flourishes**: starburst badge, folded ribbon, pinstripe frame, scalloped strip, badge seal, and retro price tag are part of the system. Use one major flourish per area so nostalgia does not overpower legibility.

---

## 10. 可访问性

- Body text contrast is AA in both themes: light `--ds-fg #2a1f16` on `--ds-bg #f7efdf`; dark `--ds-fg #f4e8d2` on `--ds-bg #1c160f`.
- Use `--ds-fg-muted` for normal small text in both themes. `--ds-fg-subtle` is reserved for inactive, decorative, or large metadata because the specified dark value is intentionally softer than body AA.
- Primary, accent, and semantic foreground pairs are AA for button and alert use. Dark primary intentionally uses dark text via `--ds-primary-fg #1c0c08`.
- Mustard `--ds-gold` is decorative-only. Do not use it for body copy or critical UI labels.
- Focus uses a two-layer ring and must remain visible on cream, red, teal, and dark backgrounds.
- Touch targets should be at least `44px` where interactive, especially tabs, nav links, switches, and mobile demo controls.

---

## 11. Do / Don't

**Do**
- Use one dominant starburst or seal in the hero.
- Pair bold serif display headlines with uppercase sans labels.
- Use pinstripes, ribbons, scallops, and price tags to create Americana character.
- Keep cream paper visible so red and teal do not become harsh.
- Use local inline SVG for icons and badges.

**Don't**
- Do not turn the page into a carnival of badges; one hero badge plus small repeats is enough.
- Do not use mustard gold as paragraph text, button text, or alert copy.
- Do not copy real diner, motel, soda, or Route 66 artwork or slogans.
- Do not remove legibility for nostalgia; menu labels still need clear hierarchy.
- Do not drift into calm minimal reading pages; this kit should be louder and sign-painted.

---

## 12. 如何接入

1. Import CSS tokens once:

```css
@import "./styles/30-vintage-americana/tokens.css";
```

2. Use semantic variables:

```css
.menu-card {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 1px solid var(--ds-border-strong);
  box-shadow: var(--ds-shadow-sm);
}
```

3. Tailwind projects can use the preset:

```js
module.exports = {
  presets: [require("./styles/30-vintage-americana/tailwind.preset.js")],
};
```

4. Toggle dark mode with either:

```html
<html data-theme="dark">
```

or:

```html
<html class="dark">
```
