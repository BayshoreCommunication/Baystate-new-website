import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { consultantsData } from "@/data/team";

export function ConsultantsSection() {
  return (
    <section className="py-20 sm:py-24 bg-warm-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            label="Our Consultants"
            title="The Extended Team"
            description="Baystate works with a network of trusted planning professionals and specialists — each brought in for their specific expertise to deliver the best outcomes for our clients."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultantsData.map((consultant, idx) => (
            <ScrollReveal key={idx} delay={idx * 60} className="h-full">
              <div className="group h-full bg-white rounded-xl overflow-hidden border border-warm-gray transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-terracotta/35 hover:shadow-[0_16px_40px_rgba(11,30,63,0.1)] flex flex-col">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={consultant.image}
                    alt={consultant.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-terracotta text-white text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full shadow-sm">
                    {consultant.roleBadge}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="font-serif text-[22px] text-navy mb-1 leading-snug">
                    {consultant.name}
                  </div>
                  <div className="text-xs text-terracotta font-medium tracking-[0.05em] uppercase mb-4">
                    {consultant.specialty}
                  </div>
                  <p className="text-[13.5px] text-primary-muted leading-[1.7] mb-5">
                    {consultant.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {consultant.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] text-navy bg-warm-white border border-warm-gray px-2.5 py-1 rounded-full transition-colors group-hover:border-terracotta/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Join as a Consultant CTA Card */}
          <ScrollReveal delay={300} className="h-full">
            <div className="h-full bg-navy rounded-xl p-7 flex flex-col justify-center text-white border border-white/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
              <div className="text-4xl mb-5">🤝</div>
              <h3 className="font-serif text-2xl text-white font-normal mb-3 leading-[1.2]">
                Could be you.
              </h3>
              <p className="text-sm text-white/50 leading-[1.7] mb-7 font-light max-w-xs">
                We&apos;re always looking for talented planners and consultants
                to collaborate with. If you share our values, we&apos;d love to
                talk.
              </p>
              <Link
                href="/#contact"
                className="bg-terracotta hover:bg-terracotta-light text-white px-6 py-3 rounded-md text-[13px] font-medium transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
