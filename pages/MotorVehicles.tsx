
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';

interface VehicleImage {
  url: string;
  alt: string;
}

interface Vehicle {
  id: number;
  make: string;
  yom: string;
  fuel: string;
  regNo: string;
  price: string;
  location: string;
  status: string;
  category: 'auction' | 'resale' | 'new';
  images: VehicleImage[];
}

const VehicleCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Multi-Image Gallery */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={vehicle.images[currentImgIndex]?.url} 
          alt={`${vehicle.make} - Photo ${currentImgIndex + 1}`} 
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        {/* Navigation Arrows */}
        {vehicle.images.length > 1 && (
          <>
            <button 
              onClick={prevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}

        {/* Counter Badge */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-md">
          {currentImgIndex + 1} / {vehicle.images.length}
        </div>

        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-lg">
            {vehicle.status}
          </span>
          <span className="bg-yellow-500 text-gray-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-lg">
            Negotiable
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-black text-gray-900 tracking-tight leading-tight uppercase">{vehicle.make}</h3>
          <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">REG: {vehicle.regNo}</span>
        </div>
        
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">YOM</span>
            <span className="text-sm font-black text-gray-700">{vehicle.yom}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Fuel</span>
            <span className="text-sm font-black text-gray-700">{vehicle.fuel}</span>
          </div>
        </div>

        <p className="text-2xl font-black text-corporate-blue mb-6">Ksh {vehicle.price}</p>
        
        <div className="flex items-center text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-6 pb-4 border-b border-gray-50">
          <svg className="w-4 h-4 mr-2 text-corporate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
          {vehicle.location}
        </div>
        
        <Link 
          to="/contact" 
          className="block w-full text-center bg-corporate-blue text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-900 transition-all shadow-md active:scale-95"
        >
          Inquire / Book Viewing
        </Link>
      </div>
    </div>
  );
};

const MotorVehicles: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Real data from user's provided sheets and images
  const listings: Vehicle[] = [
    { 
      id: 1, 
      make: 'Toyota Landcruiser V6', 
      yom: '2009', 
      fuel: 'Petrol', 
      regNo: 'KDC', 
      price: '4,500,000', 
      location: 'Ivory Motors Yard, Langata Road', 
      status: 'Ready for Auction', 
      category: 'auction',
      images: [
        { url: 'https://i.ibb.co/hR08m5f/lc1.jpg', alt: 'Front View' },
        { url: 'https://i.ibb.co/K50R6V8/lc2.jpg', alt: 'Interior' }
      ]
    },
    { 
      id: 2, 
      make: 'BMW X5', 
      yom: '2012', 
      fuel: 'Diesel', 
      regNo: 'KCQ', 
      price: '1,600,000', 
      location: 'Greypost Yard, Kiambu Road', 
      status: 'Ready for Auction', 
      category: 'auction',
      images: [
        { url: 'https://i.ibb.co/2Z5pCtf/bmw1.jpg', alt: 'Front' },
        { url: 'https://i.ibb.co/6P0L8yv/bmw2.jpg', alt: 'Rear' },
        { url: 'https://i.ibb.co/Xz9t0h4/bmw3.jpg', alt: 'Side' }
      ]
    },
    { 
      id: 3, 
      make: 'Mitsubishi Lorry (Canter)', 
      yom: '2014', 
      fuel: 'Diesel', 
      regNo: 'KCE', 
      price: '1,000,000', 
      location: 'Ivory Motors Yard, Langata Road', 
      status: 'Ready for Auction', 
      category: 'auction',
      images: [
        { url: 'https://i.ibb.co/0VvjG6r/canter1.jpg', alt: 'Front' },
        { url: 'https://i.ibb.co/GWh3tB1/canter2.jpg', alt: 'Side' },
        { url: 'https://i.ibb.co/yN0k59q/canter3.jpg', alt: 'Cargo Bed' }
      ]
    },
    { 
      id: 4, 
      make: 'Mitsubishi L200', 
      yom: '2010', 
      fuel: 'Diesel', 
      regNo: 'KDH', 
      price: '910,000', 
      location: 'Startruck Yard, Kiambu Road', 
      status: 'Ready for Auction', 
      category: 'auction',
      images: [
        { url: 'https://i.ibb.co/C0W2h2Z/l200-1.jpg', alt: 'Front' },
        { url: 'https://i.ibb.co/3s8xV8R/l200-2.jpg', alt: 'Rear' }
      ]
    },
    { 
      id: 5, 
      make: 'Toyota Harrier', 
      yom: '2000', 
      fuel: 'Petrol', 
      regNo: 'KAX', 
      price: '400,000', 
      location: 'Greypost Yard, Kiambu Road', 
      status: 'Ready for Auction', 
      category: 'auction',
      images: [
        { url: 'https://i.ibb.co/D8m3T5P/harrier1.jpg', alt: 'Front' },
        { url: 'https://i.ibb.co/YyYfG7K/harrier2.jpg', alt: 'Rear' }
      ]
    },
    { 
      id: 6, 
      make: 'Volkswagen Passat', 
      yom: '1999', 
      fuel: 'Petrol', 
      regNo: 'KAV', 
      price: '350,000', 
      location: 'Startruck Yard, Kiambu Road', 
      status: 'Ready for Auction', 
      category: 'auction',
      images: [
        { url: 'https://i.ibb.co/9V6WvF8/passat1.jpg', alt: 'Front' },
        { url: 'https://i.ibb.co/0V3z9Gv/passat2.jpg', alt: 'Rear' }
      ]
    }
  ];

  const filteredListings = activeTab === 'all' ? listings : listings.filter(item => item.category === activeTab);

  const faqs = [
    { title: "Can I inspect the vehicles before auction?", content: "Yes, we encourage all buyers to visit the specific yard (Ivory Motors, Greypost, or Startruck) during viewing hours. Contact us for the viewing schedule." },
    { title: "How does the auction process work?", content: "Our team facilitates the connection to the bidding platform. You'll need to provide your ID, KRA PIN, and sometimes a refundable deposit depending on the partner yard's terms." },
    { title: "Is financing available for auction cars?", content: "Yes, we offer asset financing solutions. For auction units, pre-approval is recommended so you can bid with confidence." }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <header className="bg-gray-900 py-24 lg:py-32 relative text-white">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Auction Cars" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-corporate-blue text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-md mb-8 shadow-xl">
            Live Auction Opportunities
          </div>
          <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">Verified Vehicle <br/> Auction Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto mb-12 font-medium opacity-80">
            Secure prime motor assets at competitive prices. Every unit in our portfolio is sourced from verified partner yards with ready documentation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#listings" className="bg-white text-gray-900 px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-gray-100 transition-all shadow-xl">
              Browse Listings
            </a>
            <Link to="/contact" className="bg-corporate-blue text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-xl">
              Request Catalogue
            </Link>
          </div>
        </div>
      </header>

      {/* Listings Section */}
      <section id="listings" className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-[#1a1a1a] tracking-tighter uppercase mb-4 leading-none">Current Inventory</h2>
              <p className="text-gray-500 font-bold text-sm uppercase tracking-wide">Showing verified units ready for auction and direct resale.</p>
            </div>
            <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
              {['all', 'auction', 'resale'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all ${
                    activeTab === tab ? 'bg-corporate-blue text-white shadow-md' : 'text-gray-400 hover:text-corporate-blue'
                  }`}
                >
                  {tab === 'all' ? 'Show All' : `${tab} Units`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredListings.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="mt-20 bg-white rounded-3xl p-10 lg:p-16 border border-gray-100 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase mb-4 leading-tight">Can't find the specific model you're looking for?</h3>
              <p className="text-gray-600 font-medium">We have over 50+ units arriving weekly across various yards in Nairobi and Mombasa. Tell us your requirements and we'll alert you the moment a match arrives.</p>
            </div>
            <Link to="/contact" className="bg-corporate-blue text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-900 transition-all shadow-2xl shrink-0">
              Set Price Alert
            </Link>
          </div>
        </div>
      </section>

      {/* Offerings Snapshot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: "Pre-Auction Inspection", desc: "Detailed photos and video walkarounds provided for every unit to help you assess condition remotely.", icon: "🔍" },
              { title: "Document Verification", desc: "We ensure KRA PIN transfers and ownership documents are cleared by our legal team before the sale.", icon: "✅" },
              { title: "Direct Yard Access", desc: "Unlike brokers, we give you direct yard addresses and contact persons for genuine viewings.", icon: "📍" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl">{item.icon}</div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">Auction Knowledge Base</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Essential information for first-time bidders.</p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-corporate-blue py-24 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter uppercase leading-none">Grow your fleet with <br/> flexible financing</h2>
          <p className="mb-12 opacity-80 text-lg font-medium">Get up to 70% financing on verified auction and resale units. We handle the paperwork, you focus on the growth.</p>
          <Link to="/financing" className="bg-white text-corporate-blue px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-100 transition-all inline-block shadow-2xl active:scale-95">
            Check Financing Eligibility
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MotorVehicles;
