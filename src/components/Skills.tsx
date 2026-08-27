'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, BarChart3, Code2, Sparkles } from 'lucide-react';
import { skillCategories } from '@/data/skills';

const categoryIcons: Record<string, typeof Briefcase> = {
  'business-product': Briefcase,
  'analytics-productivity': BarChart3,
  technology: Code2,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <span className="dot-accent" />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-heading">Skills & Toolset</h2>
          <p className="section-subheading mx-auto">
            A balanced toolkit combining business thinking, analytical frameworks, and technological foundations to drive product execution.
          </p>
        </motion.div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = categoryIcons[category.id] || Sparkles;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-base card-hover bg-[#0f0f13] border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-neutral-100 uppercase tracking-wider">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-neutral-500 font-medium">Core Capabilities</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill bg-white/[0.04] border-white/[0.08] text-neutral-300 hover:border-purple-500/35 hover:text-white hover:bg-purple-500/10 transition-all font-medium text-xs sm:text-sm py-2 px-3.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
