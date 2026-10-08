import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynthesizer';
import palaceCourtyardImg from '../assets/images/palace_courtyard_1791361630055.jpg';
import heroVideo from '../assets/images/hero.mp4';
import { coupleDetails } from '../data/weddingData';

interface RoyalGateEntranceProps {
  onOpened: () => void;
}

export const RoyalGateEntrance: React.FC<RoyalGateEntranceProps> = ({ onOpened }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const previousOverflow = document.documentElement.style.overflow;
    if (!hasFinished) document.documentElement.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [hasFinished]);

  const handleTapToBegin = () => {
    if (hasStarted) return;
    setHasStarted(true);
    weddingAudio.play();
    void videoRef.current?.play().catch(() => {
      weddingAudio.pause();
      setHasStarted(false);
    });
  };

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (video && Number.isFinite(video.duration) && video.duration - video.currentTime <= 1.8) {
      setShowNames(true);
    }
  };

  const handleVideoEnded = () => {
    setShowNames(true);
    setHasFinished(true);
    onOpened();
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden select-none bg-black"
      data-purpose="royal-gate-hero"
    >
      {/* Underlying Revealed Palace Scene */}
      <div
          className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${palaceCourtyardImg})`,
        }}
      >
          <video
            ref={videoRef}
            className="hero-intro-video"
            muted
            playsInline
            preload="metadata"
            poster={palaceCourtyardImg}
            aria-label="Wedding invitation video. Click to begin."
            onClick={handleTapToBegin}
            onTimeUpdate={handleVideoTimeUpdate}
            onEnded={handleVideoEnded}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {!hasStarted && (
            <button
              className="hero-video-start"
              type="button"
              onClick={handleTapToBegin}
              aria-label="Play the wedding invitation video"
            >
              <Play className="h-7 w-7 fill-current" aria-hidden="true" />
              <span>Tap video to begin</span>
            </button>
          )}

        {/* Palace dusk atmospheric scrim */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#6e1f2f]/85 via-black/35 to-black/50" />
      </div>

      {/* REVEALED CONTENT (Appears once gates open) */}
      <div
        className={`hero-intro-content z-20 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 text-center transition-all duration-1000 ${
          showNames ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
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

    </section>
  );
};
