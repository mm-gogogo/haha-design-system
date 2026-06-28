# Dark Academia · 暗黑学院风（Literary / Library）

> A scholarly, literary design system for fictional reading societies, antiquarian presses, university archives, and letterpress journals: aged manuscript paper, oxblood, bottle green, candlelit brass, dense serif reading, footnotes, marginalia, wax seals, ribbon bookmarks, and catalogue cards.

Identity sample: **Morrow & Vale Antiquarian Press · 暮谷古籍社**.

---

## 1. 一句话气质

Dark Academia is a moody library kit: serif-forward, manuscript-paper first, oxblood for primary action, bottle green for scholarly accent, and brass only as ornament. It should feel like a catalogue card found in a candlelit archive, not a luxury landing page and not a modern editorial blog.

---

## 2. 设计哲学 / 性格

继承固定 `--ds-*` 契约、07 editorial 的阅读字号比例、松行高、双主题骨架，但改写为更密、更文学、更学院化的界面语言。

1. **Paper before chrome** - surfaces are aged manuscript layers, not cold white panels.
2. **Serif leads** - titles, reading text, drop caps, and classical hierarchy use `--ds-font-serif`.
3. **Scholarly density** - margins, footnotes, catalogue numbers, ruled lines, and small-caps labels create literary texture without hurting scanability.
4. **Oxblood and bottle green** - `--ds-primary` handles commitment and selection; `--ds-accent` handles links, notes, and archive references.
5. **Brass is ceremonial** - light `#9a7b2e` and dark `#c9a86a` belong to seals, rules, captions, and borders, never body copy.

---

## 3. 何时用 / 何时别用

**适合**
- Fictional reading societies, antiquarian presses, university archives, literary journals, library exhibitions.
- Long-form essays, catalogue interfaces, collection browsing, reading clubs, editorial calendars.
- Interfaces that need refinement, scholarship, and atmosphere without fantasy or luxury excess.

**不适合**
- High-density operational dashboards where serif body text slows scanning.
- Minimal luxury pages dominated by charcoal, gold, and large empty space.
- Modern lifestyle editorial systems where terracotta warmth and airy layouts are the main signal.
- Youth, gaming, neon, or highly playful consumer products.

---

## 4. 颜色

### 表面与文字

| Token | Light | Dark | 用途 |
|---|---:|---:|---|
| `--ds-bg` | `#ece3d0` | `#16110c` | Main manuscript / study background |
| `--ds-bg-subtle` | `#e2d6bd` | `#1d1610` | Section bands, ruled panels |
| `--ds-bg-elevated` | `#f6efdd` | `#231b13` | Cards, menus, modal surfaces |
| `--ds-bg-sunken` | `#d6c8a8` | `#0e0a06` | Inputs, code, inset paper |
| `--ds-fg` | `#2a2018` | `#ece0c8` | Primary reading ink |
| `--ds-fg-muted` | `#5a4a38` | `#b09a78` | Secondary copy, bylines |
| `--ds-fg-subtle` | `#776550` | `#847058` | Decorative weak text, inactive chrome, large-only labels |
| `--ds-fg-on-accent` | `#f6efdd` | `#f6efdd` | Text on dark accent fields |
| `--ds-border` | `#cdbd9c` | `#38291c` | Standard separators |
| `--ds-border-strong` | `#2a2018` | `#c9a86a` | Strong rule, catalogue edge, dark brass |

### 品牌与强调

| Token | Light | Dark | 用途 |
|---|---:|---:|---|
| `--ds-primary` | `#7c2b22` | `#b8463a` | Oxblood primary, selected state, drop cap |
| `--ds-primary-hover` | `#6a241c` | `#c8564a` | Hover |
| `--ds-primary-active` | `#561a14` | `#a83c30` | Active / pressed |
| `--ds-primary-fg` | `#f6efdd` | `#f6efdd` | Primary button text |
| `--ds-accent` | `#2f4a32` | `#8fb07a` | Bottle-green links, marginalia refs |
| `--ds-accent-fg` | `#f6efdd` | `#0e1a08` | Text on accent |

Emphasis gradient: active oxblood -> hover oxblood -> default oxblood, with dark mode lifted for candlelight legibility. Use decorative brass sparingly through `--ds-brass`: light `#9a7b2e`, dark `#c9a86a`.

### 语义状态

| 语义 | 主色（亮 / 暗） | `-bg`（亮 / 暗） | `-fg`（亮 / 暗） |
|---|---|---|---|
| success | `#3a6b2e` / `#6fbf6f` | `#e6efe0` / `#102a10` | `#173310` / `#cdeec0` |
| warning | `#9a6a14` / `#d8b25a` | `#f4e8cf` / `#241a06` | `#43300a` / `#f6e6be` |
| danger | `#7c2b22` / `#d8584a` | `#f3e0db` / `#2a0e0a` | `#4a130d` / `#f8d6cf` |
| info | `#2f4a52` / `#5fa0a8` | `#e0eaec` / `#08222a` | `#0e2429` / `#d6eef2` |

---

## 5. 字体

| Token | Stack | 用途 |
|---|---|---|
| `--ds-font-serif` | `"Noto Serif", Georgia, serif` | Display, headings, body reading, drop caps |
| `--ds-font-sans` | `"Inter", -apple-system, "PingFang SC", sans-serif` | UI, labels, buttons, small-caps headings |
| `--ds-font-mono` | `"JetBrains Mono", monospace` | Footnote refs, catalogue numbers, archive codes |

Scale follows 07 editorial: `13, 14, 17, 19, 22, 28, 38, 52px`. Body text starts at `17px` with `1.85` relaxed leading. Weights remain `400 / 500 / 600`; avoid heavy display weights because the mood comes from texture and hierarchy, not bulk. Chinese UI labels use PingFang SC fallback; Chinese reading text can rely on Noto Serif / local serif fallback from `../../_fonts/fonts.css`.

