import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Motor Vehicles', path: '/motor-vehicles' },
    { name: 'Property', path: '/properties' },
    { name: 'Financing', path: '/financing' },
    { name: 'Marketing', path: '/marketing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top micro bar - Matching user's screenshot */}
      <div className="bg-corporate-blue text-white py-2.5 px-4">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="text-[11px] font-bold tracking-tight">KEY-SELLER MARKETING CONSULTANCY</span>
            <a href="tel:+254711870805" className="flex items-center hover:text-green-400 transition-colors text-[11px] font-bold">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              (+254) 711 870 805
            </a>
          </div>
          <div className="flex items-center space-x-3">
             <a 
               href="https://wa.me/254711870805" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-[#1bd75e] hover:bg-[#16ae4b] text-[10px] font-black uppercase px-4 py-2 rounded-sm tracking-wider transition-all"
             >
               WHATSAPP US
             </a>
             <Link 
               to="/contact" 
               className="text-[10px] font-black uppercase border border-white/50 px-4 py-2 rounded-sm tracking-wider hover:bg-white hover:text-corporate-blue transition-all"
             >
               REQUEST CATALOGUE
             </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar Row */}
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-12 w-12 mr-3 rounded-full flex items-center justify-center overflow-hidden bg-corporate-blue">
                {!imgError ? (
                  <img 
                    src="/logo.jpg" 
                    alt="Logo" 
                    className="h-full w-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="text-white font-black text-sm">KS</span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-[#1a1a1a] tracking-tight leading-none">KEY-SELLER</span>
                <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase">Marketing Consultancy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-[12px] font-bold uppercase tracking-wider transition-all relative ${
                  isActive(link.path)
                    ? 'text-corporate-blue'
                    : 'text-gray-500 hover:text-corporate-blue'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-[-10px] left-4 right-4 h-[3px] bg-corporate-blue rounded-full"></span>
                )}
              </Link>
            ))}
            <div className="ml-6">
              <Link
                to="/contact"
                className="bg-[#002855] text-white px-8 py-3 rounded-md text-[12px] font-black uppercase tracking-wider hover:bg-blue-900 transition-all shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 focus:outline-none"
            >
              {!isOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} border-t border-gray-100`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-4 rounded-md text-[13px] font-bold uppercase tracking-widest ${
                isActive(link.path) ? 'bg-blue-50 text-corporate-blue' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
             <Link 
               to="/contact"
               onClick={() => setIsOpen(false)}
               className="block w-full text-center bg-corporate-blue text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs"
             >
               Get Started
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;