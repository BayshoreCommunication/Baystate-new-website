import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { founderData } from "@/data/team";
import { Linkedin, Mail } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
            <span className="w-6 h-[1px] bg-terracotta block" />
            <span>Leadership</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-start mt-2">
          {/* Founder Photo & Badge */}
          <ScrollReveal delay={50} className="relative pb-6 lg:pb-0">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md">
              <Image
                src={founderData.image}
                alt={`${founderData.name} — ${founderData.title}`}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-terracotta text-white py-4 sm:py-4.5 px-5 sm:px-6 rounded-lg text-center shadow-[0_8px_28px_rgba(181,99,74,0.4)] z-10">
              <div className="font-serif text-3xl sm:text-[34px] leading-none">
                {founderData.badgeNum}
              </div>
              <div className="text-[10px] tracking-[0.14em] uppercase text-white/90 mt-1 leading-tight whitespace-pre-line">
                {founderData.badgeLabel}
              </div>
            </div>
          </ScrollReveal>

          {/* Founder Details */}
          <ScrollReveal delay={120} className="pt-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy font-normal mb-1.5 leading-[1.1]">
              {founderData.name}
            </h2>

            <div className="text-sm text-terracotta font-medium tracking-[0.06em] uppercase mb-7">
              {founderData.title}
            </div>

            <div className="space-y-4 text-primary-muted text-base leading-[1.8]">
              {founderData.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 my-7">
              {founderData.expertise.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-navy bg-warm-white border border-warm-gray px-3.5 py-1.5 rounded-full tracking-[0.03em]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Credentials List */}
            <div className="flex flex-col gap-2.5 mt-8">
              {founderData.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 sm:px-4.5 sm:py-3.5 bg-warm-white rounded-md border-l-[3px] border-terracotta"
                >
                  <span className="text-lg mt-0.5">{cred.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-navy tracking-[0.04em] uppercase">
                      {cred.org}
                    </div>
                    <div className="text-[13px] text-primary-muted mt-0.5">
                      {cred.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social / Contact Links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-warm-gray rounded-md text-[13px] font-medium text-navy hover:border-terracotta hover:text-terracotta transition-colors"
              >
                <Linkedin className="w-4 h-4 text-terracotta" />
                <span>LinkedIn</span>
              </a>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-warm-gray rounded-md text-[13px] font-medium text-navy hover:border-terracotta hover:text-terracotta transition-colors"
              >
                <Mail className="w-4 h-4 text-terracotta" />
                <span>Get In Touch</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
