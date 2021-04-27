import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      <section className="section section-email">
        <p><b>Email:</b></p>
        <p>sheuhxiong@gmail.com</p>
      </section>
      <p className="or-separator">Or</p>
      <section className="section section-find-me-on">
        <p><b>Find me on:</b></p>
        <a href="https://github.com/s92xiong" target="blank">GitHub</a>
        <br/>
        <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-3548a.appspot.com/o/sheuh_xiong_resume.pdf?alt=media&token=9a1553d7-e767-4134-8368-76d43d6ed57c" target="blank">Resume</a>
      </section>
      
      <section className="section section-made-by-user">
        <p>Made by Sheuh Xiong © 2021</p>
      </section>

    </div>
  )
}

export default Contact;