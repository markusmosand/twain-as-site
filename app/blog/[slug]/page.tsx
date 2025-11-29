import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import { posts } from "#site/content";
import { Container } from "@/components/ui/container";
import { MDXContent } from "@/components/mdx-content";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Innlegg ikke funnet",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24">
      <Container size="sm">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Tilbake til blogg
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {format(new Date(post.date), "d. MMMM yyyy", { locale: nb })}
            </time>
            <span>·</span>
            <span>{post.readingTime} min lesing</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          {post.author && (
            <p className="mt-2 text-muted-foreground">Av {post.author}</p>
          )}
        </header>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="prose prose-neutral max-w-none">
          <MDXContent code={post.body} />
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-foreground/5 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Se alle innlegg
          </Link>
        </footer>
      </Container>
    </article>
  );
}
