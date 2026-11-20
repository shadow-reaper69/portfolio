import React from 'react'
import { ExternalLink, ShieldCheck, BookOpen, Award } from 'lucide-react'
import { writeupsData } from '../../data/writeups'

export const PracticeSection: React.FC = () => {
  const { sectionTitle, intro, portSwigger, tryHackMe } = writeupsData

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200'
      case 'Medium':
        return 'bg-amber-50 text-amber-700 border-amber-200'
      case 'Info':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200'
    }
  }

  return (
    <section id="practice" className="py-20 border-t border-[#D5DADF] bg-[#F3F4F5]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#1D4ED8] font-sans text-xs uppercase tracking-wider font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span>04 / Hands-On Labs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F1419] tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#46505B] mt-2 max-w-2xl font-sans leading-relaxed">
            {intro}
          </p>
        </div>

        {/* 2-Column Split: PortSwigger Academy & TryHackMe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: PortSwigger Web Security Academy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-[#D5DADF] bg-[#FFFFFF] shadow-2xs space-y-6">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#D5DADF]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F3F4F5] border border-[#D5DADF] flex items-center justify-center text-[#1D4ED8] shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#0F1419]">
                      PortSwigger Web Security Academy
                    </h3>
                    <p className="text-xs text-[#46505B] font-sans">
                      Practical web security lab training
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#1D4ED8]/10 text-[#1D4ED8] border border-[#1D4ED8]/25">
                    <Award className="w-3.5 h-3.5" />
                    <span>{portSwigger.totalLabsCompleted} labs completed</span>
                  </span>
                </div>
              </div>

              {/* Profile Placeholder Chip */}
              <div className="p-3 rounded-xl bg-[#F3F4F5] border border-dashed border-[#D5DADF] flex items-center justify-between text-xs text-[#46505B] font-sans">
                <span>Verification Profile:</span>
                <span className="font-mono text-[#0F1419] font-medium">
                  [{portSwigger.profilePlaceholder}]
                </span>
              </div>

              {/* Confirmed Topics List */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#0F1419] font-sans block uppercase tracking-wider">
                  Confirmed Learning Topics &amp; Official References:
                </span>

                <div className="grid grid-cols-1 gap-3">
                  {portSwigger.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-4 rounded-xl border border-[#D5DADF] bg-[#F3F4F5]/60 hover:bg-[#F3F4F5] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="text-sm font-display font-bold text-[#0F1419]">
                          {topic.title}
                        </h4>
                        <a
                          href={topic.referenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#1D4ED8] hover:text-[#123499] hover:underline"
                        >
                          <span>Official Topic</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-xs text-[#46505B] font-sans leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-[#46505B] font-sans italic pt-2">
                * Note: Topics link to official PortSwigger documentation modules. 15 total completed labs across these domains.
              </div>
            </div>
          </div>

          {/* Right Column: TryHackMe Profile & Rooms (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-[#D5DADF] bg-[#FFFFFF] shadow-2xs space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D5DADF]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F3F4F5] border border-[#D5DADF] flex items-center justify-center text-[#1D4ED8] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#0F1419]">
                      TryHackMe
                    </h3>
                    <p className="text-xs text-[#46505B] font-sans">
                      Hands-on CTF &amp; red team labs
                    </p>
                  </div>
                </div>

                <a
                  href={tryHackMe.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#1D4ED8] text-white hover:bg-[#123499] transition-colors shadow-2xs"
                >
                  <span>Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Verified Metrics */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-xl bg-[#F3F4F5] border border-[#D5DADF]">
                  <div className="text-xs text-[#46505B] font-sans">Rank</div>
                  <div className="text-sm sm:text-base font-display font-bold text-[#1D4ED8] mt-0.5">
                    {tryHackMe.ranking}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#F3F4F5] border border-[#D5DADF]">
                  <div className="text-xs text-[#46505B] font-sans">Capability</div>
                  <div className="text-sm sm:text-base font-display font-bold text-[#0F1419] mt-0.5">
                    {tryHackMe.capabilityScore}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#F3F4F5] border border-[#D5DADF]">
                  <div className="text-xs text-[#46505B] font-sans">Activity</div>
                  <div className="text-sm sm:text-base font-display font-bold text-[#0F1419] mt-0.5">
                    {tryHackMe.annualEvents}
                  </div>
                </div>
              </div>

              {/* Learning Path */}
              <div className="p-3.5 rounded-xl bg-[#F3F4F5] border border-[#D5DADF] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0F1419] font-sans">
                    Enrolled Learning Path:
                  </span>
                  <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {tryHackMe.pathStatus}
                  </span>
                </div>
                <div className="text-xs font-medium text-[#1D4ED8] font-sans">
                  {tryHackMe.enrolledPath}
                </div>
              </div>

              {/* Curated Rooms List (Names & Difficulty only, linking to THM profile) */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#0F1419] font-sans block uppercase tracking-wider">
                  Curated Practice Rooms:
                </span>
                <div className="space-y-2">
                  {tryHackMe.curatedRooms.map((room, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-2.5 rounded-xl border border-[#D5DADF] bg-[#FFFFFF] flex items-center justify-between text-xs font-sans hover:bg-[#F3F4F5] transition-colors"
                    >
                      <span className="font-medium text-[#0F1419]">{room.name}</span>
                      <span
                        className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${getDifficultyBadge(
                          room.difficulty
                        )}`}
                      >
                        {room.difficulty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* THM Profile Link */}
              <div className="pt-2">
                <a
                  href={tryHackMe.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-[#D5DADF] bg-[#F3F4F5] hover:bg-[#FFFFFF] text-[#0F1419] hover:text-[#1D4ED8] text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <span>View All Activity on TryHackMe</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
