import { FaLeaf, FaMagic } from 'react-icons/fa';

interface TaglineProps {
  'data-aos'?: string;
}

const Tagline: React.FC<TaglineProps> = ({ 'data-aos': dataAos }) => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-green-50/50 via-white to-transparent relative overflow-hidden" data-aos={dataAos}>
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-32 h-32 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300/15 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Desktop Layout - Left Right */}
        <div className="hidden lg:flex lg:items-center lg:gap-12 mb-12">
          {/* Left: Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-green-800 leading-tight tracking-wide mb-4">
                <span className="inline-flex items-center gap-3">
                  <FaLeaf className="text-green-700" />
                  Pusaka Mandar Terbaik
                </span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 via-green-500 to-green-400 mx-auto lg:mx-0 rounded-full animate-pulse"></div>
              
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-700 leading-snug max-w-full lg:max-w-2xl mb-4">
                Mengeringkan Luka Cepat & Sembuh Total
              </p>
              
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 text-sm md:text-base lg:text-lg font-semibold text-green-600">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Tanpa Infeksi
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse delay-300"></span>
                  Tanpa Bekas
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-600"></span>
                  100% Herbal
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <div className="relative max-w-2xl mx-auto">
              <div className="relative group">
                {/* Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-green-600/20 rounded-3xl blur-2xl -z-10 group-hover:from-green-400/40 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-3xl blur-xl -z-10 scale-110"></div>
                
                {/* Image with enhanced styling */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
                  <img 
                    src="/cewedanluka.jpg" 
                    alt="Bukti Penggunaan Minyak Pamboang - Luka Cepat Sembuh" 
                    className="w-full h-auto object-contain"
                  />
                  
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full opacity-40 animate-bounce delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden text-center space-y-8">
          {/* Mobile: Content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-green-800 leading-tight tracking-wide mb-4">
              <span className="inline-flex items-center justify-center gap-3">
                <FaLeaf className="text-green-700" />
                Pusaka Mandar Terbaik
              </span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-green-600 via-green-500 to-green-400 mx-auto rounded-full animate-pulse"></div>
            
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-700 leading-snug max-w-5xl mx-auto mb-4">
              Mengeringkan Luka Cepat & Sembuh Total
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm md:text-base lg:text-lg font-semibold text-green-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Tanpa Infeksi
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse delay-300"></span>
                Tanpa Bekas
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-600"></span>
                100% Herbal
              </span>
            </div>
          </div>
          
          {/* Mobile: Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative group">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-green-600/20 rounded-3xl blur-2xl -z-10 group-hover:from-green-400/40 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-3xl blur-xl -z-10 scale-110"></div>
              
              {/* Image with enhanced styling */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
                <img 
                  src="/cewedanluka.jpg" 
                  alt="Bukti Penggunaan Minyak Pamboang - Luka Cepat Sembuh" 
                  className="w-full h-auto object-contain"
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full opacity-40 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <a 
            href="#produk" 
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            <FaLeaf className="text-lg" />
            <span>Coba Sekarang</span>
            <FaMagic className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tagline;
