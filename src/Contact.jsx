import "./Contact.css";
import redsmoke from "./assets/redsmok.mp4";
import { Link } from 'react-router-dom';








const Contact = () => {
    return (

        <div>  
            <div className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>

                </div>
                <div className="contact">
        

            <video autoPlay loop muted className="redVideo">
            <source src={redsmoke} type='video/mp4'/>
            </video>

            
            <div className="formCadre">
                <form action="contact" method="post">
            

                <div className="ligne input-group">
                    <label htmlFor="name" >Votre nom</label>
                    <input type="text" id="name"  name="name" placeholder="Nom" required/>
                    <input type="text" id="surname" name="surname" placeholder="Prénom"/>
                

            </div>

            <div className="ligne">
                <label htmlFor="email" >E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />
                    
            </div>

            <div className="ligne">
                <label htmlFor="objet">Objet</label>
                    <input type="text" id="objet" name="objet" placeholder="Object"/>
                    
            </div>
            <div className="ligne">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" ptitle-contactlaceholder="Message" required></textarea>
                
            </div>

            <button type="submit" className="btn-submit"> Soumettre</button>
            </form> 
        
            </div>
            
            </div>
        </div>

    );
}

export default Contact;