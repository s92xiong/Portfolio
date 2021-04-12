import AboutMe from './AboutMe';
import './App.css';
import './AppMobile.css';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />

      <div className="title-container">
        <h1>Sheuh Xiong</h1>
      </div>
      
      <div className="intro">
        <p>I'm a front-end developer who builds stuff with HTML, CSS, React JS, and Firebase.</p>
        <p>Check out my favourite side-projects below!</p>
      </div>
      
      <AboutMe />
      
      <div className="section-header projects-header-container">
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
