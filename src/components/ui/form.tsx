import * as React from "react";

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  required?: boolean;
};

export function Field({ label, name, required, ...props }: FieldProps) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-foreground/90">{label}{required ? " *" : null}</span>
      <input
        name={name}
        required={required}
        className="h-10 rounded-md border bg-background px-3 outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
        {...props}
      />
    </label>
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: string;
  required?: boolean;
};

export function TextArea({ label, name, required, ...props }: TextareaProps) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-foreground/90">{label}{required ? " *" : null}</span>
      <textarea
        name={name}
        required={required}
        className="min-h-28 rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
        {...props}
      />
    </label>
  );
}


