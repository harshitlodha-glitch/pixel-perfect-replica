import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose, CtaBand, OfficeNotice } from "@/components/site/blocks";
import { pageMeta } from "@/lib/seo";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("About Arihant Properties | Serving Chittorgarh Since 1996", "Arihant Properties is a trusted real estate company in Chittorgarh, helping buyers, sellers and investors since 1996.", "/about"),
  component: () => (
    <>
      <PageHeader eyebrow="About us" title="Your local real estate partner since 1996" image={hero} />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr]">
        <Prose>
          <p>Arihant Properties has been serving the Chittorgarh real estate market since 1996. From our office on Udaipur Road in Senthi, Bapu Nagar, we help families, investors, landowners and businesses buy and sell residential, commercial and agricultural property.</p>
          <h2>How we work</h2>
          <ul>
            <li>Consulting is free of charge</li>
            <li>We understand your requirement before suggesting properties</li>
            <li>We encourage every buyer to visit our office and the site</li>
            <li>We offer free preliminary document verification assistance for third-party properties</li>
          </ul>
        </Prose>
        <OfficeNotice />
      </section>
      <CtaBand />
    </>
  ),
});
