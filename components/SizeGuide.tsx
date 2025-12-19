
import React from 'react';
import { Ruler } from 'lucide-react';
import { Language, translations } from '../translations.ts';

interface SizeGuideProps {
  lang: Language;
}

const SizeGuide: React.FC<SizeGuideProps> = ({ lang }) => {
  const t = translations[lang];
  const sizeData = [
    { size: 'S', chest: '86 - 94', waist: '74 - 81', hips: '89 - 96' },
    { size: 'M', chest: '94 - 102', waist: '81 - 89', hips: '96 - 104' },
    { size: 'L', chest: '102 - 112', waist: '89 - 99', hips: '104 - 112' },
    { size: 'XL', chest: '112 - 122', waist: '99 - 109', hips: '112 - 120' },
    { size: 'XXL', chest: '122 - 132', waist: '109 - 119', hips: '120 - 128' },
  ];

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-gray-200 bg-white flex items-center gap-2">
        <Ruler className="w-5 h-5 text-black" />
        <h3 className="text-sm font-black uppercase tracking-widest">{t.sizeGuideTitle}</h3>
      </div>
      
      <div className="p-4">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[300px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2 px-1 text-[10px] font-black uppercase text-gray-400">Size</th>
                <th className="py-2 px-1 text-[10px] font-black uppercase text-gray-400">{t.chest}</th>
                <th className="py-2 px-1 text-[10px] font-black uppercase text-gray-400">{t.waist}</th>
                <th className="py-2 px-1 text-[10px] font-black uppercase text-gray-400">{t.hips}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sizeData.map((row) => (
                <tr key={row.size}>
                  <td className="py-3 px-1 font-black text-xs text-black">{row.size}</td>
                  <td className="py-3 px-1 text-[11px] text-gray-600 font-bold">{row.chest}</td>
                  <td className="py-3 px-1 text-[11px] text-gray-600 font-bold">{row.waist}</td>
                  <td className="py-3 px-1 text-[11px] text-gray-600 font-bold">{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h4 className="text-[10px] font-black uppercase mb-1">{t.howToMeasure}</h4>
          <p className="text-[10px] text-gray-400 leading-tight font-medium">
            {t.measureDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
