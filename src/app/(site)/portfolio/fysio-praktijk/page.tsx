export const metadata = {
  title: "Fysio Praktijk",
  description: "Voorbeeld van een snelle website met afspraak-CTA’s en dienstenoverzicht.",
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-readable">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Fysio Praktijk</h1>
        <p className="mt-3 text-muted-foreground">Voorbeeld van een toegankelijke website. Bezoekers kunnen eenvoudig een afspraak plannen.</p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Aanpak</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>Heldere navigatie en dienstenoverzicht</li>
          <li>Duidelijke CTA’s naar afspraakmodule</li>
          <li>Optimalisatie op snelheid en toegankelijkheid</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Wat je ziet</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>Eenvoudige afspraakflow</li>
          <li>Snelle laadtijden</li>
        </ul>
      </div>
    </article>
  );
}


