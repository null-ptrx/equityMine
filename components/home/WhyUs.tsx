export function WhyUs() {
  return (
    <section aria-labelledby="whyus-heading" className="bg-white">
      <div className="max-w-6xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 flex flex-col gap-10">
        {/* Section header */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center">
          <h2
            id="whyus-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Your goals are personal. Your plan should be too.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No targets to hit and no products to push — just a plan built around your life, and someone who stays accountable for it.
          </p>
        </div>

        {/* 6 value cards — repeated blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900">Personalised Guidance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Advice built around your goals and life stage, never a one-size-fits-all model.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900">Goal-Oriented Investing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every investment is tied to a purpose, so progress is always measurable.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900">Transparent Communication</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clear explanations, honest expectations, and no hidden jargon or surprises.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
              04
            </div>
            <h3 className="text-lg font-bold text-slate-900">Regular Portfolio Reviews</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ongoing check-ins keep your portfolio aligned as markets and life evolve.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
              05
            </div>
            <h3 className="text-lg font-bold text-slate-900">Long-Term Relationship</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A partnership that grows with you, not a transaction that ends at the sale.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
              06
            </div>
            <h3 className="text-lg font-bold text-slate-900">Investor Education</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We help you understand the why behind every decision, building lasting confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
