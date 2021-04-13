import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Card({ className, num }) {

  return (
    <div className="card-overflow-container">
      <div className={className}>
        <div className={`dark-bg-${num}`}>
          <div className="card-button-container">
            <button className="view-code-button">View Code</button>
            <button className="live-demo-button">Live Demo <FaExternalLinkAlt className="fa-external-link" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;