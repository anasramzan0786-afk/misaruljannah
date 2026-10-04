import React, { useState } from 'react';
import { X, BookOpen, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function EnrollmentModal({ initialCourse, onClose }) {
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourse?.id || coursesData[0].id);
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [preferredTime, setPreferredTime] = useState('Weekend Evening');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedCourse = coursesData.find(c => c.id === selectedCourseId) || coursesData[0];

  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
      `*🕌 NEW ENROLLMENT APPLICATION*\n` +
      `*Misaruljannah Institute*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `📚 *Course:* ${selectedCourse.title}\n` +
      `🎓 *Level / Duration:* ${selectedCourse.level} (${selectedCourse.duration})\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Student Name:* ${studentName.trim()}\n` +
      `📱 *Student WhatsApp:* ${whatsappNumber.trim()}\n` +
      `📧 *Email:* ${email.trim()}\n` +
      `🕒 *Preferred Slot:* ${preferredTime}\n` +
      `📝 *Notes/Background:* ${notes.trim() || 'None'}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent from Misaruljannah Website Form_`
    );
  };

  const getWhatsAppUrl = () => {
    return `https://wa.me/923056679207?text=${buildWhatsAppMessage()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getWhatsAppUrl();
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const url = getWhatsAppUrl();
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#D4AF37]/50 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2C0A09] via-[#4A1512] to-[#2C0A09] p-6 text-[#FDFBF7] relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#8B261D]/50 hover:bg-[#8B261D] text-[#F3E5AB] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] text-xs font-semibold uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Misaruljannah Course Enrollment</span>
          </div>

          <h3 className="text-2xl font-extrabold font-heading text-[#FDFBF7]">
            Start Your Learning Journey
          </h3>
          <p className="text-xs text-[#F3E5AB] font-light mt-1">
            Fill in your details below or connect directly with our academic coordinator via WhatsApp.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Select Course */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C0A09] mb-1">
                  Select Course
                </label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#F6F0E6] border border-[#EDE3D5] text-xs font-semibold text-[#2C0A09] focus:outline-none focus:border-[#D4AF37]"
                >
                  {coursesData.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.level}) — {c.duration}
                    </option>
                  ))}
                </select>
              </div>

              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C0A09] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ayesha Ahmad / Ali Khan"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-[#EDE3D5] text-xs text-[#2C0A09] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Email & WhatsApp Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C0A09] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-[#EDE3D5] text-xs text-[#2C0A09] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C0A09] mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-[#EDE3D5] text-xs text-[#2C0A09] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C0A09] mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#F6F0E6] border border-[#EDE3D5] text-xs text-[#2C0A09] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Weekday Evening">Weekday Evening (Mon-Thu)</option>
                  <option value="Weekend Evening">Weekend Evening (Sat-Sun)</option>
                  <option value="Morning Batch">Morning Batch</option>
                  <option value="Flexible Self-Paced">Flexible Self-Paced Recordings</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C0A09] mb-1">
                  Questions / Additional Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention any prior Arabic/Tajweed study or specific questions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-[#EDE3D5] text-xs text-[#2C0A09] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-lg flex items-center justify-center space-x-2 transition-transform hover:scale-[1.01]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Submit & Send Application via WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#5A3E39] text-center mt-2">
                  Clicking submit will securely open WhatsApp with your pre-filled course enrollment details.
                </p>
              </div>

            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-heading text-[#2C0A09]">JazakAllah Khair, {studentName}!</h4>
              <p className="text-sm text-[#5A3E39] max-w-md mx-auto font-light leading-relaxed">
                Your enrollment request for <strong>{selectedCourse.title}</strong> has been created and sent to our WhatsApp coordinator at <strong>+92 305 6679207</strong>.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center space-x-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp Again</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-[#2C0A09] bg-[#EDE3D5] hover:bg-[#D4AF37] transition-colors"
                >
                  Close & Return
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
