import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple } from 'lucide-react';

const TerminalLog = () => {
  const [logs, setLogs] = useState([
    "> Initializing Heary Core...",
    "> Analyzing voice patterns...",
    "> MFCC vectors generated.",
  ]);

  const messages = [
    "> Speaker identification: Verified",
    "> Deepgram socket: Connected",
    "> Real-time transcription: Active",
    "> 512-bit encryption: Enabled",
    "> Local audio processing: 0.2ms latency",
    "> Emotion vector: Confidence 98%",
    "> Context buffer: Synchronized",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const next = [...prev, messages[Math.floor(Math.random() * messages.length)]];
        if (next.length > 6) return next.slice(1);
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal">
      <AnimatePresence mode="popLayout">
        {logs.map((log, i) => (
          <motion.div
            key={log + i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="terminal-line"
          >
            {log}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="section-container" style={{ 
      paddingTop: '180px', 
      textAlign: 'center', 
      minHeight: '110vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
        style={{ marginBottom: '48px', display: 'flex', alignItems: 'center', gap: '14px' }}
      >
        <div style={{ width: '44px', height: '44px', background: 'var(--brand-lime)', borderRadius: '12px', display: 'grid', placeItems: 'center', boxShadow: '0 0 30px var(--glow-lime)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 19.74H22L12 2Z" fill="#000" />
          </svg>
        </div>
        <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff' }}>Heary Intelligence</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: [0.2, 0, 0, 1] }}
        style={{ maxWidth: '1000px', marginBottom: '48px', color: '#fff' }}
      >
        Experience liftoff with the next-gen agent platform
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: [0.2, 0, 0, 1] }}
        style={{ display: 'flex', gap: '20px', marginBottom: '80px' }}
      >
        <a href="#" className="btn-lime">
          <Apple size={22} fill="#000" />
          Download for MacOS
        </a>
        <a href="#" className="btn-dark">
          Explore use cases
        </a>
      </motion.div>

      {/* Agentic Terminal Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <TerminalLog />
      </motion.div>

      {/* Dynamic Glow Background */}
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '1000px', 
        height: '800px', 
        background: 'radial-gradient(circle, rgba(200,239,68,0.05) 0%, transparent 70%)',
        zIndex: -1,
        pointerEvents: 'none',
        filter: 'blur(100px)'
      }}></div>
    </section>
  );
};

export default Hero;
