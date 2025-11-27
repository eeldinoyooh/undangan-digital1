import React from 'react';
import { Heart } from 'lucide-react';
import { getCoupleNames } from '../config/wedding';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream text-gray-800 py-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <h2 className="font-script text-2xl">{getCoupleNames()}</h2>
      </div>
      <p className="text-sm text-gray-700 flex items-center justify-center gap-1">
        Created with <Heart size={14} className="text-red-500 fill-current" /> by
        <span className="text-gray-800 font-semibold">Senior Frontend Dev</span>
      </p>
    </footer>
  );
};