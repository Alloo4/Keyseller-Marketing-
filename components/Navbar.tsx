
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
      {/* Top micro bar */}
      <div className="bg-corporate-blue text-white py-2 px-4 text-xs md:text-sm border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center space-x-6">
            <span className="font-bold opacity-90 uppercase tracking-tight text-[10px]">KEY-SELLER MARKETING CONSULTANCY</span>
            <a href="tel:+254711870805" className="flex items-center hover:text-yellow-500 transition-colors font-bold">
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
               className="bg-[#25D366] hover:bg-[#128C7E] text-[10px] font-black uppercase px-4 py-1.5 rounded-md tracking-widest transition-all flex items-center shadow-sm"
             >
               WHATSAPP US
             </a>
             <Link 
               to="/contact" 
               className="text-[10px] font-black uppercase border border-white/40 px-4 py-1.5 rounded-md tracking-widest hover:bg-white hover:text-corporate-blue transition-all"
             >
               REQUEST CATALOGUE
             </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="h-14 w-14 mr-3 bg-corporate-blue rounded-full flex items-center justify-center p-0.5 overflow-hidden shadow-md border border-blue-900/20">
                {!imgError ? (
                  <img 
                    src="/logo.jpg" 
                    alt="Key-Seller Logo" 
                    className="h-full w-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="text-white font-black text-xl">KS</span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-gray-900 tracking-tighter leading-none">KEY-SELLER</span>
                <span className="text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase">Marketing Consultancy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${
                  isActive(link.path)
                    ? 'text-corporate-blue border-b-2 border-corporate-blue'
                    : 'text-gray-500 hover:text-corporate-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4">
              <Link
                to="/contact"
                className="bg-corporate-blue text-white px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-blue-900 transition-all shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-bold uppercase tracking-widest ${
                isActive(link.path)
                  ? 'bg-blue-50 text-corporate-blue'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 px-4 space-y-3">
             <Link 
               to="/contact"
               onClick={() => setIsOpen(false)}
               className="block w-full text-center bg-corporate-blue text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs"
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
