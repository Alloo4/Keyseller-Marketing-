import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Vehicle {
  id: number;
  make: string;
  yom: string;
  fuel: string;
  regNo: string;
  price: string;
  location: string;
  status: string;
  images: string[];
  isNegotiable: boolean;
}

const VehicleCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full group relative">
      {/* Price Tag Overlay - Matching the Red Scalloped Circle in Flyers */}
      <div className="absolute top-4 left-4 z-20 flex flex-col items-center">
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* SVG for the scalloped price tag */}
          <svg className="absolute inset-0 w-full h-full text-red-600 drop-shadow-lg" viewBox="0 0 100 100">
            <path fill="currentColor" d="M50 0 L58 12 L72 10 L75 25 L88 30 L85 45 L95 55 L85 65 L88 80 L75 85 L72 100 L58 98 L50 110 L42 98 L28 100 L25 85 L12 80 L15 65 L5 55 L15 45 L12 30 L25 25 L28 10 L42 12 Z" transform="scale(0.9) translate(5,5)"/>
          </svg>
          <span className="relative text-white font-black text-xs text-center leading-none">
            {vehicle.price.includes('M') ? vehicle.price.split(' ')[0] : vehicle.price.split(',')[0] + 'K'}
          </span>
        </div>
        <div className="w-[1px] h-4 bg-gray-400 -mt-1"></div>
      </div>

      {/* Gallery Section */}
      <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
        <img 
          src={vehicle.images[currentImg]} 
          alt={vehicle.make} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Navigation Overlays */}
        {vehicle.images.length > 1 && (
          <>
            <button 
              onClick={() => setCurrentImg((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => setCurrentImg((prev) => (prev + 1) % vehicle.images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}

        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md z-10">
          {currentImg + 1} / {vehicle.images.length}
        </div>

        {/* Badges */}
        <div className="absolute bottom-12 left-4 flex flex-col gap-1.5 z-10">
          {vehicle.isNegotiable && (
            <div className="bg-[#f39c12] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-sm shadow-xl">
              NEGOTIABLE
            </div>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
          <ul className="space-y-2">
            <li className="flex items-center text-sm font-black text-gray-900">
              <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              {vehicle.make}
            </li>
            <li className="flex items-center text-sm font-black text-gray-900">
              <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              YOM: {vehicle.yom}
            </li>
            <li className="flex items-center text-sm font-black text-gray-900">
              <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              FUEL: {vehicle.fuel}
            </li>
            <li className="flex items-center text-sm font-black text-gray-900">
              <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
              REG NO: {vehicle.regNo}
            </li>
          </ul>
        </div>

        <div className="mt-auto">
          <div className="flex flex-col mb-4">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Asking Price</span>
             <span className="text-2xl font-black text-[#003366]">Ksh {vehicle.price}</span>
          </div>
          <Link 
            to="/contact" 
            className="block w-full text-center bg-[#003366] text-white py-4 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#002855] transition-all shadow-md active:scale-95"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const MotorVehicles: React.FC = () => {
  const listings: Vehicle[] = [
    { id: 1, make: 'BMW X5', yom: '2010', fuel: 'Diesel', regNo: 'KDH***M', price: '1.2M', location: 'Nairobi', status: 'Ready', isNegotiable: true, images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800', 'https://images.unsplash.com/photo-1556182330-ad254462e70f?auto=format&fit=crop&w=800'] },
    { id: 2, make: 'Mitsubishi L200', yom: '2010', fuel: 'Diesel', regNo: 'KDH***M', price: '910K', location: 'Kiambu Road', status: 'Ready', isNegotiable: true, images: ['https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=800', 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800'] },
    { id: 3, make: 'Mitsubishi Lorry', yom: '2014', fuel: 'Diesel', regNo: 'KCE***Q', price: '1M', location: 'Langata Road', status: 'Ready', isNegotiable: true, images: ['https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800'] },
    { id: 4, make: 'Toyota Landcruiser V6', yom: '2009', fuel: 'Petrol', regNo: 'KDC***V', price: '4.5M', location: 'Nairobi', status: 'Ready', isNegotiable: true, images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800'] },
    { id: 5, make: 'Toyota Harrier', yom: '2000', fuel: 'Petrol', regNo: 'KAX***T', price: '400K', location: 'Kiambu Road', status: 'Ready', isNegotiable: true, images: ['https://images.unsplash.com/photo-1621285853634-713b8dd6b5ee?auto=format&fit=crop&w=800'] },
    { id: 6, make: 'FAW Tipper', yom: '2015', fuel: 'Diesel', regNo: 'KCF***Y', price: '2.8M', location: 'Nairobi', status: 'Ready', isNegotiable: false, images: ['https://images.unsplash.com/photo-1586191121278-200df1d4d659?auto=format&fit=crop&w=800'] },
    { id: 7, make: 'Land Rover Discovery', yom: '2006', fuel: 'Diesel', regNo: 'KBX***U', price: '800K', location: 'Nairobi', status: 'Ready', isNegotiable: false, images: ['https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800'] },
    { id: 8, make: 'Toyota Dyna', yom: '2015', fuel: 'Diesel', regNo: 'KDD***P', price: '1.6M', location: 'Kiambu Road', status: 'Ready', isNegotiable: false, images: ['https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800'] },
    { id: 9, make: 'Nissan Tiida', yom: '2011', fuel: 'Petrol', regNo: 'KCS***R', price: '450K', location: 'Nairobi', status: 'Ready', isNegotiable: false, images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800'] },
    { id: 10, make: 'Volkswagen Passat', yom: '1999', fuel: 'Petrol', regNo: 'KAV***G', price: '350K', location: 'Kiambu Road', status: 'Ready', isNegotiable: false, images: ['https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&w=800'] },
    { id: 11, make: 'Toyota Hiace', yom: '2009', fuel: 'Petrol', regNo: 'KCG***H', price: '750K', location: 'Nairobi', status: 'Ready', isNegotiable: false, images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800'] },
    { id: 12, make: 'Mitsubishi Fuso', yom: '2015', fuel: 'Diesel', regNo: 'KCG***Z', price: '1.7M', location: 'Mombasa', status: 'Ready', isNegotiable: false, images: ['https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800'] }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#f0c14b] py-12 px-4 border-b-8 border-[#003366]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#003366] leading-none mb-2">Motor Vehicles</h1>
            <p className="text-[#003366] font-bold uppercase tracking-widest text-[11px]">Ready for Auction & Direct Resale</p>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl shadow-xl border-4 border-[#003366]">
            <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Contact for Viewings</p>
            <p className="text-xl font-black text-[#003366]">0700 094 444</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {listings.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>

      <section className="bg-[#003366] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Financing Available for all units</h2>
          <p className="text-gray-300 mb-8 font-medium">Get matched with the right asset financing facility. Up to 70% financing for used units.</p>
          <Link to="/financing" className="bg-[#f0c14b] text-[#003366] px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all shadow-xl">
            Check Eligibility
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MotorVehicles;