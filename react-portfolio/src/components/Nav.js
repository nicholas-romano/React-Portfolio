import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Nav = () => {

  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const route = window.location.href;

    console.log('route: ', route);
    
    if (route.lastIndexOf('/about') !== -1) {
      setActivePage('about');
    } else if (route.lastIndexOf('/skills') !== -1) {
      setActivePage('skills');
    } else if (route.lastIndexOf('/contact') !== -1) {
      setActivePage('contact');
    } else if (route.lastIndexOf('/') !== -1) {
      setActivePage('portfolio');
    } else {
      setActivePage('portfolio');
    }
    
  }, []);

  const changeActivePage = page => {
    setActivePage(page);
  }

  return (
      <nav className="navbar navbar-expand-md">
            <button className="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <Link onClick={() => changeActivePage('about')} className={activePage === 'about' ? 'nav-link active' : 'nav-link'} to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => changeActivePage('skills')} className={activePage === 'skills' ? 'nav-link active' : 'nav-link'} to="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => changeActivePage('portfolio')} className={activePage === 'portfolio' ? 'nav-link active' : 'nav-link'} to="/">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => changeActivePage('contact')} className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
      </nav>
  );
}

export default Nav;