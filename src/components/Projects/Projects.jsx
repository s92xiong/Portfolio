import React from 'react';
import Card from './Card';
import "./Projects.css";

function Projects() {

  const projects = {
    jojoClub: {
      title: "The JoJo Club",
      description: "An exclusive clubhouse for JoJo members to write anonymous posts",
      href: {
        viewCode: "https://github.com/s92xiong/jojo-club",
        livePreview: "https://jojo-club.herokuapp.com/"
      }
    },
    findLaCloche: {
      title: "Find LaCloche",
      description: "An online database for users to share images and reviews of campsites on the La Cloche Silhouette Trail",
      href: {
        viewCode: "https://github.com/s92xiong/find-la-cloche",
        livePreview: "https://findlacloche.com/"
      }
    },
    weatherApp: {
      title: "Weather App",
      description: "A front-end weather application that fetches the weekly forecast from OpenWeatherMap",
      href: {
        viewCode: "https://github.com/s92xiong/weather-app",
        livePreview: "https://s92xiong.github.io/weather-app/"
      }
    },
  };

  return (
    <div className="projects-container">
      <Card
        className="card card-0-bg" 
        num={0}
        projectTitle={projects.jojoClub.title}
        projectInfo={projects.jojoClub.description}
        href={projects.jojoClub.href}
      />
      <Card 
        className="card card-1-bg" 
        num={1}
        projectTitle={projects.findLaCloche.title}
        projectInfo={projects.findLaCloche.description}
        href={projects.findLaCloche.href}
      />
      <Card
        className="card card-3-bg" 
        num={3}
        projectTitle={projects.weatherApp.title}
        projectInfo={projects.weatherApp.description}
        href={projects.weatherApp.href}
      />
    </div>
  );
}

export default Projects;