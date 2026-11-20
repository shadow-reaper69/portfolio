import React, { useEffect, useRef } from 'react';

export interface GradientBarsProps {
  barWidth?: number;
  gap?: number;
  speed?: number;
  frequency?: number;
  amplitude?: number;
  isDark?: boolean;
  className?: string;
}

export const GradientBars: React.FC<GradientBarsProps> = ({
  barWidth = 28,
  gap = 12,
  speed = 0.0018,
  frequency = 0.012,
  amplitude = 120,
  isDark = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const step = barWidth + gap;
      const numBars = Math.ceil(width / step) + 2;

      for (let i = -1; i < numBars; i++) {
        const x = i * step;

        // Wave phase based on bar position and time
        const wave1 = Math.sin(x * frequency + time * speed);
        const wave2 = Math.cos(x * (frequency * 1.5) - time * (speed * 0.8));
        const combinedWave = (wave1 + wave2) * 0.5;

        // Wave-shifted bar dimensions and gradient positions
        const barHeightOffset = combinedWave * amplitude;
        const startY = Math.max(0, height * 0.2 + barHeightOffset * 0.4);
        const barActualHeight = height - startY;

        // Dynamic wave opacity
        const waveOpacity = 0.12 + Math.max(0, (combinedWave + 1) * 0.18);

        // Linear gradient for each bar
        const gradient = ctx.createLinearGradient(x, startY, x, height);

        if (isDark) {
          // Dark Mode: Deep cyber black to Milk Green (#D5F5C6)
          gradient.addColorStop(0, 'rgba(21, 27, 23, 0)');
          gradient.addColorStop(0.35, `rgba(213, 245, 198, ${waveOpacity * 0.4})`);
          gradient.addColorStop(0.75, `rgba(213, 245, 198, ${waveOpacity * 0.85})`);
          gradient.addColorStop(1, `rgba(142, 149, 146, ${waveOpacity * 0.15})`);
        } else {
          // Light Mode: Clean light editorial gradient (#1D4ED8 blue to subtle slate)
          gradient.addColorStop(0, 'rgba(243, 244, 245, 0)');
          gradient.addColorStop(0.35, `rgba(29, 78, 216, ${waveOpacity * 0.25})`);
          gradient.addColorStop(0.75, `rgba(29, 78, 216, ${waveOpacity * 0.55})`);
          gradient.addColorStop(1, `rgba(213, 218, 223, ${waveOpacity * 0.15})`);
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        // Top-rounded vertical bar
        const radius = Math.min(6, barWidth / 2);
        ctx.roundRect(x, startY, barWidth, barActualHeight, [radius, radius, 0, 0]);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [barWidth, gap, speed, frequency, amplitude, isDark]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
