import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandPhilosophy from './components/BrandPhilosophy';
import CoursesSection from './components/CoursesSection';
import CourseModal from './components/CourseModal';
import InteractiveHub from './components/InteractiveHub';
import FacultySection from './components/FacultySection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';

export default function App() {
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);
  const [enrollModalCourse, setEnrollModalCourse] = useState(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const handleOpenEnroll = (course = null) => {
    setEnrollModalCourse(course);
    setIsEnrollModalOpen(true);
  };

  const handleOpenPortal = () => {
    const hubElement = document.getElementById('hub');
    if (hubElement) {
      hubElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C0A09] font-sans selection:bg-[#8B261D] selection:text-white">
      
      {/* Fixed Header Navbar */}
      <Navbar 
        onOpenEnroll={() => handleOpenEnroll(null)} 
        onOpenPortal={handleOpenPortal}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection 
          onOpenEnroll={() => handleOpenEnroll(null)} 
        />

        {/* 2. Brand Foundation & Philosophy (Learn -> Reflect -> Live) */}
        <BrandPhilosophy />

        {/* 3. Structured Courses Pathways Catalog */}
        <CoursesSection 
          onSelectCourse={(course) => setSelectedCourseForModal(course)}
          onOpenEnroll={(course) => handleOpenEnroll(course)}
        />

        {/* 4. Beyond Courses — Interactive Student Hub & Tools */}
        <InteractiveHub 
          onOpenEnroll={(course) => handleOpenEnroll(course)}
        />

        {/* 5. Faculty & Founders Section */}
        <FacultySection />

        {/* 6. Frequently Asked Questions */}
        <FaqSection />

        {/* 7. Conversion & Contact Section */}
        <ContactSection 
          onOpenEnroll={() => handleOpenEnroll(null)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Course Architecture Detail Modal */}
      {selectedCourseForModal && (
        <CourseModal 
          course={selectedCourseForModal}
          onClose={() => setSelectedCourseForModal(null)}
          onEnroll={(course) => handleOpenEnroll(course)}
        />
      )}

      {/* Enrollment & Registration Modal */}
      {isEnrollModalOpen && (
        <EnrollmentModal 
          initialCourse={enrollModalCourse}
          onClose={() => { setIsEnrollModalOpen(false); setEnrollModalCourse(null); }}
        />
      )}

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
        <a
          href="https://wa.me/923056679207?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20learn%20more%20about%20Misaruljannah%20Institute."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/50"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold px-0 group-hover:px-2">
            WhatsApp Us
          </span>
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </aside>

    </div>
  );
}
