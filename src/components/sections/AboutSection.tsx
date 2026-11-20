import React from 'react'
import { ExternalLink } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 border-t border-white/10 bg-[#080909]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-display font-bold text-[#F5F5F5] tracking-tight mb-4">
          Education &amp; Credentials
        </h2>

        {/* Short Two-Line Clean Block */}
        <div className="p-5 rounded-xl border border-white/10 bg-[#0E1010] space-y-3 font-sans text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[#8E9592]">
            <div>
              <strong className="text-[#F5F5F5]">B.Tech in Computer Science &amp; Engineering (Cybersecurity)</strong>
              <span className="mx-2 hidden sm:inline">&middot;</span>
              <span className="block sm:inline">Second Year &middot; Hindustan Institute of Technology &amp; Science, Chennai</span>
            </div>
            <span className="text-xs text-[#8E9592] font-mono shrink-0">Chennai, Tamil Nadu</span>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#8E9592]">
            <div>
              <strong className="text-[#F5F5F5]">Certified Cyber Security Analyst (C3SA)</strong>
              <span className="mx-2 hidden sm:inline">&middot;</span>
              <span className="block sm:inline">CyberWarFare Labs &middot; Credential ID: <code className="text-[#D5F5C6] font-mono text-xs">C3SA-6ad0ccf6b6d122ea6a91de63</code></span>
            </div>
            <a
              href="/certificates/c3sa-certificate.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#D5F5C6] hover:underline shrink-0"
            >
              <span>View Certificate</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
