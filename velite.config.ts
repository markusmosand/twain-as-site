import { defineConfig, defineCollection, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug("posts"),
      date: s.isodate(),
      excerpt: s.string().max(200),
      author: s.string().optional(),
      tags: s.array(s.string()).optional(),
      image: s.string().optional(),
      imageAlt: s.string().optional(),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      url: `/blog/${data.slug}`,
      readingTime: Math.ceil(data.body.split(/\s+/).length / 200),
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
