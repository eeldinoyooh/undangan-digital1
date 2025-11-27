import React, { useState } from 'react';
import { Gift as GiftIcon, Copy, Check } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

interface BankAccount {
  bank: string;
  number: string;
  name: string;
  logoText: string;
}

export const Gift: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const accounts: BankAccount[] = weddingConfig.bankAccounts;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <section className="py-20 px-4 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -left-10 top-20 w-64 h-64 bg-[#B8A587]/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-10 bottom-20 w-64 h-64 bg-earth/5 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div data-aos="fade-up">
          <GiftIcon className="w-12 h-12 text-[#8B7355] mx-auto mb-4" />
          <h2 className="font-script text-5xl text-[#8B7355] mb-6">Wedding Gift</h2>
          <p className="text-gray-700 mb-10 leading-relaxed font-light">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {accounts.map((acc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md border-t-[3px] border-[#8B7355] flex flex-col items-center transform transition-transform hover:-translate-y-1 hover:border-[#B8A587]/30"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4 w-full flex justify-center">
                <span className="font-bold text-2xl text-[#8B7355] italic border-b border-[#8B7355] pb-1 tracking-wider w-1/2 text-center">
                  {acc.logoText}
                </span>
              </div>
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">No. Rekening</p>
              <p className="text-xl font-mono font-semibold text-[#8B7355] mb-1 select-all tracking-wider">{acc.number}</p>
              <p className="text-sm text-gray-600 mb-6">a.n {acc.name}</p>

              <button
                onClick={() => handleCopy(acc.number, idx)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 w-full justify-center ${copiedIndex === idx
                    ? 'bg-green-600 text-white'
                    : 'bg-[#B8A587]/10 text-[#8B7355] hover:bg-[#8B7355] hover:text-white border border-[#B8A587]/30'
                  }`}
              >
                {copiedIndex === idx ? (
                  <>
                    <Check size={16} />
                    Berhasil
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Salin Nomor
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Kirim Kado Fisik (Optional) */}
        <div className="mt-12 bg-white p-6 rounded-xl border-t-[3px] border-[#8B7355] shadow-md" data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-semibold text-[#8B7355] mb-2">Alamat Pengiriman Kado</h3>
          <p className="text-gray-700 text-sm">
            {weddingConfig.giftAddress}
          </p>
        </div>
      </div>
    </section>
  );
};