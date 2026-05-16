import React from 'react';
import Antigravity from './Antigravity';

export default function DownloadSection() {
  return (
    <section
      style={{
        padding: '0 10px',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '95vh',
          borderRadius: '20px',
          overflow: 'hidden',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Particle background — same as homepage */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          <Antigravity
            count={300}
            magnetRadius={8}
            ringRadius={8}
            waveSpeed={0.3}
            waveAmplitude={0.8}
            particleSize={0.9}
            lerpSpeed={0.02}
            color="#AB1509"
            autoAnimate={false}
            particleVariance={0.8}
            rotationSpeed={0.05}
            depthFactor={0.8}
            pulseSpeed={2}
            particleShape="capsule"
            fieldStrength={8}
          />
        </div>

        {/* Content — vertically centered on the left */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '0 80px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              lineHeight: 1.1,
              color: '#FFFFFF',
              maxWidth: '600px',
              letterSpacing: '-0.02em',
              marginBottom: '40px',
            }}
          >
            Add Hearly to{' '}
            <span style={{ color: 'var(--brand-blue)' }}>Chrome</span>
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            {/* Primary CTA */}
            <a
              href="#"
              className="cursor-target"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#fff7D3',
                color: '#0a0a0a',
                padding: '14px 28px',
                borderRadius: '100px',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#AB1509';
                e.currentTarget.style.color = '#fff7D3';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff7D3';
                e.currentTarget.style.color = '#0a0a0a';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Add to Chrome — Free
            </a>

            {/* Secondary CTA */}
            <a
              href="#"
              className="cursor-target"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: 'rgba(255, 255, 255, 0.85)',
                padding: '14px 28px',
                borderRadius: '100px',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.14)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View Documentation
            </a>
          </div>
        </div>

        {/* Subtle bottom gradient for text readability */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  );
}
