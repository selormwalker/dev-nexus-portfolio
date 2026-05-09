import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [gitStats, setGitStats] = useState({ repos: 0, followers: 0, following: 0 })

  useEffect(() => {
    fetch('https://api.github.com/users/selormwalker')
      .then(res => res.json())
      .then(data => {
        setGitStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
          following: data.following || 0
        })
      })
      .catch(err => console.error("Error fetching GitHub data:", err))
  }, [])

  const projects = [
    {
      title: "Jarvis AI CLI",
      description: "Autonomous task manager with natural language parsing and subtask generation.",
      tech: ["Python", "Gemini AI", "SQLite"],
      link: "https://github.com/selormwalker/jarvis-cli"
    },
    {
      title: "AI Code Guardian",
      description: "Automated code reviewer that provides intelligent feedback using LLMs.",
      tech: ["Python", "Gemini AI", "Typer"],
      link: "https://github.com/selormwalker/ai-code-guardian"
    },
    {
      title: "Data Pulse Scraper",
      description: "Real-time web scraper and market trend visualizer.",
      tech: ["Python", "BS4", "Matplotlib"],
      link: "https://github.com/selormwalker/data-pulse-scraper"
    }
  ]

  const skills = [
    { name: "AI Architecture", level: "Advanced" },
    { name: "Full Stack Development", level: "Expert" },
    { name: "Cloud Infrastructure", level: "Intermediate" },
    { name: "Data Engineering", level: "Advanced" }
  ]

  return (
    <div className="portfolio-container">
      <nav className="glass-nav">
        <div className="logo">SELORM WALKER</div>
        <div className="nav-links">
          <a href="#projects">PROJECTS</a>
          <a href="#skills">SKILLS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>
      
      <main className="hero-section">
        <div className="hero-content">
          <h1>Building the <span className="gradient-text">Future</span> of Code</h1>
          <p>AI Architect | Full Stack Developer | Innovation Enthusiast</p>
          <div className="hero-stats">
            <div className="stat-pill">
              <span className="stat-value">{gitStats.repos}</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat-pill">
              <span className="stat-value">{gitStats.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-pill pulse">
              <span className="stat-label">System Active</span>
            </div>
          </div>
          <a href="#projects" className="primary-btn">Explore My Work</a>
        </div>
      </main>

      <section id="projects" className="projects-section">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-glass">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">View Repository →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "85%" : "70%" }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="glass-footer">
        <p>© 2026 Selorm Walker. Powered by Autonomous AI.</p>
      </footer>
    </div>
  )
}

export default App
