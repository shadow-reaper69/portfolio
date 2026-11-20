import React from 'react'
import { GraduationCap, MapPin, Calendar, Target, Shield, CheckCircle2 } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-[#D5DADF] bg-[#FFFFFF]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#1D4ED8] font-sans text-xs uppercase tracking-wider font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span>01 / Background &amp; Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F1419] tracking-tight">
            Education &amp; Core Security Focus
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Academic & Location */}
          <div className="md:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl border border-[#D5DADF] bg-[#F3F4F5] space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider font-sans">
                    Academic Background
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#0F1419] mt-1">
                    B.Tech in Computer Science &amp; Engineering
                  </h3>
                  <p className="text-sm font-medium text-[#46505B] mt-0.5">
                    Specialization in Cybersecurity &middot; Second Year
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#D5DADF] flex items-center justify-center text-[#1D4ED8] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <div className="pt-3 border-t border-[#D5DADF] space-y-2 text-sm text-[#46505B] font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#0F1419]">Institution:</span>
                  <span>Hindustan Institute of Technology &amp; Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>Available for Summer 2027 Internships</span>
                </div>
              </div>
            </div>

            {/* Approach Description */}
            <div className="p-6 rounded-2xl border border-[#D5DADF] bg-[#FFFFFF] space-y-3">
              <h4 className="text-base font-display font-bold text-[#0F1419] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#1D4ED8]" />
                <span>Security Methodology</span>
              </h4>
              <p className="text-sm text-[#46505B] leading-relaxed font-sans">
                I emphasize hands-on verification over surface-level theory. Whether analyzing web applications for authentication flaws and access control bypasses, or testing wireless frames in isolated defensive testbeds, I document repeatable steps, test edge cases, and focus on practical remediation.
              </p>
            </div>
          </div>

          {/* Right Column: Focus Areas & Credential Placeholder */}
          <div className="md:col-span-5 space-y-6">
            {/* Career Focus */}
            <div className="p-6 rounded-2xl border border-[#D5DADF] bg-[#F3F4F5] space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider font-sans">
                <Target className="w-4 h-4" />
                <span>Career Focus</span>
              </div>
              <ul className="space-y-2.5 text-sm text-[#0F1419] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>Web Application Security</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>Vulnerability Assessment &amp; Penetration Testing (VAPT)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>Reconnaissance &amp; Attack Surface Discovery</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>Security Research &amp; Tool Prototyping</span>
                </li>
              </ul>
            </div>

            {/* C3SA Certification Card */}
            <div className="p-6 rounded-2xl border border-[#D5DADF] bg-[#FFFFFF] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider font-sans">
                  Certification
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1D4ED8]/10 text-[#1D4ED8] border border-[#1D4ED8]/20">
                  <CheckCircle2 className="w-3 h-3" />
                  Completed
                </span>
              </div>

              <h4 className="text-base font-display font-bold text-[#0F1419]">
                Certified Cyber Security Analyst (C3SA)
              </h4>
              <p className="text-xs text-[#46505B] font-sans">
                CyberWarFare Labs &middot; Hands-on practical cyber defense and analysis curriculum.
              </p>

              {/* Exact required placeholder chip */}
              <div className="pt-2">
                <span className="inline-block px-3 py-1.5 rounded-lg border border-dashed border-[#D5DADF] bg-[#F3F4F5] text-xs font-sans text-[#46505B]">
                  [Certificate URL to be linked]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
