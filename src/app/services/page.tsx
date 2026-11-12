import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CtaBand } from "@/components/common/CtaBand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Our Services — ${siteConfig.name}`,
  description:
    "We serve projects of every size, from a 30-year comprehensive plan to a single permit due at the next hearing.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="What We Do"
        title="Our Services"
        description="We serve projects of every size, from a 30-year comprehensive plan to a single permit due at the next hearing."
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
      />

      <ServicesSection showAll />

      <CtaBand
        heading="Need Expert Planning Guidance?"
        description="Let’s discuss how Baystate Planning & Consulting Group can support your community, board, or organization."
        buttonText="Contact Us Today"
        buttonHref="/#contact"
      />
    </main>
  );
}
