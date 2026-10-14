
const skillIcons = {
  "HTML5": <SiHtml5 color="#E34F26" />,
  "CSS3": <SiCss color="#1572B6" />,
  "JavaScript": <SiJavascript color="#F7DF1E" />,
  "React JS": <SiReact color="#61DAFB" />,
  "Python": <SiPython color="#3776AB" />,
  "MySQL": <SiMysql color="#4479A1" />,
  "Git & GitHub": <SiGithub color="#181717" />,
  "UI/UX Design": <SiFigma color="#F24E1E" />
}

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiPython,
  SiMysql,
  SiGithub,
  SiFigma
} from 'react-icons/si'

import { useEffect, useState } from 'react'
import './App.css'

// UBAH INFORMASI DI SINI
const nama = "Galih Alifiandika"
const email = "galihalifiandika@gmail.com"

const projects = [
  {
    nomor: "01",
  judul: "Website Portofolio Pribadi",
  deskripsi: "Website portofolio interaktif yang dikembangkan menggunakan React, JavaScript, dan CSS dengan desain Creative Editorial serta animasi modern.",
  kategori: "WEB DEVELOPMENT",
  simbol: "✳",
  warna: "pink",
  },
  {
    nomor: "02",
    judul: "Creative Design",
    deskripsi: "Eksplorasi desain visual dan kreativitas.",
    kategori: "DESIGN",
    simbol: "✦",
    warna: "purple",
  },
  {
    nomor: "03",
    judul: "Digital Project",
    deskripsi: "Pengembangan solusi digital yang inovatif.",
    kategori: "DEVELOPMENT",
    simbol: "↗",
    warna: "yellow",
  },
]


