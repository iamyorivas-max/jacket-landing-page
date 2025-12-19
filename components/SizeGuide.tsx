
import React from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuide: React.FC<SizeGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeData = [
    { size: 'S', chest: '86 - 94', waist: '74 - 81', hips: '89 - 96' },
    { size: 'M', chest: '94 - 102', waist: '81 - 89', hips: '96 - 104' },
    { size: 'L', chest: '102 - 112', waist: '89 - 99', hips: '104 - 112' },
    { size: 'XL', chest: '112 - 122', waist: '99 - 109', hips: '112 - 120' },
    { size: 'XXL', chest: '122 - 132', waist: '109 - 119', hips: '120 - 128' },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-black" />
            <h3 className="text-lg font-bold uppercase tracking-tight">EU Size Guide (cm)</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-3 px-2 text-xs font-black uppercase tracking-widest text-gray-400">Size</th>
                  <th className="py-3 px-2 text-xs font-black uppercase tracking-widest text-gray-400">Chest</th>
                  <th className="py-3 px-2 text-xs font-black uppercase tracking-widest text-gray-400">Waist</th>
                  <th className="py-3 px-2 text-xs font-black uppercase tracking-widest text-gray-400">Hips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sizeData.map((row) => (
                  <tr key={row.size} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-2 font-bold text-black">{row.size}</td>
                    <td className="py-4 px-2 text-sm text-gray-600 font-medium">{row.chest} cm</td>
                    <td className="py-4 px-2 text-sm text-gray-600 font-medium">{row.waist} cm</td>
                    <td className="py-4 px-2 text-sm text-gray-600 font-medium">{row.hips} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-gray-50 p-4 rounded-xl">
            <h4 className="text-xs font-bold uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              How to measure
            </h4>
            <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
              For the most accurate fit, measure your body while wearing lightweight clothing. 
              Hold the tape measure firm but not tight. If your measurements fall between two sizes, 
              order the larger size for a looser fit or the smaller size for a tighter fit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
