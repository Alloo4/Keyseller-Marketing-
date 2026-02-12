import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Property {
  id: number;
  title: string;
  acreage: string;
  price: string;
  location: string;
  negotiable: boolean;
  type: 'Residential' | 'Commercial' | 'Agricultural';
  images: string[];
  contactPerson?: string;
  phone?: string;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <img 
          src={property.images[currentImg]} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {property.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={(e) => { e.preventDefault(); setCurrentImg((prev) => (prev - 1 + property.images.length) % property.images.length); }}
              className="bg-white/80 hover:bg-white p-1.5 rounded-full shadow-lg"
            >
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setCurrentImg((prev) => (prev + 1) % property.images.length); }}
              className="bg-white/80 hover:bg-white p-1.5 rounded-full shadow-lg"
            >
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}

        <div className="absolute top-4 left-4 bg-[#003366] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-lg">
          {property.type.toUpperCase()} FOR SALE
        </div>
        {property.negotiable && (
          <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-lg">
            NEGOTIABLE
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#003366] transition-colors leading-tight">
          {property.title}
        </h3>
        
        <div className="flex items-start text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-6">
          <svg className="w-4 h-4 mr-2 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
          {property.location}
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-5 rounded-2xl mb-6">
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-400 font-bold uppercase mb-1">Acreage</span>
            <span className="text-sm font-black text-gray-800">{property.acreage}</span>
          </div>
          <div className="text-right flex flex-col">
            <span className="text-[9px] text-gray-400 font-bold uppercase mb-1">Total Cost</span>
            <span className="text-xl font-black text-[#003366]">Ksh {property.price}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-4">
          {property.contactPerson && (
             <div className="flex justify-between items-center text-[10px] font-bold text-gray-500">
               <span>Contact: {property.contactPerson}</span>
               <span>{property.phone}</span>
             </div>
          )}
          <Link 
            to="/contact" 
            className="block w-full text-center bg-[#1a1a1a] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#003366] transition-all shadow-xl active:scale-95"
          >
            Request Full Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const Properties: React.FC = () => {
  const listings: Property[] = [
    { id: 1, title: 'Mavoko Town / Joska Site', acreage: '0.1112 Acres', price: '11,000,000', location: 'Off Kagundo Road, Machakos', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 2, title: 'Prime Dagoretti Plot', acreage: '0.2125 Acres', price: '12,000,000', location: 'Dagoretti/Waithaka, Kiambu County', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 3, title: 'Ruiru Thika Road Block', acreage: '0.0519 Acres', price: '7,200,000', location: 'Hamundia Area, Murera, Kiambu', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 4, title: 'Donyo Sabuk Parcel', acreage: '0.2303 Acres', price: '1,000,000', location: 'Off Kangundo Road, Machakos', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 5, title: 'Juja Farm Investment', acreage: '0.1236 Acres', price: '900,000', location: 'Off Gatundu-Juja Road, Kiambu', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 6, title: 'Ruiru Murera (Off Thika Rd)', acreage: '0.0519 Acres', price: '5,500,000', location: 'Ruiru East Block 2, Kiambu', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 7, title: 'Ruiru Matangi Area', acreage: '0.0519 Acres', price: '3,500,000', location: 'Off Thika Road, Ruiru', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 8, title: 'Kibera Residential Block', acreage: '0.0381 Acres', price: '11,700,000', location: 'Off Joseph Kang\'ethe Road, Nairobi', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 9, title: 'Joska Kangundo Rd Site', acreage: '0.1112 Acres', price: '1,200,000', location: 'Mavoko Town, Machakos', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 10, title: 'Agricultural Ngelani Land', acreage: '4.4972 Acres', price: '2,000,000', location: 'Off Ngelani Mitamboni Rd, Machakos', negotiable: true, type: 'Agricultural', images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 11, title: 'Kyumbi Commercial Hub', acreage: '0.1038 Acres', price: '6,200,000', location: 'Off Mombasa Road, Machakos', negotiable: true, type: 'Commercial', images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 12, title: 'Kyumbi Athi River Block', acreage: '0.1077 Acres', price: '2,400,000', location: 'Off Mombasa Road, Kyumbi', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 13, title: 'Summit Kitui Commercial', acreage: 'XXXXX Acres', price: 'Contact Us', location: 'Off Kibwezi-Kitui Road, Kitui', negotiable: true, type: 'Commercial', images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 14, title: 'Kajiado Oloosuiyan Land', acreage: '4.9914 Acres', price: '4,000,000', location: 'Oloosuiyan Area, Kajiado', negotiable: true, type: 'Agricultural', images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 15, title: 'Ongata Rongai Residential', acreage: '0.1977 Acres', price: '2,000,000', location: 'Off Ole Sakunda Road, Kajiado', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 16, title: 'Chuna Estate Kitengela', acreage: '0.1883 Acres', price: '17,000,000', location: 'Kitengela, Kajiado County', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800'], contactPerson: 'Emmanuel', phone: '0711870805' },
    { id: 17, title: 'Kisaju Namanga Highway', acreage: '1.977 Acres', price: '1,500,000', location: 'Kisaju, Kajiado County', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800'], contactPerson: 'Irene/Jones', phone: '0739100164 / 0739101929' },
    { id: 18, title: 'Kitengela Milimani Estate', acreage: '0.1903 Acres', price: '11,500,000', location: 'Off Old Namanga Road, Kitengela', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800'], contactPerson: 'Irene/Jones', phone: '0739100164 / 0739101929' },
    { id: 19, title: 'Thogoto Kiambu Site', acreage: '0.126 Acres', price: '10,000,000', location: 'Thogoto Area, Kiambu County', negotiable: true, type: 'Residential', images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800'], contactPerson: 'Irene/Jones', phone: '0739100164 / 0739101929' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#1a1a1a] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            Verified <br/> Property <br/> Portfolio
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs max-w-xl">
            Prime residential, commercial and agricultural opportunities with clean titles and immediate investment potential.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listings.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>

      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-6">Can't find your ideal plot?</h2>
          <p className="text-gray-600 font-medium mb-10 leading-relaxed">We have off-market listings across Nairobi, Kiambu, and Machakos. Share your requirements and we'll source a verified property for you.</p>
          <Link to="/contact" className="bg-[#003366] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#002855] transition-all shadow-2xl active:scale-95">
            Request Off-Market Listings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Properties;