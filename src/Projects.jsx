import './Projects.css';
import beMovie from './assets/Bemovie.png';
import figmaGrid from './assets/figmaGrid.png';
import cssProject from './assets/cssProject.png';
import stars from './assets/stars.mp4';
import { Link } from 'react-router-dom';

const projets = [
  { id: 1, title: "Projet BeMovies", url: 'https://nkapj.github.io/BeMovies.md/', img: beMovie },
  { id: 2, title: "Project Grid", url: 'https://nkapj.github.io/figmaGrid/', img: figmaGrid },
  { id: 3, title: "Project CSS", url: 'https://nkapj.github.io/CSS-final-project/', img: cssProject }
];

const Project = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jessica-paule-nzi-kouame-aya/"><img src="/src/assets/linkedin.svg" alt="LinkedIn" /></a>
          <a href="https://github.com/Nkapj"><img src="/src/assets/github.svg" alt="GitHub" /></a>
          <a href="#"><img src="/src/assets/insta.svg" alt="Instagram" /></a>
        </div>
      </div>

      {/* Fond Vidéo */}
      <video autoPlay loop muted className="starsVideo">
        <source src={stars} type='video/mp4' />
      </video>

      {/* Section Projets */}
      <div className="box">
        {projets.map((projet, index) => (
          <span key={projet.id} style={{ "--i": index + 1 }}>
            <a href={projet.url} target="_blank" rel="noopener noreferrer">
              <img src={projet.img} alt={projet.title} />
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
