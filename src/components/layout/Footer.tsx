import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#181816] dark:bg-[#100F0E] text-[#F3EFE6] pt-12 pb-10 border-t border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#2B2A27]">
          {/* Brand lockup */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div>
              <Link
                to="/"
                className="text-2xl font-serif font-bold tracking-tight text-[#F3EFE6] hover:text-stone-300 transition-colors block"
              >
                sorside.
              </Link>
              <p className="text-xs text-[#9E9A91] tracking-wide mt-1 font-sans">
                A collection of sides.
              </p>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-[#33312D]" aria-hidden="true" />

            {/* Footer Navigation */}
            <nav className="flex items-center gap-6 text-sm text-[#D5CEC2]">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/writing" className="hover:text-white transition-colors">
                Writing
              </Link>
              <Link to="/music" className="hover:text-white transition-colors">
                Music
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-[#D5CEC2]">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube channel"
              className="hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@sorside.com"
              aria-label="Contact email"
              className="hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Sub-footer Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9E9A91]">
          <p>© 2026 sorside. All rights reserved.</p>
          <p className="font-serif italic text-[#C0B9AD]">Every side has a story.</p>
        </div>
      </div>
    </footer>
  );
};
