'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Cpu, Download, CheckCircle2 } from 'lucide-react';
import { personal } from '@/data/personal';

const highlights = [
  { icon: Briefcase, label: 'Target Direction', value: 'Product Management' },
  { icon: Cpu, label: 'Engineering Base', value: 'B.Tech — Mechanical Engineering' },
  { icon: GraduationCap, label: 'Current Studies', value: 'MBA — Marketing (UPES)' },
  { icon: MapPin, label: 'Location', value: personal.location },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [downloadNote, setDownloadNote] = useState(false);

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if resume file exists
    fetch(personal.resumePath, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          e.preventDefault();
          setDownloadNote(true);
          setTimeout(() => setDownloadNote(false), 4000);
        }
      })
      .catch(() => {
        e.preventDefault();
        setDownloadNote(true);
        setTimeout(() => setDownloadNote(false), 4000);
      });
  };

  return (
    <section id="about" className="bg-[#0b0b0d] border-y border-white/[0.05] section-padding" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="section-label">
              <span className="dot-accent" />
              <span>About Me</span>
            </div>

            <h2 className="section-heading">
              Engineering Mindset.<br />
              Business & Product Perspective.
            </h2>

            <div className="accent-line mb-8" />

            <div className="space-y-5 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                My journey began with a Bachelor of Technology in Mechanical Engineering, where I developed rigorous analytical discipline, systems thinking, and a habit of breaking complex problems down into their core mechanics.
              </p>
              <p>
                As I explored the broader landscape of technology and commerce, I realized that technical solutions achieve their fullest impact when aligned with customer behavior and market viability. To bridge this gap, I am currently pursuing an MBA in Marketing at UPES.
              </p>
              <p>
                Product Management is the natural intersection where these disciplines meet. I am dedicated to understanding customer needs, defining clear product requirements, collaborating across functional domains, and leveraging modern data analytics and AI tools to build meaningful products.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Structured Highlights Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="card-base bg-[#101014] border-white/10 shadow-xl">
              <h3 className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-8 flex items-center gap-2">
                <span>Profile Snapshot</span>
              </h3>

              <div className="space-y-6">
                {highlights.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] text-neutral-500 tracking-wider uppercase font-medium">{item.label}</p>
                      <p className="text-neutral-200 text-sm font-semibold mt-1.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={personal.resumePath}
                  download
                  onClick={handleResumeClick}
                  className="btn-secondary w-full justify-center text-xs sm:text-sm font-semibold"
                >
                  <Download size={16} className="text-purple-400" />
                  <span>Download Resume</span>
                </a>

                {downloadNote && (
                  <p className="text-xs text-purple-300 text-center mt-3 bg-purple-500/10 border border-purple-500/20 rounded-lg p-2.5">
                    📄 Resume PDF is being finalized and will be uploaded shortly.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
