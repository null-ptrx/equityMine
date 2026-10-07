import Image from 'next/image';
import logo from '../public/logo.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="/" className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg p-1 w-fit">
              <Image src={logo} height={60} alt="Equity Mine Logo" placeholder="blur" className="w-auto h-12 sm:h-[60px] " />
              <span className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">Equity Mine</span>
            </a>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-sm">
              Helping families across Patna invest with a plan they understand, in plain language and without the jargon.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-white uppercase tracking-wider">Navigate</h2>
              <ul className="flex flex-col gap-3">
                <li><a href="/" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm transition-colors">Services</a></li>
                <li><a href="/tools" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm transition-colors">Tools</a></li>
                <li><a href="/resources" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm transition-colors">Resources</a></li>
                <li><a href="/contact" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm transition-colors">Contact</a></li>
                <li><a href="/login" className="text-blue-400 hover:text-blue-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm transition-colors">Client Login</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-white uppercase tracking-wider">Contact</h2>
              <address className="not-italic flex flex-col gap-3 text-gray-400">
                <a href="tel:+918789322694" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm transition-colors">+91 99144 40682</a>
                <a href="mailto:milan.samajder@gmail.com" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm transition-colors break-all">Support@equitymine.in</a>
                <span>Mon – Sat · 10:00 AM to 7:00 PM</span>
              </address>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-white uppercase tracking-wider">Office</h2>
              <address className="not-italic flex flex-col gap-1 text-gray-400">
                <strong className="font-medium text-gray-300">Jitender Singh</strong>
                <span>New Court Road,  Near Mata Sundri Girls </span>
                <span>College,  Mansa ,Punjab-(151505)</span>
              </address>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800 text-sm text-gray-500">
          <p>© 2026 Jitender Singh. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>ARN-277368</span>
            <span aria-hidden="true" className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>EUIN E353458</span>
          </div>
        </div>
      </div>
    </footer>
  );
}