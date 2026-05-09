import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <nav className="glass-nav">
        <div className="logo">SELORM WALKER</div>
        <div className="nav-links">
          <span>PROJECTS</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
        </div>
      </nav>
      
      <main className="hero-section">
        <div className="hero-content">
          <h1>Building the <span className="gradient-text">Future</span> of Code</h1>
          <p>AI Architect | Full Stack Developer | Innovation Enthusiast</p>
          <button className="primary-btn">Explore My Work</button>
        </div>
      </main>

      <footer className="glass-footer">
        <p>© 2026 Selorm Walker. Powered by Autonomous AI.</p>
      </footer>
    </div>
  )
}

export default App