function App() {
  
  const [typingText, setTypingText] = useState('')

  useEffect(() => {

  const words = [
  'Informatics Engineering Student.',
  'Future Software Engineer.',
  'Web Development Enthusiast.',
  'Creative Tech Explorer.',
  'Passionate About Coding.'
]

    let wordIndex = 0
    let letterIndex = 0
    let deleting = false
    let timer

    const type = () => {
      const word = words[wordIndex]

      letterIndex += deleting ? -1 : 1
      setTypingText(word.slice(0, letterIndex))

      let speed = deleting ? 60 : 110

      if (letterIndex === word.length && !deleting) {
        deleting = true
        speed = 1400
      } else if (letterIndex === 0 && deleting) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
        speed = 300
      }

      timer = setTimeout(type, speed)
    }

    timer = setTimeout(type, 300)

    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (

    <div className="website">

      {/* NAVBAR */}
      <header className="navbar container">
        <a href="#home" className="logo">
          <span className="logo-icon">✳</span>
          KREATIF<span className="logo-dot">.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk ↗
        </a>
      </header>

      <main>

        {/* HERO */}
        <section className="hero container" id="home">

          <div className="hero-text">
            <div className="label-top">
              <span className="status-dot"></span>
              OPEN FOR CREATIVE IDEAS
            </div>

            <p className="intro">
              HELLO THERE! ✦ I'M
            </p>

          <h1>
              {nama}
              <span className="headline-small">
              {typingText}
               <span className="typing-cursor">|</span>
              </span>
              <span className="headline-highlight">
                BIG IDEAS!
              </span>
            </h1>

            <p className="hero-description">
            
<p className="hero-description">
 
<p className="hero-description">
  Saya adalah mahasiswa Teknik Informatika
  yang memiliki minat dalam pengembangan
  website, pemrograman, UI/UX Design,
  dan teknologi digital.

  Saya senang mengeksplorasi teknologi baru
  serta mengubah ide kreatif menjadi
  solusi digital yang inovatif.
</p>

</p>

            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work <span>↗</span>
              </a>

              <a href="#about" className="secondary-btn">
                More About Me ↓
                
                <a
               href="/projects/CV_GALIH.pdf"
               download="CV_GALIH.pdf"
               className="cv-btn"
               >
               ↓ Download CV
              </a>

              </a>
            </div>

            <div className="hero-bottom">
              <span>✳ CREATE SOMETHING DIFFERENT</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </div>

          {/* KOLASE KREATIF */}
         
<div
  className="collage"
  aria-hidden="true"
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    e.currentTarget.style.setProperty('--mx', `${x * 35}px`)
    e.currentTarget.style.setProperty('--my', `${y * 35}px`)
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.setProperty('--mx', '0px')
    e.currentTarget.style.setProperty('--my', '0px')
  }}
>


            <div className="collage-circle"></div>

            <div className="paper paper-megaphone">
              <span className="paper-label">SPEAK UP!</span>
              <svg viewBox="0 0 120 110" fill="none">
                <path
                  d="M25 40 L72 23 L72 80 L25 65 Z"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 40 Q10 42 10 52 Q10 64 25 65"
                  stroke="currentColor"
                  strokeWidth="5"
                />
                <path
                  d="M39 70 L46 98 H64 L57 73"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
                <path
                  d="M87 35 L106 24 M90 52 H113 M87 70 L106 82"
                  stroke="#7251DD"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="paper paper-chat">
              <svg viewBox="0 0 130 100" fill="none">
                <path
                  d="M15 20 Q15 8 30 8 H100 Q115 8 115 23 V62 Q115 76 100 76 H61 L42 94 V76 H30 Q15 76 15 62 Z"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
                <circle cx="43" cy="43" r="5" fill="currentColor"/>
                <circle cx="65" cy="43" r="5" fill="currentColor"/>
                <circle cx="87" cy="43" r="5" fill="currentColor"/>
              </svg>
            </div>

            <div className="starburst">
              <span>WOW!</span>
            </div>

            <div className="paper paper-bulb">
              <svg viewBox="0 0 100 125" fill="none">
                <path
                  d="M50 9 C20 9 15 34 25 54 C32 68 39 72 39 84 H61 C61 72 69 65 75 54 C87 29 71 9 50 9Z"
                  stroke="currentColor"
                  strokeWidth="5"
                />
                <path
                  d="M39 93 H61 M42 103 H58 M46 112 H54"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M50 0 V-7 M11 20 L3 13 M89 20 L97 13"
                  stroke="#7251DD"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <div className="sticker-note">
              THINK<br/>
              OUTSIDE<br/>
              THE BOX!
              <span>↗</span>
            </div>

            <span className="decor-star decor-one">✦</span>
            <span className="decor-star decor-two">✳</span>
            <span className="decor-star decor-three">✴</span>

          </div>
        </section>

        {/* MOVING TEXT */}
        <div className="marquee">
          <div className="marquee-track">
            CREATIVE THINKING ✳ DESIGN ✳ DEVELOPMENT ✳
            CREATIVE THINKING ✳ DESIGN ✳ DEVELOPMENT ✳
          </div>
        </div>

        {/* ABOUT */}
        <section className="about container" id="about">
          <div className="section-label">
            01 / GET TO KNOW ME
          </div>

          <div className="about-grid reveal">
            <h2>
              Nice to<br/>
              <span>meet you!</span> ✦
            </h2>

            <div className="about-description">
              <p>
                  Halo! Saya {nama}, mahasiswa Teknik Informatika
                  yang memiliki ketertarikan pada pengembangan
                  perangkat lunak, website, dan teknologi digital.
              </p>
              <p>
               Saya senang mempelajari bahasa pemrograman,
               mengeksplorasi teknologi baru, serta mengembangkan
               solusi digital yang kreatif, fungsional,
               dan bermanfaat bagi pengguna.
              </p>

              <div className="about-signature">
                MADE WITH CURIOSITY & CREATIVITY ✳
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects" id="projects">
          <div className="container">
            <div className="section-label">
              02 / MY CREATIVE SPACE
            </div>

           <div className="section-heading reveal">
              <h2>
                Selected <span>Works.</span>
              </h2>
              <p>Beberapa contoh ide dan proyek kreatif.</p>
            </div>

            <div className="project-grid reveal">
              {projects.map((project) => (
               
<article
  className="project-card"
  key={project.nomor}
  onMouseMove={(e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    card.style.setProperty('--rotate-x', `${-y * 15}deg`)
    card.style.setProperty('--rotate-y', `${x * 15}deg`)
  }}
  onMouseLeave={(e) => {
    const card = e.currentTarget
    card.style.setProperty('--rotate-x', '0deg')
    card.style.setProperty('--rotate-y', '0deg')
  }}
>

                  <div className={`project-art ${project.warna}`}>
                    <span className="project-number">
                      {project.nomor}
                    </span>
                    
                 {project.nomor === "01" ? (
             <img
                src="/projects/portfolio.png"
                alt="Website Portofolio Saya"
                style={{
                 width: "100%",
                height: "100%",
                objectFit: "cover"
             }}
            />
             ) : (
              <span className="project-symbol">
               {project.simbol}
              </span>
             )}

                  </div>

                  <div className="project-details">
                    <span className="project-category">
                      {project.kategori}
                    </span>
                    <h3>{project.judul}</h3>
                    <p>{project.deskripsi}</p>
                    
                 { project.nomor === "01" && (
               <div className="project-actions">
               <a
               href="https://galih-portfolio-navy.vercel.app"
               className="project-link"
               target="_blank"
              rel="noopener noreferrer"
              >
              View Project ↗
              </a>

            <a
               href="https://github.com/galihalifiandika-prog/portfolio-saya"
                className="project-link"
                 target="_blank"
                  rel="noopener noreferrer"
            >
             Source Code ↗
              </a>
           </div>
           )}

                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills container">
          <div className="section-label">
            03 / WHAT I DO
          </div>

          <h2>My creative <span>toolbox ✳</span></h2>

          <div className="skill-list">
            {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React JS",
                "Python",
                "MySQL",
                "Git & GitHub",
               "UI/UX Design"
            ].map((skill) => (
             
          <span className="skill-pill" key={skill}>
            <span className="skill-icon">
             {skillIcons[skill]}
            </span>
          {skill}
            </span>

            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="container contact-inner">
            <div className="section-label">
              04 / LET'S CONNECT
            </div>

            <h2>
              HAVE AN IDEA?<br/>
              <span>LET'S CREATE!</span>
            </h2>

            <p>
              Yuk, buat sesuatu yang keren bersama!
            </p>

            <a
              href={`mailto:${email}`}
              className="contact-button"
            >
              Say Hello ↗
            </a>

            <span className="contact-decoration">✳</span>
          </div>
        </section>

      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} {nama}</span>
        <span>MADE WITH ♥ AND BIG IDEAS</span>
      </footer>

    </div>
  )
}

export default App
