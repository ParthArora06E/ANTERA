import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { Hero } from "@/components/Hero";
import { OrderYourWay } from "@/components/OrderYourWay";
import { CategoryStrip } from "@/components/CategoryStrip";
import { SignatureBiryanis } from "@/components/SignatureBiryanis";
import { FeaturedBestSeller } from "@/components/FeaturedBestSeller";
import { BucketBiryani } from "@/components/BucketBiryani";
import { ExploreMenu } from "@/components/ExploreMenu";
import { SnacksChai } from "@/components/SnacksChai";
import { Combos } from "@/components/Combos";
import { Catering } from "@/components/Catering";
import { WhyChoose } from "@/components/WhyChoose";
import { Reviews } from "@/components/Reviews";
import { Desserts } from "@/components/Desserts";
import { OffersBanner } from "@/components/OffersBanner";
import { FoodGallery } from "@/components/FoodGallery";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Preloader } from "@/components/Preloader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream-bg)] relative">
      <Preloader />
      <CartDrawer />
      <TopBar />
      <Header />
      
      {/* Hero handles its own load animation for better initial paint syncing */}
      <Hero />
      
      <FadeIn>
        <OrderYourWay />
      </FadeIn>
      <FadeIn delay={0.1}>
        <CategoryStrip />
      </FadeIn>
      
      <div className="bg-white/80 backdrop-blur-md rounded-t-[40px] shadow-sm -mt-8 relative z-20 pb-10">
        <FadeIn>
          <SignatureBiryanis />
        </FadeIn>
        <FadeIn>
          <FeaturedBestSeller />
        </FadeIn>
      </div>
      
      <FadeIn>
        <BucketBiryani />
      </FadeIn>
      <FadeIn delay={0.1}>
        <ExploreMenu />
      </FadeIn>
      
      <div className="bg-white/80 backdrop-blur-md py-10">
        <FadeIn>
          <SnacksChai />
        </FadeIn>
        <FadeIn>
          <Combos />
        </FadeIn>
      </div>

      <FadeIn>
        <Catering />
      </FadeIn>
      <FadeIn>
        <WhyChoose />
      </FadeIn>
      <FadeIn delay={0.1}>
        <Reviews />
      </FadeIn>
      <FadeIn>
        <Desserts />
      </FadeIn>
      
      <div className="bg-[var(--color-brand-cream-card)] pt-10 border-t border-[var(--color-brand-gold-soft)]/20">
        <FadeIn>
          <OffersBanner />
        </FadeIn>
        <FadeIn delay={0.1}>
          <FoodGallery />
        </FadeIn>
      </div>

      <Footer />
      
      {/* Mobile Sticky Bottom Order Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-[var(--color-brand-gold-soft)]/30 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 flex items-center justify-between px-4 py-3 pb-safe">
        <div className="flex gap-4">
          <button className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-text-brown)] hover:text-[var(--color-brand-maroon-royal)] flex flex-col items-center">
            <span className="w-5 h-5 flex items-center justify-center mb-1 text-[16px]">📋</span>
            Menu
          </button>
          <button className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-text-brown)] hover:text-[var(--color-brand-maroon-royal)] flex flex-col items-center">
            <span className="w-5 h-5 flex items-center justify-center mb-1 text-[16px]">🎁</span>
            Offers
          </button>
        </div>
        <button className="btn-primary !px-6 !py-3 shadow-lg w-1/2">
          Order Now
        </button>
      </div>
    </main>
  );
}
