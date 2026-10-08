import React, { useState } from 'react';
import leftCouplePhoto from '../assets/images/couple/1790929960172.jpg (1).jpeg';
import rightCouplePhoto from '../assets/images/couple/1790930370008.jpg.jpeg';
import featuredCouplePhoto from '../assets/images/couple/1790930276435.jpg.jpeg';

const storyPhotos = [
  {
    src: leftCouplePhoto,
    alt: 'Surinder and Harpreet sharing a joyful moment',
  },
  {
    src: featuredCouplePhoto,
    alt: 'Surinder and Harpreet together',
  },
  {
    src: rightCouplePhoto,
    alt: 'Surinder and Harpreet seated together outdoors',
  },
];

export const OurStorySection: React.FC = () => {
  const [photos, setPhotos] = useState(storyPhotos);

  const rotatePhotos = (side: 'left' | 'right') => {
    setPhotos((currentPhotos) =>
      side === 'left'
        ? [currentPhotos[2], currentPhotos[0], currentPhotos[1]]
        : [currentPhotos[1], currentPhotos[2], currentPhotos[0]],
    );
  };

  return (
    <section className="py-16 sm:py-24 px-4 max-w-6xl mx-auto" data-purpose="our-story" id="our-story">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Photo Collage Montage */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          <div className="story-photo-stack">
            {photos.map((photo, index) => {
              const position = index === 1 ? 'center' : index === 0 ? 'left' : 'right';
              const isFeatured = position === 'center';

              return (
                <button
                  key={photo.src}
                  type="button"
                  className={`story-photo-frame story-photo-frame--${position}${isFeatured ? ' is-featured' : ''}`}
                  onClick={isFeatured ? undefined : () => rotatePhotos(position)}
                  disabled={isFeatured}
                  aria-label={isFeatured ? 'Featured couple photo' : `Move couple photo to center`}
                  aria-pressed={isFeatured}
                >
                  <img
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                    src={photo.src}
                    loading="lazy"
                  />
                </button>
              );
            })}
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
