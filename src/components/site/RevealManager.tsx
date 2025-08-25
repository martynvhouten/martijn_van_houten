"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

function applyRevealOnce(root: Document | HTMLElement) {
  const elements = root.querySelectorAll<HTMLElement>(".reveal");
  if (elements.length === 0) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window) || prefersReduced) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      }
    },
    { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

export function RevealManager() {
  const pathname = usePathname();

  React.useEffect(() => {
    // Run after paint to avoid layout jank
    const id = window.requestAnimationFrame(() => applyRevealOnce(document));
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}


