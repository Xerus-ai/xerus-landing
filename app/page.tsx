import BackgroundFrames from '@/components/BackgroundFrames';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import Personas from '@/components/Personas';
import ProductShowcase from '@/components/ProductShowcase';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <BackgroundFrames />
      <Navbar />
      <main id="main-content">
        <Hero />
        <BentoGrid />
        <Personas />
        <ProductShowcase />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
