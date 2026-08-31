'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '@/data/education';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#0b0b0d] border-t border-white/[0.05] section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="section-label justify-center">
            <span className="dot-accent" />
            <span>Academic Background</span>
          </div>
          <h2 className="section-heading">Education</h2>
          <p
            className="section-subheading mx-auto max-w-[50rem] text-center"
            style={{ maxWidth: '50rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}
          >
            Dual foundation across business administration and core mechanical engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="card-base card-hover bg-[#101014] border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 flex-shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  {edu.status === 'Currently Pursuing' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      Currently Pursuing
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-xs font-medium">
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#f5f5f7] mb-1">
                  {edu.degree}
                </h3>
                <p className="text-purple-400 text-sm font-semibold mb-3">
                  {edu.specialization}
                </p>
                <p className="text-neutral-300 text-sm font-medium mb-4">
                  {edu.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-500 font-medium">
                <Calendar size={14} className="text-purple-400/70" />
                <span>{edu.startYear} — {edu.endYear}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
