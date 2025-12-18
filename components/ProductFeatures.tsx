
import React from 'react';

const ProductFeatures: React.FC = () => {
  const features = [
    {
      img: 'https://picsum.photos/seed/feature1/600/600',
      title: 'Double the Style',
      desc: 'Seamlessly reversible. Two distinct looks, one premium jacket. Engineered for versatility.',
    },
    {
      img: 'https://picsum.photos/seed/feature2/600/600',
      title: 'Ultimate Warmth',
      desc: 'High-loft synthetic down provides extreme insulation without the bulk. Stay warm in the coldest peaks.',
    },
    {
      img: 'https://picsum.photos/seed/feature3/600/600',
      title: 'Urban to Trail',
      desc: 'Designed for high-performance outdoor activities, styled for the modern urban environment.',
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">Engineered for Extremes</h2>
        <div className="w-20 h-1 bg-black mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i} className="group cursor-default">
            <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-md transition-transform duration-500 group-hover:-translate-y-2">
              <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;
