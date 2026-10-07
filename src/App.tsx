/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { RoyalGateEntrance } from './components/RoyalGateEntrance';
import { SacredInvitation } from './components/SacredInvitation';
import { InteractiveHeartScratch } from './components/InteractiveHeartScratch';
import { CountdownSection } from './components/CountdownSection';
import { OurStorySection } from './components/OurStorySection';
import { WeddingEventsSection } from './components/WeddingEventsSection';
import { FamilyBlessingsSection } from './components/FamilyBlessingsSection';
import { RSVPSection } from './components/RSVPSection';
import { ThankYouFooter } from './components/ThankYouFooter';
import { AudioPlayerWidget } from './components/AudioPlayerWidget';

export default function App() {
  const [hasOpenedGate, setHasOpenedGate] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf5eb] text-[#2f2f2f] font-body relative selection:bg-[#c9a227] selection:text-white">
      {/* 1. AP Forever Style Preloader */}
      <Preloader />

      {/* Floating Bottom-Right Vinyl Record Player */}
      <AudioPlayerWidget />

      <main>
        {/* 2. Royal Gate & Satin Ribbon "TAP TO BEGIN" Hero Screen */}
        <RoyalGateEntrance onOpened={() => setHasOpenedGate(true)} />

        {/* 3. Formal Sacred Wedding Invitation Letter */}
        <SacredInvitation />

        {/* 4. Interactive Heart Scratch Date Reveal */}
        <InteractiveHeartScratch />

        {/* 5. The Big Day Approaches Countdown */}
        <CountdownSection />

        {/* 6. Our Story 3-Photo Montage */}
        <OurStorySection />

        {/* 7. Wedding Events & Animated Travel Flight Path */}
        <WeddingEventsSection />

        {/* 8. With Blessings From (Family Details) */}
        <FamilyBlessingsSection />

        {/* 9. RSVP Card */}
        <RSVPSection />
      </main>

      {/* 10. Thank You Footer */}
      <ThankYouFooter />
    </div>
  );
}
