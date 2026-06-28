# Flat Illustration · 扁平插画 (Friendly SaaS)

> Illustration-led, clean, rounded, and approachable: an indigo/coral SaaS kit for products that want to feel helpful and modern without becoming cute, sketchy, or gimmicky.

---

## 1. 一句话气质

Clean geometric flat illustration for friendly SaaS: indigo product UI, coral accents, teal/yellow/violet illustration fills, pill controls, rounded Quicksand type, organic blobs, and soft tinted elevation.

---

## 2. 设计哲学 / 性格

Flat Illustration inherits the same fixed `--ds-*` token contract and light-first system structure as the other kits, but changes the visible personality:

1. **Illustration leads, UI stays useful**: Hero scenes and empty states use geometric SVG compositions; product controls stay clear, compact, and AA-readable.
2. **Friendly, not childish**: Rounded type, pills, and soft shadows create approachability without candy-pink kawaii cues.
3. **Geometric, not sketchy**: Illustrations are built from rounded rectangles, circles, arcs, simple plants, devices, stars, cards, and blobs. No wobbly strokes, no rough hand-drawn texture.
4. **SaaS color discipline**: Indigo drives actions, coral is secondary emphasis, teal/yellow/violet are illustration fills only.
5. **Soft but crisp**: Shadows are tinted and broad, radii are friendly, borders remain visible so cards do not blur into decoration.

---

## 3. 何时用 / 何时别用

**适合**

- Team-habits apps, learning platforms, maker tools, community products, creator payments, onboarding flows, and friendly B2B SaaS.
- Products that need warmth and guidance but still need to look competent.
- Marketing-to-product surfaces where inline illustrations can explain workflows.

**不适合**

- Dense financial, legal, medical, or government workflows that need maximum authority and low ornament.
- High-frequency data tools where illustration space would reduce scan density.
- Brands that require austere editorial neutrality, luxury restraint, or retro Memphis energy.
- Any direction that depends on depicted “blob people,” rough sketch strokes, or texture grain.

---

## 4. 颜色

Primary gradient: `#5b4bdb → #4d3fc8 → #4234ad` in light, `#8a7bff → #9c8fff → #7a6bf0` in dark. Coral accent is used for secondary emphasis and large/UI labels; normal body text should not sit on light coral because `#ffffff` on `#e0533f` is 3.83:1, suitable for large/UI treatment but not small body copy.

Illustration brights are fills only: teal `#16b3a6 / #2dd4bf`, yellow `#ffc23d / #ffd45e`, coral `#ff7a59 / #ff8570`, violet `#9b6bff / #b08bff`.

### 表面与文字

| Token | Light | Dark | 用途 |
|---|---:|---:|---|
| `--ds-bg` | `#fbfaf7` | `#1a1726` | Page background |
| `--ds-bg-subtle` | `#f1eef6` | `#221d32` | Section bands, grouped areas, illustration blobs |
| `--ds-bg-elevated` | `#ffffff` | `#28223a` | Cards, menus, dialogs |
| `--ds-bg-sunken` | `#e8e4f0` | `#120f1c` | Inputs, code wells, recessed panels |
| `--ds-fg` | `#241f33` | `#ece8f6` | Main text |
| `--ds-fg-muted` | `#555070` | `#aaa2c4` | Secondary text |
| `--ds-fg-subtle` | `#6f6a8a` | `#867e9e` | Placeholder/helper text; still AA on background |
| `--ds-fg-on-accent` | `#ffffff` | `#160f2e` | Inverse text for controlled accent surfaces |
| `--ds-border` | `#e2ddec` | `#352d4a` | Default border |
| `--ds-border-strong` | `#241f33` | `#ece8f6` | Strong outline, high-contrast separators |

### 品牌与状态

