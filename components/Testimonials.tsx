'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Star, MessageSquare, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const list: Testimonial[] = [
    {
      text: "Md. Sium delivered a state-of-the-art Custom WooCommerce booking engine that completely transformed how our customers book consultations. His code is highly performant, modular, and extremely clean. Highly recommended!",
      name: "Elizabeth Stone",
      role: "CTO",
      company: "Apex Global Inc.",
      rating: 5,
    },
    {
      text: "Exceptional professional! Sium created a beautiful custom WordPress theme for our agency. He removed bloated page builders and coded it from scratch. Our PageSpeed score jumped from 45 to 98. Absolute genius!",
      name: "Marcus Aurelius",
      role: "Managing Director",
      company: "Chronos Media Group",
      rating: 5,
    },
    {
      text: "We hired Sium to build a secure Student ledger dashboard using Laravel and MySQL. Not only did he complete the project ahead of coordinate timelines, but he also walked us through API endpoints with spotless documentation.",
      name: "Farhan Tanvir",
      role: "Dean of IT Operations",
      company: "EduTrack Bangladesh",
      rating: 5,
    },
    {
      text: "Sium's attention to detail during our design execution phase was unparalleled. He converted our Figma designs into high-quality Next.js components with elegant animations that felt incredibly smooth on mobile.",
      name: "Sarah Jenkins",
      role: "Founder",
      company: "Vibrant Creative",
      rating: 5,
    },
  ];

  const handleNext = () => {
    animateTransition(() => {
      setIndex((prev) => (prev + 1) % list.length);
    });
  };

  const handlePrev = () => {
    animateTransition(() => {
      setIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
    });
  };

  const animateTransition = (updateStateFn: () => void) => {
    if (!cardContainerRef.current) return;
    
    // Slide transition timeline using GSAP
    const tl = gsap.timeline();
    tl.to(cardContainerRef.current, {
      opacity: 0,
      x: -30,
      scale: 0.95,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        updateStateFn();
        // Reset and slide in new content
        gsap.fromTo(
          cardContainerRef.current,
          { opacity: 0, x: 30, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.45, ease: 'power2.out' }
        );
      },
    });
  };

  const current = list[index];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative py-24 bg-gray-900 border-t border-white/5 overflow-hidden"
    >
      {/* Visual glowing light meshes */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-500 font-mono tracking-widest uppercase block mb-2">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Hear From My Clients Globally
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Partnering with startups, dynamic enterprises, and educators to craft high-quality software solutions.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mt-4" />
        </div>

        {/* Carousel Outer frame */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Card Frame with dynamic GSAP transitions */}
          <div
            ref={cardContainerRef}
            className="w-full bg-white/5 border border-white/5 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            {/* Ambient watermarks */}
            <div className="absolute top-8 right-8 text-white/5 pointer-events-none">
              <Quote className="w-24 h-24 stroke-[1]" />
            </div>

            {/* Testimonial Core Card Info */}
            <div className="flex flex-col gap-6 relative z-10">
              
              {/* Star Score Row */}
              <div className="flex gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Client Quote Column */}
              <blockquote className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed italic">
                &ldquo;{current.text}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="w-full h-px bg-white/5 my-2" />

              {/* Client Meta row */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white font-mono text-lg shadow-xl shadow-blue-505/15">
                  {current.name.split(' ')[0][0]}
                  {current.name.split(' ')[1] ? current.name.split(' ')[1][0] : ''}
                </div>
                
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base">
                    {current.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-mono mt-0.5">
                    {current.role} <span className="text-blue-500">@</span> {current.company}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Navigation sliders control dots & arrows */}
          <div className="flex items-center justify-between w-full mt-8 px-2">
            
            {/* Indicators Dots */}
            <div className="flex gap-2">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i !== index) {
                      animateTransition(() => setIndex(i));
                    }
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-blue-500' : 'w-2.5 bg-gray-800 hover:bg-gray-700'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Pagination Button Control Elements */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
