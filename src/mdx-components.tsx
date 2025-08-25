import * as React from "react";
import type { MDXComponents } from "mdx/types";

// Customize MDX-rendered elements
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => (
      <a {...props} className={(props.className ? props.className + " " : "") + "text-brand hover:underline underline-offset-4"} />
    ),
    h1: (props) => <h1 {...props} className={(props.className ? props.className + " " : "") + "text-3xl md:text-4xl font-semibold tracking-tight"} />,
    h2: (props) => <h2 {...props} className={(props.className ? props.className + " " : "") + "text-2xl md:text-3xl font-semibold tracking-tight mt-8"} />,
    p: (props) => <p {...props} className={(props.className ? props.className + " " : "") + "mt-3 text-muted-foreground max-w-readable"} />,
    ...components,
  };
}


