import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
  className?: string;
  showImage?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  className = '',
  showImage = true,
}) => {
  const hasImage = Boolean(showImage && article.coverImage);

  return (
    <article className={`group relative ${className}`}>
      <Link
        to={`/writing/${article.slug}`}
        className={
          hasImage
            ? 'flex flex-col sm:flex-row gap-5 sm:gap-6 items-start'
            : 'block max-w-2xl'
        }
      >
        {/* Cover thumbnail when present */}
        {hasImage && (
          <div className="w-full sm:w-48 sm:h-32 md:w-56 md:h-36 shrink-0 overflow-hidden bg-stone-200 dark:bg-stone-800">
            <img
              src={article.coverImage}
              alt={article.coverAlt || article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-300"
              loading="lazy"
            />
          </div>
        )}

        {/* Text content */}
        <div className="flex-1 min-w-0">
          <div className="text-[11px] sm:text-xs font-sans tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-1.5 sm:mb-2">
            <span>{article.category}</span>
            <span className="mx-2 text-stone-400 dark:text-stone-600">·</span>
            <span>{article.displayDate}</span>
            {article.readTime && (
              <>
                <span className="mx-2 text-stone-400 dark:text-stone-600">·</span>
                <span>{article.readTime}</span>
              </>
            )}
          </div>

          <h3
            className={`font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors leading-snug ${
              hasImage ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-[26px]'
            }`}
          >
            {article.title}
          </h3>

          <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-sans line-clamp-2 sm:line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
};
