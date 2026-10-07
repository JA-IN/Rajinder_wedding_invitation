import React, { useState } from 'react';
import { Sparkles, RefreshCw, Heart } from 'lucide-react';
import { coupleDetails } from '../data/weddingData';

export const ScratchCardSection: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section
      className="py-14 px-4 max-w-xl mx-auto text-center"
      data-purpose="interactive-scratch-reveal"
    >
      <div className="bg-[#FDFCF7]/95 border border-[#DFBA67]/50 rounded-3xl p-6 sm:p-9 shadow-xl relative gold-shimmer">
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#9C7A2E] font-semibold block mb-1">
          A Special Gift For Guests
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#5A1020] font-semibold mb-5">
          Tap to Reveal Bride &amp; Groom Blessing
        </h3>

        {/* Interactive Container */}
        <div className="relative w-full max-w-sm mx-auto h-52 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center border-2 border-[#DFBA67] bg-gradient-to-br from-[#FAF6EE] to-[#EDE2D0]">
          {/* Hidden Blessing Message underneath */}
          <div className="p-6 text-center z-0">
            <div className="text-[#C5A059] text-3xl mb-2 select-none animate-pulse">
              ✨ ੴ ✨
            </div>
            <p className="font-serif italic text-[#420A16] text-base sm:text-lg leading-relaxed">
              "May Waheguru bless our coming together with enduring peace, humility, and unbounded joy. Your esteemed presence and love are our greatest gift."
            </p>
            <span className="block mt-3 font-script text-2xl text-[#9C7A2E]">
              — {coupleDetails.groom.shortName} &amp; {coupleDetails.bride.shortName}
            </span>
          </div>

          {/* Golden Scratch Foil Overlay Layer */}
          <div
            id="scratch-overlay"
            onClick={() => setIsRevealed(true)}
            className={`absolute inset-0 bg-gradient-to-r from-[#C5A059] via-[#DFBA67] to-[#9C7A2E] flex flex-col items-center justify-center cursor-pointer transition-all duration-700 p-4 select-none group z-10 ${
              isRevealed ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
            }`}
          >
            <div className="w-14 h-14 rounded-full border-2 border-[#5A1020]/30 flex items-center justify-center bg-white/25 mb-3 group-hover:scale-110 transition-transform shadow-md">
              <Heart className="w-7 h-7 text-[#5A1020] fill-current" />
            </div>
            <span className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-widest text-[#420A16]">
              Tap to Reveal Blessing
            </span>
            <span className="text-[11px] text-[#5A1020]/90 font-sans mt-1.5 font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> (Click to uncover gold foil)
            </span>
          </div>
        </div>

        {/* Reset button if revealed */}
        {isRevealed && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsRevealed(false)}
              className="inline-flex items-center gap-1.5 text-xs font-cinzel tracking-wider text-[#9C7A2E] hover:text-[#5A1020] transition-colors py-1 px-3 rounded-full hover:bg-[#FAF6EE]"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Cover Foil Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
