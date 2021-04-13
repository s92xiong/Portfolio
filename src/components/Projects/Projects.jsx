import React from 'react';
import Card from './Card';
import "./Projects.css";

function Projects() {

  const projects = {
    findLaCloche: {
      title: "Find LaCloche",
      description: "An online database for users to share images and reviews of campsites on the La Cloche Silhouette Trail.",
      href: {
        viewCode: "https://github.com/s92xiong/find-la-cloche",
        livePreview: "https://findlacloche.com/"
      }
    },
    finDIO: {
      title: "Find DIO",
      description: "A mini-game influenced by Where's Waldo: find the character DIO of JoJo's Bizarre Adventure.",
      href: {
        viewCode: "https://github.com/s92xiong/find-DIO",
        livePreview: "https://waldo-react-d81e7.firebaseapp.com/"
      }
    },
    toDo: {
      title: "To Do",
      description: "A task management web-application inspired by Microsoft To Do.",
      href: {
        viewCode: "https://github.com/s92xiong/tdl-react",
        livePreview: "https://to-do-list-6d4f7.firebaseapp.com//"
      }
    },
  };

  return (
    <div className="projects-container">
      <Card 
        className="card card-0-bg" 
        num={0}
        projectTitle={projects.findLaCloche.title}
        projectInfo={projects.findLaCloche.description}
        href={projects.findLaCloche.href}
      />
      <Card
        className="card card-1-bg"
        num={1}
        projectTitle={projects.finDIO.title}
        projectInfo={projects.finDIO.description}
        href={projects.finDIO.href}
      />
      <Card
        className="card card-2-bg" 
        num={2}
        projectTitle={projects.toDo.title}
        projectInfo={projects.toDo.description}
        href={projects.toDo.href}
      />
    </div>
  );
}

export default Projects;