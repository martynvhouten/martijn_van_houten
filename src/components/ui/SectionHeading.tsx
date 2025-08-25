import * as React from "react";

type Props = {
  title: string;
  sub?: string;
  as?: React.ElementType;
};

export function SectionHeading({ title, sub, as: Tag = "h2" }: Props) {
  return (
    <div className="max-w-readable mx-auto text-center">
      <Tag className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</Tag>
      {sub ? <p className="text-muted-foreground mt-2 text-body">{sub}</p> : null}
    </div>
  );
}


