'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, Download, ExternalLink, Sparkles } from 'lucide-react';
import type { Certification } from '@/data/certifications';

interface CertificateCardProps {
  certification: Certification;
  isActive: boolean;
  onOpen: () => void;
}

export default function CertificateCard({ certification, isActive, onOpen }: CertificateCardProps) {
  const [imageError, setImageError] = useState(false);
  const thumbnail = certification.previewImages[0];
  const hasThumbnail = Boolean(thumbnail) && !imageError;

  return (
    <div
      className={`card-base transition-all duration-500 ${
        isActive
          ? 'border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.15)] bg-[#121215]'
          : 'opacity-60 scale-95 bg-[#0e0e0e]'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Certificate Visual */}
        <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a24] to-[#0c0c10] border border-white/10 flex items-center justify-center">
          {hasThumbnail ? (
            <>
              <Image
                src={thumbnail}
                alt={certification.name}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                onError={() => setImageError(true)}
              />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center text-purple-300">
                <Award size={15} />
              </div>
            </>
          ) : (
            <div className="text-center p-6 flex flex-col items-center justify-center relative">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center mb-3 text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                <Award size={28} />
              </div>
              <p className="text-sm font-bold text-neutral-200">{certification.name}</p>
              <p className="text-xs text-purple-400/90 font-medium mt-1">{certification.platform}</p>
            </div>
          )}
        </div>

        {/* Certificate Details */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={12} className="text-purple-400" />
              <span>Featured Certification</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f7] mb-3 leading-snug">
              {certification.name}
            </h3>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300">
                <CheckCircle2 size={12} className="text-purple-400" />
                {certification.platform}
              </span>
              {certification.credentialId && (
                <span className="text-[11px] text-neutral-500">ID: {certification.credentialId}</span>
              )}
            </div>
          </div>

          {certification.credentialUrl ? (
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button onClick={onOpen} className="btn-primary text-xs py-2.5 px-4">
                <ExternalLink size={14} />
                <span>Open Certificate</span>
              </button>
              <a
                href={certification.credentialUrl}
                download
                className="btn-secondary text-xs py-2.5 px-4"
              >
                <Download size={14} />
                <span>Download</span>
              </a>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 text-xs text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-purple-500/60 animate-pulse" />
              <span>Certificate coming soon</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
