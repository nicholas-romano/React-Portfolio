import React from 'react';
import {
    Link
  } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-md">
            <button className="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
        </nav>
    </>
  );
}

export default Nav;