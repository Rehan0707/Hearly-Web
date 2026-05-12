import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { motion } from 'framer-motion';
import { Mic, History, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const SectionHeader = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
    viewport={{ once: true }}
    style={{ maxWidth: '500px' }}
  >
    <h2 style={{ marginBottom: '32px', color: '#fff' }}>{title}</h2>
    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '40px' }}>{description}</p>
    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-lime)', fontWeight: 600, textDecoration: 'none' }}>
      Learn more <ArrowRight size={20} />
    </a>
  </motion.div>
);

const HearyPopupMockup = ({ screen }) => (
  <div className="glass-card" style={{ 
    width: '340px', 
    height: '520px', 
    background: '#000', 
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '14px', height: '14px', background: 'var(--brand-lime)', borderRadius: '4px' }}></div>
        <span style={{ fontSize: '1rem', fontWeight: 700 }}>Heary</span>
      </div>
      <Settings size={18} color="#444" />
    </div>

    <div style={{ padding: '24px', flex: 1 }}>
      {screen === 'enrollment' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'center' }}>
          <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            {[1, 0.4, 0.8, 0.2, 1, 0.6, 0.9, 0.3, 0.7, 0.5].map((h, i) => (
              <motion.div 
                key={i}
                animate={{ height: [h*40, h*100, h*40] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                style={{ width: '5px', background: 'var(--brand-lime)', borderRadius: '3px', boxShadow: '0 0 10px rgba(200,239,68,0.3)' }}
              />
            ))}
          </div>
          <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>Enrolling Speaker</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Say "Hello Heary" to start the identification process.</p>
          <button style={{ background: 'var(--brand-lime)', color: '#000', border: 'none', padding: '16px', borderRadius: '16px', fontWeight: 800, marginTop: '32px', fontSize: '1rem', cursor: 'pointer' }}>Confirm Voice</button>
        </div>
      )}

      {screen === 'history' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#fff' }}>Recent Meetings</h3>
          {[
            { title: "Weekly Sync", time: "2m ago", status: "Analyzed" },
            { title: "Product Design", time: "1h ago", status: "Analyzed" },
            { title: "Client Call", time: "Yesterday", status: "Analyzed" },
            { title: "Engineering Sync", time: "2 days ago", status: "Analyzed" }
          ].map((m, i) => (
            <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255,255,255,0.03)' }}>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 600 }}>{m.title}</div>
                <div style={{ fontSize: '0.8rem', color: '#555' }}>{m.time}</div>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--brand-lime)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                <CheckCircle size={14} />
                {m.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="app">
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Heary UI - Enrollment */}
        <section style={{ padding: '140px 0' }}>
          <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '120px', alignItems: 'center' }}>
            <SectionHeader 
              title="Smart Voice Enrollment" 
              description="Identify and enroll speakers with zero friction. Heary's high-fidelity analysis ensures every voice is captured and attributed correctly in real-time."
            />
            
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
                viewport={{ once: true }}
                style={{ perspective: '1000px' }}
              >
                <HearyPopupMockup screen="enrollment" />
              </motion.div>
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: '130%', 
                height: '130%', 
                background: 'radial-gradient(circle, rgba(200,239,68,0.05) 0%, transparent 70%)',
                zIndex: -1,
                filter: 'blur(60px)'
              }}></div>
            </div>
          </div>
        </section>

        {/* Heary UI - History */}
        <section style={{ padding: '140px 0', background: 'rgba(255,255,255,0.01)' }}>
          <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '120px', alignItems: 'center' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', order: window.innerWidth > 992 ? 0 : 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
                viewport={{ once: true }}
                style={{ perspective: '1000px' }}
              >
                <HearyPopupMockup screen="history" />
              </motion.div>
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: '130%', 
                height: '130%', 
                background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                zIndex: -1,
                filter: 'blur(60px)'
              }}></div>
            </div>

            <SectionHeader 
              title="Intelligent Meeting History" 
              description="Browse past meetings with AI-generated summaries and searchable transcripts. Stay on top of every decision without needing to take a single note."
            />
          </div>
        </section>

        {/* Action Section */}
        <section style={{ padding: '160px 0', textAlign: 'center' }}>
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
              className="glass-card" 
              style={{ padding: '100px 40px', background: 'linear-gradient(135deg, rgba(200,239,68,0.1) 0%, rgba(0,0,0,1) 100%)' }}
            >
              <h2 style={{ fontSize: '4rem', marginBottom: '32px', color: '#fff' }}>Built for the agent-first era.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.4rem', marginBottom: '56px', maxWidth: '700px', margin: '0 auto 56px' }}>
                Join thousands of teams building the future with Heary Intelligence.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <a href="#" className="btn-lime">Download Now</a>
                <a href="#" className="btn-dark">Learn More</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '100px 0', borderTop: '1px solid var(--border-dark)', textAlign: 'center' }}>
        <div className="section-container">
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>© 2026 Heary Intelligence. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
