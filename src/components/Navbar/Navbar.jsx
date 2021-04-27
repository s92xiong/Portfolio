import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container-items">
        <h3><a href="#projects">Projects</a></h3>
        <h3><a href="#contact">Contact</a></h3>
      </div>
    </nav>
  );
}

export default Navbar;