import React from "react";
import Link from "next/link";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#06111f] py-9 px-6 sm:px-10 lg:px-[60px] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
      <div className="text-white/45 text-xs tracking-[0.06em] leading-relaxed">
        <strong className="text-white/70 font-medium block sm:inline">
          {siteConfig.name}
        </strong>
        <span className="hidden sm:inline"> · </span>
        <br className="sm:hidden" />
        <span>© {siteConfig.copyrightYear} · All rights reserved</span>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-7 list-none m-0 p-0">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-white/35 hover:text-white/70 text-xs tracking-[0.06em] transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
