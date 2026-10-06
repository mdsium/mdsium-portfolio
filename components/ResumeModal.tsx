'use client';

import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in print:p-0 print:bg-white">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-gray-900 text-gray-100 rounded-3xl border border-white/10 shadow-2xl overflow-hidden my-8 print:my-0 print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Modal Top Action Bar (Hidden in Print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-950/80 border-b border-white/10 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-medium text-gray-300">Curriculum Vitae — Md. Sium</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Content Area */}
        <div className="p-6 sm:p-10 max-h-[85vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-white/10 print:border-black/20 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                  Md. Sium
                </h1>
                <p className="text-sm sm:text-base font-semibold text-emerald-400 print:text-emerald-700 mt-1">
                  Jr. Software Engineer (Frontend) | React.js | Next.js | TypeScript
                </p>
              </div>
            </div>

            {/* Contact Details List */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 mt-4 text-xs sm:text-sm text-gray-400 print:text-gray-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-gray-600" />
                Dhaka, Bangladesh
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-gray-600" />
                <a href="tel:+8801720184617" className="hover:text-emerald-400">+880 1720184617</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-gray-600" />
                <a href="mailto:mdsiumcse@gmail.com" className="hover:text-emerald-400">mdsiumcse@gmail.com</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-emerald-400 print:text-gray-600" />
                <a href="https://linkedin.com/in/md-sium-27787a267" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  linkedin.com/in/md-sium-27787a267
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-emerald-400 print:text-gray-600" />
                <a href="https://github.com/mdsium" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  github.com/mdsium
                </a>
              </span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 font-mono mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-emerald-500" />
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 print:text-gray-800 leading-relaxed">
              Recent Computer Science graduate with practical experience in frontend and full-stack web development through academic, internship, and personal projects. I have good knowledge of React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, and REST API integration. I have worked on developing reusable components, responsive user interfaces, and API-based features. I also have experience in finding and fixing frontend problems and using Git and GitHub for project work. I am interested in learning new technologies and using AI tools to improve my development skills.
            </p>
          </div>

          {/* Section: Education */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 font-mono mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-emerald-500" />
              Education
            </h2>
            <div className="space-y-4">
              <div className="bg-white/5 print:bg-gray-50 p-3.5 rounded-xl border border-white/5 print:border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    BSc in Computer Science and Engineering
                  </h3>
                  <span className="text-xs font-mono text-gray-400 print:text-gray-600">2022 — 2026</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-emerald-400 print:text-emerald-700 mt-0.5">
                  <span>Green University of Bangladesh</span>
                  <span className="text-gray-400 print:text-gray-600">Dhaka, Bangladesh</span>
                </div>
                <p className="text-xs text-gray-300 print:text-gray-700 mt-1.5">
                  Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Web Development, AI/ML.
                </p>
              </div>

              <div className="bg-white/5 print:bg-gray-50 p-3.5 rounded-xl border border-white/5 print:border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    Diploma in Computer Technology
                  </h3>
                  <span className="text-xs font-mono text-gray-400 print:text-gray-600">2017 — 2021</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-emerald-400 print:text-emerald-700 mt-0.5">
                  <span>Kushtia Hazi Abul Hossain Institute of Technology (K-HABHIT)</span>
                  <span className="text-gray-400 print:text-gray-600">Kushtia, Bangladesh</span>
                </div>
                <p className="text-xs text-gray-300 print:text-gray-700 mt-1.5">
                  <strong className="text-white print:text-black">CGPA: 3.75 / 4.00</strong>
                </p>
              </div>

              <div className="bg-white/5 print:bg-gray-50 p-3.5 rounded-xl border border-white/5 print:border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    Secondary School Certificate (Science)
                  </h3>
                  <span className="text-xs font-mono text-gray-400 print:text-gray-600">2015 — 2016</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-emerald-400 print:text-emerald-700 mt-0.5">
                  <span>Halima Begum Academy Secondary High School</span>
                  <span className="text-gray-400 print:text-gray-600">Kushtia, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Work Experience */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 font-mono mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-emerald-500" />
              Internship Experience
            </h2>
            <div className="bg-white/5 print:bg-gray-50 p-4 rounded-xl border border-white/5 print:border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-bold text-sm text-white print:text-black">Frontend Web Developer Intern</h3>
                <span className="text-xs font-mono text-gray-400 print:text-gray-600">Apr 2026 — Jul 2026</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-emerald-400 print:text-emerald-700 mt-0.5 mb-2">
                <span className="font-medium">Zensoft Lab</span>
                <span className="text-gray-400 print:text-gray-600">Dhaka, BD</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-gray-300 print:text-gray-800">
                <li>Developed responsive web interfaces using React.js, Tailwind CSS, and Material UI.</li>
                <li>Integrated REST APIs and implemented dynamic data rendering and API-driven frontend features.</li>
                <li>Used Git and GitHub for collaborative development following team-based workflows.</li>
              </ul>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 font-mono mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-emerald-500" />
              Featured Projects
            </h2>
            <div className="space-y-4">
              
              {/* Project 1 */}
              <div className="bg-white/5 print:bg-gray-50 p-4 rounded-xl border border-white/5 print:border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    DUET IICSD 2027 Conference Website
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 print:text-emerald-700 font-medium">Professional Project · 2026</span>
                </div>
                <p className="text-xs font-mono text-gray-400 print:text-gray-600 mt-0.5 mb-2">
                  React.js, TypeScript, Tailwind CSS, REST API, Git/GitHub, CI/CD
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-300 print:text-gray-800">
                  <li>Developed a modern and responsive conference website with reusable components.</li>
                  <li>Integrated REST APIs for dynamic conference data and implemented API-driven frontend features.</li>
                  <li>Used Git/GitHub and CI/CD workflows for version control and deployment.</li>
                  <li>Implemented conference registration, author information, submission-related features.</li>
                </ul>
                <div className="mt-2 text-xs">
                  <a href="https://iicsd.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 print:text-emerald-700 hover:underline inline-flex items-center gap-1">
                    Live Demo: iicsd.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white/5 print:bg-gray-50 p-4 rounded-xl border border-white/5 print:border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    Bangladesh House Price Prediction System
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 print:text-emerald-700 font-medium">Final Year Project · 2026</span>
                </div>
                <p className="text-xs font-mono text-gray-400 print:text-gray-600 mt-0.5 mb-2">
                  Django REST Framework, React.js, Python, Scikit-learn, Colab
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-300 print:text-gray-800">
                  <li>Developed a machine learning-based web application to predict house prices in Bangladesh using property and location features.</li>
                  <li>Compared Linear Regression, Gradient Boosting, and Random Forest etc. models using R², RMSE.</li>
                  <li>Built a Django REST API and React-based frontend for real-time house price prediction.</li>
                </ul>
                <div className="mt-2 flex flex-wrap gap-4 text-xs">
                  <a href="https://github.com/mdsium/house-price-prediction" target="_blank" rel="noopener noreferrer" className="text-emerald-400 print:text-emerald-700 hover:underline inline-flex items-center gap-1">
                    GitHub: github.com/mdsium/house-price-prediction <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://house-price-prediction-rho-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 print:text-emerald-700 hover:underline inline-flex items-center gap-1">
                    Live Demo: house-price-prediction-rho-seven.vercel.app <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white/5 print:bg-gray-50 p-4 rounded-xl border border-white/5 print:border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    Mosque Mate — Islamic Web Platform
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 print:text-emerald-700 font-medium">Coursework Project · 2026</span>
                </div>
                <p className="text-xs font-mono text-gray-400 print:text-gray-600 mt-0.5 mb-2">
                  PHP, MySQL, JavaScript, REST API, JSON
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-300 print:text-gray-800">
                  <li>Developed an Islamic web platform with separate user and admin for managing Islamic resources.</li>
                  <li>Integrated prayer-time, Quran APIs and implemented Hadith and Islamic book content using JSON.</li>
                </ul>
                <div className="mt-2 text-xs">
                  <a href="https://github.com/mdsium/MosqueMate" target="_blank" rel="noopener noreferrer" className="text-emerald-400 print:text-emerald-700 hover:underline inline-flex items-center gap-1">
                    GitHub: github.com/mdsium/MosqueMate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Section: Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 font-mono mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-emerald-500" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white/5 print:bg-gray-50 p-3 rounded-xl">
                <strong className="text-white print:text-black block mb-1">Languages:</strong>
                <p className="text-gray-300 print:text-gray-800">JavaScript (ES6+), TypeScript, HTML5, CSS3, PHP, Python, Java</p>
              </div>
              <div className="bg-white/5 print:bg-gray-50 p-3 rounded-xl">
                <strong className="text-white print:text-black block mb-1">Frontend:</strong>
                <p className="text-gray-300 print:text-gray-800">React, Next.js, Tailwind CSS, Bootstrap, Responsive Web Design, Material UI, Reusable UI Components</p>
              </div>
              <div className="bg-white/5 print:bg-gray-50 p-3 rounded-xl">
                <strong className="text-white print:text-black block mb-1">API & Backend:</strong>
                <p className="text-gray-300 print:text-gray-800">REST API Integration, API-driven Development, Authentication, PHP, Laravel, Django</p>
              </div>
              <div className="bg-white/5 print:bg-gray-50 p-3 rounded-xl">
                <strong className="text-white print:text-black block mb-1">Databases:</strong>
                <p className="text-gray-300 print:text-gray-800">MySQL, MS Access, MongoDB (basic), PostgreSQL, Database Design, JSON</p>
              </div>
              <div className="bg-white/5 print:bg-gray-50 p-3 rounded-xl">
                <strong className="text-white print:text-black block mb-1">Tools & Workflow:</strong>
                <p className="text-gray-300 print:text-gray-800">Git, GitHub, Postman, Linux CLI, Figma, CI/CD, AI-Assisted Development, VS Code</p>
              </div>
              <div className="bg-white/5 print:bg-gray-50 p-3 rounded-xl">
                <strong className="text-white print:text-black block mb-1">Concepts:</strong>
                <p className="text-gray-300 print:text-gray-800">OOP, Data Structures, Algorithms, REST, browser fundamentals, Problem Solving, Unit Testing</p>
              </div>
            </div>
          </div>

          {/* Section: Certifications and Activities */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 font-mono mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-emerald-500" />
              Certifications and Activities
            </h2>
            <div className="space-y-3">
              <div className="bg-white/5 print:bg-gray-50 p-3.5 rounded-xl border border-white/5 print:border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    Professional Web Application Development (PWAD-59) — IsDB-BISEW
                  </h3>
                  <span className="text-xs font-mono text-gray-400 print:text-gray-600">460 Hours | completed: July, 2024</span>
                </div>
                <p className="text-xs text-gray-300 print:text-gray-700 mt-1">
                  Completed intensive training in PHP, Laravel, MySQL, HTML, CSS, JavaScript, Bootstrap, jQuery, Git, and REST API.
                  Gained hands-on experience in ERP system development, including MVC architecture, CRUD operations, authentication, database management.
                </p>
                <p className="text-[11px] text-emerald-400 print:text-emerald-700 font-mono mt-1.5">
                  Instructors: Mohammad Towhidul Islam &amp; Mohammad Moshaidul Islam (IsDB-BISEW)
                </p>
              </div>

              <div className="bg-white/5 print:bg-gray-50 p-3 rounded-xl border border-white/5 print:border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <h3 className="font-bold text-white print:text-black">Certificate in Graphics Design — ICT Division (LEDP)</h3>
                  <p className="text-gray-400 print:text-gray-600">3 Months</p>
                </div>
                <span className="font-mono text-gray-400 print:text-gray-600">completed: December 2020</span>
              </div>

              <div className="bg-white/5 print:bg-gray-50 p-3 rounded-xl border border-white/5 print:border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <h3 className="font-bold text-white print:text-black">Hardware & Networking — I-Tech Computer Institute, Kushtia</h3>
                  <p className="text-gray-400 print:text-gray-600">360 Hours</p>
                </div>
                <span className="font-mono text-gray-400 print:text-gray-600">completed: 2018</span>
              </div>

              <div className="bg-white/5 print:bg-gray-50 p-3 rounded-xl border border-white/5 print:border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <h3 className="font-bold text-white print:text-black">Programming in C — I-Tech Computer Institute, Kushtia</h3>
                  <p className="text-gray-400 print:text-gray-600">360 Hours</p>
                </div>
                <span className="font-mono text-gray-400 print:text-gray-600">completed: 2018</span>
              </div>
            </div>
          </div>

          {/* Section: References */}
          <div className="mt-6 pt-6 border-t border-white/10 print:border-black/20">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 font-mono mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-emerald-500" />
              References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Reference 1 */}
              <div className="bg-white/5 print:bg-gray-50 p-4 rounded-xl border border-white/5 print:border-gray-200">
                <h3 className="font-bold text-sm text-white print:text-black">
                  Mohammad Towhidul Islam
                </h3>
                <p className="text-xs font-semibold text-emerald-400 print:text-emerald-700 mt-0.5">
                  CEO, Intellect Software Ltd.
                </p>
                <p className="text-xs text-gray-300 print:text-gray-700">
                  Instructor, IsDB-BISEW IT Scholarship Project
                </p>
                <p className="text-[11px] font-mono text-gray-400 print:text-gray-600 mt-1">
                  Relationship: Academic
                </p>
                <div className="mt-2.5 pt-2 border-t border-white/10 print:border-gray-200 space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 text-gray-300 print:text-gray-800">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-gray-600" />
                    <span>Phone:</span>
                    <a href="tel:01715785434" className="font-mono hover:underline">01715785434</a>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300 print:text-gray-800">
                    <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-gray-600" />
                    <span>Email:</span>
                    <a href="mailto:towhid1@outlook.com" className="font-mono text-emerald-400 print:text-emerald-700 hover:underline">towhid1@outlook.com</a>
                  </div>
                </div>
              </div>

              {/* Reference 2 */}
              <div className="bg-white/5 print:bg-gray-50 p-4 rounded-xl border border-white/5 print:border-gray-200">
                <h3 className="font-bold text-sm text-white print:text-black">
                  Mohammad Moshaidul Islam
                </h3>
                <p className="text-xs font-semibold text-emerald-400 print:text-emerald-700 mt-0.5">
                  Project Consultant
                </p>
                <p className="text-xs text-gray-300 print:text-gray-700">
                  Instructor, IsDB-BISEW IT Scholarship Project
                </p>
                <p className="text-[11px] font-mono text-gray-400 print:text-gray-600 mt-1">
                  Relationship: Academic
                </p>
                <div className="mt-2.5 pt-2 border-t border-white/10 print:border-gray-200 space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 text-gray-300 print:text-gray-800">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-gray-600" />
                    <span>Phone:</span>
                    <a href="tel:01711071219" className="font-mono hover:underline">01711071219</a>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-300 print:text-gray-800">
                    <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-gray-600" />
                    <span>Email:</span>
                    <a href="mailto:moshaidul@gmail.com" className="font-mono text-emerald-400 print:text-emerald-700 hover:underline">moshaidul@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer (Hidden in print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-950/80 border-t border-white/10 print:hidden text-xs text-gray-400">
          <span>Prepared for Recruitment & Review</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
}
