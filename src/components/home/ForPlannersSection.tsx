import React from "react";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Zap, BarChart2, Handshake, DollarSign, Check } from "lucide-react";

export function ForPlannersSection() {
  const checklist = [
    "Special permit applications & variance filings",
    "Zoning compliance reviews & subdivision plans",
    "Development review assistance & board hearing prep",
    "RFE / RFQ / RFP response support for public projects",
    "Grant funding strategy for affordable & mixed-use projects",
    "GIS mapping & spatial analysis for site due diligence",
  ];

  return (
    <section id="planners" className="py-20 sm:py-24 bg-warm-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
              <span className="w-6 h-[1px] bg-terracotta block" />
              <span>For Planners &amp; Architects</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy font-normal leading-[1.2] mb-5">
              Your Zoning &amp; Permitting Partner
            </h2>

            <p className="text-primary-muted text-base leading-[1.8] mb-4">
              Navigating approvals, variances, and rezoning is where projects
              stall. Baystate brings deep municipal experience to move your work
              forward — from first concept to final approval.
            </p>

            <p className="text-primary-muted text-base leading-[1.8] mb-7">
              We&apos;ve worked from both sides of the table: inside planning
              departments and as consultants. We know how to prepare
              applications that get approved and how to engage planning boards
              effectively.
            </p>

            <div className="flex flex-col gap-2.5">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-primary-text leading-[1.5]"
                >
                  <span className="w-[22px] h-[22px] min-w-[22px] bg-terracotta/15 text-terracotta rounded-full flex items-center justify-center text-[11px] font-semibold mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Mini Cards */}
          <ScrollReveal delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Featured Card */}
              <div className="group sm:col-span-2 bg-navy rounded-lg p-6 sm:p-7 border border-navy/80 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
                <div className="text-terracotta text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-[15px] font-semibold text-white mb-2">
                  Fast-Track Permitting Support
                </div>
                <div className="text-[13px] text-white/55 leading-[1.6]">
                  Experienced in municipal processes, we prepare complete,
                  compliant applications that minimize back-and-forth with
                  planning boards — so your project keeps moving.
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-white rounded-lg p-6 sm:p-7 border border-warm-gray shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                <div className="text-navy text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <BarChart2 className="w-6 h-6 text-terracotta" />
                </div>
                <div className="text-[15px] font-semibold text-navy mb-2">
                  GIS &amp; Site Analysis
                </div>
                <div className="text-[13px] text-primary-muted leading-[1.6]">
                  Spatial data and regulatory mapping to inform design decisions
                  before you break ground.
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-white rounded-lg p-6 sm:p-7 border border-warm-gray shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                <div className="text-navy text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <Handshake className="w-6 h-6 text-terracotta" />
                </div>
                <div className="text-[15px] font-semibold text-navy mb-2">
                  RFE / RFQ Support
                </div>
                <div className="text-[13px] text-primary-muted leading-[1.6]">
                  We help architecture and planning firms respond to public
                  solicitations with competitive qualifications packages.
                </div>
              </div>

              {/* Card 4 */}
              <div className="group sm:col-span-2 bg-white rounded-lg p-6 sm:p-7 border border-warm-gray shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                <div className="text-navy text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 origin-left">
                  <DollarSign className="w-6 h-6 text-terracotta" />
                </div>
                <div className="text-[15px] font-semibold text-navy mb-2">
                  Funding Strategy
                </div>
                <div className="text-[13px] text-primary-muted leading-[1.6]">
                  Identify and access federal, state, and local grants for
                  housing, infrastructure, and community development.
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
