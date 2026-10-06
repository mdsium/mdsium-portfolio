'use client';

import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Layout, Database, BookOpen, Search, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  title: string;
  badge: string;
  category: 'frontend' | 'ml' | 'fullstack';
  tagline: string;
  description: string;
  bullets: string[];
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  imageBg: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'ml' | 'fullstack'>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'DUET IICSD 2027 Conference Website',
      badge: 'Professional Project · 2026',
      category: 'frontend',
      tagline: 'Modern Conference Portal with API-Driven Frontend',
      description: 'A comprehensive, responsive conference platform engineered for DUET IICSD 2027 to manage international academic submissions, attendee registration, schedule schedules, and speaker profiles.',
      bullets: [
        'Developed a modern and responsive conference website with reusable components.',
        'Integrated REST APIs for dynamic conference data and implemented API-driven frontend features.',
        'Used Git/GitHub and CI/CD workflows for version control and deployment.',
        'Implemented conference registration, author information, and submission-related features.',
      ],
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'Git/GitHub', 'CI/CD'],
      liveLink: 'https://iicsd.com',
      imageBg: 'from-emerald-950 via-teal-950 to-gray-950 border-emerald-500/20',
      icon: Layout,
    },
    {
      title: 'Bangladesh House Price Prediction System',
      badge: 'Final Year Project · 2026',
      category: 'ml',
      tagline: 'Machine Learning Model & Django/React Valuation App',
      description: 'An intelligent machine learning web application predicting residential property prices across major Bangladesh regions based on square footage, location factors, amenities, and room counts.',
      bullets: [
        'Developed a machine learning-based web application to predict house prices in Bangladesh using property and location features.',
        'Compared Linear Regression, Gradient Boosting, and Random Forest etc. models using R², RMSE.',
        'Built a Django REST API and React-based frontend for real-time house price prediction.',
      ],
      technologies: ['Django REST Framework', 'React.js', 'Python', 'Scikit-learn', 'Google Colab'],
      liveLink: 'https://house-price-prediction-rho-seven.vercel.app/',
      githubLink: 'https://github.com/mdsium/house-price-prediction',
      imageBg: 'from-teal-950 via-emerald-950 to-gray-950 border-teal-500/20',
      icon: Database,
    },
    {
      title: 'Mosque Mate — Islamic Web Platform',
      badge: 'Coursework Project · 2026',
      category: 'fullstack',
      tagline: 'Community Islamic Platform with Quran & Prayer APIs',
      description: 'An all-in-one Islamic resource platform with separate user and administrative roles to manage prayer time schedules, Quran verses, Hadith collections, and Islamic library books.',
      bullets: [
        'Developed an Islamic web platform with separate user and admin for managing Islamic resources.',
        'Integrated prayer-time, Quran APIs and implemented Hadith and Islamic book content using JSON.',
        'Designed normalized relational MySQL database schemas and REST API endpoints.',
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'REST API', 'JSON', 'Bootstrap'],
      githubLink: 'https://github.com/mdsium/MosqueMate',
      imageBg: 'from-green-950 via-teal-900 to-gray-950 border-green-500/20',
      icon: BookOpen,
    },
  ];

  const animateCards = () => {
    const cards = gridRef.current?.querySelectorAll('.project-card-item');
    if (cards && cards.length > 0) {
      gsap.fromTo(
        cards,
        { scale: 0.94, opacity: 0, y: 25 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      '.project-anim-title',
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

    animateCards();
  }, { scope: sectionRef, dependencies: [filter] });

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 bg-gray-950 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-emerald-600/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="project-anim-title text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-emerald-400 font-mono tracking-widest uppercase block mb-2">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Featured Projects & Engineering Work
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Real-world applications and academic capstone implementations built with modern frontend frameworks, machine learning models, and API integrations.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded mx-auto mt-4" />
        </div>

        {/* Filter Navigation Bar */}
        <div className="project-anim-title flex flex-wrap items-center justify-center gap-2 mb-12 max-w-lg mx-auto">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'frontend', label: 'Frontend / Conference' },
            { id: 'ml', label: 'Machine Learning / AI' },
            { id: 'fullstack', label: 'Full-Stack / Coursework' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid container with cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="project-card-item bg-white/5 border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/25 transition-all duration-300 flex flex-col group hover:shadow-2xl hover:shadow-emerald-500/5"
              >
                {/* Visual Header */}
                <div className={`relative h-48 bg-gradient-to-tr ${project.imageBg} flex items-center justify-center p-6 border-b border-white/5 overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                  {/* Icon Card Representation */}
                  <div className="relative w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-emerald-400" />
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 right-4 bg-gray-950/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-400 tracking-wider">
                    {project.badge}
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono tracking-tight mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-1.5 mb-5">
                      {project.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-white/5 border border-white/5 text-[10px] text-gray-300 px-2 py-0.5 rounded-md font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer Anchor buttons with real links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-emerald-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-emerald-400" />
                          Live Demo
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          GitHub Code
                        </a>
                      )}

                      {!project.githubLink && !project.liveLink && (
                        <span className="text-xs text-gray-500 font-mono">Available on Request</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm max-w-sm mx-auto">
            <Search className="w-8 h-8 text-gray-500 mx-auto mb-3" />
            <span className="block text-gray-400 font-medium">No results found</span>
          </div>
        )}
      </div>
    </section>
  );
}
