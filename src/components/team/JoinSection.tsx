import React from "react";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/common/Button";
import { openRoles } from "@/data/team";

export function JoinSection() {
  return (
    <section className="py-20 sm:py-24 bg-warm-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Roles list */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
              <span className="w-6 h-[1px] bg-terracotta block" />
              <span>Work With Us</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy font-normal leading-[1.2] mb-5">
              Join the Baystate Team
            </h2>

            <p className="text-primary-muted text-base leading-[1.8] mb-4">
              We&apos;re a growing firm working on meaningful planning
              challenges across housing, climate, community development, and
              technology. We&apos;re always looking for talented planners and
              consultants who share our values.
            </p>

            <p className="text-primary-muted text-base leading-[1.8] mb-8">
              We work with experienced professionals, emerging planners, and
              specialized consultants on a project and retainer basis.
            </p>

            <div className="flex flex-col gap-3.5">
              {openRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-warm-gray rounded-lg p-5 sm:px-6 sm:py-5 flex items-center justify-between gap-4 transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                >
                  <div>
                    <div className="text-[15px] font-semibold text-navy mb-1">
                      {role.title}
                    </div>
                    <div className="text-xs text-gray-mid">{role.type}</div>
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-terracotta border border-terracotta/30 px-3 py-1 rounded-full whitespace-nowrap">
                    {role.status}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Custom Box */}
          <ScrollReveal delay={120}>
            <div className="text-center bg-navy rounded-xl p-10 sm:p-14 text-white">
              <h3 className="font-serif text-2xl sm:text-[28px] font-normal mb-3.5 leading-[1.2]">
                Don&apos;t See Your Role? Let&apos;s Talk.
              </h3>
              <p className="text-white/55 text-[15px] leading-[1.7] mb-7 font-light">
                We&apos;re open to conversations with planners, policy analysts,
                and specialists who bring expertise we don&apos;t yet have
                in-house. Send us a note about your background and what
                you&apos;re looking for.
              </p>
              <Button href="/#contact" variant="terra">
                Send Us a Note
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
