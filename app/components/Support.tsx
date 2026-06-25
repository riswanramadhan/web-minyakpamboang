import Image from "next/image";

interface SupportProps {
  'data-aos'?: string;
}

const Support: React.FC<SupportProps> = ({ 'data-aos': dataAos }) => {
  return (
    <section id="support" className="py-16 md:py-20 bg-gradient-to-b from-gray-50/50 to-white" data-aos={dataAos}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Didukung Oleh Mitra Terpercaya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Minyak Pamboang Pusaka didukung oleh mitra-mitra terpercaya seperti <strong>DekatLokal</strong> dan <strong>Rumah BUMN Makassar</strong> untuk memberikan layanan terbaik kepada pelanggan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center group">
            <div className="bg-white rounded-2xl w-64 h-40 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
              <Image
                src="/dekat-lokal.png" 
                alt="Logo DekatLokal partner digital Minyak Pamboang Pusaka Mandar"
                width={2771}
                height={1124}
                loading="lazy"
                decoding="async"
                className="object-contain h-28 w-56"
              />
            </div>
          </div>
          <div className="flex justify-center group">
            <div className="bg-white rounded-2xl w-64 h-40 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
              <Image
                src="/rumah-bumn.png" 
                alt="Logo Rumah BUMN Makassar pendukung Minyak Pamboang Pusaka Mandar"
                width={2433}
                height={1472}
                loading="lazy"
                decoding="async"
                className="object-contain h-28 w-56"
              />
            </div>
          </div>
          <div className="flex justify-center group">
            <div className="bg-white rounded-2xl w-64 h-40 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
              <Image
                src="/bank-bri.png" 
                alt="Logo Bank BRI pendukung Minyak Pamboang Pusaka Mandar"
                width={2925}
                height={693}
                loading="lazy"
                decoding="async"
                className="object-contain h-28 w-56"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
