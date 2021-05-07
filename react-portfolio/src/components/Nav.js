import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Nav = () => {

  let location = useLocation();

  const [activePage, setActivePage] = useState('');

  useEffect(() => {

    switch (location.pathname) {
      case '/about':
        setActivePage('about');
      break;
      case '/skills':
        setActivePage('skills');
      break;
      case '/contact':
        setActivePage('contact');
      break;
      case '/credentials':
        setActivePage('credentials');
      break;
      case '/':
        setActivePage('portfolio');
      break;
      default: 
        setActivePage('portfolio');
      break;
    }
    
  }, [location.pathname]);

  return (
      <nav className="navbar navbar-expand-md">
            <button className="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <Link onClick={() => setActivePage('about')} className={activePage === 'about' ? 'nav-link active' : 'nav-link'} to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('skills')} className={activePage === 'skills' ? 'nav-link active' : 'nav-link'} to="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('portfolio')} className={activePage === 'portfolio' ? 'nav-link active' : 'nav-link'} to="/">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('credentials')} className={activePage === 'credentials' ? 'nav-link active' : 'nav-link'} to="/credentials">Credentials</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('contact')} className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
      </nav>
  );
}

export default Nav;