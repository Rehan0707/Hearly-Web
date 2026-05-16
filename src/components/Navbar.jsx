import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';

const navLinks = [
  { label: 'Product', href: '#features' },
  { label: 'Use Cases', href: '#how-it-works', hasDropdown: true },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Resources', href: '#', hasDropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(255, 247, 211, 0.9)' : '#fff7D3',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(0,0,0,0.05)' : 'transparent'}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {/* Left — Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src={logo} alt="Hearly" style={{ width: '24px', height: '24px', objectFit: 'contain', borderRadius: '4px' }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}>
            Hearly
          </span>
        </a>

        {/* Center — Nav Links (Desktop) */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="cursor-target">
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} strokeWidth={2} />}
            </a>
          ))}
        </div>
      </div>

      {/* Right — CTA + Mobile Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a
          href="#"
          className="cursor-target"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#AB1509',
            color: '#fff7D3',
            padding: '10px 24px',
            borderRadius: 'var(--radius-pill)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.88rem',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
        >
          Add to Chrome
          <Globe size={16} strokeWidth={2} />
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
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
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(255, 247, 211, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'background 0.2s ease',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 992px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
