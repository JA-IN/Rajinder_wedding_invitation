import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
// import photo01 from '../assets/images/couple/1790929960172.jpg (1).jpeg';
import photo02 from '../assets/images/couple/1790930004654.jpg.jpeg';
import photo03 from '../assets/images/couple/1790930224291.jpg (1).jpeg';
// import photo04 from '../assets/images/couple/1790930245519.jpg.jpeg';
import photo05 from '../assets/images/couple/1790930276435.jpg.jpeg';
//import photo06 from '../assets/images/couple/1790930296416.jpg.jpeg';
import photo07 from '../assets/images/couple/1790930327954.jpg.jpeg';
// import photo08 from '../assets/images/couple/1790930350180.jpg.jpeg';
// import photo09 from '../assets/images/couple/1790930370008.jpg.jpeg';
// import photo10 from '../assets/images/couple/1790930491939.jpg.jpeg';
// import photo11 from '../assets/images/couple/1790930511036.jpg.jpeg';
// import photo12 from '../assets/images/couple/1790930540943.jpg.jpeg';
// import photo13 from '../assets/images/couple/1790930557350.jpg.jpeg';
 import photo14 from '../assets/images/couple/1790930926291.jpg (1).jpeg';
 import photo15 from '../assets/images/couple/IMG_20261002_141459.jpg.jpeg';
 import photo16 from '../assets/images/couple/IMG_20261002_141528.jpg.jpeg';

const galleryPhotos = [
//  photo01,
  photo02,
  photo03,
//  photo04,
  photo05,
//  photo06,
  photo07,
//   photo08,
//   photo09,
//   photo10
//   photo11,
//   photo12,
//   photo13,
     photo14,
     photo15,
     photo16,
].map((src, index) => ({
  src,
  alt: `Surinder and Harpreet together, photo ${index + 1}`,
}));

export const CoupleGallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const swipeStartXRef = useRef<number | null>(null);

  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPhotoIndex(null);
      if (event.key === 'ArrowLeft') {
        setSelectedPhotoIndex((current) =>
          current === null ? current : (current - 1 + galleryPhotos.length) % galleryPhotos.length,
        );
      }
      if (event.key === 'ArrowRight') {
        setSelectedPhotoIndex((current) =>
          current === null ? current : (current + 1) % galleryPhotos.length,
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhotoIndex]);

  const movePhoto = (direction: -1 | 1) => {
    setSelectedPhotoIndex((current) =>
      current === null ? current : (current + direction + galleryPhotos.length) % galleryPhotos.length,
    );
  };

  return (
    <section className="couple-gallery-section" id="couple-gallery" data-purpose="couple-gallery">
      <header className="couple-gallery-header">
        <span className="couple-gallery-eyebrow">A collection of moments</span>
        <h2 className="couple-gallery-title">Our Moments</h2>
        <p className="couple-gallery-intro">
          Little glimpses of the journey that brought us here.
        </p>
      </header>

      <ScrollStack
        className="couple-gallery-stack"
        itemDistance={76}
        itemScale={0.025}
        itemStackDistance={28}
        stackPosition="18%"
        scaleEndPosition="8%"
        baseScale={0.9}
        rotationAmount={0.35}
        blurAmount={0.5}
        useWindowScroll
        paused={selectedPhotoIndex !== null}
      >
        {galleryPhotos.map((photo, index) => (
          <ScrollStackItem key={photo.src} itemClassName="couple-gallery-stack-card">
            <button
              className="couple-gallery-stack-photo"
              type="button"
              onClick={() => setSelectedPhotoIndex(index)}
              aria-label={`Open photo ${index + 1} of ${galleryPhotos.length}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              <span className="couple-gallery-stack-caption">
                {String(index + 1).padStart(2, '0')} / {String(galleryPhotos.length).padStart(2, '0')}
              </span>
            </button>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      {selectedPhotoIndex !== null && (
        <div
          className="couple-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${selectedPhotoIndex + 1} of ${galleryPhotos.length}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedPhotoIndex(null);
          }}
        >
          <button
            className="couple-gallery-control couple-gallery-close"
            type="button"
            onClick={() => setSelectedPhotoIndex(null)}
            aria-label="Close photo viewer"
            autoFocus
          >
            <X aria-hidden="true" />
          </button>
          <button
            className="couple-gallery-control couple-gallery-previous"
            type="button"
            onClick={() => movePhoto(-1)}
            aria-label="Previous photo"
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <figure className="couple-gallery-viewer">
            <img
              src={galleryPhotos[selectedPhotoIndex].src}
              alt={galleryPhotos[selectedPhotoIndex].alt}
              onPointerDown={(event) => { swipeStartXRef.current = event.clientX; }}
              onPointerUp={(event) => {
                const startX = swipeStartXRef.current;
                swipeStartXRef.current = null;
                if (startX === null) return;
                const distance = event.clientX - startX;
                if (Math.abs(distance) > 55) movePhoto(distance > 0 ? -1 : 1);
              }}
              onPointerCancel={() => { swipeStartXRef.current = null; }}
              draggable={false}
            />
            <figcaption>{selectedPhotoIndex + 1} / {galleryPhotos.length}</figcaption>
          </figure>

          <button
            className="couple-gallery-control couple-gallery-next"
            type="button"
            onClick={() => movePhoto(1)}
            aria-label="Next photo"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
};