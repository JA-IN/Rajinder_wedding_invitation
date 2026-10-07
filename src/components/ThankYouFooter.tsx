import React from 'react';
import { coupleDetails } from '../data/weddingData';
import { Instagram, Globe, Heart } from 'lucide-react';

export const ThankYouFooter: React.FC = () => {
  return (
    <footer
      className="bg-[#6e1f2f] text-[#faf5eb] pt-16 pb-10 px-4 relative mt-16 text-center"
      data-purpose="wedding-footer"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Sacred Ik Onkar Symbol */}
        <div className="text-3xl text-[#ffd76a] font-serif select-none">
          ੴ
        </div>

        {/* Thank You Script Heading matching the video */}
        <h2 className="font-names text-6xl sm:text-7xl md:text-8xl text-[#c9a227] leading-none">
          Thank You
        </h2>

        {/* Family Hosts columns matching the video */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto font-heading text-xs tracking-wider uppercase">
          <div className="space-y-1">
            <p className="font-bold text-sm tracking-[0.2em] text-[#faf5eb]">
              S. Balwinder Singh
            </p>
            <p className="text-[11px] text-[#ffd76a] tracking-widest font-sans">
              (Groom's Family)
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-bold text-sm tracking-[0.2em] text-[#faf5eb]">
              S. Shingara Singh
            </p>
            <p className="text-[11px] text-[#ffd76a] tracking-widest font-sans">
              (Bride's Family)
            </p>
          </div>

          <div className="space-y-1 sm:col-span-2 md:col-span-1">
            <p className="font-bold text-sm tracking-[0.2em] text-[#faf5eb]">
              Rajinder Purba
            </p>
            <a
              href={`tel:${coupleDetails.hostContact.phone}`}
              className="text-[11px] text-[#ffd76a] tracking-widest font-sans hover:underline block"
            >
              (+91 83600 45011)
            </a>
          </div>
        </div>

        {/* Cordial Gratitude */}
        <div className="pt-2 text-xs font-serif text-stone-300">
          <p className="tracking-wider">
            With Gratitude from <span className="text-[#ffd76a] font-semibold">Ekam Garments</span>,{' '}
            <span className="text-[#ffd76a] font-semibold">New Ekam Garments</span> &amp; All Purba Family
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-5 text-[#ffd76a] pt-2">
          <a
            href="#hero"
            aria-label="Instagram"
            className="hover:text-white transition-colors p-1"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#hero"
            aria-label="Wedding website"
            className="hover:text-white transition-colors p-1"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>

        {/* Made with love */}
        <div className="border-t border-[#8b273b] pt-6 max-w-xs mx-auto">
          <p className="text-xs font-serif text-[#faf5eb]/70 flex items-center justify-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-rose-300 fill-current" /> for Surinder &amp; Harpreet
          </p>
        </div>
      </div>
    </footer>
  );
};
