import React from "react";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/common/Button";
import {
  Landmark,
  FileCheck,
  Database,
  Handshake,
  CheckSquare,
  Check,
} from "lucide-react";

export function ForDevelopersSection() {
  const checklist = [
    "Housing application & waitlist portal consulting",
    "Government RFP / RFQ writing & vendor evaluation",
    "Translating housing policy into software requirements",
    "GIS & spatial data standards for civic platforms",
    "HUD / fair housing compliance review for tech products",
    "Connecting developers with municipal & housing authority clients",
  ];

  return (
    <section id="developers" className="py-20 sm:py-24 bg-navy">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Mini Cards */}
          <ScrollReveal delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Featured Card */}
              <div className="group sm:col-span-2 bg-white/[0.06] hover:bg-white/[0.09] rounded-lg p-6 sm:p-7 border border-white/10 hover:border-terracotta/40 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <div className="text-terracotta text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <Landmark className="w-6 h-6" />
                </div>
                <div className="text-[15px] font-semibold text-white mb-2">
                  Municipal Software Procurement
                </div>
                <div className="text-[13px] text-white/55 leading-[1.6]">
                  We help towns and housing authorities write RFPs, evaluate
                  vendors, and select platforms that actually fit their planning
                  and compliance needs.
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-white/[0.04] hover:bg-white/[0.08] rounded-lg p-6 sm:p-7 border border-white/[0.08] hover:border-terracotta/40 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                <div className="text-terracotta text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div className="text-[15px] font-semibold text-white mb-2">
                  Policy-to-Product Translation
                </div>
                <div className="text-[13px] text-white/50 leading-[1.6]">
                  We turn HUD rules, zoning codes, and housing regulations into
                  clear product requirements your dev team can build to.
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-white/[0.04] hover:bg-white/[0.08] rounded-lg p-6 sm:p-7 border border-white/[0.08] hover:border-terracotta/40 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                <div className="text-terracotta text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <Database className="w-6 h-6" />
                </div>
                <div className="text-[15px] font-semibold text-white mb-2">
                  Data Architecture Advisory
                </div>
                <div className="text-[13px] text-white/50 leading-[1.6]">
                  GIS data standards, waitlist data structures, and reporting
                  frameworks aligned with state and federal requirements.
                </div>
              </div>

              {/* Card 4 */}
              <div className="group bg-white/[0.04] hover:bg-white/[0.08] rounded-lg p-6 sm:p-7 border border-white/[0.08] hover:border-terracotta/40 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                <div className="text-terracotta text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <Handshake className="w-6 h-6" />
                </div>
                <div className="text-[15px] font-semibold text-white mb-2">
                  Developer–Municipality Matchmaking
                </div>
                <div className="text-[13px] text-white/50 leading-[1.6]">
                  We connect GovTech companies with the right municipal and
                  housing authority partners for pilots and contracts.
                </div>
              </div>

              {/* Card 5 */}
              <div className="group bg-white/[0.04] hover:bg-white/[0.08] rounded-lg p-6 sm:p-7 border border-white/[0.08] hover:border-terracotta/40 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                <div className="text-terracotta text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <div className="text-[15px] font-semibold text-white mb-2">
                  Compliance Review
                </div>
                <div className="text-[13px] text-white/50 leading-[1.6]">
                  Pre-launch review of housing software against HUD/FHA, fair
                  housing, and local zoning regulations.
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Narrative Content */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
              <span className="w-6 h-[1px] bg-terracotta block" />
              <span>For Developers &amp; Government</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-white font-normal leading-[1.2] mb-5">
              The Planning Brain Behind Your Software
            </h2>

            <p className="text-white/55 text-base leading-[1.8] mb-4 font-light">
              Building for municipalities? We speak both languages — planning
              policy and software development. Baystate helps GovTech companies
              build products that work inside real government workflows, and
              helps towns find and deploy the right tools.
            </p>

            <p className="text-white/55 text-base leading-[1.8] mb-7 font-light">
              We&apos;ve worked inside planning departments, housing
              authorities, and regional commissions — so we know the workflows,
              the pain points, and what procurement boards actually look for.
            </p>

            <div className="flex flex-col gap-2.5 mb-9">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-white/80 leading-[1.5]"
                >
                  <span className="w-[22px] h-[22px] min-w-[22px] bg-terracotta/20 text-terracotta rounded-full flex items-center justify-center text-[11px] font-semibold mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button href="#contact" variant="primary">
              Let&apos;s Work Together
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
