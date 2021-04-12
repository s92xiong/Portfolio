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
      {/* <div className="section-header">
        <h2>About</h2>
      </div> */}
      <div className="about">
        {/* <p>I'm a front-end developer who builds stuff with HTML, CSS, React JS, and Firebase. In my spare time I enjoy hiking, cooking, reading, playing Go/Baduk, and watching Space-related videos on YouTube. Check out my side-projects below!</p> */}
        <p>I'm a front-end developer who builds stuff with HTML, CSS, React JS, and Firebase.</p>
        <p>Check out my favourite side-projects below!</p>
      </div>
      <div className="section-header projects-header-container">
        <h2>Projects</h2>
      </div>
      <div className="text-area">
        
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
