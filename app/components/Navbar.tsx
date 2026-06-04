'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after click
  };

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed w-full z-50 transition-all duration-300 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Minyak Pamboang" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={scrollToTop}
              className="text-gray-700 hover:text-red-900 transition-colors duration-200 font-medium"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('cerita')}
              className="text-gray-700 hover:text-red-900 transition-colors duration-200 font-medium"
            >
              Cerita
            </button>
            <button 
              onClick={() => scrollToSection('produk')}
              className="text-gray-700 hover:text-red-900 transition-colors duration-200 font-medium"
            >
              Produk
            </button>
            <button 
              onClick={() => scrollToSection('testimoni')}
              className="text-gray-700 hover:text-red-900 transition-colors duration-200 font-medium"
            >
              Testimoni
            </button>
            <button 
              onClick={() => scrollToSection('bantuan')}
              className="text-gray-700 hover:text-red-900 transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={scrollToCTA}
              className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-xl transition-all duration-200 font-medium shadow-sm hover:shadow-md"
            >
              Pesan Sekarang
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-red-900 hover:bg-gray-50 focus:outline-none transition-all duration-200"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-500 ease-out ${
          isOpen ? 'max-h-[640px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
            <button 
              onClick={scrollToTop}
              className="block w-full px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-red-900 hover:bg-gray-50 transition-all duration-200 text-left"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('cerita')}
              className="block w-full px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-red-900 hover:bg-gray-50 transition-all duration-200 text-left"
            >
              Cerita
            </button>
            <button 
              onClick={() => scrollToSection('produk')}
              className="block w-full px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-red-900 hover:bg-gray-50 transition-all duration-200 text-left"
            >
              Produk
            </button>
            <button 
              onClick={() => scrollToSection('testimoni')}
              className="block w-full px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-red-900 hover:bg-gray-50 transition-all duration-200 text-left"
            >
              Testimoni
            </button>
            <button 
              onClick={() => scrollToSection('bantuan')}
              className="block w-full px-4 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-red-900 hover:bg-gray-50 transition-all duration-200 text-left"
            >
              FAQ
            </button>
            <button 
              onClick={scrollToCTA}
              className="w-full mt-6 bg-red-900 hover:bg-red-800 text-white px-6 py-4 rounded-xl transition-all duration-200 font-medium shadow-md"
            >
              Pesan Sekarang
            </button>
            <p className="text-center text-sm text-gray-500">
              Powered by{" "}
              <a
                href="https://dekatlokal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red-900 hover:text-red-700 transition-colors"
              >
                dekatlokal
              </a>
            </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
