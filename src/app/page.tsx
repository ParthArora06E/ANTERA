

import { CartDrawer } from "@/components/CartDrawer";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { FoodsWeServe } from "@/components/FoodsWeServe";

import { FoodGallery } from "@/components/FoodGallery";
import { BestDishes } from "@/components/BestDishes";
import { SushiDealsBanner } from "@/components/SushiDealsBanner";
import { Footer } from "@/components/Footer";
import { BookingSection } from "@/components/BookingSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { Preloader } from "@/components/Preloader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream-bg)] relative">
      <Preloader />
      <CartDrawer />


      
      {/* Hero handles its own load animation for better initial paint syncing */}
      <Hero />
      
      <FadeIn>
        <AboutSection />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <FoodsWeServe />
      </FadeIn>
      

      <div className="bg-white border-t border-[var(--color-brand-gold-soft)]/20">
        <FadeIn delay={0.1}>
          <SushiDealsBanner />
        </FadeIn>
        <FadeIn delay={0.1}>
          <BestDishes />
        </FadeIn>
        <FadeIn delay={0.1}>
          <FoodGallery />
        </FadeIn>
      </div>

      <BookingSection />
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
