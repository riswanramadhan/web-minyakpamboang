import Image from "next/image";
import { FaFacebookF, FaInfoCircle, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok } from 'react-icons/fa';

interface FooterProps {
  'data-aos'?: string;
}

const Footer: React.FC<FooterProps> = ({ 'data-aos': dataAos }) => {
  return (
    <footer id="kontak" className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-16 pb-8" data-aos={dataAos}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Image
              src="/logo.png"
              alt="Logo Minyak Pamboang Pusaka Mandar"
              width={1272}
              height={832}
              loading="lazy"
              decoding="async"
              className="h-20 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-blue-100 mb-6 leading-relaxed">
              Warisan asli Indonesia yang menjaga kesehatan keluarga dengan kekuatan alam.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Minyak-Pamboang-Pusaka-Mandar-100090603210553/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <div className="h-10 w-10 bg-red-900 rounded-xl flex items-center justify-center hover:bg-red-800 transition-colors duration-200 shadow-md">
                  <FaFacebookF className="w-5 h-5" />
                </div>
              </a>

              <a href="https://www.instagram.com/minyak.pamboang2020bpom/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <div className="h-10 w-10 bg-red-900 rounded-xl flex items-center justify-center hover:bg-red-800 transition-colors duration-200 shadow-md">
                  <FaInstagram className="w-5 h-5" />
                </div>
              </a>

              <a href="https://www.tiktok.com/@minyak.pamboang2020bpom?_r=1&_t=ZS-952GHA9GapQ" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-200">
                <span className="sr-only">TikTok</span>
                <div className="h-10 w-10 bg-red-900 rounded-xl flex items-center justify-center hover:bg-red-800 transition-colors duration-200 shadow-md">
                  <FaTiktok className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>

          <div className="md:mx-auto">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-blue-100 hover:text-white transition-colors duration-200">Beranda</a></li>
              <li><a href="#produk" className="text-blue-100 hover:text-white transition-colors duration-200">Produk</a></li>
              <li><a href="#cerita" className="text-blue-100 hover:text-white transition-colors duration-200">Tentang Kami</a></li>
              <li><a href="#testimoni" className="text-blue-100 hover:text-white transition-colors duration-200">Testimoni</a></li>
            </ul>
          </div>

          <div className="md:mx-auto">
            <h2 className="text-lg font-semibold mb-4">Kontak</h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <FaInfoCircle className="mr-3 mt-1 flex-shrink-0 text-white" />
                <span>Berikut no. telp dan alamat</span>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="mr-3 mt-1 flex-shrink-0 text-white" />
                <span>0813-4126-3588</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0 text-white" />
                <span>Jl. Rappocini Raya Lr. 9E No. 18, Kec. Rappocini, Kota Makassar, Sulawesi Selatan</span>
              </li>
            </ul>
          </div>

          <div className="md:mx-auto">
            <h2 className="text-lg font-semibold mb-4">Mitra Kami</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Didukung oleh mitra terpercaya kami.
            </p>
            <div className="flex flex-col items-start space-y-5">
              <Image
                src="/dekat-lokal.png"
                alt="Logo DekatLokal partner digital Minyak Pamboang Pusaka Mandar"
                width={2771}
                height={1124}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <Image
                src="/rumah-bumn.png"
                alt="Logo Rumah BUMN Makassar pendukung Minyak Pamboang Pusaka Mandar"
                width={2433}
                height={1472}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <Image
                src="/bank-bri.png"
                alt="Logo Bank BRI pendukung Minyak Pamboang Pusaka Mandar"
                width={2925}
                height={693}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-200">
          <p>
            &copy; {new Date().getFullYear()} Minyak Pamboang Pusaka Mandar. All rights reserved | Powered by{" "}
            <a
              href="https://dekatlokal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-red-100 transition-colors"
            >
              dekatlokal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
