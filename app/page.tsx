import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import ShopByCategory from "@/components/ShopByCategory";
import EditorialBanner from "@/components/EditorialBanner";
import ShopByRoom from "@/components/ShopByRoom";
import UGCStrip from "@/components/UGCStrip";
import ConsultationCTA from "@/components/ConsultationCTA";
import OfferBanners from "@/components/OfferBanners";
import FullWidthBanner from "@/components/FullWidthBanner";
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
      <OfferBanners />
      <FullWidthBanner />
      <EditorialBanner />
      <UGCStrip />
      <ConsultationCTA />
      <Marquee />
      <Footer />
    </main>
  );
}
