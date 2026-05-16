import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);

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
      {/* Full-width container with 10px padding */}
      <div
        style={{
          width: '100%',
          padding: '0 10px',
          boxSizing: 'border-box',
        }}
      >
        <div
          ref={videoContainerRef}
          className="cursor-target"
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#0a0a0a',
            boxShadow: '0 40px 120px rgba(0, 0, 0, 0.12), 0 8px 32px rgba(0, 0, 0, 0.06)',
            cursor: 'pointer',
            transform: 'translateZ(0)',
            willChange: 'transform, opacity',
          }}
        >
          {/* YouTube iframe — autoplay muted */}
          <iframe
            src="https://www.youtube.com/embed/67_CU8E9sdY?autoplay=1&mute=1&loop=1&playlist=67_CU8E9sdY&rel=0&modestbranding=1&playsinline=1&controls=0&showinfo=0"
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

          {/* Transparent interaction layer to prevent iframe from swallowing mouse events */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 10,
              background: 'transparent',
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
