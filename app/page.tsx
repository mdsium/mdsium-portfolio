import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-gray-950 text-gray-200 min-h-screen overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* Absolute high-tech lighting grid backdrop across the screen */}
      <div className="absolute inset-x-0 top-0 h-[800px] bg-grid-pattern opacity-30 pointer-events-none z-0" />
      
      {/* Top Floating Header Navigation */}
      <Navbar />

      {/* Main Sections Structure */}
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Timeline />
      <Certifications />
      <Contact />

      {/* Footer Branding Board */}
      <Footer />
    </main>
  );
}
