import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import './App.css';
// import './AppMobile.css';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Title />
      
      <Intro />
      
      <About />
      
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
