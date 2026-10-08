export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white">
      <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 flex flex-col gap-8">
        <div className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left max-w-3xl">
          <span className="inline-block border border-brand-100/30 bg-white/10 backdrop-blur-sm text-brand-100 text-sm sm:text-base font-semibold px-4 py-1.5 rounded-full">
            AMFI-Registered Distributor · ARN-277368
          </span>
          <h1
            id="hero-heading"
            className="flex flex-col text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight gap-2"
          >
            <span>Straightforward guidance.</span>
            <span className="text-accent-400">Always within reach.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-brand-100 leading-relaxed max-w-2xl">
            Mutual fund guidance for families in and around Mansa, Punjab — with a direct line to your distributor, not a call centre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/contact"
              className="w-full sm:w-auto text-center bg-accent-400 hover:bg-accent-500 text-brand-900 font-semibold px-8 py-4 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            >
              Talk to us
            </a>
            <a
              href="/services"
              className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-semibold px-8 py-4 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 sm:mt-8">
          <div className="flex flex-col bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-sm justify-center items-center text-center gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-white">6+</span>
            <span className="text-sm font-medium text-brand-200 uppercase tracking-wide">Years Experience</span>
          </div>
          <div className="flex flex-col bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-sm justify-center items-center text-center gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-white">80+</span>
            <span className="text-sm font-medium text-brand-200 uppercase tracking-wide">Families Served</span>
          </div>
          <div className="flex flex-col bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-sm justify-center items-center text-center gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-white">₹10 Cr+</span>
            <span className="text-sm font-medium text-brand-200 uppercase tracking-wide">Assets Guided</span>
          </div>
        </div>
      </div>
    </section>
  );
}
