
import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar.tsx';
import Header from './components/Header.tsx';
import ProductGallery from './components/ProductGallery.tsx';
import CountdownTimer from './components/CountdownTimer.tsx';
import OrderForm from './components/OrderForm.tsx';
import ProductFeatures from './components/ProductFeatures.tsx';
import RecommendedProducts from './components/RecommendedProducts.tsx';
import Benefits from './components/Benefits.tsx';
import Reviews from './components/Reviews.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import SizeGuide from './components/SizeGuide.tsx';
import PhotoStudio from './components/PhotoStudio.tsx';
import { Language, translations } from './translations.ts';
import { PRODUCT_IMAGES as INITIAL_IMAGES } from './constants.tsx';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [images, setImages] = useState(INITIAL_IMAGES);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const t = translations[lang];

  const handleNewImage = (url: string) => {
    // Remplace la première image de la galerie par l'image générée/achetée
    const newImages = [...images];
    newImages[0] = { url, alt: 'Custom Product Shot' };
    setImages(newImages);
  };

  return (
    <div className="min-h-screen bg-white" dir={translations[lang].dir}>
      <AnnouncementBar lang={lang} onLangChange={setLang} />
      <Header />
      
      <main>
        {/* Studio IA Trigger (Admin Only - Simulation) */}
        <button 
          onClick={() => setIsStudioOpen(true)}
          className="fixed bottom-24 right-6 z-40 bg-white text-black p-4 rounded-full shadow-2xl border border-gray-100 hover:scale-110 transition-transform group"
        >
          <Sparkles className="w-6 h-6 text-purple-600 group-hover:rotate-12 transition-transform" />
          <span className="absolute right-full mr-3 bg-black text-white text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Studio IA
          </span>
        </button>

        <PhotoStudio 
          lang={lang} 
          isOpen={isStudioOpen} 
          onClose={() => setIsStudioOpen(false)} 
          onImageGenerated={handleNewImage}
        />

        {/* Product Media & Order Section (Above the Fold) */}
        <section className="max-w-7xl mx-auto py-8 md:py-16 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ProductGallery images={images} />
            
            {/* Desktop Only Description - subtle */}
            <div className="hidden lg:block mt-12 pr-12">
              <h1 className="text-5xl font-black mb-6 uppercase leading-tight">{t.productTitle}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.productDesc}
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col gap-0">
            <div className="lg:hidden mb-8">
              <h1 className="text-3xl md:text-4xl font-black mb-4 uppercase">{t.productTitle}</h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-xs font-bold text-gray-400">4.9 (1.2k+ Reviews)</span>
              </div>
            </div>
            
            <SizeGuide lang={lang} />
            <OrderForm lang={lang} />
            
            {/* Urgency Badge */}
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-center gap-4 mt-6">
              <div className="bg-orange-500 p-2 rounded-lg shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-orange-800 uppercase tracking-tight">{t.limitedTime}</p>
                <p className="text-sm text-orange-700 font-medium">{t.discountApplied}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Countdown */}
        <CountdownTimer />

        {/* Product Details & Usage */}
        <ProductFeatures />

        {/* Cross-sell Section */}
        <RecommendedProducts lang={lang} />

        {/* Trust & Benefits */}
        <Benefits />

        {/* Reviews */}
        <Reviews />

        {/* FAQ */}
        <FAQ />

        {/* Final CTA for Mobile sticky-like feel */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-30">
           <a href="#" onClick={(e) => {
             e.preventDefault();
             window.scrollTo({ top: 0, behavior: 'smooth' });
           }} className="w-full bg-black text-white py-4 rounded-full font-bold text-center block shadow-2xl shadow-black/40 uppercase tracking-widest text-sm">
             {t.claimJacket}
           </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
