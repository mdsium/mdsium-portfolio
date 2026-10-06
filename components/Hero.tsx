'use client';

import React, { useRef, useState } from 'react';
import { ArrowDown, Mail, FileText, Brain, Code, Terminal, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ResumeModal from './ResumeModal';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnContainerRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useGSAP(() => {
    // Reveal animation
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      '.hero-glow',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8 }
    );

    tl.fromTo(
      titleRef.current?.querySelectorAll('.char-reveal') || [],
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
      '-=1.2'
    );

    tl.fromTo(
      subTitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.7'
    );

    tl.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.6'
    );

    tl.fromTo(
      btnContainerRef.current?.querySelectorAll('.cta-btn') || [],
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.15 },
      '-=0.5'
    );

    tl.fromTo(
      graphicRef.current,
      { scale: 0.95, opacity: 0, y: 15 },
      { scale: 1, opacity: 1, y: 0, duration: 1.2 },
      '-=0.8'
    );

    // Continuous floating animation for graphic and orbits
    gsap.to('.floating-avatar', {
      y: 12,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.orbit-clockwise', {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: 'none',
    });

    gsap.to('.orbit-counter', {
      rotation: -360,
      duration: 18,
      repeat: -1,
      ease: 'none',
    });
  }, { scope: containerRef });

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

  return (
    <>
      <section
        id="home"
        ref={containerRef}
        className="relative min-h-screen bg-gray-950 flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
      >
        {/* Background radial glow */}
        <div className="hero-glow absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-radial-glow opacity-80 pointer-events-none z-0" />

        {/* Glowing atmospheric gradient circles */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-600/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Contents */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full w-fit mb-6 text-xs text-emerald-400 font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Full-time Roles & Engineering Opportunities
            </div>

            {/* Heading with reveal wrapper */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
            >
              <span className="block overflow-hidden h-fit">
                <span className="char-reveal inline-block">Hi, I&apos;m </span>
                <span className="char-reveal inline-block text-emerald-400 text-glow ml-3">Md. Sium</span>
              </span>
            </h1>

            {/* Subtitle Roles */}
            <p
              ref={subTitleRef}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 font-mono tracking-tight mb-4"
            >
              Jr. Software Engineer (Frontend)
              <span className="block sm:inline sm:ml-2 text-sm sm:text-base text-emerald-400 font-normal">
                React.js · Next.js · TypeScript
              </span>
            </p>

            {/* Short Bio Introduction */}
            <p
              ref={textRef}
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8"
            >
              Recent Computer Science graduate with hands-on experience in frontend and full-stack web development through academic, internship, and personal projects. Specializing in building reusable components, responsive user interfaces, and API-driven features.
            </p>

            {/* Interactive Action Buttons */}
            <div ref={btnContainerRef} className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="cta-btn flex items-center gap-2 text-xs sm:text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-7 py-3.5 rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-xl shadow-emerald-500/20 active:scale-95 group border border-emerald-400/20 cursor-pointer"
              >
                <FileText className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                View & Download CV
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="cta-btn flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-300 px-7 py-3.5 rounded-full text-white cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
            </div>

            {/* Tech specs footer */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-10 items-center text-xs text-gray-500">
              <span className="flex items-center gap-1.5 font-mono">
                <Code className="w-3.5 h-3.5 text-emerald-400" /> React.js & Next.js
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <Brain className="w-3.5 h-3.5 text-teal-400" /> TypeScript & REST APIs
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Dhaka, Bangladesh
              </span>
            </div>
          </div>

          {/* Right: Dynamic Graphic & Terminal Box */}
          <div ref={graphicRef} className="lg:col-span-5 flex justify-center items-center relative h-[380px] sm:h-[450px]">
            {/* Orbital Orbs Frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer dotted orbit */}
              <div className="orbit-clockwise absolute w-[300px] h-[300px] border border-dashed border-emerald-500/10 rounded-full pointer-events-none flex items-center justify-between p-1">
                <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
                <div className="w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_10px_#2dd4bf]" />
              </div>

              {/* Inner dashed orbit */}
              <div className="orbit-counter absolute w-[220px] h-[220px] border border-dashed border-emerald-500/15 rounded-full pointer-events-none flex items-center justify-between p-2">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                <div className="w-2.5 h-2.5 bg-emerald-300 rounded-full" />
              </div>
            </div>

            {/* Main Visual Profile Box */}
            <div className="floating-avatar relative w-[260px] h-[270px] sm:w-[300px] sm:h-[300px] rounded-3xl overflow-hidden p-1.5 bg-gradient-to-tr from-emerald-600 via-teal-600 to-green-500 shadow-[0_0_50px_rgba(16,185,129,0.25)]">
              {/* Inner terminal box */}
              <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden relative border border-white/10 flex flex-col">
                {/* Terminal Header */}
                <div className="bg-gray-950 px-4 py-2.5 flex items-center justify-between border-b border-white/5 font-mono text-[10px] text-gray-400">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
                  </div>
                  <span>sium_profile.ts</span>
                </div>

                {/* Graphic container with developer profile object */}
                <div className="flex-1 p-4 font-mono text-[11px] leading-relaxed relative overflow-hidden text-emerald-400">
                  <span className="text-gray-500 block">{"// Software Engineer Bio"}</span>
                  <span className="text-teal-300">const</span>{" engineer = {"}<br />
                    <span className="pl-3 text-white">name:</span> <span className="text-emerald-300">&quot;Md. Sium&quot;</span>,<br />
                    <span className="pl-3 text-white">role:</span> <span className="text-emerald-300">&quot;Jr. Frontend Engineer&quot;</span>,<br />
                    <span className="pl-3 text-white">education:</span> <span className="text-teal-200">&quot;BSc in CSE (Green Univ)&quot;</span>,<br />
                    <span className="pl-3 text-white">internship:</span> <span className="text-teal-200">&quot;Zensoft Lab&quot;</span>,<br />
                    <span className="pl-3 text-white">stack:</span> [<span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;TS&quot;</span>],<br />
                    <span className="pl-3 text-white">location:</span> <span className="text-emerald-300">&quot;Dhaka, BD&quot;</span><br />
                  {"};"}

                  <div className="mt-3 text-emerald-400 font-semibold">
                    {"&gt; engineer.getStatus()"}
                  </div>
                  <div className="mt-0.5 text-gray-300 text-[10px]">
                    &quot;Ready to build high-impact web apps!&quot;
                  </div>

                  {/* Cyberpunk matrix glow bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-emerald-600/15 to-transparent pointer-events-none" />

                  {/* Floating graphic overlay */}
                  <div className="absolute right-2 bottom-2 w-12 h-12 opacity-25 border border-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                    <Terminal className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tags */}
            <div className="absolute top-12 left-2 sm:-left-6 bg-gray-900/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg scale-90 sm:scale-100">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] sm:text-xs font-mono font-medium text-white">React.js & Next.js</span>
            </div>

            <div className="absolute bottom-12 right-2 sm:-right-6 bg-gray-900/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg scale-90 sm:scale-100">
              <div className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-[10px] sm:text-xs font-mono font-medium text-white">TypeScript & APIs</span>
            </div>
          </div>
        </div>

        {/* Elegant scroll anchor indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => handleScrollTo('about')}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-emerald-400 transition-colors duration-300">
            Explore Portfolio
          </span>
          <div className="w-6 h-10 border border-white/20 rounded-full p-1 flex justify-center group-hover:border-emerald-500 transition-colors duration-300">
            <ArrowDown className="w-3 h-3 text-gray-500 group-hover:text-emerald-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
