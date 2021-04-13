import React from 'react';
import Card from './Card';
import "./Projects.css";

function Projects() {

  const details = {
    findLaCloche: "An online database for users to share images and reviews of campsites on the La Cloche Silhouette Trail.",
    finDIO: "A mini-game influenced by Where's Waldo: find the character DIO of JoJo's Bizarre Adventure.",
    toDo: "A task management web-application inspired by Microsoft To Do."
  };

  return (
    <div className="projects-container">
      <Card 
        className="card card-0-bg" 
        num={0}
        projectTitle="Find LaCloche"
        projectInfo={details.findLaCloche}
      />
      <Card
        className="card card-1-bg"
        num={1}
        projectTitle="Find DIO"
        projectInfo={details.finDIO}
      />
      <Card
        className="card card-2-bg" 
        num={2}
        projectTitle="To Do"
        projectInfo={details.toDo}
      />
    </div>
  );
}

export default Projects;