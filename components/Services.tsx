'use client';

import React, { useRef } from 'react';
import { Layers, Server, Brain, Smartphone, Cpu, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  num: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  const services: Service[] = [
    {
      num: '01',
      title: 'Frontend Web Engineering',
      description: 'Developing high-performance, modular, and responsive user interfaces using React.js, Next.js, TypeScript, and Tailwind CSS. Crafting reusable component architectures for maintainability.',
      features: ['React.js & Next.js App Router', 'TypeScript type safety', 'Tailwind CSS & Material UI'],
      icon: Layers,
    },
    {
      num: '02',
      title: 'Dynamic REST API Integration',
      description: 'Connecting web frontends seamlessly to backend RESTful microservices and databases. Handling asynchronous data rendering, authentication flows, error boundaries, and state pipelines.',
      features: ['Async REST API integration', 'JWT & Session auth flows', 'Clean error handling & state'],
      icon: Server,
    },
    {
      num: '03',
      title: 'Machine Learning & Python Apps',
      description: 'Building end-to-end intelligent web systems leveraging Scikit-learn predictive models and Django REST Framework backends, connecting machine learning insights with intuitive frontend views.',
      features: ['Predictive model deployment', 'Django REST Framework', 'Data preprocessing & analysis'],
      icon: Brain,
    },
    {
      num: '04',
      title: 'Full-Stack PHP & Laravel Solutions',
      description: 'Engineering database-backed applications with PHP, Laravel, and MySQL. Experienced in building ERP modules, administrative dashboards, MVC architecture, and secure CRUD operations.',
      features: ['Laravel MVC architectures', 'MySQL database modeling', 'IsDB-BISEW certified training'],
      icon: Cpu,
    },
    {
      num: '05',
      title: 'UI/UX Implementation & Prototyping',
      description: 'Translating Figma designs and wireframes into pixel-perfect, accessible, and ultra-responsive web interfaces that adapt effortlessly across mobile, tablet, and widescreen viewports.',
      features: ['Figma to clean TSX code', 'Mobile-first responsive design', 'Smooth animations & micro-interactions'],
      icon: Smartphone,
    },
  ];

  useGSAP(() => {
    gsap.fromTo(
      '.service-item-trigger',
      { y: 45, opacity: 0 },
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
      id="services"
      ref={containerRef}
      className="relative py-24 bg-gray-900 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="service-item-trigger mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-emerald-400 font-mono tracking-widest uppercase block mb-2">
            Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Services & Technical Solutions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Delivering clean, maintainable, and scalable software solutions with industry-standard development workflows.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded mx-auto mt-4" />
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, index) => {
            const Icon = svc.icon;

            return (
              <div
                key={index}
                className="service-item-trigger bg-white/5 border border-white/5 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:border-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600/10 transition-all duration-300">
                      <Icon className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    </div>
                    <span className="text-sm font-mono font-bold text-gray-600 group-hover:text-emerald-500/60 transition-colors">
                      {svc.num}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-emerald-400 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {svc.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono group-hover:text-gray-300 transition-colors">
                    PRODUCTION READY
                  </span>
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* Call-to-action Card */}
          <div className="service-item-trigger bg-gradient-to-b from-emerald-600/15 to-teal-600/5 border border-emerald-500/30 rounded-3xl p-8 backdrop-blur-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full filter blur-2xl opacity-100 pointer-events-none" />

            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-4">
                Hiring or Collaborating?
              </span>
              <h3 className="text-white font-bold text-2xl mb-4 leading-tight">
                Looking for a dedicated Frontend Engineer?
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you need a developer for full-time engineering roles, team augmentation, or specialized web projects, I am ready to bring dedication and clean code to your product.
              </p>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-500/25 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
