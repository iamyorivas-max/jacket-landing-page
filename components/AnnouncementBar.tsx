
import React from 'react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-black text-white text-center py-2 px-4 text-xs md:text-sm font-semibold sticky top-0 z-50 overflow-hidden">
      <div className="flex justify-center items-center gap-2 animate-pulse">
        <span role="img" aria-label="fire">🔥</span>
        <span>Limited Stock – Free Delivery Today Only</span>
        <span role="img" aria-label="fire">🔥</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
