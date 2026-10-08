export function About() {
  return (
    <section aria-labelledby="about-heading" className="bg-white">
      <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Text column */}
          <div className="flex flex-col gap-6">
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Helping families make informed investment decisions.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              [Client bio goes here — a short paragraph about background, how the practice started, and the approach to financial guidance for families in Mansa and nearby areas.]
            </p>
            <ul className="flex flex-col gap-3 text-base text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1" aria-hidden="true">✓</span>
                AMFI-Registered Mutual Fund Distributor (ARN-277368)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1" aria-hidden="true">✓</span>
                [Certification / qualification placeholder]
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 mt-1" aria-hidden="true">✓</span>
                [Education / degree placeholder]
              </li>
            </ul>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm w-fit"
            >
              More about Jitender Singh
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>

          {/* Quote / philosophy card */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 sm:p-10 relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-600 rounded-t-2xl" />
            <div className="flex flex-col gap-6">
              <blockquote className="text-xl sm:text-2xl italic font-medium text-slate-800 border-l-4 border-brand-500 pl-4">
                &ldquo;[Personal quote or philosophy placeholder]&rdquo;
              </blockquote>
              <p className="text-slate-600 leading-relaxed">
                [A brief note on the approach to investing — understanding goals before recommending any product, keeping plans simple, and staying available for questions.]
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-brand-100">
                <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JS
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Jitender Singh</p>
                  <p className="text-sm text-slate-500">Founder, Equity Mine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
