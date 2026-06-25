import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Support from './components/Support';
import Tagline from './components/Tagline';
import WelcomeSection from './components/WelcomeSection';
import Fitur from './components/Fitur';
import Cerita from './components/Cerita';
import Produk from './components/Produk';
import Testimoni from './components/Testimoni';
import Bantuan from './components/Bantuan';
import Alur from './components/Alur';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Support />
      <Tagline />
      <WelcomeSection />
      <Fitur />
      <Cerita />
      <Produk />
      <Testimoni />
      <Bantuan />
      <Alur />
      <CTA />
      <Footer />
    </div>
  );
}
