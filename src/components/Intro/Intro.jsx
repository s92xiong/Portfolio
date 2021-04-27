import React from 'react';
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <p>Hi, I'm Sheuh!</p>
      <p>I'm an aspiring front-end developer who builds stuff with HTML/CSS, Javascript, React, and Firebase.</p>
      <p>My hobbies come and go. With the pandemic I've recently been playing Go (baduk), cooking, running, and learning more about web development to expand my technical skills. Check out my projects below!</p>
      {/* <p>I'm currently working through an online curriculum called <a target="blank" href="https://www.theodinproject.com/">The Odin Project</a> where I can expand my dev skills.</p> */}
    </div>
  );
}

export default Intro;