import React from "react";
import Link from "next/link";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#06111f] text-white/60 pt-14 pb-10 px-6 sm:px-10 lg:px-[60px] border-t border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto">
        {/* Top: Brand & Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.08]">
          <div>
            <Link
              href="/"
              className="font-serif text-xl sm:text-2xl text-white font-normal hover:text-terracotta transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="text-xs text-white/50 tracking-[0.06em] mt-1.5 max-w-md">
              {siteConfig.tagline}
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-6 sm:gap-7 list-none m-0 p-0">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-white text-xs tracking-[0.06em] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle: Disclaimer */}
        <div className="py-7 text-xs text-white/45 leading-[1.8] border-b border-white/[0.08]">
          <strong className="text-white/65 font-medium block mb-1">
            Disclaimer
          </strong>
          <p>{siteConfig.disclaimer}</p>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 tracking-[0.04em]">
          <div>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </div>
          <div>Headquartered in Massachusetts, USA · Serving Nationwide</div>
        </div>
      </div>
    </footer>
  );
}
