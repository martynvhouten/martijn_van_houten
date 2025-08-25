import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();
  return (
    <article className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-readable mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-3 text-muted-foreground">{project.intro}</p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Highlights</h2>
        <ul className="mt-3 grid gap-2 text-muted-foreground md:grid-cols-2 text-left">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" /> {h}</li>
          ))}
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-8">Resultaten</h2>
        <ul className="mt-3 flex flex-wrap gap-3 justify-center">
          {project.outcomes.map((o) => (
            <li key={o} className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 shadow-elev-sm text-sm">{o}</li>
          ))}
        </ul>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {project.gallery.map((g, i) => (
            <Image key={i} src={g.src} alt={g.alt} width={g.width} height={g.height} className="rounded-xl border shadow-elev-sm" />
          ))}
        </div>
        <div className="mt-10">
          <Button asChild>
            <a href="/contact">Plan een kennismaking</a>
          </Button>
        </div>
      </div>
    </article>
  );
}


