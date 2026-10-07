import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { coupleDetails } from '../data/weddingData';

interface NavigationHeaderProps {
  onOpenRsvp: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({ onOpenRsvp }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Invitation', href: '#invitation-letter' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Events', href: '#events-section' },
    { label: 'Blessings', href: '#family-blessings' },
    { label: 'RSVP', href: '#rsvp-section' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#5A1020]/95 backdrop-blur-md shadow-md py-3 border-b border-[#DFBA67]/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="text-lg sm:text-xl font-bold tracking-tight text-[#DFBA67] font-serif hover:text-[#F3E5AB] transition-colors whitespace-nowrap"
        >
          {coupleDetails.groom.shortName} &amp; {coupleDetails.bride.shortName}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-cinzel tracking-widest uppercase font-semibold text-[#FAF6EE]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#DFBA67] transition-colors py-1 relative group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#DFBA67] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenRsvp}
            className="px-4 py-2 text-xs font-cinzel font-bold tracking-widest uppercase text-[#5A1020] bg-gradient-to-r from-[#DFBA67] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#DFBA67] rounded-full transition-all shadow hover:shadow-[#DFBA67]/30 whitespace-nowrap hidden sm:inline-flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            RSVP Now
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#DFBA67] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#420A16]/98 backdrop-blur-xl border-b border-[#DFBA67]/30 px-6 py-6 space-y-4 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-cinzel text-sm uppercase tracking-widest text-[#FAF6EE] hover:text-[#DFBA67] py-1 border-b border-white/5"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRsvp();
            }}
            className="w-full mt-3 py-3 text-xs font-cinzel font-bold tracking-widest uppercase text-[#5A1020] bg-[#DFBA67] rounded-full text-center"
          >
            Send RSVP &amp; Blessings
          </button>
        </div>
      )}
    </header>
  );
};
