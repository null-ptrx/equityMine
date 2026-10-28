import { Form } from "@/components/contact/Form";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Equity Mine",
  description: "Get in touch with Equity Mine for personalized wealth creation and goal-based mutual fund advisory in Mansa, Punjab.",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s start a conversation
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Whether you are looking to start your first monthly SIP or need a second opinion on an existing mutual fund portfolio, we are here to help.
          </p>
        </div>
      </section>

      {/* Main Content: 2-column aligned grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column: Contact info & Trust badges */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col gap-6 shadow-xs">
                <h2 className="text-lg font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                  Reach Out Directly
                </h2>

                <div className="flex flex-col gap-5">
                  {/* Phone */}
                  <a
                    href="tel:+919914440682"
                    className="flex items-start gap-3.5 group p-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Support</span>
                      <span className="text-base font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">+91 99144 40682</span>
                      <span className="text-xs text-slate-500">Mon – Sat · 10:00 AM to 7:00 PM</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:equitymine@support.in"
                    className="flex items-start gap-3.5 group p-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Inquiry</span>
                      <span className="text-base font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">support@equitymine.in</span>
                      <span className="text-xs text-slate-500">Average response time: &lt; 2 hours</span>
                    </div>
                  </a>

                  {/* Office Address */}
                  <div className="flex items-start gap-3.5 p-2 -mx-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Office Location</span>
                      <span className="text-sm font-medium text-slate-800 leading-snug">
                        New Court Road, Near Mata Sundri Girls College, Mansa, Punjab 151505
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What happens next box */}
              <div className="bg-brand-50/70 border border-brand-100 rounded-2xl p-6 flex flex-col gap-4 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  What happens after you submit?
                </h3>
                <ul className="flex flex-col gap-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                    <span>A dedicated wealth advisor reviews your goals and requirements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                    <span>We connect with you via phone or WhatsApp at your convenient time.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                    <span>We provide an unbiased, zero-pressure portfolio recommendation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <Form
                  title="Request a call back"
                  subtitle="Share a few details and we will get in touch at a time that suits you."
                  className="border-0 shadow-none bg-transparent"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}