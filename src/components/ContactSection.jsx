import React from 'react';
import { ArrowRight, BookOpen, MessageCircle, Mail, Globe, Sparkles, PhoneCall, Share2 } from 'lucide-react';

export default function ContactSection({ onOpenEnroll }) {
  return (
    <section id="contact" className="py-24 bg-[#2C0A09] text-[#FDFBF7] relative overflow-hidden bg-islamic-pattern-dark">
      
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8B261D]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Section 07 (Page 8 PDF) */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#4A1512] via-[#8B261D] to-[#4A1512] border border-[#D4AF37]/40 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>07 • CONVERSION — TURN A VISITOR INTO A LEARNER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#FDFBF7] tracking-tight">
            READY TO BEGIN YOUR JOURNEY?
          </h2>

          <p className="text-base sm:text-lg text-[#EDE3D5] font-light max-w-2xl mx-auto leading-relaxed">
            Explore a structured path to Quranic understanding, authentic Islamic learning, and practical growth. Your learning journey can begin with one sincere step.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenEnroll}
              className="px-8 py-4 rounded-xl font-bold text-sm text-[#2C0A09] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 shadow-xl flex items-center space-x-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>ENROL NOW</span>
            </button>

            <a
              href="#courses"
              className="px-8 py-4 rounded-xl font-semibold text-sm text-[#FDFBF7] bg-[#2C0A09]/70 hover:bg-[#2C0A09] border border-[#D4AF37]/30 flex items-center space-x-2"
            >
              <span>EXPLORE COURSES</span>
            </a>

            <a
              href="https://wa.me/923056679207?text=Assalamu%20Alaikum!%20I%20am%20interested%20in%20Misaruljannah%20Institute%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-xl flex items-center space-x-2 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>TALK TO US ON WHATSAPP</span>
            </a>
          </div>
        </div>

        {/* Contact & Social Media Block Table (Page 8 PDF) */}
        <div className="mt-16 bg-[#4A1512]/60 rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 backdrop-blur-md">
          <h3 className="text-2xl font-bold font-heading text-[#FDFBF7] mb-6 text-center sm:text-left">
            Official Contact & Social Media Directory
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Website */}
            <div className="p-4 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/20 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#8B261D] text-[#F3E5AB] flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#D4AF37] uppercase">WEBSITE</div>
                <div className="text-xs text-[#EDE3D5] mt-0.5">Misaruljannah Institute</div>
                <a 
                  href="https://misaruljannah.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[11px] text-[#F3E5AB] underline font-semibold hover:text-white transition-colors"
                >
                  misaruljannah.org
                </a>
              </div>
            </div>

            {/* Direct WhatsApp & Group */}
            <div className="p-4 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/20 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-[#D4AF37] uppercase">WHATSAPP & COMMUNITY</div>
                <div className="text-xs text-[#EDE3D5]">
                  <a 
                    href="https://wa.me/923056679207" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] text-[#F3E5AB] underline font-semibold hover:text-white block"
                  >
                    💬 Direct Chat: +92 305 6679207
                  </a>
                </div>
                <a 
                  href="https://chat.whatsapp.com/HqSxIcooyNoEUK6gvWuaD1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[11px] text-[#25D366] font-semibold hover:underline block"
                >
                  🔗 Join WhatsApp Group Community
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/20 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#8B261D] text-[#F3E5AB] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#D4AF37] uppercase">EMAIL</div>
                <div className="text-xs text-[#EDE3D5] mt-0.5">Official Student Portal</div>
                <a 
                  href="mailto:misaruljannah@gmail.com" 
                  className="text-[11px] text-[#F3E5AB] underline font-semibold hover:text-white transition-colors"
                >
                  misaruljannah@gmail.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="p-4 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/20 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div>
                <div className="text-xs font-bold text-[#D4AF37] uppercase">INSTAGRAM</div>
                <div className="text-xs text-[#EDE3D5] mt-0.5">Follow for Daily Tadabbur</div>
                <a 
                  href="https://www.instagram.com/misar_ul_jannah?stkn=MXUzeHFpcXRldmt1NA==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[11px] text-[#F3E5AB] underline font-semibold hover:text-white transition-colors"
                >
                  @misar_ul_jannah
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="p-4 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/20 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <div>
                <div className="text-xs font-bold text-[#D4AF37] uppercase">FACEBOOK</div>
                <div className="text-xs text-[#EDE3D5] mt-0.5">Official Facebook Page</div>
                <a 
                  href="https://www.facebook.com/share/18Ui88nNJ2/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[11px] text-[#F3E5AB] underline font-semibold hover:text-white transition-colors"
                >
                  Misaruljannah Facebook
                </a>
              </div>
            </div>

            {/* Direct Phone / Call */}
            <div className="p-4 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/20 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#8B261D] text-[#F3E5AB] flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#D4AF37] uppercase">DIRECT PHONE CALL</div>
                <div className="text-xs text-[#EDE3D5] mt-0.5">Admissions & Counseling</div>
                <a 
                  href="tel:+923056679207" 
                  className="text-[11px] text-[#F3E5AB] underline font-semibold hover:text-white transition-colors"
                >
                  +92 305 6679207
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
