import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function LogoStrip() {
  const logos: Logo[] = [
    { src: "/logos/logo-boekhouder.svg", alt: "Boekhouder (voorbeeld)", width: 120, height: 28 },
    { src: "/logos/logo-fysio.svg", alt: "Fysio (voorbeeld)", width: 100, height: 28 },
    { src: "/logos/logo-salon.svg", alt: "Salon (voorbeeld)", width: 96, height: 28 },
    { src: "/logos/logo-coach.svg", alt: "Coach (voorbeeld)", width: 96, height: 28 },
    { src: "/logos/logo-klus.svg", alt: "Klus (voorbeeld)", width: 90, height: 28 },
  ];
  return (
    <div className="w-full border-y bg-muted/20" aria-label="Branches voorbeelden">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
          {logos.map((l) => (
            <Image key={l.src} src={l.src} alt={l.alt} width={l.width} height={l.height} />
          ))}
        </div>
      </div>
    </div>
  );
}


