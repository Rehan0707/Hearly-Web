import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    const gridSize = 40;
    const points = [];

    // Initialize points
    const initPoints = () => {
      points.length = 0;
      for (let x = 0; x <= canvas.width + gridSize; x += gridSize) {
        for (let y = 0; y <= canvas.height + gridSize; y += gridSize) {
          points.push({
            originX: x,
            originY: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0
          });
        }
      }
    };

    initPoints();

    const draw = () => {
      ctx.fillStyle = '#0B0B0B';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Update points based on mouse distance
      points.forEach(p => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 1.5;
          p.vy -= Math.sin(angle) * force * 1.5;
        }

        // Spring back to origin
        p.vx += (p.originX - p.x) * 0.05;
        p.vy += (p.originY - p.y) * 0.05;

        // Friction
        p.vx *= 0.9;
        p.vy *= 0.9;

        p.x += p.vx;
        p.y += p.vy;
      });

      // Draw grid lines
      ctx.strokeStyle = 'rgba(200, 239, 68, 0.08)';
      ctx.lineWidth = 1;

      // Horizontal lines
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const nextP = points[i + 1];
        
        // Only connect if they are on the same row
        if (nextP && nextP.originX > p.originX && nextP.originY === p.originY) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(nextP.x, nextP.y);
          ctx.stroke();
        }

        // Vertical lines - find point below
        const belowP = points.find(bp => bp.originX === p.originX && bp.originY === p.originY + gridSize);
        if (belowP) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(belowP.x, belowP.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default Background;
