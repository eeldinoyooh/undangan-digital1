import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

interface CountdownProps {
  targetDate: string;
}

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center bg-white p-3 md:p-4 rounded-lg shadow-md min-w-[70px] md:min-w-[90px] border-t-[3px] border-[#8B7355]">
    <span className="text-2xl md:text-4xl font-bold text-[#8B7355] font-body">{value}</span>
    <span className="text-xs text-gray-700 uppercase tracking-wide mt-1">{label}</span>
  </div>
);

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
      <TimeUnit value={timeLeft.days} label="Hari" />
      <TimeUnit value={timeLeft.hours} label="Jam" />
      <TimeUnit value={timeLeft.minutes} label="Menit" />
      <TimeUnit value={timeLeft.seconds} label="Detik" />
    </div>
  );
};