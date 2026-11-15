import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SupportingCommunitiesSection } from "@/components/home/SupportingCommunitiesSection";
import { MissionSection } from "@/components/home/MissionSection";
import { ContactSection } from "@/components/home/ContactSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Baystate Planning & Consulting | Urban Planning Experts",
  description: siteConfig.metaDescription,
  alternates: {
    canonical: "https://www.baystateplanning.com/",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SupportingCommunitiesSection />
      <MissionSection />
      <ContactSection />
    </main>
  );
}
