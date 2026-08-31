'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  const total = projects.length;

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
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  if (total === 0) return null;

  return (
    <section id="projects" className="section-padding bg-[#09090b] border-t border-white/[0.05] overflow-hidden" ref={ref}>
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
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-heading">Projects & Practical Work</h2>
          <p
            className="section-subheading mx-auto max-w-[50rem] text-center"
            style={{ maxWidth: '50rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}
          >
            Hands-on engineering and product initiatives where I apply analytical problem solving, systems architecture, and business viability. 
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
          <div className="relative min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={projects[activeIndex]} isActive />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls (If multiple projects) */}
          {total > 1 ? (
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={goPrev}
                className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-neutral-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-full transition-all duration-300 focus:outline-none ${
                      i === activeIndex
                        ? 'w-8 h-2 bg-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-neutral-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          ) : (
            <div className="text-center mt-8">
              <p className="text-xs text-neutral-500 font-medium inline-flex items-center gap-2">
                <Layers size={14} className="text-purple-400/70" />
                <span>Additional product case studies currently in progress</span>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
