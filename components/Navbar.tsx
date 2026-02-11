
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="bg-corporate-blue text-white py-2 px-4 text-xs md:text-sm hidden md:block border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="font-medium opacity-80 uppercase tracking-tighter text-[10px]">Key-Seller Marketing Consultancy</span>
            <a href="tel:+254711870805" className="flex items-center hover:text-yellow-500 transition-colors font-bold">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              (+254) 711 870 805
            </a>
          </div>
          <div className="flex items-center space-x-4">
             <a 
               href="https://wa.me/254711870805" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-green-600 hover:bg-green-700 text-[10px] font-black uppercase px-3 py-1 rounded tracking-widest transition-colors flex items-center"
             >
               <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
               WhatsApp Us
             </a>
             <Link 
               to="/contact" 
               className="text-[10px] font-black uppercase border border-white/30 px-3 py-1 rounded tracking-widest hover:bg-white hover:text-corporate-blue transition-all"
             >
               Request Catalogue
             </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="h-16 w-16 mr-3 bg-gray-900 rounded-full flex items-center justify-center p-1 overflow-hidden shadow-md">
                <img 
                  src="https://i.ibb.co/vzP609v/keyseller-logo.png" 
                  alt="Key-Seller Logo" 
                  className="h-full w-full object-contain brightness-125"
                  onError={(e) => {
                     (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/32/32339.png'; // Fallback to a key icon
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-corporate-blue tracking-tighter leading-none">KEY-SELLER</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-0.5">Marketing Consultancy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-corporate-blue border-b-2 border-corporate-blue'
                    : 'text-gray-600 hover:text-corporate-blue'
                } px-1 py-2 text-sm font-bold transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-corporate-blue text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-900 transition-all active:scale-95 shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-bold ${
                  isActive(link.path) ? 'text-corporate-blue bg-blue-50' : 'text-gray-700 hover:text-corporate-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-corporate-blue text-white py-3 rounded-xl font-bold"
              >
                Get Started
              </Link>
              <a
                href="tel:+254711870805"
                className="block w-full text-center bg-gray-100 text-gray-900 py-3 rounded-xl font-bold text-sm"
              >
                Call: (+254) 711 870 805
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
