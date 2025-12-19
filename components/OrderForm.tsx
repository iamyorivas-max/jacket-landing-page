
import React, { useState } from 'react';
import { Language, translations } from '../translations.ts';

interface OrderFormProps {
  lang: Language;
}

const OrderForm: React.FC<OrderFormProps> = ({ lang }) => {
  const t = translations[lang];
  const [formData, setFormData] = useState({
    color: 'TNF Black',
    size: 'M',
    fullName: '',
    phone: '',
    address: '',
    city: 'Paris',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order received! Merci ${formData.fullName}.`);
  };

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['TNF Black', 'Summit Navy', 'Burnt Olive'];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-black tracking-tight">{t.getYourJacket}</h2>
        <div className="text-right">
          <span className="text-gray-400 line-through text-sm font-medium">$349.00</span>
          <p className="text-2xl font-black text-red-600">$249.00</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{t.selectColor}</label>
          <div className="grid grid-cols-3 gap-2">
            {colors.map(color => (
              <button
                type="button"
                key={color}
                onClick={() => setFormData({ ...formData, color })}
                className={`py-3 text-[10px] font-black uppercase rounded-lg border-2 transition-all ${
                  formData.color === color ? 'border-black bg-black text-white' : 'border-gray-100 bg-gray-50 text-gray-700 hover:border-gray-300'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{t.chooseSize}</label>
          <div className="grid grid-cols-5 gap-2">
            {sizes.map(size => (
              <button
                type="button"
                key={size}
                onClick={() => setFormData({ ...formData, size })}
                className={`py-3 text-[11px] font-black rounded-lg border-2 transition-all ${
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
            placeholder={t.fullName}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm"
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
          <input
            type="tel"
            placeholder={t.phone}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm"
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder={t.address}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm"
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
          <select
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            <option value="Paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="London">London</option>
            <option value="Dubai">Dubai</option>
            <option value="New York">New York</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-xl font-black text-lg hover:bg-gray-900 transform active:scale-[0.98] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 mt-4 uppercase tracking-widest"
        >
          {t.orderNow}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
