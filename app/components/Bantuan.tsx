'use client';

import { useState } from 'react';

interface BantuanProps {
  'data-aos'?: string;
}

const Bantuan: React.FC<BantuanProps> = ({ 'data-aos': dataAos }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Apa itu minyak pamboang pusaka mandar?",
      answer: "Minyak Pamboang Pusaka Mandar adalah minyak obat tradisional/herbal yang berasal dari tanah Mandar, Sulawesi Barat, yang merupakan warisan leluhur turun-temurun dan telah digunakan sejak lama oleh masyarakat untuk membantu mengatasi berbagai masalah pada kulit.\n\nMinyak ini dikenal sebagai obat herbal pengering luka, yang biasanya digunakan untuk membantu mengeringkan luka, lecet, luka ringan, gatal-gatal, atau iritasi pada kulit. Ramuan minyak ini dibuat dari bahan-bahan alami pilihan dengan cara tradisional yang diwariskan dari generasi ke generasi.\n\nKarena berasal dari resep tradisional keluarga Mandar, Minyak Pamboang Pusaka Mandar dipercaya banyak orang sebagai minyak serbaguna untuk pertolongan pertama pada luka ringan, sekaligus menjaga kulit agar lebih cepat pulih."
    },
    {
      question: "Bagaimana cara memesan Minyak Pamboang Pusaka Mandar?",
      answer: "Cara memesan Minyak Pamboang Pusaka Mandar sangat mudah. Anda bisa melakukan pemesanan melalui Marketplace Shopee, TikTok Shop, atau langsung menghubungi kami melalui WhatsApp untuk pemesanan dan informasi lebih lanjut."
    },
    {
      question: "Apakah Minyak Pamboang Pusaka Mandar aman untuk dikonsumsi atau digunakan?",
      answer: "Minyak Pamboang Pusaka Mandar aman digunakan karena terbuat dari bahan-bahan herbal alami tanpa mengandung bahan kimia berbahaya. Produk ini juga telah bersertifikat BPOM dan Halal, sehingga lebih terjamin kualitas dan keamanannya.\n\nMinyak Pamboang Pusaka Mandar aman digunakan untuk berbagai usia, mulai dari anak-anak, remaja, dewasa hingga lansia.\n\nPenggunaannya cukup dioleskan pada bagian yang bermasalah, seperti luka ringan, lecet, atau iritasi kulit. Minyak ini dikenal sebagai obat tradisional yang dapat membantu mengeringkan luka dan merawat berbagai jenis luka ringan secara alami."
    }
  ];

  return (
    <section id="bantuan" className="py-24 bg-transparent" data-aos={dataAos}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pertanyaan Umum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban atas pertanyaan-pertanyaan yang sering ditanyakan tentang produk kami
          </p>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-green-200/50 shadow-md hover:shadow-xl hover:border-green-300/70 transition-all duration-300 relative overflow-hidden group lg:group">
              {/* Desktop glow effects */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-green-400/10 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="hidden lg:block absolute -inset-1 bg-gradient-to-r from-green-400/20 via-green-500/10 to-green-400/20 rounded-2xl opacity-0 lg:group-hover:opacity-100 blur-md transition-all duration-300"></div>
              
              {/* Mobile glow effect - always visible */}
              <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-green-400/8 via-transparent to-green-400/8 rounded-2xl"></div>
              <div className="lg:hidden absolute -inset-px bg-gradient-to-t from-green-400/15 via-transparent to-transparent rounded-2xl"></div>
              
              <div className="relative z-10">
                <button
                  className="w-full flex justify-between items-center p-8 text-left group"
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <span className="ml-4 text-green-900 text-2xl font-medium w-8 h-8 flex items-center justify-center rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div id={`faq-answer-${index}`} className="px-8 pb-8 text-gray-700 pt-2 text-lg leading-relaxed">
                    {faq.answer.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bantuan;
