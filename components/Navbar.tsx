
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
      {/* Top micro bar - Matching user's screenshot */}
      <div className="bg-corporate-blue text-white py-2.5 px-4 text-xs md:text-sm border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="font-bold opacity-90 uppercase tracking-tight text-[10px]">KEY-SELLER MARKETING CONSULTANCY</span>
            <a href="tel:+254711870805" className="flex items-center hover:text-yellow-500 transition-colors font-bold">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
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
               <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
              <div className="h-14 w-14 mr-3 bg-corporate-blue rounded-full flex items-center justify-center p-1 overflow-hidden shadow-lg border border-blue-900/50">
                <img 
                  src="https://i.ibb.co/vzP609v/keyseller-logo.png" 
                  alt="Logo" 
                  className="h-full w-full object-contain brightness-150"
                  onError={(e) => {
                     const parent = (e.target as HTMLImageElement).parentElement;
                     if (parent) {
                       // Fix the key icon SVG path and complete the innerHTML update
                       parent.innerHTML = '<svg viewBox="0 0 24 24" fill="none" class="w-10 h-10 text-yellow-400" xmlns="http://www.w3.org/2000/svg"><path d="M15 6C13.3431 6 12 7.34315 12 9C12 9.44425 12.0965 9.8659 12.2689 10.2449L3 19.5138V22H5.48622L6.37244 21.1138V19.3404H8.14583L9.03205 18.4542V16.6808H10.8054L11.7551 15.7311C12.1341 15.9035 12.5558 16 13 16C14.6569 16 16 14.6569 16 13C16 12.5558 15.9035 12.1341 15.7311 11.7551L18.2449 9.24122C18.6239 9.41824 19.0456 9.51474 19.4897 9.51474C21.1466 9.51474 22.4897 8.17159 22.4897 6.51474C22.4897 4.85788 21.1466 3.51474 19.4897 3.51474C17.8328 3.51474 16.4897 4.85788 16.4897 6.51474C16.4897 6.95889 16.5862 7.38054 16.7586 7.75952L15 9.51812L15 6Z" fill="currentColor"/></svg>';
                     }
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-gray-900 tracking-tighter leading-none">KEY-SELLER</span>
                <span className="text-[9px] text-corporate-blue font-bold tracking-[0.2em] uppercase">Consultancy</span>
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
                    ? 'text-corporate-blue'
                    : 'text-gray-500 hover:text-corporate-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
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
          <div className="pt-4 pb-2 px-4">
             <Link 
               to="/contact"
               onClick={() => setIsOpen(false)}
               className="block w-full text-center bg-corporate-blue text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs"
             >
               Contact Us
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
