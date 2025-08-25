export const metadata = {
  title: "Salon Studio",
  description: "Voorbeeld met rustige branding, prijslijst en online afspraakmogelijkheden.",
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-readable">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Salon Studio</h1>
        <p className="mt-3 text-muted-foreground">Voorbeeld van een elegante site met focus op sfeer, diensten en eenvoudig contact.</p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Aanpak</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>Rustige visuele stijl en duidelijke prijslijst</li>
          <li>Integratie met online afspraken</li>
          <li>SEO op lokale zoektermen</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Wat je ziet</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>Rustige uitstraling en duidelijke prijslijst</li>
          <li>Online afspraken mogelijk</li>
        </ul>
      </div>
    </article>
  );
}


