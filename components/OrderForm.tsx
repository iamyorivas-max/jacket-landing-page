
import React, { useState } from 'react';
import { Ruler } from 'lucide-react';
import SizeGuide from './SizeGuide.tsx';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    color: 'TNF Black',
    size: 'M',
    fullName: '',
    phone: '',
    address: '',
    city: 'London',
  });

  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order received! Thank you ${formData.fullName}. We will contact you at ${formData.phone}.`);
  };

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['TNF Black', 'Summit Navy', 'Burnt Olive'];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 relative">
      <SizeGuide 
        isOpen={isSizeGuideOpen} 
        onClose={() => setIsSizeGuideOpen(false)} 
      />
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-black tracking-tight">Get Your Jacket</h2>
        <div className="text-right">
          <span className="text-gray-400 line-through text-sm font-medium">$349.00</span>
          <p className="text-2xl font-black text-red-600">$249.00</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Select Color</label>
          <div className="grid grid-cols-3 gap-2">
            {colors.map(color => (
              <button
                type="button"
                key={color}
                onClick={() => setFormData({ ...formData, color })}
                className={`py-3 text-xs font-bold rounded-lg border-2 transition-all ${
                  formData.color === color ? 'border-black bg-black text-white' : 'border-gray-100 bg-gray-50 text-gray-700 hover:border-gray-300'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Choose Size</label>
            <button 
              type="button"
              onClick={() => setIsSizeGuideOpen(true)}
              className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
            >
              <Ruler className="w-3 h-3" />
              Size Guide
            </button>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {sizes.map(size => (
              <button
                type="button"
                key={size}
                onClick={() => setFormData({ ...formData, size })}
                className={`py-3 text-xs font-bold rounded-lg border-2 transition-all ${
                  formData.size === size ? 'border-black bg-black text-white' : 'border-gray-100 bg-gray-50 text-gray-700 hover:border-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-gray-50">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Full Address"
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
          <select
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transform active:scale-[0.98] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 mt-4"
        >
          ORDER NOW
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <p className="text-center text-[10px] text-gray-400 mt-2 uppercase font-semibold">
          Secure encrypted checkout. Fast Worldwide Delivery.
        </p>
      </form>
    </div>
  );
};

export default OrderForm;
