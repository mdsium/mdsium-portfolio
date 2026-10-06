'use client';

import React, { useRef } from 'react';
import { BookOpen, GraduationCap, Briefcase, Award, Laptop, Sparkles, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TimelineEvent {
  period: string;
  title: string;
  institution: string;
  location?: string;
  description: string;
  bullets?: string[];
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function Timeline() {
  const containerRef = useRef<HTMLElement>(null);

  const events: TimelineEvent[] = [
    {
      period: 'Apr 2026 — Jul 2026',
      title: 'Frontend Web Developer Intern',
      institution: 'Zensoft Lab',
      location: 'Dhaka, BD',
      description: 'Industry internship engineering modern web frontends and collaborating with engineering teams.',
      bullets: [
        'Developed responsive web interfaces using React.js, Tailwind CSS, and Material UI.',
        'Integrated REST APIs and implemented dynamic data rendering and API-driven frontend features.',
        'Used Git and GitHub for collaborative development following team-based workflows.',
      ],
      tag: 'Work Experience',
      icon: Briefcase,
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
    {
      period: '2022 — 2026',
      title: 'BSc in Computer Science and Engineering',
      institution: 'Green University of Bangladesh',
      location: 'Dhaka, Bangladesh',
      description: 'Undergraduate degree focusing on core software engineering principles and computational sciences.',
      bullets: [
        'Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Web Development, AI/ML.',
      ],
      tag: 'Bachelor Degree',
      icon: GraduationCap,
      color: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    },
    {
      period: 'Completed: July 2024 (460 Hours)',
      title: 'Professional Web Application Development (PWAD-59)',
      institution: 'IsDB-BISEW',
      location: 'Dhaka, Bangladesh',
      description: 'Rigorous 460-hour professional diploma training focusing on enterprise web development.',
      bullets: [
        'Intensive training in PHP, Laravel, MySQL, HTML, CSS, JavaScript, Bootstrap, jQuery, Git, and REST API.',
        'Hands-on ERP system development, MVC architecture, CRUD operations, authentication, database management.',
      ],
      tag: 'Professional Diploma',
      icon: Award,
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
    {
      period: '2017 — 2021',
      title: 'Diploma in Computer Technology',
      institution: 'Kushtia Hazi Abul Hossain Institute of Technology (K-HABHIT)',
      location: 'Kushtia, Bangladesh',
      description: 'Comprehensive 4-year polytechnic diploma covering computer technology fundamentals.',
      bullets: [
        'CGPA: 3.75 / 4.00 (Excellence Standing)',
        'Core curriculum in computing hardware, software fundamentals, and networking.',
      ],
      tag: 'Technical Diploma',
      icon: Laptop,
      color: 'bg-green-500/10 text-green-400 border-green-500/20',
    },
    {
      period: 'Completed: December 2020',
      title: 'Certificate in Graphics Design (3 Months)',
      institution: 'ICT Division (LEDP)',
      location: 'Bangladesh',
      description: 'Government LEDP initiative training in UI assets, visual composition, and digital graphics design.',
      tag: 'Certification',
      icon: Sparkles,
      color: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    },
    {
      period: 'Completed: 2018 (360 Hours each)',
      title: 'Programming in C & Hardware and Networking',
      institution: 'I-Tech Computer Institute',
      location: 'Kushtia, Bangladesh',
      description: 'Foundational computer architecture, low-level programming in C, hardware assembly, and network configurations.',
      tag: 'Vocational Training',
      icon: BookOpen,
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
    {
      period: '2015 — 2016',
      title: 'Secondary School Certificate (Science)',
      institution: 'Halima Begum Academy Secondary High School',
      location: 'Kushtia, Bangladesh',
      description: 'Secondary education with high distinction in science, mathematics, and physics.',
      tag: 'Secondary School',
      icon: GraduationCap,
      color: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    },
  ];

  useGSAP(() => {
    gsap.fromTo(
      '.timeline-card-anim',
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      '.timeline-track-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 85%',
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative py-24 bg-gray-950 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-600/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 timeline-card-anim">
          <span className="text-xs font-semibold text-emerald-400 font-mono tracking-widest uppercase block mb-2">
            Experience & Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Education, Work & Milestones
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            The chronological path of academic training, technical diplomas, industry internship at Zensoft Lab, and professional accreditations.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded mx-auto mt-4" />
        </div>

        {/* Timeline Structure */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Track Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gray-900 rounded-full origin-top pointer-events-none -translate-x-1/2">
            <div className="timeline-track-line w-full h-full bg-gradient-to-b from-emerald-600 via-teal-600 to-green-400 rounded-full origin-top transform" />
          </div>

          {/* Timeline Events Loop */}
          <div className="flex flex-col gap-10 sm:gap-14">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Desktop spacer for alternating column */}
                  <div className="hidden md:block w-1/2" />

                  {/* Desktop horizontal connector line between node and card */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-[2px] pointer-events-none z-10 ${
                      isEven
                        ? 'right-1/2 bg-gradient-to-l from-emerald-500/70 to-emerald-500/10'
                        : 'left-1/2 bg-gradient-to-r from-emerald-500/70 to-emerald-500/10'
                    }`}
                  />

                  {/* Marker Node with Glow and Proper Z-Index */}
                  <div className="absolute left-6 md:left-1/2 top-7 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full bg-gray-950 border-2 border-emerald-500/40 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(16,185,129,0.35)]">
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>

                  {/* Card Block with Proper Directional Spacing */}
                  <div
                    className={`timeline-card-anim w-full md:w-1/2 pl-16 sm:pl-20 ${
                      isEven ? 'md:pl-0 md:pr-14' : 'md:pr-0 md:pl-14'
                    }`}
                  >
                    <div className="bg-white/5 border border-white/5 p-6 sm:p-7 rounded-3xl backdrop-blur-sm relative group hover:border-emerald-500/25 transition-colors shadow-xl">
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400">
                          {event.period}
                        </span>

                        <span className={`text-[10px] font-semibold font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${event.color}`}>
                          {event.tag}
                        </span>
                      </div>

                      {/* Content headings */}
                      <h3 className="text-white font-bold text-base sm:text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                        {event.title}
                      </h3>

                      <h4 className="text-gray-300 font-medium text-xs sm:text-sm mb-2 flex items-center justify-between flex-wrap gap-1">
                        <span>{event.institution}</span>
                        {event.location && (
                          <span className="text-xs text-gray-500 font-mono">{event.location}</span>
                        )}
                      </h4>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
                        {event.description}
                      </p>

                      {/* Optional Bullets */}
                      {event.bullets && (
                        <div className="space-y-1.5 pt-2 border-t border-white/5">
                          {event.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
