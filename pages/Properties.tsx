
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Properties: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const listings = [
    { id: 1, type: 'Auction', title: 'Prime 1/8 Acre Plot', price: 'Ksh 1,800,000', category: 'auction', propType: 'Land', location: 'Kitengela', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600' },
    { id: 2, type: 'New', title: 'Modern 3BR Apartment', price: 'Ksh 9,500,000', category: 'new', propType: 'Apartment', location: 'Kilimani', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600' },
    { id: 3, type: 'Resale', title: '4BR Townhouse + DSQ', price: 'Ksh 24,000,000', category: 'resale', propType: 'House', location: 'Lavington', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600' },
    { id: 4, type: 'Auction', title: 'Residential 2BR Flat', price: 'Ksh 4,200,000', category: 'auction', propType: 'Apartment', location: 'Ruiru', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=600' },
    { id: 5, type: 'New', title: 'Boutique 1BR Units', price: 'Ksh 3,800,000', category: 'new', propType: 'Apartment', location: 'Syokimau', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600' },
    { id: 6, type: 'Resale', title: 'Commercial Quarter Acre', price: 'Ksh 45,000,000', category: 'resale', propType: 'Commercial', location: 'Westlands', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600' },
  ];

  const partners = [
    { name: 'KCB Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Placeholder_logo.svg/100px-Placeholder_logo.svg.png' },
    { name: 'Co-op Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Placeholder_logo.svg/100px-Placeholder_logo.svg.png' },
    { name: 'Absa Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Placeholder_logo.svg/100px-Placeholder_logo.svg.png' },
    { name: 'APA Insurance', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Placeholder_logo.svg/100px-Placeholder_logo.svg.png' },
  ];

  const filteredListings = activeTab === 'all' ? listings : listings.filter(item => item.category === activeTab);

  return (
    <div className="bg-white">
      {/* Hero */}
      <header className="bg-gray-900 py-20 lg:py-32 relative text-white">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1448630360428-65ff2ede67ae?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Real Estate" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Verified properties with investment potential.</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Explore properties available for resale or auction—ideal for investors and serious buyers seeking strategic locations and clean documentation.
          </p>
          <a href="#listings" className="bg-corporate-blue text-white px-8 py-4 rounded-md font-bold hover:bg-blue-800 transition-all inline-block">
            Explore Properties
          </a>
        </div>
      </header>

      {/* Partners Strip */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Official Real Estate Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {partners.map((p, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={p.logo} alt={p.name} className="h-8 mb-2 grayscale" />
                <span className="text-xs font-bold text-gray-500">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section id="listings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 md:mb-0">Latest Opportunities</h2>
            <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
              {['all', 'auction', 'new', 'resale'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all capitalize ${
                    activeTab === tab ? 'bg-corporate-blue text-white shadow-md' : 'text-gray-500 hover:text-corporate-blue'
                  }`}
                >
                  {tab === 'all' ? 'All' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((prop) => (
              <div key={prop.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm ${
                    prop.category === 'auction' ? 'bg-red-600 text-white' : prop.category === 'new' ? 'bg-green-600 text-white' : 'bg-corporate-blue text-white'
                  }`}>
                    {prop.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{prop.title}</h3>
                  <p className="text-2xl font-extrabold text-corporate-blue mb-4">{prop.price}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-4 border-b">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      {prop.propType}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      {prop.location}
                    </span>
                  </div>
                  <Link to="/contact" className="block w-full text-center bg-gray-900 text-white py-3 rounded-md font-bold hover:bg-corporate-blue transition-colors">
                    Book a Viewing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Secure Property via Key-Seller?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Lower prices", desc: "Auction assets can be priced below market value, offering immediate equity." },
              { title: "Faster acquisition", desc: "Auctions can offer quicker turnaround with ready documentation." },
              { title: "Transparency", desc: "Open bidding reduces hidden costs and improves clarity during the purchase." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-xl font-bold mb-4 text-corporate-blue">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:flex lg:items-center lg:gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Expert Support End-to-End</h2>
            <ul className="space-y-6">
              {[
                "Viewing/inspection scheduling support with our expert guides.",
                "Detailed guidance on appraisal/valuation reference documents.",
                "Direct liaison with financing partners for mortgage approvals.",
                "Step-by-step transfer support for a smoother title deed transfer."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="bg-corporate-blue p-1 rounded-full mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1449156001433-469b43224403?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-xl" alt="Consultancy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-corporate-blue py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Tell us your budget and location</h2>
          <p className="mb-10 opacity-80 text-lg">We'll help you find the perfect match within our current listings or upcoming auctions.</p>
          <Link to="/contact" className="bg-white text-corporate-blue px-10 py-4 rounded-md font-extrabold hover:bg-gray-100 transition-colors">
            Start Your Search
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Properties;
