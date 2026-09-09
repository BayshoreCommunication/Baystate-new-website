"use client";

import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormData } from "@/types/contact";
import { siteConfig } from "@/data/site";
import {
  CheckCircle2,
  ChevronDown,
  Loader2,
  ArrowRight,
  Check,
  AlertCircle,
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.service) {
      setServiceError(true);
      setIsDropdownOpen(true);
      return;
    }

    setServiceError(false);
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
    const recipientEmail =
      process.env.NEXT_PUBLIC_CONTACT_RECIPIENT_EMAIL ||
      siteConfig.email ||
      "info@baystateplanning.com";

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      from_name: `${formData.firstName} ${formData.lastName}`.trim(),
      from_email: formData.email,
      reply_to: formData.email,
      organization: formData.organization || "Not specified",
      service: formData.service,
      message: formData.message,
      to_email: recipientEmail,
    };

    // Check if keys are actually provided or if still in default placeholder state
    const isConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      !serviceId.includes("your_") &&
      !templateId.includes("your_") &&
      !publicKey.includes("your_");

    try {
      if (isConfigured) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Development / Demo fallback when API keys are not yet configured in .env.local
        console.info(
          "EmailJS credentials not set or contain placeholders in .env.local. Simulating successful transmission with params:",
          templateParams,
        );
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        service: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error("EmailJS submission error:", err);
      const errDetail =
        err && typeof err === "object" && "text" in err
          ? String((err as { text: unknown }).text)
          : null;
      setErrorMessage(
        errDetail
          ? `Could not send message (${errDetail}). Please try again or email us directly at ${recipientEmail}.`
          : `We couldn't deliver your message right now. Please try again or email us directly at ${recipientEmail}.`,
      );
    } finally {
      setIsSubmitting(false);
    }
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
      style={{ colorScheme: "dark" }}
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
            autoComplete="given-name"
            required
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_#182e54] autofill:[-webkit-text-fill-color:white] transition-all"
          />
        </div>
        <div>
          <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
            Last Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            autoComplete="family-name"
            required
            placeholder="Smith"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_#182e54] autofill:[-webkit-text-fill-color:white] transition-all"
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
          autoComplete="email"
          required
          placeholder="jane@firm.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_#182e54] autofill:[-webkit-text-fill-color:white] transition-all"
        />
      </div>

      <div className="mb-5">
        <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          autoComplete="organization"
          placeholder="City of Springfield / Smith Architects"
          value={formData.organization}
          onChange={handleChange}
          className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_#182e54] autofill:[-webkit-text-fill-color:white] transition-all"
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
          className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_#182e54] autofill:[-webkit-text-fill-color:white] transition-all resize-y min-h-[120px]"
        />
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="text-sm text-red-200/90 leading-relaxed">
            {errorMessage}
          </div>
        </div>
      )}

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
