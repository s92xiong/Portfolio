import React from 'react';
import Card from './Card';
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <Card className="card card-0-bg" num={0} />
      <Card className="card card-1-bg" num={1} />
      <Card className="card card-2-bg" num={2} />
    </div>
  );
}

export default Projects;