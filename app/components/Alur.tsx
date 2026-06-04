import React from 'react';
import type { IconType } from 'react-icons';
import { FaBoxOpen, FaHome, FaMobileAlt, FaTruck } from 'react-icons/fa';

interface AlurProps {
  'data-aos'?: string;
}

const Alur: React.FC<AlurProps> = ({ 'data-aos': dataAos }) => {
  const steps = [
    {
      number: 1,
      title: "Pemesanan",
      description: "Lakukan pemesanan melalui Shopee, TikTok Shop, atau WhatsApp",
      Icon: FaMobileAlt
    },
    {
      number: 2,
      title: "Proses & Kemas",
      description: "Pesanan diproses dan dikemas dengan aman untuk pengiriman",
      Icon: FaBoxOpen
    },
    {
      number: 3,
      title: "Pengiriman",
      description: "Paket dikirim melalui kurir ekspedisi terpercaya dengan nomor resi",
      Icon: FaTruck
    },
    {
      number: 4,
      title: "Tiba di Tujuan",
      description: "Produk sampai dengan aman dalam 2-5 hari kerja",
      Icon: FaHome
    }
  ] satisfies Array<{
    number: number;
    title: string;
    description: string;
    Icon: IconType;
  }>;

  return (
    <section id="alur" className="py-24 bg-transparent" data-aos={dataAos}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Alur Pengiriman
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proses pengiriman produk Minyak Pamboang Pusaka Mandar yang aman dan terpercaya
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Connecting line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 to-gray-300 hidden lg:block"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                {/* Circle with number */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-900 to-green-800 flex items-center justify-center text-white text-xl font-bold mb-6 relative z-10 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-3xl text-green-800 mb-4 bg-white rounded-2xl shadow-md p-3 w-16 h-16 flex items-center justify-center border border-gray-100/50 group-hover:shadow-lg transition-all duration-300">
                  <step.Icon />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Shipping Information */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100/50 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Informasi Pengiriman Lengkap
          </h3>
          
          <div className="space-y-6 text-gray-700">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200/50">
              <h4 className="text-lg font-semibold text-green-900 mb-3"> Cara Pemesanan</h4>
              <p className="leading-relaxed">Pengiriman produk Minyak Pamboang Pusaka Mandar dilakukan melalui marketplace seperti Shopee dan TikTok (TikTok Shop) atau bisa juga melalui pemesanan langsung via WhatsApp.</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200/50">
              <h4 className="text-lg font-semibold text-blue-900 mb-3"> Proses Pengiriman</h4>
              <p className="leading-relaxed mb-4">Setelah pesanan masuk, produk akan segera kami kemas dengan aman lalu dikirim menggunakan jasa ekspedisi terpercaya. Paket akan diproses oleh kurir dan dikirim ke alamat pelanggan, serta bisa dilacak menggunakan nomor resi pengiriman.</p>
              <p className="leading-relaxed">Biasanya estimasi waktu pengiriman sekitar 2–5 hari kerja tergantung lokasi tujuan dan jenis layanan pengiriman yang dipilih.</p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200/50">
              <h4 className="text-lg font-semibold text-amber-900 mb-3"> Langkah Pengiriman</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3">1.</span>
                  <span>Pelanggan melakukan pemesanan melalui Shopee, TikTok Shop, atau WhatsApp.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3">2.</span>
                  <span>Pesanan diproses dan dikemas dengan aman.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3">3.</span>
                  <span>Paket diserahkan ke kurir ekspedisi.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3">4.</span>
                  <span>Pelanggan menerima nomor resi untuk melacak paket.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3">5.</span>
                  <span>Produk dikirim dan sampai ke alamat tujuan.</span>
                </li>
              </ul>
              <p className="mt-4 leading-relaxed font-medium text-amber-800">Kami selalu memastikan produk dikemas dengan baik agar sampai dengan aman di tangan Anda.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alur;
