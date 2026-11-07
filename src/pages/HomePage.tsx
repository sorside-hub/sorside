import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Music, Folder, ArrowRight } from 'lucide-react';
import { ARTICLES, HERO_IMAGE, ABOUT_PORTRAIT_IMAGE } from '../content/articles';
import { ArticleCard } from '../components/ui/ArticleCard';

export const HomePage: React.FC = () => {
  const latestArticles = ARTICLES.slice(0, 3);

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

      {/* Main Content Grid: 2 Columns */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start pt-6 border-t border-[#E2DAC8] dark:border-[#2D2B26]">
        {/* Left Column (Latest Writing, 65%) */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
          {/* Section Header with Line to View All */}
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

          {/* Articles List */}
          <div className="space-y-10 sm:space-y-12">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        {/* Right Column (About sorside & Explore, 35%) */}
        <div className="lg:col-span-5 xl:col-span-4 lg:pl-10 lg:border-l border-[#E2DAC8] dark:border-[#2D2B26] flex flex-col space-y-12 sm:space-y-14">
          {/* About sorside. Card */}
          <div className="pt-2">
            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="w-24 h-32 sm:w-28 sm:h-36 shrink-0 overflow-hidden bg-stone-200 dark:bg-stone-800">
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
                  Sorside adalah ruang untuk menyimpan dan membagikan sisi-sisi dari Sor—tentang musik, tulisan, visual, dan segala hal yang lahir dari pikiran ini.
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

          {/* Explore Section */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Explore
              </h3>
              <div className="flex-1 h-[1px] bg-[#E2DAC8] dark:bg-[#2D2B26]" aria-hidden="true" />
            </div>

            <nav className="divide-y divide-[#E2DAC8]/60 dark:divide-[#2D2B26]/60 text-sm font-sans">
              <Link
                to="/writing"
                className="flex items-center justify-between py-3.5 text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white transition-colors group"
              >
                <span className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors" />
                  All Writings
                </span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/music"
                className="flex items-center justify-between py-3.5 text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white transition-colors group"
              >
                <span className="flex items-center gap-3">
                  <Music className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors" />
                  Music (Coming Soon)
                </span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/writing"
                className="flex items-center justify-between py-3.5 text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white transition-colors group"
              >
                <span className="flex items-center gap-3">
                  <Folder className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors" />
                  Archive
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
