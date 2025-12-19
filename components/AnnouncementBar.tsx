
import React from 'react';
import LanguageSelector from './LanguageSelector.tsx';
import { Language, translations } from '../translations.ts';

interface AnnouncementBarProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ lang, onLangChange }) => {
  const t = translations[lang];
  return (
    <div className="bg-black text-white py-2 px-6 sticky top-0 z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest animate-pulse inline-block">
            {t.announcement}
          </p>
        </div>
        <LanguageSelector currentLang={lang} onLangChange={onLangChange} />
      </div>
    </div>
  );
};

export default AnnouncementBar;
