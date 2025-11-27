import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { Music } from 'lucide-react';
import weddingMusic from '../asset/music/I Wanna Grow Old With You - Westlife.mp3';

export interface MusicPlayerHandle {
  playMusic: () => void;
}

interface MusicPlayerProps {
  isVisible?: boolean;
}

export const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(({ isVisible = true }, ref) => {
  const [playerReady, setPlayerReady] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pendingPlayRef = useRef(false);

  const MUSIC_URL = weddingMusic;

  const safePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return false;
    
    // Jika audio sudah diputar, return true
    if (!audio.paused) {
      setIsAudioPlaying(true);
      return true;
    }

    // Coba putar langsung tanpa menunggu playerReady
    try {
      await audio.play();
      setIsAudioPlaying(true);
      setPlayerReady(true);
      return true;
    } catch (error) {
      // Jika gagal, set pending untuk dicoba lagi nanti
      pendingPlayRef.current = true;
      return false;
    }
  };

  useImperativeHandle(ref, () => ({
    playMusic: () => {
      const audio = audioRef.current;
      // Jika audio sudah diputar, jangan lakukan apa-apa
      if (audio && !audio.paused) {
        return;
      }
      if (!safePlay()) {
        pendingPlayRef.current = true;
      }
    }
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryAutoPlay = async () => {
      const currentAudio = audioRef.current;
      if (!currentAudio || !currentAudio.paused) return;
      
      try {
        await currentAudio.play();
        setIsAudioPlaying(true);
      } catch (error) {
        // Jika gagal, coba lagi nanti
        pendingPlayRef.current = true;
      }
    };

    const handleCanPlay = () => {
      setPlayerReady(true);

      // Langsung coba putar otomatis
      if (pendingPlayRef.current) {
        pendingPlayRef.current = false;
        safePlay();
      } else {
        // Coba putar otomatis segera setelah ready
        tryAutoPlay();
      }
    };

    const handleLoadedData = () => {
      setPlayerReady(true);
      // Coba putar segera setelah data loaded
      tryAutoPlay();
    };

    const handlePlay = () => setIsAudioPlaying(true);
    const handlePause = () => setIsAudioPlaying(false);

    audio.volume = 0.65;
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Coba putar langsung jika audio sudah bisa diputar
    if (audio.readyState >= 2) { // HAVE_CURRENT_DATA atau lebih
      setPlayerReady(true);
      tryAutoPlay();
    }

    // Coba putar beberapa kali dengan interval berbeda untuk memastikan autoplay
    const timers = [
      setTimeout(() => tryAutoPlay(), 100),
      setTimeout(() => tryAutoPlay(), 300),
      setTimeout(() => tryAutoPlay(), 600),
      setTimeout(() => tryAutoPlay(), 1000),
      setTimeout(() => tryAutoPlay(), 2000),
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!playerReady) {
      pendingPlayRef.current = true;
      return;
    }

    if (audio.paused) {
      safePlay();
    } else {
      audio.pause();
      setIsAudioPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC_URL}
        preload="auto"
        autoPlay
        loop
        className="hidden"
      />

      {isVisible && (
        <button
          onClick={toggleAudio}
          className={`fixed bottom-12 md:bottom-2 left-4 md:left-6 z-[100] bg-white/90 backdrop-blur-md p-2 rounded-full shadow-[0_0_20px_rgba(156,175,136,0.4)] border border-sage/40 text-earth hover:bg-sage hover:text-dark transition-all duration-500 group animate-fade-in`}
          aria-label={isAudioPlaying ? "Pause Music" : "Play Music"}
        >
        <div className={`relative flex items-center justify-center`}>
           <Music size={18} className={`${isAudioPlaying ? 'animate-pulse' : ''} transition-all`} />
           
           {!isAudioPlaying && (
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
             </div>
           )}
        </div>
      </button>
      )}
    </>
  );
});

MusicPlayer.displayName = 'MusicPlayer';