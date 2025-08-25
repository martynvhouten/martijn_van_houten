import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Process } from "@/components/site/Process";
import { Hero } from "@/components/ui/Hero";
import { Check, Minus } from "lucide-react";

export const metadata = {
  title: "Diensten",
  description:
    "Websites voor ZZP’ers en kleine ondernemers. Gericht op snelheid, duidelijkheid en eenvoudig beheer.",
};

export default function Page() {
  type Pack = {
    key: string;
    title: string;
    bullets: string[];
    checklist?: string[];
    notIncluded?: string[];
    priceFrom?: string;
    priceOnRequest?: boolean;
  }
  const packs: Pack[] = [
    {
      key: "snel-starten",
      title: "Snel starten",
      bullets: [
        "Binnen 1 week live",
        "Professioneel uiterlijk",
        "Laagdrempelig starten",
      ],
      checklist: [
        "One-pager (±5 secties)",
        "Basis SEO/OG",
        "Contact (mail of simpel formulier)",
        "Deploy + DNS",
        "Plausible (optioneel)",
        "1 revisieronde",
      ],
      notIncluded: [
        "CMS",
        "Integraties",
        "Blog/meertaligheid",
        "Uitgebreide branding",
      ],
      priceFrom: "€495",
    },
    {
      key: "groei-professioneel",
      title: "Groei & professioneel",
      bullets: [
        "Beter vindbaar (SEO-basics)",
        "3–6 pagina’s",
        "Zelf content wijzigen (CMS light)",
      ],
      checklist: [
        "3–6 pagina’s",
        "Navigatiestructuur",
        "SEO-basics",
        "Eenvoudig CMS (Sanity of Netlify CMS)",
        "2 revisierondes",
        "Korte CMS-handleiding",
        "Plausible",
      ],
      notIncluded: [
        "Geavanceerde koppelingen",
        "Complexe CMS-flows",
        "E-commerce",
      ],
      priceFrom: "€995",
    },
    {
      key: "maatwerk-uitbreiding",
      title: "Maatwerk & uitbreiding",
      bullets: [
        "Design op maat",
        "Integraties in overleg",
        "Doorontwikkeling in sprints",
      ],
      checklist: [
        "Custom componenten",
        "Extra pagina’s/landings",
        "Basis integraties (agenda/betaling/CRM)",
        "CMS op maat",
        "Analytics events",
        "3+ sprints",
      ],
      notIncluded: [
        "Zware maatwerk backends",
        "E-commerce zonder aparte scope",
      ],
      priceOnRequest: true,
    },
  ];

  const faqs = [
    {
      q: "Hoe snel kan mijn website live?",
      a: "Een one-pager (snel starten) kan binnen 1 week live. Voor meerdere pagina’s reken op 2–4 weken. We plannen upfront 2–3 korte feedbackrondes, zodat het tempo hoog blijft.",
    },
    {
      q: "Regel je onderhoud en updates?",
      a: "Ja. Bij ‘groei & professioneel’ en ‘maatwerk’ zit onderhoud inbegrepen. Voor ‘snel starten’ kan dit via een strippenkaart of maandabonnement.",
    },
    {
      q: "Kan ik later uitbreiden?",
      a: "Zeker. We bouwen modulair. Extra pagina’s, landingspagina’s of integraties (agenda, betalingen, CRM) kunnen we later toevoegen zonder alles om te gooien.",
    },
    {
      q: "Regel je domein en hosting?",
      a: "Ik regel de domeinkoppeling en adviseer hosting (bijv. Vercel of je huidige partij). Kosten lopen via jouw eigen account, zodat jij eigenaar blijft.",
    },
  ];

  type CompareRow = {
    label: string;
    values: (string | boolean)[];
  };
  type Compare = {
    headings: string[];
    rows: CompareRow[];
  };
  const compare: Compare = {
    headings: ["Snel starten", "Groei & professioneel", "Maatwerk & uitbreiding"],
    rows: [
      { label: "Pagina’s", values: ["One-pager", "3–6", "Custom"] },
      { label: "CMS (zelf wijzigen)", values: [false, "✓ (light)", "✓ (maatwerk)"] },
      { label: "SEO-basics", values: [true, true, true] },
      { label: "Integraties", values: [false, false, "✓ (in overleg)"] },
      { label: "Revisierondes", values: ["1", "2", "3+"] },
      { label: "Prijs", values: ["vanaf €495 excl. btw", "vanaf €995 excl. btw", "op aanvraag"] },
    ],
  };

  return (
    <div>
      {/* Hero: gradient brand → white */}
      <Hero>
        <div className="max-w-readable mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Diensten</h1>
          <p className="text-muted-foreground mt-3 text-body">Kies een pakket dat past bij jouw fase. Snel live, helder geregeld en gericht op resultaat.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3 items-stretch">
          {packs.map((p) => {
            const isFeatured = p.key === "groei-professioneel";
            const priceLabel = p.priceFrom ? `vanaf ${p.priceFrom} excl. btw` : "op aanvraag";
            return (
              <Card clickable key={p.title} variant={isFeatured ? "glassBrand" : "glass"} className="reveal spotlight-hover h-full">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-lg md:text-xl font-semibold tracking-tight">{p.title}</p>
                  {isFeatured ? (
                    <span className="inline-flex items-center rounded-full bg-[color:var(--brand-100)] text-[color:var(--brand-800)] px-2 py-0.5 text-xs">Meest gekozen</span>
                  ) : null}
                </div>

                {/* Benefits */}
                <ul className="mt-3 space-y-2 text-small text-foreground/85 leading-relaxed">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700" aria-hidden>
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* What you get */}
                <div className="mt-4">
                  <p className="text-sm font-medium">Wat krijg je?</p>
                  <ul className="mt-2 space-y-1 text-small text-muted-foreground">
                    {p.checklist?.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700" aria-hidden>
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {p.notIncluded && p.notIncluded.length ? (
                  <div className="mt-3">
                    <p className="text-sm font-medium">Niet inbegrepen</p>
                    <ul className="mt-2 space-y-1 text-small text-muted-foreground">
                      {p.notIncluded.map((n) => (
                        <li key={n} className="flex items-start gap-2">
                          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-muted text-muted-foreground" aria-hidden>
                            <Minus className="h-3.5 w-3.5" />
                          </span>
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Footer: price + CTA */}
                <div className="mt-5 flex items-center justify-between gap-3 md:mt-6">
                  <span className="inline-flex items-center rounded-lg bg-[color:var(--brand-50)] px-3 py-1.5 text-small text-[color:var(--brand-900)]">{priceLabel}</span>
                  <Button asChild>
                    <Link href="/contact">Plan kennismaking</Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Hero>

      {/* Vergelijking: premium table */}
      <section className="border-y bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-readable mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold">Vergelijk pakketten</h2>
          </div>

          {/* Desktop/tablet: semantic table */}
          <div className="mt-6 overflow-x-auto reveal hidden md:block">
            <table className="min-w-[880px] w-full text-sm border-separate border-spacing-0">
              <caption className="sr-only">Vergelijking van pakketten en features</caption>
              <colgroup>
                <col className="w-[32%]" />
                <col className="w-[22%]" />
                <col className="w-[24%]" />
                <col className="w-[22%]" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className="text-left bg-slate-100 text-muted-foreground font-medium p-4 rounded-tl-xl border border-b-0"></th>
                  {compare.headings.map((h, i) => (
                    <th
                      key={h}
                      scope="col"
                      className={`text-left p-0 align-bottom ${i === 1 ? "relative" : ""}`}
                    >
                      <div className={`m-0.5 rounded-xl border shadow-elev-sm p-4 bg-[color:var(--brand-50)]/50 ${i === 1 ? "ring-1 ring-[color:var(--brand-400)] bg-[color:var(--brand-50)]" : ""}`}>
                        <span className="block text-small font-semibold tracking-tight">{h}</span>
                        {i === 1 ? (
                          <span className="mt-1 inline-flex text-xs rounded-full bg-[color:var(--brand-100)] text-[color:var(--brand-800)] px-2 py-0.5">Meest gekozen</span>
                        ) : null}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.rows
                  .filter((r) => r.label !== "Prijs")
                  .map((row, rIdx) => (
                  <tr key={row.label} className="group">
                    <th scope="row" className={`text-left font-normal text-muted-foreground bg-slate-100 p-4 border ${rIdx === compare.rows.length - 2 ? "border-b-0 rounded-bl-xl" : ""}`}>{row.label}</th>
                    {row.values.map((v, i) => (
                      <td key={`${row.label}-${i}`} className={`p-4 border bg-white ${i === 1 ? "relative z-[0]" : ""}`}>
                        {typeof v === "boolean" ? (
                          <span className={`inline-flex h-5 w-5 items-center justify-center rounded-md transition-colors duration-200 ${v ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"}`} aria-hidden>
                            {v ? "✔" : "—"}
                          </span>
                        ) : (
                          <span className="text-foreground/80">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Price row */}
                <tr>
                  <th scope="row" className="text-left font-medium text-muted-foreground bg-slate-100 p-4 border rounded-bl-xl">Prijs</th>
                  {(() => {
                    const priceRow = compare.rows.find((r) => r.label === "Prijs");
                    const priceValues = (priceRow?.values ?? []).filter((val): val is string => typeof val === "string");
                    return priceValues.map((v, i) => (
                      <td key={`price-${i}`} className={`p-4 border bg-white ${i === 1 ? "ring-1 ring-[color:var(--brand-300)]" : ""}`}>
                        <span className="inline-flex items-center rounded-lg bg-[color:var(--brand-50)] px-3 py-1.5 text-small text-[color:var(--brand-900)]">{v}</span>
                      </td>
                    ));
                  })()}
                </tr>
                {/* CTA row */}
                <tr>
                  <th scope="row" className="text-left font-medium text-muted-foreground bg-slate-100 p-4 border rounded-bl-xl rounded-tl-none"></th>
                  {compare.headings.map((h, i) => (
                    <td key={`cta-${h}`} className={`p-4 border bg-white ${i === 1 ? "rounded-br-xl" : ""}`}>
                      <Button asChild className="w-full">
                        <Link href="/contact">Plan kennismaking</Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards with accordions */}
          <div className="mt-4 md:hidden reveal">
            <div className="grid gap-4">
              {compare.headings.map((h, colIdx) => (
                <Card key={h} variant={colIdx === 1 ? "glassBrand" : "glass"}>
                  <div className="p-0">
                    <div className="flex items-center justify-between">
                      <p className="text-base font-semibold tracking-tight">{h}</p>
                      {colIdx === 1 ? (
                        <span className="text-xs rounded-full bg-[color:var(--brand-100)] text-[color:var(--brand-800)] px-2 py-0.5">Meest gekozen</span>
                      ) : null}
                    </div>
                    <dl className="mt-3 divide-y">
                      {compare.rows.map((row) => (
                        <div key={`${h}-${row.label}`} className="flex items-center justify-between py-2">
                          <dt className="text-sm text-muted-foreground">{row.label}</dt>
                          <dd>
                            {typeof row.values[colIdx] === "boolean" ? (
                              <span className={`inline-flex h-5 w-5 items-center justify-center rounded-md ${row.values[colIdx] ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"}`} aria-hidden>
                                {row.values[colIdx] ? "✔" : "—"}
                              </span>
                            ) : (
                              <span className="text-sm text-foreground/80">{String(row.values[colIdx])}</span>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-3">
                      <Button asChild className="w-full">
                        <Link href="/contact">Plan kennismaking</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Process: white background */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-readable mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold">FAQ</h2>
          </div>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10">
            <div className="max-w-readable mx-auto text-center">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight">Zo werk ik</h3>
              <p className="text-muted-foreground mt-2 text-small">In drie duidelijke stappen, met korte lijnen en vaste contactmomenten.</p>
            </div>
            <div className="mt-4">
              <Process />
            </div>
          </div>
        </div>
      </section>

      {/* CTA: brand-tinted strongest contrast */}
      <section className="container mx-auto px-4 pb-24">
        <Card variant="glassBrand" className="text-white text-center">
          <p className="text-xl md:text-2xl font-semibold tracking-tight">Klaar om te starten?</p>
          <p className="text-sm md:text-[0.95rem] text-white/90">Plan een vrijblijvend gesprek. In 15 minuten weet je precies wat past bij jouw situatie.</p>
          <div className="mt-2">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Plan een kennismaking</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}


