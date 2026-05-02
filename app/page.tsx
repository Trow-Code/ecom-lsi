import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import ShopByCategory from "@/components/ShopByCategory";
import EditorialBanner from "@/components/EditorialBanner";
import ShopByRoom from "@/components/ShopByRoom";
import Social from "@/components/Social";
import UGCStrip from "@/components/UGCStrip";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShopByRoom />
      <ShopByCategory />
      <Collections />
      <FeaturedProducts />
      <EditorialBanner />
      <Social />
      <UGCStrip />
      <ConsultationCTA />
      <Marquee />
      <Footer />
    </main>
  );
}
