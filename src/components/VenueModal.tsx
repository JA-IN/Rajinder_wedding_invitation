import React from 'react';
import { X, MapPin, Navigation, Info, ExternalLink } from 'lucide-react';

interface VenueModalProps {
  venue: {
    name: string;
    address: string;
    mapQuery: string;
  } | null;
  onClose: () => void;
}

export const VenueModal: React.FC<VenueModalProps> = ({ venue, onClose }) => {
  if (!venue) return null;

  const isGurudwara = venue.name.toLowerCase().includes('gurudwara');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDFCF7] border-2 border-[#DFBA67] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-[#5A1020] rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Close venue modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#9C7A2E] mb-2 font-cinzel text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-4 h-4" />
          Venue &amp; Location Guide
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5A1020] mb-2">
          {venue.name}
        </h3>

        <p className="font-sans text-stone-600 text-sm mb-6 flex items-start gap-1.5">
          <Navigation className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          {venue.address}
        </p>

        {isGurudwara && (
          <div className="bg-[#FAF6EE] border border-[#DFBA67]/40 rounded-2xl p-4 mb-6 text-left space-y-2">
            <div className="flex items-center gap-1.5 font-cinzel text-xs font-bold uppercase tracking-wider text-[#721829]">
              <Info className="w-4 h-4" />
              Gurudwara Sahib Etiquette
            </div>
            <ul className="text-xs font-sans text-stone-700 space-y-1 list-disc list-inside">
              <li>Head coverings (Rumal / Dupatta) are mandatory inside the Darbar Sahib.</li>
              <li>Please deposit footwear at the shoe stand prior to entering.</li>
              <li>Modest traditional Punjabi attire is recommended.</li>
              <li>Guru Ka Langar (community meal) is served to all attendees following the ceremony.</li>
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${venue.name}, ${venue.address}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 bg-[#5A1020] hover:bg-[#721829] text-[#DFBA67] rounded-xl font-cinzel text-xs uppercase tracking-widest font-bold text-center flex items-center justify-center gap-2 shadow transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Open in Google Maps
          </a>

          <button
            onClick={onClose}
            className="px-6 py-3 border border-stone-300 text-stone-700 hover:bg-stone-50 rounded-xl font-cinzel text-xs uppercase tracking-widest transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