| Token | Light | Dark | 用途 |
|---|---:|---:|---|
| `--ds-primary` | `#5b4bdb` | `#8a7bff` | Primary action, selected state |
| `--ds-primary-hover` | `#4d3fc8` | `#9c8fff` | Hover |
| `--ds-primary-active` | `#4234ad` | `#7a6bf0` | Pressed |
| `--ds-primary-fg` | `#ffffff` | `#14102a` | Primary button text |
| `--ds-accent` | `#e0533f` | `#ff8570` | Coral accent, large/UI emphasis |
| `--ds-accent-fg` | `#ffffff` | `#3a1006` | Accent foreground; light theme only for large/UI text |
| `--ds-success` | `#1f8a4c` | `#5fd38a` | Success stroke/icon |
| `--ds-success-bg` | `#e2f3e8` | `#0e2a18` | Success soft surface |
| `--ds-success-fg` | `#0c3a20` | `#c9f5d8` | Success text |
| `--ds-warning` | `#9a6a10` | `#f0c050` | Warning stroke/icon |
| `--ds-warning-bg` | `#f6ecd2` | `#241a06` | Warning soft surface |
| `--ds-warning-fg` | `#43300a` | `#f6e6be` | Warning text |
| `--ds-danger` | `#d23b2e` | `#ff6a5e` | Danger stroke/icon |
| `--ds-danger-bg` | `#f9e2df` | `#2a0e0a` | Danger soft surface |
| `--ds-danger-fg` | `#5a140d` | `#ffd6d0` | Danger text |
| `--ds-info` | `#2f6fe0` | `#6a9aff` | Info stroke/icon |
| `--ds-info-bg` | `#e2ebfb` | `#0c1c3a` | Info soft surface |
| `--ds-info-fg` | `#0e2c5e` | `#d6e4ff` | Info text |

---

## 5. 字体

- **Sans**: `"Quicksand","Inter",-apple-system,"PingFang SC",sans-serif`. Quicksand gives the rounded display personality; Inter or system fonts keep body copy practical.
- **Mono**: `"JetBrains Mono",monospace` for tokens, tabular values, and code labels.
- **Serif fallback**: `"Quicksand","Inter",Georgia,"PingFang SC",serif` only to satisfy the fixed contract; this style is not serif-led.
- **Scale**: xs 12, sm 13, base 14, md 16, lg 20, xl 24, 2xl 32, 3xl 48.
- **Weights**: normal 500, medium 600, bold 700. The style needs sturdy rounded letterforms.
- **Tracking**: tight `0`, normal `0.01em`. Avoid negative tracking; rounded type needs air.
- **Chinese adaptation**: `PingFang SC` keeps Chinese labels clean when Quicksand/Inter do not cover glyphs.

---

## 6. 间距与布局

- **Space scale**: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96.
- **Default rhythm**: 8px inside compact controls, 16-24px inside cards, 32-48px between sections.
- **Container**: preview uses a max width around 1120px; product pages can use 1120-1200px.
- **Grid**: use responsive `auto-fit`/`minmax()` cards and avoid fixed-width illustration overflow.
- **Hero composition**: blob shapes must be clipped inside the hero surface; at mobile widths the illustration stacks below/above copy without horizontal scroll.

---

## 7. 圆角 / 阴影 / 描边

- **Radius**: `sm 8px`, `md 14px`, `lg 22px`, `full 9999px`.
- **Pill usage**: buttons, badges, tabs, and compact filters use `full`.
- **Cards**: use `md` for product cards and menus; use `lg` for hero panels, modals, and large illustrated surfaces.
- **Shadows light**:
  - `sm`: `0 2px 6px -2px rgba(36,31,51,.16)`
  - `md`: `0 10px 24px -10px rgba(91,75,219,.28)`
  - `lg`: `0 22px 48px -16px rgba(91,75,219,.34)`
- **Shadows dark**: black alpha shadows preserve depth without neon glow.
- **Borders**: keep 1px borders on cards and controls; flat illustration needs crisp edges to avoid looking mushy.

---

## 8. 动效

- **Curve**: `cubic-bezier(.34,1.56,.64,1)` inherited from the rounded friendly base.
- **Durations**: fast 200ms, base 260ms, slow 320ms.
- **Typical motion**: buttons lift slightly, cards rise 4px, hero illustration may float gently.
- **Reduced motion**: wrap any floating/bobbing motion in `@media (prefers-reduced-motion: reduce)` and disable transforms/animations there.
- **Rule**: motion should feel buoyant, not bouncy cartoon. Avoid excessive scale or spring chains.

---

## 9. 组件规格

### Buttons

| Variant | Background | Text | Border | State |
|---|---|---|---|---|
| Primary | `--ds-primary` | `--ds-primary-fg` | none | hover `--ds-primary-hover`, active `--ds-primary-active` |
| Secondary | `--ds-bg-elevated` | `--ds-fg` | `--ds-border-strong` | hover `--ds-bg-subtle` |
| Tertiary | transparent | `--ds-fg-muted` | none | hover subtle background |
| Danger | `--ds-danger-bg` | `--ds-danger-fg` | `--ds-danger` | keep soft surface for AA |

