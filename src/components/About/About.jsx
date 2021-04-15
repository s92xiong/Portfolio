import React from 'react';
import "./About.css";

function About() {

  const indOnce = "indent-once";
  const indTwice = "indent-twice";

  const commentColor = "#53e83c";
  const functionColor = "#FFFF00";
  const varColor = "#00d5ff";

  return (
    <div className="about">
      
      <code style={{color: commentColor}}>{`// About me:`}</code>
      <br/>
      <br/>
      
      <code>{`function`} <span style={{color: functionColor}}>Person</span>{`(name, education, interests, skills) {`}</code>
      <br/>
      <code className={indOnce}>{`const person = {`}</code>
      <br/>
      <code className={indTwice}>{`name: name,`}</code>
      <br/>
      <code className={indTwice}>{`education: education,`}</code>
      <br/>
      <code className={indTwice}>{`interests: interests,`}</code>
      <br/>
      <code className={indTwice}>{`skills: skills`}</code>
      <br/>
      <code className={indOnce}>{`};`}</code>
      <br/>
      <br/>
      <code className={indOnce}>{`return { ...person };`}</code>
      <br/>
      <code>{`}`}</code>

      <br/>
      <br/>

      <code>{`const`} <span style={{color: varColor}}>education</span>{` = {`}</code>
      <br/>
      <code className={indOnce}>{`school: "University of Waterloo",`}</code>
      <br/>
      <code className={indOnce}>{`degree: "Bachelor of Science - Kinesiology"`}</code>
      <br/>
      <code>{`};`}</code>
      
      <br/>
      <br/>

      <code>{`const`} <span style={{color: varColor}}>interests</span>{` = ["Go/Baduk", "Backpacking", "Jiu-Jitsu", "Cooking"];`}</code>
      <br/><br/>
      <code>{`const`} <span style={{color: varColor}}>skills</span>{` = ["HTML/CSS", "Javascript", "React", "Firebase"];`}</code>
      <br/><br/>
      <code>{`const`} <span style={{color:varColor}}>sheuh</span> {` = `} <span style={{color: functionColor}}>Person</span>{`("Sheuh Xiong",`} <span style={{color: varColor}}>education</span>, <span style={{color: varColor}}>interests</span>, <span style={{color: varColor}}>skills</span>);</code>

    </div>
  );
}

export default About;