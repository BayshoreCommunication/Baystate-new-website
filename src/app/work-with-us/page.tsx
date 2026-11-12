import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { JoinSection } from "@/components/team/JoinSection";
import { ValuesSection } from "@/components/team/ValuesSection";
import { CtaBand } from "@/components/common/CtaBand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Work With Us — ${siteConfig.name}`,
  description:
    "Baystate Planning hires remote planners, GIS analysts, grant writers, and consultants for housing and community development projects nationwide.",
};

export default function WorkWithUsPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Work With Us" }]}
        eyebrow="Careers & Collaboration"
        title="Join the Baystate team"
        description="We are a growing team working on housing, climate, community growth, and technology. We look for talented planners and consultants who share our commitment to practical, community-centered work."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
      />

      <JoinSection />
      <ValuesSection />

      <CtaBand
        heading="Ready to Join or Partner?"
        description="Send us a short note about your background and what you're looking for."
        buttonText="Send Us a Note"
        buttonHref="/#contact"
      />
    </main>
  );
}

