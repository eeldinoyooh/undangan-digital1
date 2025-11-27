import React from 'react';
import foto1 from '../asset/foto/foto1.jpg';
import foto2 from '../asset/foto/foto2.jpg';
import foto3 from '../asset/foto/foto3.jpg';
import foto4 from '../asset/foto/foto4.jpg';
import foto5 from '../asset/foto/foto5.jpg';
import foto6 from '../asset/foto/foto6.jpg';
import foto7 from '../asset/foto/foto7.jpg';
import foto8 from '../asset/foto/foto8.jpg';
import foto9 from '../asset/foto/foto9.jpg';
import foto10 from '../asset/foto/foto10.jpg';
import foto11 from '../asset/foto/foto11.jpg';
import foto12 from '../asset/foto/foto12.jpg';
import foto13 from '../asset/foto/foto13.jpg';
import foto14 from '../asset/foto/foto14.jpg';
import foto15 from '../asset/foto/foto15.jpg';
import foto16 from '../asset/foto/foto16.jpg';
import foto17 from '../asset/foto/foto17.jpg';
import foto18 from '../asset/foto/foto18.jpg';
import foto19 from '../asset/foto/foto19.jpg';
import foto20 from '../asset/foto/foto20.jpg';

// Daftar 20 foto dari folder lokal
const photos = [
    foto1, foto2, foto3, foto4, foto5,
    foto6, foto7, foto8, foto9, foto10,
    foto11, foto12, foto13, foto14, foto15,
    foto16, foto17, foto18, foto19, foto20
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-cream border-t border-sage/20">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="font-display text-4xl md:text-5xl text-sage-dark mb-3">Our Gallery</h2>
        <div className="h-[2px] w-20 bg-sage mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-700 italic max-w-xl mx-auto font-light">
            Setiap foto menceritakan kisah cinta yang tak terucapkan. Inilah momen-momen terbaik kami.
        </p>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        {/* Masonry Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {photos.map((src, idx) => (
                <div 
                    key={idx} 
                    className="break-inside-avoid mb-4 rounded-xl overflow-hidden shadow-md group relative bg-white"
                    data-aos="fade-up"
                    data-aos-delay={(idx % 4) * 100}
                >
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-cream/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10 backdrop-blur-sm">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-sage-dark border border-sage-dark px-4 py-1 rounded-full text-xs tracking-widest uppercase font-bold bg-white">
                                Love
                            </span>
                        </div>
                    </div>
                    
                    <img 
                        src={src} 
                        alt={`Wedding Moment ${idx + 1}`} 
                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out block filter brightness-90 group-hover:brightness-100"
                        loading="lazy"
                        width="600"
                        height="800"
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};