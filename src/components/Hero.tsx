import React, { useEffect, useState, useRef } from 'react';
import { weddingConfig } from '../config/wedding';
import keduaMempelai from '../asset/foto/kedua_mempelai.png';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const displayDate = new Date(weddingConfig.weddingDate).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSaveDate = () => {
    const target = document.getElementById('event-countdown');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden bg-gradient-to-b from-cream via-white to-cream/50"
    >

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-md w-full text-center space-y-6">

        {/* Title */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500 font-body">
            THE WEDDING OF
          </p>
        </div>

        {/* Couple Photo in Circle */}
        <div className={`relative transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="w-64 h-64 rounded-full overflow-hidden bg-white shadow-2xl border-8 border-white">
            <img
              src={keduaMempelai}
              alt="Wedding Couple"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Couple Names */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-script text-5xl md:text-6xl text-[#8B7355] leading-tight mb-4">
            {weddingConfig.brideName} <span className="text-4xl">&</span> {weddingConfig.groomName}
          </h1>
        </div>

        {/* Invitation Text */}
        <div className={`space-y-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-base text-gray-600 font-body">
            We invite you to celebrate our wedding
          </p>

          {/* Date */}
          <p className="text-lg font-semibold text-gray-800">
            {displayDate}
          </p>
        </div>

        {/* Save The Date Button */}
        <button
          onClick={handleSaveDate}
          className={`bg-[#8B7355] text-white font-semibold py-4 px-12 rounded-full hover:bg-[#6B5744] hover:scale-105 transition-all duration-300 shadow-lg ${isVisible ? 'opacity-100 scale-100 delay-800' : 'opacity-0 scale-75'}`}
        >
          Save The Date
        </button>
      </div>
    </section>
  );
};