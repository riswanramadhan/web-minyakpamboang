'use client';

import { useState } from 'react';
import { FaCheck, FaLeaf, FaStar, FaUsers } from 'react-icons/fa';

interface ProdukProps {
  'data-aos'?: string;
}

const Produk: React.FC<ProdukProps> = ({ 'data-aos': dataAos }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Multiple photos for single product
  const productImages = [
    "/produk/utama.png",
    "/produk/produk1.jpeg",
    "/produk/produk2.jpeg", 
    "/produk/produk3.jpeg"
  ];

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="produk" className="py-24 bg-gradient-to-br from-green-50/30 via-white to-transparent relative overflow-hidden" data-aos={dataAos}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-16 left-8 w-24 h-24 bg-green-200/20 rounded-full blur-3xl animate-pulse lg:hidden"></div>
        <div className="absolute bottom-16 right-8 w-32 h-32 bg-green-300/15 rounded-full blur-2xl animate-pulse lg:hidden"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-green-800 leading-tight mb-6">
            Minyak Pamboang Pusaka
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full mx-auto"></div>
          <p className="text-base md:text-lg text-gray-700 mt-6 leading-relaxed max-w-2xl mx-auto">
            Produk unggulan kami dengan kualitas terbaik dan warisan tradisi yang terjaga
          </p>
        </div>

        {/* Product Showcase */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout - Left Right */}
          <div className="hidden lg:flex lg:items-start lg:gap-12">
            {/* Left: Main Image + Thumbnails */}
            <div className="lg:w-1/2">
              {/* Main Image */}
              <div className="relative mb-6">
                {/* Glow effects for active image */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 to-green-600/30 rounded-3xl blur-2xl -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent rounded-3xl blur-xl -z-10 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-3xl blur-2xl -z-10 scale-110"></div>
                
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                  <img 
                    src={productImages[currentImageIndex]}
                    alt="Minyak Pamboang Pusaka"
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                  />
                </div>
              </div>

              {/* Thumbnail Options */}
              <div className="grid grid-cols-3 gap-3">
                {productImages.slice(0, 3).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      currentImageIndex === index 
                        ? 'border-green-500 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-green-400'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`Produk ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {currentImageIndex === index && (
                      <div className="absolute inset-0 bg-green-500/20 rounded-xl"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="lg:w-1/2 lg:pl-4">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Minyak Pamboang Pusaka
                  </h3>
                  <div className="relative">
                    <span className="text-sm font-semibold text-red-800 px-3 py-1 rounded-full bg-red-50 border border-red-200 shadow-lg relative z-10">
                      70 ml
                    </span>
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-red-600/30 rounded-full blur-md -z-10"></div>
                    <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg -z-10 scale-110"></div>
                    <div className="absolute inset-0 bg-red-400/15 rounded-full blur-xl -z-10 scale-125"></div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Produk unggulan kami yang diracik dengan resep tradisional turun temurun. 
                  Menggunakan bahan-bahan alami pilihan dari Gunung Pamboang untuk memberikan 
                  khasiat maksimal bagi kesehatan Anda.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FaLeaf className="text-green-600" />
                    </div>
                    <span className="text-gray-700">100% Herbal Alami</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCheck className="text-green-600" />
                    </div>
                    <span className="text-gray-700">BPOM Terdaftar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FaUsers className="text-green-600" />
                    </div>
                    <span className="text-gray-700">Warisan Keluarga</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FaStar className="text-green-600" />
                    </div>
                    <span className="text-gray-700">Kualitas Premium</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col items-center justify-between gap-4 pt-6 border-t border-gray-100">
                  <div className="text-center mb-4">
                    <span className="text-gray-500 text-sm block mb-1">Harga Spesial</span>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-lg text-gray-400 line-through decoration-red-500/50">Rp 135.000</span>
                      <span className="text-3xl font-bold text-red-900">Rp 75.000</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3 w-full">
                    <a href="https://shopee.co.id/Obat-Luka-Bakar-Luka-Diabetes-Luka-Jahitan-Minyak-Pamboang-Pusaka-Mandar-Asli-1-btl-70ml-i.102994650.11697849304?extraParams=%7B%22display_model_id%22%3A107382677335%2C%22model_selection_logic%22%3A3%7D" target="_blank" rel="noopener noreferrer" className="block w-full">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1 w-full flex items-center gap-3 h-16 overflow-hidden">
                        <img src="/shopee.png" alt="Shopee" className="w-20 h-20 object-contain" />
                        <span className="text-lg flex-1 text-center">Beli di Shopee</span>
                      </button>
                    </a>
                    <a href="https://wa.me/6281341263588?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Minyak%20Pamboang%2070ml" target="_blank" rel="noopener noreferrer" className="block w-full">
                      <button className="bg-white hover:bg-gray-50 text-green-600 font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1 w-full flex items-center gap-3 border-2 border-green-500 relative overflow-hidden h-16">
                        {/* Glow stroke effect */}
                        <div className="absolute inset-0 bg-green-500/20 rounded-xl blur-md -z-10"></div>
                        <div className="absolute inset-0 bg-green-400/15 rounded-xl blur-lg -z-10 scale-110"></div>
                        <div className="absolute inset-0 bg-green-300/10 rounded-xl blur-xl -z-10 scale-125"></div>
                        <img src="/whatsapp.png" alt="WhatsApp" className="w-20 h-20 object-contain relative z-10" />
                        <span className="relative z-10 text-lg flex-1 text-center">Hubungi Admin</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden flex flex-col gap-12">
            {/* Mobile: Main Image */}
            <div className="relative">
              {/* Glow effects for active image */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 to-green-600/30 rounded-3xl blur-2xl -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent rounded-3xl blur-xl -z-10 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-3xl blur-2xl -z-10 scale-110"></div>
              
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 mb-6">
                <img 
                  src={productImages[currentImageIndex]}
                  alt="Minyak Pamboang Pusaka"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Mobile: Thumbnail Options */}
              <div className="grid grid-cols-3 gap-3">
                {productImages.slice(0, 3).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      currentImageIndex === index 
                        ? 'border-green-500 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-green-400'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`Produk ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {currentImageIndex === index && (
                      <div className="absolute inset-0 bg-green-500/20 rounded-xl"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile: Product Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Minyak Pamboang Pusaka
                </h3>
                <div className="relative flex-shrink-0">
                  <span className="text-sm font-semibold text-red-800 px-3 py-1 rounded-full bg-red-50 border border-red-200 shadow-lg relative z-10">
                    70 ml
                  </span>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-red-600/30 rounded-full blur-md -z-10"></div>
                  <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg -z-10 scale-110"></div>
                  <div className="absolute inset-0 bg-red-400/15 rounded-full blur-xl -z-10 scale-125"></div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Produk unggulan kami yang diracik dengan resep tradisional turun temurun. 
                Menggunakan bahan-bahan alami pilihan dari Gunung Pamboang untuk memberikan 
                khasiat maksimal bagi kesehatan Anda.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaLeaf className="text-green-600" />
                  </div>
                  <span className="text-gray-700">100% Herbal Alami</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaCheck className="text-green-600" />
                  </div>
                  <span className="text-gray-700">BPOM Terdaftar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaUsers className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Warisan Keluarga</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaStar className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Kualitas Premium</span>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex flex-col items-center justify-between gap-4 pt-6 border-t border-gray-100">
                <div className="text-center mb-4">
                  <span className="text-gray-500 text-sm block mb-1">Harga Spesial</span>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-base text-gray-400 line-through decoration-red-500/50">Rp 135.000</span>
                    <span className="text-3xl font-bold text-red-900">Rp 75.000</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 w-full">
                  <a href="https://shopee.co.id/Obat-Luka-Bakar-Luka-Diabetes-Luka-Jahitan-Minyak-Pamboang-Pusaka-Mandar-Asli-1-btl-70ml-i.102994650.11697849304?extraParams=%7B%22display_model_id%22%3A107382677335%2C%22model_selection_logic%22%3A3%7D" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1 w-full flex items-center gap-2 h-12 overflow-hidden">
                      <img src="/shopee.png" alt="Shopee" className="w-16 h-16 object-contain" />
                      <span className="text-base">Beli di Shopee</span>
                    </button>
                  </a>
                  <a href="https://wa.me/6281341263588?text=Hai%20kak%2C%20saya%20ingin%20memesan%20Minyak%20Pamboang%2070ml" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button className="bg-white hover:bg-gray-50 text-green-600 font-semibold px-6 py-2 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1 w-full flex items-center gap-2 border-2 border-green-500 relative overflow-hidden h-12">
                      {/* Glow stroke effect */}
                      <div className="absolute inset-0 bg-green-500/20 rounded-xl blur-md -z-10"></div>
                      <div className="absolute inset-0 bg-green-400/15 rounded-xl blur-lg -z-10 scale-110"></div>
                      <div className="absolute inset-0 bg-green-300/10 rounded-xl blur-xl -z-10 scale-125"></div>
                      <img src="/whatsapp.png" alt="WhatsApp" className="w-16 h-16 object-contain relative z-10" />
                      <span className="relative z-10 text-base">Hubungi Admin</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produk;
