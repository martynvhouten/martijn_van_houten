import * as React from "react";
import { Card } from "./card";

type Props = React.PropsWithChildren<{ className?: string }>;

export function GradientCard({ className, children }: Props) {
  return (
    <Card variant="glassBrand" className={className}>
      {children}
    </Card>
  );
}


