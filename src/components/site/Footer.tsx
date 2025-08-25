import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

export function Footer({ nav }: { nav: NavItem[] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold tracking-tight">Martijn van Houten</p>
            <p className="mt-2 text-sm text-muted-foreground">Persoonlijk. Praktisch. Snel.</p>
            <p className="mt-3 text-sm text-muted-foreground max-w-readable">
              Moderne websites voor ZZP’ers en kleine ondernemers. Goed vindbaar, makkelijk te beheren en snel opgeleverd.
            </p>
          </div>

          <nav aria-label="Hoofdnavigatie" className="text-sm">
            <p className="text-brand font-medium mb-3">Navigatie</p>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-muted-foreground hover:text-foreground link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-[3px] transition-colors"
                    prefetch
                    aria-label={n.label}
                    aria-current={undefined}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="text-brand font-medium mb-3">Contact</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="mailto:info@martijnvanhouten.com"
                  className="hover:text-foreground link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-[3px] transition-colors"
                >
                  info@martijnvanhouten.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/martijnvanhouten"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-[3px] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="text-brand font-medium mb-3">Bedrijfsgegevens</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="block font-mono text-[13px]">KVK: 00000000</span>
              </li>
              <li>
                <span className="block font-mono text-[13px]">BTW: NL000000000B01</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-xs text-muted-foreground">
          © {year} Martijn van Houten · Alle rechten voorbehouden
        </div>
      </div>
    </footer>
  );
}


