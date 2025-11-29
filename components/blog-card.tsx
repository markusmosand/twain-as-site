import Link from "next/link";
import { format } from "date-fns";
import { nb } from "date-fns/locale";

interface BlogCardProps {
  post: {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    tags?: string[];
    readingTime: number;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-foreground/5 bg-background p-6 transition-shadow hover:shadow-lg">
      <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
        <time dateTime={post.date}>
          {format(new Date(post.date), "d. MMMM yyyy", { locale: nb })}
        </time>
        <span>·</span>
        <span>{post.readingTime} min lesing</span>
      </div>

      <Link href={`/blog/${post.slug}`} className="group-hover:underline">
        <h2 className="mb-2 text-xl font-semibold tracking-tight">
          {post.title}
        </h2>
      </Link>

      <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3">
        {post.excerpt}
      </p>

      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
