import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1F0706] text-[#EDE3D5] pt-16 pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/50 overflow-hidden shadow-md bg-[#4A100A]">
                <img src="/logo.jpg" alt="Misaruljannah Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wide text-[#FDFBF7] font-heading">
                  MISARULJANNAH
                </span>
                <div className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold">
                  Pathway to Eternal Bliss
                </div>
              </div>
            </div>

            <p className="text-xs text-[#EDE3D5]/80 font-light leading-relaxed max-w-md">
              Misaruljannah Institute is a digital Islamic learning platform offering structured Quranic and Islamic education in a supportive environment where knowledge meets reflection and character development.
            </p>

            <div className="p-3.5 rounded-xl bg-[#2C0A09] border border-[#D4AF37]/30 text-xs text-[#F3E5AB] italic font-serif">
              “Learn the Deen. Understand the Message. Live the Change.”
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Connect With Us</div>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.instagram.com/misar_ul_jannah?stkn=MXUzeHFpcXRldmt1NA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-[#4A1512] hover:bg-[#8B261D] text-[#F3E5AB] flex items-center justify-center transition-all hover:scale-110 border border-[#D4AF37]/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>

                <a 
                  href="https://www.facebook.com/share/18Ui88nNJ2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-[#4A1512] hover:bg-[#1877F2] text-[#F3E5AB] hover:text-white flex items-center justify-center transition-all hover:scale-110 border border-[#D4AF37]/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>

                <a 
                  href="https://wa.me/923056679207" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Chat"
                  className="w-8 h-8 rounded-lg bg-[#4A1512] hover:bg-[#25D366] text-[#F3E5AB] hover:text-white flex items-center justify-center transition-all hover:scale-110 border border-[#D4AF37]/30"
                >
                  <span className="text-sm font-bold">💬</span>
                </a>

                <a 
                  href="https://chat.whatsapp.com/HqSxIcooyNoEUK6gvWuaD1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Community"
                  className="w-8 h-8 rounded-lg bg-[#4A1512] hover:bg-[#25D366] text-[#F3E5AB] hover:text-white flex items-center justify-center transition-all hover:scale-110 border border-[#D4AF37]/30"
                  title="WhatsApp Community Group"
                >
                  <span className="text-sm font-bold">👥</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Navigation</h4>
            <ul className="space-y-2 text-xs text-[#EDE3D5]/90">
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Misaruljannah</a></li>
              <li><a href="#philosophy" className="hover:text-[#D4AF37] transition-colors">Quran-to-Life Learning™</a></li>
              <li><a href="#courses" className="hover:text-[#D4AF37] transition-colors">All Learning Pathways</a></li>
              <li><a href="#hub" className="hover:text-[#D4AF37] transition-colors">Interactive Learner Hub</a></li>
              <li><a href="#faculty" className="hover:text-[#D4AF37] transition-colors">Educators & Leadership</a></li>
              <li><a href="#faqs" className="hover:text-[#D4AF37] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Official Contact</h4>
            <div className="space-y-2 text-xs text-[#EDE3D5]/90">
              <div>
                <span className="text-[#D4AF37] font-semibold">WhatsApp: </span>
                <a href="https://wa.me/923056679207" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3E5AB] underline">
                  +92 305 6679207
                </a>
              </div>
              <div>
                <span className="text-[#D4AF37] font-semibold">Group: </span>
                <a href="https://chat.whatsapp.com/HqSxIcooyNoEUK6gvWuaD1" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3E5AB] underline">
                  Join Community Group
                </a>
              </div>
              <div>
                <span className="text-[#D4AF37] font-semibold">Email: </span>
                <a href="mailto:misaruljannah@gmail.com" className="hover:text-[#F3E5AB] underline">
                  misaruljannah@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[#D4AF37] font-semibold">Website: </span>
                <a href="https://misaruljannah.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3E5AB] underline">
                  misaruljannah.org
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Recommended Brand Line (Page 9 PDF) */}
        <div className="pt-8 border-t border-[#4A1512] text-center space-y-3">
          <div className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            PATHWAY TO ETERNAL BLISS
          </div>
          <p className="text-xs text-[#EDE3D5]/70 font-light">
            Misaruljannah Institute • Authentic Islamic Education • Quranic Learning • Character Development
          </p>
          <div className="text-[11px] text-[#EDE3D5]/40 pt-2">
            © {new Date().getFullYear()} Misaruljannah Institute. All rights reserved. Designed with reverence & visual excellence.
          </div>
        </div>

      </div>
    </footer>
  );
}
