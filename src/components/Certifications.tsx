'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, Layers, X } from 'lucide-react';
import { certifications } from '@/data/certifications';
import CertificateCard from './CertificateCard';
import CertificateViewer from './CertificateViewer';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  const total = certifications.length;
  const activeCert = certifications[activeIndex];

  // Shortest signed circular distance from activeIndex to i (e.g. with 5
  // items, index 4 is treated as offset -1 from index 0, not +4), so the
  // coverflow stage below only ever needs to render the immediate left/
  // right neighbors of whichever card is active.
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const goNext = useCallback(() => {
    if (total <= 1) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    if (total <= 1) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].screenX;
    const diff = touchStartRef.current - touchEndRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalOpen) {
        if (e.key === 'Escape') setModalOpen(false);
        return;
      }
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, modalOpen]);

  // Lock body scroll while the certificate viewer modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  if (total === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="section-label justify-center">
            <span className="dot-accent" />
            <span>Lifelong Learning</span>
          </div>
          <h2 className="section-heading">Certifications & Courses</h2>
          <p
            className="section-subheading mx-auto max-w-[50rem] text-center"
            style={{ maxWidth: '50rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}
          >
            Continuous learning across analytical tools, AI, and practical frameworks.
          </p>
        </motion.div>
      </div>

      {/* Carousel Showcase Area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="section-container">
          <div className="relative min-h-[440px] sm:min-h-[460px]">
            {certifications.map((cert, i) => {
              const offset = getOffset(i);
              // Only the active card and its immediate neighbors are ever
              // visible, so nothing else needs to render.
              if (Math.abs(offset) > 1) return null;
              const isActive = offset === 0;

              return (
                <div
                  key={cert.id}
                  className="absolute inset-0 flex items-center justify-center px-2 sm:px-6"
                  style={{ zIndex: isActive ? 20 : 10 - Math.abs(offset) }}
                >
                  <motion.div
                    className={!isActive ? 'w-full max-w-2xl cursor-pointer' : 'w-full max-w-2xl'}
                    animate={{
                      x: isActive ? '0%' : offset > 0 ? '58%' : '-58%',
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.45,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={!isActive ? () => setActiveIndex(i) : undefined}
                  >
                    <div className={!isActive ? 'pointer-events-none' : undefined}>
                      <CertificateCard
                        certification={cert}
                        isActive={isActive}
                        onOpen={() => setModalOpen(true)}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls (If multiple certificates) */}
          {total > 1 ? (
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={goPrev}
                className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-neutral-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {certifications.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-full transition-all duration-300 focus:outline-none ${
                      i === activeIndex
                        ? 'w-8 h-2 bg-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to certificate ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-neutral-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label="Next certificate"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          ) : (
            <div className="text-center mt-8">
              <p className="text-xs text-neutral-500 font-medium inline-flex items-center gap-2">
                <Layers size={14} className="text-purple-400/70" />
                <span>Additional certifications coming soon</span>
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {modalOpen && activeCert.previewImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl h-[85vh] bg-[#101014] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-white/10 flex-shrink-0">
                <h3 className="text-sm sm:text-base font-bold text-[#f5f5f7] truncate pr-4">
                  {activeCert.name}
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={activeCert.credentialUrl}
                    download
                    className="h-9 px-3 rounded-full border border-white/15 bg-white/[0.03] flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    aria-label="Download certificate PDF"
                  >
                    <Download size={14} />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-neutral-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    aria-label="Close certificate viewer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <CertificateViewer images={activeCert.previewImages} alt={activeCert.name} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
