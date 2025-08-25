export const metadata = {
  title: "Praktische tips voor ondernemers",
  description: "Korte, toepasbare ideeën om je website sterker te maken.",
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-readable prose prose-neutral dark:prose-invert">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Praktische tips voor ondernemers</h1>
        <p className="mt-3 text-muted-foreground">Een aantal snelle verbeteringen die vaak direct resultaat geven.</p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Maak je boodschap concreet</h2>
        <p className="mt-3 text-muted-foreground">Schrijf kort en duidelijk wat je doet, voor wie en welk resultaat je levert.</p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Duidelijke CTA’s</h2>
        <p className="mt-3 text-muted-foreground">Zorg dat je belangrijkste actie (bellen, afspraak plannen, offerte aanvragen) overal zichtbaar is.</p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Snelle laadtijden</h2>
        <p className="mt-3 text-muted-foreground">Optimaliseer afbeeldingen, gebruik moderne hosting en vermijd onnodige scripts.</p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Lokale vindbaarheid</h2>
        <blockquote className="border-l-4 pl-4 text-muted-foreground">Vermeld je plaatsnaam en diensten op natuurlijke wijze in teksten en titels.</blockquote>
      </div>
    </article>
  );
}


