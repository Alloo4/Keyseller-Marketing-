
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
  images: string[];
  isNegotiable: boolean;
  theme: 'standard' | 'exclusive';
}

const PriceTag: React.FC<{ price: string }> = ({ price }) => (
  <div className="absolute -top-4 -left-4 z-20 flex flex-col items-center">
    <div className="relative w-20 h-20 flex items-center justify-center animate-pulse-slow">
      <svg className="absolute inset-0 w-full h-full text-[#cc0000] drop-shadow-xl" viewBox="0 0 100 100">
        <path fill="currentColor" d="M50 0 L58 12 L72 10 L75 25 L88 30 L85 45 L95 55 L85 65 L88 80 L75 85 L72 100 L58 98 L50 110 L42 98 L28 100 L25 85 L12 80 L15 65 L5 55 L15 45 L12 30 L25 25 L28 10 L42 12 Z" />
      </svg>
      <span className="relative text-white font-black text-sm text-center leading-none tracking-tighter">
        {price}
      </span>
    </div>
    <div className="w-[1.5px] h-6 bg-gray-400 -mt-1 shadow-sm"></div>
  </div>
);

const VehicleCard: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border flex flex-col h-full group relative ${
      vehicle.theme === 'exclusive' ? 'bg-[#f0c14b]/5 border-[#f0c14b]' : 'bg-white border-gray-100'
    }`}>
      
      <PriceTag price={vehicle.price} />

      {/* Image Gallery */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img 
          src={vehicle.images[currentImg]} 
          alt={vehicle.make} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Navigation Overlays */}
        {vehicle.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => setCurrentImg(p => (p - 1 + vehicle.images.length) % vehicle.images.length)} className="bg-black/50 text-white p-2 rounded-full backdrop-blur-md">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => setCurrentImg(p => (p + 1) % vehicle.images.length)} className="bg-black/50 text-white p-2 rounded-full backdrop-blur-md">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}

        {/* Negotiable Badge */}
        {vehicle.isNegotiable && (
          <div className="absolute bottom-4 left-4 z-10">
            <div className="bg-[#f0c14b] text-[#1a1a1a] text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-lg shadow-xl border-2 border-white">
              NEGOTIABLE
            </div>
          </div>
        )}
        
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md">
          {currentImg + 1} / {vehicle.images.length}
        </div>
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <div className="space-y-3 mb-8">
          <div className="flex items-center text-gray-900 font-black uppercase tracking-tight text-lg">
            <span className="w-2.5 h-2.5 bg-[#003366] rounded-full mr-3 shadow-sm"></span>
            {vehicle.make}
          </div>
          <div className="flex items-center text-gray-700 font-bold text-sm">
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-3"></span>
            YOM: {vehicle.yom}
          </div>
          <div className="flex items-center text-gray-700 font-bold text-sm">
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-3"></span>
            FUEL: {vehicle.fuel}
          </div>
          <div className="flex items-center text-gray-700 font-bold text-sm">
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-3"></span>
            REG NO: {vehicle.regNo}
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-4">
          <Link 
            to="/contact" 
            className={`w-full text-center py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all shadow-xl active:scale-95 ${
              vehicle.theme === 'exclusive' ? 'bg-[#1a1a1a] text-white hover:bg-[#003366]' : 'bg-[#003366] text-white hover:bg-[#002855]'
            }`}
          >
            Inquire / Book Viewing
          </Link>
          <a href="tel:+254711870805" className="text-center text-[10px] font-black text-gray-400 hover:text-[#003366] uppercase tracking-widest">
            Call: 0700 094 444
          </a>
        </div>
      </div>
    </div>
  );
};

const MotorVehicles: React.FC = () => {
  const listings: Vehicle[] = [
    { id: 1, make: 'BMW X5', yom: '2010', fuel: 'Diesel', regNo: 'KDH***M', price: '1.2M', location: 'Nairobi', isNegotiable: true, theme: 'standard', images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800'] },
    { id: 2, make: 'Mitsubishi L200', yom: '2010', fuel: 'Diesel', regNo: 'KDH***M', price: '910K', location: 'Nairobi', isNegotiable: true, theme: 'standard', images: ['https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=800'] },
    { id: 3, make: 'Mitsubishi Lorry', yom: '2014', fuel: 'Diesel', regNo: 'KCE***Q', price: '1M', location: 'Nairobi', isNegotiable: true, theme: 'standard', images: ['https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800'] },
    { id: 4, make: 'Toyota Landcruiser V6', yom: '2009', fuel: 'Petrol', regNo: 'KDC***V', price: '4.5M', location: 'Nairobi', isNegotiable: true, theme: 'standard', images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800'] },
    { id: 5, make: 'Toyota Harrier', yom: '2000', fuel: 'Petrol', regNo: 'KAX***T', price: '400K', location: 'Nairobi', isNegotiable: true, theme: 'standard', images: ['https://images.unsplash.com/photo-1621285853634-713b8dd6b5ee?auto=format&fit=crop&w=800'] },
    { id: 6, make: 'FAW Tipper', yom: '2015', fuel: 'Diesel', regNo: 'KCF***Y', price: '2.8M', location: 'Nairobi', isNegotiable: false, theme: 'exclusive', images: ['https://images.unsplash.com/photo-1586191121278-200df1d4d659?auto=format&fit=crop&w=800'] },
    { id: 7, make: 'Land Rover Discovery', yom: '2006', fuel: 'Diesel', regNo: 'KBX***U', price: '800K', location: 'Nairobi', isNegotiable: false, theme: 'exclusive', images: ['https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800'] },
    { id: 8, make: 'Toyota Dyna', yom: '2015', fuel: 'Diesel', regNo: 'KDD***P', price: '1.6M', location: 'Nairobi', isNegotiable: false, theme: 'exclusive', images: ['https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800'] },
    { id: 9, make: 'Nissan Tiida', yom: '2011', fuel: 'Petrol', regNo: 'KCS***R', price: '450K', location: 'Nairobi', isNegotiable: false, theme: 'exclusive', images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800'] },
    { id: 10, make: 'Volkswagen Passat', yom: '1999', fuel: 'Petrol', regNo: 'KAV***G', price: '350K', location: 'Nairobi', isNegotiable: false, theme: 'exclusive', images: ['https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&w=800'] },
    { id: 11, make: 'Toyota Hiace', yom: '2009', fuel: 'Petrol', regNo: 'KCG***H', price: '750K', location: 'Nairobi', isNegotiable: false, theme: 'exclusive', images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800'] },
    { id: 12, make: 'Mitsubishi Fuso', yom: '2015', fuel: 'Diesel', regNo: 'KCG***Z', price: '1.7M', location: 'Mombasa', isNegotiable: false, theme: 'exclusive', images: ['https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800'] }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#f0c14b] py-20 px-4 border-b-8 border-[#003366]">
        <div className="max-w-[1440px] mx-auto text-center md:text-left">
          <div className="inline-block bg-[#003366] text-white px-4 py-1 rounded mb-6 text-[10px] font-black uppercase tracking-[0.3em]">
            Live Inventory
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[#003366] leading-none mb-6">
            Motor Vehicle <br/> Auction Portfolio
          </h1>
          <p className="text-[#003366] font-bold text-lg max-w-2xl opacity-80">
            Secure prime motor assets at competitive prices. Verified documentation and immediate transfer facilitation.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {listings.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>

      <div className="bg-[#1a1a1a] py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">Can't see the specific <br/> unit you need?</h2>
          <p className="text-gray-400 font-medium text-lg mb-12">We source over 50+ units weekly for clients across all sectors. Tell us your budget and requirements.</p>
          <Link to="/contact" className="bg-[#f0c14b] text-[#1a1a1a] px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all shadow-2xl">
            Request Sourcing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MotorVehicles;
