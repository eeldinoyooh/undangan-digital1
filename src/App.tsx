import React, { useState, useEffect, useRef } from 'react';
import { Cover } from './components/Cover';
import { Hero } from './components/Hero';
import { Quote } from './components/Quote';
import { BrideGroom } from './components/BrideGroom';
import { OurStory } from './components/OurStory';
import { EventDetails } from './components/EventDetails';
import { Gift } from './components/Gift';
import { RSVP } from './components/RSVP';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';
import { MusicPlayer, MusicPlayerHandle } from './components/MusicPlayer';
import { GuestManager } from './components/GuestManager';

const App: React.FC = () => {
  const [isInvitationOpened, setIsInvitationOpened] = useState<boolean>(false);
  const [guestName, setGuestName] = useState<string>('Tamu Undangan');
  const [showAdmin, setShowAdmin] = useState<boolean>(false);

  const musicPlayerRef = useRef<MusicPlayerHandle>(null);

  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: false,
        mirror: false,
        offset: 50,
      });
    }

    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    const admin = params.get('admin');

    if (to) {
      setGuestName(to);
    }

    if (admin === 'true') {
      setShowAdmin(true);
    }

    // Coba putar musik otomatis saat halaman dimuat
    const tryPlayMusic = () => {
      if (musicPlayerRef.current) {
        musicPlayerRef.current.playMusic();
      }
    };

    // Coba beberapa kali dengan delay berbeda untuk mengatasi autoplay policy
    const timer1 = setTimeout(tryPlayMusic, 300);
    const timer2 = setTimeout(tryPlayMusic, 800);
    const timer3 = setTimeout(tryPlayMusic, 1500);

    // Coba saat user berinteraksi pertama kali
    const handleFirstInteraction = () => {
      tryPlayMusic();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('mousemove', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });
    window.addEventListener('mousemove', handleFirstInteraction, { once: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('mousemove', handleFirstInteraction);
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Attempt to play music on user interaction
    if (musicPlayerRef.current) {
      musicPlayerRef.current.playMusic();
    }
  };

  // Tampilkan halaman admin jika parameter admin=true
  if (showAdmin) {
    return <GuestManager />;
  }

  return (
    <div className="relative min-h-screen font-body text-gray-700 bg-gray-100 selection:bg-sage selection:text-cream">
      {/* Max-width container for desktop */}
      <div className="max-w-[375px] mx-auto bg-cream shadow-2xl min-h-screen relative">
        <MusicPlayer ref={musicPlayerRef} isVisible={isInvitationOpened} />

        {/* Lock Screen / Cover */}
        <div
          className={`fixed inset-0 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-[375px] md:w-full z-50 transition-transform duration-700 cubic-bezier(0.7, 0, 0.3, 1) ${isInvitationOpened ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
          <Cover guestName={guestName} onOpen={handleOpenInvitation} musicPlayerRef={musicPlayerRef} />
        </div>

        {/* Main Content */}
        <main className={`transition-opacity duration-700 delay-200 ${isInvitationOpened ? 'opacity-100' : 'opacity-0'}`}>
          <div className="overflow-hidden bg-cream">
            <Hero />
            <Quote />
            <BrideGroom />
            <OurStory />
            <EventDetails />
            <Gift />
            <RSVP />
            <Closing />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;