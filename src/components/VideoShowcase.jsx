import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;

    // Initial state: video starts far below and slightly scaled down
    gsap.set(videoContainer, {
      y: 300,
      scale: 0.92,
      opacity: 0,
    });

    // Main reveal animation — scrubbed to scroll
    gsap.to(videoContainer, {
      y: 0,
      scale: 1,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'top 20%',
        scrub: 1.5,
      },
    });

    // Continued parallax lift as user scrolls past
    gsap.to(videoContainer, {
      y: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top 20%',
        end: 'bottom top',
        scrub: 2,
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
        padding: '20px 0 160px',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '0 10px',
          boxSizing: 'border-box',
        }}
      >
        <div
          ref={videoContainerRef}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#0a0a0a',
            boxShadow: '0 40px 120px rgba(0, 0, 0, 0.12), 0 8px 32px rgba(0, 0, 0, 0.06)',
            transform: 'translateZ(0)',
            willChange: 'transform, opacity',
          }}
        >
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
            }}
          />

          {/* Subtle inner border */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  );
}
