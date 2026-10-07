import React, { useState } from 'react';
import { coupleDetails } from '../data/weddingData';
import { weddingAudio } from '../utils/audioSynthesizer';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenRsvp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRsvp }) => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  const handleEnterInvitation = () => {
    setHasEntered(true);
    weddingAudio.play();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden select-none bg-[#6e1f2f]"
      data-purpose="hero-cover"
    >
      {/* Warm Ambient Palace Illumination Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 40%, rgba(201, 162, 39, 0.35) 0%, rgba(110, 31, 47, 0.96) 75%), linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(110, 31, 47, 0.95))',
        }}
      />

      {/* Subtle Golden Dust / Shimmer Orbs */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden opacity-35">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-[#ffd76a] blur-[1px] animate-pulse" />
        <div className="absolute top-1/3 right-1/5 w-2 h-2 rounded-full bg-[#c9a227] blur-[1px] animate-ping" />
        <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 rounded-full bg-[#faf5eb] blur-[1px] animate-bounce" />
      </div>

      {/* Initial Tap to Open Overlay (matching apforever signature interaction) */}
      {!hasEntered ? (
        <div
          onClick={handleEnterInvitation}
          className="relative z-20 flex flex-col items-center justify-center p-6 text-center cursor-pointer group"
          data-purpose="tap-overlay"
        >
          {/* Sacred Breathing Emblem */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#c9a227]/60 flex items-center justify-center bg-[#faf5eb]/10 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform shadow-[0_0_25px_rgba(201,162,39,0.35)] animate-breathing-logo">
            <span className="text-4xl sm:text-5xl text-[#ffd76a] font-serif filter drop-shadow">
              ੴ
            </span>
          </div>

          <p className="font-heading text-lg sm:text-2xl text-[#faf5eb] tracking-[0.2em] uppercase font-semibold text-shadow animate-breathing-text">
            Tap to Open Invitation
          </p>

          <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#ffd76a]/80 mt-3">
            Music &amp; Auspicious Greetings Inside
          </span>
        </div>
      ) : (
        /* Grand Typography Display once opened */
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4 py-16 animate-fadeIn">
          {/* Sacred Top Symbol */}
          <div className="flex flex-col items-center mb-4">
            <span className="text-4xl sm:text-5xl text-[#ffd76a] font-serif mb-1 filter drop-shadow-[0_2px_10px_rgba(201,162,39,0.5)]">
              ੴ
            </span>
            <p className="font-heading text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#faf5eb]/80 font-medium">
              Ik Onkar • With the Blessings of Almighty Waheguru Ji
            </p>
          </div>

          <p className="font-heading text-xs sm:text-sm tracking-[0.35em] text-[#ffd76a] uppercase mb-4 font-semibold">
            Together With Their Families
          </p>

          {/* Couple Names display matching apforever */}
          <div className="flex flex-col items-center justify-center my-3">
            <h1
              className="font-names text-6xl sm:text-8xl md:text-9xl text-[#faf5eb] leading-tight select-none"
              style={{
                textShadow:
                  '0 0 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.5)',
                WebkitTextStroke: '0.8px rgba(255, 255, 255, 0.7)',
              }}
            >
              {coupleDetails.groom.shortName}
            </h1>

            <div className="my-2 sm:my-3 flex items-center gap-4">
              <span className="w-10 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#c9a227]" />
              <span
                className="font-heading text-lg sm:text-2xl text-[#faf5eb] tracking-[0.3em] uppercase font-semibold"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)',
                }}
              >
                Weds
              </span>
              <span className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#c9a227]" />
            </div>

            <h1
              className="font-names text-6xl sm:text-8xl md:text-9xl text-[#faf5eb] leading-tight select-none"
              style={{
                textShadow:
                  '0 0 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.5)',
                WebkitTextStroke: '0.8px rgba(255, 255, 255, 0.7)',
              }}
            >
              {coupleDetails.bride.shortName}
            </h1>
          </div>

          {/* Wedding Date & Location */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[#faf5eb] font-heading text-sm sm:text-base tracking-[0.25em] uppercase">
            <span>22 NOVEMBER 2026</span>
            <span className="hidden sm:inline text-[#ffd76a]">•</span>
            <span>BATHINDA &amp; PATHRALA, PUNJAB</span>
          </div>

          {/* Action Button */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#events-section"
              className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#c9a227] to-[#ffd76a] hover:from-[#ffd76a] hover:to-[#c9a227] text-[#6e1f2f] font-heading text-xs tracking-[0.25em] uppercase font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-[#c9a227]/40 transform hover:-translate-y-0.5"
            >
              View Celebrations
            </a>

            <button
              onClick={onOpenRsvp}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent hover:bg-white/10 text-[#faf5eb] border border-[#c9a227]/80 font-heading text-xs tracking-[0.25em] uppercase font-semibold rounded-full transition-all duration-300"
            >
              <Heart className="w-3.5 h-3.5 text-[#ffd76a] fill-current" />
              RSVP &amp; Blessings
            </button>
          </div>
        </div>
      )}

      {/* Bouncing Scroll Indicator matching apforever */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center justify-center pointer-events-auto">
        <a
          href="#invitation-letter"
          className="flex flex-col items-center gap-1 text-[#ffd76a] animate-haptic-bounce cursor-pointer group"
          aria-label="Scroll to formal invitation"
        >
          <span className="font-heading text-xs tracking-[0.2em] uppercase font-bold text-[#ffd76a] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]">
            Scroll to Enter
          </span>
          <span className="text-3xl text-white font-heading leading-none filter drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
};
