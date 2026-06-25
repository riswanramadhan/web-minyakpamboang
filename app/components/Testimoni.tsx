'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface TestimoniProps {
  'data-aos'?: string;
}

const Testimoni: React.FC<TestimoniProps> = ({ 'data-aos': dataAos }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 12 testimonial photos
  const testimonialPhotos = [
    "/testimoni/testimoni1.jpeg",
    "/testimoni/testimoni2.jpeg", 
    "/testimoni/testimoni3.jpeg",
    "/testimoni/testimoni4.jpeg",
    "/testimoni/testimoni5.jpeg",
    "/testimoni/testimoni6.jpeg",
    "/testimoni/testimoni7.jpeg",
    "/testimoni/testimoni8.jpeg",
    "/testimoni/testimoni9.jpeg",
    "/testimoni/testimoni10.jpeg",
    "/testimoni/testimoni11.jpeg",
    "/testimoni/testimoni12.jpeg"
  ];

  const openImage = (photo: string) => {
    setSelectedImage(photo);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="testimoni" className="py-24 bg-transparent" data-aos={dataAos}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Testimoni
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kisah nyata dari pelanggan yang telah merasakan manfaat Minyak Pamboang
          </p>
        </div>
        
        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {testimonialPhotos.map((photo, index) => (
            <div 
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden border-2 border-green-300/60 shadow-lg group"
            >
              <Image
                src={photo}
                alt={`Dokumentasi testimoni pelanggan Minyak Pamboang Pusaka Mandar ${index + 1}`}
                width={1080}
                height={1080}
                loading="lazy"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                decoding="async"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with clickable button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <button
                    type="button"
                    onClick={() => openImage(photo)}
                    className="w-full bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center hover:bg-white hover:scale-105 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <span className="text-sm font-semibold text-gray-900">Lihat Testimoni</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional text */}
        <div className="text-center mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/50 shadow-lg">
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
              <span className="inline-flex items-center justify-center gap-3">
                <FaStar className="text-yellow-500" />
                <span>Dan masih banyak lainnya!</span>
              </span>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ribuan pelanggan telah merasakan manfaat Minyak Pamboang Pusaka Mandar dan berbagi kisah kesembuhan mereka. 
              Bergabunglah dengan mereka yang telah menemukan solusi alami untuk berbagai masalah kulit!
            </p>
            <div className="mt-6 flex justify-center">
              <button 
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Rasakan Juga Manfaatnya
              </button>
            </div>
          </div>
        </div>

        {/* Modal for full image view */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center animate-scaleIn">
              {/* Close button */}
              <button
                type="button"
                onClick={closeImage}
                aria-label="Tutup gambar testimoni"
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10 animate-slideDown"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image container - auto size */}
              <Image
                src={selectedImage}
                alt="Dokumentasi testimoni pelanggan Minyak Pamboang Pusaka Mandar"
                width={1080}
                height={1080}
                loading="lazy"
                sizes="100vw"
                decoding="async"
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimoni;

// CSS Animations for smooth transitions - SSR Safe
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out;
    }
    
    .animate-scaleIn {
      animation: scaleIn 0.4s ease-out;
    }
    
    .animate-slideDown {
      animation: slideDown 0.5s ease-out 0.2s both;
    }
  `;
  document.head.appendChild(style);
}
