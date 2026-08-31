import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import BackgroundParticles from '@/components/BackgroundParticles';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://sankalp-mehrotra-delta.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sankalp Mehrotra | Product Management Portfolio',
  description:
    'Portfolio of Sankalp Mehrotra, an MBA Marketing student with a Mechanical Engineering background exploring Product Management, technology, analytics, and AI.',
  keywords: [
    'Sankalp Mehrotra',
    'Product Management',
    'MBA Marketing',
    'Engineering',
    'Product Manager Portfolio',
    'Business Strategy',
    'Analytics',
    'AI',
  ],
  authors: [{ name: 'Sankalp Mehrotra' }],
  creator: 'Sankalp Mehrotra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Sankalp Mehrotra | Product Management Portfolio',
    description:
      'Aspiring Product Manager combining engineering, business, marketing, and technology to solve meaningful problems.',
    siteName: 'Sankalp Mehrotra Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sankalp Mehrotra | Product Management Portfolio',
    description:
      'Aspiring Product Manager combining engineering, business, marketing, and technology to solve meaningful problems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#080808] text-[#f5f5f7] antialiased selection:bg-purple-500/30 selection:text-white relative min-h-screen">
        <BackgroundParticles />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
