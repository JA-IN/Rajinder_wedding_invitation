import React, { useState } from 'react';
import { coupleDetails } from '../data/weddingData';
import { Minus, Plus, CheckCircle, Phone } from 'lucide-react';

export const RSVPSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState('Wedding Ceremony');
  const [fullName, setFullName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const eventsList = [
    'Sri Sukhmani Sahib Path & Haldi',
    'Sangeet & Jaggo Party (Regal Food)',
    'Wedding Ceremony (Anand Karaj)',
    'Reception (Gill Resorts)',
    'Unfortunately, I cannot attend',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `🙏 Sat Sri Akal Rajinder Ji!\n\nThis is ${fullName || 'a guest'} confirming RSVP for Surinder & Harpreet's Wedding:\n• Event: ${selectedEvent}\n• Total Guests: ${guestCount}\n• Wishes: ${message || 'Congratulations to Purba and Bedi families!'}`
    );
    window.open(`https://wa.me/91${coupleDetails.hostContact.phone}?text=${text}`, '_blank');
  };

  return (
    <section
      id="rsvp-section"
      className="py-16 sm:py-24 px-4 max-w-2xl mx-auto"
      data-purpose="rsvp-form-container"
    >
      <div className="bg-[#ffffff] border border-[#c9a227]/30 rounded-3xl p-8 sm:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.05)]">
        <div className="text-center mb-8">
          <h2 className="font-heading text-4xl sm:text-5xl text-[#6e1f2f] uppercase tracking-wider font-semibold mb-2">
            RSVP
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-stone-600">
            We look forward to celebrating with you.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Radio Options matching video */}
          <div>
            <label className="block font-serif text-base sm:text-lg text-stone-800 mb-3 font-medium">
              Which wedding events will you be attending?
            </label>
            <div className="space-y-2.5">
              {eventsList.map((ev) => (
                <label
                  key={ev}
                  className="flex items-center gap-3 cursor-pointer group text-stone-700 font-serif text-base hover:text-[#6e1f2f]"
                >
                  <input
                    type="radio"
                    name="wedding-event"
                    value={ev}
                    checked={selectedEvent === ev}
                    onChange={() => setSelectedEvent(ev)}
                    className="w-4 h-4 accent-[#6e1f2f] cursor-pointer"
                  />
                  <span>{ev}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label
              className="block font-serif text-base text-stone-800 mb-1.5 font-medium"
              htmlFor="full-name"
            >
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#c9a227] focus:border-[#c9a227] font-serif text-base"
            />
          </div>

          {/* Guest Counter matching video: [- 1 +] */}
          <div>
            <label className="block font-serif text-base text-stone-800 mb-2 font-medium">
              How many guests (including you) will be joining us?
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                className="w-9 h-9 rounded-md border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
                aria-label="Decrease guest count"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-heading text-lg font-bold text-[#6e1f2f] w-8 text-center tabular-nums">
                {guestCount}
              </span>
              <button
                type="button"
                onClick={() => setGuestCount(guestCount + 1)}
                className="w-9 h-9 rounded-md border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
                aria-label="Increase guest count"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label
              className="block font-serif text-base text-stone-800 mb-1.5 font-medium"
              htmlFor="personal-message"
            >
              Leave a personal message for Surinder and Harpreet
            </label>
            <textarea
              id="personal-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="We would love to hear your wishes..."
              className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#c9a227] focus:border-[#c9a227] font-serif text-base resize-none"
            />
          </div>

          {/* Submit Button in solid maroon matching video */}
          <button
            type="submit"
            className="w-full py-3.5 bg-[#6e1f2f] hover:bg-[#852337] text-white font-heading text-xs tracking-[0.25em] uppercase font-bold rounded-lg shadow-md transition-all duration-300"
          >
            SEND RSVP
          </button>

          {/* WhatsApp Direct */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center gap-2 text-xs font-heading tracking-wider uppercase text-emerald-800 hover:underline"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              Send RSVP directly to Rajinder Purba ({coupleDetails.hostContact.phone})
            </button>
          </div>

          {submitted && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-center text-emerald-800 font-serif text-sm flex items-center justify-center gap-2 animate-fadeIn">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Thank you! Your RSVP has been graciously received.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
