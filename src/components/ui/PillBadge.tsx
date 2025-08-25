import * as React from "react";

type Props = { children?: React.ReactNode };

export function PillBadge({ children }: Props) {
  return (
    <span className="inline-flex items-center rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}


