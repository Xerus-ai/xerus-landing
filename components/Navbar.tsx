'use client';

import { useState } from 'react';
import { m, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 50);
  });

  return (
    <>
      <m.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-400',
          scrolled && 'glass-nav max-w-content mx-auto mt-3 rounded-[18px] py-2'
        )}
        role="banner"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5" aria-label="Xerus home">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
            <img
              src="/images/xerus.svg"
              alt=""
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
          <img
            src="/images/logo-svg.svg"
            alt="Xerus"
            width={96}
            height={28}
            className="h-7"
          />
        </a>

        {/* Desktop CTA */}
        <a href="#request-access" className="btn-primary hidden md:inline-flex">
          Request Early Access
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile overlay */}
        {menuOpen && (
          <m.div
            className="fixed inset-0 z-40 bg-cream-base flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-6 p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <a
              href="#request-access"
              className="btn-primary inline-flex text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Request Early Access
            </a>
          </m.div>
        )}
      </m.header>
    </>
  );
}
