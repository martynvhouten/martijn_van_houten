export const metadata = {
  title: "Coach Online",
  description: "Voorbeeld met heldere positionering en structurering van trajecten.",
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-readable">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Coach Online</h1>
        <p className="mt-3 text-muted-foreground">Voorbeeld van een heldere website. Duidelijke trajecten en laagdrempelig contact.</p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Aanpak</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>Positionering en tone of voice aangescherpt</li>
          <li>Structuur met trajecten, werkwijze en reviews</li>
          <li>Conversiegerichte CTA’s</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Wat je ziet</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>Duidelijke trajecten en CTA’s</li>
          <li>Betere leesbaarheid</li>
        </ul>
      </div>
    </article>
  );
}


