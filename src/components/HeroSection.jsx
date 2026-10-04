import React, { useState, useRef } from 'react';
import { ArrowRight, BookOpen, Sparkles, Volume2, Play, Pause, CheckCircle2, Heart, Award, ShieldCheck } from 'lucide-react';

export default function HeroSection({ onOpenEnroll }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlayingAudio(true))
        .catch((err) => console.log('Audio playback error:', err));
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 bg-islamic-pattern-dark flex items-center overflow-hidden">
      
      {/* Background Graphic & Ambient Light */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <img 
          src="/hero_bg.jpg" 
          alt="Islamic Architecture Motif" 
          className="w-full h-full object-cover object-center filter brightness-90 saturate-120"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C0A09] via-[#2C0A09]/70 to-[#2C0A09]/40" />
      </div>

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#8B261D]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold tracking-wide uppercase shadow-inner">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Authentic Islamic Learning • Character • Connection</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FDFBF7] font-heading leading-tight tracking-tight">
              Your journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#E5C158]">deeper faith</span> begins with understanding.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#EDE3D5] leading-relaxed max-w-2xl font-light">
              Explore authentic Islamic learning thoughtfully structured to help you understand the Quran, strengthen your connection with Allah, and bring divine teachings into everyday life.
            </p>

            {/* Core Motto Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#4A1512]/80 to-[#6E221C]/60 border border-[#D4AF37]/30 backdrop-blur-md shadow-xl text-[#F3E5AB] italic font-serif text-center lg:text-left text-sm sm:text-base">
              “Learn the Deen. Understand the Message. Live the Change.”
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenEnroll}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-[#2C0A09] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center space-x-3 transition-all group"
              >
                <span>Start Your Learning Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#courses"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-[#FDFBF7] bg-[#4A1512]/60 hover:bg-[#6E221C] border border-[#D4AF37]/30 flex items-center justify-center space-x-2 transition-all shadow-md"
              >
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Explore Courses</span>
              </a>
            </div>

            {/* Core Values Quick Row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#4A1512]/80">
              <div className="flex items-center space-x-2 text-xs text-[#EDE3D5]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>01 AUTHENTIC</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#EDE3D5]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>02 STRUCTURED</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#EDE3D5]">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>03 PRACTICAL</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#EDE3D5]">
                <Heart className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>04 REFLECTIVE</span>
              </div>
            </div>

          </div>

          {/* Right Hero Interactive Visual Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Islamic Geometric Frame */}
            <div className="relative mx-auto max-w-md p-1 rounded-3xl bg-gradient-to-b from-[#D4AF37] via-[#8B261D] to-[#4A1512] shadow-2xl">
              <div className="bg-[#2C0A09]/95 rounded-[22px] p-6 sm:p-8 space-y-6 backdrop-blur-xl border border-[#D4AF37]/30">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-[#4A1512]">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F3E5AB]">Daily Quranic Reflection</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#8B261D]/40 text-[#D4AF37]">Surah Al-Baqarah</span>
                </div>

                {/* Calligraphy Card */}
                <div className="text-center space-y-3 py-2">
                  <p className="font-arabic text-3xl sm:text-4xl leading-loose text-[#FDFBF7] font-bold">
                    فَاذْكُرُونِي أَذْكُرْكُمْ
                  </p>
                  <p className="text-sm italic text-[#F3E5AB]">
                    “So remember Me; I will remember you.”
                  </p>
                  <p className="text-xs text-[#EDE3D5]/80 font-light">
                    [Quran 2:152] — Tadabbur Focus: Daily Dhikr & Conscious Heart Connection
                  </p>
                </div>

                {/* Interactive Tajweed Recitation Audio Simulator */}
                <div 
                  className="p-4 rounded-xl bg-[#4A1512]/80 border border-[#D4AF37]/30 space-y-3 cursor-pointer hover:border-[#D4AF37]/60 transition-colors"
                  onClick={toggleAudio}
                >
                  {/* HTML5 Audio Element */}
                  <audio 
                    ref={audioRef} 
                    src="/hafiz_faisal_audio.mp3" 
                    onEnded={() => setIsPlayingAudio(false)} 
                    onPause={() => setIsPlayingAudio(false)}
                    onPlay={() => setIsPlayingAudio(true)}
                    preload="metadata"
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); toggleAudio(); }}
                        aria-label={isPlayingAudio ? "Pause recitation" : "Play recitation"}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#2C0A09] flex items-center justify-center shadow-md hover:scale-105 transition-transform shrink-0"
                      >
                        {isPlayingAudio ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                      </button>
                      <div>
                        <div className="text-xs font-bold text-[#FDFBF7]">Tajweed Recitation Audio</div>
                        <div className="text-[11px] text-[#D4AF37]">
                          {isPlayingAudio ? "Now Playing • Demonstration by Qari Faisal Bin Amjad" : "Click to Listen • Qari Faisal Bin Amjad"}
                        </div>
                      </div>
                    </div>
                    <Volume2 className={`w-4 h-4 text-[#F3E5AB] ${isPlayingAudio ? 'animate-pulse text-[#D4AF37]' : ''}`} />
                  </div>

                  {/* Audio Waveform visualization */}
                  <div className="flex items-center space-x-1 h-6 pt-1">
                    {[40, 70, 30, 90, 50, 80, 100, 40, 65, 85, 30, 70, 95, 40, 60, 80].map((h, idx) => (
                      <div 
                        key={idx}
                        className={`flex-1 rounded-full transition-all duration-300 ${
                          isPlayingAudio ? 'bg-[#D4AF37] animate-pulse' : 'bg-[#6E221C]'
                        }`}
                        style={{ height: isPlayingAudio ? `${h}%` : '20%' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Founder Micro-quote */}
                <div className="pt-2 flex items-center space-x-3 text-xs text-[#EDE3D5]">
                  <img 
                    src="/muniha_amjad.jpg" 
                    alt="Muniha Amjad" 
                    className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]"
                  />
                  <div>
                    <div className="font-semibold text-[#F3E5AB]">Muniha Amjad — Lead Educator</div>
                    <div className="text-[11px] text-[#EDE3D5]/70">“We want learners to understand the message & live the change.”</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
