import React, { useState, useRef, useEffect } from 'react'
import { Terminal, CornerDownLeft, Copy, Check, ExternalLink } from 'lucide-react'

interface OutputItem {
  id: string
  command?: string
  result: React.ReactNode
  isError?: boolean
}

const COMMAND_SUGGESTIONS = ['whoami', 'skills', 'projects', 'journey', 'certs', 'contact', 'clear']

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(-1)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalEndRef = useRef<HTMLDivElement>(null)

  const [outputList, setOutputList] = useState<OutputItem[]>([
    {
      id: 'init-1',
      result: (
        <div className="text-xs text-[#8E9592] space-y-1">
          <p className="text-[#D5F5C6] font-semibold">afraz@kali:~$ session --mode live</p>
          <p className="leading-relaxed">
            Welcome. Type <span className="text-[#D5F5C6] underline font-semibold">help</span> to inspect available commands or use the quick tags below.
          </p>
        </div>
      )
    }
  ])

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [outputList])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    setHistory((prev) => [...prev, cmd])
    setHistoryIndex(-1)

    let resultNode: React.ReactNode

    switch (trimmed) {
      case 'help':
        resultNode = (
          <div className="space-y-1.5 text-xs text-[#8E9592]">
            <p className="text-[#F5F5F5] font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[11px]">
              <div><span className="text-[#D5F5C6]">whoami</span> - Identity & positioning</div>
              <div><span className="text-[#D5F5C6]">skills</span> - Verified security skills</div>
              <div><span className="text-[#D5F5C6]">projects</span> - TrustChain & tooling</div>
              <div><span className="text-[#D5F5C6]">journey</span> - Practical lab roadmap</div>
              <div><span className="text-[#D5F5C6]">certs</span> - C3SA & credentials</div>
              <div><span className="text-[#D5F5C6]">contact</span> - Direct email & profiles</div>
              <div><span className="text-[#D5F5C6]">clear</span> - Reset terminal screen</div>
            </div>
          </div>
        )
        break

      case 'whoami':
        resultNode = (
          <div className="space-y-1 text-xs text-[#F5F5F5]">
            <p className="font-semibold text-[#D5F5C6]">MOHAMED AFRAZ ALI</p>
            <p className="text-[#8E9592]">2nd Year B.Tech CSE Cybersecurity Undergraduate</p>
            <p className="text-[#8E9592]">Aspiring Penetration Tester & Security-Focused Developer</p>
            <p className="text-xs text-[#D5F5C6]/90 mt-1">Focus: Web application security, Burp Suite labs, and automated reconnaissance.</p>
          </div>
        )
        break

      case 'skills':
        resultNode = (
          <div className="space-y-1.5 text-xs text-[#8E9592]">
            <p className="text-[#F5F5F5] font-semibold">Verified Technical Domains:</p>
            <p><span className="text-[#D5F5C6]">[Web Security]</span> OWASP Top 10, PortSwigger Labs, Burp Suite, HTTP/S Internals</p>
            <p><span className="text-[#D5F5C6]">[Reconnaissance]</span> Subdomain discovery, Nmap, ffuf, Gobuster, Fingerprinting</p>
            <p><span className="text-[#D5F5C6]">[Systems & Tools]</span> Linux/Kali, Bash scripting, Networking (TCP/IP, DNS)</p>
            <p><span className="text-[#D5F5C6]">[Code & AI]</span> Python automation, React/TS, AI-assisted development</p>
          </div>
        )
        break

      case 'projects':
        resultNode = (
          <div className="space-y-2 text-xs text-[#8E9592]">
            <div className="border-l-2 border-[#D5F5C6] pl-2.5">
              <div className="flex items-center gap-2">
                <span className="text-[#F5F5F5] font-semibold">1. TrustChain</span>
                <span className="text-[10px] text-[#D5F5C6] border border-[#D5F5C6]/30 px-1.5 rounded">Live</span>
              </div>
              <p className="text-[11px] text-[#8E9592] mt-0.5">Universal document verification platform utilizing cryptographic logic.</p>
              <a
                href="https://trustchain-v2.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-[#D5F5C6] underline hover:opacity-80 inline-flex items-center gap-1 text-[11px] mt-0.5"
              >
                <span>https://trustchain-v2.vercel.app/</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="border-l-2 border-white/20 pl-2.5">
              <span className="text-[#F5F5F5] font-semibold">2. SentinelX</span>
              <p className="text-[11px] text-[#8E9592] mt-0.5">Security-focused rate-limiting and request path-tracing gateway.</p>
            </div>

            <div className="border-l-2 border-white/20 pl-2.5">
              <span className="text-[#F5F5F5] font-semibold">3. Recon Automation Toolkit</span>
              <p className="text-[11px] text-[#8E9592] mt-0.5">Python + Bash pipeline for accelerated enumeration and footprinting.</p>
            </div>
          </div>
        )
        break

      case 'journey':
        resultNode = (
          <div className="space-y-1.5 text-xs text-[#8E9592]">
            <p className="text-emerald-400 font-semibold">[COMPLETED] Networking foundations, Linux administration, baseline TryHackMe labs.</p>
            <p className="text-amber-300 font-semibold">[CURRENTLY LEARNING] PortSwigger Practitioner labs, Burp Suite workflows, API security testing.</p>
            <p className="text-sky-300 font-semibold">[NEXT TARGET] C3SA completion, practical pentest roadmaps, bug bounty recon automation.</p>
          </div>
        )
        break

      case 'certs':
        resultNode = (
          <div className="text-xs text-[#8E9592] space-y-1">
            <p className="text-[#F5F5F5] font-semibold">Certifications Track:</p>
            <p><span className="text-[#D5F5C6]">C3SA</span> — Certified Cybersecurity Specialist & Associate</p>
            <p>Issuer: CyberWarFare Labs (Hands-on practical security curriculum)</p>
          </div>
        )
        break

      case 'contact':
        resultNode = (
          <div className="space-y-1 text-xs text-[#8E9592]">
            <p><span className="text-[#F5F5F5]">Email:</span> <a href="mailto:afrazali290@gmail.com" className="text-[#D5F5C6] underline">afrazali290@gmail.com</a></p>
            <p><span className="text-[#F5F5F5]">GitHub:</span> <a href="https://github.com/shadow-reaper69" target="_blank" rel="noreferrer" className="text-[#D5F5C6] underline">github.com/shadow-reaper69</a></p>
            <p><span className="text-[#F5F5F5]">LinkedIn:</span> <a href="https://www.linkedin.com/in/afraz-ali-1085a1372/" target="_blank" rel="noreferrer" className="text-[#D5F5C6] underline">linkedin.com/in/afraz-ali-1085a1372/</a></p>
          </div>
        )
        break

      case 'clear':
        setOutputList([])
        setInput('')
        return

      default:
        resultNode = (
          <p className="text-xs text-rose-400">
            command not found: {cmd}. Type <span className="text-[#D5F5C6] underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for valid commands.
          </p>
        )
    }

    setOutputList((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: cmd,
        result: resultNode,
      },
    ])
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // Tab auto-completion
      const match = COMMAND_SUGGESTIONS.find((cmd) => cmd.startsWith(input.trim().toLowerCase()))
      if (match) {
        setInput(match)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex
        setHistoryIndex(nextIdx)
        setInput(history[history.length - 1 - nextIdx] || '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1
        setHistoryIndex(nextIdx)
        setInput(history[history.length - 1 - nextIdx] || '')
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('afrazali290@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full rounded-xl border border-white/10 bg-[#0E1010]/95 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/5 bg-[#141716]/80 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[#8E9592] text-[11px] ml-2 flex items-center gap-1.5 font-medium">
            <Terminal className="w-3.5 h-3.5 text-[#D5F5C6]" />
            afraz@kali: ~
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#8E9592]">
          <button
            onClick={copyEmail}
            className="flex items-center gap-1 hover:text-[#D5F5C6] transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6]"
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#D5F5C6]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 max-h-[300px] min-h-[190px] overflow-y-auto space-y-3.5 scrollbar-thin">
        {outputList.map((item) => (
          <div key={item.id} className="space-y-1">
            {item.command && (
              <div className="flex items-center gap-1.5 text-xs text-[#8E9592]">
                <span className="text-[#D5F5C6]">❯</span>
                <span className="text-[#F5F5F5]">{item.command}</span>
              </div>
            )}
            <div>{item.result}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Prompt */}
      <div className="flex items-center px-4 py-2.5 border-t border-white/5 bg-[#090B0B]">
        <span className="text-[#D5F5C6] mr-2">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help' or command (Tab to complete)..."
          className="w-full bg-transparent text-[#F5F5F5] placeholder-[#5A625E] focus:outline-none font-mono text-xs"
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal command input"
        />
        <button
          onClick={() => handleCommand(input)}
          className="ml-2 text-[#8E9592] hover:text-[#D5F5C6] transition-colors p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6]"
          aria-label="Execute command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Interactive Quick Command Chips */}
      <div className="flex flex-wrap items-center gap-1.5 px-3 py-2 bg-[#090B0B]/70 border-t border-white/5 text-[10px]">
        <span className="text-[#5A625E] mr-1">Quick:</span>
        {COMMAND_SUGGESTIONS.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded border border-white/5 bg-[#141716] text-[#8E9592] hover:text-[#D5F5C6] hover:border-[#D5F5C6]/30 transition-all font-mono focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6]"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  )
}
