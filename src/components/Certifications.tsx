'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { certifications } from '@/data/certifications';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="section-label">
            <span className="dot-accent" />
            <span>Lifelong Learning</span>
          </div>
          <h2 className="section-heading">Certifications & Courses</h2>
          <p className="section-subheading">
            Continuous skill development across analytical tools, computing fundamentals, and practical frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-base card-hover bg-[#0f0f13] border-white/10 block group"
                >
                  <CertContent cert={cert} hasLink />
                </a>
              ) : (
                <div className="card-base bg-[#0f0f13] border-white/10">
                  <CertContent cert={cert} hasLink={false} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertContent({
  cert,
  hasLink,
}: {
  cert: (typeof certifications)[number];
  hasLink: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
        <Award size={20} />
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-bold text-[#f5f5f7] leading-snug">
            {cert.name}
          </h3>
          {hasLink && (
            <ExternalLink
              size={15}
              className="text-neutral-500 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-1"
            />
          )}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300">
            <CheckCircle2 size={12} className="text-purple-400" />
            {cert.platform}
          </span>
        </div>
      </div>
    </div>
  );
}
