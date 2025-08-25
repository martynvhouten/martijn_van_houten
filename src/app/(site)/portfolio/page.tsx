import Link from "next/link";
import { projects } from "@/data/projects";
import { Hero } from "@/components/ui/Hero";

export const metadata = {
  title: "Voorbeelden",
  description: "Voorbeelden van websites die ik heb gebouwd en kan leveren.",
};

const list = projects;

export default function Page() {
  return (
    <div>
      <Hero>
        <div className="max-w-readable mx-auto text-center reveal">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Voorbeelden</h1>
          <p className="text-muted-foreground mt-3 text-body">Voorbeelden met focus op duidelijke informatie, vindbaarheid en conversie.</p>
        </div>
      </Hero>

      {/* Listing section: slightly darker neutral */}
      <section className="border-y bg-slate-100">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {list.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="card-glass spotlight-hover block focus:outline-none reveal link-underline">
                <p className="text-lg md:text-xl font-semibold tracking-tight">{p.title}</p>
                <p className="text-small text-muted-foreground mt-2 leading-relaxed">{p.intro}</p>
                <span className="card-cta">Bekijk voorbeeld →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


