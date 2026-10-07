'use client';

import Image from 'next/image';
import logo from '../public/logo.png';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-white relative z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 sm:px-8 lg:px-10 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 z-50">
          <Image src={logo} height={60} alt="Equity Mine Logo" placeholder="blur" className="w-auto h-12 sm:h-[60px]" />
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Equity Mine</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden sm:block">
          <ul className="flex items-center gap-6 sm:gap-8 text-lg sm:text-xl font-medium text-gray-700">
            <li><a href="/" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">About</a></li>
            <li><a href="https://www.njmutualfund.com/calculator" target="_blank" rel="noreferrer" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Calculators</a></li>
            <li><a href="/tools" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Tools</a></li>
            <li><a href="/resources" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Resources</a></li>
            <li><a href="/contact" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Contact</a></li>
            <li><a href="https://www.njindiaonline.in/cdesk/login.fin" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm transition-colors">Client Login</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="sm:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md z-50" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div 
        className={`sm:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="px-5 py-4 bg-gray-50/90 backdrop-blur-sm">
          <ul className="flex flex-col gap-4 text-lg font-medium text-gray-800">
            <li><a href="/" className="block py-2 hover:text-blue-600 border-b border-gray-200">Home</a></li>
            <li><a href="/about" className="block py-2 hover:text-blue-600 border-b border-gray-200">About</a></li>
            <li><a href="https://www.njmutualfund.com/calculator" target="_blank" rel="noreferrer" className="block py-2 hover:text-blue-600 border-b border-gray-200">Calculators</a></li>
            <li><a href="/tools" className="block py-2 hover:text-blue-600 border-b border-gray-200">Tools</a></li>
            <li><a href="/resources" className="block py-2 hover:text-blue-600 border-b border-gray-200">Resources</a></li>
            <li><a href="/contact" className="block py-2 hover:text-blue-600 border-b border-gray-200">Contact</a></li>
            <li><a href="https://www.njindiaonline.in/cdesk/login.fin" target="_blank" rel="noreferrer" className="block py-2 text-blue-600 hover:text-blue-800 font-bold">Client Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
