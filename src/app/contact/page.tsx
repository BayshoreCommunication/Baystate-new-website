import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ContactSection } from "@/components/home/ContactSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Baystate Planning & Consulting | Get in Touch",
  description:
    "Send us a note and tell us about your project. Baystate Planning & Consulting Group serves communities nationwide.",
  alternates: {
    canonical: "https://www.baystateplanning.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Send us a note and tell us about your project."
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
      />

      <ContactSection />
    </main>
  );
}
