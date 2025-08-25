## Motion Guidelines

When to use motion
- Scroll reveal: Use `.reveal` for elements that benefit from progressive disclosure (e.g., section headings, cards). Avoid on critical content above the fold.
- Hover interactions: Use elevation (`shadow-hover-elev-*`), color shifts, and subtle scale on interactive cards and buttons.

Durations & easing
- Durations: `--transition-fast` (150ms), `--transition-base` (250ms), `--transition-slow` (400ms).
- Easing: `--easing-standard` (cubic-bezier(0.2, 0.8, 0.2, 1)).

Reduced motion
- `RevealManager` checks `prefers-reduced-motion: reduce` and disables reveal animations (elements become visible instantly).
- Avoid large parallax or continuous motion backgrounds. Prefer subtle color/opacity changes.

Examples
- Scroll reveal: Add `className="reveal"` to an element; ensure `<RevealManager />` is mounted.
- Button hover: rely on Button variants; no extra classes needed.
- Card hover: use `clickable` on `<Card>` to apply spotlight and hover elevation.


