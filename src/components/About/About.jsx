import React from 'react';
import "./About.css";

function About() {

  const indOnce = "indent-once";
  const indTwice = "indent-twice";

  return (
    <div className="about">
      
      <code>{`// ABOUT ME:`}</code>
      
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

      <code>{`const Reader = ({ name }) => {`}</code>
      <br/>
      <code className={indOnce}>{`return {`}</code>
      <br/>
      <code className={indTwice}>{`read: () => console.log(name + " likes to read.")`}</code>
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
      
      <code>{`function createPerson(name, school, degree) {`}</code>
      <br/>
      <code className={indOnce}>{`const person = {`}</code>
      <br/>
      <code className={indTwice}>{`name: name,`}</code>
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
      <code className={indTwice}>{`...Reader(person),`}</code>
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
      <code>{`const sheuhXiong = createPerson("Sheuh Xiong", "University of Waterloo", "Bachelor of Science");`}</code>


    </div>
  );
}

export default About;