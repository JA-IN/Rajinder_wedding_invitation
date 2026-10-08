/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Preloader } from './components/Preloader';
import { RoyalGateEntrance } from './components/RoyalGateEntrance';
import { SacredInvitation } from './components/SacredInvitation';
import { ScratchCardSection } from './components/ScratchCardSection';
import { CountdownSection } from './components/CountdownSection';
import { OurStorySection } from './components/OurStorySection';
import { WeddingEventsSection } from './components/WeddingEventsSection';
import { CoupleGallerySection } from './components/CoupleGallerySection';
import { FamilyBlessingsSection } from './components/FamilyBlessingsSection';
import { RSVPSection } from './components/RSVPSection';
import { ThankYouFooter } from './components/ThankYouFooter';
import { AudioPlayerWidget } from './components/AudioPlayerWidget';

export default function App() {
  const [hasOpenedGate, setHasOpenedGate] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        'main > section:not(#hero), footer[data-purpose="wedding-footer"]',
      ),
    );
    sections.forEach((section) => {
      section.classList.add('scroll-reveal');

      Array.from(section.children).forEach((child, index) => {
        if (!(child instanceof HTMLElement) || child.classList.contains('scratch-ambient')) return;
        child.classList.add('scroll-reveal-item');
        child.style.setProperty('--reveal-delay', `${index * 90}ms`);
      });

      section.querySelectorAll<HTMLElement>('[data-purpose^="event-card-"]').forEach((card, index) => {
        card.classList.add('scroll-reveal-item');
        card.style.setProperty('--reveal-delay', `${index * 110}ms`);
      });
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px -5% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf5eb] text-[#2f2f2f] font-body relative selection:bg-[#c9a227] selection:text-white">
      {/* 1. AP Forever Style Preloader */}
      <Preloader />

      {/* Floating Bottom-Right Vinyl Record Player */}
      {hasOpenedGate && <AudioPlayerWidget />}

      <main>
        {/* 2. Royal Gate & Satin Ribbon "TAP TO BEGIN" Hero Screen */}
        <RoyalGateEntrance onOpened={() => setHasOpenedGate(true)} />

        {/* 3. Formal Sacred Wedding Invitation Letter */}
        <SacredInvitation />

        {/* 4. Wedding Date and Blessing Scratch Card */}
        <ScratchCardSection />

        {/* 5. The Big Day Approaches Countdown */}
        <CountdownSection />

        {/* 6. Our Story 3-Photo Montage */}
        <OurStorySection />

        {/* 7. Wedding Events & Animated Travel Flight Path */}
        <WeddingEventsSection />

        {/* 8. Couple Photo Gallery */}
        <CoupleGallerySection />

        {/* 9. With Blessings From (Family Details) */}
        <FamilyBlessingsSection />

        {/* 10. RSVP Card */}
        <RSVPSection />
      </main>

      {/* 10. Thank You Footer */}
      <ThankYouFooter />
    </div>
  );
}
