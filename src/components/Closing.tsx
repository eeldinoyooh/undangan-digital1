import React from 'react';
import { weddingConfig } from '../config/wedding';
import keduaMempelai from '../asset/foto/kedua_mempelai.png';

export const Closing: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-white relative overflow-hidden">
            {/* Decorative wave top */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cream to-transparent"></div>

            <div className="max-w-md mx-auto text-center relative z-10">
                {/* Couple Illustration */}
                <div className="mb-8" data-aos="fade-up">
                    <div className="w-64 h-64 mx-auto bg-white rounded-full shadow-xl p-4 border-4 border-cream">
                        <img
                            src={keduaMempelai}
                            alt="Wedding Couple"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Thank You Message */}
                <div className="space-y-6 mb-8" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-gray-600 leading-relaxed px-4">
                        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i
                        berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami
                        mengucapkan terima kasih.
                    </p>

                    <div className="space-y-2">
                        <p className="font-script text-3xl text-gray-700">Wassalamu'alaikum Wr. Wb.</p>
                    </div>

                    <div className="mt-8">
                        <p className="font-script text-4xl md:text-5xl text-[#8B7355] leading-tight">
                            {weddingConfig.groomName} & {weddingConfig.brideName}
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative wave bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent"></div>
        </section>
    );
};
