type Step = {
  title: string;
  desc: string;
  icon: string;
};

export function Process() {
  const steps: Step[] = [
    { title: "Kennismaken", desc: "Doelen, doelgroep en aanpak scherpen we aan.", icon: "💬" },
    { title: "Design & bouw", desc: "Snel itereren met heldere feedbackmomenten.", icon: "⚙️" },
    { title: "Live & groei", desc: "Oplevering, optimalisatie en doorontwikkeling.", icon: "🚀" },
  ];
  return (
    <div className="card-glass">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="flex items-start gap-3">
            <span aria-hidden className="text-xl" role="img">{s.icon}</span>
            <div>
              <p className="font-medium">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


