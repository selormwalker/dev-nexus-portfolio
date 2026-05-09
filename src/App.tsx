import './App.css'

function App() {
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

  return (
    <div className="portfolio-container">
      <nav className="glass-nav">
        <div className="logo">SELORM WALKER</div>
        <div className="nav-links">
          <a href="#projects">PROJECTS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>
      
      <main className="hero-section">
        <div className="hero-content">
          <h1>Building the <span className="gradient-text">Future</span> of Code</h1>
          <p>AI Architect | Full Stack Developer | Innovation Enthusiast</p>
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

      <footer className="glass-footer">
        <p>© 2026 Selorm Walker. Powered by Autonomous AI.</p>
      </footer>
    </div>
  )
}

export default App
