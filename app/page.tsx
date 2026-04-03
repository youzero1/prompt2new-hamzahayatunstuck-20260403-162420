import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import PromoSection from '@/components/PromoSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
      <PromoSection />
      <Footer />
    </main>
  );
}
