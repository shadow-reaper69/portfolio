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
    <section id="practice" className="py-16 border-t border-[var(--border-color)] bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        {/* Plain Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight mb-2">
          {sectionTitle}
        </h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-2xl font-sans leading-relaxed mb-8">
          {intro}
        </p>

        {/* 2-Column Split: PortSwigger Academy & TryHackMe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: PortSwigger Web Security Academy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]/85 backdrop-blur-md shadow-sm space-y-5">
              {/* Card Header (Plain text, no icon-in-a-box) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-color)]">
                <div>
                  <h3 className="text-base font-display font-bold text-[var(--text-primary)]">
                    PortSwigger Web Security Academy
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-sans">
                    Practical web security lab training
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)] self-start sm:self-auto">
                  <Award className="w-3.5 h-3.5" />
                  <span>{portSwigger.totalLabsCompleted} labs completed</span>
                </span>
              </div>

              {/* Progress Breakdown Metrics from Verified Screenshot */}
              <div className="grid grid-cols-4 gap-2 text-center font-mono">
                <div className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="text-[10px] text-[var(--text-secondary)]">Rank</div>
                  <div className="text-xs font-bold text-[var(--accent)] mt-0.5">{portSwigger.rank}</div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="text-[10px] text-[var(--text-secondary)]">Apprentice</div>
                  <div className="text-xs font-bold text-[var(--text-primary)] mt-0.5">{portSwigger.apprenticeLabs}</div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="text-[10px] text-[var(--text-secondary)]">Practitioner</div>
                  <div className="text-xs font-bold text-[var(--text-primary)] mt-0.5">{portSwigger.practitionerLabs}</div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="text-[10px] text-[var(--text-secondary)]">Expert</div>
                  <div className="text-xs font-bold text-[var(--accent)] mt-0.5">{portSwigger.expertLabs}</div>
                </div>
              </div>

              {/* PortSwigger Screenshot Preview */}
              <div className="relative group rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)]">
                <img
                  src={portSwigger.screenshotUrl}
                  alt="PortSwigger Web Security Academy Progress Screenshot"
                  className="w-full h-36 object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent flex items-end justify-between p-3">
                  <span className="text-[11px] font-mono text-[var(--text-primary)] flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>Verified Lab Progress</span>
                  </span>
                  <button
                    onClick={() => openImageModal(portSwigger.screenshotUrl, 'PortSwigger Hall of Fame Progress')}
                    className="px-2.5 py-1 rounded bg-[var(--accent)] hover:opacity-90 text-[var(--accent-text)] text-[10px] font-mono font-bold shadow-sm transition-opacity"
                  >
                    VIEW SCREENSHOT
                  </button>
                </div>
              </div>

              {/* Confirmed Topics List */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-semibold text-[var(--text-primary)] block">
                  Confirmed Learning Topics:
                </span>

                <div className="grid grid-cols-1 gap-2">
                  {portSwigger.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs sm:text-sm font-display font-bold text-[var(--text-primary)]">
                          {topic.title}
                        </h4>
                        <a
                          href={topic.referenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--accent)] hover:underline"
                        >
                          <span>Official Docs</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
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
            <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]/85 backdrop-blur-md shadow-sm space-y-5">
              {/* Card Header (Plain text, no icon-in-a-box) */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
                <div>
                  <h3 className="text-base font-display font-bold text-[var(--text-primary)]">
                    TryHackMe
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-sans">
                    Hands-on CTF &amp; red team labs
                  </p>
                </div>

                <a
                  href={tryHackMe.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[var(--accent)] text-[var(--accent-text)] hover:opacity-90 transition-opacity"
                >
                  <span>PROFILE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Kept: Top 25% and Enrolled Learning Path */}
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                <div>
                  <div className="text-[11px] text-[var(--text-secondary)] font-mono">Platform Ranking</div>
                  <div className="text-base font-display font-bold text-[var(--accent)] mt-0.5">
                    {tryHackMe.ranking}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-[var(--text-secondary)] font-mono">Path: {tryHackMe.pathStatus}</div>
                  <div className="text-xs font-medium text-[var(--text-primary)] font-sans mt-0.5">
                    {tryHackMe.enrolledPath}
                  </div>
                </div>
              </div>

              {/* TryHackMe Screenshot Preview */}
              <div className="relative group rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)]">
                <img
                  src={tryHackMe.screenshotUrl}
                  alt="TryHackMe Profile Screenshot"
                  className="w-full h-36 object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent flex items-end justify-between p-3">
                  <span className="text-[11px] font-mono text-[var(--text-primary)] flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>Verified Profile Heatmap</span>
                  </span>
                  <button
                    onClick={() => openImageModal(tryHackMe.screenshotUrl, 'TryHackMe Verified Profile')}
                    className="px-2.5 py-1 rounded bg-[var(--accent)] hover:opacity-90 text-[var(--accent-text)] text-[10px] font-mono font-bold shadow-sm transition-opacity"
                  >
                    VIEW SCREENSHOT
                  </button>
                </div>
              </div>

              {/* Curated Rooms with Neutral/Grey Badges */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-semibold text-[var(--text-primary)] block">
                  Curated Practice Rooms:
                </span>
                <div className="space-y-1.5">
                  {tryHackMe.curatedRooms.map((room, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-between text-xs font-sans"
                    >
                      <span className="font-medium text-[var(--text-primary)]">{room.name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--bg-surface)] border border-[var(--border-color)]">
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
                  className="w-full py-2 px-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors"
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
            className="relative max-w-4xl w-full max-h-[90vh] bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-2xl p-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)] mb-3">
              <h3 className="text-sm font-display font-bold text-[var(--text-primary)]">{modalTitle}</h3>
              <button
                onClick={() => setActiveModalImage(null)}
                className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
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
