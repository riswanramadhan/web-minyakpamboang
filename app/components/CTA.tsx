import Image from "next/image";

interface CTAProps {
  'data-aos'?: string;
}

const shopeeStoreUrl = "https://shopee.co.id/minyak.pamboang2020bpom?categoryId=100001&entryPoint=ShopByPDP&itemId=11697849304";
const whatsappUrl = `https://wa.me/6281341263588?text=${encodeURIComponent(
  "Halo Kak, saya dapat info dari website DekatLokal Minyak Pamboang Pusaka Mandar. Saya ingin bertanya tentang produk dan pemesanan."
)}`;

const CTA: React.FC<CTAProps> = ({ 'data-aos': dataAos }) => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-red-900 to-red-800 relative overflow-hidden" data-aos={dataAos}>
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Siap Merasakan Manfaatnya?
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Segera pesan Minyak Pamboang Pusaka dan rasakan khasiat alami dari warisan budaya Tanah Mandar
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href={shopeeStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg flex items-center justify-center gap-3"
            >
              <Image
                src="/shopee.png" 
                alt="Logo Shopee"
                width={1920}
                height={1080}
                loading="lazy"
                decoding="async"
                className="w-16 h-16 object-contain"
              />
              Kunjungi Toko
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 hover:bg-gray-50 font-semibold py-1 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center gap-3 border-2 border-green-400/50 hover:border-green-500/70 min-w-[180px] sm:min-w-[200px]"
            >
              <Image
                src="/whatsapp.png" 
                alt="Logo WhatsApp"
                width={1920}
                height={1080}
                loading="lazy"
                decoding="async"
                className="w-16 h-16 object-contain"
              />
              Hubungi Admin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
