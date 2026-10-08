import Image from "next/image";
import logo from "../public/logo.png";

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white relative z-50">
      {/* Top utility bar — phone number, visible on lg+ */}
      <div className="hidden lg:block bg-brand-900 text-white text-sm">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 flex justify-end items-center gap-6 py-1.5">
          <a
            href="tel:+919914440682"
            className="hover:text-accent-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm"
          >
            +91 99144 40682
          </a>
          <span aria-hidden="true" className="w-px h-4 bg-brand-700" />
          <a
            href="https://www.njindiaonline.in/cdesk/login.fin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm font-medium"
          >
            Client Login ↗
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-3 sm:px-8 lg:px-10 flex items-center justify-between gap-4">
        {/* Logo + Brand */}
        <a
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-lg p-1 z-50"
        >
          <Image
            src={logo}
            height={52}
            alt="Equity Mine Logo"
            placeholder="blur"
            className="w-auto h-10 sm:h-[52px]"
          />
          <span className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
            Equity Mine
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.95rem] font-medium text-slate-700">
            <li>
              <a
                href="/"
                className="px-3 py-2 rounded-md hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="px-3 py-2 rounded-md hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 transition-colors"
              >
                About
              </a>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <a
                href="/services"
                className="px-3 py-2 rounded-md hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 transition-colors inline-flex items-center gap-1"
              >
                Services
                <svg className="w-4 h-4 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
              <ul className="absolute left-0 top-full mt-1 w-56 bg-white border border-slate-200 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                <li>
                  <a href="/services#mutual-funds" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600 transition-colors">
                    Mutual Funds
                  </a>
                </li>
                <li>
                  <a href="/services#insurance" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600 transition-colors">
                    Insurance
                  </a>
                </li>
                <li>
                  <a href="/services#fd-bonds" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600 transition-colors">
                    Fixed Deposits &amp; Bonds
                  </a>
                </li>
              </ul>
            </li>

            {/* Tools Dropdown */}
            <li className="relative group">
              <span
                className="px-3 py-2 rounded-md hover:bg-brand-50 hover:text-brand-700 cursor-default inline-flex items-center gap-1"
                tabIndex={0}
              >
                Tools
                <svg className="w-4 h-4 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
              <ul className="absolute left-0 top-full mt-1 w-52 bg-white border border-slate-200 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                <li>
                  <a href="https://www.njmutualfund.com/calculator" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600 transition-colors">
                    Calculators ↗
                  </a>
                </li>
                <li>
                  <a href="/research" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600 transition-colors">
                    MF Research
                  </a>
                </li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="relative group">
              <span
                className="px-3 py-2 rounded-md hover:bg-brand-50 hover:text-brand-700 cursor-default inline-flex items-center gap-1"
                tabIndex={0}
              >
                Resources
                <svg className="w-4 h-4 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
              <ul className="absolute left-0 top-full mt-1 w-52 bg-white border border-slate-200 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                <li>
                  <a href="/blog" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/news" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600 transition-colors">
                    News
                  </a>
                </li>
                <li>
                  <a href="/mutual-funds" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600 transition-colors">
                    Mutual Funds
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="/contact"
                className="px-3 py-2 rounded-md hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 transition-colors"
              >
                Contact
              </a>
            </li>

            <li className="ml-2">
              <a
                href="/contact"
                className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                Talk to us
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle — details/summary, CSS only */}
        <details className="lg:hidden group" id="mobile-menu">
          <summary className="list-none p-2 text-slate-700 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-md cursor-pointer z-50">
            {/* Hamburger icon */}
            <svg className="w-7 h-7 group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close icon */}
            <svg className="w-7 h-7 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </summary>

          <nav
            aria-label="Mobile Navigation"
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40"
          >
            <ul className="flex flex-col text-base font-medium text-slate-800 px-5 py-4 sm:px-8 max-h-[80vh] overflow-y-auto">
              <li>
                <a href="/" className="block py-3 border-b border-slate-100 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="block py-3 border-b border-slate-100 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">
                  About
                </a>
              </li>

              {/* Mobile Services sub-menu */}
              <li>
                <details className="group/services">
                  <summary className="py-3 border-b border-slate-100 hover:text-brand-600 cursor-pointer list-none flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">
                    Services
                    <svg className="w-4 h-4 transition-transform group-open/services:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <ul className="pl-4 pb-2">
                    <li><a href="/services#mutual-funds" className="block py-2 text-sm text-slate-600 hover:text-brand-600 transition-colors">Mutual Funds</a></li>
                    <li><a href="/services#insurance" className="block py-2 text-sm text-slate-600 hover:text-brand-600 transition-colors">Insurance</a></li>
                    <li><a href="/services#fd-bonds" className="block py-2 text-sm text-slate-600 hover:text-brand-600 transition-colors">Fixed Deposits &amp; Bonds</a></li>
                  </ul>
                </details>
              </li>

              {/* Mobile Tools sub-menu */}
              <li>
                <details className="group/tools">
                  <summary className="py-3 border-b border-slate-100 hover:text-brand-600 cursor-pointer list-none flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">
                    Tools
                    <svg className="w-4 h-4 transition-transform group-open/tools:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <ul className="pl-4 pb-2">
                    <li><a href="https://www.njmutualfund.com/calculator" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-slate-600 hover:text-brand-600 transition-colors">Calculators ↗</a></li>
                    <li><a href="/research" className="block py-2 text-sm text-slate-600 hover:text-brand-600 transition-colors">MF Research</a></li>
                  </ul>
                </details>
              </li>

              {/* Mobile Resources sub-menu */}
              <li>
                <details className="group/resources">
                  <summary className="py-3 border-b border-slate-100 hover:text-brand-600 cursor-pointer list-none flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">
                    Resources
                    <svg className="w-4 h-4 transition-transform group-open/resources:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <ul className="pl-4 pb-2">
                    <li><a href="/blog" className="block py-2 text-sm text-slate-600 hover:text-brand-600 transition-colors">Blog</a></li>
                    <li><a href="/news" className="block py-2 text-sm text-slate-600 hover:text-brand-600 transition-colors">News</a></li>
                    <li><a href="/mutual-funds" className="block py-2 text-sm text-slate-600 hover:text-brand-600 transition-colors">Mutual Funds</a></li>
                  </ul>
                </details>
              </li>

              <li>
                <a href="/contact" className="block py-3 border-b border-slate-100 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://www.njindiaonline.in/cdesk/login.fin" target="_blank" rel="noopener noreferrer" className="block py-3 border-b border-slate-100 text-brand-600 hover:text-brand-700 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm">
                  Client Login ↗
                </a>
              </li>
              <li className="pt-3 flex flex-col gap-3">
                <a
                  href="tel:+919914440682"
                  className="text-sm text-slate-600 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm"
                >
                  +91 99144 40682
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                >
                  Talk to us
                </a>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
