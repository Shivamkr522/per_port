'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { personal } from '@/data/personal';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const hasCustomImage = Boolean(personal.profileImage) && !imageError;

  const scrollTo = (href: string) => {
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
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen flex items-center pt-24 md:pt-16 pb-16 overflow-hidden"
    >
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Core PM Positioning */}
          <div className="lg:col-span-7 order-1">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 mb-8 text-purple-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span>Aspiring Product Manager • MBA (Marketing)</span>
              </div>

              {/* Main Headline / Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f5f5f7] tracking-tight mb-5 leading-[1.08]">
                {personal.name}
              </h1>

              {/* Sub-headline / Core Value Proposition */}
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 font-medium leading-snug mb-7 max-w-2xl">
                Bridging engineering precision, business strategy, and marketing insight to solve real-world problems.
              </p>

              {/* Supporting Bio */}
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-12 max-w-xl">
                With a B.Tech foundation in Mechanical Engineering and currently pursuing an MBA in Marketing at UPES, I bring structured analytical problem-solving to product strategy. Passionate about user-centric product development, data-informed decisions, and emerging AI tools.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo('#experience')}
                  className="btn-primary group"
                >
                  <span>View My Work</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="btn-secondary group"
                >
                  <Mail size={16} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span>Contact Me</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile Visual / Avatar */}
          <div className="lg:col-span-5 order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-6 rounded-full bg-purple-600/20 blur-3xl -z-10 pointer-events-none" />

              {/* Decorative Concentric Rings */}
              <div className="absolute -inset-3 rounded-full border border-purple-500/20 pointer-events-none" />
              <div className="absolute -inset-1.5 rounded-full border border-purple-500/30 pointer-events-none" />

              {/* Circular Avatar Container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-br from-[#1c1c24] via-[#101014] to-[#0a0a0c] shadow-2xl flex items-center justify-center">
                {hasCustomImage ? (
                  <Image
                    src={personal.profileImage}
                    alt={`${personal.name} - Aspiring Product Manager`}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 240px"
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Intentional Designer Fallback */
                  <div className="flex flex-col items-center justify-center text-center p-6 select-none relative z-10">
                    <div className="w-20 h-20 rounded-full bg-purple-500/15 border border-purple-500/35 flex items-center justify-center mb-3 shadow-[0_0_25px_rgba(139,92,246,0.2)]">
                      <span className="text-3xl font-extrabold tracking-tight text-purple-300">
                        {personal.initials}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-neutral-200 tracking-tight">{personal.name}</span>
                    <span className="text-xs text-purple-400 font-medium mt-1">Aspiring Product Manager</span>
                    <span className="text-[11px] text-neutral-500 mt-0.5">Lucknow, India</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
