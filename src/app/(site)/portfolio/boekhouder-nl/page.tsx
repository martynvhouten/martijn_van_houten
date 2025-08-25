export const metadata = {
  title: "Boekhouder.nl",
  description: "Voorbeeld van een overzichtelijke site met heldere diensten en duidelijke CTA’s.",
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-readable">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Boekhouder.nl</h1>
        <p className="mt-3 text-muted-foreground">Voorbeeld van een overzichtelijke website voor een boekhouder. Focus op heldere diensten en laagdrempelig contact.</p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Aanpak</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>Structuur met duidelijke dienstenpagina’s</li>
          <li>Heldere CTA’s en contactmogelijkheden</li>
          <li>Snelle laadtijden en technische SEO</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Wat je ziet</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>Duidelijke CTA’s en formulieren</li>
          <li>Basis voor goede vindbaarheid</li>
        </ul>
      </div>
    </article>
  );
}


