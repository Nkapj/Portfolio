import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
    const [active, setActive] = useState(null);

    const toggle = (panel) => {
    setActive(active === panel ? null : panel);
};
















return (
<div className='skills-page'>
    <div className="nav">
                        <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Skills">Skills</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/jessica-paule-nzi-kouame-aya/"><img src="/src/assets/linkedin.svg" alt="" /></a>
                            <a href="https://github.com/Nkapj"><img src="/src/assets/github.svg" alt="" /></a>
                            <a href="#"><img src="/src/assets/insta.svg" alt="" /></a>
                        </div>
                    </div>
    <div className='skills-container'>
            <video autoPlay loop muted >
                <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4"/>
            </video>
            <div className='skills-title'>
                <h1>What i can offer</h1> 
            </div>
        
        <div className='about'>
            
            <div className='skills'>
                <h2>💻 Web & App Development</h2>
                <p>Creating responsive and accessible interfaces using HTML, CSS, and JavaScript, with modern libraries like React.js. Emphasis on clean structure, semantic code, and fluid user experience.</p>
            </div>
            <div className='skills'>
                <h2>⚙️ API Development</h2>
                <p>Designing and consuming RESTful APIs to connect front-end and back-end services. Experience with Node.js, Express, and JSON-based data exchange.</p>
            </div>
            <div className='skills'>
                <h2>🧠 Full-Stack Integration</h2>
                <p>End-to-end project logic using MongoDB, Mongoose, and Express.js for robust back-end structures. Handling data models, user management, and secure operation</p>
            </div>
            <div className='skills'>
                <h2>🎨 UI Animation & Creative Effects</h2>
                <p>Using GSAP and SVG animations to craft dynamic transitions, engaging micro-interactions, and visually expressive layouts. Focus on performance and visual identity.</p>
            </div>
            <div className='skills'>
                <h2>⚡ Performance Optimization</h2>
                <p>Using GSAP and SVG animations to craft dynamic transitions, engaging micro-interactions, and visually expressive layouts. Focus on performance and visual identity.</p>
            </div>
            <div className='skills'>
                <h2>🛒 E-commerce & User Systems</h2>
                <p>Creating features like user authentication, dynamic forms, and interactive flows. Understanding the logic behind user data, account systems, and protected routes.</p>
            </div>
        </div>
    </div>
</div>

    )
}

export default Skills;