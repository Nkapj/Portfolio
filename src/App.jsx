import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import "./App.css";
import Project from './Projects';
import Contact from './Contact';


const App = () => {
    return (
      <Router>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />

        </Routes>
          
      </Router>
    )
}


export default App
