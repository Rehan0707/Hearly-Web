import React from 'react';
import { motion } from 'framer-motion';
import { Mic, History, Settings } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    style={{ 
      padding: '40px', 
      background: '#fff', 
      borderRadius: '24px', 
      border: '1px solid #e8eaed',
      display: 'flex', 
      flexDirection: 'column', 
      gap: '20px',
      textAlign: 'left'
    }}
  >
    <div style={{ width: '48px', height: '48px', background: '#f8f9fa', borderRadius: '12px', display: 'grid', placeItems: 'center', color: '#1f1f1f' }}>
      <Icon size={24} />
    </div>
    <h3 style={{ fontSize: '1.5rem', fontWeight: 500 }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="section-container" style={{ textAlign: 'center', paddingBottom: '120px' }}>
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Built for the future.</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Powerful tools designed for the next generation of agents.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
        <FeatureCard 
          icon={Mic} 
          title="Smart Enrollment" 
          description="Identify and enroll voices with precision using advanced MFCC analysis."
        />
        <FeatureCard 
          icon={History} 
          title="Intelligent History" 
          description="Browse past meetings with AI-generated summaries and searchable transcripts."
        />
        <FeatureCard 
          icon={Settings} 
          title="Seamless Control" 
          description="Integrated controls that allow you to manage your agents effortlessly."
        />
      </div>
    </section>
  );
};

export default Features;
