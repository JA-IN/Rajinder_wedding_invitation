import React, { useState } from 'react';
import { coupleDetails } from '../data/weddingData';
import { Share2, Check, Copy } from 'lucide-react';

export const SacredInvitation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const text = `🌸 Royal Sikh Wedding Invitation 🌸\n\nSurinder Singh Purba\n(Son of Sdm. Tarsem Kaur & S. Balwinder Singh Purba)\nWeds\nHarpreet Kaur Bedi\n(Daughter of Sdm. Kulvir Kaur & S. Shingara Singh Bedi)\n\n✨ Sacred Anand Karaj: 22 November 2026\n📍 Gurudwara Sahib Gosayiana, Patshahi Dasvi Pathrala\n🏰 Grand Palace Reception: Gill Resorts Jassi Bagwali\n\nRSVP: Rajinder Purba (${coupleDetails.hostContact.phone})`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    }
  };

  return (
    <section
      id="invitation-letter"
      className="py-16 sm:py-24 px-4 max-w-4xl mx-auto"
      data-purpose="formal-invitation"
    >
      <div className="bg-[#ffffff] border border-[#c9a227]/40 rounded-2xl p-8 sm:p-14 md:p-16 shadow-[0_10px_35px_rgba(0,0,0,0.06)] relative text-center">
        {/* Golden Ik Onkar Emblem */}
        <div className="mb-3">
          <span className="text-5xl sm:text-6xl text-[#c9a227] font-serif select-none inline-block">
            ੴ
          </span>
        </div>

        {/* Gurmukhi Mangal Verses */}
        <div className="font-serif text-sm sm:text-base text-[#6e1f2f] mb-6 leading-relaxed">
          <p>ਧੰਨੁ ਸੁ ਵੇਲਾ ਜਿਤੁ ਦਰਸਨੁ ਕਰਣਾ ॥</p>
          <p className="text-xs sm:text-sm text-stone-500 font-sans tracking-wide mt-1">
            Blessed is the moment when one beholds the Divine.
          </p>
        </div>

        {/* Script Heading matching the video */}
        <h2 className="font-names text-5xl sm:text-6xl md:text-7xl text-[#6e1f2f] mb-6 font-normal">
          We Cordially Invite You
        </h2>

        {/* Invitation Text */}
        <p className="font-serif text-lg sm:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed mb-8">
          Together with our beloved families, we request the honour of your gracious presence to celebrate the wedding of
        </p>

        {/* Couple & Parents Names */}
        <div className="space-y-4 py-2">
          {/* Groom */}
          <div>
            <h3 className="font-names text-5xl sm:text-6xl text-[#6e1f2f] leading-none mb-1">
              Surinder Singh
            </h3>
            <p className="font-serif italic text-base sm:text-lg text-[#c9a227] font-medium">
            Late S. Balwinder Singh Purba &amp;  Son of Sdm. Tarsem Kaur  
            </p>
          </div>

          <div className="font-names text-3xl sm:text-4xl text-[#c9a227] my-3">
            With
          </div>

          {/* Bride */}
          <div>
            <h3 className="font-names text-5xl sm:text-6xl text-[#6e1f2f] leading-none mb-1">
              Harpreet Kaur
            </h3>
            <p className="font-serif italic text-base sm:text-lg text-[#c9a227] font-medium">
              Daughter of Sdm. Kulvir Kaur &amp; S. Shingara Singh Bedi
            </p>
          </div>
        </div>

        {/* Sacred Quote Divider */}
        <div className="border-t border-b border-[#c9a227]/25 py-4 my-8 max-w-xl mx-auto">
          <p className="italic text-base sm:text-lg text-[#6e1f2f] font-medium">
            "They are not said to be husband and wife, who merely sit together. Rather, they alone are called husband and wife, who have one soul in two bodies."
          </p>
          <p className="text-[11px] uppercase font-heading text-stone-400 tracking-widest mt-1.5">
            — Sri Guru Granth Sahib Ji (Ang 788)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#c9a227] text-xs font-heading tracking-widest uppercase text-[#6e1f2f] hover:bg-[#c9a227] hover:text-white transition-all shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                Invitation Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Invitation
              </>
            )}
          </button>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `🌸 You are cordially invited to Surinder & Harpreet's Royal Sikh Wedding on 22 November 2026 at Gurudwara Sahib Gosayiana, Patshahi Dasvi Pathrala & Gill Resorts Jassi Bagwali! View full celebration details: ${window.location.href}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6e1f2f] text-[#faf5eb] text-xs font-heading tracking-widest uppercase hover:bg-[#8b273b] transition-all shadow"
          >
            <Share2 className="w-4 h-4 text-[#ffd76a]" />
            Share on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
