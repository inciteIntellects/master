
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../navbarComponents/Home';
import About from '../navbarComponents/About';
import Contact from '../navbarComponents/Contact';
import '../App.css';
function Navbar() {
  return (
    <div>
    <Router>
      <div>
        <nav>
          <ul className="nav-links"> 
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default Navbar;
