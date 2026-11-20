import React, { useState } from 'react'
import { ExternalLink, ShieldCheck, BookOpen, Award, Image as ImageIcon, X } from 'lucide-react'
import { writeupsData } from '../../data/writeups'

export const PracticeSection: React.FC = () => {
  const { sectionTitle, intro, portSwigger, tryHackMe } = writeupsData
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null)
  const [modalTitle, setModalTitle] = useState<string>('')

  const openImageModal = (imageUrl: string, title: string) => {
    setActiveModalImage(imageUrl)
    setModalTitle(title)
  }

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
      case 'Medium':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30'
      case 'Info':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30'
      default:
        return 'bg-white/5 text-slate-400 border-white/10'
    }
  }

  return (
    <section id="practice" className="py-20 border-t border-white/10 bg-transparent relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#D5F5C6] font-mono text-xs uppercase tracking-wider font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#D5F5C6]" />
            <span>04 / Hands-On Labs &amp; Verified Progress</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F5] tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#8E9592] mt-2 max-w-2xl font-sans leading-relaxed">
            {intro}
          </p>
        </div>

        {/* 2-Column Split: PortSwigger Academy & TryHackMe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: PortSwigger Web Security Academy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#0E1010]/85 backdrop-blur-md shadow-xl space-y-6 card-border-glow">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#141716] border border-white/10 flex items-center justify-center text-[#D5F5C6] shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#F5F5F5]">
                      PortSwigger Web Security Academy
                    </h3>
                    <p className="text-xs text-[#8E9592] font-sans">
                      Practical web security lab training
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D5F5C6]/15 text-[#D5F5C6] border border-[#D5F5C6]/30">
                    <Award className="w-3.5 h-3.5" />
                    <span>{portSwigger.totalLabsCompleted} labs completed</span>
                  </span>
                </div>
              </div>

              {/* Progress Breakdown Metrics from Verified Screenshot */}
              <div className="grid grid-cols-4 gap-2 text-center font-mono">
                <div className="p-2.5 rounded-xl bg-[#141716] border border-white/10">
                  <div className="text-[10px] text-[#8E9592]">Rank</div>
                  <div className="text-xs font-bold text-[#D5F5C6] mt-0.5">{portSwigger.rank}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#141716] border border-white/10">
                  <div className="text-[10px] text-[#8E9592]">Apprentice</div>
                  <div className="text-xs font-bold text-[#F5F5F5] mt-0.5">{portSwigger.apprenticeLabs}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#141716] border border-white/10">
                  <div className="text-[10px] text-[#8E9592]">Practitioner</div>
                  <div className="text-xs font-bold text-[#F5F5F5] mt-0.5">{portSwigger.practitionerLabs}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#141716] border border-white/10">
                  <div className="text-[10px] text-[#8E9592]">Expert</div>
                  <div className="text-xs font-bold text-[#D5F5C6] mt-0.5">{portSwigger.expertLabs}</div>
                </div>
              </div>

              {/* PortSwigger Screenshot Proof Banner */}
              <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-[#141716]">
                <img
                  src={portSwigger.screenshotUrl}
                  alt="PortSwigger Web Security Academy Progress Screenshot"
                  className="w-full h-40 object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1010] via-transparent to-transparent flex items-end justify-between p-3">
                  <span className="text-[11px] font-mono text-[#F5F5F5] flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[#D5F5C6]" />
                    <span>Verified PortSwigger Progress</span>
                  </span>
                  <button
                    onClick={() => openImageModal(portSwigger.screenshotUrl, 'PortSwigger Hall of Fame Progress')}
                    className="px-2.5 py-1 rounded bg-[#D5F5C6] hover:bg-[#c2eeaf] text-[#080909] text-[10px] font-mono font-bold shadow-sm transition-colors"
                  >
                    VIEW SCREENSHOT
                  </button>
                </div>
              </div>

              {/* Confirmed Topics List */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-semibold text-[#F5F5F5] block uppercase tracking-wider">
                  Confirmed Learning Topics &amp; Official References:
                </span>

                <div className="grid grid-cols-1 gap-2.5">
                  {portSwigger.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3.5 rounded-xl border border-white/10 bg-[#141716]/60 hover:bg-[#141716] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-display font-bold text-[#F5F5F5]">
                          {topic.title}
                        </h4>
                        <a
                          href={topic.referenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-[#D5F5C6] hover:underline"
                        >
                          <span>Official Docs</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-xs text-[#8E9592] font-sans leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-[#8E9592] font-sans italic pt-1">
                * Note: Topics link to official PortSwigger documentation modules. 15 total labs completed across these tracks.
              </div>
            </div>
          </div>

          {/* Right Column: TryHackMe Profile & Rooms (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#0E1010]/85 backdrop-blur-md shadow-xl space-y-6 card-border-glow">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#141716] border border-white/10 flex items-center justify-center text-[#D5F5C6] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#F5F5F5]">
                      TryHackMe
                    </h3>
                    <p className="text-xs text-[#8E9592] font-sans">
                      Hands-on CTF &amp; red team labs
                    </p>
                  </div>
                </div>

                <a
                  href={tryHackMe.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#D5F5C6] text-[#080909] hover:bg-[#c2eeaf] transition-colors shadow-sm"
                >
                  <span>PROFILE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Verified Metrics from Screenshot */}
              <div className="grid grid-cols-3 gap-2.5 text-center font-mono">
                <div className="p-3 rounded-xl bg-[#141716] border border-white/10">
                  <div className="text-xs text-[#8E9592]">Rank</div>
                  <div className="text-sm sm:text-base font-bold text-[#D5F5C6] mt-0.5">
                    {tryHackMe.ranking}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#141716] border border-white/10">
                  <div className="text-xs text-[#8E9592]">Capability</div>
                  <div className="text-sm sm:text-base font-bold text-[#F5F5F5] mt-0.5">
                    {tryHackMe.capabilityScore}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#141716] border border-white/10">
                  <div className="text-xs text-[#8E9592]">Events</div>
                  <div className="text-sm sm:text-base font-bold text-[#F5F5F5] mt-0.5">
                    {tryHackMe.annualEvents}
                  </div>
                </div>
              </div>

              {/* TryHackMe Screenshot Proof Banner */}
              <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-[#141716]">
                <img
                  src={tryHackMe.screenshotUrl}
                  alt="TryHackMe Profile Screenshot"
                  className="w-full h-40 object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1010] via-transparent to-transparent flex items-end justify-between p-3">
                  <span className="text-[11px] font-mono text-[#F5F5F5] flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[#D5F5C6]" />
                    <span>Verified Profile &amp; Heatmap</span>
                  </span>
                  <button
                    onClick={() => openImageModal(tryHackMe.screenshotUrl, 'TryHackMe Verified Profile')}
                    className="px-2.5 py-1 rounded bg-[#D5F5C6] hover:bg-[#c2eeaf] text-[#080909] text-[10px] font-mono font-bold shadow-sm transition-colors"
                  >
                    VIEW SCREENSHOT
                  </button>
                </div>
              </div>

              {/* Learning Path */}
              <div className="p-3.5 rounded-xl bg-[#141716] border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#F5F5F5]">
                    Enrolled Learning Path:
                  </span>
                  <span className="text-[11px] font-mono text-[#D5F5C6] bg-[#D5F5C6]/10 px-2 py-0.5 rounded border border-[#D5F5C6]/30">
                    {tryHackMe.pathStatus}
                  </span>
                </div>
                <div className="text-xs font-medium text-[#D5F5C6] font-sans">
                  {tryHackMe.enrolledPath}
                </div>
              </div>

              {/* Curated Rooms List (Names & Difficulty only, linking to THM profile) */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-semibold text-[#F5F5F5] block uppercase tracking-wider">
                  Curated Practice Rooms:
                </span>
                <div className="space-y-2">
                  {tryHackMe.curatedRooms.map((room, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-2.5 rounded-xl border border-white/10 bg-[#141716]/60 flex items-center justify-between text-xs font-sans hover:bg-[#141716] transition-colors"
                    >
                      <span className="font-medium text-[#F5F5F5]">{room.name}</span>
                      <span
                        className={`px-2 py-0.5 rounded border text-[10px] font-mono font-semibold ${getDifficultyBadge(
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
              <div className="pt-1">
                <a
                  href={tryHackMe.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-[#141716] hover:bg-white/5 text-[#F5F5F5] hover:text-[#D5F5C6] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <span>VIEW ALL ACTIVITY ON TRYHACKME</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Resolution Screenshot Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0E1010] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <h3 className="text-sm font-display font-bold text-[#F5F5F5]">{modalTitle}</h3>
              <button
                onClick={() => setActiveModalImage(null)}
                className="p-1 rounded-lg hover:bg-white/10 text-[#8E9592] hover:text-[#F5F5F5] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto flex-1 flex items-center justify-center">
              <img
                src={activeModalImage}
                alt={modalTitle}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
