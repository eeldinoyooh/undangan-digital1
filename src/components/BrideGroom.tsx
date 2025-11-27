import React from 'react';
import { Instagram } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import mempelaiPria from '../asset/foto/mempelai_pria.png';
import mempelaiWanita from '../asset/foto/mempelai_wanita.png';

const ProfileCard: React.FC<{
  name: string;
  role: string;
  father: string;
  mother: string;
  childOrder: string;
  image: string;
  igLink: string;
  delay: number;
}> = ({ name, role, father, mother, childOrder, image, igLink, delay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={delay}
    className="relative bg-gradient-to-b from-cream via-earth-light to-earth text-earth-dark rounded-[42px] px-8 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.25)] overflow-hidden"
  >
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-cream/50 rounded-full blur-[120px] opacity-70 pointer-events-none"></div>
    <div className="relative flex flex-col items-center text-center space-y-6">

      {/* Photo with animation */}
      <div data-aos="zoom-in" data-aos-delay={delay + 100}>
        <div className="relative w-56 h-72 rounded-[38px] overflow-hidden border-[3px] border-cream/80 shadow-[0_15px_45px_rgba(0,0,0,0.35)]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
            style={{
              imageRendering: 'auto',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            } as React.CSSProperties}
          />
          <div className="absolute -top-8 right-2 w-16 h-16 bg-cream/80 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
        </div>
      </div>

      {/* Text info with staggered animation */}
      <div data-aos="fade-up" data-aos-delay={delay + 300}>
        <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-3">{role}</p>
        <h3 className="font-display text-3xl md:text-4xl mb-2 text-white">{name}</h3>
        <p className="text-sm text-white/90">
          Anak {childOrder} dari <span className="font-semibold">{father}</span> &amp;{' '}
          <span className="font-semibold">{mother}</span>
        </p>
      </div>

      {/* Instagram button with animation */}
      <div data-aos="zoom-in" data-aos-delay={delay + 500}>
        <a
          href={igLink}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300 text-white"
        >
          <Instagram size={18} />
        </a>
      </div>
    </div>

    <div className="absolute -bottom-16 -right-10 opacity-20 text-cream pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-48 h-48 fill-current rotate-12">
        <path d="M100,0 C60,20 40,60 40,100 C40,150 70,180 100,200 C130,180 160,150 160,100 C160,60 140,20 100,0 Z" />
      </svg>
    </div>
  </div>
);

export const BrideGroom: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-10 -left-24 w-80 h-80 bg-sage/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 -right-24 w-80 h-80 bg-earth/20 rounded-full blur-[150px]"></div>
      </div>

      {/* Header with Bismillah and Greeting */}
      <div className="text-center mb-16 relative z-10 max-w-2xl mx-auto space-y-6" data-aos="fade-down">
        {/* Bismillah */}
        <div className="mb-4">
          <p className="text-2xl md:text-3xl font-arabic text-gray-800">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
        </div>

        {/* Greeting */}
        <h2 className="font-script text-3xl md:text-4xl text-[#8B7355] mb-6">
          Assalamu'alaikum Wr. Wb.
        </h2>

        {/* Invitation Text */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-body">
          Tanpa mengurangi rasa hormat.<br />
          Kami mengundang Bapak/Ibu/Saudara/i<br />
          serta Kerabat sekalian untuk menghadiri<br />
          acara pernikahan kami :
        </p>
      </div>

      <div className="flex flex-col gap-12 max-w-6xl mx-auto relative z-10">
        <ProfileCard
          name={weddingConfig.groomFullName}
          role="Mempelai Pria"
          father={weddingConfig.groom.father}
          mother={weddingConfig.groom.mother}
          childOrder={weddingConfig.groom.childOrder}
          image={mempelaiPria}
          igLink={weddingConfig.groomInstagram}
          delay={0}
        />
        <ProfileCard
          name={weddingConfig.brideFullName}
          role="Mempelai Wanita"
          father={weddingConfig.bride.father}
          mother={weddingConfig.bride.mother}
          childOrder={weddingConfig.bride.childOrder}
          image={mempelaiWanita}
          igLink={weddingConfig.brideInstagram}
          delay={200}
        />
      </div>
    </section>
  );
};