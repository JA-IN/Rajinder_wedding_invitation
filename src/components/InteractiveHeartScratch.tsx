import React, { useRef, useState, useEffect } from 'react';

export const InteractiveHeartScratch: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Draw metallic golden heart shape onto canvas
    ctx.clearRect(0, 0, width, height);
    ctx.save();

    // Create heart path
    ctx.beginPath();
    const topCurveHeight = height * 0.3;
    ctx.moveTo(width / 2, height / 5);
    // Top left curve
    ctx.bezierCurveTo(width / 2, 0, 0, 0, 0, topCurveHeight);
    // Bottom left curve
    ctx.bezierCurveTo(0, height * 0.65, width / 2, height * 0.85, width / 2, height * 0.98);
    // Bottom right curve
    ctx.bezierCurveTo(width / 2, height * 0.85, width, height * 0.65, width, topCurveHeight);
    // Top right curve
    ctx.bezierCurveTo(width, 0, width / 2, 0, width / 2, height / 5);
    ctx.closePath();
    ctx.clip();

    // Golden metallic gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#f3e5ab');
    grad.addColorStop(0.3, '#dfba67');
    grad.addColorStop(0.6, '#c9a227');
    grad.addColorStop(0.85, '#e6ca7b');
    grad.addColorStop(1, '#9c7a2e');
    ctx.fillStyle = grad;
    ctx.fill();

    // Metallic sheen highlight
    const sheen = ctx.createRadialGradient(width * 0.35, height * 0.35, 10, width * 0.5, height * 0.5, width * 0.6);
    sheen.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
    sheen.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
    sheen.addColorStop(1, 'rgba(0, 0, 0, 0.15)');
    ctx.fillStyle = sheen;
    ctx.fill();

    // Subtle heart inner outline
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.restore();
  }, [isScratched]);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 32, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;
      let transparentCount = 0;
      const totalPixels = pixels.length / 4;

      for (let i = 3; i < pixels.length; i += 16) {
        if (pixels[i] === 0) transparentCount += 4;
      }

      if (transparentCount / totalPixels > 0.32) {
        setIsScratched(true);
        setConfettiActive(true);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    } catch {
      // ignore security restrictions if any
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => setIsDrawing(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDrawing(true);
    if (e.touches[0]) scratch(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) scratch(e.touches[0].clientX, e.touches[0].clientY);
  };

  return (
    <section
      className="py-16 px-4 max-w-xl mx-auto text-center select-none"
      data-purpose="scratch-heart-section"
    >
      <div className="mb-6">
        <span className="font-heading text-xs tracking-[0.3em] uppercase text-[#c9a227] font-semibold block mb-2">
          A SPECIAL SURPRISE
        </span>
        <h2 className="font-heading text-xl sm:text-2xl text-[#6e1f2f] uppercase tracking-[0.2em] font-bold">
          SCRATCH THE HEART TO REVEAL OUR WEDDING DATE
        </h2>
      </div>

      {/* Heart Container */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto flex items-center justify-center">
        {/* Confetti Sparkles Burst */}
        {confettiActive && (
          <div className="absolute inset-0 pointer-events-none z-20">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-ping"
                style={{
                  left: `${(i * 14) % 100}%`,
                  top: `${(i * 19) % 100}%`,
                  backgroundColor: i % 2 === 0 ? '#ffd76a' : '#c9a227',
                  animationDuration: `${1 + (i % 3) * 0.5}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Revealed Content underneath */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-full z-0 p-8"
          style={{
            background: 'radial-gradient(circle, #ffffff 40%, #faf5eb 100%)',
          }}
        >
          {/* Delicate Gold Heart Outline */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none text-[#c9a227]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M100 35 C100 5, 10 5, 10 65 C10 130, 100 170, 100 195 C100 170, 190 130, 190 65 C190 5, 100 5, 100 35 Z"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="rgba(255,255,255,0.7)"
            />
          </svg>

          {/* Golden Reveal Date Typography */}
          <div className="relative z-10 flex flex-col items-center justify-center pt-2">
            <span className="font-heading text-5xl sm:text-6xl text-[#6e1f2f] font-light leading-none">
              22
            </span>
            <span className="font-heading text-xl sm:text-2xl text-[#c9a227] tracking-[0.25em] uppercase font-bold my-1">
              NOVEMBER
            </span>
            <span className="font-heading text-2xl sm:text-3xl text-[#6e1f2f] font-light tracking-widest">
              2026
            </span>
          </div>
        </div>

        {/* Scratchable Canvas Layer */}
        {!isScratched && (
          <canvas
            ref={canvasRef}
            width={320}
            height={320}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className="absolute inset-0 z-10 w-full h-full cursor-crosshair touch-none filter drop-shadow-[0_10px_25px_rgba(201,162,39,0.35)]"
          />
        )}
      </div>

      <p className="text-xs font-heading text-stone-500 uppercase tracking-widest mt-4">
        {isScratched ? '✨ Auspicious Wedding Day Confirmed ✨' : 'Swipe your cursor or finger across the golden heart'}
      </p>
    </section>
  );
};
