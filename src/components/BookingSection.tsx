import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, User, Phone, Mail, CheckCircle, Sparkles, Utensils, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

export const BookingSection: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '12:30',
    guests: '2 Guests',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomCode = `GUP-${Math.floor(1000 + Math.random() * 9000)}`;
      setRefCode(randomCode);
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#E86034', '#2D6A4F', '#FFB703', '#FAF7F2'],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      time: '12:30',
      guests: '2 Guests',
      name: '',
      phone: '',
      email: '',
      notes: '',
    });
  };

  return (
    <section
      id="book"
      className={`py-16 sm:py-24 lg:py-36 relative overflow-hidden transition-colors duration-300 w-full ${
        theme === 'dark' ? 'bg-[#0E0C0A] text-white' : 'bg-[#181513] text-white'
      }`}
    >
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#E86034]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#2D6A4F]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFB703] mb-2 sm:mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>TABLE RESERVATIONS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-2"
          >
            COME HUNGRY.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[#C5BCB1] font-serif-display italic"
          >
            Leave the rest to us.
          </motion.p>
        </div>

        {/* Booking Card */}
        <div
          className={`border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl relative ${
            theme === 'dark' ? 'bg-[#1A1613] border-[#332C25]' : 'bg-[#24201C] border-[#3A332C]'
          }`}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                {/* Notice */}
                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#2E2924]/80 border border-[#423B33] flex items-start gap-2.5 text-[11px] sm:text-xs text-[#A89F91]">
                  <AlertCircle className="w-4 h-4 text-[#FFB703] shrink-0 mt-0.5" />
                  <span>
                    We hold tables for 15 minutes. For immediate walk-ins or parties larger than 8, call us at <strong>+91 93248 95968</strong>.
                  </span>
                </div>

                {/* 3-Column: Date, Time, Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A89F91] mb-1.5">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#E86034] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#141210] border border-[#3D352D] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#E86034]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A89F91] mb-1.5">
                      Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#E86034] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#141210] border border-[#3D352D] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#E86034] appearance-none"
                      >
                        <option value="08:30">08:30 AM (Breakfast)</option>
                        <option value="09:30">09:30 AM (Breakfast)</option>
                        <option value="11:00">11:00 AM (Brunch)</option>
                        <option value="12:30">12:30 PM (Lunch)</option>
                        <option value="14:00">02:00 PM (Lunch)</option>
                        <option value="16:30">04:30 PM (Coffee & Snacks)</option>
                        <option value="18:30">06:30 PM (Evening Bites)</option>
                        <option value="20:00">08:00 PM (Dinner)</option>
                        <option value="21:00">09:00 PM (Late Bites)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A89F91] mb-1.5">
                      Party Size
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#E86034] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#141210] border border-[#3D352D] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#E86034] appearance-none"
                      >
                        <option value="1 Guest">1 Guest (Solo Café)</option>
                        <option value="2 Guests">2 Guests (Cosy Table)</option>
                        <option value="3-4 Guests">3-4 Guests (Bistro Booth)</option>
                        <option value="5-6 Guests">5-6 Guests (Group Table)</option>
                        <option value="7-8 Guests">7-8 Guests (Celebration)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A89F91] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#E86034] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Rohan Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#141210] border border-[#3D352D] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#E86034] placeholder:text-[#5E574D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A89F91] mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#E86034] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#141210] border border-[#3D352D] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#E86034] placeholder:text-[#5E574D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A89F91] mb-1.5">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#E86034] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        placeholder="rohan@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#141210] border border-[#3D352D] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#E86034] placeholder:text-[#5E574D]"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Notes */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#A89F91] mb-1.5">
                    Dietary Preferences or Special Requests
                  </label>
                  <textarea
                    rows={2}
                    placeholder="High chair needed, corner table, birthday cake notes..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-[#141210] border border-[#3D352D] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#E86034] placeholder:text-[#5E574D]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="BOOK"
                    className="w-full py-3.5 sm:py-4 bg-[#E86034] hover:bg-[#D55026] text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-book"
                  >
                    <Utensils className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Request...' : 'REQUEST A TABLE'}</span>
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-6 px-3"
              >
                <div className="w-14 h-14 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-7 h-7" />
                </div>

                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FFB703] block mb-1.5">
                  RESERVATION REQUEST RECORDED
                </span>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2">
                  THANKS! WE'VE GOT YOUR REQUEST.
                </h3>

                <p className="text-xs sm:text-sm text-[#C5BCB1] max-w-sm mx-auto mb-5">
                  We look forward to hosting you at Guppa Bistro in Ranwar, Bandra West!
                </p>

                {/* Reference Code Box */}
                <div className="bg-[#141210] border border-[#3D352D] rounded-2xl p-4 sm:p-5 max-w-xs sm:max-w-sm mx-auto mb-5">
                  <span className="text-[10px] text-[#8E867A] uppercase tracking-wider block mb-1">
                    Your Reference Code
                  </span>
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-[#E86034] tracking-wider block">
                    {refCode}
                  </span>
                  <div className="mt-3 pt-2.5 border-t border-[#2E2721] text-xs text-[#A89F91] space-y-0.5">
                    <p><strong>{formData.guests}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong></p>
                    <p>Reserved for <strong>{formData.name}</strong> ({formData.phone})</p>
                  </div>
                </div>

                <div className="space-y-3 max-w-sm mx-auto">
                  <a
                    href="tel:+919324895968"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E86034]" />
                    <span>Call +91 93248 95968</span>
                  </a>

                  <div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-[#E86034] hover:underline font-bold mt-2"
                    >
                      Submit Another Booking Request
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
