import Link from "next/link";
import { Hero } from "@/components/ui/Hero";

export const metadata = {
  title: "Blog",
  description: "Korte, praktische tips over web, vindbaarheid en conversie.",
};

export default function Page() {
  return (
    <div>
      <Hero>
        <div className="max-w-readable mx-auto text-center reveal">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Blog</h1>
          <p className="text-muted-foreground mt-3 text-body">Korte, toepasbare inzichten voor ZZP’ers en kleine ondernemers.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link href={`/blog/praktische-tips-voor-ondernemers`} className="card-glass spotlight-hover block focus:outline-none reveal link-underline">
            <p className="text-lg md:text-xl font-semibold tracking-tight">Praktische tips voor ondernemers</p>
            <p className="text-small text-muted-foreground mt-2 leading-relaxed">Concrete ideeën om je website beter te laten presteren.</p>
            <span className="card-cta">Lees artikel →</span>
          </Link>
        </div>
      </Hero>
    </div>
  );
}


