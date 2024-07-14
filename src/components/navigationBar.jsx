import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './navigationBar.css';


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <header>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <p className="navbar-brand">MyPortfolio</p>
          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
          <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/workOne" activeClassName="active">Work</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" />
          <Route path="#home" />
          <Route path="#cv" />
          <Route path="#gas" />
        </Routes>
      </main>
    </Router>
  );
};

export default App;