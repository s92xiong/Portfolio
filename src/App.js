// eslint-disable-next-line no-unused-vars
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Title />
      
      <Intro />
      
      {/* <About /> */}
      
      <div id="projects" className="section-header projects-header-container">
        <h2>Projects</h2>
      </div>
      
      <Projects />

      <div id="contact" className="section-header contact-header-container">
        <h2>Contact</h2>
      </div>

      <Contact />

    </div>
  );
}

export default App;
