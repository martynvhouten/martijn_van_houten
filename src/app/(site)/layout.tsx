import SiteHeader from "@/components/site/SiteHeader";
import { Footer } from "@/components/site/Footer";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const nav = [
    { href: "/", label: "Home" },
    { href: "/over-mij", label: "Over mij" },
    { href: "/diensten", label: "Diensten" },
    { href: "/portfolio", label: "Voorbeelden" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader nav={nav} />
      <main className="flex-1">{children}</main>
      <Footer nav={nav} />
    </div>
  );
}


