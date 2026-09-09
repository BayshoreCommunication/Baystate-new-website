import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CtaBand } from "@/components/common/CtaBand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Our Services — ${siteConfig.name}`,
  description:
    "Comprehensive urban planning, affordable housing strategy, zoning & permitting, grant writing, technical assistance, international planning, and GovTech software consulting.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="What We Do"
        title="Comprehensive Planning Services"
        description="From long-range master plans to technical GIS analysis and civic software advisory — we bring deep cross-sector planning expertise to every project."
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
      />

      <ServicesSection />

      <CtaBand
        heading="Need Expert Planning Guidance?"
        description="Let’s discuss how Baystate can support your municipality, organization, or development team."
        buttonText="Contact Us Today"
        buttonHref="/#contact"
      />
    </main>
  );
}
