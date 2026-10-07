import React, { useState, useEffect } from 'react';
import { coupleDetails } from '../data/weddingData';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 600);
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-center items-center transition-all duration-700 select-none overflow-hidden ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #fdfbf7 0%, #f4eee0 100%)',
      }}
    >
      {/* Ambient Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${(i % 4) + 3}px`,
              height: `${(i % 4) + 3}px`,
              left: `${(i * 19) % 100}%`,
              top: `${(i * 27) % 100}%`,
              background: 'radial-gradient(circle, #d4af37cc 0%, #d4af3700 70%)',
              animation: `float-gentle ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.4) % 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center px-4 animate-fadeIn">
        {/* Sacred Ik Onkar Emblem */}
        <div
          className="text-6xl text-[#b78c3b] font-serif mb-6 select-none"
          style={{
            filter: 'drop-shadow(0 4px 15px rgba(212, 175, 55, 0.4))',
            animation: 'float-gentle 4s ease-in-out infinite',
          }}
        >
          ੴ
        </div>

        {/* Loading Text */}
        <h2
          className="font-heading text-[#b78c3b] tracking-[0.2em] text-center uppercase text-base sm:text-xl font-medium mb-8"
          style={{
            animation: 'pulse-text 2.5s ease-in-out infinite',
          }}
        >
          {coupleDetails.groom.shortName} Weds {coupleDetails.bride.shortName}
        </h2>

        {/* Shimmer Line */}
        <div className="w-36 h-[2px] bg-[#b78c3b]/20 rounded-full relative overflow-hidden">
          <div
            className="absolute top-0 h-full w-14 bg-gradient-to-r from-transparent via-[#b78c3b] to-transparent"
            style={{
              animation: 'shimmer-line 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite',
            }}
          />
        </div>

        <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#b78c3b]/70 mt-6">
          The Auspicious Invitation
        </p>
      </div>
    </div>
  );
};
