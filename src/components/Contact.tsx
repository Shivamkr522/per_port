'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/Icons';
import { personal } from '@/data/personal';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const isPlaceholder = (val: string) => !val || val.startsWith('[ADD');

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:+91${personal.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: '',
    },
  ];

  const socialLinks = [
    {
      Icon: LinkedInIcon,
      label: 'LinkedIn',
      href: personal.linkedin,
    },
    {
      Icon: GitHubIcon,
      label: 'GitHub',
      href: personal.github,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <span className="dot-accent" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-heading">Let&apos;s Connect.</h2>
          <p className="section-subheading mx-auto">
            Whether you&apos;re a recruiter, a Product Management professional, a company looking for
            fresh perspectives, or a collaborator with an interesting idea — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-base"
          >
            {/* Contact Items */}
            <div className="space-y-6 mb-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <item.icon size={18} className="text-[#a78bfa]" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs text-neutral-400 tracking-wider uppercase mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#f5f5f7] hover:text-[#a78bfa] transition-colors duration-300 text-sm md:text-base font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#f5f5f7] text-sm md:text-base font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-neutral-400 tracking-wider uppercase mb-4">Find Me Online</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  isPlaceholder(link.href) ? (
                    <div
                      key={link.label}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-500 text-sm cursor-default"
                      title={`${link.label} URL coming soon`}
                    >
                      <link.Icon size={16} />
                      <span>{link.label}</span>
                      <span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded text-neutral-500">Coming soon</span>
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300 text-sm hover:text-[#a78bfa] hover:border-purple-500/30 transition-all duration-300 group"
                    >
                      <link.Icon size={16} />
                      <span>{link.label}</span>
                      <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )
                ))}
              </div>
            </div>
          </motion.div>

          {/* Direct CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-center mt-10"
          >
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary"
            >
              <Mail size={16} />
              <span>Send Me an Email</span>
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
