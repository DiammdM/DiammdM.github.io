import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: site.url,
      lastModified: now,
    },
    {
      url: `${site.url}/about`,
      lastModified: now,
    },
    {
      url: `${site.url}/projects`,
      lastModified: now,
    },
    ...projects.map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      lastModified: now,
    })),
  ];
}
