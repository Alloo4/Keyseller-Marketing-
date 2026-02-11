
import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';

const Financing: React.FC = () => {
  const solutions = [
    {
      title: "Business & Premium Business Loans",
      content: "From Ksh 100,000+; premium above Ksh 2M; for SMEs across many sectors."
    },
    {
      title: "LPO Loans",
      content: "Up to 70% of LPO value; self-liquidating; for suppliers and contractors."
    },
    {
      title: "Asset Financing (Vehicles/Equipment)",
      content: "New units up to 80% financing (up to 48 months); used units 40–70% depending on model/year."
    },
    {
      title: "Import Duty Financing",
      content: "Paid directly to KRA/KPA; flexible repayment for importers."
    },
    {
      title: "Logbook-secured lending (partner product)",
      content: "Documentation commonly includes ID, KRA PIN, statements, valuation, and original logbook."
    },
    {
      title: "Title deed-secured lending (partner product)",
      content: "Commonly requires original title deed plus statements and valuation."
    },
    {
      title: "Makao Poa Landlord Loan",
      content: "Secured by rental income; up to 70% financing of property value."
    },
    {
      title: "Buy-Off Loans",
      content: "Move an existing loan facility with required payoff documentation."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <header className="bg-gray-900 py-20 lg:py-32 relative text-white">
        <div className="absolute inset-0 opacity-40">
           <img src="https://picsum.photos/1920/800?finance" className="w-full h-full object-cover" alt="Finance" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Financing that helps you close deals faster.</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            We connect clients to tailored financing solutions—supporting vehicle deals, property opportunities, and business growth with the right facility and documentation checklist.
          </p>
          <Link to="/contact" className="bg-corporate-blue text-white px-8 py-4 rounded-md font-bold hover:bg-blue-800 transition-all inline-block">
            Talk to an Advisor
          </Link>
        </div>
      </header>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Key Solutions</h2>
          <Accordion items={solutions} />
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-corporate-blue p-10 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">What you’ll need</h3>
            <p className="opacity-80">General documentation checklist to get started.</p>
          </div>
          <div className="md:w-2/3 p-10 space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-corporate-blue font-bold border shadow-sm">1</div>
              <p className="text-gray-700 font-medium">6 months bank/M-Pesa statements</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-corporate-blue font-bold border shadow-sm">2</div>
              <p className="text-gray-700 font-medium">Original National ID & KRA PIN</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-corporate-blue font-bold border shadow-sm">3</div>
              <p className="text-gray-700 font-medium">Additional documents vary by specific facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Apply with the right documents—avoid delays</h2>
          <p className="mb-8 text-gray-600 text-lg">Not sure what you need? Talk to us today for a pre-qualification check.</p>
          <Link to="/contact" className="bg-corporate-blue text-white px-10 py-4 rounded-md font-extrabold hover:bg-blue-800 transition-colors">
            Start Pre-Qualification
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Financing;
