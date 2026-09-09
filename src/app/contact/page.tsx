import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ContactSection } from "@/components/home/ContactSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact Us — ${siteConfig.name}`,
  description:
    "Get in touch with Baystate Planning & Consulting. Let’s discuss your municipal planning, housing, zoning, grant writing, or GovTech project.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        eyebrow="Get In Touch"
        title="Let's Build Something Together"
        description="Whether you're a municipality, architect, developer, or nonprofit — we'd love to hear about your project and explore how Baystate can help."
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
      />

      <ContactSection />
    </main>
  );
}
