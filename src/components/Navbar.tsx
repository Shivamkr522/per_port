'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certification', href: '#certification' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact'];
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080808]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollTo('#top')}
            className="group flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg p-1"
            aria-label="Sankalp Mehrotra - Back to top"
          >
            <span className="text-xl font-extrabold tracking-tight text-[#f5f5f7] group-hover:text-purple-400 transition-colors">
              SM
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500/50 ${
                    isActive
                      ? 'text-[#f5f5f7]'
                      : 'text-neutral-400 hover:text-[#f5f5f7]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-purple-500/20 border border-purple-500/30 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo('#contact')}
              className="text-xs font-semibold uppercase tracking-wider text-purple-300 hover:text-white px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg text-neutral-300 hover:text-white"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[4px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-28 pb-12 px-8"
          >
            <nav className="flex flex-col items-center justify-center flex-grow space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                >
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`text-2xl font-light tracking-tight transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-purple-400 font-semibold'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </nav>

            <div className="text-center pt-8 border-t border-white/10 flex flex-col items-center gap-3">
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary w-full justify-center"
              >
                Let&apos;s Connect
              </button>
              <p className="text-xs text-neutral-500">
                Sankalp Mehrotra • Aspiring Product Manager
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
