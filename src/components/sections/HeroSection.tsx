import React from 'react'
import { ArrowDown, ArrowUpRight, ShieldCheck, Terminal, Award, ExternalLink, FileText } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 bg-[#F3F4F5]"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Top Badges / Chips */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D5DADF] bg-[#FFFFFF] text-xs font-sans text-[#46505B] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span className="font-medium text-[#0F1419]">B.Tech CSE — Cybersecurity (2nd Year)</span>
          </div>

          <a
            href="https://tryhackme.com/p/afrazali290"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D5DADF] bg-[#FFFFFF] hover:border-[#1D4ED8] text-xs font-sans text-[#46505B] hover:text-[#1D4ED8] transition-colors shadow-2xs group"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>TryHackMe Top 25%</span>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D5DADF] bg-[#FFFFFF] text-xs font-sans text-[#46505B] shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>15 PortSwigger Labs</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D5DADF] bg-[#FFFFFF] text-xs font-sans text-[#46505B] shadow-2xs">
            <span className="font-medium text-[#0F1419]">Internship Ready: Summer 2027</span>
          </div>
        </div>

        {/* Headline & Positioning */}
        <div className="space-y-4 max-w-4xl mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F1419] tracking-tight leading-[1.12]">
            Mohamed Afraz Ali
          </h1>
          <p className="text-xl sm:text-2xl font-display font-semibold text-[#1D4ED8] tracking-tight">
            Security-focused developer | Aspiring Web Application Pentester
          </p>
        </div>

        {/* Narrative / Bio Intro */}
        <div className="max-w-3xl space-y-4 text-base sm:text-lg text-[#46505B] font-sans leading-relaxed mb-10">
          <p>
            I’m a second-year B.Tech Cybersecurity student at Hindustan Institute of Technology &amp; Science in Chennai, focused on web application security, vulnerability assessment, and reconnaissance.
          </p>
          <p className="text-sm sm:text-base text-[#46505B]">
            I learn by doing: PortSwigger Web Security Academy labs on access control, SSRF, CSRF, and API testing, TryHackMe rooms, and tools I build myself, including a Python recon workflow and a defensive Wi-Fi deauthentication detector.
          </p>
          <p className="text-sm sm:text-base text-[#46505B]">
            I’m looking for a <strong>Summer 2027 internship</strong> where I can work on real application security and learn from experienced engineers.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-[#1D4ED8] hover:bg-[#123499] text-white text-sm font-medium tracking-wide flex items-center gap-2 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#practice"
            className="px-6 py-3 rounded-xl border border-[#D5DADF] bg-[#FFFFFF] hover:bg-[#F3F4F5] text-[#0F1419] text-sm font-medium tracking-wide flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <span>Web Security Practice</span>
            <Terminal className="w-4 h-4 text-[#1D4ED8]" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-[#D5DADF] bg-[#FFFFFF] hover:bg-[#F3F4F5] text-[#46505B] hover:text-[#0F1419] text-sm font-medium tracking-wide flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <FileText className="w-4 h-4 text-[#1D4ED8]" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  )
}
