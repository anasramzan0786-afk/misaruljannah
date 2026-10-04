import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Menu, X, MessageCircle, UserCheck, HeartHandshake } from 'lucide-react';

export default function Navbar({ onOpenEnroll, onOpenPortal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#2C0A09]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#D4AF37]/30' 
        : 'bg-gradient-to-b from-[#2C0A09]/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-11 h-11 rounded-xl border border-[#D4AF37]/50 overflow-hidden shadow-md group-hover:scale-105 transition-transform bg-[#4A100A]">
            <img src="/logo.jpg" alt="Misaruljannah Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-xl font-extrabold tracking-wide text-[#FDFBF7] font-heading">
                MISARULJANNAH
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB] font-medium hidden sm:inline-block">
                INSTITUTE
              </span>
            </div>
            <div className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold">
              Pathway to Eternal Bliss
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#EDE3D5]">
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">About & Vision</a>
          <a href="#philosophy" className="hover:text-[#D4AF37] transition-colors">Philosophy</a>
          <a href="#courses" className="hover:text-[#D4AF37] transition-colors">Courses</a>
          <a href="#hub" className="flex items-center space-x-1.5 text-[#F3E5AB] hover:text-white transition-colors bg-[#8B261D]/30 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Interactive Hub</span>
          </a>
          <a href="#faculty" className="hover:text-[#D4AF37] transition-colors">Faculty</a>
          <a href="#faqs" className="hover:text-[#D4AF37] transition-colors">FAQs</a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <button 
            onClick={onOpenPortal}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#F3E5AB] bg-[#4A1512]/60 hover:bg-[#6E221C] border border-[#D4AF37]/40 transition-all shadow-sm"
          >
            <UserCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Learner Portal</span>
          </button>

          <button 
            onClick={onOpenEnroll}
            className="flex items-center space-x-1.5 px-5 py-2 rounded-lg text-xs font-bold text-[#2C0A09] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 transition-all shadow-lg hover:shadow-[#D4AF37]/20"
          >
            <BookOpen className="w-4 h-4" />
            <span>Enroll Now</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#FDFBF7] hover:bg-[#8B261D]/40 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2C0A09] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3 font-medium text-base text-[#EDE3D5]">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-[#4A1512] hover:text-[#D4AF37]"
            >
              About & Vision
            </a>
            <a 
              href="#philosophy" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-[#4A1512] hover:text-[#D4AF37]"
            >
              Learning Philosophy
            </a>
            <a 
              href="#courses" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-[#4A1512] hover:text-[#D4AF37]"
            >
              Browse Courses
            </a>
            <a 
              href="#hub" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-[#4A1512] text-[#F3E5AB] flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Interactive Learner Hub</span>
            </a>
            <a 
              href="#faculty" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-[#4A1512] hover:text-[#D4AF37]"
            >
              Faculty & Founders
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-[#4A1512] hover:text-[#D4AF37]"
            >
              FAQs
            </a>
          </div>

          <div className="pt-4 flex flex-col space-y-3">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenPortal(); }}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-[#F3E5AB] bg-[#4A1512] border border-[#D4AF37]/40 flex items-center justify-center space-x-2"
            >
              <UserCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Learner Portal Demo</span>
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenEnroll(); }}
              className="w-full py-3 rounded-lg text-sm font-bold text-[#2C0A09] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] flex items-center justify-center space-x-2 shadow-lg"
            >
              <BookOpen className="w-4 h-4" />
              <span>Start Your Learning Journey</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
