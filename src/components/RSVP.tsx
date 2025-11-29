import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, User, Clock } from 'lucide-react';
import { getCoupleNames } from '../config/wedding';

interface Wish {
  id: number;
  name: string;
  attendance: string;
  message: string;
  date: string;
}

export const RSVP: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    attendance: 'Hadir',
    guests: '1',
    message: ''
  });

  const initialWishes: Wish[] = [
    {
      id: 1,
      name: 'Admin Wedding',
      attendance: 'Hadir',
      message: `Selamat berbahagia untuk ${getCoupleNames()}! Semoga menjadi keluarga sakinah mawaddah warahmah.`,
      date: 'Baru saja'
    }
  ];

  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const wishesPerPage = 6;

  // URL Script Google Apps Anda
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby9DKI8wBoW4CUA999cN-AIi7BXMihBKLRR9_b-EXxEeyYa47OFVnUjVyUsJyIzws_4xg/exec';

  useEffect(() => {
    const savedWishes = localStorage.getItem('wedding-wishes');
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes));
    }
  }, []);

  // Fetch wishes from Google Sheet on load
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await fetch(SCRIPT_URL);
        const data = await response.json();

        if (Array.isArray(data)) {
          setWishes(data);
        }
      } catch (error) {
        console.error('Error fetching wishes:', error);
        // Fallback to local storage if fetch fails
        const savedWishes = localStorage.getItem('wedding-wishes');
        if (savedWishes) {
          setWishes(JSON.parse(savedWishes));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishes();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Google Spreadsheet
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name || 'Anonim',
          attendance: form.attendance,
          guests: form.guests,
          message: form.message
        })
      });

      // Create new wish object for immediate display
      const newWish: Wish = {
        id: Date.now(),
        name: form.name || 'Anonim',
        attendance: form.attendance,
        message: form.message,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      };

      // Update local state immediately
      setWishes(prev => [newWish, ...prev]);

      // Reset form
      setForm({
        name: '',
        attendance: 'Hadir',
        guests: '1',
        message: ''
      });

      // Reset to page 1 after new submission
      setCurrentPage(1);

      alert('Ucapan berhasil dikirim! Terima kasih atas doa restu Anda 🙏');
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(wishes.length / wishesPerPage);
  const indexOfLastWish = currentPage * wishesPerPage;
  const indexOfFirstWish = indexOfLastWish - wishesPerPage;
  const currentWishes = wishes.slice(indexOfFirstWish, indexOfLastWish);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to wishes list smoothly
    document.getElementById('wishes-list')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <section className="py-20 px-4 bg-cream border-t border-[#B8A587]/20">
      <div className="max-w-2xl mx-auto">
        {/* Form Section */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border-t-[3px] border-[#8B7355] mb-12" data-aos="fade-up">
          <div className="text-center mb-8">
            <MessageCircle className="w-12 h-12 text-[#8B7355] mx-auto mb-4" />
            <h2 className="font-script text-4xl text-[#8B7355] mb-2">RSVP & Ucapan</h2>
            <p className="text-gray-700 text-sm">Konfirmasi kehadiran dan berikan doa restu Anda.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-cream border border-[#B8A587]/30 text-gray-800 focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355] outline-none transition-all"
                placeholder="Nama Anda"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kehadiran</label>
                <select
                  name="attendance"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-[#B8A587]/30 text-gray-800 focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355] outline-none"
                  value={form.attendance}
                  onChange={handleChange}
                >
                  <option value="Hadir">Hadir</option>
                  <option value="Tidak Hadir">Maaf Tidak Hadir</option>
                  <option value="Mungkin Hadir">Masih Ragu</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah Tamu</label>
                <select
                  name="guests"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-[#B8A587]/30 text-gray-800 focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355] outline-none"
                  value={form.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 Orang</option>
                  <option value="2">2 Orang</option>
                  <option value="3">3 Orang</option>
                  <option value="4">4 Orang</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ucapan & Doa</label>
              <textarea
                name="message"
                rows={3}
                required
                className="w-full px-4 py-3 rounded-xl bg-cream border border-[#B8A587]/30 text-gray-800 focus:border-[#8B7355] focus:ring-1 focus:ring-[#8B7355] outline-none transition-all resize-none"
                placeholder="Tulis ucapan selamat..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8B7355] text-white font-bold py-3 rounded-xl hover:bg-[#6B5744] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
            </button>
          </form>
        </div>

        {/* Wishes List Section */}
        <div id="wishes-list" className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-script text-3xl text-center text-[#8B7355] mb-6">Doa Restu ({wishes.length})</h3>

          <div className="space-y-4 px-2">
            {isLoading ? (
              <p className="text-center text-gray-500">Memuat ucapan...</p>
            ) : wishes.length === 0 ? (
              <p className="text-center text-gray-700 italic">Belum ada ucapan. Jadilah yang pertama mengirim!</p>
            ) : (
              <>
                {currentWishes.map((wish) => (
                  <div key={wish.id} className="bg-white p-4 rounded-xl shadow-sm border-t-[3px] border-[#8B7355] hover:border-[#B8A587]/20 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#B8A587]/10 p-2 rounded-full">
                        <User size={20} className="text-[#8B7355]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-[#8B7355]">{wish.name}</h4>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${wish.attendance === 'Hadir' ? 'border-green-800 text-green-500 bg-green-900/20' :
                            wish.attendance === 'Tidak Hadir' ? 'border-red-800 text-red-500 bg-red-900/20' : 'border-gray-700 text-gray-400 bg-gray-800'
                            }`}>
                            {wish.attendance}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-600 mb-2 mt-0.5">
                          <Clock size={10} />
                          <span>{wish.date}</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{wish.message}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-2 rounded-lg bg-white border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#8B7355]"
                    >
                      ‹ Prev
                    </button>

                    {/* Page Numbers */}
                    <div className="flex gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-lg transition-all ${currentPage === page
                            ? 'bg-[#8B7355] text-white font-semibold'
                            : 'bg-white border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white'
                            }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 rounded-lg bg-white border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#8B7355]"
                    >
                      Next ›
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};