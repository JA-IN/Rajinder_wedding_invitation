import React from 'react';
import { couplePhotos, coupleDetails } from '../data/weddingData';

export const OurStorySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 max-w-6xl mx-auto" data-purpose="our-story" id="our-story">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Photo Collage Montage */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          <div className="relative w-full max-w-md h-[460px] flex items-center justify-center">
            {/* Background Left Frame (Offset -3deg) */}
            <div className="absolute left-0 w-48 sm:w-56 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-white -rotate-3 z-10 transition-transform duration-500 hover:-rotate-1">
              <img
                alt="Surinder and Harpreet joyful moment"
                className="w-full h-full object-cover"
                src={couplePhotos.left}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Background Right Frame (Offset +3deg) */}
            <div className="absolute right-0 w-48 sm:w-56 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-white rotate-3 z-10 transition-transform duration-500 hover:rotate-1">
              <img
                alt="Surinder and Harpreet portrait"
                className="w-full h-full object-cover"
                src={couplePhotos.right}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Center Raised Highlight Frame */}
            <div className="relative z-20 w-56 sm:w-64 h-88 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#c9a227]/40 group">
              <img
                alt="Surinder and Harpreet together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={couplePhotos.center}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Right Narrative Content */}
        <div className="lg:col-span-6 space-y-6 text-left px-2 sm:px-6">
          <h2 className="font-names text-6xl sm:text-7xl md:text-8xl text-[#6e1f2f] leading-none">
            Our Story
          </h2>

          <p className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed">
            Our story did not begin with years of knowing each other. It began with two Punjabis finding each other at exactly the right time.
          </p>

          <p className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed">
            From the very beginning, we found comfort in the quiet moments, joy in the unexpected ones, and a shared love for family roots and simple laughter.
          </p>

          <p className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed">
            With the sacred blessings of our elders and the divine grace of Waheguru Ji, our families united our paths into one lifelong journey of companionship.
          </p>

          <p className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed font-medium text-[#6e1f2f]">
            As we begin this new chapter together, we feel incredibly grateful to have found in each other a best friend, a partner, and a true adventure companion.
          </p>
        </div>
      </div>
    </section>
  );
};
