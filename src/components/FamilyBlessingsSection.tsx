import React from 'react';
import { familyBlessings } from '../data/weddingData';

export const FamilyBlessingsSection: React.FC = () => {
  return (
    <section
      id="family-blessings"
      className="mt-56 sm:mt-72 py-16 sm:py-24 px-4 max-w-3xl mx-auto text-center"
      data-purpose="family-blessings"
    >
      <div className="mb-10">
        <h2 className="font-names text-6xl sm:text-7xl md:text-8xl text-[#6e1f2f] mb-3 font-normal">
          With Blessings From
        </h2>
      </div>

      <div className="bg-[#ffffff] border border-[#c9a227]/30 rounded-2xl p-8 sm:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.05)] text-center space-y-8">
        {familyBlessings.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <span className="font-heading text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#c9a227] font-bold block">
              {item.role}
            </span>
            <p className="font-serif text-xl sm:text-2xl text-stone-800 font-semibold tracking-wide">
              {item.names}
            </p>
            {item.note && (
              <p
                className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed whitespace-pre-line"
              >
                {item.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
