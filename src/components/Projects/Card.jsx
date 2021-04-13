import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Card({ className, num, projectTitle, projectInfo, href }) {

  return (
    <div className="card-overflow-container">
      <div className={className}>
        <div className={`dark-bg-${num}`}>
          <div className="card-project-info">
            <h1>{projectTitle}</h1>
            <span>{projectInfo}</span>
          </div>
          <div className="card-button-container">
            <a href={href.viewCode} target="blank">
              <button className="view-code-button">View Code <FaGithub className="fa-icon" /></button>
            </a>
            <a href={href.livePreview} target="blank">
              <button className="live-demo-button">Live Demo <FaExternalLinkAlt className="fa-icon" /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;