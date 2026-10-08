import React from 'react';
import { weddingEvents } from '../data/weddingData';
import { MapPin } from 'lucide-react';
import { TravelFlightPath } from './TravelFlightPath';
import haldiPhoto from '../assets/images/couple/Golden Haldi Celebration with Two Couples.png';
import sukhmaniPhoto from '../assets/images/couple/Sukhmani Sahib Ceremony in Bloom (1).png';
import anandKarajPhoto from '../assets/images/couple/A Grand Sikh Wedding Ceremony.png';
import royalReceptionPhoto from '../assets/images/couple/1790930296416.jpg.jpeg';
import jaggoPhoto from '../assets/images/couple/Punjabi Jago Night Celebration.png';
const eventImageOverrides: Record<string, string> = {
  'haldi-mehndi': haldiPhoto,
  'sukhmani-path': sukhmaniPhoto,
  'jaggo-party': jaggoPhoto,
  'anand-karaj': anandKarajPhoto,
  'royal-reception': royalReceptionPhoto,
};

export const WeddingEventsSection: React.FC = () => {
  return (
    <section
      id="events-section"
      className="py-16 sm:py-24 px-4 max-w-2xl mx-auto text-center"
      data-purpose="wedding-itinerary"
    >
      {/* Main Title matching video */}
      <div className="mb-14">
        <h2 className="font-names text-6xl sm:text-7xl md:text-8xl text-[#6e1f2f] mb-2 font-normal">
          Wedding Events
        </h2>
      </div>

      <div className="space-y-16">
        {weddingEvents.map((event, index) => {
          return (
            <React.Fragment key={event.id}>
              {/* Insert Travel Flight Path before the Anand Karaj or Reception */}
              {index === 3 && <TravelFlightPath />}

              <article
                className="bg-[#ffffff] border border-[#c9a227]/30 rounded-3xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.05)] text-center transition-all duration-300"
                data-purpose={`event-card-${event.id}`}
              >
                {/* Event Title in Gold Script */}
                <h3 className="font-names text-5xl sm:text-6xl text-[#c9a227] mb-3 leading-tight">
                  {event.title}
                </h3>

                {/* Date & Time */}
                <div className="font-heading text-xs sm:text-sm text-stone-700 tracking-[0.25em] uppercase font-semibold mb-6">
                  <div>{event.date}</div>
                  <div className="text-[#c9a227] text-xs mt-1">
                    {event.day} • {event.time}
                  </div>
                </div>

                {/* Featured Event Image */}
                <div className="rounded-2xl overflow-hidden shadow-md mb-6 max-h-[380px] sm:max-h-[440px]">
                  <img
                    alt={`${event.title} celebration`}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    src={eventImageOverrides[event.id] ?? event.imageUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Venue Details matching video format */}
                <div className="space-y-1.5 font-heading text-center">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 block font-semibold">
                    VENUE
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#c9a227] tracking-wider uppercase">
                    {event.venueName}
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-sm tracking-widest uppercase">
                    {event.venueAddress}
                  </p>
                </div>

                {/* View on Maps Pill Button matching video */}
                <div className="mt-6 flex justify-center">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${event.venueName}, ${event.venueAddress}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#c9a227]/50 text-[#c9a227] hover:bg-[#c9a227] hover:text-white transition-all text-xs font-heading tracking-[0.2em] uppercase font-semibold shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    View on Maps
                  </a>
                </div>
              </article>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
