import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const PetalShower: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  // 16 gentle floating petals with varied delays and sizes
  const petals = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    left: `${(i * 6.25 + 3) % 96}%`,
    duration: `${8 + (i % 5) * 2}s`,
    delay: `${(i * 0.7) % 6}s`,
    size: 14 + (i % 4) * 4,
    rotation: `${(i * 35) % 360}deg`,
    type: i % 3 === 0 ? 'gold' : 'rose',
  }));

  return (
    <>
      {/* Floating Petal Elements */}
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
          {petals.map((p) => (
            <div
              key={p.id}
              className="absolute animate-float opacity-75"
              style={{
                left: p.left,
                top: '-30px',
                animation: `float-down ${p.duration} linear infinite`,
                animationDelay: p.delay,
              }}
            >
              {p.type === 'gold' ? (
                // Golden marigold flake
                <span
                  style={{ fontSize: `${p.size}px`, transform: `rotate(${p.rotation})` }}
                  className="inline-block select-none filter drop-shadow-sm"
                >
                  ✨
                </span>
              ) : (
                // Rose petal
                <span
                  style={{ fontSize: `${p.size}px`, transform: `rotate(${p.rotation})` }}
                  className="inline-block select-none filter drop-shadow-sm opacity-90"
                >
                  🌸
                </span>
              )}
            </div>
          ))}

          <style>{`
            @keyframes float-down {
              0% {
                transform: translateY(-20px) rotate(0deg) translateX(0px);
                opacity: 0;
              }
              10% {
                opacity: 0.8;
              }
              50% {
                transform: translateY(50vh) rotate(180deg) translateX(25px);
                opacity: 0.85;
              }
              90% {
                opacity: 0.8;
              }
              100% {
                transform: translateY(105vh) rotate(360deg) translateX(-15px);
                opacity: 0;
              }
            }
          `}</style>
        </div>
      )}

      {/* Floating Toggle on bottom-left */}
      <button
        onClick={() => setIsActive(!isActive)}
        aria-label="Toggle floating flower petals"
        className="fixed bottom-6 left-6 z-40 p-2.5 rounded-full bg-[#FDFCF7]/90 hover:bg-[#FDFCF7] border border-[#DFBA67]/60 shadow-lg text-[#5A1020] text-xs font-cinzel flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
        title={isActive ? 'Pause floating petals' : 'Enable floating petals'}
      >
        <span className="text-sm">🌸</span>
        <span className="hidden md:inline text-[11px] font-semibold tracking-wider">
          {isActive ? 'Petals Active' : 'Show Petals'}
        </span>
      </button>
    </>
  );
};
