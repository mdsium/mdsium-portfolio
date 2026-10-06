'use client';

import React, { useRef } from 'react';
import { Award, Clock, ShieldCheck, GraduationCap, Laptop, Phone, Mail, UserCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Certification {
  title: string;
  issuer: string;
  duration: string;
  completedDate: string;
  description: string;
  instructors?: string;
  skillsAcquired: string[];
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Reference {
  name: string;
  title: string;
  organization: string;
  role: string;
  relationship: string;
  phone: string;
  email: string;
}

export default function Certifications() {
  const containerRef = useRef<HTMLElement>(null);

  const certifications: Certification[] = [
    {
      title: 'Professional Web Application Development (PWAD-59)',
      issuer: 'Islamic Development Bank-BISEW (IsDB-BISEW)',
      duration: '460 Hours of Intensive Training',
      completedDate: 'July 2024',
      description: 'Comprehensive, scholarship-based professional training in enterprise web engineering. Covered full-stack architecture, MVC patterns, database optimization, authentication mechanisms, and RESTful web services.',
      instructors: 'Instructors: Mohammad Towhidul Islam & Mohammad Moshaidul Islam',
      skillsAcquired: [
        'PHP & Laravel Framework',
        'MySQL & Database Optimization',
        'HTML5, CSS3, JavaScript, jQuery, Bootstrap',
        'REST API Development & Integration',
        'Git & Team Collaboration',
        'ERP Architecture & CRUD Modules',
      ],
      badgeColor: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
      icon: Award,
    },
    {
      title: 'Certificate in Graphics Design',
      issuer: 'ICT Division — Learning & E-earning Development Project (LEDP)',
      duration: '3 Months Comprehensive Course',
      completedDate: 'December 2020',
      description: 'Government-sponsored professional design training program focusing on digital UI assets, visual hierarchy, layout principles, and creative media composition.',
      skillsAcquired: [
        'Visual Design Principles',
        'Digital Graphic Composition',
        'UI Wireframing & Assets',
        'Creative Branding Workflows',
      ],
      badgeColor: 'border-teal-500/20 bg-teal-500/10 text-teal-400',
      icon: ShieldCheck,
    },
    {
      title: 'Hardware & Networking',
      issuer: 'I-Tech Computer Institute, Kushtia',
      duration: '360 Hours Hands-on Lab',
      completedDate: '2018',
      description: 'Practical laboratory training on PC hardware architecture, system assembly, network topology setup, IP configuration, troubleshooting, and operating system diagnostics.',
      skillsAcquired: [
        'Computer System Architecture',
        'Network Configuration & LAN/WAN',
        'Hardware Troubleshooting',
        'System Maintenance & Security',
      ],
      badgeColor: 'border-green-500/20 bg-green-500/10 text-green-400',
      icon: Laptop,
    },
    {
      title: 'Programming in C',
      issuer: 'I-Tech Computer Institute, Kushtia',
      duration: '360 Hours Programming Lab',
      completedDate: '2018',
      description: 'Rigorous foundation in procedural programming, memory pointers, arrays, data manipulation, algorithm flowcharts, and computational logic using C language.',
      skillsAcquired: [
        'C Language Fundamentals',
        'Pointers & Memory Allocation',
        'Data Structures in C',
        'Algorithmic Logic & Debugging',
      ],
      badgeColor: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
      icon: GraduationCap,
    },
  ];

  const references: Reference[] = [
    {
      name: 'Mohammad Towhidul Islam',
      title: 'CEO, Intellect Software Ltd.',
      organization: 'Intellect Software Ltd.',
      role: 'Instructor, IsDB-BISEW IT Scholarship Project',
      relationship: 'Academic',
      phone: '01715785434',
      email: 'towhid1@outlook.com',
    },
    {
      name: 'Mohammad Moshaidul Islam',
      title: 'Project Consultant',
      organization: 'IsDB-BISEW IT Scholarship Project',
      role: 'Instructor, IsDB-BISEW IT Scholarship Project',
      relationship: 'Academic',
      phone: '01711071219',
      email: 'moshaidul@gmail.com',
    },
  ];

  useGSAP(() => {
    gsap.fromTo(
      '.cert-anim-item',
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      id="certifications"
      ref={containerRef}
      className="relative py-24 bg-gray-900 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[350px] bg-emerald-600/5 filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="cert-anim-item text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-emerald-400 font-mono tracking-widest uppercase block mb-2">
            Qualifications & Accreditations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Certifications & Technical Training
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Over 1,180 hours of verified professional and technical institute training in software development, computer systems, and digital design.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded mx-auto mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <div
                key={index}
                className="cert-anim-item bg-white/5 border border-white/5 rounded-3xl p-7 sm:p-8 backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:border-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/5 group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600/10 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                      {cert.completedDate}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-emerald-400 mb-3">
                    {cert.issuer}
                  </div>

                  {/* Duration Tag */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mb-4">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    <span>{cert.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Instructor Mention */}
                  {cert.instructors && (
                    <div className="text-xs text-emerald-300/90 font-mono bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl mb-4">
                      {cert.instructors}
                    </div>
                  )}
                </div>

                {/* Skills Acquired */}
                <div>
                  <div className="text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider mb-2.5">
                    Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5">
                    {cert.skillsAcquired.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-white/5 border border-white/5 text-[11px] text-gray-300 px-2.5 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* References Section */}
        <div className="cert-anim-item max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-7 sm:p-10 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                  Verified Academic Endorsements
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  References (PWAD-59 — IsDB-BISEW)
                </h3>
              </div>
              <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full w-fit">
                Relationship: Academic
              </span>
            </div>

            {/* Reference Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {references.map((ref, idx) => (
                <div
                  key={idx}
                  className="bg-gray-950/80 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                        {ref.relationship}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {ref.name}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                      {ref.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 mb-5">
                      {ref.role}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10 text-xs">
                    <div className="flex items-center gap-2.5 text-gray-300">
                      <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-400 font-mono">Phone:</span>
                      <a
                        href={`tel:${ref.phone}`}
                        className="font-mono text-white hover:text-emerald-400 transition-colors"
                      >
                        {ref.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-gray-300">
                      <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-400 font-mono">Email:</span>
                      <a
                        href={`mailto:${ref.email}`}
                        className="font-mono text-emerald-400 hover:underline transition-colors truncate"
                      >
                        {ref.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
