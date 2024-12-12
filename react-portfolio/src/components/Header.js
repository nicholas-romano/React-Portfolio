import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div id="banner">
        <h1>Nicholas Romano</h1>
        <h3>Full-Stack Web Developer</h3>
        <div className="resume-download">
          <label>
            <a href="mailto:njromano77@gmail.com">njromano77@gmail.com</a>
          </label>
          &nbsp; &bull; &nbsp;
          <label>
            <a href="https://github.com/nicholas-romano">GitHub</a>
          </label>
          &nbsp; &bull; &nbsp;
          <label>
            <a href="https://www.linkedin.com/in/nicholas-romano77/">
              LinkedIn
            </a>
          </label>
          &nbsp; &bull; &nbsp;
          <label>
            <a
              href={
                process.env.PUBLIC_URL + "/Documents/Nicholas-Romano-Resume.pdf"
              }
            >
              Resumé
            </a>
          </label>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
