import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { azkarData } from '../data/azkarData';
import { tadabburData } from '../data/tadabburData';
import { quizData } from '../data/quizData';
import { challengesData } from '../data/challengesData';
import { 
  Sparkles, LayoutDashboard, HeartHandshake, BookOpenCheck, HelpCircle, 
  Flame, Download, Search, CheckCircle2, Bookmark, Volume2, Play, Pause, 
  Copy, RefreshCw, Send, Check, Award, Calendar, ChevronRight, User
} from 'lucide-react';

export default function InteractiveHub({ onOpenEnroll }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  // --- Tab 1: Learner Dashboard State ---
  const [enrolledCount, setEnrolledCount] = useState(2);
  const [activeStreak, setActiveStreak] = useState(5);

  // --- Tab 2: Tadabbur Journal State ---
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [userJournalInput, setUserJournalInput] = useState('');
  const [savedReflections, setSavedReflections] = useState([]);
  const [reflectionSavedAlert, setReflectionSavedAlert] = useState(false);

  // --- Tab 3: Dua & Azkar Library State ---
  const [azkarCategory, setAzkarCategory] = useState('all');
  const [azkarSearch, setAzkarSearch] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // --- Tab 4: Knowledge Check Quiz State ---
  const [activeQuizIndex, setActiveQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // --- Tab 5: 30-Day Character Challenge State ---
  const [completedDays, setCompletedDays] = useState([1, 2, 3, 4, 5]);

  // Handle saving reflection
  const handleSaveReflection = () => {
    if (!userJournalInput.trim()) return;
    const currentPrompt = tadabburData[selectedPromptIndex];
    const newEntry = {
      id: Date.now(),
      surah: currentPrompt.surah,
      text: userJournalInput,
      date: new Date().toLocaleDateString()
    };
    setSavedReflections([newEntry, ...savedReflections]);
    setUserJournalInput('');
    setReflectionSavedAlert(true);
    setTimeout(() => setReflectionSavedAlert(false), 3000);
  };

  // Toggle Dua Favorite
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Copy Dua Text
  const handleCopyDua = (dua) => {
    const textToCopy = `${dua.title}\n\n${dua.arabic}\n\n${dua.transliteration}\n\nTranslation: ${dua.translation}\n\nVia Misaruljannah Institute`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(dua.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Handle Quiz Option Select
  const handleSelectAnswer = (questionIdx, optionIdx) => {
    if (quizSubmitted) return;
    setUserAnswers({ ...userAnswers, [questionIdx]: optionIdx });
  };

  // Submit Quiz & Trigger Confetti
  const handleSubmitQuiz = () => {
    const currentQuiz = quizData[activeQuizIndex];
    let score = 0;
    currentQuiz.questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correct) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);

    if (score === currentQuiz.questions.length) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  // Toggle Day Challenge
  const toggleChallengeDay = (dayNum) => {
    if (completedDays.includes(dayNum)) {
      setCompletedDays(completedDays.filter(d => d !== dayNum));
    } else {
      setCompletedDays([...completedDays, dayNum]);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  };

  // Filtered Azkar List
  const filteredAzkar = azkarData.filter(item => {
    const matchesCategory = azkarCategory === 'all' || item.category === azkarCategory;
    const matchesSearch = item.title.toLowerCase().includes(azkarSearch.toLowerCase()) ||
                          item.translation.toLowerCase().includes(azkarSearch.toLowerCase()) ||
                          item.transliteration.toLowerCase().includes(azkarSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="hub" className="py-24 bg-[#2C0A09] text-[#FDFBF7] relative overflow-hidden bg-islamic-pattern-dark">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#8B261D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>06 • BEYOND COURSES — INTERACTIVE PLATFORM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] font-heading">
            A learning experience people will <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#F3E5AB]">want to return to</span>
          </h2>

          <p className="text-base text-[#EDE3D5] font-light leading-relaxed">
            Misaruljannah provides interactive tools to help you retain knowledge, reflect on Quranic guidance daily, recite daily Azkar, and build lifelong Islamic character.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="mt-12 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-[#4A1512]/80 border border-[#D4AF37]/30 backdrop-blur-md">
            {[
              { id: 'dashboard', label: 'Learner Dashboard', icon: LayoutDashboard },
              { id: 'tadabbur', label: 'Quran Tadabbur Corner', icon: BookOpenCheck },
              { id: 'azkar', label: 'Dua & Azkar Library', icon: HeartHandshake },
              { id: 'quiz', label: 'Weekly Knowledge Check', icon: HelpCircle },
              { id: 'challenge', label: 'Character In Action', icon: Flame },
              { id: 'resources', label: 'Learning Resources', icon: Download }
            ].map(tab => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#2C0A09] shadow-lg scale-105' 
                      : 'text-[#EDE3D5] hover:bg-[#8B261D]/40 hover:text-white'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Learner Portal / Dashboard Demo */}
        {activeTab === 'dashboard' && (
          <div className="mt-10 bg-[#4A1512]/60 rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 backdrop-blur-md space-y-8 animate-fadeIn">
            
            {/* User Greeting Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#6E221C]">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8B261D] text-[#2C0A09] flex items-center justify-center font-bold text-xl shadow-md">
                  <User className="w-8 h-8 text-[#2C0A09]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#FDFBF7]">Assalamu Alaikum, Student!</h3>
                  <p className="text-xs text-[#F3E5AB]">Enrolled Learner • Misaruljannah Student Portal</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#2C0A09] border border-[#D4AF37]/40 text-xs text-[#F3E5AB]">
                  <Flame className="w-4 h-4 text-[#D4AF37] animate-bounce" />
                  <span>{activeStreak} Day Study Streak</span>
                </div>
                <button 
                  onClick={() => onOpenEnroll()} 
                  className="px-4 py-2 rounded-xl bg-[#D4AF37] text-[#2C0A09] font-bold text-xs hover:brightness-110"
                >
                  + Enroll New Course
                </button>
              </div>
            </div>

            {/* Metrics Overview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#2C0A09]/80 border border-[#D4AF37]/20">
                <div className="text-xs text-[#D4AF37] font-semibold">Active Enrolled Courses</div>
                <div className="text-3xl font-extrabold text-[#FDFBF7] mt-1 font-heading">2 Courses</div>
                <div className="text-[11px] text-[#EDE3D5]/70 mt-1">Tajweed Level 1 & Understand Quran</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#2C0A09]/80 border border-[#D4AF37]/20">
                <div className="text-xs text-[#2D6A4F] font-semibold">Overall Course Progress</div>
                <div className="text-3xl font-extrabold text-[#FDFBF7] mt-1 font-heading">68%</div>
                <div className="text-[11px] text-[#EDE3D5]/70 mt-1">12 of 18 lessons completed</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#2C0A09]/80 border border-[#D4AF37]/20">
                <div className="text-xs text-[#F3E5AB] font-semibold">Saved Tadabbur Notes</div>
                <div className="text-3xl font-extrabold text-[#FDFBF7] mt-1 font-heading">{savedReflections.length + 8} Notes</div>
                <div className="text-[11px] text-[#EDE3D5]/70 mt-1">Personal Quran Journal</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#2C0A09]/80 border border-[#D4AF37]/20">
                <div className="text-xs text-[#D4AF37] font-semibold">Next Live Class</div>
                <div className="text-xl font-bold text-[#FDFBF7] mt-1">Tomorrow, 7:00 PM</div>
                <div className="text-[11px] text-[#F3E5AB] mt-1">Lead by Muniha Amjad</div>
              </div>
            </div>

            {/* Enrolled Courses Preview Cards */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#F3E5AB]">Your Enrolled Pathway</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#D4AF37] font-bold">TAJWEED COURSES</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#2D6A4F] text-white">In Progress</span>
                    </div>
                    <h5 className="text-lg font-bold font-heading text-[#FDFBF7] mt-2">Tajweed Course (Level #1)</h5>
                    <p className="text-xs text-[#EDE3D5]/80 mt-1 font-light">Strengthening Rules & Continuous Recitation</p>
                    
                    {/* Progress Bar */}
                    <div className="mt-4 space-y-1">
                      <div className="flex justify-between text-[11px] text-[#F3E5AB]">
                        <span>Lesson 6 of 8</span>
                        <span>75% Completed</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#6E221C]">
                        <div className="h-full rounded-full bg-[#D4AF37] w-[75%]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between pt-3 border-t border-[#6E221C]">
                    <span className="text-xs text-[#EDE3D5]/70">Teacher: Muniha Amjad</span>
                    <button className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center space-x-1">
                      <span>Access Classroom</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#D4AF37] font-bold">QURAN & REFLECTION</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#2D6A4F] text-white">In Progress</span>
                    </div>
                    <h5 className="text-lg font-bold font-heading text-[#FDFBF7] mt-2">Understand Quran Course</h5>
                    <p className="text-xs text-[#EDE3D5]/80 mt-1 font-light">Word-by-Word Translation & Practical Reflection</p>
                    
                    {/* Progress Bar */}
                    <div className="mt-4 space-y-1">
                      <div className="flex justify-between text-[11px] text-[#F3E5AB]">
                        <span>Lesson 5 of 10</span>
                        <span>50% Completed</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#6E221C]">
                        <div className="h-full rounded-full bg-[#D4AF37] w-[50%]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between pt-3 border-t border-[#6E221C]">
                    <span className="text-xs text-[#EDE3D5]/70">Teacher: Lead Educator</span>
                    <button className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center space-x-1">
                      <span>Access Classroom</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Quran Tadabbur Corner */}
        {activeTab === 'tadabbur' && (
          <div className="mt-10 bg-[#4A1512]/60 rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 backdrop-blur-md space-y-8 animate-fadeIn">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#6E221C]">
              <div>
                <h3 className="text-2xl font-bold font-heading text-[#FDFBF7]">Quran Reflection Prompts (Tadabbur Corner)</h3>
                <p className="text-xs text-[#F3E5AB]">Short prompts that help learners connect a verse with a personal action or habit.</p>
              </div>

              {/* Prompt Selector Pills */}
              <div className="flex flex-wrap gap-2">
                {tadabburData.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedPromptIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      selectedPromptIndex === idx 
                        ? 'bg-[#D4AF37] text-[#2C0A09] font-bold' 
                        : 'bg-[#2C0A09] text-[#EDE3D5] hover:bg-[#6E221C]'
                    }`}
                  >
                    Prompt #{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Reflection Verse Card */}
            {(() => {
              const currentPrompt = tadabburData[selectedPromptIndex];
              return (
                <div className="grid lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Verse & Framework Questions */}
                  <div className="lg:col-span-7 space-y-6 bg-[#2C0A09]/90 p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                        {currentPrompt.surah}
                      </span>
                      <span className="text-xs font-semibold text-[#F3E5AB]">Theme: {currentPrompt.theme}</span>
                    </div>

                    <div className="text-center py-4 space-y-3">
                      <p className="font-arabic text-3xl sm:text-4xl leading-loose text-[#FDFBF7] font-bold">
                        {currentPrompt.arabic}
                      </p>
                      <p className="text-sm text-[#F3E5AB] italic font-serif">
                        “{currentPrompt.translation}”
                      </p>
                    </div>

                    {/* 3 Questions Framework */}
                    <div className="space-y-4 pt-4 border-t border-[#6E221C]">
                      <div className="p-3.5 rounded-xl bg-[#4A1512]/60 border border-[#D4AF37]/20 text-xs">
                        <span className="font-bold text-[#D4AF37]">01. Learn: </span>
                        <span className="text-[#EDE3D5]">{currentPrompt.questions.learn}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#4A1512]/60 border border-[#D4AF37]/20 text-xs">
                        <span className="font-bold text-[#F3E5AB]">02. Reflect: </span>
                        <span className="text-[#EDE3D5]">{currentPrompt.questions.reflect}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#2D6A4F]/40 border border-[#40916C]/40 text-xs">
                        <span className="font-bold text-white">03. Live: </span>
                        <span className="text-[#EDE3D5]">{currentPrompt.questions.live}</span>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Personal Journal Writer */}
                  <div className="lg:col-span-5 space-y-4 bg-[#2C0A09]/90 p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[#F3E5AB] flex items-center space-x-2">
                        <BookOpenCheck className="w-4 h-4 text-[#D4AF37]" />
                        <span>Your Personal Tadabbur Journal</span>
                      </h4>
                      <p className="text-xs text-[#EDE3D5]/70 mt-1 font-light">
                        Write how this verse applies to your personal choices, habits, or current struggle today.
                      </p>

                      <textarea
                        rows={6}
                        value={userJournalInput}
                        onChange={(e) => setUserJournalInput(e.target.value)}
                        placeholder="Write your personal reflections, thoughts, and action intention here..."
                        className="w-full mt-4 p-4 rounded-xl bg-[#4A1512]/80 border border-[#D4AF37]/30 text-xs text-[#FDFBF7] placeholder-[#EDE3D5]/50 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    {reflectionSavedAlert && (
                      <div className="p-3 rounded-xl bg-[#2D6A4F] text-white text-xs font-semibold flex items-center space-x-2 animate-fadeIn">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Reflection saved to your personal portal journal!</span>
                      </div>
                    )}

                    <button
                      onClick={handleSaveReflection}
                      className="w-full py-3 rounded-xl font-bold text-xs text-[#2C0A09] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] hover:brightness-110 shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Save My Reflection Note</span>
                    </button>

                  </div>

                </div>
              );
            })()}

          </div>
        )}

        {/* Tab 3: Dua & Azkar Library */}
        {activeTab === 'azkar' && (
          <div className="mt-10 bg-[#4A1512]/60 rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 backdrop-blur-md space-y-8 animate-fadeIn">
            
            {/* Header & Filter Controls */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#6E221C]">
              <div>
                <h3 className="text-2xl font-bold font-heading text-[#FDFBF7]">Dua & Azkar Library</h3>
                <p className="text-xs text-[#F3E5AB]">Searchable resource space organized around morning, evening, prayer, travel and everyday needs.</p>
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-[#D4AF37] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Azkar by keyword..."
                  value={azkarSearch}
                  onChange={(e) => setAzkarSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#2C0A09] border border-[#D4AF37]/30 text-xs text-[#FDFBF7] placeholder-[#EDE3D5]/50 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Azkar' },
                { id: 'morning', label: 'Morning Azkar' },
                { id: 'evening', label: 'Evening Azkar' },
                { id: 'salah', label: 'After Prayer' },
                { id: 'travel', label: 'Travel & Outings' },
                { id: 'everyday', label: 'Everyday Needs' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setAzkarCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    azkarCategory === cat.id
                      ? 'bg-[#D4AF37] text-[#2C0A09] font-bold'
                      : 'bg-[#2C0A09] text-[#EDE3D5] hover:bg-[#6E221C]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Azkar Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredAzkar.map(dua => {
                const isFav = favorites.includes(dua.id);
                const isAudioPlaying = playingAudioId === dua.id;
                const isCopied = copiedId === dua.id;

                return (
                  <div key={dua.id} className="p-6 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/30 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded border border-[#D4AF37]/20">
                          {dua.categoryLabel}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => toggleFavorite(dua.id)}
                            className="p-1.5 rounded-lg bg-[#4A1512] hover:bg-[#8B261D] text-[#F3E5AB] transition-colors"
                          >
                            <Bookmark className={`w-4 h-4 ${isFav ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}`} />
                          </button>
                          <button
                            onClick={() => handleCopyDua(dua)}
                            className="p-1.5 rounded-lg bg-[#4A1512] hover:bg-[#8B261D] text-[#F3E5AB] transition-colors"
                            title="Copy Dua text"
                          >
                            {isCopied ? <Check className="w-4 h-4 text-[#2D6A4F]" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <h4 className="text-base font-bold font-heading text-[#FDFBF7] mt-3">{dua.title}</h4>

                      {/* Arabic Text */}
                      <div className="py-4 text-right">
                        <p className="font-arabic text-2xl leading-loose text-[#F3E5AB] font-bold">
                          {dua.arabic}
                        </p>
                      </div>

                      {/* Transliteration & Translation */}
                      <div className="space-y-2 text-xs">
                        <p className="text-[#D4AF37] italic font-serif">{dua.transliteration}</p>
                        <p className="text-[#EDE3D5] font-light leading-relaxed">{dua.translation}</p>
                      </div>
                    </div>

                    {/* Benefit & Reference Footer */}
                    <div className="pt-3 border-t border-[#6E221C] flex items-center justify-between text-[11px] text-[#EDE3D5]/70">
                      <span>Ref: <strong>{dua.reference}</strong></span>
                      
                      {/* Audio playback simulator */}
                      <button
                        onClick={() => setPlayingAudioId(isAudioPlaying ? null : dua.id)}
                        className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#8B261D]/60 hover:bg-[#8B261D] text-[#F3E5AB] font-semibold transition-colors"
                      >
                        {isAudioPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isAudioPlaying ? 'Playing Audio...' : 'Listen Audio'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* Tab 4: Weekly Knowledge Check Quizzes */}
        {activeTab === 'quiz' && (
          <div className="mt-10 bg-[#4A1512]/60 rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 backdrop-blur-md space-y-8 animate-fadeIn">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#6E221C]">
              <div>
                <h3 className="text-2xl font-bold font-heading text-[#FDFBF7]">Weekly Knowledge Check</h3>
                <p className="text-xs text-[#F3E5AB]">Simple quizzes or recap activities to reinforce Tajweed & Quran learning without stress.</p>
              </div>

              {/* Quiz Selection Buttons */}
              <div className="flex flex-wrap gap-2">
                {quizData.map((quiz, idx) => (
                  <button
                    key={quiz.id}
                    onClick={() => { setActiveQuizIndex(idx); resetQuiz(); }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold ${
                      activeQuizIndex === idx 
                        ? 'bg-[#D4AF37] text-[#2C0A09] font-bold' 
                        : 'bg-[#2C0A09] text-[#EDE3D5] hover:bg-[#6E221C]'
                    }`}
                  >
                    {quiz.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Quiz Card */}
            {(() => {
              const currentQuiz = quizData[activeQuizIndex];
              return (
                <div className="space-y-6 max-w-3xl mx-auto bg-[#2C0A09]/90 p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30">
                  <div className="flex items-center justify-between border-b border-[#6E221C] pb-4">
                    <div>
                      <h4 className="text-xl font-bold font-heading text-[#FDFBF7]">{currentQuiz.title}</h4>
                      <div className="text-xs text-[#D4AF37] font-semibold mt-0.5">Topic: {currentQuiz.topic}</div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-[#8B261D] text-[#F3E5AB]">
                      {currentQuiz.questions.length} Questions
                    </span>
                  </div>

                  {/* Questions List */}
                  <div className="space-y-8">
                    {currentQuiz.questions.map((q, qIdx) => {
                      const selectedOpt = userAnswers[qIdx];

                      return (
                        <div key={qIdx} className="space-y-3 p-4 rounded-xl bg-[#4A1512]/40 border border-[#D4AF37]/15">
                          <p className="text-sm font-bold text-[#FDFBF7]">
                            Q{qIdx + 1}. {q.question}
                          </p>

                          <div className="space-y-2">
                            {q.options.map((opt, optIdx) => {
                              let optionStyle = "bg-[#2C0A09] border-[#D4AF37]/30 text-[#EDE3D5]";
                              if (selectedOpt === optIdx) {
                                optionStyle = "bg-[#8B261D] border-[#D4AF37] text-white font-bold";
                              }
                              if (quizSubmitted) {
                                if (optIdx === q.correct) {
                                  optionStyle = "bg-[#2D6A4F] border-[#40916C] text-white font-bold";
                                } else if (selectedOpt === optIdx && selectedOpt !== q.correct) {
                                  optionStyle = "bg-[#8B261D]/80 border-red-500 text-white line-through";
                                }
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(qIdx, optIdx)}
                                  className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center space-x-3 ${optionStyle}`}
                                >
                                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Feedback Explanation after submit */}
                          {quizSubmitted && (
                            <div className="p-3 rounded-xl bg-[#2C0A09] border border-[#D4AF37]/30 text-xs text-[#F3E5AB] space-y-1">
                              <span className="font-bold text-[#D4AF37]">Explanation: </span>
                              <span>{q.explanation}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Submit / Score Footer */}
                  {!quizSubmitted ? (
                    <button
                      onClick={handleSubmitQuiz}
                      disabled={Object.keys(userAnswers).length < currentQuiz.questions.length}
                      className="w-full py-3.5 rounded-xl font-bold text-xs text-[#2C0A09] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 shadow-lg disabled:opacity-50"
                    >
                      Check My Score & Answers
                    </button>
                  ) : (
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-[#8B261D] to-[#4A1512] text-center space-y-4 border border-[#D4AF37]/40">
                      <Award className="w-10 h-10 text-[#D4AF37] mx-auto animate-bounce" />
                      <h5 className="text-xl font-bold font-heading text-[#FDFBF7]">
                        You Scored {quizScore} / {currentQuiz.questions.length}!
                      </h5>
                      <p className="text-xs text-[#F3E5AB] font-light">
                        {quizScore === currentQuiz.questions.length 
                          ? "MashaAllah! Perfect score! Keep up the excellent Tajweed practice." 
                          : "Great effort! Review the explanations above to solidify your understanding."}
                      </p>
                      <button
                        onClick={resetQuiz}
                        className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#2C0A09] bg-[#D4AF37] hover:brightness-110"
                      >
                        Retake This Quiz
                      </button>
                    </div>
                  )}

                </div>
              );
            })()}

          </div>
        )}

        {/* Tab 5: 30-Day Character in Action Challenge */}
        {activeTab === 'challenge' && (
          <div className="mt-10 bg-[#4A1512]/60 rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 backdrop-blur-md space-y-8 animate-fadeIn">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#6E221C]">
              <div>
                <h3 className="text-2xl font-bold font-heading text-[#FDFBF7]">Character In Action — Daily Challenges</h3>
                <p className="text-xs text-[#F3E5AB]">Small practical challenges that encourage learners to translate Islamic knowledge into daily conduct.</p>
              </div>

              <div className="flex items-center space-x-3 px-4 py-2 rounded-xl bg-[#2C0A09] border border-[#D4AF37]/40 text-xs font-bold text-[#F3E5AB]">
                <Flame className="w-4 h-4 text-[#D4AF37]" />
                <span>{completedDays.length} / 10 Challenges Completed</span>
              </div>
            </div>

            {/* Daily Challenge Items */}
            <div className="grid md:grid-cols-2 gap-4">
              {challengesData.map(ch => {
                const isDone = completedDays.includes(ch.day);

                return (
                  <div
                    key={ch.day}
                    onClick={() => toggleChallengeDay(ch.day)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all flex items-start space-x-4 ${
                      isDone 
                        ? 'bg-[#2D6A4F]/30 border-[#40916C] text-white' 
                        : 'bg-[#2C0A09]/90 border-[#D4AF37]/30 text-[#EDE3D5] hover:border-[#D4AF37]'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                      isDone ? 'bg-[#2D6A4F] text-white' : 'bg-[#8B261D] text-[#F3E5AB]'
                    }`}>
                      {isDone ? <Check className="w-5 h-5" /> : `Day ${ch.day}`}
                    </div>

                    <div className="space-y-1">
                      <h5 className="text-sm font-bold text-[#FDFBF7]">{ch.title}</h5>
                      <p className="text-xs text-[#EDE3D5]/80 font-light">{ch.action}</p>
                      <div className="text-[10px] text-[#D4AF37] font-serif pt-1">
                        Proof: {ch.HadithRef}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* Tab 6: Learning Resources & Downloads */}
        {activeTab === 'resources' && (
          <div className="mt-10 bg-[#4A1512]/60 rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 backdrop-blur-md space-y-8 animate-fadeIn">
            
            <div className="pb-6 border-b border-[#6E221C]">
              <h3 className="text-2xl font-bold font-heading text-[#FDFBF7]">Learning Resources & Vault</h3>
              <p className="text-xs text-[#F3E5AB]">Notes, worksheets, audio recitations, and revision materials organized by course.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/30 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#8B261D] text-[#F3E5AB] flex items-center justify-center mb-3">
                    <Download className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-heading text-[#FDFBF7]">Makharij Articulation Chart</h4>
                  <p className="text-xs text-[#EDE3D5]/80 font-light mt-1">Diagrammatic reference PDF for all 17 Arabic vocal letter articulation points.</p>
                </div>
                <button 
                  onClick={() => alert("Downloading Makharij Articulation Chart PDF...")}
                  className="w-full py-2.5 rounded-xl bg-[#4A1512] hover:bg-[#8B261D] text-xs font-semibold text-[#F3E5AB] border border-[#D4AF37]/30"
                >
                  Download PDF Chart
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/30 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#8B261D] text-[#F3E5AB] flex items-center justify-center mb-3">
                    <Download className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-heading text-[#FDFBF7]">Fiqh of Taharah Summary Guide</h4>
                  <p className="text-xs text-[#EDE3D5]/80 font-light mt-1">Step-by-step printable workbook covering Wudu, Ghusl, and purification rules.</p>
                </div>
                <button 
                  onClick={() => alert("Downloading Fiqh of Taharah Guide PDF...")}
                  className="w-full py-2.5 rounded-xl bg-[#4A1512] hover:bg-[#8B261D] text-xs font-semibold text-[#F3E5AB] border border-[#D4AF37]/30"
                >
                  Download Study Guide
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-[#2C0A09]/90 border border-[#D4AF37]/30 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#8B261D] text-[#F3E5AB] flex items-center justify-center mb-3">
                    <Download className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-heading text-[#FDFBF7]">Asma-ul-Husna Memory Cards</h4>
                  <p className="text-xs text-[#EDE3D5]/80 font-light mt-1">Printable flashcards featuring the 99 Names of Allah with translations & reflection prompts.</p>
                </div>
                <button 
                  onClick={() => alert("Downloading Asma-ul-Husna Cards PDF...")}
                  className="w-full py-2.5 rounded-xl bg-[#4A1512] hover:bg-[#8B261D] text-xs font-semibold text-[#F3E5AB] border border-[#D4AF37]/30"
                >
                  Download Flashcards
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
