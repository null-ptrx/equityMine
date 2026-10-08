import { Hero } from "@/components/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { WhyUs } from "@/components/home/WhyUs";
import { Form } from "@/components/contact/Form";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. About teaser */}
      <About />

      {/* 3. Services */}
      <Services />

      {/* 4. Free Tools */}
      <section aria-labelledby="tools-heading" className="bg-white">
        <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2
              id="tools-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Try the numbers yourself
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Run the numbers yourself before we ever speak. These are the same tools we use with clients — free, instant, and no sign-up required.
            </p>
            <a
              href="https://www.njmutualfund.com/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 w-fit"
            >
              Open the calculators
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tool card 1 */}
            <a
              href="https://www.njmutualfund.com/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-3 hover:shadow-md hover:border-brand-200 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-xs font-bold">01</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">SIP Calculator</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                See how your monthly investment could grow over time.
              </p>
            </a>

            {/* Tool card 2 */}
            <a
              href="https://www.njmutualfund.com/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-3 hover:shadow-md hover:border-brand-200 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-xs font-bold">02</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">Lumpsum Calculator</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Estimate the future value of a one-time investment.
              </p>
            </a>

            {/* Tool card 3 */}
            <a
              href="https://www.njmutualfund.com/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-3 hover:shadow-md hover:border-brand-200 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-xs font-bold">03</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">Goal Planner</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Find the monthly investment needed to reach your goal.
              </p>
            </a>

            {/* Tool card 4 */}
            <a
              href="https://www.njmutualfund.com/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-3 hover:shadow-md hover:border-brand-200 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-xs font-bold">04</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">Retirement Calculator</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Find the corpus that funds your retirement, and the SIP that builds it.
              </p>
            </a>

            {/* Tool card 5 */}
            <a
              href="https://www.njmutualfund.com/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-3 hover:shadow-md hover:border-brand-200 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-xs font-bold">05</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">Child Education Calculator</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                See what a course will cost by the time your child gets there.
              </p>
            </a>

            {/* Tool card 6 */}
            <a
              href="https://www.njmutualfund.com/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-3 hover:shadow-md hover:border-brand-200 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-xs font-bold">06</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">SWP Calculator</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plan a monthly withdrawal and see how long it lasts.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Why People Stay */}
      <WhyUs />

      {/* 6. What you are saving for */}
      <section aria-labelledby="goals-heading" className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center">
            <h2
              id="goals-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Every plan starts with a reason
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Most people do not come here wanting a mutual fund. They come wanting a house, a college fund, or a Friday that does not depend on a salary. The fund is just how we get there.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl" aria-hidden="true">🏖️</span>
              <h3 className="text-sm font-semibold text-slate-900">Retirement Planning</h3>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl" aria-hidden="true">🎓</span>
              <h3 className="text-sm font-semibold text-slate-900">Child Education</h3>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl" aria-hidden="true">🏠</span>
              <h3 className="text-sm font-semibold text-slate-900">Buying a Home</h3>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl" aria-hidden="true">📈</span>
              <h3 className="text-sm font-semibold text-slate-900">Wealth Creation</h3>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl" aria-hidden="true">🧾</span>
              <h3 className="text-sm font-semibold text-slate-900">Tax Saving</h3>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl" aria-hidden="true">🛡️</span>
              <h3 className="text-sm font-semibold text-slate-900">Emergency Fund</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How it works */}
      <section aria-labelledby="howitworks-heading" className="bg-white">
        <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center">
            <h2
              id="howitworks-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Four easy steps, start to finish
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              No complexity for its own sake. Here is exactly what working together looks like, from first conversation to ongoing review.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 relative">
              <span className="text-4xl font-extrabold text-brand-600/20">01</span>
              <h3 className="text-lg font-bold text-slate-900">Understand Your Goals</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We start by listening: your aspirations, timelines, and comfort with risk.
              </p>
            </div>
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 relative">
              <span className="text-4xl font-extrabold text-brand-600/20">02</span>
              <h3 className="text-lg font-bold text-slate-900">Build Your Strategy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A tailored plan and fund selection designed specifically around your needs.
              </p>
            </div>
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 relative">
              <span className="text-4xl font-extrabold text-brand-600/20">03</span>
              <h3 className="text-lg font-bold text-slate-900">Invest &amp; Monitor</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We put the plan to work and track it closely against your objectives.
              </p>
            </div>
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 relative">
              <span className="text-4xl font-extrabold text-brand-600/20">04</span>
              <h3 className="text-lg font-bold text-slate-900">Review &amp; Refine</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Periodic reviews and rebalancing keep you firmly on course over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Fund Houses — CSS marquee */}
      <section aria-labelledby="fundhouses-heading" className="bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 flex flex-col gap-8">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center">
            <h2
              id="fundhouses-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Empanelled across the market
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Your money is invested directly with the fund house. It never sits with us. Being empanelled widely means the recommendation is driven by what suits you, not by what we happen to have access to.
            </p>
          </div>
        </div>
        {/* Marquee strip — overflows the container */}
        <div className="relative py-8 bg-brand-900">
          <div className="marquee-track">
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">SBI Mutual Fund</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">HDFC Mutual Fund</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">ICICI Prudential</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">Axis Mutual Fund</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">Kotak Mahindra</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">Nippon India</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            {/* Duplicate for seamless loop */}
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">SBI Mutual Fund</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">HDFC Mutual Fund</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">ICICI Prudential</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">Axis Mutual Fund</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">Kotak Mahindra</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
            <span className="text-xl sm:text-2xl font-bold text-white/90 whitespace-nowrap px-8 sm:px-12">Nippon India</span>
            <span className="text-xl sm:text-2xl font-bold text-white/40 whitespace-nowrap px-2" aria-hidden="true">·</span>
          </div>
        </div>
      </section>

      {/* 9. Referrals */}
      <section aria-labelledby="referrals-heading" className="bg-brand-50">
        <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 flex flex-col gap-6 items-center text-center">
          <h2
            id="referrals-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight max-w-3xl"
          >
            Know someone who could use a second opinion?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Most of the families here came through someone they already trusted. If a friend or a colleague is unsure about their portfolio, an introduction costs them nothing and there is no obligation on either side.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Introduce someone
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      {/* 10. Get in Touch — contact details + form */}
      <section aria-labelledby="getintouch-heading" className="bg-white">
        <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2
              id="getintouch-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Tell us what you are planning for
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you are investing your first ₹5,000 or reviewing an existing portfolio, the first conversation is always free.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact details column */}
            <div className="flex flex-col gap-6">
              <address className="not-italic flex flex-col gap-5">
                <a
                  href="tel:+919914440682"
                  className="flex items-center gap-3 text-lg text-slate-700 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm"
                >
                  <svg className="w-5 h-5 text-brand-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +91 99144 40682
                </a>
                <a
                  href="mailto:equitymine@support.in"
                  className="flex items-center gap-3 text-lg text-slate-700 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm"
                >
                  <svg className="w-5 h-5 text-brand-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  equitymine@support.in
                </a>
                <div className="flex items-start gap-3 text-lg text-slate-700">
                  <svg className="w-5 h-5 text-brand-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>
                    New Court Road, Near Mata Sundri Girls College,<br />
                    Mansa, Punjab 151505
                  </span>
                </div>
                <div className="flex items-center gap-3 text-lg text-slate-700">
                  <svg className="w-5 h-5 text-brand-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Mon – Sat · 10:00 AM to 7:00 PM
                </div>
              </address>
            </div>

            {/* Form column — reuse existing Form */}
            <div>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
