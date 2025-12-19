
import React from 'react';
import { RECOMMENDED_PRODUCTS } from '../constants.tsx';
import { Language, translations } from '../translations.ts';

interface RecommendedProductsProps {
  lang: Language;
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">{t.recommendedTitle}</h2>
          <div className="w-16 h-1 bg-black mt-4"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {RECOMMENDED_PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 mb-4 shadow-sm group-hover:shadow-lg transition-all duration-500">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest text-black shadow-sm">
                  {product.tag}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {t.viewProduct}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start gap-2">
              <div>
                <h3 className="text-sm font-bold text-black uppercase tracking-tight group-hover:underline underline-offset-4">{product.name}</h3>
                <p className="text-xs font-black text-gray-400 mt-1">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
