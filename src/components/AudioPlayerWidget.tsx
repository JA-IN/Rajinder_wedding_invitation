import React, { useState, useEffect } from 'react';
import { weddingAudio } from '../utils/audioSynthesizer';

export const AudioPlayerWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayback = () => {
    const active = weddingAudio.toggle();
    setIsPlaying(active);
  };

  useEffect(() => {
    // Poll or sync playback state
    const interval = setInterval(() => {
      setIsPlaying(weddingAudio.getIsPlaying());
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center select-none"
      data-purpose="floating-audio-player"
    >
      {/* Vinyl Disc Player matching apforever */}
      <button
        id="vinyl-button"
        aria-label="Toggle background wedding music"
        onClick={togglePlayback}
        className="relative group p-0.5 bg-[#fdfbf7] rounded-full border-2 border-[#c9a227] shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none"
      >
        {/* Vinyl Disc Graphic */}
        <div
          id="vinyl-disc"
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1c1917] flex items-center justify-center border-2 border-stone-800 relative shadow-inner animate-spin-slow ${
            !isPlaying ? 'paused' : ''
          }`}
        >
          {/* Concentric Vinyl Grooves */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-stone-700/70 flex items-center justify-center">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-stone-600/50 flex items-center justify-center">
              {/* Center Golden Disc with Ik Onkar */}
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#ffd76a] via-[#c9a227] to-[#8b273b] flex items-center justify-center shadow">
                <span className="text-[11px] sm:text-xs text-white font-serif font-bold">
                  ੴ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Outer glowing ring when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-[#ffd76a]/60 animate-ping pointer-events-none" />
        )}
      </button>
    </div>
  );
};
