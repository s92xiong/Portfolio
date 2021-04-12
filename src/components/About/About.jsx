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
      
      <code>{`function`} <span style={{color: functionColor}}>createPerson</span> {`(name, country, school, degree) {`}</code>
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
      <code className={indTwice}>{`...person`}</code>
      <br/>
      <code className={indOnce}>{`};`}</code>
      <br/>
      <code>{`};`}</code>

      <br/>
      <br/>
      
      <code>{`const sheuh =`} <span style={{color: functionColor}}>createPerson</span>{`("Sheuh", "Canada", "University of Waterloo", "Bachelor of Science");`}</code>

    </div>
  );
}

export default About;