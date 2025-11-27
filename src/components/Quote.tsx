import React from 'react';

export const Quote: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-cream">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      {/* Floral Ornament Top Left - INLINE SVG (Fixed) */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 opacity-20 pointer-events-none text-[#B8A587]">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current -rotate-90 transform -scale-x-100">
          <path d="M100,0 C60,20 40,60 40,100 C40,150 70,180 100,200 C130,180 160,150 160,100 C160,60 140,20 100,0 Z M100,180 C80,160 60,140 60,100 C60,70 75,45 100,30 C125,45 140,70 140,100 C140,140 120,160 100,180 Z" />
          <path d="M20,50 Q60,40 80,80 Q40,100 20,50" />
          <path d="M180,50 Q140,40 120,80 Q160,100 180,50" />
        </svg>
      </div>

      {/* Floral Ornament Bottom Right - INLINE SVG (Fixed) */}
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 opacity-20 pointer-events-none text-[#B8A587]">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current rotate-90">
          <path d="M100,0 C60,20 40,60 40,100 C40,150 70,180 100,200 C130,180 160,150 160,100 C160,60 140,20 100,0 Z M100,180 C80,160 60,140 60,100 C60,70 75,45 100,30 C125,45 140,70 140,100 C140,140 120,160 100,180 Z" />
          <path d="M20,50 Q60,40 80,80 Q40,100 20,50" />
          <path d="M180,50 Q140,40 120,80 Q160,100 180,50" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10" data-aos="fade-up" data-aos-duration="1200">
        {/* Huge Quote Mark */}
        <div className="text-9xl text-[#B8A587]/10 font-display absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">"</div>

        <h3 className="font-script text-4xl md:text-5xl text-[#8B7355] mb-8 drop-shadow-sm tracking-wider">Ar-Rum: 21</h3>

        <div className="relative">
          <p className="text-gray-700 font-body text-lg md:text-xl leading-loose md:leading-loose italic px-4 font-light">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 opacity-60">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#B8A587] to-transparent"></div>
          <div className="w-2 h-2 bg-[#B8A587] rotate-45"></div>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#B8A587] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};