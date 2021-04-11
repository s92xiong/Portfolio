import './App.css';
import './AppMobile.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container-items">
          <h3>Projects</h3>
          <h3>Contact</h3>
        </div>
      </nav>
      <div className="header-name">
        <h1>Sheuh Xiong</h1>
      </div>
      <div className="about">
        <p>I'm a front-end developer who builds stuff with HTML, CSS, React, and Firebase. Check out my three side-projects below!</p>
      </div>
      <div className="projects-header-container">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        <div className="card card-0"></div>
        <div className="card card-1"></div>
        <div className="card card-2"></div>
      </div>
    </div>
  );
}

export default App;
