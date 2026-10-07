import React, { useState, useEffect } from 'react';
import { coupleDetails } from '../data/weddingData';

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const target = new Date(coupleDetails.targetIsoDate).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0'),
        });
      } else {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
      }
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-14 sm:py-20 px-4 max-w-5xl mx-auto text-center"
      data-purpose="wedding-countdown"
    >
      {/* Header in Great Vibes script matching the video */}
      <h2 className="font-names text-6xl sm:text-7xl md:text-8xl text-[#6e1f2f] mb-8 font-normal">
        The Big Day Approaches
      </h2>

      {/* 4 Countdown Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
        {/* Days */}
        <div className="bg-[#ffffff] border border-[#c9a227]/30 rounded-xl p-5 sm:p-7 shadow-[0_8px_25px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center">
          <span className="font-serif text-4xl sm:text-6xl text-[#c9a227] font-light tabular-nums leading-tight">
            {timeLeft.days}
          </span>
          <span className="font-heading text-[10px] sm:text-xs text-stone-400 tracking-[0.25em] uppercase mt-2 font-medium">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="bg-[#ffffff] border border-[#c9a227]/30 rounded-xl p-5 sm:p-7 shadow-[0_8px_25px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center">
          <span className="font-serif text-4xl sm:text-6xl text-[#c9a227] font-light tabular-nums leading-tight">
            {timeLeft.hours}
          </span>
          <span className="font-heading text-[10px] sm:text-xs text-stone-400 tracking-[0.25em] uppercase mt-2 font-medium">
            Hours
          </span>
        </div>

        {/* Minutes */}
        <div className="bg-[#ffffff] border border-[#c9a227]/30 rounded-xl p-5 sm:p-7 shadow-[0_8px_25px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center">
          <span className="font-serif text-4xl sm:text-6xl text-[#c9a227] font-light tabular-nums leading-tight">
            {timeLeft.minutes}
          </span>
          <span className="font-heading text-[10px] sm:text-xs text-stone-400 tracking-[0.25em] uppercase mt-2 font-medium">
            Minutes
          </span>
        </div>

        {/* Seconds */}
        <div className="bg-[#ffffff] border border-[#c9a227]/30 rounded-xl p-5 sm:p-7 shadow-[0_8px_25px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center">
          <span className="font-serif text-4xl sm:text-6xl text-[#c9a227] font-light tabular-nums leading-tight">
            {timeLeft.seconds}
          </span>
          <span className="font-heading text-[10px] sm:text-xs text-stone-400 tracking-[0.25em] uppercase mt-2 font-medium">
            Seconds
          </span>
        </div>
      </div>
    </section>
  );
};
