import "./Contact.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';








const Contact = () => {
    
        const [resultMessage, setResultMessage] = useState("");

        const handleSubmit = async (e) => {
                e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                const object = {};
                formData.forEach((value, key) => {
                    object[key] = value;
            });

        setResultMessage("Please wait...");

        try {
                const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                    body: JSON.stringify(object)
                });

                const json = await response.json();

            if (response.status === 200) {
                setResultMessage(json.message);
            } else {
                setResultMessage("Erreur : " + json.message);
            }

                form.reset();
                setTimeout(() => setResultMessage(""), 5000);
            } catch (error) {
            console.error(error);
            setResultMessage("Something went wrong!");
            }
};

    
    
    
    return (
        <div className="monForm">  
            <div className="nav">
                    <ul className="nav-links">
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
            <video autoPlay loop muted className="redVideo">
                        <source src="https://videos.pexels.com/video-files/7565824/7565824-hd_2048_1080_25fps.mp4" type="video/mp4" />
                </video>

            <div className="contact">           
                <div className="formCadre">
                    <div className="formTitle">
            
                        <p>Fill up the form below to send me a message.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="forma">
                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                        <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                        <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                        <div className="ligne double">
                            <div className="input-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" id="first_name" name="name" placeholder="John" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" name="last_name" placeholder="Doe" required />
                            </div>
                        </div>

                        <div className="ligne double">
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="you@company.com" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" name="phone" placeholder="+32 (0) 475 15 15 46 " required />
                            </div>
                        </div>

                        <div className="input-group">
                                <label htmlFor="message">Message</label>
                                <textarea rows="5" id="message" name="message" placeholder="Your message" required />
                        </div>

                        <div className="input-group">
                            <button type="submit" className="btn-submit">Send Message</button>
                        </div>
                        <p className="form-result">{resultMessage}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;