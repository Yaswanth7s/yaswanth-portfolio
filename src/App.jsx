import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Smartphone, ExternalLink, Code2, Layers, Cpu, Database, Wrench, Heart, X, Phone, Download } from 'lucide-react';

function App() {
  const [contactMethod, setContactMethod] = useState('email'); // 'email' or 'call'

  // Simple scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Background Orbs */}
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>
      <div className="bg-glow-3"></div>

      {/* Navigation */}
      <nav className="navbar">
        <a href="#" className="nav-brand">Yaswanth Reddy.</a>
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#achievements" className="nav-link">Certificates</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      <main>
        {/* Header / Hero Section */}
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-content text-left">
              <span className="hero-greeting">Hello, I'm</span>
              <h1 className="hero-title">
                Somagattu <br />
                <span style={{ whiteSpace: 'nowrap' }}>Yaswanth Reddy</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Web Developer</h2>
              <p className="hero-desc">
                Computer Science student skilled in full-stack development, problem-solving, and building scalable web applications. Experienced in modern technologies like React, Node.js, PHP, and MySQL, with a passion for creating efficient and impactful solutions.
              </p>

              <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
                <a href="/Somagattu_Yaswanth_Reddy_CV.pdf" download="Somagattu_Yaswanth_Reddy_CV.pdf" className="btn btn-primary">
                  <Download size={18} /> Download CV
                </a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
              </div>

              <div className="social-links" style={{ justifyContent: 'flex-start' }}>
                <a href="https://github.com/Yaswanth7s" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/yaswanthsomagattu/?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="hero-image-container animate-on-scroll">
              <div className="image-wrapper">
                <img src="/profile.png" alt="Somagattu Yaswanth Reddy" className="profile-image" />
                <div className="image-backdrop"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="animate-on-scroll" style={{ paddingTop: '100px', marginTop: '-100px' }}>
          <h2 className="section-title">About Me</h2>
          <div className="about-content glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Hello! I am <strong style={{ color: 'var(--text-primary)' }}>Somagattu Yaswanth Reddy</strong>, an aspiring Full Stack Web Developer with a passion for building robust and interactive web applications. Currently, I am pursuing my Bachelor of Technology in Computer Science and Engineering at Lovely Professional University.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              My journey in coding began with a strong curiosity to build dynamic digital experiences. Over the years, I have honed my expertise in frontend development using <strong>ReactJS</strong> and <strong>Tailwind CSS</strong>, alongside backend engineering with <strong>NodeJS</strong>, <strong>PHP</strong>, and <strong>MySQL</strong>. Creating performant, scalable, and beautifully designed user interfaces is what drives me.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Beyond web development, I am an active problem solver on LeetCode with over 100+ problems solved, constantly pushing myself to think algorithmically and optimize code efficiency. Whether it's crafting clean architectures or debugging tough issues, I love the process of turning ideas into functional software reality.
            </p>

            <div style={{
              marginTop: '2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <p style={{
                fontSize: '1.25rem',
                color: '#ffffff',
                fontStyle: 'italic',
                marginBottom: '0.5rem'
              }}>
                "First, solve the problem. Then, write the code."
              </p>
              <span style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)'
              }}>
                — John Johnson
              </span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="animate-on-scroll">
          <h2 className="section-title">Tech Stack</h2>

          <div className="skills-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>

            {/* Category 1: Languages */}
            <div className="skill-category-block" style={{ padding: '2rem', border: '1px solid var(--card-border)', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-1)', fontFamily: 'monospace', fontSize: '1.1rem' }}>01</span>
                <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0, fontWeight: '700' }}>Languages</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1.2rem' }}>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width="40" height="40" alt="C++" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>C++</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="40" height="40" alt="JS" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>JavaScript</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="40" height="40" alt="Python" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>Python</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="40" height="40" alt="HTML" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>HTML5</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="40" height="40" alt="CSS" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>CSS3</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="40" height="40" alt="PHP" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>PHP</span>
                </div>
              </div>
            </div>

            {/* Category 2: Frameworks & Libraries */}
            <div className="skill-category-block" style={{ padding: '2rem', border: '1px solid var(--card-border)', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-1)', fontFamily: 'monospace', fontSize: '1.1rem' }}>02</span>
                <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0, fontWeight: '700' }}>Libraries & Frameworks</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1.2rem' }}>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="40" height="40" alt="React" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>ReactJS</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="40" height="40" alt="Node" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>Node.js</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="40" height="40" alt="Tailwind" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Category 3: Tools & Platforms */}
            <div className="skill-category-block" style={{ padding: '2rem', border: '1px solid var(--card-border)', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-1)', fontFamily: 'monospace', fontSize: '1.1rem' }}>03</span>
                <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0, fontWeight: '700' }}>Tools & Platforms</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1.2rem' }}>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="40" height="40" alt="Git" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>Git</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="40" height="40" style={{ filter: 'invert(1)' }} alt="GitHub" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>GitHub</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" width="40" height="40" alt="Postman" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>Postman</span>
                </div>
              </div>
            </div>

            {/* Category 4: Core CS Fundamentals */}
            <div className="skill-category-block" style={{ padding: '2rem', border: '1px solid var(--card-border)', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-1)', fontFamily: 'monospace', fontSize: '1.1rem' }}>04</span>
                <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '1px', margin: 0, fontWeight: '700' }}>Core CS Fundamentals</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1.2rem' }}>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <Database size={40} color="var(--accent-1)" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>DBMS</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <Cpu size={40} color="var(--accent-1)" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>OS</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <Smartphone size={40} color="var(--accent-1)" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>CN</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <Database size={40} color="var(--accent-1)" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>SQL</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="40" height="40" alt="MySQL" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>MySQL</span>
                </div>
                <div className="glass-card skill-hover-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', gap: '0.8rem', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                  <Code2 size={40} color="var(--accent-1)" />
                  <span style={{ fontWeight: '600', fontSize: '1rem' }}>OOPs</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="animate-on-scroll">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">

            {/* Project 1 */}
            <div className="glass-card project-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden', borderBottom: '1px solid var(--card-border)' }}>
                <img src="/startup-circle.png" alt="Startup Circle" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="project-header">
                  <div>
                    <h3 className="project-title">Startup Circle</h3>
                    <div className="project-subtitle">Startup Event & Networking Platform</div>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/Yaswanth7s/StartupHub" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Repo"><Github size={20} /></a>
                  </div>
                </div>
                <div className="project-date">Jul '25 - Aug '25</div>
                <div className="project-desc" style={{ flex: 1 }}>
                  <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    Startup Circle is a dynamic web platform designed to bridge the gap between ambitious startup founders and potential investors. Built with a responsive Tailwind CSS frontend and a robust PHP/MySQL backend, it provides a centralized hub for seamless event discovery, secure user authentication, and active networking within the entrepreneurial community.
                  </p>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">APIs</span>
                  <span className="tech-tag">SQL</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card project-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden', borderBottom: '1px solid var(--card-border)' }}>
                <img src="/electricity-bill.png" alt="Electricity Bill Tracker" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="project-header">
                  <div>
                    <h3 className="project-title">Electricity Bill Tracker</h3>
                    <div className="project-subtitle">Monitoring & Billing Platform</div>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/Yaswanth7s/Dynamic-Electricity-Bill-Tracker" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Repo"><Github size={20} /></a>
                  </div>
                </div>
                <div className="project-date">Jun '25 - Jul '25</div>
                <div className="project-desc" style={{ flex: 1 }}>
                  <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    A smart, real-time energy monitoring solution that empowers users to track their electricity consumption down to the individual device level. By leveraging custom algorithms built in Python and C++, the system processes time-series data to deliver highly optimized cost-analysis and dynamic visual analytics, helping users identify energy drains and actively reduce their utility bills.
                  </p>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">C++</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Experience / Training Section */}
        <section id="experience" className="animate-on-scroll">
          <h2 className="section-title">Summer Training</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{ maxWidth: '650px', width: '100%', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderBottom: '1px solid var(--card-border)' }}>
                <img src="/training.png" alt="Logic Building Training" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>Logic Building – Programming and Data Structures</h3>
                  <span style={{ fontSize: '1rem', color: 'var(--accent-1)', fontFamily: 'monospace' }}>Jun '25 - Jul '25</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                    <li style={{ marginBottom: '0.8rem' }}>Completed intensive training focused on logic building, programming fundamentals, and Data Structures & Algorithms (DSA).</li>
                    <li style={{ marginBottom: '0.8rem' }}>Solved real-world problems using structured methodologies, optimized coding techniques, and algorithmic thinking.</li>
                    <li>Implemented multiple mini-projects and coding exercises, enhancing problem-solving skills and efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="animate-on-scroll">
          <h2 className="section-title">Education</h2>
          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">Lovely Professional University</h3>
                    <div className="timeline-subtitle">Bachelor of Technology - Computer Science and Engineering</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="timeline-meta" style={{ display: 'block' }}>Since Aug '23</span>
                    <span style={{ fontSize: '0.85rem' }}>Punjab, India</span>
                  </div>
                </div>
                <div className="timeline-details">
                  <p style={{ marginBottom: '0.8rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                    Currently pursuing a comprehensive degree in Computer Science, actively engaging with core engineering concepts, fast-paced modern software development practices, and advanced algorithmic problem-solving to architect robust technological solutions.
                  </p>
                  <strong style={{ color: 'var(--text-primary)' }}>CGPA:</strong> 7.57
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">Sri Chaitanya Junior College</h3>
                    <div className="timeline-subtitle">Intermediate</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="timeline-meta" style={{ display: 'block' }}>Apr '21 - Mar '23</span>
                    <span style={{ fontSize: '0.85rem' }}>Tirupati, AP</span>
                  </div>
                </div>
                <div className="timeline-details">
                  <p style={{ marginBottom: '0.8rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                    Built a rigorous foundation in advanced mathematics, physics, and chemistry. This disciplined environment cultivated the strong analytical thinking and quantitative skills that natively paved the way for my transition into complex computer science concepts.
                  </p>
                  <strong style={{ color: 'var(--text-primary)' }}>Percentage:</strong> 95.0%
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">Blue Moon International School</h3>
                    <div className="timeline-subtitle">Matriculation</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="timeline-meta" style={{ display: 'block' }}>Apr '20 - Mar '21</span>
                    <span style={{ fontSize: '0.85rem' }}>Anantapur, AP</span>
                  </div>
                </div>
                <div className="timeline-details">
                  <p style={{ marginBottom: '0.8rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                    Consistently demonstrated strong academic excellence and an early, eager curiosity for continuous learning. Established a dedicated work ethic and foundational discipline that continues to drive my entire educational and professional journey today.
                  </p>
                  <strong style={{ color: 'var(--text-primary)' }}>Percentage:</strong> 96.0%
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Certificates & Achievements */}
        <section id="achievements" className="animate-on-scroll">
          <h2 className="section-title">Certifications & Achievements</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Left Column: Certifications */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ borderLeft: '4px solid var(--accent-2)', paddingLeft: '1rem', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', margin: 0, fontWeight: '700' }}>
                Professional Certifications
              </h3>

              {/* Certificate 1 */}
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                <div style={{ width: '100%', height: '180px', background: 'transparent', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', overflow: 'hidden', position: 'relative' }}>
                  <span style={{ position: 'absolute', color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '1px' }}>CERTIFICATE IMAGE</span>
                  <img src="/certificate-1.jpg" alt="Certificate" style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }} onError={e => e.target.style.display = 'none'} />
                </div>

                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-1)', margin: '0 0 0.5rem 0', fontWeight: '600' }}>Cloud Computing</h4>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>NPTEL</span>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Completed a structured, comprehensive training program focusing on scalable cloud architectures, virtualization layers, and modern data center deployments.
                </p>

                <a href="https://drive.google.com/file/d/1D9ZgM6dNbucfvgTRFbmo86IKxGaw1ZEp/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>

              {/* Certificate 2 */}
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                <div style={{ width: '100%', height: '180px', background: 'transparent', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', overflow: 'hidden', position: 'relative' }}>
                  <span style={{ position: 'absolute', color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '1px' }}>CERTIFICATE IMAGE</span>
                  <img src="/certificate-2.jpg" alt="Certificate" style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }} onError={e => e.target.style.display = 'none'} />
                </div>

                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-1)', margin: '0 0 0.5rem 0', fontWeight: '600' }}>Programming and Data Structures</h4>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>Lovely Professional University</span>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Formal certification emphasizing efficient logic building and implementation of complex data structures to solve dynamic programming challenges.
                </p>

                <a href="https://drive.google.com/file/d/1e5i9VLQ4eiwVtv-2o1n6J-Kkq9BayBA8/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>

              {/* Certificate 3 */}
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                <div style={{ width: '100%', height: '180px', background: 'transparent', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', overflow: 'hidden', position: 'relative' }}>
                  <span style={{ position: 'absolute', color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '1px' }}>CERTIFICATE IMAGE</span>
                  <img src="/certificate-3.jpg" alt="Certificate" style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }} onError={e => e.target.style.display = 'none'} />
                </div>

                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-1)', margin: '0 0 0.5rem 0', fontWeight: '600' }}>Hardware and Operating Systems</h4>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>Coursera</span>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Certification from Coursera detailing advanced OS-level principles, hardware interfacing, and foundational engineering architectures.
                </p>

                <a href="https://drive.google.com/file/d/1feFbR7wggUXq82Ciu2ejGIvupwVg7Yj5/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>

            </div>

            {/* Right Column: Achievements */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ borderLeft: '4px solid var(--accent-1)', paddingLeft: '1rem', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', margin: 0, fontWeight: '700' }}>
                Key Achievements
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Achievement 1 */}
                <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                  <div style={{ width: '100%', height: '180px', background: 'transparent', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', overflow: 'hidden', position: 'relative' }}>
                    <span style={{ position: 'absolute', color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '1px' }}>ACHIEVEMENT IMAGE</span>
                    <img src="/leetcode.png" alt="LeetCode Profile" style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }} onError={e => e.target.style.display = 'none'} />
                  </div>

                  <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-1)', margin: '0 0 0.5rem 0', fontWeight: '600' }}>110+ Problems Solved</h4>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>LeetCode</span>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    Consistently strengthened algorithmic problem-solving capabilities and programming efficiency through extensive, regular practice on the platform.
                  </p>

                  <a href="https://leetcode.com/u/Yaswanth_Reddy-2005/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                    View Profile <ExternalLink size={14} />
                  </a>
                </div>

                {/* Achievement 2 */}
                <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                  <div style={{ width: '100%', height: '180px', background: 'transparent', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', overflow: 'hidden', position: 'relative' }}>
                    <span style={{ position: 'absolute', color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '1px' }}>ACHIEVEMENT IMAGE</span>
                    <img src="/hackathon.jpg" alt="Hackathon" style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'relative', zIndex: 1 }} onError={e => e.target.style.display = 'none'} />
                  </div>

                  <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-1)', margin: '0 0 0.5rem 0', fontWeight: '600' }}>24H HackWithVertos 1.0</h4>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>Student Org ECHO</span>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    Participated in a grueling 24-Hour global Hackathon, collaborating quickly under pressure to design robust proofs of concept and technical deployments.
                  </p>

                  <a href="https://drive.google.com/file/d/1LQtV9Skir-WokoaIi5dRPWRktw1SLtCa/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="animate-on-scroll">
          <h2 className="section-title">Get In Touch</h2>
          <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="modal-tabs">
              <button
                className={`tab-btn ${contactMethod === 'email' ? 'active' : ''}`}
                onClick={() => setContactMethod('email')}
              >
                <Mail size={18} /> Via Email
              </button>
              <button
                className={`tab-btn ${contactMethod === 'call' ? 'active' : ''}`}
                onClick={() => setContactMethod('call')}
              >
                <Phone size={18} /> Via Call
              </button>
            </div>

            <div className="modal-body">
              {contactMethod === 'email' ? (
                <form className="contact-form" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target;
                  const btn = form.querySelector('button[type="submit"]');
                  const originalText = btn.textContent;
                  btn.textContent = 'Sending...';
                  btn.disabled = true;
                  try {
                    const formData = new FormData(form);
                    formData.append('access_key', '3f9e39af-c806-4bf0-95b2-5606fcb69dad');
                    const res = await fetch('https://api.web3forms.com/submit', {
                      method: 'POST',
                      body: formData,
                    });
                    const data = await res.json();
                    if (data.success) {
                      btn.textContent = '✓ Sent Successfully!';
                      btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                      form.reset();
                      setTimeout(() => { btn.textContent = originalText; btn.disabled = false; btn.style.background = ''; }, 3000);
                    } else {
                      throw new Error('Failed');
                    }
                  } catch (err) {
                    btn.textContent = '✗ Failed. Try again.';
                    btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                    setTimeout(() => { btn.textContent = originalText; btn.disabled = false; btn.style.background = ''; }, 3000);
                  }
                }}>
                  <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                  <input type="hidden" name="subject" value="New message from your Portfolio!" />
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" name="message" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
                </form>
              ) : (
                <div className="call-info">
                  <div className="phone-icon-wrapper">
                    <Phone size={40} className="pulse-icon" />
                  </div>
                  <h3>Let's have a chat!</h3>
                  <p>I'm available for calls. Feel free to reach out directly.</p>
                  <a href="tel:+919652833971" className="phone-number">+91 9652833971</a>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer>
        <div className="footer-contact">
          <a href="mailto:reddyyaswanthsomagattu@gmail.com" className="contact-item">
            <Mail size={18} /> reddyyaswanthsomagattu@gmail.com
          </a>
          <div className="contact-item">
            <Smartphone size={18} /> +91-9652833971
          </div>
          <a href="https://www.linkedin.com/in/yaswanthsomagattu/?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="contact-item">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://github.com/Yaswanth7s" className="contact-item">
            <Github size={18} /> GitHub
          </a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Somagattu Yaswanth Reddy. Built with <Heart size={12} style={{ display: 'inline', color: 'red' }} /> and React.
        </div>
      </footer>

    </div>
  );
}

export default App;
