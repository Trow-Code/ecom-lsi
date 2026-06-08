import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ThreeTabCarousel from "@/components/ThreeTabCarousel";
import ShopByCategory from "@/components/ShopByCategory";
import ShopByRoom from "@/components/ShopByRoom";
import EditorialHero from "@/components/EditorialHero";
import Collections from "@/components/Collections";
import BestSellers from "@/components/BestSellers";
import FeaturedProducts from "@/components/FeaturedProducts";
import EditorialBanner from "@/components/EditorialBanner";
import PressBar from "@/components/PressBar";
import Testimonials from "@/components/Testimonials";
import OfferBanners from "@/components/OfferBanners";
import ConsultationCTA from "@/components/ConsultationCTA";
import UGCStrip from "@/components/UGCStrip";
import SEOTextBlock from "@/components/SEOTextBlock";
import TrustBadges from "@/components/TrustBadges";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <ThreeTabCarousel />
      <ShopByRoom />
      
      {/* Editorial Banner 1 - Bedroom Edit */}
      <EditorialHero
        label="The Bedroom Edit"
        headline="Where Rest Becomes Ritual"
        ctaText="Explore Bedroom"
        ctaHref="/categories/bedroom"
        imageSrc="/room_bedroom_premium.png"
      />

      <Collections />
      <ShopByCategory />
      <BestSellers />

      {/* Editorial Banner 2 - Outdoor Living */}
      <EditorialHero
        label="Outdoor Living"
        headline="Leisure Beyond Walls"
        ctaText="Shop Outdoor"
        ctaHref="/categories/outdoor"
        imageSrc="/coll_isle_of_greece_coastal_1777654870630.png"
      />

      <FeaturedProducts />
      <EditorialBanner />
      <PressBar />
      <Testimonials />
      <OfferBanners />
      <ConsultationCTA />
      <UGCStrip />
      <SEOTextBlock />
      
      {/* TRUST BADGES + TICKER rendered consecutively */}
      <TrustBadges />
      <Marquee />

      <Footer />
    </main>
  );
}
