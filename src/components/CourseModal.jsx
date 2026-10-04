import React from 'react';
import { X, CheckCircle2, BookOpen, Clock, Award, Shield, ArrowRight, UserCheck, Sparkles } from 'lucide-react';

export default function CourseModal({ course, onClose, onEnroll }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#D4AF37]/50 overflow-hidden my-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#2C0A09] via-[#4A1512] to-[#2C0A09] p-6 sm:p-8 text-[#FDFBF7] relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#8B261D]/50 hover:bg-[#8B261D] text-[#F3E5AB] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{course.categoryLabel}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#FDFBF7]">
            {course.title}
          </h3>
          <p className="text-sm text-[#F3E5AB] mt-1 font-serif italic">
            {course.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-medium text-[#EDE3D5]">
            <span className="flex items-center space-x-1.5 bg-[#4A1512]/60 px-3 py-1 rounded-lg border border-[#D4AF37]/30">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Duration: {course.duration}</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-[#4A1512]/60 px-3 py-1 rounded-lg border border-[#D4AF37]/30">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Level: {course.level}</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-[#8B261D]/60 px-3 py-1 rounded-lg border border-[#D4AF37]/30 text-[#F3E5AB]">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{course.fees}</span>
            </span>
          </div>
        </div>

        {/* Modal Body with 4 Pillars Structure (Page 6 PDF) */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
          
          <p className="text-sm text-[#5A3E39] leading-relaxed font-light">
            {course.shortDesc}
          </p>

          {/* 01 • What you will learn */}
          <div className="p-5 rounded-2xl bg-[#F6F0E6] border border-[#EDE3D5] space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider text-[#8B261D] uppercase flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-[#8B261D] text-white flex items-center justify-center text-[10px]">01</span>
              <span>What You Will Learn — Concise Outcomes</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#2C0A09]">
              {course.whatYouWillLearn?.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B261D] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 02 • What you will practice */}
          <div className="p-5 rounded-2xl bg-[#F6F0E6] border border-[#EDE3D5] space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider text-[#4A1512] uppercase flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-[#4A1512] text-white flex items-center justify-center text-[10px]">02</span>
              <span>What You Will Practice — Recitation & Reflection</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#2C0A09]">
              {course.whatYouWillPractice?.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 03 • How you will learn */}
          <div className="p-5 rounded-2xl bg-[#F6F0E6] border border-[#EDE3D5] space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider text-[#2D6A4F] uppercase flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center text-[10px]">03</span>
              <span>How You Will Learn — Live Classes & Material</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#2C0A09]">
              {course.howYouWillLearn?.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 04 • What you will take away */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#2C0A09] to-[#4A1512] text-[#FDFBF7] space-y-3 border border-[#D4AF37]/30">
            <h4 className="text-xs font-extrabold tracking-wider text-[#F3E5AB] uppercase flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#2C0A09] flex items-center justify-center text-[10px] font-bold">04</span>
              <span>What You Will Take Away — Knowledge & Habit Gained</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#EDE3D5]">
              {course.whatYouWillTakeAway?.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lead Educator note */}
          <div className="pt-2 flex items-center justify-between text-xs text-[#5A3E39] border-t border-[#EDE3D5]">
            <div className="flex items-center space-x-2">
              <UserCheck className="w-4 h-4 text-[#8B261D]" />
              <span>Instruction by: <strong>Muniha Amjad</strong> & Lead Faculty</span>
            </div>
            <span className="text-[11px] text-[#8B261D] italic font-semibold">Structured • Accessible • Authentic</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-[#F6F0E6] p-6 border-t border-[#EDE3D5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#6E504A]">
            Need help selecting your time slot? <a href="#contact" onClick={onClose} className="text-[#8B261D] font-bold underline">Talk to our team</a>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-[#5A3E39] bg-white border border-[#EDE3D5] hover:bg-[#FDFBF7]"
            >
              Close
            </button>

            <button
              onClick={() => { onClose(); onEnroll(course); }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-[#2C0A09] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 shadow-lg flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Enroll In This Course</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
