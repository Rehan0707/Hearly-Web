import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;

    // GSAP parallax: video rises from below with scale
    gsap.set(videoContainer, {
      y: 200,
      scale: 0.88,
      opacity: 0,
      borderRadius: '32px',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'top 10%',
        scrub: 1.2,
        // markers: false,
      },
    });

    tl.to(videoContainer, {
      y: 0,
      scale: 1,
      opacity: 1,
      borderRadius: '24px',
      duration: 1,
      ease: 'power2.out',
    });

    // Subtle parallax on continued scroll
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(videoContainer, {
          y: progress * -60,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '40px 0 160px',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div
          ref={videoContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={!isPlaying ? handlePlayClick : undefined}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#0a0a0a',
            boxShadow: '0 40px 120px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.08)',
            cursor: isPlaying ? 'default' : 'pointer',
            transform: 'translateZ(0)',
            willChange: 'transform, opacity',
          }}
        >
          {/* Custom play cursor overlay */}
          {!isPlaying && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isHovered
                  ? 'rgba(0, 0, 0, 0.25)'
                  : 'rgba(0, 0, 0, 0.35)',
                transition: 'background 0.4s ease',
                cursor: 'pointer',
              }}
            >
              {/* Play button */}
              <div
                style={{
                  width: isHovered ? '88px' : '80px',
                  height: isHovered ? '88px' : '80px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isHovered
                    ? '0 8px 40px rgba(0, 0, 0, 0.3)'
                    : '0 4px 20px rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Triangle play icon */}
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  style={{
                    marginLeft: '3px',
                    transition: 'transform 0.3s ease',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  <path
                    d="M22 14L2 26V2L22 14Z"
                    fill="#1a1a1a"
                  />
                </svg>
              </div>

              {/* "Play Video" text label */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '32px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  opacity: isHovered ? 1 : 0.7,
                  transition: 'opacity 0.3s ease',
                }}
              >
                Play Video
              </div>
            </div>
          )}

          {/* YouTube Thumbnail (before play) */}
          {!isPlaying && (
            <img
              src="https://img.youtube.com/vi/XM_Zfihnkb4/maxresdefault.jpg"
              alt="Hearly Demo Video"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1,
              }}
            />
          )}

          {/* YouTube iframe (after play) */}
          {isPlaying && (
            <iframe
              src="https://www.youtube.com/embed/XM_Zfihnkb4?autoplay=1&rel=0&modestbranding=1&playsinline=1"
              title="Hearly Demo"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                zIndex: 2,
              }}
            />
          )}

          {/* Subtle inner border */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              zIndex: 4,
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  );
}
