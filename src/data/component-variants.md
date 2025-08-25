## Component Variants Matrix

### Card
- default: Subtle surface; focus ring.
- elevated: White surface; `shadow-elev-sm`.
- accent: Soft brand-tinted gradient.
- glass: Uses `.card-glass`.
- glassBrand: Inline brand-tinted gradient via Card.

Example:
```tsx
<Card variant="glassBrand">Content</Card>
```

### Button
- variant: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- size: `default`, `sm`, `lg`, `icon`

Example:
```tsx
<Button variant="default" size="lg">CTA</Button>
```

### Badge
- variant: `default`, `secondary`, `destructive`, `outline`

Example:
```tsx
<Badge variant="secondary">Nieuw</Badge>
```

### Input / Textarea
- Input: tokenized styles, `aria-invalid` and focus rings supported.
- Textarea: tokenized styles, `aria-invalid` and focus rings supported.

Example:
```tsx
<Input placeholder="E-mail" aria-invalid={false} />
<Textarea placeholder="Bericht" />
```

Notes
- Prefer elevation utilities `shadow-elev-*` over ad-hoc shadows.
- Use `Card variant="glassBrand"` for brand-tinted cards.


