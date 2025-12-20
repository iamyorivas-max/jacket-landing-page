
import React from 'react';
import { translations as t } from '../translations.ts';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-black text-white py-2 px-4 sticky top-0 z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest animate-pulse text-center w-full">
          {t.announcement}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
