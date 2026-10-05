import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader, Prose, PropertyCard } from "@/components/site/blocks";
import { getPost } from "@/lib/blog";
import { PROPERTIES } from "@/lib/properties";
import { waLink } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const p = getPost(params.slug);
    if (!p) throw notFound();
    return { slug: p.slug, title: p.title, excerpt: p.excerpt };
  },
  head: ({ loaderData, params }) =>
    loaderData ? pageMeta(`${loaderData.title} | Arihant Properties`, loaderData.excerpt, `/blog/${params.slug}`, "article") : { meta: [{ title: "Guide not found" }] },
  notFoundComponent: () => <div className="container-site py-24 text-center"><h1 className="text-3xl font-semibold text-primary">Guide not found</h1><Link to="/blog" className="mt-4 inline-block text-gold">All guides</Link></div>,
  errorComponent: () => <div className="container-site py-24 text-center">Could not load this guide.</div>,
  component: Page,
});

function Page() {
  const { slug } = Route.useLoaderData();
  const post = getPost(slug)!;
  return (
    <>
      <PageHeader eyebrow="Knowledge center" title={post.title} intro={post.excerpt} />
      <article className="container-site max-w-3xl py-14">
        <Prose>
          {post.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2>{b.h}</h2>}
              {b.p && <p>{b.p}</p>}
              {b.list && <ul>{b.list.map((l) => <li key={l}>{l}</li>)}</ul>}
            </div>
          ))}
        </Prose>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="whatsapp"><a href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button>
          <Button asChild variant="navy"><Link to="/contact">Contact</Link></Button>
        </div>
      </article>
      <section className="container-site pb-16">
        <h2 className="text-2xl font-semibold text-primary">Related properties</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{PROPERTIES.slice(0, 3).map((p) => <PropertyCard key={p.id} p={p} />)}</div>
      </section>
    </>
  );
}
