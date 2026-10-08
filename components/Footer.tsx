import Image from "next/image";
import logo from "../public/logo.png";

export function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100 border-t border-brand-700">
      <div className="max-w-6xl mx-auto px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20 flex flex-col gap-12">
        {/* Top grid — brand, navigate, contact, office */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand + tagline */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a
              href="/"
              className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-lg p-1 w-fit"
            >
              <Image
                src={logo}
                height={60}
                alt="Equity Mine Logo"
                placeholder="blur"
                className="w-auto h-12 sm:h-[60px]"
              />
              <span className="text-2xl sm:text-3xl font-bold text-white group-hover:text-accent-400 transition-colors">
                Equity Mine
              </span>
            </a>
            <p className="text-base sm:text-lg text-brand-100/80 leading-relaxed max-w-sm">
              Helping families across Mansa invest with a plan they understand, in plain language and without the jargon.
            </p>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8">
            {/* Navigate */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-white uppercase tracking-wider">
                Navigate
              </h2>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="/" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="https://www.njmutualfund.com/calculator" target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.njindiaonline.in/cdesk/login.fin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-500 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors"
                  >
                    Client Login ↗
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-white uppercase tracking-wider">
                Contact
              </h2>
              <address className="not-italic flex flex-col gap-3 text-brand-100/80">
                <a
                  href="tel:+919914440682"
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors"
                >
                  +91 99144 40682
                </a>
                <a
                  href="mailto:equitymine@support.in"
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors break-all"
                >
                  equitymine@support.in
                </a>
                <span>Mon – Sat · 10:00 AM to 7:00 PM</span>
              </address>
            </div>

            {/* Office */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-white uppercase tracking-wider">
                Office
              </h2>
              <address className="not-italic flex flex-col gap-1 text-brand-100/80">
                <strong className="font-medium text-brand-100">
                  Jitender Singh
                </strong>
                <span>New Court Road, Near Mata Sundri Girls</span>
                <span>College, Mansa, Punjab 151505</span>
              </address>
            </div>
          </div>
        </div>

        {/* AMFI Registration box */}
        <div className="bg-brand-700/40 border border-brand-700 rounded-xl p-6 sm:p-8 flex flex-col gap-3">
          <p className="text-sm text-white font-semibold uppercase tracking-wider">
            AMFI (Association of Mutual Funds in India) Registered Mutual Fund Distributor
          </p>
          <p className="text-sm text-brand-100/80">
            ARN No. 277368
          </p>
          <p className="text-sm text-brand-100/80">
            Initial registration on [valid till DD.MM.YYYY] | Valid till [valid till DD.MM.YYYY]
          </p>
        </div>

        {/* Statutory disclaimer */}
        <div className="flex flex-col gap-4 text-xs text-brand-100/60 leading-relaxed">
          <p className="font-semibold text-brand-100/80 uppercase tracking-wider text-sm">
            Statutory disclaimer
          </p>
          <p>
            Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. Past performance is not indicative of future returns. The calculators and content on this site are for illustrative and educational purposes only and do not constitute investment advice. Please consult your mutual fund distributor before investing.
          </p>
          <p>
            Grievance redressal: Jitender Singh · <a href="mailto:equitymine@support.in" className="underline hover:text-white transition-colors">equitymine@support.in</a> · <a href="tel:+919914440682" className="underline hover:text-white transition-colors">+91 99144 40682</a>. Unresolved complaints may be escalated to <a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">AMFI</a> or through <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">SEBI SCORES</a>. Full details on the <a href="/disclaimer" className="underline hover:text-white transition-colors">disclaimer page</a>.
          </p>
        </div>

        {/* Bottom bar — copyright + legal links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-brand-700 text-sm text-brand-100/60">
          <p>
            © 2026 Jitender Singh · ARN-277368 · EUIN E522524
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/privacy" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors">
              Privacy Policy
            </a>
            <span aria-hidden="true" className="w-1 h-1 bg-brand-700 rounded-full" />
            <a href="/terms" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors">
              Terms of Use
            </a>
            <span aria-hidden="true" className="w-1 h-1 bg-brand-700 rounded-full" />
            <a href="/disclaimer" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors">
              Disclaimer
            </a>
            <span aria-hidden="true" className="w-1 h-1 bg-brand-700 rounded-full" />
            <a href="/disclosure" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm transition-colors">
              Commission Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}