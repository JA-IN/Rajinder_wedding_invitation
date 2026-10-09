import React, { useEffect, useRef, useState } from 'react';

import photo02 from '../assets/images/couple/IMG_7975.JPG.jpeg';
import photo03 from '../assets/images/couple/IMG_7978.JPG.jpeg';
import photo04 from '../assets/images/couple/1790930350180.jpg.jpeg';
import photo05 from '../assets/images/couple/1790930370008.jpg.jpeg';
import photo06 from '../assets/images/couple/1790930511036.jpg.jpeg';
import photo07 from '../assets/images/couple/IMG_20261002_141459.jpg.jpeg';
import photo08 from '../assets/images/couple/IMG_20261002_141528.jpg.jpeg';

const galleryPhotos = [
  { src: photo02, alt: 'Venue-wide shot', caption: '', objectPosition: 'center' },
  { src: photo03, alt: 'Detail of the rings', caption: 'The Rings', objectPosition: 'center' },
  { src: photo04, alt: 'Bride portrait at morning light', caption: '6:42 AM', objectPosition: 'center 35%' },
  { src: photo05, alt: 'Wedding vows moment', caption: "St. Mary's Chapel", objectPosition: 'center' },
  { src: photo06, alt: 'Confetti candid moment', caption: '', objectPosition: 'center' },
  { src: photo07, alt: 'Couple during golden hour', caption: 'Golden Hour', objectPosition: 'center 25%' },
  { src: photo08, alt: 'Final walk away photo', caption: 'Surinder & Harpreet · 22 November 2026', objectPosition: 'center' },
];

export const CoupleGallerySection: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index ?? 0);
          if (entry.isIntersecting) {
            setActiveIndex(index);

            const section = entry.target as HTMLElement;
            if (reduceMotion) {
              section.classList.add('is-visible');
              return;
            }

            window.clearTimeout((section as HTMLElement & { __captionTimer?: number }).__captionTimer);
            (section as HTMLElement & { __captionTimer?: number }).__captionTimer = window.setTimeout(() => {
              section.classList.add('is-visible');
            }, 1200);
          } else {
            const section = entry.target as HTMLElement;
            section.classList.remove('is-visible');
            window.clearTimeout((section as HTMLElement & { __captionTimer?: number }).__captionTimer);
          }
        });
      },
      { threshold: 0.6 },
    );

    slideRefs.current.forEach((slide) => slide && observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nextIndex = activeIndex + 1;
    if (nextIndex < galleryPhotos.length) {
      const nextImage = new Image();
      nextImage.src = galleryPhotos[nextIndex].src;
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyScroll = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'PageDown' && event.key !== 'PageUp') return;
      const delta = event.key === 'ArrowDown' || event.key === 'PageDown' ? 1 : -1;
      const nextIndex = Math.min(galleryPhotos.length - 1, Math.max(0, activeIndex + delta));
      const target = slideRefs.current[nextIndex];
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.addEventListener('keydown', handleKeyScroll);
    return () => window.removeEventListener('keydown', handleKeyScroll);
  }, [activeIndex]);

  return (
    <section className="cinematic-gallery" id="couple-gallery" data-purpose="couple-gallery">
      <div className="cinematic-gallery__progress" aria-live="polite" aria-atomic="true">
        <span>{String(activeIndex + 1).padStart(2, '0')} / {String(galleryPhotos.length).padStart(2, '0')}</span>
      </div>

      <div className="cinematic-gallery__scroll" ref={galleryRef}>
        {galleryPhotos.map((photo, index) => (
          <article
            key={photo.src}
            className={`cinematic-gallery__slide ${index === 0 ? 'is-visible' : ''}`}
            data-index={index}
            ref={(element) => { slideRefs.current[index] = element; }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              style={{ objectPosition: photo.objectPosition }}
            />
            <div className="cinematic-gallery__scrim" />
            {photo.caption ? (
              <div className="cinematic-gallery__caption">{photo.caption}</div>
            ) : null}
          </article>
        ))}
      </div>

    </section>
  );
};