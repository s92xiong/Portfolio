import React from 'react';
import "./About.css";

function About() {

  const blue = "#90ee90";

  const indOnce = "indent-once";
  const indTwice = "indent-twice";

  return (
    <div className="about">
      
      <code style={{color: blue}}>{`// ABOUT ME:`}</code>
      
      <br/>
      <br/>

      <code>{`const Nationality = ({ name, nationality }) => {`}</code>
      <br/>
      <code className={indOnce}>{`return {`}</code>
      <br/>
      <code className={indTwice}>{`nationality: () => console.log(name + " is a proud " + nationality + ".")`}</code>
      <br/>
      <code className={indOnce}>{`};`}</code>
      <br/>
      <code>{`};`}</code>

      <br/>
      <br/>

      <code>{`const Hiker = ({ name }) => {`}</code>
      <br/>
      <code className={indOnce}>{`return {`}</code>
      <br/>
      <code className={indTwice}>{`hike: () => console.log(name + " likes to hike.")`}</code>
      <br/>
      <code className={indOnce}>{`};`}</code>
      <br/>
      <code>{`};`}</code>

      <br/>
      <br/>

      <code>{`const GoPlayer = ({ name }) => {`}</code>
      <br/>
      <code className={indOnce}>{`return {`}</code>
      <br/>
      <code className={indTwice}>{`playGo: () => console.log(name + " likes to play the board game Go.")`}</code>
      <br/>
      <code className={indOnce}>{`};`}</code>
      <br/>
      <code>{`};`}</code>

      <br/>
      <br/>
      
      <code>{`function createPerson(name, nationality, school, degree) {`}</code>
      <br/>
      <code className={indOnce}>{`const person = {`}</code>
      <br/>
      <code className={indTwice}>{`name: name,`}</code>
      <br/>
      <code className={indTwice}>{`nationality: nationality,`}</code>
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
      <code className={indTwice}>{`...Nationality(person),`}</code>
      <br/>
      <code className={indTwice}>{`...Hiker(person),`}</code>
      <br/>
      <code className={indTwice}>{`...GoPlayer(person)`}</code>
      <br/>
      <code className={indOnce}>{`};`}</code>
      <br/>
      <code>{`};`}</code>

      <br/>
      <br/>
      
      <code>{`const sheuh = createPerson("Sheuh", "Canadian", "University of Waterloo", "Bachelor of Science");`}</code>
      <br/>
      <br/>
      <code>{`sheuh.nationality();`} <span style={{color: blue}}>{`// Sheuh is a proud Canadian!`}</span></code>
      <br/>
      <code>{`sheuh.hike();`} <span style={{color: blue}}>{`// Sheuh likes to hike.`}</span></code>
      <br/>
      <code>{`sheuh.playGo();`} <span style={{color: blue}}>{`// Sheuh likes to play the board game Go.`}</span></code>

    </div>
  );
}

export default About;