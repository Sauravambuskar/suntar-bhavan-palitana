export const siteUrl = "https://www.suntarbhavan.in";
export const siteName = "Suntar Bhavan";
export const defaultSocialImage = `${siteUrl}/images/suntar-photo-3.jpg`;

const pageKeywords: Record<string, string[]> = {
  "/": [
    "Jain dharamshala in Palitana",
    "dharamshala in Palitana",
    "Suntar Bhavan Palitana",
    "Jain stay near Taleti",
    "Palitana pilgrim accommodation",
    "Shatrunjaya yatra stay",
  ],
  "/rooms": [
    "rooms in Palitana",
    "AC rooms in Palitana",
    "non-AC rooms in Palitana",
    "Jain dharamshala rooms",
    "family stay in Palitana",
  ],
  "/bhojanshala": [
    "Jain Bhojanshala in Palitana",
    "satvik Jain food Palitana",
    "Navkarshi Palitana",
    "Chovihar Palitana",
    "Jain meals for yatris",
  ],
  "/facilities": [
    "dharamshala facilities in Palitana",
    "Palitana dharamshala with parking",
    "Jain dharamshala with temple",
    "pilgrim facilities Palitana",
  ],
  "/gallery": [
    "Suntar Bhavan photos",
    "Palitana dharamshala photos",
    "Jain dharamshala rooms Palitana",
    "Suntar Bhavan gallery",
  ],
  "/visit": [
    "Suntar Bhavan address",
    "Suntar Bhavan contact number",
    "dharamshala near Taleti",
    "Hastgiri Road Palitana accommodation",
  ],
};

export function seoHead({
  title,
  description,
  path,
  image = defaultSocialImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const canonical = new URL(path, siteUrl).toString();

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: pageKeywords[path].join(", ") },
      { name: "author", content: "Suntar Bhavan" },
      { name: "publisher", content: "Suntar Bhavan" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: siteName },
      { property: "og:locale", content: "en_IN" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: "Suntar Bhavan Jain dharamshala in Palitana" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}
