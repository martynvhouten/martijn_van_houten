import Link from "next/link";

type Props = {
  href: string;
  title: string;
  metrics: string[];
};

export function CaseCard({ href, title, metrics }: Props) {
  return (
    <Link href={href} prefetch className="card-glass block focus:outline-none link-underline">
      <p className="text-lg md:text-xl font-medium tracking-tight">{title}</p>
      <ul className="mt-2 text-small text-foreground/80 leading-relaxed space-y-2">
        {metrics.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <span className="card-cta">Bekijk voorbeeld →</span>
    </Link>
  );
}


