'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, FileText, AlertCircle, ExternalLink } from 'lucide-react';
import ResumeModal from './ResumeModal';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', subject: '', message: '' });
  const [lastSubmitted, setLastSubmitted] = useState<ContactForm | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [activationNotice, setActivationNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const recipientEmail = 'mdsiumcse@gmail.com';

  const socials = [
    {
      name: 'GitHub',
      handle: 'github.com/mdsium',
      link: 'https://github.com/mdsium',
      icon: Github,
      color: 'hover:text-white hover:bg-neutral-800 border-white/10 hover:border-neutral-500',
    },
    {
      name: 'LinkedIn',
      handle: 'md-sium-27787a267',
      link: 'https://linkedin.com/in/md-sium-27787a267',
      icon: Linkedin,
      color: 'hover:text-emerald-400 hover:bg-emerald-950/30 border-white/10 hover:border-emerald-500',
    },
  ];

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = 'Your name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Your email address is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject line is required';
    if (!form.message.trim()) newErrors.message = 'Please provide a brief message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setServerError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => null);

      if (data?.success) {
        setLastSubmitted(form);
        setSubmitted(true);
        if (data.needsActivation) {
          setActivationNotice(data.message);
        } else {
          setActivationNotice(null);
        }
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setServerError(data?.error || 'Could not send through gateway. You can send directly via your email client.');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setServerError('Network error while transmitting message. You can open your email app directly below.');
    } finally {
      setLoading(false);
    }
  };

  const getDirectMailtoUrl = (formState?: ContactForm) => {
    const target = formState || form;
    const subj = encodeURIComponent(target.subject ? `[Inquiry] ${target.subject}` : 'Job Opportunity / Project Inquiry');
    const body = encodeURIComponent(
      `Hello Sium,\n\n${target.message || 'I would like to get in touch with you.'}\n\nBest regards,\n${target.name || 'Visitor'}\n${target.email || ''}`
    );
    return `mailto:${recipientEmail}?subject=${subj}&body=${body}`;
  };

  return (
    <>
      <section
        id="contact"
        className="relative py-24 bg-gray-950 border-t border-white/5 overflow-hidden"
      >
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[350px] bg-emerald-600/5 filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Block */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-emerald-400 font-mono tracking-widest uppercase block mb-2">
              Let&apos;s Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Get in Touch with Md. Sium
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Available for full-time frontend engineering opportunities, project inquiries, or technical collaborations. Messages submitted here are routed directly to <strong className="text-emerald-400 font-medium">{recipientEmail}</strong>.
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded mx-auto mt-4" />
          </div>

          {/* Content columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Block: Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-md">
                <h3 className="text-white font-bold text-lg mb-6">Contact Information</h3>

                <div className="flex flex-col gap-6">
                  {/* Email Info Card */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 font-mono uppercase">Direct Email</span>
                      <a
                        href={`mailto:${recipientEmail}`}
                        className="text-sm font-semibold text-gray-200 hover:text-emerald-400 transition-colors"
                      >
                        {recipientEmail}
                      </a>
                    </div>
                  </div>

                  {/* Phone Info Card */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-teal-600/10 border border-teal-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 font-mono uppercase">Phone / WhatsApp</span>
                      <a
                        href="tel:+8801720184617"
                        className="text-sm font-semibold text-gray-200 hover:text-teal-400 transition-colors"
                      >
                        +880 1720184617
                      </a>
                    </div>
                  </div>

                  {/* Location Info Card */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-green-600/10 border border-green-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 font-mono uppercase">Location</span>
                      <span className="text-sm font-semibold text-gray-200">
                        Dhaka, Bangladesh
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct CV View Button */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button
                    onClick={() => setIsResumeOpen(true)}
                    className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm py-3 rounded-xl transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-emerald-400" />
                    View Complete Curriculum Vitae
                  </button>
                </div>
              </div>

              {/* Social Anchor Deck */}
              <div className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-md">
                <h3 className="text-white font-bold text-lg mb-4">Professional Profiles</h3>
                <p className="text-gray-400 text-xs mb-6">
                  Check out my open-source code repositories and connect with me on LinkedIn.
                </p>

                <div className="flex flex-col gap-3">
                  {socials.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between p-3.5 rounded-xl border text-gray-300 transition-all duration-300 hover:-translate-y-0.5 text-xs font-semibold ${social.color}`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-emerald-400" />
                          <span>{social.name}</span>
                        </div>
                        <span className="text-[11px] font-mono text-gray-400">{social.handle}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Block: Dynamic Form Panel */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-white/5 border border-white/5 p-8 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl relative">
                {submitted ? (
                  <div className="py-10 flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">Message Dispatched Successfully!</h3>
                    <p className="text-gray-300 text-sm max-w-md leading-relaxed mb-4">
                      Your message was successfully submitted to <strong className="text-emerald-400 font-semibold">{recipientEmail}</strong>.
                    </p>

                    {activationNotice && (
                      <div className="w-full max-w-md bg-emerald-500/10 border border-emerald-500/25 rounded-2xl p-4 text-xs text-emerald-200 mb-5 leading-relaxed text-left">
                        <strong className="text-white block mb-1">One-Time Activation:</strong>
                        {activationNotice}
                      </div>
                    )}

                    <p className="text-gray-400 text-xs max-w-sm mb-6">
                      Sium will review your inquiry and respond to your email address shortly.
                    </p>

                    {lastSubmitted && (
                      <div className="w-full max-w-md bg-gray-950/80 border border-white/10 rounded-2xl p-4 text-left text-xs mb-6 font-mono text-gray-300 space-y-1.5">
                        <div><span className="text-gray-500">From:</span> {lastSubmitted.name} ({lastSubmitted.email})</div>
                        <div><span className="text-gray-500">Subject:</span> {lastSubmitted.subject}</div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href={getDirectMailtoUrl(lastSubmitted || undefined)}
                        className="bg-white/10 hover:bg-white/15 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-all inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                        Open Copy in Email Client
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setLastSubmitted(null);
                        }}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Server Error Alert with Direct Fallback */}
                    {serverError && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-red-300">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          <span>{serverError}</span>
                        </div>
                        <a
                          href={getDirectMailtoUrl()}
                          className="bg-red-500/20 hover:bg-red-500/30 text-white font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors inline-flex items-center gap-1.5 w-fit"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Send via Email App
                        </a>
                      </div>
                    )}

                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-gray-400">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="bg-gray-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm outline-none text-white focus:border-emerald-500 transition-all placeholder:text-gray-600 w-full"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs font-mono mt-1">{errors.name}</span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-gray-400">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@example.com"
                        className="bg-gray-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm outline-none text-white focus:border-emerald-500 transition-all placeholder:text-gray-600 w-full"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs font-mono mt-1">{errors.email}</span>
                      )}
                    </div>

                    {/* Subject Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-xs font-mono text-gray-400">
                        SUBJECT LINE *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleInputChange}
                        placeholder="e.g. Software Engineering Opportunity / Project Discussion"
                        className="bg-gray-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm outline-none text-white focus:border-emerald-500 transition-all placeholder:text-gray-600 w-full"
                      />
                      {errors.subject && (
                        <span className="text-red-500 text-xs font-mono mt-1">{errors.subject}</span>
                      )}
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-mono text-gray-400">
                        YOUR MESSAGE *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your team, role requirements, or project details..."
                        className="bg-gray-950 border border-white/10 rounded-xl px-4 py-4 text-sm outline-none text-white focus:border-emerald-500 transition-all placeholder:text-gray-600 min-h-[140px] resize-y w-full"
                      />
                      {errors.message && (
                        <span className="text-red-500 text-xs font-mono mt-1">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit Button & Direct Option */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs sm:text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending to {recipientEmail}...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message to {recipientEmail}
                          </>
                        )}
                      </button>

                      <a
                        href={getDirectMailtoUrl()}
                        className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white px-4 py-4 rounded-xl text-xs font-medium transition-colors text-center inline-flex items-center justify-center gap-1.5"
                        title="Click to send directly from your Gmail or email app"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Send via Email Client</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
