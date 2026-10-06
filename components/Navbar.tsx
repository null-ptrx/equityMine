import Image from 'next/image';
import logo from '../public/logo.png';

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-5 py-4 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1">
          <Image src={logo} height={60} alt="Equity Mine Logo" placeholder="blur" className="w-auto h-12 sm:h-[60px]" />
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Equity Mine</span>
        </a>
        <nav aria-label="Main Navigation" className="w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          <ul className="flex items-center gap-6 sm:gap-8 text-lg sm:text-xl font-medium text-gray-700 min-w-max">
            <li><a href="/" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">About</a></li>
            <li><a href="https://www.njmutualfund.com/calculator" target = "_blank" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Calculators</a></li>
            <li><a href="/tools" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Tools</a></li>
            <li><a href="/resources" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Resources</a></li>
            <li><a href="/contact" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Contact</a></li>
            <li><a href="https://www.njindiaonline.in/cdesk/login.fin" target = "_blank" className="text-blue-600 hover:text-blue-800 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Client Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
