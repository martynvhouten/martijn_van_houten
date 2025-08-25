"use client";
import Link from "next/link";
import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ActiveLink } from "@/components/site/ActiveLink";

type NavItem = { href: string; label: string };

export default function SiteHeader({ nav }: { nav: NavItem[] }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-overlay backdrop-blur bg-background/50 supports-[backdrop-filter]:bg-background/60 transition-colors ${
        scrolled ? "bg-background/70 border-b" : ""
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight hover:text-brand transition-colors">
          Martijn van Houten
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <ActiveLink key={n.href} href={n.href} label={n.label} />
          ))}
          <Button asChild size="sm">
            <Link href="/contact">Gratis kennismaking</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" aria-label="Open menu">
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-4" aria-modal>
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="text-base link-underline" prefetch aria-label={n.label}>
                  {n.label}
                </Link>
              ))}
              <Link href="/contact" className="text-base font-medium text-brand link-underline" prefetch>
                Gratis kennismaking
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


