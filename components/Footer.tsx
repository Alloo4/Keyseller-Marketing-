import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t-4 border-corporate-blue">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <div className="h-16 w-16 mb-4 rounded-full flex items-center justify-center overflow-hidden bg-white">
                {!imgError ? (
                  <img 
                    src="/logo.jpg" 
                    alt="Key-Seller Logo" 
                    className="h-full w-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="text-corporate-blue font-black text-lg">KS</span>
                )}
              </div>
              <div className="border-l-4 border-corporate-blue pl-4">
                <h3 className="text-2xl font-black tracking-tighter leading-tight">KEY-SELLER</h3>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.3em]">Marketing Consultancy</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Sourcing verified vehicles and property opportunities while guiding you to flexible financing options.
            </p>
            <div className="space-y-3 text-[11px] text-gray-500 font-bold uppercase tracking-widest pt-2">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-corporate-blue" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                Nairobi, Kenya
              </div>
              <a href="tel:+254711870805" className="flex items-center hover:text-white transition-colors">
                <svg className="w-4 h-4 mr-3 text-corporate-blue" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                (+254) 711 870 805
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-widest mb-8 text-gray-400 border-b border-gray-900 pb-2">Our Services</h4>
            <ul className="space-y-4 text-[13px] text-gray-500 font-bold uppercase tracking-wider">
              <li><Link to="/motor-vehicles" className="hover:text-white transition-colors block">Motor Vehicles</Link></li>
              <li><Link to="/properties" className="hover:text-white transition-colors block">Property Resale</Link></li>
              <li><Link to="/financing" className="hover:text-white transition-colors block">Financing Advice</Link></li>
              <li><Link to="/marketing" className="hover:text-white transition-colors block">Growth Marketing</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-widest mb-8 text-gray-400 border-b border-gray-900 pb-2">Quick Links</h4>
            <ul className="space-y-4 text-[13px] text-gray-500 font-bold uppercase tracking-wider">
              <li><Link to="/about" className="hover:text-white transition-colors block">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors block">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors block text-corporate-blue">Request Catalogue</Link></li>
              <li><a href="https://wa.me/254711870805" className="hover:text-white transition-colors block">WhatsApp Support</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-widest mb-8 text-gray-400 border-b border-gray-900 pb-2">Newsletter</h4>
            <p className="text-gray-500 mb-6 text-sm">
              Subscribe for new vehicle/property listings and auction updates.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-corporate-blue outline-none"
              />
              <button className="bg-corporate-blue hover:bg-blue-800 text-white font-black py-3 rounded-lg transition-all text-xs uppercase tracking-widest">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          <p>© 2026 Key-Seller Marketing Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;