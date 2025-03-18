import './Projects.css';
import beMovie from './assets/Bemovie.png';
import figmaGrid from './assets/figmaGrid.png';
import cssProject from './assets/cssProject.png';
import stars from './assets/stars.mp4';
import { Link } from 'react-router-dom';

const projets = [
    {   id: 1, title: "Projet BeMvoies", url:'https://nkapj.github.io/BeMovies.md/', img: beMovie},
    {   id: 2, title: "Project Grid", url: 'https://nkapj.github.io/figmaGrid/', img: figmaGrid},
    {   id: 3, title: "Project CSS", url: 'https://nkapj.github.io/CSS-final-project/', img: cssProject},


]





const Project = () => {
    return (
        
        <div>
            <div className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                </div>

            <video autoPlay loop muted className="starsVideo">
                <source src={stars} type='video/mp4'/>
            </video>

                <div className="title-project">
                    <h1>Projects</h1>
                </div>
            <div className="project-container">

                <div className="project-grid">
                    {projets.map((projet) => (
                    
                        <div className="project" key={projet.id}>
                            <h2>{projet.title}</h2>

                            <a href={projet.url} target="_blank" rel="noopener noreferrer">
                                <img src={projet.img} alt={projet.title} className="project-image"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Project;