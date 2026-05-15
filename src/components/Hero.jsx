import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Shield, Mic } from 'lucide-react';

const TerminalLog = () => {
  const [logs, setLogs] = useState([
    "> Initializing Hearly Core...",
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
    "> Voice print enrolled: Speaker_04",
    "> Meeting summary: Generated",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const next = [...prev, messages[Math.floor(Math.random() * messages.length)]];
        if (next.length > 7) return next.slice(1);
        return next;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal">
      <div style={{
        display: 'flex',
        gap: '6px',
        marginBottom: '16px',
        paddingBottom: '12px',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }} />
      </div>
      <AnimatePresence mode="popLayout">
        {logs.map((log, i) => (
          <motion.div
            key={log + i}
            initial={{ opacity: 0, x: -15, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="terminal-line"
          >
            {log}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const StatCounter = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numVal = parseFloat(value);
    const duration = 1800;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += numVal / steps;
      if (current >= numVal) {
        setCount(numVal);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const displayVal = Number.isInteger(parseFloat(value))
    ? Math.round(count)
    : count.toFixed(1);

  return (
    <div className="stat-item">
      <div className="stat-value">{displayVal}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section style={{
      paddingTop: '160px',
      paddingBottom: '80px',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="section-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="tag"
          style={{ marginBottom: '40px' }}
        >
          <Sparkles size={14} />
          AI-Powered Voice Intelligence
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '900px', marginBottom: '28px', color: 'var(--text-white)' }}
        >
          The future of{' '}
          <span className="gradient-text-lime">voice intelligence</span>
          {' '}starts here
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: '1.15rem',
            maxWidth: '600px',
            marginBottom: '48px',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
          }}
        >
          Real-time speaker identification, transcription, and AI-powered meeting analysis.
          Built for teams who move fast.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '16px', marginBottom: '72px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#" className="btn-lime">
            Get Early Access
            <ArrowRight size={18} />
          </a>
          <a href="#" className="btn-dark">
            Watch Demo
          </a>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '80px' }}
        >
          <TerminalLog />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="stats-row"
        >
          <StatCounter value="10" suffix="ms" label="Latency" />
          <StatCounter value="99.8" suffix="%" label="Accuracy" />
          <StatCounter value="50" suffix="K+" label="Users" />
          <StatCounter value="256" suffix="-bit" label="Encryption" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
