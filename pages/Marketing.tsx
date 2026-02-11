
import React from 'react';
import { Link } from 'react-router-dom';

const Marketing: React.FC = () => {
  const marketingServices = [
    {
      title: "Marketing Research",
      desc: "Understand your market, audience behavior, and opportunities through data-driven insights."
    },
    {
      title: "Digital Marketing",
      desc: "SEO, PPC, email marketing, and content strategy for consistent lead growth."
    },
    {
      title: "Social Media Marketing",
      desc: "Strategy, content, and community engagement to build brand trust and awareness."
    },
    {
      title: "Advertising",
      desc: "High-impact campaigns that communicate clearly and drive immediate action."
    },
    {
      title: "Creative Production",
      desc: "Professional photography, videography, and video editing for high-performing content."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <header className="bg-gray-900 py-20 lg:py-32 relative text-white">
        <div className="absolute inset-0 opacity-40">
           <img src="https://picsum.photos/1920/800?growth" className="w-full h-full object-cover" alt="Growth" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Marketing that grows your pipeline.</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            From research to execution, we help brands build visibility, generate leads, and convert customers through modern digital channels and strong creative.
          </p>
          <Link to="/contact" className="bg-corporate-blue text-white px-8 py-4 rounded-md font-bold hover:bg-blue-800 transition-all inline-block">
            Request a Proposal
          </Link>
        </div>
      </header>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-corporate-blue flex items-center justify-center rounded-lg mb-6 text-2xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-corporate-blue py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Want leads for cars, property, or your core business?</h2>
          <p className="mb-10 text-lg opacity-80">Let's build a strategy that works for your specific goals.</p>
          <Link to="/contact" className="bg-white text-corporate-blue px-10 py-4 rounded-md font-extrabold hover:bg-gray-100 transition-colors">
            Build My Campaign
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
