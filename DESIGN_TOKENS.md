# Design Tokens

These tokens centralize visual decisions used across the site. Prefer these over ad-hoc values.

## Colors
- Brand scale: `--brand-50` … `--brand-950` and `--brand`
- Accent scale: `--accent-50` … `--accent-950`
- Semantic: `--success`, `--warning`, `--info`, `--destructive`
- Surfaces: `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--ring`
- Dark mode variants set under `.dark`

## Radii
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- Cards use `rounded-2xl` consistently

## Shadows
- `--shadow-xs`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-glow-brand`
- Utilities: `.shadow-elev-xs|sm|md|lg`, `.shadow-glow-brand`

### When to use each shadow level
- `.shadow-elev-xs` (rest): subtle depth for small UI elements (chips, inputs).
- `.shadow-elev-sm` (rest prominent): images, small cards, primary buttons.
- `.shadow-elev-md` (hover): interactive hover depth on cards and larger tiles.
- `.shadow-elev-lg` (modal/layer): overlays and sheets.
- `.shadow-glow-brand` (focus): accessible focus glow for prominent actions.

## Transitions
- Durations: `--transition-fast`, `--transition-base`, `--transition-slow`; easing: `--easing-standard`

## Typography scale
- Headings (base utilities in globals):
  - h1: `text-[32px] md:text-5xl`
  - h2: `text-[24px] md:text-3xl`
  - h3: `text-[20px] md:text-2xl`
- Body: `.text-body` (16px), Lead: `.text-lead` (17px), Small: `.text-small` (15px)
- Use `.text-body` for standard paragraphs; `.text-small` for captions/secondary; `.text-lead` for key intros.

## Spacing scale
- Sections: `.section-y` (py-16 md:py-24), `.section-top`, `.section-bottom`
- Prefer Tailwind spacing multiples (4/8pt). Avoid fractional values; choose nearest utility.

## Color tokens
- Primary: `--primary` (brand), `--primary-foreground`
- Secondary: `--secondary`, `--secondary-foreground`
- Accent: `--accent`, `--accent-foreground`
- Neutrals: `--neutral-0..900` mapped to `--color-neutral-*`
- Aliases: `--color-bg` → `--background`, `--color-surface` → `--card`, `--color-text` → `--foreground`, `--color-border` → `--border`

| Token | Light | Dark |
|---|---|---|
| `--neutral-0` | #ffffff | #ffffff |
| `--neutral-50` | #f8fafc | #f8fafc |
| `--neutral-100` | #f1f5f9 | #f1f5f9 |
| `--neutral-200` | #e2e8f0 | #e2e8f0 |
| `--neutral-300` | #cbd5e1 | #cbd5e1 |
| `--neutral-400` | #94a3b8 | #94a3b8 |
| `--neutral-500` | #64748b | #64748b |
| `--neutral-600` | #475569 | #475569 |
| `--neutral-700` | #334155 | #334155 |
| `--neutral-800` | #1f2937 | #1f2937 |
| `--neutral-900` | #0b0f1a | #0b0f1a |

Guidance
- Use `--color-bg` and `--color-surface` for page/surface backgrounds.
- Use brand/secondary for CTAs; accent sparingly.
- For subtle lines/borders, use `--color-border` and avoid hardcoded rgba.

Removed utilities
- `.bg-gradient-brand` and `.animate-fade-in-up` were removed as unused. Prefer `<Hero>` background gradients and the `.reveal` primitive respectively.