import React from 'react';
import { Link } from 'react-router-dom';
import { Music as MusicIcon, ArrowLeft } from 'lucide-react';

export const MusicPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 sm:px-8 py-20 sm:py-28 text-center">
      <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-stone-200/60 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300">
        <MusicIcon className="w-6 h-6 stroke-[1.5]" />
      </div>

      <p className="text-[11px] sm:text-xs font-sans tracking-[0.25em] uppercase text-stone-500 dark:text-stone-400 mb-3">
        Sonic Explorations
      </p>

      <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
        Music
      </h1>

      <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 font-sans leading-relaxed mb-8 max-w-lg mx-auto">
        Sisi musikal dari sorside saat ini sedang dalam proses komposisi dan kurasi. Karya rekaman, aransemen akustik, dan lanskap suara akan dirilis di sini.
      </p>

      <div className="inline-block py-1.5 px-4 text-xs font-sans tracking-widest uppercase text-stone-500 dark:text-stone-400 border border-[#E2DAC8] dark:border-[#2D2B26] rounded mb-10">
        Coming Soon
      </div>

      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-sans font-medium text-stone-800 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    </div>
  );
};
