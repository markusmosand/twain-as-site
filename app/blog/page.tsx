import { Metadata } from "next";
import { posts } from "#site/content";
import { BlogCard } from "@/components/blog-card";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Blogg",
  description: "Tips og guider om bilutleie, elektriske biler, og hvordan du får mest ut av Getaround.",
};

export default function BlogPage() {
  // Sort posts by date (newest first) and filter published
  const sortedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Blogg</SectionTitle>
        <SectionDescription>
          Tips og guider om bilutleie, elektriske biler, og hvordan du får mest ut av Getaround.
        </SectionDescription>
      </SectionHeader>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {sortedPosts.length === 0 && (
        <p className="text-center text-muted-foreground">
          Ingen blogginnlegg ennå. Kom tilbake snart!
        </p>
      )}
    </Section>
  );
}
