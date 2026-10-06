'use client';

import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience & Education', id: 'timeline' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialIcons = [
    { name: 'GitHub', link: 'https://github.com/mdsium', icon: Github },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/md-sium-27787a267', icon: Linkedin },
    { name: 'Email', link: 'mailto:mdsiumcse@gmail.com', icon: Mail },
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-emerald-600/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Logo Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group text-white font-mono tracking-wider text-lg font-bold cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500 shadow-lg shadow-emerald-500/25">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span>Md. Sium<span className="text-emerald-400 font-sans">.dev</span></span>
            </button>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Jr. Software Engineer (Frontend) specializing in React.js, Next.js, TypeScript, Tailwind CSS, and REST API integration. Based in Dhaka, Bangladesh.
            </p>
            <div className="text-xs text-gray-400 space-y-1">
              <div>Email: <a href="mailto:mdsiumcse@gmail.com" className="text-gray-300 hover:text-emerald-400">mdsiumcse@gmail.com</a></div>
              <div>Phone: <a href="tel:+8801720184617" className="text-gray-300 hover:text-emerald-400">+880 1720184617</a></div>
            </div>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-xs uppercase font-mono tracking-widest mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-left text-gray-400 hover:text-emerald-400 text-xs sm:text-sm transition-colors w-fit cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social connections block */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h3 className="text-white font-bold text-xs uppercase font-mono tracking-widest mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialIcons.map((sm, idx) => {
                const IconComponent = sm.icon;
                return (
                  <a
                    key={idx}
                    href={sm.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-600/10 transition-all duration-300 hover:-translate-y-0.5"
                    aria-label={`Follow on ${sm.name}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom footer credit line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {currentYear} Md. Sium. All rights reserved. Dhaka, Bangladesh.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
