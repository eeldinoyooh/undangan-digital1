import React, { useEffect } from 'react';
import { MailOpen } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { MusicPlayerHandle } from './MusicPlayer';
import keduaMempelai from '../asset/foto/kedua_mempelai.png';

interface CoverProps {
  guestName: string;
  onOpen: () => void;
  musicPlayerRef: React.RefObject<MusicPlayerHandle>;
}

export const Cover: React.FC<CoverProps> = ({ guestName, onOpen, musicPlayerRef }) => {

  // Coba putar musik saat cover ditampilkan
  useEffect(() => {
    const timers = [
      setTimeout(() => musicPlayerRef.current?.playMusic(), 200),
      setTimeout(() => musicPlayerRef.current?.playMusic(), 600),
      setTimeout(() => musicPlayerRef.current?.playMusic(), 1200),
      setTimeout(() => musicPlayerRef.current?.playMusic(), 2000),
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [musicPlayerRef]);

  // Coba putar musik saat user berinteraksi
  useEffect(() => {
    const handleUserInteraction = () => {
      musicPlayerRef.current?.playMusic();
    };

    window.addEventListener('click', handleUserInteraction, { once: true });
    window.addEventListener('touchstart', handleUserInteraction, { once: true });
    window.addEventListener('mousemove', handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('mousemove', handleUserInteraction);
    };
  }, [musicPlayerRef]);

  return (
    <div className="h-full w-full relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-white to-cream/50 text-sage-dark px-6 py-6">

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-sm w-full text-center">

        {/* Couple Illustration - Top */}
        <div className="w-48 mb-0 animate-fade-in relative">
          <img
            src={keduaMempelai}
            alt="Wedding Couple"
            className="w-full h-auto object-contain"
          />
          {/* Gradient overlay to fade out from knee area */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none"></div>
        </div>

        {/* Wedding Title - Moved up closer to illustration */}
        <div className="-mt-20 mb-2 space-y-3 relative z-20" data-aos="fade-up" data-aos-delay="200">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 font-body">
            THE WEDDING OF
          </p>

          {/* Couple Names - Script Font with Brown Color */}
          <h1 className="font-script text-5xl md:text-6xl text-[#8B7355] leading-tight">
            {weddingConfig.groomName} <span className="text-4xl">&</span> {weddingConfig.brideName}
          </h1>
        </div>

        {/* Guest Info */}
        <div className="-mt-2 mb-4 space-y-2 relative z-20" data-aos="fade-up" data-aos-delay="400">
          <p className="text-sm text-gray-600 font-body">
            Kepada Bapak/Ibu/Saudara/i
          </p>
          <p className="text-2xl font-bold text-[#6B5744] font-body capitalize">
            {guestName}
          </p>
        </div>

        {/* Open Button */}
        <button
          onClick={onOpen}
          className="bg-[#8B7355] text-white font-semibold py-4 px-12 rounded-full flex items-center justify-center gap-3 hover:bg-[#6B5744] hover:scale-105 transition-all duration-300 shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <MailOpen size={20} />
          <span className="tracking-wide">Buka Undangan</span>
        </button>
      </div>
    </div>
  );
};