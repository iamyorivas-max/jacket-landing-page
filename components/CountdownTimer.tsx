
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-red-50 border-y border-red-100 py-10 px-4 text-center">
      <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-6 uppercase tracking-tight">
        Exclusive Offer Ends Soon!
      </h2>
      <div className="flex justify-center gap-4 md:gap-8">
        <div className="flex flex-col">
          <div className="bg-white shadow-lg rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl md:text-4xl font-extrabold text-black border-2 border-red-100">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider mt-2 text-gray-500">Hours</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-white shadow-lg rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl md:text-4xl font-extrabold text-black border-2 border-red-100">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider mt-2 text-gray-500">Minutes</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-white shadow-lg rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl md:text-4xl font-extrabold text-black border-2 border-red-100">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider mt-2 text-gray-500">Seconds</span>
        </div>
      </div>
      <p className="mt-8 text-sm text-gray-600 font-medium">
        Hurry! 94 people are looking at this offer right now.
      </p>
    </div>
  );
};

export default CountdownTimer;
