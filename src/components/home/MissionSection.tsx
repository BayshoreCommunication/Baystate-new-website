import React from "react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/common/Button";

export function MissionSection() {
  return (
    <section id="mission" className="py-20 sm:py-24 bg-white text-center">
      <div className="max-w-[820px] mx-auto px-6">
        <ScrollReveal>
          <div className="inline-flex items-center justify-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
            <span className="w-6 h-[1px] bg-terracotta block" />
            <span>Our Mission</span>
            <span className="w-6 h-[1px] bg-terracotta block" />
          </div>

          <div className="w-[50px] h-[2px] bg-terracotta mx-auto mb-9" />

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy font-normal leading-[1.25] mb-8">
            Plan with Confidence.
          </h2>

          <div className="space-y-6 text-primary-muted text-base sm:text-lg leading-[1.8] text-left sm:text-center font-normal mb-10">
            <p>
              Baystate Planning &amp; Consulting Group is a US-based planning
              consultancy. We work with local governments, nonprofits, and
              partners so communities of every size, in every region, can plan
              with confidence.
            </p>
            <p>
              We believe local leaders speak best for their communities when they
              have the right tools. Our capacity building gives staff, planning
              commissions, and elected officials the data, training, and
              guidance to make strong decisions for residents, workers, and
              local business owners.
            </p>
            <p>
              Our team investigates the complex issues your community faces and
              delivers solutions in simpler terms. We turn detailed research into
              accessible documents that residents can follow and local boards can
              act on in time.
            </p>
          </div>

          <Button href="/#contact" variant="primary">
            Work With Us
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
