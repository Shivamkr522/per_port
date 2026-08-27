'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="bg-[#0b0b0d] border-t border-white/[0.05] section-padding" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="section-label">
            <span className="dot-accent" />
            <span>Career Path</span>
          </div>
          <h2 className="section-heading">Professional Journey</h2>
          <p className="section-subheading">
            Track record of project execution, business problem solving, and collaborative impact.
          </p>
        </motion.div>

        {experiences.length > 0 ? (
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4.5 top-7 w-3.5 h-3.5 rounded-full bg-purple-500 border-4 border-[#0b0b0d] shadow-[0_0_12px_rgba(139,92,246,0.6)] hidden md:block" />

                  <div className="card-base card-hover bg-[#101014] border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#f5f5f7]">{exp.role}</h3>
                        <p className="text-purple-400 text-sm font-semibold mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-xs text-neutral-400 font-medium">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={13} className="text-purple-400/70" />
                          {exp.startDate} — {exp.endDate}
                        </span>
                        {exp.location && (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={13} className="text-purple-400/70" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.tools && exp.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tools.map((tool) => (
                          <span key={tool} className="skill-pill text-xs py-1 px-3">
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* Minimal & Elegant Placeholder */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="card-base bg-[#101014] border-white/10 text-center py-14 px-6 max-w-xl mx-auto"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
              <Briefcase size={24} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#f5f5f7] mb-2">
              Experience Details Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
              Professional and internship milestones are currently being documented and will be updated here shortly.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
