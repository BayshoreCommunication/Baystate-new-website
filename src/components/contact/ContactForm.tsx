"use client";

import React, { useState, useRef, useEffect } from "react";
import { ContactFormData } from "@/types/contact";
import {
  CheckCircle2,
  ChevronDown,
  Loader2,
  ArrowRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const serviceOptions = [
  "Community Planning",
  "Housing & Community Development",
  "Zoning & Permitting",
  "Grant Writing",
  "Technical Assistance & GIS",
  "International Planning",
  "GovTech & Housing Software",
  "General Inquiry / Other",
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [serviceError, setServiceError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.service) {
      setServiceError(true);
      setIsDropdownOpen(true);
      return;
    }

    setServiceError(false);
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-8 sm:p-11 text-center flex flex-col items-center justify-center min-h-[440px]">
        <CheckCircle2 className="w-16 h-16 text-terracotta mb-4" />
        <h3 className="font-serif text-2xl text-white mb-2">Message Sent!</h3>
        <p className="text-white/60 text-sm max-w-sm mb-6 leading-relaxed">
          Thank you for reaching out to Baystate Planning &amp; Consulting. We
          will review your project details and get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              organization: "",
              service: "",
              message: "",
            });
            setServiceError(false);
            setIsDropdownOpen(false);
          }}
          className="text-terracotta hover:text-terracotta-light hover:underline text-xs tracking-wider uppercase font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-7 sm:p-11 shadow-lg"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
            First Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
            Last Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            required
            placeholder="Smith"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none transition-all"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
          Email Address <span className="text-terracotta">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="jane@firm.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none transition-all"
        />
      </div>

      <div className="mb-5">
        <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          placeholder="City of Springfield / Smith Architects"
          value={formData.organization}
          onChange={handleChange}
          className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none transition-all"
        />
      </div>

      <div className="mb-5">
        <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
          I&apos;m interested in <span className="text-terracotta">*</span>
        </label>
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setIsDropdownOpen(false);
              if (e.key === "ArrowDown" && !isDropdownOpen)
                setIsDropdownOpen(true);
            }}
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
            className={cn(
              "w-full bg-white/[0.05] hover:bg-white/[0.08] border rounded-lg px-4 py-3 pr-4 text-sm text-left flex items-center justify-between transition-all cursor-pointer",
              isDropdownOpen
                ? "border-terracotta ring-1 ring-terracotta/40 bg-white/[0.07]"
                : serviceError
                  ? "border-red-400/80 ring-1 ring-red-400/30"
                  : "border-white/10 hover:border-white/20",
            )}
          >
            <span className={formData.service ? "text-white" : "text-white/35"}>
              {formData.service || "Select a service..."}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-white/45 transition-transform duration-200 pointer-events-none",
                isDropdownOpen && "rotate-180 text-terracotta",
              )}
            />
          </button>

          {/* Custom Dark Dropdown Menu */}
          {isDropdownOpen && (
            <div
              role="listbox"
              className="absolute top-[calc(100%+6px)] left-0 right-0 z-50 bg-[#0B1E3F] border border-white/15 rounded-lg shadow-[0_16px_40px_rgba(0,0,0,0.6)] py-1.5 max-h-[280px] overflow-y-auto backdrop-blur-lg"
            >
              {serviceOptions.map((opt) => {
                const isSelected = formData.service === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, service: opt }));
                      setServiceError(false);
                      setIsDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between cursor-pointer",
                      isSelected
                        ? "bg-terracotta/20 text-terracotta font-medium"
                        : "text-white/80 hover:bg-white/[0.08] hover:text-white",
                    )}
                  >
                    <span>{opt}</span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-terracotta" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {serviceError && (
            <p className="text-red-400 text-xs mt-1.5 font-normal">
              Please select a service from the list.
            </p>
          )}

          {/* Hidden input for form data serialization */}
          <input type="hidden" name="service" value={formData.service} />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
          Tell us about your project <span className="text-terracotta">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Brief description of your project, timeline, or inquiry..."
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none transition-all resize-y min-h-[120px]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-terracotta hover:bg-terracotta-light text-white py-3.5 px-8 rounded-lg text-sm font-medium tracking-[0.08em] uppercase transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
