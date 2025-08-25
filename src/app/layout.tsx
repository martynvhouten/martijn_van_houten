import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RevealManager } from "@/components/site/RevealManager";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://martijnvanhouten.com"),
  title: {
    default: "Martijn van Houten",
    template: "%s | Martijn van Houten",
  },
  description:
    "Moderne websites voor ZZP’ers en kleine ondernemers: snel online, betaalbaar, goed vindbaar en makkelijk te beheren.",
  openGraph: {
    title: "Martijn van Houten",
    description:
      "Moderne websites voor ZZP’ers en kleine ondernemers: snel online, betaalbaar, goed vindbaar en makkelijk te beheren.",
    url: "https://martijnvanhouten.com",
    siteName: "Martijn van Houten",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Martijn van Houten — Websites voor ZZP & kleine ondernemers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martijn van Houten",
    description:
      "Moderne websites voor ZZP’ers en kleine ondernemers: snel online, betaalbaar, goed vindbaar en makkelijk te beheren.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="js" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${plusJakarta.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <RevealManager />
        {children}
      </body>
    </html>
  );
}
