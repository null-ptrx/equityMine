"use client";

import { useState } from "react";

interface FormProps {
  title?: string | null;
  subtitle?: string | null;
  className?: string;
}

export function Form({
  title = "Request a call back",
  subtitle = "Share a few details and we'll get in touch at a time that suits you.",
  className = "",
}: FormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        setSuccess(true);
      } else {
        const errJson = await res.json().catch(() => null);
        setError(errJson?.error || "Failed to submit inquiry. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-6 ${className}`}
    >
      {title && (
        <div className="flex flex-col gap-1.5 pb-2 border-b border-slate-200/80">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {success && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm flex items-start gap-3 animate-in fade-in">
          <span className="text-emerald-600 font-bold text-base leading-none mt-0.5">✓</span>
          <div>
            <p className="font-semibold text-emerald-900">Thank you! Request received.</p>
            <p className="text-emerald-700 text-xs mt-0.5">
              Your inquiry has been recorded. Our advisor will connect with you shortly.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            autoComplete="name"
            required
            className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-shadow text-sm"
            placeholder="Jane Doe"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="mobile" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Mobile Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              autoComplete="tel"
              required
              className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-shadow text-sm"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-shadow text-sm"
              placeholder="jane@example.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="goal" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Investment Goal
          </label>
          <select
            id="goal"
            name="goal"
            className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-shadow text-sm cursor-pointer"
          >
            <option value="">Select a goal</option>
            <option value="Wealth Creation">Wealth Creation</option>
            <option value="Retirement Planning">Retirement Planning</option>
            <option value="Child Education">Child Education</option>
            <option value="Buying a Home">Buying a Home</option>
            <option value="Tax Saving">Tax Saving</option>
            <option value="Emergency Fund">Emergency Fund</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Message <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-shadow text-sm resize-y"
            placeholder="Tell us about your portfolio or current savings..."
          ></textarea>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto self-start bg-brand-600 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-xl shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 cursor-pointer text-sm"
        >
          {isSubmitting ? "Submitting..." : "Request Call Back"}
        </button>
        <p className="text-xs text-slate-500 leading-relaxed">
          By submitting you agree to be contacted about your inquiry. We never share your details with third parties.
        </p>
      </div>
    </form>
  );
}
