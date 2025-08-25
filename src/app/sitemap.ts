import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://martijnvanhouten.com";
  const routes = ["/", "/over-mij", "/diensten", "/portfolio", "/blog", "/contact"];
  return routes.map((r) => ({ url: base + r, changeFrequency: "weekly", priority: r === "/" ? 1 : 0.7 }));
}


