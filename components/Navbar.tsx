'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowRight, Sun, Moon, FileText } from 'lucide-react';
import ResumeModal from './ResumeModal';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const isLight = !document.documentElement.classList.contains('dark');
    const timer = setTimeout(() => {
      setMounted(true);
      setTheme(isLight ? 'light' : 'dark');
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      } else {
        setScrollProgress(0);
      }

      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
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

  return (
    <>
      <nav
        id="navbar-root"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'py-3.5 bg-gray-950/85 backdrop-blur-md border-b border-white/5 shadow-lg' : 'py-5 bg-transparent'
        }`}
      >
        <div
          id="scroll-progress-bar"
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-500 to-green-400 transition-all duration-75 ease-out shadow-[0_1px_10px_rgba(16,185,129,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Branding */}
          <button
            onClick={() => handleScrollTo('home')}
            className="flex items-center gap-2 group text-white font-mono tracking-wider text-base sm:text-lg font-bold cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500 shadow-lg shadow-emerald-500/25">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Md. Sium<span className="text-emerald-400 font-sans">.dev</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/5 p-1 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons & Theme Selector */}
          <div className="flex items-center gap-3">
            {/* CV Modal Button */}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 px-3.5 py-2 rounded-full transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>CV</span>
            </button>

            {/* Theme Toggle Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
              aria-label="Toggle visual theme"
            >
              {!mounted ? (
                <div className="w-4 h-4" />
              ) : theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-400 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Contact Action Button (Desktop Only) */}
            <div className="hidden sm:block">
              <button
                onClick={() => handleScrollTo('contact')}
                className="flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95 group cursor-pointer"
              >
                Let&apos;s Talk
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border border-white/5 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[65px] z-40 bg-gray-950/98 backdrop-blur-lg flex flex-col p-6 animate-fade-in border-t border-white/5">
            <div className="flex flex-col gap-2 my-auto">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-left text-base font-medium py-2.5 px-4 rounded-xl transition-all ${
                    activeSection === item.id
                      ? 'bg-emerald-600/10 text-emerald-400 border-l-4 border-emerald-500'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsResumeOpen(true);
                }}
                className="w-full text-center bg-white/10 hover:bg-white/15 text-white py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                View Curriculum Vitae
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
