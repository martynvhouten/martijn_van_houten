"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { href: string; label: string };

export function ActiveLink({ href, label }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      prefetch
      aria-current={isActive ? "page" : undefined}
      className={`text-[15px] font-medium tracking-wide transition-colors duration-200 link-underline ${
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
      style={isActive ? { backgroundSize: "100% 2px" } : undefined}
    >
      {label}
    </Link>
  );
}


