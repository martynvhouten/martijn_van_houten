import * as React from "react";
import { Container } from "./Container";

type Props = React.PropsWithChildren<{ id?: string; className?: string }>;

export function Section({ id, className, children }: Props) {
  return (
    <section id={id} className={`section-y ${className ?? ""}`}>
      <Container>{children}</Container>
    </section>
  );
}


