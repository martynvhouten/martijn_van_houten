"use client";
import * as React from "react";
import { Field, TextArea } from "@/components/ui/form";

export function ContactForm() {
  const [state, setState] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = React.useState<string>("");
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({});

  async function onSubmit(formData: FormData) {
    setState("submitting");
    setError("");
    setFieldErrors({});
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const nextFieldErrors: Record<string, string> = {};
    if (!name) nextFieldErrors.name = "Vul je naam in.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextFieldErrors.email = "Vul een geldig e-mailadres in.";
    if (!message) nextFieldErrors.message = "Schrijf kort waar ik mee kan helpen.";
    if (Object.keys(nextFieldErrors).length) {
      setFieldErrors(nextFieldErrors);
      setState("error");
      return;
    }
    const res = await fetch("/api/contact", { method: "POST", body: formData });
    const json = await res.json();
    if (json.ok) setState("success");
    else {
      setError(json.error || "Er ging iets mis.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-lg border p-6 bg-brand/10">
        <p className="font-medium">Bedankt voor je bericht!</p>
        <p className="text-sm text-muted-foreground mt-1">Ik reageer binnen 1 werkdag. Wil je sneller schakelen? Gebruik WhatsApp/LinkedIn.</p>
      </div>
    );
  }

  return (
    <form action={onSubmit} className="grid gap-4" noValidate>
      <div>
        <Field label="Naam" name="name" required placeholder="Voor- en achternaam" aria-invalid={!!fieldErrors.name} aria-describedby={fieldErrors.name ? "name-error" : undefined} />
        {fieldErrors.name ? <p id="name-error" className="mt-1 text-sm text-destructive">{fieldErrors.name}</p> : null}
      </div>
      <div>
        <Field label="E-mail" name="email" type="email" required placeholder="naam@bedrijf.nl" aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "email-error" : undefined} />
        {fieldErrors.email ? <p id="email-error" className="mt-1 text-sm text-destructive">{fieldErrors.email}</p> : null}
      </div>
      <Field label="Telefoon (optioneel)" name="phone" type="tel" placeholder="06-..." />
      <div>
        <TextArea label="Bericht" name="message" required placeholder="Waar kan ik je mee helpen?" aria-invalid={!!fieldErrors.message} aria-describedby={fieldErrors.message ? "message-error" : undefined} />
        {fieldErrors.message ? <p id="message-error" className="mt-1 text-sm text-destructive">{fieldErrors.message}</p> : null}
      </div>
      {error ? <p className="text-sm text-destructive" role="alert">{error}</p> : null}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center rounded-lg bg-gradient-to-b from-[color:var(--brand-500)] to-[color:var(--brand-600)] px-5 py-2.5 text-sm font-medium text-[color:var(--brand-foreground)] shadow-elev-sm transition-colors duration-200 hover:from-[color:var(--brand-600)] hover:to-[color:var(--brand-700)] disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand-400)] focus-visible:ring-offset-background"
      >
        {state === "submitting" ? "Versturen..." : "Verstuur bericht"}
      </button>
    </form>
  );
}


