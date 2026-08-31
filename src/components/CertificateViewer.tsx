'use client';

import { useState } from 'react';

interface CertificateViewerProps {
  /** Pre-rendered page images for this certificate, in page order. */
  images: string[];
  alt: string;
}

/**
 * Displays a certificate as plain <img> pages instead of rendering the PDF
 * live in the browser. The certificates are pre-converted to images at
 * build time (see public/certificates/images/), which sidesteps the whole
 * class of problems that came with fetching/streaming the PDF itself
 * client-side (pdf.js version issues, dev-server range requests, and — the
 * one that couldn't be resolved — security software silently emptying the
 * live PDF response before it reached the page's JS). A plain image request
 * has none of that surface area.
 */
export default function CertificateViewer({ images, alt }: CertificateViewerProps) {
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  return (
    <div className="w-full h-full overflow-y-auto bg-[#1a1a1a] flex flex-col items-center gap-4 p-4 sm:p-6">
      {images.map((src, index) => (
        <div key={src} className="w-full max-w-2xl">
          {failed[index] ? (
            <div className="flex items-center justify-center h-40 text-neutral-400 text-sm text-center px-6 rounded-lg bg-white/[0.03] border border-white/10">
              Couldn&apos;t load page {index + 1} of the preview.
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={images.length > 1 ? `${alt} — page ${index + 1}` : alt}
              className="w-full h-auto rounded-lg shadow-lg bg-white"
              loading={index === 0 ? 'eager' : 'lazy'}
              onError={() => setFailed((prev) => ({ ...prev, [index]: true }))}
            />
          )}
        </div>
      ))}
    </div>
  );
}
