import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '140px 24px 100px',
        position: 'relative',
      }}
    >
      {/* Logo + Brand */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '32px',
        }}
      >
        <img
          src={logo}
          alt="Hearly"
          style={{
            width: '28px',
            height: '28px',
            objectFit: 'contain',
            borderRadius: '6px',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            letterSpacing: '-0.01em',
          }}
        >
          Hearly
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
          lineHeight: 1.15,
          color: 'var(--text-primary)',
          maxWidth: '800px',
          letterSpacing: '-0.01em',
          marginBottom: '48px',
        }}
      >
        Experience liftoff with the{' '}
        <span className="gradient-text-crimson">next-gen</span>{' '}
        voice intelligence
      </motion.h1>

      {/* Version Tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: 'var(--brand-crimson-dim)',
          color: 'var(--brand-crimson)',
          padding: '6px 14px',
          borderRadius: 'var(--radius-pill)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '32px',
          border: '1px solid var(--brand-crimson-glow)',
        }}
      >
        Version 1
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <a href="#" className="btn-primary cursor-target">
          <Globe size={18} strokeWidth={2} />
          Add to Chrome
        </a>
        <a href="#features" className="btn-outline cursor-target">
          Explore use cases
        </a>
      </motion.div>
    </section>
  );
}
