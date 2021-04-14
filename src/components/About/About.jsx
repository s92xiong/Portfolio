import React from 'react';
import "./About.css";

function About() {

  const indOnce = "indent-once";
  const indTwice = "indent-twice";

  const commentColor = "#90ee90";
  const functionColor = "#FFFF00";

  return (
    <div className="about">
      
      <code style={{color: commentColor}}>{`// ABOUT ME:`}</code>
      <br/>
      <br/>

      <code>{`const`} <span style={{color: functionColor}}>hiker</span> {`= ({ name }) => ({ `}</code>
      <br/>
      <code className={indOnce}>{`hike: () => console.log(name + " likes to hike.")`}</code>
      <br/>
      <code>{`});`}</code>
      
      <br/>
      <br/>

      <code>{`const`} <span style={{color: functionColor}}>goPlayer</span> {`= ({ name }) => ({ `}</code>
      <br/>
      <code className={indOnce}>{`  playGo: () => console.log(name + " likes to play the board game Go.")`}</code>
      <br/>
      <code>{`});`}</code>
      
      <br/>
      <br/>
      
      <code>{`function`} <span style={{color: functionColor}}>Person</span>{`(name, country, school, degree) {`}</code>
      <br/>
      <code className={indOnce}>{`const person = {`}</code>
      <br/>
      <code className={indTwice}>{`name: name,`}</code>
      <br/>
      <code className={indTwice}>{`country: country,`}</code>
      <br/>
      <code className={indTwice}>{`school: school,`}</code>
      <br/>
      <code className={indTwice}>{`degree: degree,`}</code>
      <br/>
      <code className={indOnce}>{`};`}</code>
      <br/>
      <br/>
      <code className={indOnce}>{`return {`}</code>
      <br/>
      <code className={indTwice}>{`...person,`}</code>
      <br/>
      <code className={indTwice}>{`...`}<span style={{color: functionColor}}>hiker</span>{`(person),`}</code>
      <br/>
      <code className={indTwice}>{`...`}<span style={{color: functionColor}}>goPlayer</span>{`(person)`}</code>
      <br/>
      <code className={indOnce}>{`};`}</code>
      <br/>
      <code>{`}`}</code>

      <br/>
      <br/>
      
      <code>{`const sheuh =`} <span style={{color: functionColor}}>Person</span>{`("Sheuh", "Canada", "University of Waterloo", "Bachelor of Science");`}</code>
      <br/>
      <code>{`sheuh.`}<span style={{color: functionColor}}>hike()</span><span style={{color: commentColor}}>{`; // Sheuh likes to hike.`}</span></code>
      <br/>
      <code>{`sheuh.`}<span style={{color: functionColor}}>playGo()</span><span style={{color: commentColor}}>{`; // Sheuh likes to play the board game Go.`}</span></code>

    </div>
  );
}

export default About;