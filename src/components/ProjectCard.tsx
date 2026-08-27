'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, FileText, Compass, Sparkles } from 'lucide-react';
import { GitHubIcon } from '@/components/Icons';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

export default function ProjectCard({ project, isActive }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const isPlaceholder = (val: string) => !val || val.startsWith('[ADD');
  const hasCustomImage = project.image && project.image !== '' && !project.image.startsWith('[ADD') && !imageError;

  return (
    <div
      className={`card-base transition-all duration-500 max-w-4xl mx-auto ${
        isActive
          ? 'border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.15)] bg-[#121215]'
          : 'opacity-60 scale-95 bg-[#0e0e0e]'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Project Visual / Image Placeholder */}
        <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a24] to-[#0c0c10] border border-white/10 flex items-center justify-center">
          {hasCustomImage ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="text-center p-6 flex flex-col items-center justify-center relative">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center mb-3 text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                <Compass size={28} />
              </div>
              <p className="text-sm font-bold text-neutral-200">Engineering & Product Study</p>
              <p className="text-xs text-purple-400/90 font-medium mt-1">Flywheel Energy Recovery</p>
              <span className="text-[10px] text-neutral-500 mt-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
                Mechanical Prototype
              </span>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={12} className="text-purple-400" />
              <span>Mechanical Engineering & Innovation</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f7] mb-3 leading-snug">
              {project.title}
            </h3>

            {/* Description */}
            {!isPlaceholder(project.description) ? (
              <p className="text-neutral-300 text-sm leading-relaxed mb-5">
                {project.description}
              </p>
            ) : (
              <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                A kinetic energy recovery mechanism designed for bicycles that captures braking energy into a rotating flywheel and transfers it back to assist acceleration.
              </p>
            )}

            {/* Structured PM Breakdown: Problem, Approach, Outcome */}
            <div className="space-y-3 mb-6 bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <div>
                <p className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider mb-0.5">Problem & Opportunity</p>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {!isPlaceholder(project.problem)
                    ? project.problem
                    : 'Conventional cycling loses substantial kinetic energy during braking, increasing physical fatigue during stop-and-go urban commutes.'}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider mb-0.5">Engineering & Product Approach</p>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {!isPlaceholder(project.approach)
                    ? project.approach
                    : 'Designed a clutch-engaged flywheel transmission system that safely harnesses rotational inertia during deceleration without adding excessive dead weight.'}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider mb-0.5">Key Learnings & Impact</p>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {!isPlaceholder(project.outcome)
                    ? project.outcome
                    : 'Reinforced structured mechanical design, trade-off analysis between efficiency and usability, and hands-on system prototyping.'}
                </p>
              </div>
            </div>

            {/* Technologies / Tools */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-pill text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Links / Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2.5 px-4"
              >
                <GitHubIcon size={14} />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2.5 px-4"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2.5 px-4"
              >
                <FileText size={14} />
                <span>Read Case Study</span>
              </a>
            )}
            {!project.github && !project.live && !project.caseStudy && (
              <div className="inline-flex items-center gap-2 text-xs text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-purple-500/60 animate-pulse" />
                <span>Detailed case study & technical drawings coming soon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
