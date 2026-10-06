'use client';

import React, { useRef } from 'react';
import { BookOpen, Award, Target, Code2, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Setup scroll triggers
    gsap.fromTo(
      '.about-stagger',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Stats counter trigger
    const statCards = sectionRef.current?.querySelectorAll('.stat-count');
    statCards?.forEach((card) => {
      const targetVal = parseInt(card.getAttribute('data-target') || '0', 10);
      const suffix = card.getAttribute('data-suffix') || '';
      const obj = { val: 0 };

      gsap.to(obj, {
        val: targetVal,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          card.textContent = Math.floor(obj.val).toString() + suffix;
        },
      });
    });
  }, { scope: sectionRef });

  const highlights = [
    { label: 'Training Hours (PWAD)', val: 460, suffix: '+', icon: Award, color: 'text-emerald-400' },
    { label: 'Featured Projects', val: 3, suffix: '+', icon: Code2, color: 'text-teal-400' },
    { label: 'Diploma CGPA', val: 3, suffix: '.75', icon: GraduationCap, color: 'text-emerald-400' },
    { label: 'Industry Internship', val: 1, suffix: ' Completed', icon: Briefcase, color: 'text-green-400' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-gray-950 border-t border-white/5 overflow-hidden"
    >
      {/* Decorative vector background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-600/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="about-stagger mb-16 max-w-2xl">
          <span className="text-xs font-semibold text-emerald-400 font-mono tracking-widest uppercase block mb-2">
            Professional Summary
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Building Modern Frontend & API-Driven Web Applications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded" />
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Block: BIO */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="about-stagger text-gray-300 text-base leading-relaxed">
              I am <strong className="text-white font-semibold">Md. Sium</strong>, a Computer Science graduate and passionate <strong className="text-emerald-400 font-semibold">Jr. Software Engineer (Frontend)</strong> based in Dhaka, Bangladesh. I have practical experience in frontend and full-stack web development through academic research, a professional developer internship at <strong className="text-white font-medium">Zensoft Lab</strong>, and real-world projects.
            </p>

            <p className="about-stagger text-gray-400 text-sm leading-relaxed">
              My technical expertise centers around <strong className="text-gray-200">React.js, Next.js, TypeScript, JavaScript, Tailwind CSS</strong>, and seamless <strong className="text-gray-200">REST API integration</strong>. I focus on developing clean, reusable component architectures, responsive user interfaces, diagnosing and debugging frontend challenges, and using Git/GitHub CI/CD workflows for collaborative engineering.
            </p>

            {/* Core Competency Highlights */}
            <div className="about-stagger grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 bg-white/5 border border-white/5 p-3.5 rounded-xl hover:border-emerald-500/20 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">Modular component design in React & Next.js</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white/5 border border-white/5 p-3.5 rounded-xl hover:border-emerald-500/20 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">Type-safe development with TypeScript</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white/5 border border-white/5 p-3.5 rounded-xl hover:border-emerald-500/20 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">Dynamic REST API integration & data handling</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white/5 border border-white/5 p-3.5 rounded-xl hover:border-emerald-500/20 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">AI-assisted workflows & problem solving</span>
              </div>
            </div>

            {/* Objective Core Panel */}
            <div className="about-stagger bg-white/5 border border-white/5 p-6 rounded-2xl flex gap-4 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1.5 text-sm uppercase font-mono tracking-wider">
                  Career Objective
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Passionate about building clean, maintainable, and user-friendly software solutions while continuously advancing technical knowledge, adopting new web frameworks, and leveraging AI tools to accelerate development efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Personal Specs & Education */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Biography Details */}
            <div className="about-stagger bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 backdrop-blur-md">
              <h3 className="text-white font-bold text-sm uppercase font-mono tracking-wider border-b border-white/5 pb-3">
                Profile Overview
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs text-gray-500 font-mono">NAME</span>
                  <span className="text-sm font-semibold text-gray-200">Md. Sium</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-mono">ROLE</span>
                  <span className="text-sm font-semibold text-emerald-400">Jr. Software Engineer</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-mono">LOCATION</span>
                  <span className="text-sm font-semibold text-gray-200">Dhaka, Bangladesh</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-mono">AVAILABILITY</span>
                  <span className="text-sm font-semibold text-emerald-400">Full-Time / Hybrid</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-mono">EMAIL</span>
                  <a href="mailto:mdsiumcse@gmail.com" className="text-xs font-semibold text-gray-300 hover:text-emerald-400 truncate block">
                    mdsiumcse@gmail.com
                  </a>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-mono">PHONE</span>
                  <a href="tel:+8801720184617" className="text-xs font-semibold text-gray-300 hover:text-emerald-400 block">
                    +880 1720184617
                  </a>
                </div>
              </div>
            </div>

            {/* Education Summary Glass Block */}
            <div className="about-stagger bg-white/5 border border-white/5 p-6 rounded-2xl flex gap-4 backdrop-blur-md hover:border-emerald-500/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold mb-1 text-sm uppercase font-mono tracking-wider">
                  Academic Background
                </h3>
                <h4 className="text-gray-200 font-semibold text-xs sm:text-sm">
                  BSc in Computer Science and Engineering
                </h4>
                <p className="text-emerald-400 text-xs font-mono mt-0.5">Green University of Bangladesh (2022 — 2026)</p>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Web Development, AI/ML.
                </p>
              </div>
            </div>

            {/* Professional Internship Badge */}
            <div className="about-stagger bg-white/5 border border-white/5 p-6 rounded-2xl flex gap-4 backdrop-blur-md hover:border-emerald-500/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-teal-600/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-teal-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold mb-1 text-sm uppercase font-mono tracking-wider">
                  Industry Experience
                </h3>
                <h4 className="text-gray-200 font-semibold text-xs sm:text-sm">
                  Frontend Web Developer Intern
                </h4>
                <p className="text-teal-400 text-xs font-mono mt-0.5">Zensoft Lab, Dhaka (Apr 2026 — Jul 2026)</p>
                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                  Developed responsive web interfaces using React.js, Tailwind CSS, Material UI, and integrated dynamic REST APIs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Floating Bento */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="about-stagger bg-gradient-to-b from-white/5 to-transparent border border-white/5 p-6 sm:p-8 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center group hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>

                <span
                  data-target={stat.val}
                  data-suffix={stat.suffix}
                  className="stat-count text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono text-white mb-2"
                >
                  {stat.val}{stat.suffix}
                </span>

                <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-emerald-300 transition-colors">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
