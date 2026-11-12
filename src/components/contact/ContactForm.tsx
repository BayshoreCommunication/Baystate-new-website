"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormData } from "@/types/contact";
import { siteConfig } from "@/data/site";
import { CheckCircle2, Loader2, ArrowRight, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    phone: "",
    cityState: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
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
      phone: formData.phone || "Not specified",
      city_state: formData.cityState || "Not specified",
      message: formData.message,
      to_email: recipientEmail,
    };

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
        organization: "",
        email: "",
        phone: "",
        cityState: "",
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
          Thank you for reaching out to Baystate Planning &amp; Consulting Group.
          We will review your project details and get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              firstName: "",
              lastName: "",
              organization: "",
              email: "",
              phone: "",
              cityState: "",
              message: "",
            });
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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

      <div className="mb-4">
        <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          autoComplete="organization"
          placeholder="City, County, Town, Agency, or Firm"
          value={formData.organization}
          onChange={handleChange}
          className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_#182e54] autofill:[-webkit-text-fill-color:white] transition-all"
        />
      </div>

      <div className="mb-4">
        <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
          Email Address <span className="text-terracotta">*</span>
        </label>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="jane@organization.gov"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_#182e54] autofill:[-webkit-text-fill-color:white] transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="(555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_#182e54] autofill:[-webkit-text-fill-color:white] transition-all"
          />
        </div>
        <div>
          <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
            City and State
          </label>
          <input
            type="text"
            name="cityState"
            placeholder="Boston, MA"
            value={formData.cityState}
            onChange={handleChange}
            className="w-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/35 focus:border-terracotta focus:ring-1 focus:ring-terracotta/40 focus:bg-white/[0.07] focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_#182e54] autofill:[-webkit-text-fill-color:white] transition-all"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-2">
          Message <span className="text-terracotta">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Send us a note and tell us about your project..."
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
