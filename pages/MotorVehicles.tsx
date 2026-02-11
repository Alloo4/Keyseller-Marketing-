
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
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Buy. Sell. Upgrade—confidently.</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Access resale-ready vehicles and auction units sourced through trusted channels, with guidance on inspections, documentation, and financing options.
          </p>
          <a href="#listings" className="bg-corporate-blue text-white px-8 py-4 rounded-md font-bold hover:bg-blue-800 transition-all inline-block shadow-lg">
            View Current Inventory
          </a>
        </div>
      </header>

      {/* Partners Strip */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">Our Financing & Asset Partners</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {partners.map((p, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src={p.logo} alt={p.name} className="h-10 mb-2" />
                <span className="text-xs font-bold text-gray-500 uppercase">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section id="listings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b pb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 md:mb-0">Explore Available Vehicles</h2>
            <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
              {['all', 'auction', 'new', 'resale'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-bold transition-all capitalize ${
                    activeTab === tab ? 'bg-corporate-blue text-white shadow-md' : 'text-gray-500 hover:text-corporate-blue'
                  }`}
                >
                  {tab === 'all' ? 'All Units' : `${tab} Units`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredListings.map((car) => (
              <div key={car.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-60 overflow-hidden">
                  <img src={car.img} alt={car.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md ${
                    car.category === 'auction' ? 'bg-red-600 text-white' : car.category === 'new' ? 'bg-emerald-600 text-white' : 'bg-corporate-blue text-white'
                  }`}>
                    {car.type}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-corporate-blue transition-colors">{car.title}</h3>
                  <p className="text-2xl font-black text-corporate-blue mb-6">{car.price}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-8 pt-4 border-t border-gray-50">
                    <span className="flex items-center font-semibold">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM12 4a8 8 0 100 16 8 8 0 000-16z" /></svg>
                      {car.carType}
                    </span>
                    <span className="flex items-center font-semibold">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      {car.location}
                    </span>
                  </div>
                  
                  <Link to="/contact" className="block w-full text-center bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-corporate-blue transition-all active:scale-95 shadow-md">
                    Inquire for Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Snapshot */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Secure Your Vehicle with Us?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Vetted Units", desc: "Every vehicle undergoes a professional inspection before being listed for sale or auction.", icon: "🛡️" },
              { title: "Ready Documents", desc: "We ensure all ownership documents are verified and ready for a smooth title transfer process.", icon: "📄" },
              { title: "Financing Support", desc: "We directly match you to the most suitable asset financing facility based on your profile.", icon: "💳" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-500">Everything you need to know about our vehicle sourcing process.</p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-corporate-blue py-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">Ready to finance your next vehicle?</h2>
          <Link to="/financing" className="bg-white text-corporate-blue px-12 py-5 rounded-xl font-black hover:bg-gray-100 transition-all inline-block shadow-2xl active:scale-95">
            Check My Financing Options
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MotorVehicles;
