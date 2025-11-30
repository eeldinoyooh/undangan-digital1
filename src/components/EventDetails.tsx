import React from 'react';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Countdown } from './Countdown';
import { weddingConfig } from '../config/wedding';

export const EventDetails: React.FC = () => {
  const themeMap = {
    earth: {
      border: 'border-[#8B7355]',
      badge: 'from-[#8B7355] to-[#6B5744]',
      title: 'text-[#8B7355]',
      icon: 'text-[#8B7355]',
      accentBg: 'bg-[#B8A587]/10',
      accentBorder: 'border-[#B8A587]/20'
    },
    sage: {
      border: 'border-[#8B7355]',
      badge: 'from-[#8B7355] to-[#6B5744]',
      title: 'text-[#8B7355]',
      icon: 'text-[#8B7355]',
      accentBg: 'bg-[#B8A587]/10',
      accentBorder: 'border-[#B8A587]/20'
    }
  } as const;

  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-gray-700 tracking-[0.3em] uppercase text-sm font-semibold">Wedding Event</span>
          <h2 className="font-display text-5xl text-gray-800 mt-3">Save The Date</h2>
        </div>

        <div id="event-countdown" className="mb-16" data-aos="fade-up" data-aos-delay="150">
          <p className="text-center text-gray-600 uppercase tracking-[0.3em] text-xs mb-6">Countdown to Our Day</p>
          <Countdown targetDate={weddingConfig.weddingDate} />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          {weddingConfig.eventDetails
            .map((event, idx) => {
              const isFirst = idx === 0;
              const theme = themeMap[event.theme as keyof typeof themeMap] ?? themeMap.sage;
              return (
                <div
                  key={event.id}
                  className={`w-full bg-white p-8 rounded-3xl shadow-lg border-t-[3px] ${theme.border} relative transition-colors`}
                  data-aos="fade-up"
                >
                  <div className={`absolute top-0 right-0 bg-gradient-to-r ${theme.badge} text-white px-6 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-medium shadow-lg`}>
                    {event.badge}
                  </div>
                  <h3 className={`font-script text-4xl ${theme.title} mb-8`}>{event.title}</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`${theme.accentBg} p-3 rounded-full border ${theme.accentBorder}`}>
                        <Calendar className={`${theme.icon} w-5 h-5`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#8B7355] text-lg">{event.date}</h4>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`${theme.accentBg} p-3 rounded-full border ${theme.accentBorder}`}>
                        <Clock className={`${theme.icon} w-5 h-5`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#8B7355] text-lg">{event.time}</h4>
                        {event.timeNote && <p className="text-sm text-gray-600">{event.timeNote}</p>}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`${theme.accentBg} p-3 rounded-full border ${theme.accentBorder}`}>
                        <MapPin className={`${theme.icon} w-5 h-5`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#8B7355] text-lg">{event.location}</h4>
                        <p className="text-sm text-gray-600">{event.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Map Button */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <a
            href="https://maps.app.goo.gl/aFgrr41g58F7Kbof8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B7355] text-white rounded-full hover:bg-[#6B5744] hover:text-white transition-all duration-300 font-semibold tracking-wide group shadow-[0_0_20px_rgba(139,115,85,0.3)]"
          >
            Lihat Lokasi via Google Maps
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};