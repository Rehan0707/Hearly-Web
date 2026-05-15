import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderColor: scrolled ? 'rgba(200, 239, 68, 0.08)' : 'var(--border-dark)',
        background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.7)',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
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
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--text-white)',
          letterSpacing: '-0.03em',
        }}>
          Hearly
        </span>
      </a>

      {/* Desktop Links */}
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a href="#" className="btn-lime" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
          Get Early Access
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-white)',
            cursor: 'pointer',
            padding: '4px',
          }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute',
              top: '72px',
              left: '0',
              right: '0',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border-dark)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {['Features', 'How it Works', 'Pricing', 'About'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.2s ease',
                }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
