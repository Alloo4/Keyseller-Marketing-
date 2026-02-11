
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
      <div className="bg-corporate-blue text-white py-1 px-4 text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-medium">Key-Seller Marketing Consultancy - Serving Nationwide</span>
          <span className="flex items-center space-x-4">
            <a href="tel:+254711870805" className="flex items-center hover:text-yellow-500 transition-colors">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              (+254) 711 870 805
            </a>
            <span className="opacity-50">|</span>
            <span className="font-semibold tracking-wider text-[10px]">INNOVATE. INSPIRE. IMPACT.</span>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img 
                src="https://i.ibb.co/vzP609v/keyseller-logo.png" 
                alt="Key-Seller Logo" 
                className="h-12 w-auto mr-3 transition-transform group-hover:scale-105"
                onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
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
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-corporate-blue text-white py-3 rounded-xl font-bold"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
