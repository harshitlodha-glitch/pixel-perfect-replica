import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/blocks";
import { POSTS } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => pageMeta("Property Knowledge Center | Arihant Properties Chittorgarh", "Guides on buying, selling and verifying property in Chittorgarh and Rajasthan.", "/blog"),
  component: () => (
    <>
      <PageHeader eyebrow="Knowledge center" title="Property guides for Chittorgarh buyers & sellers" />
      <section className="container-site grid gap-6 py-14 md:grid-cols-2">
        {POSTS.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="rounded-2xl border bg-card p-7 shadow-card hover:border-gold">
            <h2 className="text-2xl font-semibold text-primary">{p.title}</h2>
            <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-gold">Read guide →</span>
          </Link>
        ))}
      </section>
    </>
  ),
});
