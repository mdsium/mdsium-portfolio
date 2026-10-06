'use client';

import React, { useState, useRef } from 'react';
import { Layers, Server, Terminal, Cpu, GitBranch, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const sectionRef = useRef<HTMLElement>(null);
  const animeRef = useRef<HTMLDivElement>(null);

  const categories: SkillCategory[] = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Layers,
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'Next.js (App Router)', level: 88 },
        { name: 'TypeScript', level: 86 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'Tailwind CSS', level: 94 },
        { name: 'Reusable UI Components & Material UI', level: 88 },
      ],
    },
    {
      id: 'backend',
      title: 'API, Backend & Databases',
      icon: Server,
      skills: [
        { name: 'REST API Integration', level: 92 },
        { name: 'PHP & Laravel', level: 85 },
        { name: 'Django / Python REST', level: 82 },
        { name: 'MySQL & Database Design', level: 86 },
        { name: 'PostgreSQL & JSON APIs', level: 80 },
        { name: 'Authentication & Security Basics', level: 84 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: Terminal,
      skills: [
        { name: 'Git & GitHub Workflows', level: 90 },
        { name: 'CI/CD Pipelines & Deployment', level: 82 },
        { name: 'Postman (API Testing)', level: 88 },
        { name: 'Linux CLI & Terminal', level: 80 },
        { name: 'Figma to Code', level: 85 },
        { name: 'AI-Assisted Development', level: 88 },
      ],
    },
    {
      id: 'concepts',
      title: 'CS & Core Concepts',
      icon: Cpu,
      skills: [
        { name: 'Data Structures & Algorithms', level: 84 },
        { name: 'Object-Oriented Programming (OOP)', level: 88 },
        { name: 'REST Architecture & Browser Fundamentals', level: 90 },
        { name: 'Problem Solving & Debugging', level: 88 },
        { name: 'Unit Testing & Quality Assurance', level: 78 },
      ],
    },
  ];

  const allLanguages = [
    { name: 'JavaScript (ES6+)', level: 'Advanced' },
    { name: 'TypeScript', level: 'Proficient' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'PHP', level: 'Proficient' },
    { name: 'Java', level: 'Academic' },
    { name: 'HTML5 / CSS3', level: 'Advanced' },
  ];

  const animateSkillBars = () => {
    const bars = animeRef.current?.querySelectorAll('.progress-bar-indicator');
    bars?.forEach((bar) => {
      const targetPercent = bar.getAttribute('data-percent') || '0';
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: `${targetPercent}%`,
          duration: 1.2,
          ease: 'power2.out',
        }
      );
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      '.skills-anim-header',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    animateSkillBars();
  }, { scope: sectionRef, dependencies: [activeTab] });

  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 bg-gray-900 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-emerald-500/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="skills-anim-header mb-14 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-emerald-400 font-mono tracking-widest uppercase block mb-2">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Skills & Development Competencies
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Proficiencies across modern frontend libraries, backend API integrations, version control systems, and computer science fundamentals.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded mx-auto mt-4" />
        </div>

        {/* Programming Languages Strip */}
        <div className="skills-anim-header mb-12 max-w-4xl mx-auto bg-white/5 border border-white/5 p-4 sm:p-5 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-300">
              Programming Languages
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            {allLanguages.map((lang, idx) => (
              <div
                key={idx}
                className="bg-gray-950/70 border border-white/10 rounded-xl p-2.5 text-center hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-xs font-bold text-white truncate">{lang.name}</div>
                <div className="text-[10px] font-mono text-emerald-400 mt-0.5">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Toggle Control Block */}
        <div className="skills-anim-header flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto bg-white/5 border border-white/5 p-1.5 rounded-2xl backdrop-blur-sm">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Tab Panel Body Layout */}
        <div
          ref={animeRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Left Block: List of categorized skill indicators */}
          <div className="bg-white/5 border border-white/5 p-6 sm:p-8 rounded-3xl backdrop-blur-md flex flex-col justify-center shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center">
                <activeCategory.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{activeCategory.title}</h3>
                <p className="text-gray-500 text-xs font-mono uppercase">CV VERIFIED COMPETENCIES</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {activeCategory.skills.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2 group">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-gray-400">{skill.level}%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-950 rounded-full overflow-hidden border border-white/5 p-0.5">
                    <div
                      data-percent={skill.level}
                      className="progress-bar-indicator h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-400 shadow-[0_0_8px_rgba(16,185,129,0.35)]"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Engineering Strengths Deck */}
          <div className="flex flex-col justify-between gap-5">
            {/* Glass Card 1 */}
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl flex gap-4 backdrop-blur-sm group hover:border-emerald-500/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Layers className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1.5">Frontend & Reusable UI Systems</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Proven experience developing responsive web interfaces using React.js, Next.js, Tailwind CSS, and Material UI, with a strong focus on modular, reusable components and clean architecture.
                </p>
              </div>
            </div>

            {/* Glass Card 2 */}
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl flex gap-4 backdrop-blur-sm group hover:border-emerald-500/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-600/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                <Server className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1.5">Dynamic REST API Integration</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Proficient in connecting frontend applications to dynamic REST APIs (Django REST, Laravel, PHP, Node.js), handling async data rendering, state management, and error handling.
                </p>
              </div>
            </div>

            {/* Glass Card 3 */}
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl flex gap-4 backdrop-blur-sm group hover:border-emerald-500/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-green-600/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                <GitBranch className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1.5">Version Control & CI/CD</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Regular user of Git, GitHub, pull request reviews, feature branch workflows, and CI/CD pipelines to deploy web applications reliably to production (Vercel, live domains).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
