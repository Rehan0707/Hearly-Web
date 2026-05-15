import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Antigravity from './components/Antigravity';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import DownloadSection from './components/DownloadSection';
import DevelopersSection from './components/DevelopersSection';
import Features from './components/Features';
import { motion } from 'framer-motion';
import {
  Mic, History, Settings, CheckCircle, ArrowRight,
  Play, Headphones, BarChart3, Users, Globe, Code2, Briefcase,
  Mail, Heart
} from 'lucide-react';
import logo from './assets/logo.png';
import HearyFooter from './components/ui/HearlyFooter';


/* ─── Section Header ─── */
const SectionHeader = ({ tag, tagIcon: TagIcon, title, titleHighlight, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    style={{ maxWidth: '480px' }}
  >
    {tag && (
      <div className="tag" style={{ marginBottom: '24px' }}>
        {TagIcon && <TagIcon size={14} />}
        {tag}
      </div>
    )}
    <h2 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>
      {title}{' '}
      {titleHighlight && <span style={{ color: 'var(--text-secondary)' }}>{titleHighlight}</span>}
    </h2>
    <p style={{ fontSize: '1.05rem', marginBottom: '32px' }}>{description}</p>
    <a href="#" style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: 'var(--brand-purple)',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '0.95rem',
      textDecoration: 'none',
      transition: 'gap 0.3s ease',
    }}>
      Learn more <ArrowRight size={16} />
    </a>
  </motion.div>
);

/* ─── Heary Popup Mockup ─── */
const HearyPopupMockup = ({ screen }) => (
  <div className="mockup-card">
    {/* Titlebar */}
    <div style={{
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={logo} alt="Hearly" style={{ width: '18px', height: '18px', objectFit: 'contain', borderRadius: '4px' }} />
        <span style={{
          fontSize: '0.9rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          color: 'var(--text-primary)',
        }}>
          Hearly
        </span>
        <span style={{
          fontSize: '0.65rem',
          padding: '2px 8px',
          background: 'rgba(171,21,9,0.1)',
          color: 'var(--brand-purple)',
          borderRadius: '20px',
          fontWeight: 600,
        }}>
          LIVE
        </span>
      </div>
      <Settings size={16} color="#666" />
    </div>

    {/* Content */}
    <div style={{ padding: '24px', minHeight: '380px' }}>
      {screen === 'enrollment' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center' }}>
          <div style={{
            height: '140px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
          }}>
            {[1, 0.4, 0.8, 0.2, 1, 0.6, 0.9, 0.3, 0.7, 0.5, 0.8, 0.3].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [h * 30, h * 90, h * 30] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.07,
                  ease: "easeInOut",
                }}
                style={{
                  width: '4px',
                  background: `linear-gradient(180deg, var(--brand-purple) 0%, rgba(171,21,9,0.3) 100%)`,
                  borderRadius: '3px',
                }}
              />
            ))}
          </div>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
            Enrolling Speaker
          </h3>
          <p style={{
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
          }}>
            Say "Hello Hearly" to start the voice identification process.
          </p>
          <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '16px',
          }}>
            <button style={{
              flex: 1,
              background: 'var(--brand-purple)',
              color: '#1a1a1a',
              border: 'none',
              padding: '14px',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
            }}>
              Confirm Voice
            </button>
            <button style={{
              padding: '14px 18px',
              background: 'rgba(255,255,255,0.04)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
            }}>
              <Play size={16} />
            </button>
          </div>
        </div>
      )}

      {screen === 'history' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{
            fontSize: '1.1rem',
            marginBottom: '4px',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-body)',
          }}>
            Recent Meetings
          </h3>
          {[
            { title: "Weekly Sync", time: "2m ago", status: "Analyzed", speakers: 4 },
            { title: "Product Design", time: "1h ago", status: "Analyzed", speakers: 3 },
            { title: "Client Call", time: "Yesterday", status: "Analyzed", speakers: 2 },
            { title: "Engineering Sync", time: "2 days ago", status: "Analyzed", speakers: 6 },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                padding: '14px 16px',
                background: 'rgba(0,0,0,0.02)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
            >
              <div>
                <div style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}>
                  {m.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {m.time}
                  <span style={{ color: 'var(--text-dim)' }}>•</span>
                  <Users size={11} /> {m.speakers}
                </div>
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--brand-purple)',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
              }}>
                <CheckCircle size={13} />
                {m.status}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  </div>
);

