
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants.tsx';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">Questions?</h2>
          <p className="text-gray-500">Everything you need to know about your next favorite jacket.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="font-bold text-lg text-black">{faq.question}</span>
                {openId === faq.id ? (
                  <Minus className="w-5 h-5 text-black" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
