
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    {
      title: "Motor Vehicle Solutions",
      text: "Source resale-ready vehicles and auction units with guidance on inspections, ownership documents, and valuation references where available.",
      link: "/motor-vehicles",
      icon: "🚗"
    },
    {
      title: "Property Solutions (Resale & Auctions)",
      text: "Access vetted properties in strategic locations, with a smooth buying experience and support on documentation and appraisals.",
      link: "/properties",
      icon: "🏠"
    },
    {
      title: "Financing & Advisory",
      text: "Get matched to the right facility—business loans, LPO loans, asset financing, and secured lending options (eligibility applies).",
      link: "/financing",
      icon: "💰"
    },
    {
      title: "Marketing & Lead Generation",
      text: "Research, digital strategy, SEO, advertising campaigns, plus high-performing creative production to drive conversions.",
      link: "/marketing",
      icon: "📈"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=5" 
            className="w-full h-full object-cover opacity-30" 
            alt="Hero Background" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Buy & Resell Vehicles and Property—With Financing Options
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl">
                We connect buyers, resellers, and investors to verified cars and properties (including auction opportunities) and guide you to the right financing—so you can close deals faster and grow with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link to="/motor-vehicles" className="bg-corporate-blue hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-center transition-all">
                  View Listings
                </Link>
                <Link to="/financing" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md font-bold text-center transition-all">
                  Get Financing Help
                </Link>
              </div>
              <p className="text-sm text-gray-400">Request a catalogue or viewing schedule anytime.</p>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl max-w-md ml-auto">
                <h3 className="text-2xl font-bold mb-4">Need funding to close the deal?</h3>
                <p className="text-gray-600 mb-6">
                  Share your budget and preferred asset (car/property) and we’ll match you to a suitable facility and the required documents.
                </p>
                <Link to="/financing" className="block w-full text-center bg-corporate-blue text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-gray-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-corporate-blue">100+</p>
              <p className="text-gray-600 text-sm mt-1 uppercase font-semibold">Verified Listings</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-corporate-blue">24-72h</p>
              <p className="text-gray-600 text-sm mt-1 uppercase font-semibold">Faster Closings</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-corporate-blue">8+</p>
              <p className="text-gray-600 text-sm mt-1 uppercase font-semibold">Financing Options</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-corporate-blue">1:1</p>
              <p className="text-gray-600 text-sm mt-1 uppercase font-semibold">Support Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">One partner for assets, financing, and growth</h2>
              <p className="text-lg text-gray-600 mb-6">
                We help clients access cars and properties through direct resale and auction opportunities, supported by trusted partners and a transparent process.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Beyond listings, we guide you to practical financing solutions (business loans, LPO financing, asset financing, import duty financing, and secured lending options) and provide marketing services that drive leads and sales.
              </p>
              <Link to="/about" className="inline-flex items-center text-corporate-blue font-bold hover:underline">
                Learn More 
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group">
              <img src="https://picsum.photos/800/600?business" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Office Meeting" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">High-Impact Services That Move Deals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose what you need today—listings, funding, or growth marketing. We’ll support you end-to-end with a clear process and expert guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.text}</p>
                <Link to={service.link} className="text-corporate-blue font-semibold hover:underline flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">What makes us different</h2>
              <p className="text-lg text-gray-600">
                We focus on transparency, speed, and buyer confidence—so you can resell, invest, or expand without guesswork.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Verified sourcing", desc: "We work with reputable partners to improve reliability." },
                  { title: "Ready documentation", desc: "Ownership documents and reference reports where available." },
                  { title: "Flexible financing pathways", desc: "Multiple facilities depending on your needs and profile." },
                  { title: "Seamless experience", desc: "Clear steps, communication, and support from inquiry to completion." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block bg-corporate-blue text-white px-8 py-3 rounded-md font-bold hover:bg-blue-800 transition-colors">
                Request Catalogue
              </Link>
            </div>
            <div className="lg:mt-0">
               <img src="https://picsum.photos/600/700?luxury" className="rounded-2xl shadow-xl w-full h-auto" alt="Professional Consultation" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured CTA Strip */}
      <section className="bg-corporate-blue py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">New auction opportunities available</h2>
          <p className="text-xl mb-8 opacity-90">
            Request the latest catalogue or schedule a viewing/inspection.
          </p>
          <Link to="/contact" className="bg-white text-corporate-blue px-10 py-4 rounded-md font-extrabold hover:bg-gray-100 transition-colors">
            Request Catalogue
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