---

## 6. 间距与布局

Spacing uses the fixed 4px scale from 07: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`.

- Reading column: max `680px`, with marginalia beside it on desktop.
- Archive grids: denser than editorial, usually 2-3 columns with ruled cards and catalogue metadata.
- Marginalia: a side column of notes and refs; collapse below the text on phones.
- Manuscript panels: use `--ds-bg-subtle` or `--ds-bg-elevated` with subtle ruled lines.
- Mobile: preserve 17px body text; reduce large headings and collapse all multi-column motifs to single column.

---

## 7. 圆角 / 阴影 / 描边

| Token | Value | 气质 |
|---|---:|---|
| `--ds-radius-sm` | `3px` | Buttons, fields, catalogue stamps |
| `--ds-radius-md` | `6px` | Cards, alerts, menus |
| `--ds-radius-lg` | `10px` | Plates, modals, feature cards |
| `--ds-radius-full` | `9999px` | Pills and counters only |

Shadows are parchment-depth, not glossy elevation: light `sm/md/lg` use warm brown alpha; dark shadows use black alpha. Borders carry much of the hierarchy. Use `--ds-border` for manuscript rules and `--ds-border-strong` for ex-libris edges or dark brass accents.

---

## 8. 动效

Motion inherits 07 editorial: `--ds-ease: cubic-bezier(.22,.61,.36,1)`, `160ms / 240ms / 300ms`.

Typical motion:
- Button and tab color transitions at `fast`.
- Menu, toast, modal opacity and 8px translate at `base`.
- Theme transition at `slow`.
- Wax seal, ribbon, and ornamental rules should not animate continuously.

Respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto; }
}
```

---

## 9. 组件规格

**Buttons**: height `40px`, small `32px`, large `48px`, `radius-sm`, `font-sans`, `medium`. Primary uses `--ds-primary / --ds-primary-fg`; secondary uses elevated paper and `--ds-border-strong`; tertiary uses transparent oxblood; danger uses semantic danger.

**Inputs**: height `40px`, `radius-sm`, elevated paper, `--ds-border`, serif-free UI text. Focus uses `--ds-focus-ring`. Use `--ds-bg-sunken` for code-like archive fields.

**Cards**: elevated paper, `1px --ds-border`, `radius-md`, optional ribbon bookmark along one edge. Titles serif, metadata sans or mono. Catalogue cards may add ruled lines and a small-caps heading.

**Badges / tags**: `22px` high, sans, `13px`, full or small radius. Use semantic pairs for statuses. Keep brass tags decorative only.

**Alerts**: semantic background and foreground pairs, `radius-md`, inline SVG icon, no emoji. Borders may mix semantic color with `--ds-border`.

**Navigation**: topbar is manuscript paper with a bottom rule. Brand is serif; navigation items are small-caps sans. Current state uses oxblood underline or text color.

**Dark-Academia motifs**:
- Drop cap: first reading paragraph, oxblood serif, about 3 lines tall.
- Footnotes: superscript mono refs and a top-ruled ordered list.
- Marginalia: side column with bottle-green refs, collapsed below on mobile.
- Wax seal + ribbon: inline SVG seal medallion plus a vertical bookmark on card edge.
- Ornamental rule: centered fleuron SVG between literary sections.
- Ex-libris / catalogue card: ruled, metadata-heavy, mono accession number.

---

## 10. 可访问性

- Body text on paper/ink meets WCAG AA in both themes: `--ds-fg` on `--ds-bg` is above 4.5:1.
- Use `--ds-fg-muted` for normal-size captions and helper text; fixed `--ds-fg-subtle` is reserved for decorative marks, inactive chrome, or large text.
- Primary and accent foreground pairs are designed for readable controls in light and dark themes.
- Focus uses a two-ring `--ds-focus-ring`, visible against paper and candlelit surfaces.
- Touch targets should be at least 44px for primary interactive controls.
- All decorative seals, rules, and fleurons should be `aria-hidden="true"`; icon-only controls need labels.
- Reduced motion must disable transitions and animation.

---

## 11. Do / Don't

**Do**
- Use oxblood for commitment, selection, drop caps, and active refs.
- Use bottle green for links, marginalia, and scholarly secondary emphasis.
- Use small-caps labels, catalogue numbers, footnotes, and ruled lines to create density.
- Keep serif body text at readable sizes and generous line-height.
- Let brass appear as seal/rule/caption ornament only.

**Don't**
- Do not turn brass into body text or button text; it fails the mood and can weaken contrast.
- Do not imitate luxury minimalism with huge blank charcoal pages and gold CTAs.
- Do not drift into 07 editorial by using airy terracotta reading cards.
- Do not over-ornament every component; one seal, one ribbon, or one rule is enough per surface.
- Do not reduce body serif below 17px in reading contexts.

---

## 12. 如何接入

Plain CSS:

```html
<link rel="stylesheet" href="styles/34-dark-academia/tokens.css">
```

Use variables directly:

```css
.archive-card {
  background: var(--ds-bg-elevated);
  color: var(--ds-fg);
  border: 1px solid var(--ds-border);
  border-radius: var(--ds-radius-md);
  box-shadow: var(--ds-shadow-sm);
}
```

Tailwind:

```js
module.exports = {
  presets: [require('./styles/34-dark-academia/tailwind.preset.js')],
};
```

Theme switching:

```html
<html data-theme="dark">
```

or add `.dark` to a root container. The token contract stays fixed, so a project can switch from any other kit to this one by replacing `tokens.css` and the Tailwind preset.
