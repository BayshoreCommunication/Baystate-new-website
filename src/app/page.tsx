import React from "react";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ForPlannersSection } from "@/components/home/ForPlannersSection";
import { ForDevelopersSection } from "@/components/home/ForDevelopersSection";
import { MissionSection } from "@/components/home/MissionSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ForPlannersSection />
      <ForDevelopersSection />
      <MissionSection />
      <ContactSection />
    </main>
  );
}
