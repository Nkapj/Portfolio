import './Projects.css';
import beMovie from './assets/Bemovie.png';
import figmaGrid from './assets/figmaGrid.png';
import cssProject from './assets/cssProject.png';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

const projets = [
  { id: 1, title: "Projet BeMovies", url: 'https://nkapj.github.io/BeMovies.md/', img: beMovie, description: "Projet de films interactif en React." },
  { id: 2, title: "Project Grid", url: 'https://nkapj.github.io/figmaGrid/', img: figmaGrid, description: "Reproduction d'une maquette Figma avec CSS Grid." },
  { id: 3, title: "Project CSS", url: 'https://nkapj.github.io/CSS-final-project/', img: cssProject, description: "Projet final HTML/CSS avec animations." }
];

const Project = () => {
  useEffect(() => {
    new fullpage('#projectpage', {
      autoScrolling: true,
      navigation: true,
      anchors: projets.map((p, i) => `projet${i + 1}`),
      scrollOverflow: true,
    });

    return () => {
      window.fullpage_api.destroy('all');
    };
  }, []);

  return (
    <div id='projectpage'>
        <div className="nav">
          <ul className="nav-links">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
            <li><NavLink to="/Skills" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Skills</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
          </ul>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/jessica-paule-nzi-kouame-aya/"><img src="/src/assets/linkedin.svg" alt="LinkedIn" /></a>
            <a href="https://github.com/Nkapj"><img src="/src/assets/github.svg" alt="GitHub" /></a>
            <a href="#"><img src="/src/assets/insta.svg" alt="Instagram" /></a>
          </div>
        </div>
      

      {projets.map((projet, index) => (
        <div className="section project-section" key={projet.id}>
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3>{projet.title}</h3>
              <p>{projet.description}</p>
              <a href={projet.url} target="_blank" rel="noopener noreferrer">Voir le projet</a>
            </div>
            <div className="timeline-image">
              <img src={projet.img} alt={projet.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
