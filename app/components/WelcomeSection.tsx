interface WelcomeSectionProps {
  'data-aos'?: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ 'data-aos': dataAos }) => {
  return (
    <section className="py-12 bg-gradient-to-r from-green-50 via-green-100 to-green-50" data-aos={dataAos}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-green-800 leading-tight tracking-wide">
              Selamat Datang
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-700 leading-snug">
              di website kami
            </p>
          </div>
          
          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-green-800 leading-snug">
                Kami Hadir Membantu Anda
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-green-800 leading-snug">
                Mendapatkan Pemulihan Luka
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-green-800 leading-snug">
                Cepat & Alami
              </p>
            </div>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-green-800 leading-snug">
              Untuk Kulit Kembali Halus
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-transparent px-6 py-4 rounded-lg">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-green-700 italic">
                "Penyembuhan Alami Pusaka Mandar"
              </p>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-green-700 leading-snug">
              Anda Sudah Siap?
            </p>
          </div>
          
          {/* Footer */}
          <div className="pt-6">
            <p className="text-base md:text-lg lg:text-xl font-medium text-green-600">
              Yuk, Coba Sekarang...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
