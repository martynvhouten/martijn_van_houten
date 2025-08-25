export const metadata = {
  title: "Over mij",
  description:
    "Ik bouw moderne websites voor ZZP’ers en kleine ondernemers.",
};

import { Hero } from "@/components/ui/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lightbulb, Users } from "lucide-react";

export default function Page() {
  return (
    <div>
      {/* Hero/Intro */}
      <Hero>
        <div className="max-w-readable mx-auto text-center reveal">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Ik ben Martijn van Houten</h1>
          <p className="text-muted-foreground mt-3 text-body">
            Ik help ZZP’ers en kleine ondernemers — zoals boekhouders, coaches, salons en fysiopraktijken — aan moderne websites die snel online zijn, betaalbaar blijven, goed vindbaar zijn en eenvoudig te beheren.
          </p>
        </div>
      </Hero>

      {/* Story / Background */}
      <section className="container mx-auto px-4 pb-10 md:pb-14">
        <div className="max-w-readable mx-auto text-center reveal">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Achtergrond</h2>
          <p className="text-muted-foreground mt-2 text-body">
            Websites bouwen begon voor mij als hobby. Ik maakte eigen projecten om te leren, testen en verbeteren. Vanuit die projecten groeide mijn interesse in wat een website écht effectief maakt: duidelijke structuur, scherpe boodschap, snelheid en vindbaarheid.
          </p>
          <p className="text-muted-foreground mt-2 text-body">
            Nu zet ik die vaardigheden bewust in voor ZZP’ers en kleine bedrijven. Ik ben praktisch en zelf geleerd: ik werk iteratief, lever snel op en kies oplossingen die passen bij jouw situatie — niet groter of complexer dan nodig. Zo krijg je een professionele site die waarde toevoegt vanaf dag één, en die we later eenvoudig kunnen uitbreiden.
          </p>
          <p className="text-muted-foreground mt-2 text-body">
            Mijn aanpak is persoonlijk en toegankelijk. We houden de lijnen kort, plannen concrete momenten voor feedback en spreken helder af wat je kunt verwachten. Geen overpromise — wel een resultaat waar je op kunt bouwen.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 pb-12 md:pb-16 grid gap-6 md:grid-cols-3">
        {[{
          title: "Betrouwbaar & transparant",
          desc: "Heldere afspraken, vaste contactmomenten en geen verrassingen.",
          Icon: ShieldCheck,
        }, {
          title: "Praktisch & oplossingsgericht",
          desc: "We kiezen wat werkt — slim, simpel en effectief.",
          Icon: Lightbulb,
        }, {
          title: "Meedenkend & persoonlijk",
          desc: "Structuur, content en SEO passend bij jouw doelgroep.",
          Icon: Users,
        }].map((v) => (
          <div key={v.title} className="reveal card-glass text-center">
            <div className="flex items-start gap-3 justify-center">
              <span className="icon-badge" aria-hidden>
                <v.Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[1.05rem] font-medium">{v.title}</p>
                <p className="text-small text-foreground/80 mt-1">{v.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Way of working */}
      <section className="container mx-auto px-4 pb-12 md:pb-16">
        <div className="max-w-readable mx-auto text-center reveal">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Werkwijze</h2>
        </div>
        <ol className="mt-4 grid gap-4 md:grid-cols-3 text-sm reveal">
          {[{ title: "1. Kennismaken", desc: "We bespreken doelen, doelgroepen en voorbeeldsites. Je krijgt een concreet voorstel en planning." }, { title: "2. Design & bouw", desc: "Ik werk in korte rondes. Jij geeft feedback, ik voer door. Zo gaan we snel en gericht vooruit." }, { title: "3. Live & groei", desc: "We gaan live, meten resultaten en sturen bij. Uitbreiden kan stap voor stap wanneer het nodig is." }].map((s) => (
            <li key={s.title} className="card-glass text-center">
              <p className="text-[1.05rem] font-medium">{s.title}</p>
              <p className="text-foreground/80 mt-1 text-small">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Micro-stats */}
      <section className="container mx-auto px-4 pb-12 md:pb-16">
        <div className="grid gap-4 md:grid-cols-3 reveal">
          {[
            { label: "Binnen 1 week online", value: "Snel live" },
            { label: "Heldere communicatie", value: "Korte lijnen" },
            { label: "Persoonlijke aanpak", value: "Één aanspreekpunt" },
          ].map((s) => (
            <div key={s.label} className="card-glass text-center">
              <p className="text-2xl font-semibold tracking-tight">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container mx-auto px-4 pb-20">
        <Card variant="glassBrand" className="reveal text-center">
          <div className="max-w-readable mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Klaar om online sterker te staan?</h2>
            <p className="text-small text-foreground/80 mt-2">Benieuwd wat ik voor jouw bedrijf kan doen? Plan een gratis kennismaking. Ik denk graag met je mee.</p>
          </div>
          <div className="mt-5">
            <Button asChild>
              <a href="/contact">Plan een gratis kennismaking</a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}


