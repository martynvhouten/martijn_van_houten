"use client";

import * as React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calculator, Stethoscope, Users, Scissors } from "lucide-react";

type Branch = {
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const branches: Branch[] = [
  { label: "Boekhouders & administratie", Icon: Calculator },
  { label: "Fysiotherapie & zorgpraktijken", Icon: Stethoscope },
  { label: "Coaches & consultants", Icon: Users },
  { label: "Salons & kappers", Icon: Scissors },
];

export function Branches() {
  return (
    <Section className="bg-white">
      <div className="reveal">
        <SectionHeading title="Voor wie ik websites maak" />
      </div>
      <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2">
        {branches.map(({ label, Icon }) => (
          <Link
            key={label}
            href="/portfolio"
            className="reveal group flex flex-col items-center justify-center card-glass text-center"
            aria-label={label}
          >
            <span className="icon-badge group-hover:text-[color:var(--brand-900)]">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span className="mt-3 font-medium leading-6">{label}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default Branches;


