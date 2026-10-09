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
            ਸਾਡੀ ਕਹਾਣੀ ਦੀ ਸ਼ੁਰੂਆਤ ਸਾਲਾਂ ਦੀ ਜਾਣ-ਪਛਾਣ ਨਾਲ ਨਹੀਂ ਹੋਈ, ਸਗੋਂ ਦੋ ਪੰਜਾਬੀਆਂ ਦੇ ਮਿਲਣ ਨਾਲ ਹੋਈ, ਜੋ ਜ਼ਿੰਦਗੀ ਦੇ ਬਿਲਕੁਲ ਸਹੀ ਸਮੇਂ ਇੱਕ-ਦੂਜੇ ਨੂੰ ਮਿਲੇ।
          </p>

          <p className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed">
            ਸ਼ੁਰੂ ਤੋਂ ਹੀ ਅਸੀਂ ਇੱਕ-ਦੂਜੇ ਦੇ ਨਾਲ ਬਿਤਾਏ ਸ਼ਾਂਤ ਪਲਾਂ ਵਿੱਚ ਸਕੂਨ, ਅਣਕਿਆਸੇ ਪਲਾਂ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਅਤੇ ਆਪਣੇ ਪਰਿਵਾਰਕ ਵਿਰਸੇ ਤੇ ਸਾਦੇ ਜਿਹੇ ਹਾਸੇ-ਮਜ਼ਾਕ ਵਿੱਚ ਇੱਕ ਸਾਂਝ ਲੱਭੀ।
          </p>

          <p className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed">
            ਸਾਡੇ ਵੱਡਿਆਂ ਦੇ ਪਵਿੱਤਰ ਆਸ਼ੀਰਵਾਦ ਅਤੇ ਵਾਹਿਗੁਰੂ ਜੀ ਦੀ ਅਪਾਰ ਕਿਰਪਾ ਸਦਕਾ, ਸਾਡੇ ਪਰਿਵਾਰਾਂ ਨੇ ਸਾਡੇ ਰਾਹਾਂ ਨੂੰ ਇੱਕ ਕਰ ਦਿੱਤਾ ਅਤੇ ਸਾਨੂੰ ਉਮਰ ਭਰ ਦੇ ਸਾਥ ਦੇ ਇਸ ਸੁਹਣੇ ਸਫ਼ਰ ਨਾਲ ਜੋੜ ਦਿੱਤਾ।
          </p>

          <p className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed font-medium text-[#6e1f2f]">
            ਜ਼ਿੰਦਗੀ ਦੇ ਇਸ ਨਵੇਂ ਅਧਿਆਇ ਦੀ ਸ਼ੁਰੂਆਤ ਕਰਦਿਆਂ, ਅਸੀਂ ਦਿਲੋਂ ਸ਼ੁਕਰਗੁਜ਼ਾਰ ਹਾਂ ਕਿ ਸਾਨੂੰ ਇੱਕ-ਦੂਜੇ ਵਿੱਚ ਆਪਣਾ ਸਭ ਤੋਂ ਚੰਗਾ ਦੋਸਤ, ਜੀਵਨ ਸਾਥੀ ਅਤੇ ਹਰ ਨਵੇਂ ਰੋਮਾਂਚਕ ਸਫ਼ਰ ਵਿੱਚ ਸਾਥ ਨਿਭਾਉਣ ਵਾਲਾ ਹਮਸਫ਼ਰ ਮਿਲਿਆ ਹੈ। ❤
          </p>
        </div>
      </div>
    </section>
  );
};
