import React from 'react';
import ProjectCard from './ProjectCard';
import skillsData from '../data/skills.json';
import projectsData from '../data/projects.json';
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { FaCalculator } from "react-icons/fa6";
import { FaImagePortrait } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";



import './Content.css';


export default function Content() {
  const skills = skillsData;
  const projects = projectsData;
  const experience = experienceData;
  const education = educationData;

  return (
    <main className="content">
      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-header">
          <span className="section-icon">👋</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">

          <div className="about-text">
            <p className="lead">Hello! I'm <strong>A.Navaneetha</strong> , an Aspiring Full Stack Developer with a strong foundation in Java, Python, and web development.</p>
            <p>I specialize in designing and developing clean, efficient, and scalable applications, with a focus on writing maintainable code and delivering user-friendly solutions. I have hands-on experience building web applications and implementing core programming concepts to solve real-world problems.</p>
            <p>With a solid understanding of data structures, object-oriented programming, and modern web technologies, I continuously strive to improve my technical expertise and development practices.</p>
            <p> I am passionate about learning new tools and technologies, working on impactful projects, and contributing to the developer community while growing as a professional software engineer.</p>
            
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-number">6+</span>
              <span className="highlight-label">Internships</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">4+</span>
              <span className="highlight-label">Projects Completed</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">AI & DS</span>
              <span className="highlight-label">Specialization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-header">
          <span className="section-icon">⚡</span>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{formatCategory(category)}</h3>
              <div className="skill-tags">
                {skillList.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="section-header">
          <span className="section-icon">👨‍💼</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="experience-content">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>
              {exp['Technologies used'] && (
                <div className="experience-technologies">
                  <span className="tech-label"><strong>Tech Stack :</strong> </span>
                  <div className="tech-tags">
                    {exp['Technologies used'].split(',').map((tech, i) => (
                      <span key={i} className="tech-tag">{tech.trim()}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="experience-description">
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-header">
          <IoLibrary className="section-icon" />
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="section awards-section">
        <div className="section-header">
          <span className="section-icon">🏆</span>
          <h2 className="section-title">Achievements</h2>
        </div>
        <div className="awards-content">
          <div className="award-card">
            <div className="award-header">
              <h3 className="award-title">Industry 4.0 and Industrial Internet of Things - NPTEL </h3>
              <span className="award-date">July-October 2025</span>
            </div>
            <p className="award-description">Achieved <strong>Elite Gold (92%)</strong> in NPTEL course on Industry 4.0 and IIoT.</p>
          </div>
          <div className="award-card">
            <div className="award-header">
              <h3 className="award-title">Article Presentation</h3>
              <span className="award-date">12th September 2025</span>
            </div>
            <p className="award-description">Participated in A National Level Article Presentation<strong> Pen to Podium </strong>organized by the Dept of CSE in association with <strong>Academic Decipher, Mumbai</strong> at MITS Deemed to be University.</p>
          </div>
          <div className="award-card">
            <div className="award-header">
              <h3 className="award-title">Paper Presentation</h3>
              <span className="award-date">27 - 28 February 2025</span>
            </div>
            <p className="award-description">Presented a paper titled <strong>Block chain-Powered Defence: A Decentralized Approach to Fake URL Detection and Cybersecurity Enhancement</strong> in 5th National virtual Conference on Recent Advances in Technology & Engineering(CRATE-2025) organized by VEMU Institute of Technology.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="section-header">
          <span className="section-icon">📚</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-content">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div className="education-info">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-branch">{edu.Branch}</p>
                </div>
                <span className="education-status">{edu.duration.includes('2027') ? 'Pursuing' : 'Completed'}</span>
              </div>
              <div className="education-details">
                <div className="education-institution">{edu.institution}</div>
                <div className="education-location">{edu.location}</div>
              </div>
              <div className="education-footer">
                <span className="education-year">{edu.gpa || edu.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-header">
          <span className="section-icon">✉️</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-content">
          <p className="contact-intro">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <div className="contact-links">
            <a href="mailto:anavaneethasankar@gmail.com" className="contact-btn primary">
              <span><SiGmail /></span> send mail
            </a>
            <a href="https://www.linkedin.com/in/anavaneetha" target="_blank" rel="noopener noreferrer" className="contact-btn secondary">
              <span><RiLinkedinFill /></span> LinkedIn
            </a>
            <a href="https://github.com/A-Navaneetha" target="_blank" rel="noopener noreferrer" className="contact-btn secondary">
              <span><FaGithub /></span> GitHub
            </a>
            <a href="/resume.pdf" className="contact-btn secondary" target="_blank" rel="noopener noreferrer">
              <span>📄</span> Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function formatCategory(category) {
  return category
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
}
