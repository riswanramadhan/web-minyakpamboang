import Image from "next/image";

interface CeritaProps {
  'data-aos'?: string;
}

const Cerita: React.FC<CeritaProps> = ({ 'data-aos': dataAos }) => {
  return (
    <section id="cerita" className="py-24 bg-white" data-aos={dataAos}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Title */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-green-800 leading-tight mb-6">
            Cerita Di Balik Minyak Pamboang Pusaka
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">

          {/* Images */}
          <div className="flex justify-center gap-8">

            {/* Image 1 */}
            <div className="-translate-y-10">
              <div className="relative group">
                
                {/* Glow frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 to-green-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                {/* Image */}
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl border border-green-200">
                  <Image
                    src="/cerita2.jpg"
                    alt="Cerita warisan budaya Minyak Pamboang Pusaka Mandar"
                    width={960}
                    height={1280}
                    loading="lazy"
                    sizes="256px"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

            {/* Image 2 */}
            <div className="translate-y-10">
              <div className="relative group">

                {/* Glow frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 to-green-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                {/* Image */}
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl border border-green-200">
                  <Image
                    src="/cerita1.jpg"
                    alt="Ilustrasi warisan leluhur Minyak Pamboang Pusaka Mandar"
                    width={1280}
                    height={1240}
                    loading="lazy"
                    sizes="256px"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

            <p>
              Lebih dari sekadar produk, ini adalah warisan tradisi dan kisah yang hidup di baliknya.

              Minyak Pamboang Pusaka Mandar berasal dari Tanah Mandar, sebuah daerah yang kaya akan tradisi dan kearifan lokal. Nama “Pamboang” diambil dari sebuah wilayah perbukitan yang letaknya jauh dari permukaan laut, yaitu Gunung Pamboang.
            </p>

            <p>
              Awal mula ramuan ini berawal dari sebuah mimpi yang dialami oleh kakek kami. Dalam mimpi tersebut, beliau mendapatkan hidayah dan petunjuk untuk meracik ramuan tradisional dari bahan-bahan alami yang berasal dari alam sekitar Gunung Pamboang. Dengan keyakinan dan niat untuk membantu sesama, ramuan tersebut kemudian diracik dan digunakan sebagai obat tradisional keluarga.
            </p>

            <p>
              Seiring waktu, manfaatnya mulai dikenal oleh masyarakat sekitar dan terus diwariskan dari generasi ke generasi. Hingga kini, Minyak Pamboang Pusaka Mandar tetap dijaga keasliannya dengan mempertahankan nilai tradisi dan racikan herbal alami sebagai bentuk ikhtiar untuk memberikan manfaat bagi banyak orang.
            </p>

          </div>
        </div>


        {/* Mobile */}
        <div className="lg:hidden flex flex-col gap-16">

          {/* Content */}
          <div className="space-y-4 text-gray-700 leading-relaxed">

            <p>
              Lebih dari sekadar produk, ini adalah warisan tradisi dan kisah yang hidup di baliknya.

              Minyak Pamboang Pusaka Mandar berasal dari Tanah Mandar, sebuah daerah yang kaya akan tradisi dan kearifan lokal. Nama “Pamboang” diambil dari sebuah wilayah perbukitan yang letaknya jauh dari permukaan laut, yaitu Gunung Pamboang.
            </p>

            <p>
              Awal mula ramuan ini berawal dari sebuah mimpi yang dialami oleh kakek kami. Dalam mimpi tersebut, beliau mendapatkan hidayah dan petunjuk untuk meracik ramuan tradisional dari bahan-bahan alami yang berasal dari alam sekitar Gunung Pamboang. Dengan keyakinan dan niat untuk membantu sesama, ramuan tersebut kemudian diracik dan digunakan sebagai obat tradisional keluarga.
            </p>

            <p>
              Seiring waktu, manfaatnya mulai dikenal oleh masyarakat sekitar dan terus diwariskan dari generasi ke generasi. Hingga kini, Minyak Pamboang Pusaka Mandar tetap dijaga keasliannya dengan mempertahankan nilai tradisi dan racikan herbal alami sebagai bentuk ikhtiar untuk memberikan manfaat bagi banyak orang.
            </p>

          </div>

          {/* Images */}
          <div className="flex justify-center gap-6">

            {/* Image 1 */}
            <div className="-translate-y-8">
              <div className="relative group">

                <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 to-green-600/30 rounded-2xl blur-xl"></div>

                <div className="relative w-40 h-56 rounded-2xl overflow-hidden shadow-xl border border-green-200">
                  <Image
                    src="/cerita2.jpg"
                    alt="Cerita warisan budaya Minyak Pamboang Pusaka Mandar"
                    width={960}
                    height={1280}
                    loading="lazy"
                    sizes="160px"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

            {/* Image 2 */}
            <div className="translate-y-8">
              <div className="relative group">

                <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 to-green-600/30 rounded-2xl blur-xl"></div>

                <div className="relative w-40 h-56 rounded-2xl overflow-hidden shadow-xl border border-green-200">
                  <Image
                    src="/cerita1.jpg"
                    alt="Ilustrasi warisan leluhur Minyak Pamboang Pusaka Mandar"
                    width={1280}
                    height={1240}
                    loading="lazy"
                    sizes="160px"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Cerita;
