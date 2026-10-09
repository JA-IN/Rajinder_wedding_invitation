import React from 'react';
import { Plane } from 'lucide-react';
import { coupleDetails } from '../data/weddingData';

export const TravelFlightPath: React.FC = () => {
  return (
    <div className="py-12 flex flex-col items-center justify-center select-none" data-purpose="travel-flight-path">
      {/* Top Location Crest */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#c9a227]/40 p-2 bg-[#fdfbf7] shadow-md flex items-center justify-center">
          <span className="text-3xl sm:text-4xl filter drop-shadow">🏛️</span>
        </div>
        <span className="font-heading text-xs tracking-[0.3em] uppercase text-[#6e1f2f] font-bold mt-2">
          {coupleDetails.primaryLocation}
        </span>
      </div>

      {/* Vertical Dotted Path with Moving Airplane */}
      <div className="relative h-40 sm:h-48 w-8 flex flex-col items-center justify-center my-2">
        {/* Dotted Line */}
        <div className="absolute top-0 bottom-0 w-[2px] border-r-2 border-dashed border-[#c9a227]/60" />

        {/* Animated Flying Airplane */}
        <div
          className="absolute z-10 p-1.5 rounded-full bg-[#fdfbf7] shadow-md border border-[#c9a227]/40 text-[#6e1f2f] animate-float"
          style={{
            animation: 'fly-down 4s ease-in-out infinite',
          }}
        >
          <Plane className="w-4 h-4 text-[#6e1f2f] transform rotate-180" />
        </div>

        <style>{`
          @keyframes fly-down {
            0% { top: 0%; opacity: 0.2; transform: translateY(0) scale(0.9); }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 92%; opacity: 0.2; transform: translateY(0) scale(0.9); }
          }
        `}</style>
      </div>

      {/* Bottom Destination Crest: Gurudwara Sahib */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#c9a227]/60 p-2 bg-[#fdfbf7] shadow-lg flex items-center justify-center">
          <span className="text-4xl sm:text-5xl filter drop-shadow">☬</span>
        </div>
        <span className="font-heading text-xs tracking-[0.3em] uppercase text-[#6e1f2f] font-bold mt-2">
          V.P.O Mohalla
        </span>
      
      </div>
    </div>
  );
};
