import React from 'react';
import { Award, BookOpen, GraduationCap, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function FacultySection() {
  return (
    <section id="faculty" className="py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#8B261D]/10 text-[#8B261D] text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 • QUALIFIED EDUCATORS & LEADERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C0A09] font-heading">
            Learn from <span className="text-[#8B261D]">dedicated scholars</span> & teachers
          </h2>

          <p className="text-base text-[#5A3E39] font-light leading-relaxed">
            Our lead educators bring years of academic rigor, classical Islamic study, and online teaching experience to nurture your personal connection with Allah's words.
          </p>
        </div>

        {/* Educators Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          
          {/* Educator 1: Muniha Amjad */}
          <div className="bg-[#F6F0E6] rounded-3xl p-8 border border-[#EDE3D5] hover:border-[#D4AF37] shadow-lg transition-all space-y-6 flex flex-col justify-between group">
            
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img 
                  src="/muniha_amjad.jpg" 
                  alt="Muniha Amjad" 
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-[#D4AF37] shadow-md group-hover:scale-105 transition-transform"
                />
                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-bold text-[#8B261D] bg-[#8B261D]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    Founder & Lead Educator
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-[#2C0A09] mt-2">Muniha Amjad</h3>
                  <p className="text-xs text-[#5A3E39] font-medium">Islamic Studies Educator • Quranic Education Specialist</p>
                  <p className="text-xs text-[#8B261D] font-bold mt-1">7+ Years Online Teaching Experience</p>
                </div>
              </div>

              {/* Founder Message Quote Box */}
              <div className="p-4 rounded-2xl bg-white border border-[#EDE3D5] italic text-xs text-[#8B261D] font-serif shadow-sm">
                “Our goal is not simply to teach more. It is to help learners understand better, reflect deeper, and live the knowledge they gain.”
              </div>

              {/* Academic Credentials List */}
              <div className="space-y-2 text-xs text-[#2C0A09]">
                <h4 className="font-bold text-[#8B261D] uppercase tracking-wider text-[11px]">Academic Background & Qualifications:</h4>
                
                <ul className="space-y-2 text-xs text-[#5A3E39]">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B261D] shrink-0 mt-0.5" />
                    <span><strong>MS in Islamic Studies</strong> (In Progress) — GIFT University</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B261D] shrink-0 mt-0.5" />
                    <span><strong>BS in Islamic Studies</strong> — University of the Punjab</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B261D] shrink-0 mt-0.5" />
                    <span><strong>Aama & Khasa Certifications</strong> — Jamia Salfia</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B261D] shrink-0 mt-0.5" />
                    <span><strong>AlHuda International Welfare Foundation:</strong> Completed Taleem-ul-Quran, Taleem-ul-Tajweed, Tadabbur-ul-Quran & Taleem-ul-Hadith</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Approach badge */}
            <div className="pt-4 border-t border-[#EDE3D5] text-[11px] text-[#6E504A]">
              Focus: Connecting authentic Islamic knowledge with practical character development and everyday life choices.
            </div>

          </div>

          {/* Educator 2: Hafiz Faisal Bin Amjad / Qari Faisal Bin Amjad */}
          <div className="bg-[#F6F0E6] rounded-3xl p-8 border border-[#EDE3D5] hover:border-[#D4AF37] shadow-lg transition-all space-y-6 flex flex-col justify-between group">
            
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img 
                  src="/faisal_amjad.jpg" 
                  alt="Hafiz Faisal Bin Amjad" 
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-[#D4AF37] shadow-md group-hover:scale-105 transition-transform"
                />
                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-bold text-[#4A1512] bg-[#4A1512]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    Director & Co-Founder
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-[#2C0A09] mt-2">Hafiz Faisal Bin Amjad</h3>
                  <p className="text-xs text-[#5A3E39] font-medium">Qari Faisal Bin Amjad • Quran & Tajweed Specialist</p>
                  <p className="text-xs text-[#2D6A4F] font-bold mt-1">Top 20 Ranking — Qatar International Quran Competition</p>
                </div>
              </div>

              {/* Co-founder Message Quote Box */}
              <div className="p-4 rounded-2xl bg-white border border-[#EDE3D5] italic text-xs text-[#4A1512] font-serif shadow-sm">
                “A Journey Towards Understanding, Growth & Eternal Bliss.”
              </div>

              {/* Academic Credentials List */}
              <div className="space-y-2 text-xs text-[#2C0A09]">
                <h4 className="font-bold text-[#4A1512] uppercase tracking-wider text-[11px]">Academic Background & Distinction:</h4>
                
                <ul className="space-y-2 text-xs text-[#5A3E39]">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Hafiz-e-Quran</strong> & Dedicated Tajweed Educator</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Bachelor's in Islamic Studies</strong> (Pursuing) — University of the Punjab, Lahore</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Qatar International Quran Competition:</strong> Top 20 Ranking</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Multiple Quran & Qirat competition awards at international, national, and university levels</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Approach badge */}
            <div className="pt-4 border-t border-[#EDE3D5] text-[11px] text-[#6E504A]">
              Passion: Helping students improve Quranic recitation with proper Tajweed and develop a meaningful connection with the Holy Quran.
            </div>

          </div>

        </div>

        {/* Trust Microcopy Banner (Page 6 PDF) */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#2C0A09] via-[#4A1512] to-[#2C0A09] text-center text-[#F3E5AB] border border-[#D4AF37]/30 shadow-xl">
          <p className="text-base sm:text-lg font-serif italic">
            “Learn from qualified educators. Study in a structured environment. Ask questions. Practice what you learn.”
          </p>
        </div>

      </div>
    </section>
  );
}
