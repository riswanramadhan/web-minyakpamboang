import Image from "next/image";

interface HeroProps {
  'data-aos'?: string;
}

const Hero: React.FC<HeroProps> = ({ 'data-aos': dataAos }) => {
 return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-transparent py-24" data-aos={dataAos}>
      <h1 className="sr-only">
        Minyak Pamboang Pusaka Mandar - Minyak Herbal Tradisional Warisan Tanah Mandar
      </h1>
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Full Image with Rounded Frame */}
        <div className="relative w-full h-full space-y-6">
          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-4xl mx-auto">
            <Image
              src="/hero.jpg" 
              alt="Minyak Pamboang Pusaka Mandar minyak herbal tradisional warisan Tanah Mandar"
              width={1305}
              height={816}
              preload
              sizes="(min-width: 1024px) 896px, calc(100vw - 48px)"
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Bawah Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-4xl mx-auto">
            <Image
              src="/bawahhero.png" 
              alt="Botol Minyak Pamboang Pusaka Mandar ukuran 70 ml"
              width={832}
              height={1252}
              loading="lazy"
              sizes="(min-width: 1024px) 896px, calc(100vw - 48px)"
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
