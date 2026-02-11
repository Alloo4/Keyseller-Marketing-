
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';

const MotorVehicles: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const listings = [
    { id: 1, type: 'Auction', title: '2018 Toyota Prado TX-L', price: 'Ksh 5,200,000', category: 'auction', carType: 'SUV', location: 'Nairobi', img: 'https://images.unsplash.com/photo-1594568284297-7c64464062b1?auto=format&fit=crop&q=80&w=600' },
    { id: 2, type: 'New', title: '2024 Suzuki Vitara Hybrid', price: 'Ksh 4,800,000', category: 'new', carType: 'SUV', location: 'Mombasa', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600' },
    { id: 3, type: 'Resale', title: '2016 Mazda CX-5', price: 'Ksh 2,450,000', category: 'resale', carType: 'SUV', location: 'Nairobi', img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600' },
    { id: 4, type: 'Auction', title: '2019 Isuzu NQR Truck', price: 'Ksh 3,100,000', category: 'auction', carType: 'Commercial', location: 'Nakuru', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600' },
    { id: 5, type: 'New', title: '2024 Toyota Land Cruiser 300', price: 'Ksh 22,000,000', category: 'new', carType: 'SUV', location: 'Nairobi', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600' },
    { id: 6, type: 'Resale', title: '2017 Honda Fit Hybrid', price: 'Ksh 1,350,000', category: 'resale', carType: 'Hatchback', location: 'Eldoret', img: 'https://images.unsplash.com/photo-1590362891175-3794ef174605?auto=format&fit=crop&q=80&w=600' },
  ];

  const partners = [
    { name: 'NCBA Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Placeholder_logo.svg/100px-Placeholder_logo.svg.png' },
    { name: 'Stanbic Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Placeholder_logo.svg/100px-Placeholder_logo.svg.png' },
    { name: 'I&M Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Placeholder_logo.svg/100px-Placeholder_logo.svg.png' },
    { name: 'Heritage Insurance', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Placeholder_logo.svg/100px-Placeholder_logo.svg.png' },
  ];

  const filteredListings = activeTab === 'all' ? listings : listings.filter(item => item.category === activeTab);

  const faqs = [
    { title: "Are auction vehicles risky?", content: "We encourage inspection where available and reference documents like valuation reports to reduce surprises. Transparency is our core value." },
    { title: "How fast can I secure funds?", content: "Some partner products can be processed quickly depending on eligibility and documents. We guide you on everything needed for a fast approval." }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <header className="bg-gray-900 py-20 lg:py-32 relative text-white">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Car" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Buy. Sell. Upgrade—confidently.</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Access resale-ready vehicles and auction units sourced through trusted channels, with guidance on inspections, documentation, and financing options.
          </p>
          <a href="#listings" className="bg-corporate-blue text-white px-8 py-4 rounded-md font-bold hover:bg-blue-800 transition-all inline-block">
            View Current Inventory
          </a>
        </div>
      </header>

      {/* Partners Strip */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by Banking & Insurance Partners</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6 md:mb-0">Explore Our Units</h2>
            <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
              {['all', 'auction', 'new', 'resale'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all capitalize ${
                    activeTab === tab ? 'bg-corporate-blue text-white shadow-md' : 'text-gray-500 hover:text-corporate-blue'
                  }`}
                >
                  {tab === 'all' ? 'All Units' : `${tab} Units`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((car) => (
              <div key={car.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={car.img} alt={car.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm ${
                    car.category === 'auction' ? 'bg-red-600 text-white' : car.category === 'new' ? 'bg-green-600 text-white' : 'bg-corporate-blue text-white'
                  }`}>
                    {car.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.title}</h3>
                  <p className="text-2xl font-extrabold text-corporate-blue mb-4">{car.price}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-4 border-b">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM12 4a8 8 0 100 16 8 8 0 000-16z" /></svg>
                      {car.carType}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      {car.location}
                    </span>
                  </div>
                  <Link to="/contact" className="block w-full text-center bg-gray-900 text-white py-3 rounded-md font-bold hover:bg-corporate-blue transition-colors">
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Snapshot */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Buy From Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Vetted Units", desc: "Every car undergoes a thorough inspection before listing.", icon: "✅" },
              { title: "Ready Logbooks", desc: "No delays in transfer; we ensure all documentation is ready.", icon: "📄" },
              { title: "Financing Support", desc: "Quick matching to the right asset financing facility.", icon: "💰" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common questions (FAQ)</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-corporate-blue py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Want to finance your next car?</h2>
          <Link to="/financing" className="bg-white text-corporate-blue px-10 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors">
            Check Financing Options
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MotorVehicles;
