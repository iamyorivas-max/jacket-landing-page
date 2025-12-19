
import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <nav className="bg-white py-6 px-6 md:px-12 border-b border-gray-100 sticky top-[36px] md:top-[40px] z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 md:hidden">
          <Menu className="w-6 h-6 text-black" />
        </div>
        
        <div className="text-xl md:text-2xl font-black tracking-[0.2em] text-black">
          THE NORTH FACE
        </div>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-gray-500 transition-colors">Explorer</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Tech</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Series</a>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <Search className="w-5 h-5 text-black cursor-pointer hidden sm:block" />
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-5 h-5 text-black" />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
