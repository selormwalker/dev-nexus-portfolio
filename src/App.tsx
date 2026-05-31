import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, ExternalLink, Cpu, Globe, Layers, Zap, Sun, Moon, Monitor } from 'lucide-react'
import './App.css'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
}

function App() {
  const [gitStats, setGitStats] = useState({ repos: 0, followers: 0, following: 0 })
  const [repos, setRepos] = useState<Repo[]>([])
  const [theme, setTheme] = useState<'cyber' | 'neon' | 'minimal'>('cyber')
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Set theme on body
    document.body.setAttribute('data-theme', theme)
    document.body.className = isDarkMode ? 'dark' : 'light'
  }, [theme, isDarkMode])

  useEffect(() => {
    // Fetch User Stats
    fetch('https://api.github.com/users/selormwalker')
      .then(res => res.json())
      .then(data => {
        setGitStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
          following: data.following || 0
        })
      })
      .catch(err => console.error("Error fetching GitHub stats:", err))

    // Fetch Top Repositories
    fetch('https://api.github.com/users/selormwalker/repos?sort=updated&per_page=10')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const filtered = data
            .filter(r => !r.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6)
          setRepos(filtered)
        }
      })
      .catch(err => console.error("Error fetching repos:", err))
  }, [])

  const skills = [
    { name: "AI Architecture", level: 95, icon: <Cpu size={18} /> },
    { name: "Full Stack Dev", level: 98, icon: <Globe size={18} /> },
    { name: "Low-Latency C++", level: 85, icon: <Zap size={18} /> },
    { name: "Blockchain Core", level: 90, icon: <Layers size={18} /> }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <div className={`nexus-layout ${theme}-theme`}>
      {/* Dynamic Background */}
      <div className="bg-glow"></div>
      <div className="mesh-bg"></div>

      <nav className="navbar">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="nav-logo">
          <span className="logo-icon">✦</span> NEXUS
        </motion.div>
        
        <div className="nav-controls">
           <div className="theme-switcher">
              <button onClick={() => setTheme('cyber')} className={theme === 'cyber' ? 'active' : ''}>Cyber</button>
              <button onClick={() => setTheme('neon')} className={theme === 'neon' ? 'active' : ''}>Neon</button>
              <button onClick={() => setTheme('minimal')} className={theme === 'minimal' ? 'active' : ''}>Zen</button>
           </div>
           <button onClick={() => setIsDarkMode(!isDarkMode)} className="mode-toggle">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
           </button>
        </div>
      </nav>

      <section className="hero">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-inner"
        >
          <div className="badge">VERSION 2.0 ACTIVE</div>
          <h1 className="hero-title">
            Architecting <span className="text-glow">Autonomous</span> Systems
          </h1>
          <p className="hero-subtitle">
            Senior Software Engineer & AI Researcher building the next generation of decentralized infrastructure.
          </p>
          
          <div className="hero-actions">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
              View Ecosystem
            </motion.button>
            <div className="social-links">
               <a href="https://github.com/selormwalker"><Github size={20} /></a>
               <a href="#"><Linkedin size={20} /></a>
               <a href="#"><Twitter size={20} /></a>
               <a href="#"><Mail size={20} /></a>
            </div>
          </div>

          <div className="hero-stats-grid">
             <div className="stat-card">
                <span className="stat-num">{gitStats.repos}</span>
                <span className="stat-txt">REPOS</span>
             </div>
             <div className="stat-card">
                <span className="stat-num">{gitStats.followers}</span>
                <span className="stat-txt">FOLLOWERS</span>
             </div>
             <div className="stat-card">
                <span className="stat-num">∞</span>
                <span className="stat-txt">LATENCY</span>
             </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-hdr">FEATURED <span className="text-accent">NODES</span></h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="repos-grid"
        >
          {repos.map((repo) => (
            <motion.div key={repo.id} variants={itemVariants} className="repo-card">
              <div className="repo-header">
                <span className="repo-lang">{repo.language || 'Code'}</span>
                <div className="repo-stars"><Zap size={12} fill="currentColor"/> {repo.stargazers_count}</div>
              </div>
              <h3 className="repo-name">{repo.name}</h3>
              <p className="repo-desc">{repo.description}</p>
              <div className="repo-footer">
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-btn">
                  Initialize <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section">
        <h2 className="section-hdr">NEURAL <span className="text-accent">STACK</span></h2>
        <div className="skills-nexus">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="skill-nexus-item"
            >
               <div className="skill-nexus-hdr">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-label">{skill.name}</span>
                  <span className="skill-perc">{skill.level}%</span>
               </div>
               <div className="skill-nexus-bar">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="skill-nexus-progress"
                  />
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="footer">
         <div className="footer-line"></div>
         <p>© 2026 SELORM WALKER | DEPLOYED VIA NEXUS-CLI</p>
      </footer>
    </div>
  )
}

export default App
