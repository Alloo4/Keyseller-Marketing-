
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    {
      title: "Motor Vehicle Solutions",
      text: "Access verified auction units and direct resales (SUV, Commercial, Trucks) with full documentation support.",
      link: "/motor-vehicles",
      icon: "🚗"
    },
    {
      title: "Property Solutions",
      text: "Vetted land and residential properties in strategic locations with investment-ready appraisals.",
      link: "/properties",
      icon: "🏠"
    },
    {
      title: "Financing & Advisory",
      text: "Get matched to the right facility—asset financing, LPO loans, and logbook-secured lending.",
      link: "/financing",
      icon: "💰"
    },
    {
      title: "Marketing Growth",
      text: "Digital strategy and lead generation services to help resellers and brands move assets faster.",
      link: "/marketing",
      icon: "📈"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Matching screenshot exactly */}
      <section className="relative bg-[#0a192f] text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920&brightness=30" 
            className="w-full h-full object-cover opacity-20" 
            alt="Hero Background" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                Buy & Resell <br/> Vehicles and <br/> Property—With <br/> Financing Options
              </h1>
              <p className="text-lg text-gray-300 mb-12 max-w-xl font-medium leading-relaxed">
                We connect buyers, resellers, and investors to verified cars and properties (including auction opportunities) and guide you to the right financing—so you can close deals faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/motor-vehicles" className="bg-corporate-blue hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl">
                  View Listings
                </Link>
                <Link to="/financing" className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl">
                  Get Financing
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl max-w-md ml-auto border-t-8 border-corporate-blue">
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">Need funding to close the deal?</h3>
                <p className="text-gray-600 mb-8 font-medium leading-relaxed">
                  Share your budget and preferred asset (car/property) and we’ll match you to a suitable facility and the required documents.
                </p>
                <Link to="/financing" className="block w-full text-center bg-corporate-blue text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-800 transition-all">
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-center">
            <div>
              <p className="text-3xl font-black text-corporate-blue">100+</p>
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">Verified Units</p>
            </div>
            <div>
              <p className="text-3xl font-black text-corporate-blue">Ksh 1B+</p>
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">Portfolio Value</p>
            </div>
            <div>
              <p className="text-3xl font-black text-corporate-blue">24-72h</p>
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">Closure Time</p>
            </div>
            <div>
              <p className="text-3xl font-black text-corporate-blue">8+</p>
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">Lending Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4 leading-none">Core Solutions</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Helping you source, finance, and grow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-3xl border border-transparent hover:border-corporate-blue transition-all group">
                <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm">{service.icon}</div>
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tighter mb-4">{service.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">{service.text}</p>
                <Link to={service.link} className="text-corporate-blue font-black uppercase text-[10px] tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                  Explore Now
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured CTA Strip */}
      <section className="bg-corporate-blue py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase leading-none">New auction opportunities available</h2>
          <p className="text-lg mb-12 opacity-80 font-medium leading-relaxed">
            Request our latest vehicle and property catalogue. We guide you from viewing to ownership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-corporate-blue px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-100 transition-all shadow-2xl">
              Request Catalogue
            </Link>
            <a href="https://wa.me/254711870805" className="bg-[#25D366] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1ebd53] transition-all shadow-2xl">
              WhatsApp Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
