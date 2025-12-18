
import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">What Our Explorers Say</h2>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="font-bold text-lg">4.9 / 5</span>
              <span className="text-gray-400 text-sm">(1.2k+ reviews)</span>
            </div>
          </div>
          <button className="text-black font-bold uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-300 transition-all">
            View All Reviews
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white border border-gray-100 p-8 rounded-3xl relative">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed font-medium">"{review.comment}"</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-black uppercase tracking-wide">{review.name}</span>
                <span className="text-xs text-gray-400 font-bold uppercase">{review.date}</span>
              </div>
              <div className="absolute top-8 right-8 text-gray-100 -z-10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017V21H5.017Z" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
