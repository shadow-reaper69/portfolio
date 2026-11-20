import React, { useState } from 'react'
import { ExternalLink, Award, Image as ImageIcon, X } from 'lucide-react'
import { writeupsData } from '../../data/writeups'

export const PracticeSection: React.FC = () => {
  const { sectionTitle, intro, portSwigger, tryHackMe } = writeupsData
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null)
  const [modalTitle, setModalTitle] = useState<string>('')

  const openImageModal = (imageUrl: string, title: string) => {
    setActiveModalImage(imageUrl)
    setModalTitle(title)
  }

  return (
    <section id="practice" className="py-16 border-t border-white/10 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        {/* Plain Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F5F5] tracking-tight mb-2">
          {sectionTitle}
        </h2>
        <p className="text-sm text-[#8E9592] max-w-2xl font-sans leading-relaxed mb-8">
          {intro}
        </p>

        {/* 2-Column Split: PortSwigger Academy & TryHackMe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: PortSwigger Web Security Academy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-xl border border-white/10 bg-[#0E1010]/85 shadow-md space-y-5">
              {/* Card Header (Plain text, no icon-in-a-box) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                <div>
                  <h3 className="text-base font-display font-bold text-[#F5F5F5]">
                    PortSwigger Web Security Academy
                  </h3>
                  <p className="text-xs text-[#8E9592] font-sans">
                    Practical web security lab training
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-[#D5F5C6]/15 text-[#D5F5C6] border border-[#D5F5C6]/30 self-start sm:self-auto">
                  <Award className="w-3.5 h-3.5" />
                  <span>{portSwigger.totalLabsCompleted} labs completed</span>
                </span>
              </div>

              {/* Progress Breakdown Metrics from Verified Screenshot */}
              <div className="grid grid-cols-4 gap-2 text-center font-mono">
                <div className="p-2 rounded-lg bg-[#141716] border border-white/10">
                  <div className="text-[10px] text-[#8E9592]">Rank</div>
                  <div className="text-xs font-bold text-[#D5F5C6] mt-0.5">{portSwigger.rank}</div>
                </div>
                <div className="p-2 rounded-lg bg-[#141716] border border-white/10">
                  <div className="text-[10px] text-[#8E9592]">Apprentice</div>
                  <div className="text-xs font-bold text-[#F5F5F5] mt-0.5">{portSwigger.apprenticeLabs}</div>
                </div>
                <div className="p-2 rounded-lg bg-[#141716] border border-white/10">
                  <div className="text-[10px] text-[#8E9592]">Practitioner</div>
                  <div className="text-xs font-bold text-[#F5F5F5] mt-0.5">{portSwigger.practitionerLabs}</div>
                </div>
                <div className="p-2 rounded-lg bg-[#141716] border border-white/10">
                  <div className="text-[10px] text-[#8E9592]">Expert</div>
                  <div className="text-xs font-bold text-[#D5F5C6] mt-0.5">{portSwigger.expertLabs}</div>
                </div>
              </div>

              {/* PortSwigger Screenshot Preview */}
              <div className="relative group rounded-lg overflow-hidden border border-white/10 bg-[#141716]">
                <img
                  src={portSwigger.screenshotUrl}
                  alt="PortSwigger Web Security Academy Progress Screenshot"
                  className="w-full h-36 object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1010] via-transparent to-transparent flex items-end justify-between p-3">
                  <span className="text-[11px] font-mono text-[#F5F5F5] flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[#D5F5C6]" />
                    <span>Verified Lab Progress</span>
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
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-semibold text-[#F5F5F5] block">
                  Confirmed Learning Topics:
                </span>

                <div className="grid grid-cols-1 gap-2">
                  {portSwigger.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3 rounded-lg border border-white/10 bg-[#141716]/60 hover:bg-[#141716] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs sm:text-sm font-display font-bold text-[#F5F5F5]">
                          {topic.title}
                        </h4>
                        <a
                          href={topic.referenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#D5F5C6] hover:underline"
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
            </div>
          </div>

          {/* Right Column: TryHackMe Profile & Rooms (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl border border-white/10 bg-[#0E1010]/85 shadow-md space-y-5">
              {/* Card Header (Plain text, no icon-in-a-box) */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <h3 className="text-base font-display font-bold text-[#F5F5F5]">
                    TryHackMe
                  </h3>
                  <p className="text-xs text-[#8E9592] font-sans">
                    Hands-on CTF &amp; red team labs
                  </p>
                </div>

                <a
                  href={tryHackMe.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[#D5F5C6] text-[#080909] hover:bg-[#c2eeaf] transition-colors"
                >
                  <span>PROFILE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Kept: Top 25% and Enrolled Learning Path (Removed capability & activity tiles) */}
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#141716] border border-white/10">
                <div>
                  <div className="text-[11px] text-[#8E9592] font-mono">Platform Ranking</div>
                  <div className="text-base font-display font-bold text-[#D5F5C6] mt-0.5">
                    {tryHackMe.ranking}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-[#8E9592] font-mono">Path: {tryHackMe.pathStatus}</div>
                  <div className="text-xs font-medium text-[#F5F5F5] font-sans mt-0.5">
                    {tryHackMe.enrolledPath}
                  </div>
                </div>
              </div>

              {/* TryHackMe Screenshot Preview */}
              <div className="relative group rounded-lg overflow-hidden border border-white/10 bg-[#141716]">
                <img
                  src={tryHackMe.screenshotUrl}
                  alt="TryHackMe Profile Screenshot"
                  className="w-full h-36 object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1010] via-transparent to-transparent flex items-end justify-between p-3">
                  <span className="text-[11px] font-mono text-[#F5F5F5] flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[#D5F5C6]" />
                    <span>Verified Profile Heatmap</span>
                  </span>
                  <button
                    onClick={() => openImageModal(tryHackMe.screenshotUrl, 'TryHackMe Verified Profile')}
                    className="px-2.5 py-1 rounded bg-[#D5F5C6] hover:bg-[#c2eeaf] text-[#080909] text-[10px] font-mono font-bold shadow-sm transition-colors"
                  >
                    VIEW SCREENSHOT
                  </button>
                </div>
              </div>

              {/* Curated Rooms with Neutral/Grey Badges (No green badges) */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-semibold text-[#F5F5F5] block">
                  Curated Practice Rooms:
                </span>
                <div className="space-y-1.5">
                  {tryHackMe.curatedRooms.map((room, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-2 rounded-lg border border-white/10 bg-[#141716]/60 flex items-center justify-between text-xs font-sans"
                    >
                      <span className="font-medium text-[#F5F5F5]">{room.name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#8E9592] bg-white/5 border border-white/10">
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
                  className="w-full py-2 px-3 rounded-lg border border-white/10 bg-[#141716] hover:bg-white/5 text-[#F5F5F5] hover:text-[#D5F5C6] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <span>VIEW PROFILE ON TRYHACKME</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Inspection Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0E1010] border border-white/20 rounded-xl overflow-hidden shadow-2xl p-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <h3 className="text-sm font-display font-bold text-[#F5F5F5]">{modalTitle}</h3>
              <button
                onClick={() => setActiveModalImage(null)}
                className="p-1 rounded hover:bg-white/10 text-[#8E9592] hover:text-[#F5F5F5] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto flex-1 flex items-center justify-center">
              <img
                src={activeModalImage}
                alt={modalTitle}
                className="max-w-full max-h-[75vh] object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
