import React from 'react'
import { GraduationCap, MapPin, Calendar, Target, Shield, CheckCircle2, ExternalLink } from 'lucide-react'
import { LetterGlitch } from '../ui/LetterGlitch'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-white/10 bg-[#080909]/90 relative overflow-hidden">
      {/* Subtle LetterGlitch Ambient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto opacity-35">
        <LetterGlitch
          glitchColors={['#ffffff', '#D5F5C6', '#8E9592']}
          glitchAmount={0.25}
          speed={0.7}
          flow={0.3}
          clickEffect="tear"
          baseColor="#ffffff"
          fontSize={14}
          spacing={0.6}
          density={0.75}
          baseOpacity={0.06}
          smooth
          edgeFade={0.3}
          centerFade={0.45}
          interactive={true}
          cursorRadius={130}
          intro={true}
          lightMode={false}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#D5F5C6] font-mono text-xs uppercase tracking-wider font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#D5F5C6] animate-pulse" />
            <span>01 / Background &amp; Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F5] tracking-tight">
            Education &amp; Core Security Focus
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Academic & Location */}
          <div className="md:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1010]/95 backdrop-blur-md space-y-4 shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#D5F5C6] uppercase tracking-wider font-mono">
                    Academic Background
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#F5F5F5] mt-1">
                    B.Tech in Computer Science &amp; Engineering
                  </h3>
                  <p className="text-sm font-medium text-[#8E9592] mt-0.5">
                    Specialization in Cybersecurity &middot; Second Year
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#141716] border border-white/10 flex items-center justify-center text-[#D5F5C6] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2 text-sm text-[#8E9592] font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#F5F5F5]">Institution:</span>
                  <span>Hindustan Institute of Technology &amp; Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D5F5C6] shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D5F5C6] shrink-0" />
                  <span>Available for Summer 2027 Internships</span>
                </div>
              </div>
            </div>

            {/* Approach Description */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1010]/95 backdrop-blur-md space-y-3 shadow-xl">
              <h4 className="text-base font-display font-bold text-[#F5F5F5] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#D5F5C6]" />
                <span>Security Methodology</span>
              </h4>
              <p className="text-sm text-[#8E9592] leading-relaxed font-sans">
                I emphasize hands-on verification over surface-level theory. Whether analyzing web applications for authentication flaws and access control bypasses, or testing wireless frames in isolated defensive testbeds, I document repeatable steps, test edge cases, and focus on practical remediation.
              </p>
            </div>
          </div>

          {/* Right Column: Focus Areas & Credential Card */}
          <div className="md:col-span-5 space-y-6">
            {/* Career Focus */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1010]/95 backdrop-blur-md space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D5F5C6] uppercase tracking-wider font-mono">
                <Target className="w-4 h-4" />
                <span>Career Focus</span>
              </div>
              <ul className="space-y-2.5 text-sm text-[#F5F5F5] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6]" />
                  <span>Web Application Security</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6]" />
                  <span>Vulnerability Assessment &amp; Penetration Testing (VAPT)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6]" />
                  <span>Reconnaissance &amp; Attack Surface Discovery</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6]" />
                  <span>Security Research &amp; Tool Prototyping</span>
                </li>
              </ul>
            </div>

            {/* C3SA Certification Card */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E1010]/95 backdrop-blur-md space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#D5F5C6] uppercase tracking-wider font-mono">
                  Certification
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D5F5C6]/15 text-[#D5F5C6] border border-[#D5F5C6]/30">
                  <CheckCircle2 className="w-3 h-3" />
                  Completed
                </span>
              </div>

              <h4 className="text-base font-display font-bold text-[#F5F5F5]">
                Certified Cyber Security Analyst (C3SA)
              </h4>
              <p className="text-xs text-[#8E9592] font-sans">
                CyberWarFare Labs &middot; Hands-on practical cyber defense and analysis curriculum.
              </p>

              {/* Verified Certificate Link & Credential ID */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-[#8E9592] bg-[#141716] px-2.5 py-1 rounded border border-white/10">
                  ID: C3SA-6ad0ccf6b6d122ea6a91de63
                </span>
                <a
                  href="/certificates/c3sa-certificate.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D5F5C6] hover:bg-[#c2eeaf] text-[#080909] text-xs font-mono font-semibold transition-colors shadow-sm"
                >
                  <span>VIEW CERT</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
