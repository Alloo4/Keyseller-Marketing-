
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <header className="bg-gray-50 py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8">Built on trust. Focused on results.</h1>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              We support clients with marketing strategy and execution—and we’ve expanded to offer cars and properties through direct sales and auction opportunities facilitated by partner institutions.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our promise is a smooth, transparent experience supported by strong partnerships and clear documentation guidance.
            </p>
          </div>
        </div>
      </header>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Customer-Centric", desc: "Clear communication and tailored service at every step." },
              { title: "Verified Sourcing", desc: "Transparency and reliability in all asset opportunities." },
              { title: "Practical Guidance", desc: "Helping clients make informed, low-risk decisions." }
            ].map((val, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-50 text-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                   {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience the Key-Seller difference today.</h2>
          <Link to="/contact" className="bg-corporate-blue text-white px-8 py-4 rounded-md font-bold hover:bg-blue-800 transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
