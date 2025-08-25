import { ContactForm } from "./ContactForm";
import { Hero } from "@/components/ui/Hero";

export const metadata = {
  title: "Contact",
  description: "Plan een gratis kennismaking of stel je vraag via het formulier.",
};

export default function Page() {
  return (
    <div>
      <Hero>
        <div className="max-w-readable mx-auto text-center reveal">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="text-muted-foreground mt-3">Plan een korte kennismaking of stel je vraag. Ik reageer binnen 1 werkdag.</p>
        </div>
        <div className="mt-8 max-w-xl mx-auto reveal">
          <ContactForm />
          <div className="mt-6 flex gap-3 justify-center">
            <a href="https://wa.me/31600000000" className="text-sm link-underline" aria-label="WhatsApp">WhatsApp</a>
            <a href="https://www.linkedin.com/in/martijnvanhouten" className="text-sm link-underline" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </Hero>
      <a href="/contact" className="fixed bottom-4 right-4 md:hidden inline-flex items-center rounded-full bg-gradient-to-b from-[color:var(--brand-500)] to-[color:var(--brand-600)] px-5 py-3 text-sm font-medium text-[color:var(--brand-foreground)] shadow-elev-lg">Plan kennismaking</a>
    </div>
  );
}


