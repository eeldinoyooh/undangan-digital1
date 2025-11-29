import React from 'react';
import { Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import keduaMempelai from '../asset/foto/kedua_mempelai.png';

const stories = [
  {
    year: "2021",
    title: "Pertama Bertemu",
    description: "Kami pertama kali berkenalan melalui salah satu sosmed di tahun 2021. Kami bertemu di sebuah tempat. Meski hanya singkat, kami merasa saling tertarik dan saling ingin mengenal lebih lanjut satu sama lain. Sejak itu kami mulai semakin dekat. "
  },
  {
    year: "2022",
    title: "Menjalin Kasih",
    description: "Di akhir tahun 2021 kami mulai membangun hubungan yang erat. Kami saling mendukung dan tumbuh bersama, melalui berbagai tantangan dan rintangan bersama."
  },
  {
    year: "2024",
    title: "Lamaran",
    description: "Dan di tahun ini 2025, kami memutuskan untuk mengikat janji suci dalam pernikahan. Dalam momen penuh cinta dan haru ini, kami melangkah ke jenjang hidup baru, siap menghadapi masa depan bersama dengan saling cinta dan dukungan satu sama lain."
  }
];

export const OurStory: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-cream overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16 relative" data-aos="fade-up">
          <h2 className="font-script text-4xl md:text-6xl text-[#8B7355] mb-4 md:mb-6">Our Love Story</h2>

          {/* Heart with horizontal lines */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            <div className="h-[1px] w-12 md:w-20 bg-gray-300"></div>
            <div className="bg-cream p-1.5">
              <Heart className="w-4 h-4 text-[#8B7355] fill-[#8B7355]" />
            </div>
            <div className="h-[1px] w-12 md:w-20 bg-gray-300"></div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-[#B8A587]/30"></div>

          {stories.map((story, idx) => (
            <div
              key={idx}
              className="relative mb-10 md:mb-12 pl-12 md:pl-20"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[13px] md:left-[29px] top-2 transform -translate-x-1/2 z-20">
                <div className="w-4 h-4 bg-[#8B7355] rounded-full border-4 border-cream shadow-md"></div>
              </div>

              {/* Text Card */}
              <div className="bg-white rounded-xl shadow-md border-l-4 border-[#8B7355] p-6 relative hover:shadow-lg transition-shadow">
                {/* Date Tag - Top Right */}
                <div className="absolute -top-3 right-4 bg-[#8B7355] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                  {story.year}
                </div>

                {/* Title */}
                <h4 className="font-display text-xl md:text-2xl font-bold text-gray-800 mb-3 mt-2">
                  {story.title}
                </h4>

                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-body">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};