/* ─── Main App ─── */
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="app">
      {/* Antigravity Particle Background */}
      <motion.div 
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: isScrolled ? 'none' : 'auto',
        }}
      >
        <Antigravity
          count={350}
          magnetRadius={8}
          ringRadius={8}
          waveSpeed={0.3}
          waveAmplitude={0.8}
          particleSize={1.2}
          lerpSpeed={0.05}
          color="#C5A3FF"
          autoAnimate={false}
          particleVariance={0.8}
          rotationSpeed={0.05}
          depthFactor={0.8}
          pulseSpeed={2}
          particleShape="capsule"
          fieldStrength={8}
        />
      </motion.div>

      {/* Ambient glow overlay */}
      <motion.div 
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(171,21,9,0.08) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} 
      />

      <Navbar />

      <main style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <Hero />

          {/* ─── Video Showcase (GSAP Parallax) ─── */}
          <VideoShowcase />

          <div className="section-divider" />

          {/* ─── Features ─── */}
          <Features />

          <div className="section-divider" />

          {/* ─── Voice Enrollment Section ─── */}
          <section id="how-it-works" style={{ padding: '120px 0' }}>
            <div className="section-container" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}>
              <SectionHeader
                tag="Voice Enrollment"
                tagIcon={Mic}
                title="Smart voice enrollment."
                titleHighlight="Zero friction."
                description="Identify and enroll speakers with high-fidelity analysis. Every voice is captured and attributed correctly in real-time."
              />

              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <HearyPopupMockup screen="enrollment" />
                </motion.div>
                {/* Glow */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '120%',
                  background: 'radial-gradient(circle, rgba(171,21,9,0.06) 0%, transparent 70%)',
                  zIndex: -1,
                  filter: 'blur(60px)',
                }} />
              </div>
            </div>

            {/* Responsive */}
            <style>{`
              @media (max-width: 992px) {
                #how-it-works .section-container {
                  grid-template-columns: 1fr !important;
                  gap: 48px !important;
                  text-align: center;
                }
              }
            `}</style>
          </section>

          <div className="section-divider" />

          {/* ─── Meeting History Section ─── */}
          <section style={{ padding: '120px 0' }}>
            <div className="section-container" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}>
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <HearyPopupMockup screen="history" />
                </motion.div>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '120%',
                  background: 'radial-gradient(circle, rgba(171,21,9,0.04) 0%, transparent 70%)',
                  zIndex: -1,
                  filter: 'blur(60px)',
                }} />
              </div>

              <SectionHeader
                tag="Meeting Intelligence"
                tagIcon={History}
                title="Intelligent meeting history."
                titleHighlight="Always in sync."
                description="Browse past meetings with AI-generated summaries and searchable transcripts. Never miss a decision again."
              />
            </div>

            <style>{`
              @media (max-width: 992px) {
                section:has(.mockup-card) .section-container {
                  grid-template-columns: 1fr !important;
                  gap: 48px !important;
                  text-align: center;
                }
              }
            `}</style>
          </section>

          <div className="section-divider" />

          {/* ─── Developers Section ─── */}
          <DevelopersSection />
        </div>
      </main>

      {/* ─── Download / Add to Chrome Section ─── */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: '10px' }}>
        <DownloadSection />
      </div>

      <HearyFooter />
    </div>
  );
}

export default App;
