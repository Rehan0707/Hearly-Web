import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);
  const cursorBubbleRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const bubblePos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  // Smooth cursor-follower animation loop
  const animateBubble = useCallback(() => {
    const bubble = cursorBubbleRef.current;
    if (!bubble) return;

    bubblePos.current.x += (mousePos.current.x - bubblePos.current.x) * 0.15;
    bubblePos.current.y += (mousePos.current.y - bubblePos.current.y) * 0.15;

    bubble.style.transform = `translate(${bubblePos.current.x}px, ${bubblePos.current.y}px) translate(-50%, -50%)`;

    rafId.current = requestAnimationFrame(animateBubble);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(animateBubble);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animateBubble]);

  const handleMouseMove = (e) => {
    const rect = videoContainerRef.current.getBoundingClientRect();
    mousePos.current.x = e.clientX - rect.left;
    mousePos.current.y = e.clientY - rect.top;
  };

  // GSAP scroll animation
  useEffect(() => {
    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;

    gsap.set(videoContainer, {
      y: 280,
      scale: 0.85,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 95%',
        end: 'top 15%',
        scrub: 1.2,
      },
    });

    tl.to(videoContainer, {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    });

    // Subtle parallax on continued scroll
    ScrollTrigger.create({
      trigger: section,
      start: 'center center',
      end: 'bottom top',
      scrub: 1.5,
      onUpdate: (self) => {
        gsap.set(videoContainer, {
          y: self.progress * -40,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '20px 0 140px',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* Full-width container with 5px padding */}
      <div
        style={{
          width: '100%',
          padding: '0 5px',
          boxSizing: 'border-box',
        }}
      >
        <div
          ref={videoContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#0a0a0a',
            boxShadow: '0 40px 120px rgba(0, 0, 0, 0.12), 0 8px 32px rgba(0, 0, 0, 0.06)',
            cursor: 'none',
            transform: 'translateZ(0)',
            willChange: 'transform, opacity',
          }}
        >
          {/* Cursor-following bubble */}
          <div
            ref={cursorBubbleRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(197, 163, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              zIndex: 10,
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? '1' : '0.4',
              transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), scale 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 32px rgba(197, 163, 255, 0.3)',
            }}
          >
            <span
              style={{
                color: '#1a1a1a',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                userSelect: 'none',
              }}
            >
              Play Video
            </span>
          </div>

          {/* YouTube iframe — autoplay muted */}
          <iframe
            src="https://www.youtube.com/embed/XM_Zfihnkb4?autoplay=1&mute=1&loop=1&playlist=XM_Zfihnkb4&rel=0&modestbranding=1&playsinline=1&controls=0&showinfo=0"
            title="Hearly Demo"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              zIndex: 1,
            }}
          />

          {/* Subtle inner border for depth */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              zIndex: 5,
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  );
}
