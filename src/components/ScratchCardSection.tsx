import React, { useEffect, useRef, useState } from 'react';
import { RefreshCw, Hand } from 'lucide-react';
import { coupleDetails } from '../data/weddingData';

export const ScratchCardSection: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchCount, setScratchCount] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isScratchingRef = useRef(false);
  const scratchCountRef = useRef(0);
  const lastScratchPointRef = useRef<{ x: number; y: number } | null>(null);
  const scratchDistanceRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = canvas?.parentElement;
    const context = canvas?.getContext('2d');

    if (!canvas || !wrapper || !context) return;

    const drawFoil = () => {
      const bounds = wrapper.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = bounds.width * pixelRatio;
      canvas.height = bounds.height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      if (isRevealed) {
        context.clearRect(0, 0, bounds.width, bounds.height);
        return;
      }

      const foil = context.createLinearGradient(0, 0, bounds.width, bounds.height);
      foil.addColorStop(0, '#b38728');
      foil.addColorStop(0.28, '#f6dc91');
      foil.addColorStop(0.52, '#c9a24a');
      foil.addColorStop(0.76, '#f8e5ae');
      foil.addColorStop(1, '#9c7423');
      context.globalCompositeOperation = 'source-over';
      context.fillStyle = foil;
      context.fillRect(0, 0, bounds.width, bounds.height);

      const sheen = context.createLinearGradient(0, 0, bounds.width, bounds.height);
      sheen.addColorStop(0.38, 'rgba(255,255,255,0)');
      sheen.addColorStop(0.5, 'rgba(255,255,255,0.3)');
      sheen.addColorStop(0.62, 'rgba(255,255,255,0)');
      context.fillStyle = sheen;
      context.fillRect(0, 0, bounds.width, bounds.height);
    };

    drawFoil();
    const resizeObserver = new ResizeObserver(drawFoil);
    resizeObserver.observe(wrapper);

    return () => resizeObserver.disconnect();
  }, [isRevealed]);

  const scratchAt = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const bounds = canvas.getBoundingClientRect();
    const point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    const lastPoint = lastScratchPointRef.current;

    if (lastPoint) {
      scratchDistanceRef.current += Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y);
    }

    context.globalCompositeOperation = 'destination-out';
    context.lineWidth = 46;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.beginPath();
    context.moveTo(lastPoint?.x ?? point.x, lastPoint?.y ?? point.y);
    context.lineTo(point.x, point.y);
    context.stroke();
    lastScratchPointRef.current = point;
  };

  const ambientParticles = Array.from({ length: 14 }, (_, index) => ({
    left: `${(index * 37 + 8) % 100}%`,
    delay: `${(index % 7) * -1.4}s`,
    duration: `${12 + (index % 5) * 2}s`,
    size: `${3 + (index % 3)}px`,
  }));

  return (
    <section
      className="scratch-section text-center"
      data-purpose="interactive-scratch-reveal"
    >
      <div className="scratch-ambient" aria-hidden="true">
        {ambientParticles.map((particle, index) => (
          <span
            className="scratch-ambient-particle"
            key={index}
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      <header className="scratch-header">
        <span className="scratch-heading-small">
          A Special Surprise
        </span>
        <h3 className="scratch-heading-sub">
          Scratch to Reveal Our Wedding Day
        </h3>
      </header>

      <div className="scratch-container">
        <div className="scratch-card">
          <svg className="scratch-heart-background" viewBox="0 0 400 400" aria-hidden="true">
            <defs>
              <clipPath id="scratch-heart-clip" clipPathUnits="objectBoundingBox">
                <path d="M .5 .9 C .43 .84 .08 .59 .08 .34 C .08 .16 .2 .08 .34 .08 C .42 .08 .48 .13 .5 .2 C .52 .13 .58 .08 .66 .08 C .8 .08 .92 .16 .92 .34 C .92 .59 .57 .84 .5 .9 Z" />
              </clipPath>
            </defs>
            <path
              className="scratch-heart-fill"
              d="M 200 360 C 172 330 32 235 32 136 C 32 65 112 38 173 71 C 186 78 195 91 200 105 C 205 91 214 78 227 71 C 288 38 368 65 368 136 C 368 235 228 330 200 360 Z"
            />
          </svg>

          <div className="scratch-revealed-content">
            <span className="scratch-wedding-date">{coupleDetails.weddingDate}</span>
            <span className="scratch-signature">
              {coupleDetails.groom.shortName} &amp; {coupleDetails.bride.shortName}
            </span>
          </div>

          <div className={`scratch-canvas-wrapper${isRevealed ? ' is-revealed' : ''}`}>
            <canvas
              ref={canvasRef}
              className="scratch-canvas"
              aria-label="Scratch the gold foil three times to reveal the wedding date and couple names"
              onPointerDown={(event) => {
                if (isRevealed) return;
                isScratchingRef.current = true;
                lastScratchPointRef.current = null;
                scratchDistanceRef.current = 0;
                event.currentTarget.setPointerCapture(event.pointerId);
                scratchAt(event);
              }}
              onPointerMove={(event) => {
                if (isScratchingRef.current) scratchAt(event);
              }}
              onPointerUp={(event) => {
                const completedScratch = isScratchingRef.current && scratchDistanceRef.current > 20;
                isScratchingRef.current = false;
                lastScratchPointRef.current = null;
                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                  event.currentTarget.releasePointerCapture(event.pointerId);
                }
                if (completedScratch && !isRevealed) {
                  const nextCount = scratchCountRef.current + 1;
                  scratchCountRef.current = nextCount;
                  setScratchCount(nextCount);
                  if (nextCount >= 3) setIsRevealed(true);
                }
              }}
              onPointerCancel={() => {
                isScratchingRef.current = false;
                lastScratchPointRef.current = null;
              }}
            />
          </div>

          <div className="scratch-shimmer" aria-hidden="true" />
          <svg className="scratch-heart-border" viewBox="0 0 400 400" aria-hidden="true">
            <path
              d="M 200 360 C 172 330 32 235 32 136 C 32 65 112 38 173 71 C 186 78 195 91 200 105 C 205 91 214 78 227 71 C 288 38 368 65 368 136 C 368 235 228 330 200 360 Z"
            />
          </svg>
        </div>

        <div className={`scratch-instruction${isRevealed ? ' is-hidden' : ''}`}>
          <span className="scratch-instruction-text">
            Scratch {3 - scratchCount} more {3 - scratchCount === 1 ? 'time' : 'times'}
          </span>
          <Hand className="scratch-hand-icon" aria-hidden="true" />
        </div>

        {isRevealed && (
          <div className="scratch-reset-wrap">
            <button
              onClick={() => {
                scratchCountRef.current = 0;
                setScratchCount(0);
                setIsRevealed(false);
              }}
              className="scratch-reset-button"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset card
            </button>
          </div>
        )}
        </div>
    </section>
  );
};
