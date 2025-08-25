"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCarousel() {
  const items: Testimonial[] = [
    { quote: "Placeholder quote — voorbeelden beschikbaar op aanvraag.", name: "Voorbeeldnaam", role: "Ondernemer" },
  ];
  const [index, setIndex] = React.useState(0);
  const timer = React.useRef<number | null>(null);

  React.useEffect(() => {
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [items.length]);

  function pause() {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
  }

  function play() {
    if (!timer.current) timer.current = window.setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
  }

  return (
    <Card variant="glassBrand" onMouseEnter={pause} onMouseLeave={play}>
      <div className="relative">
        {items.map((t, i) => (
          <blockquote
            key={i}
            aria-hidden={i !== index}
            className={`transition-opacity ${i === index ? "opacity-100" : "opacity-0 absolute inset-0"}`}
          >
            <p className="text-lg">“{t.quote}”</p>
            <footer className="mt-2 text-sm text-muted-foreground">{t.name} · {t.role}</footer>
          </blockquote>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2" role="tablist" aria-label="Testimonials">
        {items.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-label={`Slide ${i + 1}`}
            aria-selected={i === index || undefined}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full border ${i === index ? "bg-brand border-brand" : "bg-transparent"}`}
          />
        ))}
      </div>
    </Card>
  );
}


