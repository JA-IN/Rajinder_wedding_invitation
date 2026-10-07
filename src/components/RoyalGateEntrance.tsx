import React, { useState } from 'react';
import { weddingAudio } from '../utils/audioSynthesizer';
import palaceCourtyardImg from '../assets/images/palace_courtyard_1791361630055.jpg';
import goldenGateImg from '../assets/images/golden_palace_gate_1791361648939.jpg';
import { coupleDetails } from '../data/weddingData';

interface RoyalGateEntranceProps {
  onOpened: () => void;
}

export const RoyalGateEntrance: React.FC<RoyalGateEntranceProps> = ({ onOpened }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleTapToBegin = () => {
    if (hasStarted) return;
    setHasStarted(true);

    // Start background Shehnai music
    weddingAudio.play();

    // Trigger gate animation
    setTimeout(() => {
      setIsOpen(true);
      onOpened();
    }, 400);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden select-none"
      style={{ perspective: '1200px' }}
      data-purpose="royal-gate-hero"
    >
      {/* Underlying Revealed Palace Scene */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url(${palaceCourtyardImg})`,
          transform: isOpen ? 'scale(1)' : 'scale(1.12)',
        }}
      >
        {/* Palace dusk atmospheric scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#6e1f2f]/85 via-black/35 to-black/50" />
      </div>

      {/* REVEALED CONTENT (Appears once gates open) */}
      <div
        className={`relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ${
          isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6 pointer-events-none'
        }`}
      >
        {/* Sacred Ik Onkar Symbol */}
        <div className="flex flex-col items-center mb-3">
          <span className="text-4xl sm:text-5xl text-[#ffd76a] font-serif filter drop-shadow-[0_2px_12px_rgba(201,162,39,0.7)]">
            ੴ
          </span>
          <p className="font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#faf5eb]/90 font-medium mt-1">
            Ik Onkar • With the Blessings of Almighty
          </p>
        </div>

        {/* Script Couple Names matching video: Great Vibes */}
        <div className="flex flex-col items-center justify-center my-2 sm:my-4">
          <h1
            className="font-names text-6xl sm:text-8xl md:text-9xl text-[#faf5eb] leading-tight select-none"
            style={{
              textShadow:
                '0 0 15px rgba(0, 0, 0, 0.95), 0 0 35px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.6)',
              WebkitTextStroke: '0.8px rgba(255, 255, 255, 0.8)',
            }}
          >
            {coupleDetails.groom.shortName} Singh
          </h1>

          <div className="my-1 sm:my-2 flex items-center gap-4">
            <span className="w-12 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c9a227]" />
            <span
              className="font-heading text-lg sm:text-2xl text-[#faf5eb] tracking-[0.35em] uppercase font-semibold"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.7)',
              }}
            >
              WEDS
            </span>
            <span className="w-12 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c9a227]" />
          </div>

          <h1
            className="font-names text-6xl sm:text-8xl md:text-9xl text-[#faf5eb] leading-tight select-none"
            style={{
              textShadow:
                '0 0 15px rgba(0, 0, 0, 0.95), 0 0 35px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.6)',
              WebkitTextStroke: '0.8px rgba(255, 255, 255, 0.8)',
            }}
          >
            {coupleDetails.bride.shortName} Kaur
          </h1>
        </div>

        {/* Wedding Date */}
        <p className="font-heading text-xs sm:text-sm tracking-[0.3em] uppercase text-[#ffd76a] font-semibold mt-2">
          22 NOVEMBER 2026 • BATHINDA &amp; PATHRALA, PUNJAB
        </p>

        {/* Scroll Down Indicator matching the video */}
        <div className="mt-12 flex flex-col items-center">
          <a
            href="#invitation-letter"
            className="flex flex-col items-center gap-1.5 text-[#ffd76a] animate-haptic-bounce cursor-pointer group"
          >
            <span
              className="font-heading text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#ffd76a]"
              style={{
                textShadow:
                  '0 0 8px rgba(255, 215, 0, 0.9), 0 0 18px rgba(255, 215, 0, 0.7)',
              }}
            >
              SCROLL DOWN
            </span>
            <span className="text-3xl text-white font-heading leading-none filter drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]">
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* 3D SWINGING GOLDEN PALACE GATES OVERLAY */}
      <div
        className={`absolute inset-0 z-30 pointer-events-none flex transition-opacity duration-1000 ${
          isOpen ? 'opacity-0 pointer-events-none delay-500' : 'opacity-100'
        }`}
      >
        {/* Left Gate Wing */}
        <div
          className="w-1/2 h-full bg-cover bg-left relative shadow-2xl transition-transform duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${goldenGateImg})`,
            transformOrigin: 'left center',
            transform: isOpen ? 'rotateY(-85deg)' : 'rotateY(0deg)',
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right Gate Wing */}
        <div
          className="w-1/2 h-full bg-cover bg-right relative shadow-2xl transition-transform duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${goldenGateImg})`,
            transformOrigin: 'right center',
            transform: isOpen ? 'rotateY(85deg)' : 'rotateY(0deg)',
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* SATIN RIBBON & BOW WITH RED WAX SEAL */}
      {!isOpen && (
        <div
          onClick={handleTapToBegin}
          className="absolute inset-0 z-40 flex items-center justify-center cursor-pointer group select-none"
        >
          {/* Satin Ribbon Horizontal Sash across gates */}
          <div
            className={`absolute w-full h-16 sm:h-20 bg-gradient-to-r from-[#faf5eb]/80 via-[#fdfbf7] to-[#faf5eb]/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-y border-[#c9a227]/40 flex items-center justify-center transition-all duration-700 ${
              hasStarted ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'
            }`}
          >
            {/* Satin Sheen Line */}
            <div className="w-full h-[2px] bg-white/60 blur-[1px]" />
          </div>

          {/* Ribbon Tails hanging down */}
          <div
            className={`absolute top-1/2 w-48 h-44 flex justify-between pointer-events-none transition-all duration-700 ${
              hasStarted ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
            }`}
          >
            {/* Left tail */}
            <div
              className="w-14 sm:w-16 h-36 bg-gradient-to-b from-[#fdfbf7] to-[#ede2d0] shadow-xl border-x border-[#c9a227]/30"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
                transform: 'rotate(-10deg) translate(-10px, 10px)',
              }}
            />
            {/* Right tail */}
            <div
              className="w-14 sm:w-16 h-36 bg-gradient-to-b from-[#fdfbf7] to-[#ede2d0] shadow-xl border-x border-[#c9a227]/30"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
                transform: 'rotate(10deg) translate(10px, 10px)',
              }}
            />
          </div>

          {/* Central Ribbon Bow */}
          <div
            className={`relative z-10 flex flex-col items-center transition-all duration-700 ${
              hasStarted ? 'scale-0 opacity-0' : 'scale-100 opacity-100 group-hover:scale-105'
            }`}
          >
            {/* Floating TAP TO BEGIN label above the bow */}
            <div className="mb-4 sm:mb-6">
              <span
                className="font-heading text-xs sm:text-sm tracking-[0.3em] uppercase text-[#faf5eb] font-bold px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#ffd76a]/60 shadow-[0_0_15px_rgba(255,215,0,0.5)] animate-breathing-text"
              >
                TAP TO BEGIN
              </span>
            </div>

            {/* Realistic Satin Bow Loops */}
            <div className="relative flex items-center justify-center">
              {/* Left Bow Loop */}
              <div
                className="w-20 sm:w-28 h-16 sm:h-20 bg-gradient-to-br from-[#ffffff] via-[#f7f2e7] to-[#e4d7c2] rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.1),0_8px_20px_rgba(0,0,0,0.3)] border border-[#c9a227]/40 -mr-4"
                style={{
                  transform: 'rotate(-18deg) scaleX(1.1)',
                }}
              />

              {/* Right Bow Loop */}
              <div
                className="w-20 sm:w-28 h-16 sm:h-20 bg-gradient-to-bl from-[#ffffff] via-[#f7f2e7] to-[#e4d7c2] rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.1),0_8px_20px_rgba(0,0,0,0.3)] border border-[#c9a227]/40 -ml-4"
                style={{
                  transform: 'rotate(18deg) scaleX(1.1)',
                }}
              />

              {/* Red Wax Seal Center with Gold Monogram */}
              <div
                className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-[0_6px_25px_rgba(0,0,0,0.6)] cursor-pointer"
                style={{
                  background:
                    'radial-gradient(circle at 35% 35%, #9b1d2e 0%, #6e1f2f 60%, #4a0d1a 100%)',
                  boxShadow:
                    'inset 0 2px 4px rgba(255,255,255,0.4), 0 8px 25px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(201, 162, 39, 0.4)',
                }}
              >
                {/* Wax Ring Imprint */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#ffd76a]/60 flex items-center justify-center shadow-inner">
                  <span className="font-names text-xl sm:text-2xl text-[#ffd76a] font-bold filter drop-shadow">
                    SP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
