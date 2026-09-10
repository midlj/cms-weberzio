import { site } from "@/data/site";
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
