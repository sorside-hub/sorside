import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', end: true },
    { name: 'Writing', href: '/writing', end: false },
    { name: 'Music', href: '/music', end: false },
    { name: 'About', href: '/about', end: false },
  ];

  return (
    <header className="w-full bg-[#F4EFEA] dark:bg-[#161513] transition-colors border-b border-[#E2DAC8]/60 dark:border-[#2D2B26]/60 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-100 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
        >
          sorside.
        </Link>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans tracking-normal text-stone-700 dark:text-stone-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.end}
              className={({ isActive }) =>
                `transition-colors hover:text-stone-950 dark:hover:text-stone-100 relative py-1 ${
                  isActive
                    ? 'text-stone-950 dark:text-stone-50 font-medium after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-stone-800 dark:after:bg-stone-200'
                    : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Utility Cluster (Desktop & Mobile) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            onClick={onOpenSearch}
            type="button"
            aria-label="Search articles"
            title="Search writings (Cmd+K)"
            className="p-2 rounded-md text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-400"
          >
            <Search className="w-4 h-4 stroke-[2]" />
          </button>

          <span className="hidden sm:inline-block w-[1px] h-5 bg-[#D5CCBA] dark:bg-[#34312B]" aria-hidden="true" />

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2 rounded-md text-stone-800 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2DAC8] dark:border-[#2D2B26] bg-[#F4EFEA] dark:bg-[#161513] px-6 py-6 transition-all">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-serif tracking-wide py-2 transition-colors ${
                    isActive
                      ? 'text-stone-950 dark:text-stone-50 font-semibold'
                      : 'text-stone-700 dark:text-stone-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 mt-6 border-t border-[#E2DAC8]/60 dark:border-[#2D2B26]/60 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <span>A collection of sides.</span>
            <span>Every side has a story.</span>
          </div>
        </div>
      )}
    </header>
  );
};
