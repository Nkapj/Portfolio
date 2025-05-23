import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Skills.css';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min.js';
import 'fullpage.js/dist/fullpage.css';


const Skills = () => {


        useEffect(() => {
        
        
            new fullpage('#fullpage', {
                autoScrolling: true,
                navigation: true,
                anchors: ['languages', 'about'],
                scrollOverflow: true,
            });
        
            return () => {
              window.fullpage_api.destroy('all'); // nettoyage propre
            };
        }, []);
                


    return (
        <div className='tete'> <div className="nav">
            <ul className="nav-links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
            <li><NavLink to="/Skills" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Skills</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
        </ul>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/jessica-paule-nzi-kouame-aya/"><img src="/src/assets/linkedin.svg" alt="" /></a>
            <a href="https://github.com/Nkapj"><img src="/src/assets/github.svg" alt="" /></a>
            <a href="#"><img src="/src/assets/insta.svg" alt="" /></a>
        </div>
        </div>
        <div id="fullpage" className="skills-container">
            

      {/* === SECTION 1 === */}
        <div className="section skills">
            {/* <video autoPlay loop muted>
            <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" />
            </video> */}

        

        <div className="content-split">
          {/* LANGUAGES */}
            <div className="languages">
            {/* <h2>Languages & Tools</h2> */}
                <div className="tag-list">
                    <div className="fade"></div>
                    {[1, 2, 3].map((_, i) => (
                    
                    <div className="loop-slider" key={i} style={{ "--duration": "15000ms", "--direction": i % 2 === 0 ? "normal" : "reverse" }}>
                    <div className="inner">
                        {["CSS", "Typescript", "HTML", "Tailwind", "JavaScript", "Sass", "Bootstrap", "React.js", "Git", "Github", "Node.js", "MongoDB", "SQL", "MySQL", "API Rest", "SEO", "Auth", "Next.js", "Render"].map((tech, i) => (
                        <div className="tag" key={i}><span>#</span>{tech}</div>
                        ))}
                    </div>
                    </div>
                    ))}
                    
                </div>
            </div>

          {/* ABOUT */}
            <div className="about">
            {/* <div className="skills-title">
            <h1>What I Can Offer</h1> 
                </div>*/}
                {[
                ["💻 Web & App Development", "Creating responsive and accessible interfaces using HTML, CSS, and JavaScript, with modern libraries like React.js."],
                ["⚙️ API Development", "Designing and consuming RESTful APIs with Node.js, Express, and JSON-based data exchange."],
                ["🧠 Full-Stack Integration", "Using MongoDB, Mongoose, Express for complete project logic and user/data management."],
                ["🎨 UI Animation & Creative Effects", "Using GSAP and SVG for transitions, micro-interactions, and visual identity."],
                ["⚡ Performance Optimization", "Focusing on performance with animations and responsive architecture."],
                ["🛒 E-commerce & User Systems", "Building authentication, forms, protected routes and flows."]
                ].map(([title, text], i) => (
                <div className='skills-block' key={i}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                ))}
            </div>
            </div>
        </div>

      {/* === SECTION 2 === */}
        <div className="section second-section">
            <video autoPlay loop muted>
                <source src='https://videos.pexels.com/video-files/7670836/7670836-uhd_2560_1440_30fps.mp4' type='video/mp4' />
            </video>
            <div className="download-button">
                
                <a href="cv/Dev-Junior-Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                <div className="icon">
                    <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16l4-4h-3V4h-2v8H8l4 4zM5 18v2h14v-2H5z" fill="#fff" />
                    </svg>
                </div>
                <div className="label">Download</div>
                <div className="loading"><span></span></div>
                </a>
                </div>
                <p className='or'>Or</p>
            <div className="download-button">
                
                <a href="cv/Dev-Junior-Resume.pdf" target="_blank" rel="noopener noreferrer" >
                <div className="icon">
                    
                </div>
                <div className="label">Take a look</div>
                <div className="loading"><span></span></div>
                </a>

                {/* <a href="CV-Dev-Junior-print.pdf" target="_blank" rel="noopener noreferrer">
                Voir CV (FR)
                </a> */}

                

                {/* <a href="cv/Dev-Junior-Resume.pdf" target="_blank" rel="noopener noreferrer">
                View CV (EN)
                </a>  */}
                
            </div>
            

            {/* <h4>to be continued...</h4> */}
        </div>
    </div>
</div>
);
};

export default Skills;
