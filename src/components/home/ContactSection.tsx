"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined") {
        if (window.location.hash === "#contact") {
          document.title =
            "Contact Baystate Planning & Consulting | Get in Touch";
        } else if (window.location.pathname === "/") {
          document.title =
            "Baystate Planning & Consulting | Urban Planning Experts";
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-24 bg-navy">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <ScrollReveal>
            <ContactInfo />
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
