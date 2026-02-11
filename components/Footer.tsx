
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <img 
                src="https://i.ibb.co/vzP609v/keyseller-logo.png" 
                alt="Key-Seller Logo" 
                className="h-20 w-auto mb-4 filter brightness-110"
                onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="border-l-2 border-gray-800 pl-4">
                <h3 className="text-xl font-black tracking-tighter">KEY-SELLER</h3>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em] mb-1">Marketing Consultancy</p>
                <p className="text-[10px] text-yellow-500 font-bold tracking-widest opacity-80 uppercase mb-1">Innovate. Inspire. Impact.</p>
                <p className="text-[10px] text-gray-500 font-medium tracking-tight uppercase">Vehicles – Property – Financing – Marketing</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Connecting buyers and resellers to verified vehicles and property opportunities—including auctions—then guiding you to flexible financing options and documentation.
            </p>
            <div className="space-y-3 text-xs text-gray-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                Nairobi, Kenya (Serving Nationwide)
              </div>
              <a href="tel:+254711870805" className="flex items-center hover:text-white transition-colors">
                <svg className="w-4 h-4 mr-3 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                (+254) 711 870 805
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-gray-400">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-semibold">
              <li><Link to="/motor-vehicles" className="hover:text-white transition-colors">Motor Vehicles (Buy/Sell)</Link></li>
              <li><Link to="/properties" className="hover:text-white transition-colors">Properties (Resale & Auctions)</Link></li>
              <li><Link to="/financing" className="hover:text-white transition-colors">Financing & Advisory</Link></li>
              <li><Link to="/marketing" className="hover:text-white transition-colors">Marketing & Lead Generation</Link></li>
              <li><Link to="/marketing" className="hover:text-white transition-colors">Creative Content (Photo/Video)</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-gray-400">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-semibold">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request Catalogue</Link></li>
              <li><Link to="/financing" className="hover:text-white transition-colors">Financing Options</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-gray-400">Newsletter</h4>
            <p className="text-gray-500 mb-6 text-sm">
              Subscribe for new vehicle/property listings, auction updates, and financing tips.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-corporate-blue outline-none"
              />
              <button className="bg-corporate-blue hover:bg-blue-800 text-white font-black py-3 rounded-xl transition-all active:scale-95 text-sm uppercase tracking-widest">
                Subscribe
              </button>
            </form>
            <div className="mt-8 flex space-x-4 grayscale opacity-50 hover:opacity-100 transition-opacity">
               <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">F</div>
               <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">I</div>
               <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">L</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          <p>© 2026 Key-Seller Marketing Consultancy. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
