import * as React from "react";

type Props = React.PropsWithChildren<{ className?: string }>;

export function Container({ children, className }: Props) {
  return <div className={`container mx-auto px-4 ${className ?? ""}`}>{children}</div>;
}


