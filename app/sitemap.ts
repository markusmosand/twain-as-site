import { MetadataRoute } from "next";
import { posts } from "#site/content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://twain.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = posts
    .filter((post) => post.published)
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
