import * as React from "react";
import { Container } from "./Container";

type Props = React.PropsWithChildren<{
  id?: string;
  className?: string;
  /**
   * Gradient direction: b (to bottom), tr (to top-right), br (to bottom-right)
   */
  gradientDir?: "b" | "tr" | "br";
  /**
   * When true, the gradient starts behind the sticky header (overlaps header height)
   */
  overlapHeader?: boolean;
}>;

export function Hero({ id, className, gradientDir = "b", overlapHeader = true, children }: Props) {
  const dirClass =
    gradientDir === "tr"
      ? "bg-gradient-to-tr"
      : gradientDir === "br"
      ? "bg-gradient-to-br"
      : "bg-gradient-to-b";

  return (
    <section
      id={id}
      className={`${dirClass} from-brand-100 via-white to-white py-16 md:py-24 relative overflow-hidden ${
        overlapHeader ? "-mt-16" : ""
      } ${
        className ?? ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[conic-gradient(from_130deg_at_10%_10%,_color-mix(in_oklab,_var(--brand-200)_60%,_transparent),_transparent_30%,_color-mix(in_oklab,_var(--brand-100)_70%,_transparent)_60%)]" aria-hidden />
      <Container>
        {overlapHeader ? <div className="h-16" aria-hidden /> : null}
        {children}
      </Container>
    </section>
  );
}


