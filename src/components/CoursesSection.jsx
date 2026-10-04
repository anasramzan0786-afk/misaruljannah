import React, { useState } from 'react';
import { coursesData } from '../data/coursesData';
import { Search, Sparkles, Filter, BookOpen, Clock, Award, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function CoursesSection({ onSelectCourse, onOpenEnroll }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'tajweed', label: 'Tajweed Courses' },
    { id: 'quran-reflection', label: 'Quran & Reflection' },
    { id: 'foundations', label: 'Islamic Foundations' },
    { id: 'upcoming', label: 'Upcoming Courses' }
  ];

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-24 bg-[#F6F0E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#8B261D]/10 text-[#8B261D] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>04 • STRUCTURED LEARNING PATHWAYS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C0A09] font-heading">
            Courses designed for a <span className="text-[#8B261D]">journey</span>, not just a certificate
          </h2>

          <p className="text-base text-[#5A3E39] font-light leading-relaxed">
            Every course combines authentic knowledge, guided recitation, Tadabbur reflection, and real-life action steps. Select a category below to explore our curriculum.
          </p>
        </div>

        {/* Filters & Search Controls */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
                  selectedCategory === cat.id
                    ? 'bg-[#2C0A09] text-[#F3E5AB] border border-[#D4AF37]/50 shadow-md scale-105'
                    : 'bg-white text-[#5A3E39] border border-[#EDE3D5] hover:bg-[#FDFBF7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8B261D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-white border border-[#EDE3D5] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-[#2C0A09] placeholder-[#8B6E68]"
            />
          </div>

        </div>

        {/* Courses Grid */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div 
                key={course.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EDE3D5] hover:border-[#D4AF37] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8B261D] via-[#D4AF37] to-[#4A1512]" />

                <div>
                  {/* Category & Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8B261D] bg-[#8B261D]/10 px-3 py-1 rounded-full">
                      {course.categoryLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-[#2C0A09] bg-[#F3E5AB]/60 border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-md">
                      {course.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold font-heading text-[#2C0A09] group-hover:text-[#8B261D] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs font-serif text-[#8B261D] italic mt-1">
                    {course.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#5A3E39] mt-3 leading-relaxed font-light line-clamp-3">
                    {course.shortDesc}
                  </p>

                  {/* Course Specs */}
                  <div className="my-5 pt-4 border-t border-[#F6F0E6] grid grid-cols-2 gap-2 text-[11px] text-[#6E504A]">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-[#F6F0E6] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="text-xs font-bold text-[#8B261D] hover:text-[#4A1512] flex items-center space-x-1 group/btn"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenEnroll(course)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#2C0A09] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] hover:brightness-105 shadow-sm transition-all"
                  >
                    Enroll
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-[#6E504A] bg-white rounded-3xl border border-[#EDE3D5]">
              <Tag className="w-8 h-8 text-[#D4AF37] mx-auto mb-2 opacity-60" />
              <p className="text-sm font-semibold">No courses matched your search query.</p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-[#8B261D] underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
