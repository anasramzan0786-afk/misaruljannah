import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchFilter, setSearchFilter] = useState('');

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchFilter.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <section id="faqs" className="py-24 bg-[#F6F0E6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#8B261D]/10 text-[#8B261D] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>07 • FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C0A09] font-heading">
            Everything you need to know before <span className="text-[#8B261D]">starting</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5A3E39] font-light leading-relaxed">
            Have questions about online class timings, recordings, course fees, or certification? We've answered all common student questions below.
          </p>
        </div>

        {/* Search input */}
        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-[#8B261D] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g., recordings, fee, timings)..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl text-xs bg-white border border-[#EDE3D5] focus:outline-none focus:border-[#D4AF37] text-[#2C0A09] shadow-sm"
          />
        </div>

        {/* Accordion Container */}
        <div className="mt-10 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-[#D4AF37] shadow-lg' 
                      : 'bg-white/70 border-[#EDE3D5] hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#2C0A09] focus:outline-none"
                  >
                    <span className="flex items-center space-x-3">
                      <span className="text-xs font-mono text-[#8B261D] font-bold">0{idx + 1}.</span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#8B261D] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#5A3E39] font-light leading-relaxed border-t border-[#F6F0E6] animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-xs text-[#5A3E39] bg-white rounded-2xl border border-[#EDE3D5]">
              No matching questions found. Feel free to contact our admissions team directly via WhatsApp!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
