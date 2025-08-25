# Migration Notes

This summarizes replaced/removed classes and how to update components.

## Replaced
- `card-premium` → `card-glass`
- `card-tint-slate`/`card-tint-brand` → `Card variant="glassBrand"`

## Removed
- Gradient hover border overlay on cards (no `::before` gradient around cards)
- Ring/outline focus on cards (replaced by glow-only focus)
- Unused utilities: `.bg-gradient-brand`, `.animate-fade-in-up`

## Focus Behavior
- Cards: use soft glow only; do not add `ring-*` or `outline` utilities.
- Other controls (buttons/inputs) keep ring focus for accessibility.

## Shadows
- Prefer `.shadow-elev-xs|sm|md|lg` and `.shadow-glow-brand` over ad-hoc values.

## Tokens
- Use tokens in `globals.css` for shadows, transitions, z-index.

## Steps Applied
1. Updated all card components and wrappers to `card-glass`.
2. Removed legacy utilities from `globals.css`.
3. Increased base border visibility on glass; removed second-border sources.

## Tips
- For featured cards, use `<Card variant="glassBrand" />`.
- Avoid mixing ring borders with glass cards to prevent double borders.

## Shadow replacements

| File | Old value | New utility |
|------|-----------|-------------|
| `src/app/(site)/page.tsx` | `shadow-sm` on hero image | `.shadow-elev-sm` |
| `src/app/(site)/portfolio/[slug]/page.tsx` | `shadow-sm` on chips/images | `.shadow-elev-sm` |
| `src/app/(site)/contact/page.tsx` | `shadow-lg` on floating CTA | `.shadow-elev-lg` |
| `src/components/ui/sheet.tsx` | `shadow-lg` on sheet content | `.shadow-elev-lg` |
| `src/components/ui/card.tsx` | `hover:shadow-md` interactive | `.shadow-hover-elev-md` |
| `src/components/ui/button.tsx` | `shadow-sm/xs`, `focus:shadow-brand/20` | `.shadow-elev-sm/xs`, `.shadow-glow-brand` |
| `src/components/ui/StatChip.tsx` | `shadow-sm` | `.shadow-elev-sm` |

## Typography & spacing replacements
- Replaced ad-hoc `md:text-[0.95rem]` with `.text-small` across cards and previews.
- Standardized body copy to `.text-body`.
- Replaced fractional spacing `mt-2.5` / `space-y-1.5` with `mt-2` / `space-y-2`.
- Unified section padding via `.section-y` in `Section` component.

## Color normalization
- Replaced `#ffffff1a` and `#ffffff0a` in home conic gradient → `color-mix(in oklab, var(--neutral-0) 10%/6%, transparent)` accordingly.
- Standardized glass card borders and inner shadows to use `--neutral-0`/`--neutral-900` mixes.
- Introduced neutral tokens `--neutral-0..900` and aliases `--color-bg/surface/text/border`.
