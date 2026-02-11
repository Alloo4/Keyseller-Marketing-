
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Key-Seller Marketing Consultancy</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We connect buyers and resellers to verified vehicles and property opportunities—including auctions—then guide you to flexible financing options and documentation so you can close deals faster and confidently.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Nairobi, Kenya (Serving Nationwide)</p>
              <p>Call/WhatsApp: +254 7XX XXX XXX</p>
              <p>Email: info@keyseller.co.ke</p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/motor-vehicles" className="hover:text-white transition-colors">Motor Vehicles (Buy/Sell)</Link></li>
              <li><Link to="/properties" className="hover:text-white transition-colors">Properties (Resale & Auctions)</Link></li>
              <li><Link to="/financing" className="hover:text-white transition-colors">Financing & Advisory</Link></li>
              <li><Link to="/marketing" className="hover:text-white transition-colors">Marketing & Lead Generation</Link></li>
              <li><Link to="/marketing" className="hover:text-white transition-colors">Creative Content (Photo/Video)</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request Catalogue</Link></li>
              <li><Link to="/financing" className="hover:text-white transition-colors">Financing Options</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get the latest listings & offers</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to get new vehicle/property listings, auction updates, and financing tips straight to your inbox.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-none rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-corporate-blue"
              />
              <button className="bg-corporate-blue hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition-colors text-sm">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">
              Prefer WhatsApp? <Link to="/contact" className="text-white underline">Request the catalogue</Link>.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Key-Seller Marketing Consultancy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Listings and financing options are subject to availability and eligibility.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
