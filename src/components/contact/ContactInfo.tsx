import React from "react";
import { siteConfig } from "@/data/site";
import { MapPin, Globe2, Mail } from "lucide-react";

export function ContactInfo() {
  const details = [
    {
      icon: <MapPin className="w-4 h-4 text-terracotta" />,
      label: "Location",
      value: siteConfig.location,
    },
    {
      icon: <Globe2 className="w-4 h-4 text-terracotta" />,
      label: "Serving",
      value: siteConfig.serving,
    },
    {
      icon: <Mail className="w-4 h-4 text-terracotta" />,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
  ];

  return (
    <div>
      <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
        <span className="w-6 h-[1px] bg-terracotta block" />
        <span>Get In Touch</span>
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-white font-normal leading-[1.2] mb-5">
        Let&apos;s Build Something Together
      </h2>

      <p className="text-white/50 text-base leading-[1.75] mb-10 font-light max-w-lg">
        Whether you&apos;re a municipality, architect, developer, or nonprofit —
        we&apos;d love to hear about your project and explore how Baystate can
        help.
      </p>

      <div className="flex flex-col gap-5">
        {details.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3.5">
            <div className="w-[38px] h-[38px] min-w-[38px] bg-white/[0.07] rounded-[7px] flex items-center justify-center">
              {item.icon}
            </div>
            <div className="text-sm text-white/60 leading-[1.5]">
              <strong className="block text-white/85 font-medium mb-0.5">
                {item.label}
              </strong>
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:text-terracotta transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
