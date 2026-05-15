"use client";
import React from "react";
import logo from "../../assets/logo.png";

function HearyFooter() {
  return (
    <footer className="w-full px-6 pt-12 pb-8 md:px-12 md:pt-24 md:pb-16 relative z-10" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[1400px] mx-auto mb-12 md:mb-16 gap-16">
        {/* Left */}
        <div className="text-3xl md:text-[2.75rem] leading-tight tracking-tight font-normal text-black">
          Experience liftoff
        </div>
        
        {/* Right Links */}
        <div className="flex gap-16 md:gap-24 font-medium mr-4 md:mr-12">
          <div className="flex flex-col gap-4 text-[0.95rem] text-[#707070]">
            <a href="#" className="hover:text-[#C5A3FF] transition-colors">Add to Chrome</a>
            <a href="#" className="hover:text-[#C5A3FF] transition-colors">Product</a>
            <a href="#" className="hover:text-[#C5A3FF] transition-colors">Docs</a>
            <a href="#" className="hover:text-[#C5A3FF] transition-colors">Changelog</a>
            <a href="#" className="hover:text-[#C5A3FF] transition-colors">Press</a>
            <a href="#" className="hover:text-[#C5A3FF] transition-colors">Releases</a>
          </div>
          <div className="flex flex-col gap-4 text-[0.95rem] text-[#707070]">
            <a href="#" className="hover:text-[#C5A3FF] transition-colors">Blog</a>
            <a href="#" className="hover:text-[#C5A3FF] transition-colors">Pricing</a>
            <a href="#" className="hover:text-[#C5A3FF] transition-colors">Use Cases</a>
          </div>
        </div>
      </div>

      {/* Middle Big Text */}
      <div className="w-full flex justify-center items-center pb-4 mb-12 md:mb-16">
         <h1 
           className="text-[20vw] leading-[0.8] font-medium tracking-normal text-[#1A1A1A] select-none" 
           style={{ fontFamily: "var(--font-display)" }}
         >
           Hearly
         </h1>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#707070] max-w-[1400px] mx-auto w-full">
        <div className="flex items-center gap-2 mb-8 md:mb-0 self-start md:self-auto">
          <img src={logo} alt="Hearly" className="w-6 h-6 object-contain rounded" />
          <span className="font-semibold text-black text-base">Hearly</span>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 font-medium">
          <a href="#" className="hover:text-black transition-colors">About Hearly</a>
          <a href="#" className="hover:text-black transition-colors">Products</a>
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default HearyFooter;
