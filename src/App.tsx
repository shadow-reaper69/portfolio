import { projects } from './data/projects'
import { writeups } from './data/writeups'

const TODO = ({ children }: { children: string }) => (
  <span className="todo-chip">[TODO: {children}]</span>
)

function Header() {
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#top">Mohamed Afraz Ali</a>
    <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Projects</a><a href="#writeups">Write-ups</a><a href="#contact">Contact</a><a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></nav>
  </div></header>
}

function Hero() {
  return <>
    <section className="hero section" id="top"><div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Chennai, Tamil Nadu · Open to internships, Summer 2027</p>
        <h1>I break lab machines, then write up why they broke.</h1>
        <p className="hero-intro">Second-year B.Tech Cybersecurity student. I practise web application security, and I build my own recon scripts and Wi-Fi defence tools in Python.</p>
        <div className="actions"><a className="button button-primary" href="#work">See projects</a><a className="button button-secondary" href="#writeups">Read write-ups</a></div>
      </div>
      <aside className="profile-card" aria-label="Education and technical focus"><dl>
        <div><dt>Studying</dt><dd>B.Tech CSE, Cybersecurity, year 2</dd></div>
        <div><dt>College</dt><dd>Hindustan Institute of Technology &amp; Science</dd></div>
        <div><dt>Focus</dt><dd>Web application security, recon automation, Wi-Fi defence</dd></div>
        <div><dt>Daily tools</dt><dd>Burp Suite, Kali Linux, Python, Bash</dd></div>
      </dl></aside>
    </div></section>
    <section className="credentials" aria-label="Credentials"><div className="container credentials-grid">
      <article><p className="eyebrow">TryHackMe</p><a className="credential-value" href="https://tryhackme.com/p/afrazali290" target="_blank" rel="noreferrer">Top 25% of users</a><a className="text-link" href="https://tryhackme.com/p/afrazali290" target="_blank" rel="noreferrer">View profile ↗</a></article>
      <article><p className="eyebrow">PortSwigger Web Security Academy</p><p className="credential-value">15 labs completed</p><TODO>PortSwigger profile URL</TODO></article>
      <article><p className="eyebrow">C3SA, CyberWarFare Labs</p><p className="credential-value">Completed</p><TODO>Certificate link</TODO></article>
    </div></section>
  </>
}

function About() {
  return <section className="section" id="about" aria-labelledby="about-title"><div className="container split-section">
    <div><p className="eyebrow">About</p><h2 id="about-title">How I got here</h2></div>
    <div className="prose"><p>I have liked taking technology apart and fixing what is broken since I was a child. Security is where that habit turned into something I want to do for a living.</p>
      <p>What keeps me going is the moment a lab machine finally gives way after hours of failed attempts, and then working out and writing down why it worked.</p>
      <p>Most of my time goes into PortSwigger Web Security Academy labs and TryHackMe rooms, using Burp Suite and Kali Linux, and into Python and Bash scripts that automate the repetitive parts of recon.</p>
    </div>
  </div></section>
}

function Projects() {
  return <section className="section" id="work" aria-labelledby="projects-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2 id="projects-title">Projects</h2></div><p className="section-note">Practical experiments, tools and debugging work.</p></div>
    <div className="project-grid">{projects.map(project => <article className="project-card" key={project.title}>
      <p className="eyebrow">{project.meta}</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
      <dl className="project-details">{project.details.map(detail => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value.startsWith('TODO|') ? <TODO>{detail.value.slice(5)}</TODO> : detail.value}</dd></div>)}</dl>
      <div className="project-link">{project.href ? <a className="text-link" href={project.href} target="_blank" rel="noreferrer">View repository ↗</a> : project.linkTodo ? <TODO>{project.linkTodo}</TODO> : <span className="muted">No public repository link</span>}</div>
    </article>)}</div>
  </div></section>
}

function Writeups() {
  return <section className="writeups-band" id="writeups" aria-labelledby="writeups-title"><div className="container section">
    <div className="section-heading"><div><p className="eyebrow">Learning notes</p><h2 id="writeups-title">Write-ups</h2></div><p className="section-note">Each write-up covers what the bug was, how I found it and how it is fixed, in my own words.</p></div>
    <div className="writeup-list">{writeups.map((item, index) => <article className="writeup-row" key={index}>
      <span className="writeup-platform">{item.platform}</span><strong>{item.title.startsWith('TODO|') ? <TODO>{item.title.slice(5)}</TODO> : item.title}</strong>
      <span className="writeup-class">{item.vulnerability.startsWith('TODO|') ? <TODO>{item.vulnerability.slice(5)}</TODO> : item.vulnerability}</span>
      {item.href ? <a className="text-link" href={item.href}>Read ↗</a> : <TODO>Write-up link</TODO>}
    </article>)}</div>
  </div></section>
}

function Contact() {
  return <footer className="contact-footer" id="contact"><div className="container">
    <div className="contact-heading"><p className="eyebrow">Get in touch</p><h2>Contact</h2><p>Open to internships for Summer 2027. Based in Chennai, Tamil Nadu.</p></div>
    <dl className="contact-list">
      <div><dt>Email</dt><dd><a href="mailto:afrazali290@gmail.com">afrazali290@gmail.com</a></dd></div>
      <div><dt>GitHub</dt><dd><a href="https://github.com/shadow-reaper69/" target="_blank" rel="noreferrer">github.com/shadow-reaper69</a></dd></div>
      <div><dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/in/afraz-ali-1085a1372/" target="_blank" rel="noreferrer">linkedin.com/in/afraz-ali-1085a1372</a></dd></div>
      <div><dt>TryHackMe</dt><dd><a href="https://tryhackme.com/p/afrazali290" target="_blank" rel="noreferrer">tryhackme.com/p/afrazali290</a></dd></div>
      <div><dt>Resume</dt><dd><a href="/resume.pdf" target="_blank" rel="noreferrer">Open resume PDF ↗</a></dd></div>
    </dl>
    <div className="footer-bottom"><span>© 2026 Mohamed Afraz Ali</span><a href="#top">Back to top ↑</a></div>
  </div></footer>
}

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><Hero/><About/><Projects/><Writeups/></main><Contact/></>
}
