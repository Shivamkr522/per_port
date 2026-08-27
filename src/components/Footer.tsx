'use client';

import { LinkedInIcon, GitHubIcon } from '@/components/Icons';
import { personal } from '@/data/personal';

export default function Footer() {
  const isPlaceholder = (val: string) => !val || val.startsWith('[ADD');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080808] py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-[#f5f5f7] tracking-tight">{personal.initials}</span>
            <span className="text-neutral-600">—</span>
            <span className="text-sm text-neutral-400">
              © {year} {personal.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            {!isPlaceholder(personal.linkedin) ? (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#a78bfa] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
            ) : null}
            {!isPlaceholder(personal.github) ? (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#a78bfa] transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
