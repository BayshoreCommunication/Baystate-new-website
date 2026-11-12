import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { FounderSection } from "@/components/team/FounderSection";
import { ConsultantsSection } from "@/components/team/ConsultantsSection";
import { ValuesSection } from "@/components/team/ValuesSection";
import { JoinSection } from "@/components/team/JoinSection";
import { CtaBand } from "@/components/common/CtaBand";
import { siteConfig } from "@/data/site";
import { teamPageConfig } from "@/data/team";

export const metadata: Metadata = {
  title: `${teamPageConfig.title} — ${siteConfig.name}`,
  description: teamPageConfig.metaDescription,
};

export default function TeamPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Meet Our Team" }]}
        eyebrow="The People Behind the Work"
        title={teamPageConfig.heading}
        description={teamPageConfig.subheading}
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
      />

      <FounderSection />
      <ConsultantsSection />
      <ValuesSection />
      <JoinSection />

      <CtaBand
        heading="Ready to Work Together?"
        description="Whether you're a municipality, housing authority, nonprofit, or builder, we’d love to connect."
        buttonText="Get In Touch"
        buttonHref="/#contact"
      />
    </main>
  );
}
