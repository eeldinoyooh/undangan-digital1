import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

const getBaseUrl = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.origin + window.location.pathname;
  }
  return '';
};

const generateInvitationLink = (guestName: string): string => {
  const baseUrl = getBaseUrl();
  const encodedName = encodeURIComponent(guestName);
  return `${baseUrl}?to=${encodedName}`;
};

export const GuestManager: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (guestName.trim()) {
      const link = generateInvitationLink(guestName.trim());
      setGeneratedLink(link);
      setCopied(false);
    }
  };

  const handleCopy = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-sage-light mb-4">Generator Link Undangan</h1>
          <p className="text-gray-400">Masukkan nama tamu untuk generate link undangan personal</p>
        </div>

        {/* Generate Link Form */}
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/10">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Masukkan Nama Tamu"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-sage text-lg"
              onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              className="w-full bg-sage text-dark font-semibold px-6 py-3 rounded-lg hover:bg-sage-light transition-colors"
            >
              Generate Link
            </button>
          </div>
        </div>

        {/* Generated Link */}
        {generatedLink && (
          <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h3 className="font-display text-xl text-white mb-4">Link Undangan untuk: {guestName}</h3>
            <div className="bg-dark/50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-300 break-all">{generatedLink}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className="flex-1 bg-sage/20 border border-sage/50 text-sage-light px-4 py-3 rounded-lg hover:bg-sage/30 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
                {copied ? 'Tersalin!' : 'Salin Link'}
              </button>
              <a
                href={generatedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/10 border border-white/20 text-white px-4 py-3 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <ExternalLink size={20} />
                Buka Preview
              </a>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="mt-8 bg-sage/10 border border-sage/30 rounded-xl p-6">
          <h3 className="font-display text-lg text-sage-light mb-2">Cara Menggunakan:</h3>
          <ol className="text-gray-300 text-sm space-y-2 list-decimal list-inside">
            <li>Masukkan nama tamu di form di atas</li>
            <li>Klik "Generate Link" untuk membuat link undangan</li>
            <li>Salin link dan bagikan ke tamu yang bersangkutan</li>
            <li>Setiap tamu akan melihat namanya di halaman cover undangan</li>
          </ol>
          <p className="mt-4 text-xs text-gray-400">
            <strong>Tip:</strong> Anda juga bisa langsung akses dengan menambahkan <code className="bg-dark/50 px-2 py-1 rounded">?to=NamaTamu</code> di URL
          </p>
        </div>
      </div>
    </div>
  );
};

