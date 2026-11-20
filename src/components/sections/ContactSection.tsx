import React, { useState } from 'react'
import { Mail, Copy, Check, Download, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { SpotlightCard } from '../ui/SpotlightCard'
import { MagneticButton } from '../ui/MagneticButton'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

export const ContactSection: React.FC = () => {
  const { email, github, linkedin, resumeUrl, availability } = portfolioData.personal
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 border-t border-white/5 bg-[#080909] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-[#D5F5C6] font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D5F5C6]" />
            <span>07 / Initiate Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F5F5F5] tracking-tight">
            Direct Communication & Inquiries
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#8E9592] max-w-xl">
            Currently open to cybersecurity internships, offensive/defensive research collaborations, and engineering discussions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Action Banner */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#141716] text-xs font-mono text-[#D5F5C6]">
                <span className="w-2 h-2 rounded-full bg-[#D5F5C6] animate-pulse" />
                <span>{availability}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F5F5]">
                  Let's Discuss Web Security, Tools, or Opportunities
                </h3>
                <p className="text-xs sm:text-sm text-[#8E9592] leading-relaxed">
                  Whether you're looking for an enthusiastic cybersecurity student for an internship, want to discuss Burp Suite and reconnaissance methodologies, or collaborate on security tooling:
                </p>
              </div>

              {/* Email One-Click Copy Box */}
              <div className="p-4 rounded-xl border border-white/10 bg-[#080909] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D5F5C6]/10 border border-[#D5F5C6]/30 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#D5F5C6]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#5A625E] uppercase block">Direct Email</span>
                    <span className="text-xs sm:text-sm font-mono text-[#F5F5F5]">{email}</span>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-[#141716] hover:bg-[#1f2422] text-[#F5F5F5] hover:text-[#D5F5C6] text-xs font-mono transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D5F5C6]" />
                      <span className="text-[#D5F5C6]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href={`mailto:${email}`}>
                  <MagneticButton
                    strength={10}
                    className="px-6 py-3 rounded-full bg-[#D5F5C6] hover:bg-[#c2eeaf] text-[#080909] font-medium text-xs font-mono tracking-wide flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>SEND DIRECT MESSAGE</span>
                  </MagneticButton>
                </a>

                <a
                  href={resumeUrl}
                  download="Mohamed_Afraz_Ali_Resume.pdf"
                  className="px-5 py-3 rounded-full border border-white/15 hover:border-[#D5F5C6]/40 bg-[#141716] hover:bg-[#1a1e1d] text-[#F5F5F5] text-xs font-mono tracking-wide transition-all flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-[#D5F5C6]" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Social Profiles & Verification Links */}
          <div className="lg:col-span-5 space-y-4">
            {/* GitHub Card */}
            <SpotlightCard className="p-5">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D5F5C6]/30 transition-colors">
                    <GithubIcon className="w-5 h-5 text-[#F5F5F5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#D5F5C6] transition-colors">
                      GitHub Repositories
                    </h4>
                    <p className="text-xs font-mono text-[#8E9592]">@shadow-reaper69</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E9592] group-hover:text-[#D5F5C6] transition-colors" />
              </a>
            </SpotlightCard>

            {/* LinkedIn Card */}
            <SpotlightCard className="p-5">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D5F5C6]/30 transition-colors">
                    <LinkedinIcon className="w-5 h-5 text-[#F5F5F5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#D5F5C6] transition-colors">
                      LinkedIn Network
                    </h4>
                    <p className="text-xs font-mono text-[#8E9592]">in/afraz-ali-1085a1372</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E9592] group-hover:text-[#D5F5C6] transition-colors" />
              </a>
            </SpotlightCard>

            {/* Verification & Static Security Card */}
            <div className="p-4 rounded-xl border border-white/5 bg-[#0E1010]/60 text-xs text-[#8E9592] space-y-1.5 font-mono">
              <div className="flex items-center gap-2 text-[#D5F5C6]">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-semibold">Security & Privacy Assurance</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                This website is built with zero third-party trackers, no client cookies, and strict CSP compatibility. Pure static delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
