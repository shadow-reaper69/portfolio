# Mohamed Afraz Ali — Cybersecurity Portfolio

> **Security-focused developer | Aspiring Web Application Pentester**  
> Second-year B.Tech CSE (Cybersecurity) student at **Hindustan Institute of Technology & Science**, Chennai, Tamil Nadu.

[![Live Deployment](https://img.shields.io/badge/Live_Portfolio-Vercel-black?style=for-the-badge&logo=vercel)](https://portfolio-delta-self-32.vercel.app)
[![TryHackMe](https://img.shields.io/badge/TryHackMe-Top_25%25-red?style=for-the-badge&logo=tryhackme)](https://tryhackme.com/p/afrazali290)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/afraz-ali-1085a1372/)
[![GitHub](https://img.shields.io/badge/GitHub-shadow--reaper69-181717?style=for-the-badge&logo=github)](https://github.com/shadow-reaper69/)

---

## 📌 Overview

This repository hosts the source code for my personal cybersecurity portfolio. Designed with a high-contrast cyber aesthetic (**Black, White, and Milk Green `#D5F5C6`**), it showcases hands-on web application penetration testing labs, defensive wireless tools, reconnaissance scripting, and firmware reverse engineering.

- **Internship Availability:** Summer 2027
- **Primary Focus:** Web Application Security, VAPT, Reconnaissance Automation, and Defensive Tooling

---

## 🛡️ Security Projects

### 1. [Cryo WiFi](#)
- **Stack:** `C · Defensive Security · 802.11 Frame Monitoring`
- **Summary:** A defensive Wi-Fi monitoring tool in C designed to identify abnormal bursts of 802.11 management deauthentication frames.
- **Key Learnings & Architecture:**
  - Built a real-time frame parser in C to detect spikes in 802.11 management deauthentication traffic.
  - Observed empirical traffic differences: typical baseline (1–10 frames) versus active burst events (100–200 frames).
  - Learned 802.11 frame architecture, raw socket packet parsing, and defensive alerting logic.
- **Status:** *Repository not publicly available*

### 2. [ESP32-C5 Firmware Modification](#)
- **Stack:** `Embedded Systems · Reverse Engineering · ESP32-C5 · FreeRTOS`
- **Summary:** Modified open-source Wi-Fi security firmware to extend network-handling workflows on an ESP32-C5 Super Mini.
- **Key Learnings & Architecture:**
  - Traced and modified network-state handling to expand functionality across multiple wireless networks.
  - Conducted debugging and runtime testing exclusively on an isolated, privately owned network.
  - Learned ESP-IDF embedded development, FreeRTOS task debugging, and firmware state tracking.
- **Status:** *Tested on owned network*

### 3. [Python Recon Automation](#)
- **Stack:** `Python · Security Reconnaissance · VAPT · Subprocess Chaining`
- **Summary:** A Python CLI orchestration prototype uniting reconnaissance tools into a unified assessment pipeline.
- **Key Learnings & Architecture:**
  - Automated target reconnaissance by chaining Subfinder, httpx, Nmap, and Nuclei into a coordinated workflow.
  - Standardized and deduplicated multi-tool CLI outputs to streamline initial attack surface scoping.
  - Learned subprocess coordination, defensive assessment timing, and structured output parsing in Python.
- **Status:** *Repository not publicly available*

### 4. [Trust Chain](https://github.com/shadow-reaper69/Trust-Chain-Beta)
- **Stack:** `Next.js · TypeScript · Solidity · Supabase · IPFS · SHA-256`
- **Summary:** A digital credential verification prototype leveraging SHA-256 document hashing and smart contracts.
- **Key Learnings & Architecture:**
  - Implemented SHA-256 file hashing and QR-enabled PDF certificate generation for tamper-evident verification.
  - Designed smart-contract registry workflows in Solidity with Supabase metadata and IPFS architecture.
  - Learned cryptographic document integrity, smart-contract registry design, and decentralized storage concepts.
- **Status:** [Public Repository](https://github.com/shadow-reaper69/Trust-Chain-Beta)

---

## 🧪 Hands-On Labs & Credentials

### PortSwigger Web Security Academy
- **Labs Completed:** **15 labs** total (5% progress)
- **Level Progress:** 8 / 61 Apprentice &middot; 6 / 173 Practitioner &middot; 1 / 39 Expert
- **Hall of Fame Ranking:** `# 267569`
- **Confirmed Topics:** API Testing, Server-Side Request Forgery (SSRF), Cross-Site Request Forgery (CSRF), and Broken Access Control.

### TryHackMe
- **Ranking:** **Top 25%**
- **Capability Score:** 38 &middot; **Annual Events:** 226
- **Enrolled Learning Path:** Web Application Red Teaming (*In progress*)
- **Practiced Rooms:** Wgel CTF, Brooklyn Nine Nine, Bounty Hacker, Corridor, Neighbour, XSS, and Custom Tooling Using Python.

### Certification
- **Certified Cyber Security Analyst (C3SA)** &mdash; CyberWarFare Labs
- **Credential ID:** `C3SA-6ad0ccf6b6d122ea6a91de63` (Verified & linked in app)

---

## 🧰 Technical Tooling

| Domain | Tools & Technologies |
|---|---|
| **Web Application Security** | Burp Suite (Proxy, Repeater), PortSwigger Labs, Access Control & IDOR, SSRF & CSRF Testing, API Endpoint Testing |
| **Reconnaissance & Scanning** | Subfinder, httpx, Nmap, Nuclei, ffuf, Attack Surface Mapping |
| **Systems & Scripting** | Linux (Kali / Ubuntu), Python, C, Bash Scripting, Git & Version Control |

---

## 💻 Tech Stack & Architecture

- **Frontend:** React 19 + TypeScript
- **Tooling & Bundler:** Vite 8
- **Styling:** Tailwind CSS 4 + Custom Cyber Theme
- **Interactive UI:** `<DotGrid />` interactive canvas + `<LetterGlitch />`
- **Typography:** Montserrat (Headings & Monograms) &middot; Poppins (Body & UI)
- **Code Quality:** Oxlint (0 errors, 0 warnings) + strict TypeScript checking (`tsc -b`)
- **Hosting:** Vercel Continuous Deployment

---

## 🚀 Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/shadow-reaper69/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local dev server (http://localhost:3000)
npm run dev

# Run production build & typecheck
npm run build

# Run linter
npm run lint
```

---

## 🏷️ GitHub Topics

`portfolio` &middot; `react` &middot; `typescript` &middot; `cybersecurity` &middot; `web-security` &middot; `vapt` &middot; `portswigger` &middot; `tryhackme`

---

## 📄 License & Attribution

Designed and developed by **Mohamed Afraz Ali** &copy; 2026. All rights reserved.
