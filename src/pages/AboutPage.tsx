import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { ABOUT_PORTRAIT_IMAGE } from '../content/articles';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 dark:text-stone-400 mb-2">
          Identity & Archive
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 dark:text-stone-100">
          About sorside.
        </h1>
        <p className="mt-3 text-lg font-serif italic text-stone-600 dark:text-stone-400">
          &ldquo;Every side has a story.&rdquo;
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left Column: Portrait & Details */}
        <div className="md:col-span-5 flex flex-col space-y-6">
          <div className="overflow-hidden bg-stone-200 dark:bg-stone-800 shadow-sm">
            <img
              src={ABOUT_PORTRAIT_IMAGE}
              alt="Portrait silhouette of author looking out over city"
              className="w-full h-80 object-cover grayscale-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="p-4 border border-[#E2DAC8] dark:border-[#2D2B26] text-xs font-sans text-stone-600 dark:text-stone-400 space-y-2">
            <div>
              <span className="font-semibold text-stone-900 dark:text-stone-200">Creative Identity:</span> sorside
            </div>
            <div>
              <span className="font-semibold text-stone-900 dark:text-stone-200">Discipline:</span> Writing, Music
            </div>
            <div>
              <span className="font-semibold text-stone-900 dark:text-stone-200">Archive Established:</span> 2026
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="md:col-span-7 font-sans text-base sm:text-lg leading-[1.8] text-stone-700 dark:text-stone-300 space-y-6">
          <p>
            <strong className="font-serif text-xl sm:text-2xl text-stone-900 dark:text-stone-100 block mb-2 font-normal">
              Sebuah ruang independen untuk merawat pemikiran.
            </strong>
            Sorside adalah ruang untuk menyimpan dan membagikan sisi-sisi dari Sor—tentang tulisan, pengamatan personal, dan eksplorasi musik yang lahir dari kegelisahan sehari-hari.
          </p>

          <p>
            Nama ini mewakili keberagaman sisi dalam satu individu. Kita tidak pernah hanya terdiri dari satu peran atau satu minat. Dalam kesibukan hidup modern yang menuntut spesialisasi sempit, situs ini menjadi arsip pribadi yang jujur tempat berbagai dimensi kreatif diperbolehkan bernapas dan bertumbuh bersama.
          </p>

          <div className="border-l-2 border-stone-400 dark:border-stone-600 pl-5 my-6 italic font-serif text-lg text-stone-800 dark:text-stone-200">
            &ldquo;Bukan platform media sosial, melainkan sebuah rumah digital tempat tulisan dan kreasi dihargai dengan ketenangan dan ruang baca yang nyaman.&rdquo;
          </div>

          <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 pt-4">
            Eksplorasi yang Berjalan
          </h3>

          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-stone-400 dark:text-stone-500 font-mono">01.</span>
              <span><strong>Writing:</strong> Catatan reflektif, esai budaya, dan opini tentang kehidupan kota, hubungan, dan kreativitas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-stone-400 dark:text-stone-500 font-mono">02.</span>
              <span><strong>Music:</strong> Eksplorasi sonik dan komposisi akustik yang saat ini sedang dalam proses produksi.</span>
            </li>
          </ul>

          <div className="pt-6 border-t border-[#E2DAC8] dark:border-[#2D2B26] flex flex-wrap items-center gap-6">
            <Link
              to="/writing"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-400 transition-colors"
            >
              Explore Writing Archive <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:contact@sorside.com"
              className="inline-flex items-center gap-2 text-sm font-sans text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <Mail className="w-4 h-4" /> Say hello
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
