import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Process } from "@/components/site/Process";
import { Branches } from "@/components/site/Branches";
import { CaseCard } from "@/components/site/CaseCard";
import { Hero } from "@/components/ui/Hero";
export const metadata = {
  title: "Websites voor ZZP & kleine ondernemers",
  description:
    "Snel online met een moderne website die vindbaar is in Google en makkelijk te beheren.",
};

export default function Page() {
  return (
    <div className="">
      {/* Hero: gradient baby-blue → white */}
      <Hero>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="reveal">
            <span className="inline-flex items-center rounded-full border bg-[color:var(--brand-50)]/60 text-[color:var(--brand-800)] px-3 py-1 text-xs">Websites voor ZZP & kleine ondernemers</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Moderne, snelle websites die werken voor jouw bedrijf
            </h1>
            <p className="mt-4 text-muted-foreground max-w-readable text-body">
              Snel online, betaalbaar en goed vindbaar in Google. Ik help je met een website die duidelijk is en aanzet tot actie.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Gratis kennismaking</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/portfolio" prefetch>Bekijk voorbeelden</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground flex flex-wrap gap-x-4 gap-y-2">
              <span>⭐ Snel online</span>
              <span>🔒 Duidelijke afspraken</span>
              <span>📍 Lokaal & persoonlijk</span>
            </p>
          </div>
          <div className="relative reveal">
            <div className="absolute -inset-6 z-base rounded-3xl bg-gradient-to-br from-brand/20 via-transparent to-brand/20 blur-2xl pointer-events-none" aria-hidden />
            <img src="/hero-mock.svg" alt="Website mockup" width={560} height={360} className="relative z-overlay rounded-2xl border shadow-elev-sm" />
          </div>
        </div>
      </Hero>

      {/* Branches section */}
      <Branches />

      {/* Diensten preview: light neutral background */}
      <section className="border-y bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-readable mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Diensten</h2>
            <p className="text-muted-foreground mt-2">Kies wat past bij je situatie – altijd met focus op resultaat.</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { title: "One-pager", desc: "Snel online, duidelijk verhaal, ideale start voor ZZP." },
              { title: "Multi-page", desc: "Meerdere pagina’s, sterke structuur en vindbaarheid." },
              { title: "Optimalisatie & onderhoud", desc: "Sneller, veiliger en continu verbeteren." },
            ].map((c) => (
              <div key={c.title} className="card-glass spotlight-hover">
                <p className="text-[1.05rem] font-medium">{c.title}</p>
                <p className="text-small text-foreground/80 mt-1">{c.desc}</p>
                <Link href="/diensten" className="text-sm mt-3 inline-flex link-underline">Meer over diensten →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces: white background */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-readable mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Zo werken we samen</h2>
            <p className="text-muted-foreground mt-2 text-small">Kennismaken → Design & bouw → Live & groei</p>
          </div>
          <div className="mt-6">
            <Process />
          </div>
        </div>
      </section>

      {/* Uitgelichte projecten: slightly darker neutral or subtle gradient */}
      <section className="border-y bg-slate-100">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-readable mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Voorbeelden</h2>
            <p className="text-muted-foreground mt-2">Voorbeelden van wat ik bouw en kan leveren.</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <CaseCard href="/portfolio/boekhouder-nl" title="Boekhouder.nl" metrics={["duidelijke diensten", "snelle laadtijden"]} />
            <CaseCard href="/portfolio/fysio-praktijk" title="Fysio Praktijk" metrics={["eenvoudig afspraak maken", "snelle laadtijden"]} />
            <CaseCard href="/portfolio/salon-studio" title="Salon Studio" metrics={["rustige uitstraling", "duidelijke prijslijst"]} />
          </div>
        </div>
      </section>

      {/* CTA banner: strongest contrast */}
      <section className="container mx-auto px-4 pt-12 md:pt-16 pb-20">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[var(--brand-700)] via-[var(--brand-800)] to-[var(--brand-900)] p-8 md:p-10 text-white text-center shadow-elev-sm">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[conic-gradient(from_220deg_at_80%_0%,_color-mix(in_oklab,_var(--neutral-0)_10%,_transparent),_transparent_30%,_color-mix(in_oklab,_var(--neutral-0)_6%,_transparent)_55%)]" aria-hidden />
          <div className="max-w-readable mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold">Klaar om online te groeien?</h3>
            <p className="mt-2 text-white/90 text-small">Plan een gratis kennismaking. Ik denk graag mee over de beste aanpak voor jouw bedrijf.</p>
          </div>
          <div className="mt-6">
            <Button asChild variant="secondary">
              <Link href="/contact">Plan een gesprek</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


