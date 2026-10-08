export function Services() {
  return (
    <section aria-labelledby="services-heading" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 flex flex-col gap-10">
        {/* Section header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
          >
            How we help
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            An AMFI-registered mutual fund distributor does more than help you buy a fund. The value is in choosing schemes that suit you, executing the transactions, monitoring the portfolio afterwards, and being reachable when something needs doing.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm w-fit"
          >
            All services in detail
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Service cards — 3 repeated blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Mutual Funds */}
          <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-5 group">
            <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center text-2xl font-bold">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              <a href="/services#mutual-funds" className="hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">
                Mutual Funds
              </a>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Choosing schemes that suit you, executing the transactions, monitoring the portfolio afterwards, and being reachable when something needs doing.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Investor Onboarding</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Investor Profiling</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Scheme Selection</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />SIP Services</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Lumpsum Investments</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Transaction Execution</li>
            </ul>
            <p className="text-xs text-slate-400 mt-auto">
              AMFI-registered mutual fund distributor, ARN-277368.
            </p>
          </article>

          {/* Card 2: Insurance */}
          <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-5 group">
            <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center text-2xl font-bold">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              <a href="/services#insurance" className="hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">
                Insurance
              </a>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Protection for your family and assets through suitable term, health, and other insurance products, matched to your stage of life and responsibilities.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Term Life Insurance</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Health Insurance</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Critical Illness Cover</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Personal Accident Cover</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Needs Analysis</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Claims Assistance</li>
            </ul>
            <p className="text-xs text-slate-400 mt-auto">
              Suitable coverage, honestly assessed.
            </p>
          </article>

          {/* Card 3: Fixed Deposits & Bonds */}
          <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-5 group">
            <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center text-2xl font-bold">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              <a href="/services#fd-bonds" className="hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">
                Fixed Deposits &amp; Bonds
              </a>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Stable, predictable income through fixed-return instruments, ideal for balancing risk and parking short-term surplus funds.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Company Fixed Deposits</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Government Bonds</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Tax-Free Bonds</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Capital Gain Bonds</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />RBI Bonds</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />Maturity Planning</li>
            </ul>
            <p className="text-xs text-slate-400 mt-auto">
              Predictable returns for the stable part of your portfolio.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
