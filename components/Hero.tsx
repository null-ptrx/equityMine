export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20 flex flex-col gap-8">
        <div className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left max-w-3xl">
          <span className="inline-block border border-blue-200 bg-blue-50 text-blue-800 text-sm sm:text-base font-semibold px-4 py-1.5 rounded-full">
            AMFI-Registered Distributor
          </span>
          <h1 id="hero-heading" className="flex flex-col text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 gap-2">
            <span>Simple advice.</span>
            <span className="text-blue-600">Always reachable.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
            Mutual fund guidance for families in and around Patna, with a direct line to your mutual fund distributor rather than a call centre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button type="button" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
              Talk to us
            </button>
            <button type="button" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 font-semibold px-8 py-4 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
              Explore Services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:mt-12">
          <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow justify-center items-center text-center gap-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">AMFI Registration</span>
            <span className="text-xl font-bold text-gray-900">ARN-175151</span>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow justify-center items-center text-center gap-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">EUIN</span>
            <span className="text-xl font-bold text-gray-900">E353458</span>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow justify-center items-center text-center gap-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Based In</span>
            <span className="text-xl font-bold text-gray-900">Patna</span>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow justify-center items-center text-center gap-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Distributor</span>
            <span className="text-xl font-bold text-gray-900">Milan Samajder</span>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow justify-center items-center text-center gap-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Experience</span>
            <span className="text-xl font-bold text-gray-900">5+ Years</span>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow justify-center items-center text-center gap-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Families Served</span>
            <span className="text-xl font-bold text-gray-900">393+</span>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow justify-center items-center text-center gap-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Assets Guided</span>
            <span className="text-xl font-bold text-gray-900">₹8 Cr+</span>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow justify-center items-center text-center gap-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">AMFI ARN</span>
            <span className="text-xl font-bold text-gray-900">175151</span>
          </div>
        </div>
      </div>
    </section>
  );
}
