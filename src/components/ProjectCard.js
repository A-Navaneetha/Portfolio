import React, { useState } from 'react';
import { FaCalculator } from 'react-icons/fa6';
import { FaImagePortrait } from 'react-icons/fa6';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { MdAtm } from 'react-icons/md';
import { GiShipBow } from 'react-icons/gi';



import './ProjectCard.css';


export default function ProjectCard({ title, description, techStack = [], links = {}, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  const getIconElement = () => {
    if (icon === 'FaCalculator') {
      return <FaCalculator className="card-icon" />;
    }
    if (icon === 'FaImagePortrait') {
      return <FaImagePortrait className="card-icon" />;
    }
    if (icon === 'FaAtm' || icon === 'MdAtm') {
      // Prefer MdAtm when requested (react-icons/md), else fallback to a money icon.
      return icon === 'MdAtm' ? <MdAtm className="card-icon" /> : <FaMoneyBillTransfer className="card-icon" />;
    }

    if (icon === 'GiShipBow') {
      return <GiShipBow className="card-icon" />;
    }

    if (icon === 'IoLibrary') {
      // Local import is avoided; reuse IoLibrary via global import if present.
      // Note: IoLibrary is imported in Content.js for the section header.
      // If this icon is missing here, add IoLibrary import above.
      return <div className="card-icon">📚</div>;
    }

    return <div className="card-icon">💼</div>;

  };


  return (
    <article 
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-header">
        {getIconElement()}
        <div className="card-menu">
          <button className="menu-dots" aria-label="Options">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      
      <div className="card-tech">
        <span className="tech-label">Tech Stack</span>
        <div className="tech-tags">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      
      <div className="card-footer">
        {links.demo && (
          <a href={links.demo} className="card-link" target="_blank" rel="noopener noreferrer">
            <span className="link-icon">🚀</span>
            <span>Live Demo</span>
          </a>
        )}
        {links.github && (
          <a href={links.github} className="card-link github" target="_blank" rel="noopener noreferrer">
            <span className="link-icon">🐙</span>
            <span>Code</span>
          </a>
        )}
      </div>
    </article>
  );
}

