import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Music, Folder, ArrowRight } from 'lucide-react';
import { ARTICLES, HERO_IMAGE, ABOUT_PORTRAIT_IMAGE } from '../content/articles';
import { getVisibleReleases } from '../content/music';
import { ArticleCard } from '../components/ui/ArticleCard';

export const HomePage: React.FC = () => {
  const latestArticles = ARTICLES.slice(0, 3);
  const latestReleases = getVisibleReleases().slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section: Asymmetric Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
        {/* Left: Headline & Statement */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <p className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-stone-500 dark:text-stone-400 mb-3 sm:mb-4">
            A collection of sides.
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.08] text-balance">
            Every side<br />has a story.
          </h1>

          <div className="flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <span className="w-10 sm:w-12 h-[1.5px] bg-stone-700 dark:bg-stone-300 shrink-0" aria-hidden="true" />
            <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 font-sans leading-relaxed">
              Words, sounds,<br />and everything in between.
            </p>
          </div>
        </div>

        {/* Right: Architectural / Atmospheric Hero Image */}
        <div className="lg:col-span-6 overflow-hidden bg-stone-200 dark:bg-stone-800 shadow-sm">
          <img
            src={HERO_IMAGE}
            alt="Atmospheric architectural concrete rooftop and overcast sky"
            className="w-full h-[280px] sm:h-[360px] lg:h-[400px] object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Two Pillars Section: Latest Writing & Latest Music (50 : 50) */}
      <section className="pt-8 sm:pt-12 border-t border-[#E2DAC8] dark:border-[#2D2B26]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Column 1: Latest Writing (50%) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 whitespace-nowrap">
                Latest Writing
              </h2>
              <div className="flex-1 h-[1px] bg-[#E2DAC8] dark:bg-[#2D2B26] mx-2" aria-hidden="true" />
              <Link
                to="/writing"
                className="text-xs sm:text-sm font-serif italic text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white flex items-center gap-1.5 whitespace-nowrap transition-colors"
              >
                View all <ArrowRight className="w-3.5 h-3.5 not-italic" />
              </Link>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {latestArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  imageClassName="w-full sm:w-36 md:w-40 sm:h-28 md:h-28 aspect-[4/3] shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Column 2: Latest Music (50%) */}
          <div className="lg:col-span-6 lg:pl-10 lg:border-l border-[#E2DAC8] dark:border-[#2D2B26] flex flex-col pt-10 lg:pt-0 mt-12 sm:mt-14 lg:mt-0 border-t lg:border-t-0 border-[#E2DAC8] dark:border-[#2D2B26]">
            <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 whitespace-nowrap">
                Latest Music
              </h2>
              <div className="flex-1 h-[1px] bg-[#E2DAC8] dark:bg-[#2D2B26] mx-2" aria-hidden="true" />
              <Link
                to="/music"
                className="text-xs sm:text-sm font-serif italic text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white flex items-center gap-1.5 whitespace-nowrap transition-colors"
              >
                View all <ArrowRight className="w-3.5 h-3.5 not-italic" />
              </Link>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {latestReleases.map((release) => (
                <article key={release.id} className="group relative">
                  <Link
                    to={`/music/releases/${release.slug}`}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start"
                  >
                    {/* Square Cover Artwork */}
                    <div className="w-full sm:w-36 md:w-40 aspect-square shrink-0 overflow-hidden bg-stone-200 dark:bg-stone-800 border border-[#E2DAC8]/60 dark:border-[#2D2B26]/60 shadow-xs">
                      {release.coverArtUrl ? (
                        <img
                          src={release.coverArtUrl}
                          alt={release.coverArtAlt || release.title}
                          className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-300"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs font-serif italic text-stone-400">
                          sorside music
                        </div>
                      )}
                    </div>

                    {/* Metadata & Title */}
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] sm:text-xs font-sans tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-1.5">
                        <span>{release.releaseType}</span>
                        <span className="mx-2 text-stone-400 dark:text-stone-600">·</span>
                        <span>{release.displayYear}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors leading-snug">
                        {release.title}
                      </h3>

                      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 font-sans line-clamp-2 leading-relaxed">
                        {release.description}
                      </p>

                      <span className="inline-flex items-center gap-1 text-xs font-sans font-medium text-stone-900 dark:text-stone-200 group-hover:text-stone-600 dark:group-hover:text-stone-400 mt-2.5 transition-colors">
                        View release <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Listening Highlight */}
            <div className="mt-8 pt-6 border-t border-[#E2DAC8]/60 dark:border-[#2D2B26]/60">
              <div className="flex items-start gap-4 p-4 bg-stone-100/70 dark:bg-stone-900/40 border border-[#E2DAC8]/60 dark:border-[#2D2B26]/60">
                <div className="p-2 bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 shrink-0">
                  <Music className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-sans tracking-widest uppercase text-stone-500 dark:text-stone-400">
                    Featured Track
                  </p>
                  <Link
                    to="/music/tracks/langkah-yang-tertinggal"
                    className="text-sm font-serif font-bold text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    Langkah yang Tertinggal <ArrowRight className="w-3 h-3" />
                  </Link>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-sans mt-1">
                    Dengarkan rekaman akustik mentah dan baca catatan di baliknya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Identity & Navigation (About sorside + Explore) */}
      <section className="mt-16 sm:mt-20 pt-10 sm:pt-14 border-t border-[#E2DAC8] dark:border-[#2D2B26]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* About sorside (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
              <div className="w-24 h-32 sm:w-28 sm:h-36 shrink-0 overflow-hidden bg-stone-200 dark:bg-stone-800 border border-[#E2DAC8]/60 dark:border-[#2D2B26]/60">
                <img
                  src={ABOUT_PORTRAIT_IMAGE}
                  alt="Portrait silhouette of author looking over city"
                  className="w-full h-full object-cover grayscale-[25%]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-1">
                <div className="pb-1 mb-2.5 border-b border-[#D5CCBA] dark:border-[#38352F]">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                    About sorside.
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                  Sorside adalah ruang untuk menyimpan dan membagikan sisi-sisi dari Sor—tentang tulisan, pengamatan personal, dan eksplorasi musik yang lahir dari kegelisahan sehari-hari.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-sans font-medium text-stone-900 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400 mt-3 transition-colors"
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Explore Section (5 cols) */}
          <div className="lg:col-span-5 lg:pl-10 lg:border-l border-[#E2DAC8] dark:border-[#2D2B26] pt-6 lg:pt-0 border-t lg:border-t-0 border-[#E2DAC8] dark:border-[#2D2B26]">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Explore
              </h3>
              <div className="flex-1 h-[1px] bg-[#E2DAC8] dark:bg-[#2D2B26]" aria-hidden="true" />
            </div>

            <nav className="divide-y divide-[#E2DAC8]/60 dark:divide-[#2D2B26]/60 text-sm font-sans">
              <Link
                to="/writing"
                className="flex items-center justify-between py-3 text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white transition-colors group"
              >
                <span className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors" />
                  All Writings
                </span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/music"
                className="flex items-center justify-between py-3 text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white transition-colors group"
              >
                <span className="flex items-center gap-3">
                  <Music className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors" />
                  Music Archive
                </span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="flex items-center justify-between py-3 text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white transition-colors group"
              >
                <span className="flex items-center gap-3">
                  <Folder className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors" />
                  About sorside
                </span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};
