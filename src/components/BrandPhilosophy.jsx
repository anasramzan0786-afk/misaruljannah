import React, { useState } from 'react';
import { BookOpen, RefreshCw, Sparkles, Heart, Compass, Target, Sun, Award, CheckCircle2 } from 'lucide-react';

export default function BrandPhilosophy() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "LEARN",
      subtitle: "Build a strong foundation",
      question: "What does the source teach?",
      desc: "Build a strong foundation through structured Quranic and Islamic education. Learn correct Tajweed, authentic translation, and essential jurisprudence.",
      color: "from-[#8B261D] to-[#4A1512]",
      borderColor: "border-[#D4AF37]",
      icon: BookOpen
    },
    {
      num: "02",
      title: "REFLECT",
      subtitle: "Connect with meaning",
      question: "What does it mean for me?",
      desc: "Go beyond information by connecting lessons with personal meaning, Tadabbur contemplation, and self-development.",
      color: "from-[#4A1512] to-[#6E221C]",
      borderColor: "border-[#D4AF37]",
      icon: RefreshCw
    },
    {
      num: "03",
      title: "LIVE",
      subtitle: "Turn understanding into action",
      question: "How can I live it?",
      desc: "Turn understanding into practical habits, refined character (Akhlaq), and everyday action in your family, work, and worship choices.",
      color: "from-[#2D6A4F] to-[#1B4332]",
      borderColor: "border-[#40916C]",
      icon: Sun
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#8B261D]/10 text-[#8B261D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 • BRAND FOUNDATION & DIRECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C0A09] font-heading">
            A digital space where knowledge becomes a <span className="text-[#8B261D]">way of life</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A3E39] font-light leading-relaxed">
            Misaruljannah Institute is designed to make authentic Islamic learning structured, accessible, engaging, and relevant to everyday life. We do not want learners to simply finish a course — we want them to understand the message, reflect on it, and carry it into their character.
          </p>
        </div>

        {/* Unique Point Highlight: Quran-to-Life Learning™ */}
        <div className="mt-16 bg-gradient-to-br from-[#2C0A09] via-[#4A1512] to-[#2C0A09] rounded-3xl p-8 sm:p-12 text-[#FDFBF7] shadow-2xl relative overflow-hidden border border-[#D4AF37]/30">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">The Unique Point</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#F3E5AB]">
                Quran-to-Life Learning™
              </h3>
              <p className="text-sm sm:text-base text-[#EDE3D5] leading-relaxed font-light">
                Positioned around a distinctive learning philosophy: <strong className="text-[#F3E5AB]">Learn → Reflect → Live</strong>. Every course answers three foundational life questions:
              </p>
              
              <ul className="space-y-3 pt-2 text-sm text-[#F3E5AB]">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>1. What does the source teach?</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>2. What does it mean for me?</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>3. How can I live it?</span>
                </li>
              </ul>
            </div>

            {/* Interactive 3-Step Pillars */}
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isSelected = activeStep === index;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${
                      isSelected 
                        ? `bg-gradient-to-b ${step.color} ${step.borderColor} shadow-2xl scale-105` 
                        : 'bg-[#4A1512]/40 border-[#D4AF37]/20 hover:bg-[#4A1512]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#D4AF37]">{step.num}</span>
                      <IconComponent className={`w-5 h-5 ${isSelected ? 'text-[#F3E5AB]' : 'text-[#D4AF37]'}`} />
                    </div>

                    <h4 className="text-xl font-bold font-heading text-[#FDFBF7]">{step.title}</h4>
                    <div className="text-xs text-[#D4AF37] font-semibold mt-1">{step.subtitle}</div>

                    <p className="text-xs text-[#EDE3D5]/90 mt-3 leading-relaxed font-light">
                      {step.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 text-[11px] italic text-[#F3E5AB]">
                      “{step.question}”
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div id="about" className="mt-16 grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-[#F6F0E6] border border-[#EDE3D5] hover:border-[#D4AF37] transition-all shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-[#8B261D] text-[#F3E5AB] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold text-[#8B261D] tracking-widest uppercase mb-1">Our Mission</h4>
            <h3 className="text-2xl font-bold font-heading text-[#2C0A09] mb-3">Authentic & Structured Pathway</h3>
            <p className="text-sm text-[#5A3E39] leading-relaxed font-light">
              To provide accessible, structured, and authentic Islamic education that nurtures understanding, reflection, character, and a lasting relationship with the Quran and Sunnah.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-3xl bg-[#F6F0E6] border border-[#EDE3D5] hover:border-[#D4AF37] transition-all shadow-md group">
            <div className="w-12 h-12 rounded-2xl bg-[#4A1512] text-[#D4AF37] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold text-[#4A1512] tracking-widest uppercase mb-1">Our Vision</h4>
            <h3 className="text-2xl font-bold font-heading text-[#2C0A09] mb-3">Living the Light of Guidance</h3>
            <p className="text-sm text-[#5A3E39] leading-relaxed font-light">
              To build a generation of learners who do not merely know about Islam, but understand its guidance, embody its values, and carry its light into everyday life.
            </p>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { num: "01", name: "AUTHENTIC", desc: "Rooted strictly in Quran & Sunnah with scholarly precision" },
            { num: "02", name: "STRUCTURED", desc: "Clear step-by-step learning levels without overwhelming" },
            { num: "03", name: "PRACTICAL", desc: "Direct real-life application in daily habits & character" },
            { num: "04", name: "REFLECTIVE", desc: "Deep Tadabbur that connects knowledge with the heart" },
          ].map((item) => (
            <div key={item.num} className="p-5 rounded-2xl bg-white border border-[#EDE3D5] shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-[#8B261D] font-mono">{item.num}</span>
              <h5 className="text-sm font-bold font-heading text-[#2C0A09] mt-1">{item.name}</h5>
              <p className="text-xs text-[#6E504A] mt-2 font-light">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
