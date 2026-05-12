import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.05em', color: '#fff' }}>
        <div style={{ width: '32px', height: '32px', background: 'var(--brand-lime)', borderRadius: '8px', display: 'grid', placeItems: 'center' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 19.74H22L12 2Z" fill="#000" />
          </svg>
        </div>
        <span>Heary</span>
      </div>
      
      <div className="nav-links">
        <a href="#">Product</a>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          Use Cases <ChevronDown size={16} />
        </a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          Resources <ChevronDown size={16} />
        </a>
      </div>

      <a href="#" className="btn-lime" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
        Download
        <Download size={20} />
      </a>
    </nav>
  );
};

export default Navbar;