Heights: sm 32px, md 40px, lg 48px. Radius: `full`. Minimum touch target should remain at least 44px in mobile contexts.

### Inputs

Height 42px, radius `sm`, background `--ds-bg-elevated`, border `--ds-border`, text `--ds-fg`, placeholder `--ds-fg-subtle`. Focus uses `--ds-focus-ring`. Error state uses `--ds-danger` border and `--ds-danger-fg` helper text.

### Cards

Use `--ds-bg-elevated`, `--ds-border`, `--ds-radius-md`, and `--ds-shadow-md`. Include flat SVG thumbnails or small geometric accents. Interactive cards can lift 4px and move to `--ds-shadow-lg`.

### Badges / Tags

Use `full` radius, xs text, bold weight. Semantic badges use `*-bg` and `*-fg` pairs; primary badges use `--ds-primary` and `--ds-primary-fg`.

### Alerts

Use `*-bg`, `*-fg`, and a 1px `*` border. Include a simple inline SVG icon; do not rely on color alone.

### Navigation

Top nav uses a subtle translucent `--ds-bg` surface with `--ds-border`. Active tabs use `--ds-primary` or a 3px pill underline. Mobile nav collapses to a pill icon button.

### Tables

Use `--ds-bg-elevated` with a subtle header background. Numeric columns should use `--ds-font-mono` and `font-variant-numeric: tabular-nums`.

### Mobile demos

Keep the shared `.dvc17` frame from `../../_assets/device.css`. Style only the screen content: cards, lists, buttons, and tab bars. Do not redefine the device shell.

---

## 10. 可访问性

- **Body contrast**: light `--ds-fg` on `--ds-bg` is 15.26:1; dark is 14.60:1.
- **Muted/subtle contrast**: light muted 7.27:1, light subtle 4.90:1; dark muted 7.26:1, dark subtle 4.60:1.
- **Primary buttons**: light 6.04:1, dark 5.59:1. Dark mode intentionally uses dark button text on the light violet primary.
- **Semantic soft surfaces**: success/warning/danger/info text on their `*-bg` surfaces range from 10.71:1 to 13.86:1 across themes.
- **Accent caution**: light `--ds-accent-fg` on `--ds-accent` is 3.83:1, so keep it to large/UI text or decorative emphasis. Use normal body text on neutral surfaces instead.
- **Focus**: `--ds-focus-ring` uses a two-layer ring and must not be clipped.
- **Motion**: honor `prefers-reduced-motion`.
- **Touch**: target interactive controls at 44px or larger on touch screens.

---

## 11. Do / Don't

**Do**

- Build illustrations from rounded rectangles, circles, arcs, stars, cards, plants, devices, and simple blobs.
- Use indigo for product actions and coral for limited emphasis.
- Keep teal/yellow/violet/coral brights inside SVG fills or decorative marks.
- Use pill buttons and sticker-like badges with AA text pairs.
- Clip hero blobs and illustration layers so mobile widths never scroll horizontally.
- Keep copy direct, optimistic, and product-specific.

**Don't**

- Do not use sketchy, wobbly, hand-drawn, or rough textured strokes.
- Do not use `feTurbulence`, grain, distressed filters, or noisy texture overlays.
- Do not depict human blob characters; that cliché is explicitly out of scope.
- Do not drift into candy-pink kawaii or 80s Memphis confetti.
- Do not place small body text on illustration brights or light coral accent fills.
- Do not add CDN fonts, remote images, icon fonts, or emoji icons.

---

## 12. 如何接入

```html
<link rel="stylesheet" href="./styles/36-flat-illustration/tokens.css" />
```

```css
.btn-primary {
  background: var(--ds-primary);
  color: var(--ds-primary-fg);
  border-radius: var(--ds-radius-full);
  box-shadow: var(--ds-shadow-md);
  font-family: var(--ds-font-sans);
  font-weight: var(--ds-weight-bold);
}

.btn-primary:hover {
  background: var(--ds-primary-hover);
}

.btn-primary:focus-visible {
  outline: none;
  box-shadow: var(--ds-focus-ring);
}
```

```js
document.documentElement.dataset.theme = 'dark';
```

Tailwind:

```js
module.exports = {
  presets: [require('./styles/36-flat-illustration/tailwind.preset.js')],
};
```

Import `tokens.css` once in the app entry. Consume only `var(--ds-*)` tokens in components so the kit can switch themes without component rewrites.
