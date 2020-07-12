import React from 'react';
import photo from '../assets/images/Nick_Romano_Profile_Photo.jpg';

function About() {
  return (
    <main>
        <section className="content_section">
          <section className="column">

            <div className="row">
              <div className="col-lg-6">
                
                  <div className="column-content bio">
                    <h1>About</h1>
                    <p>Full Stack Web Developer with graphic design experience educated at the 
                      University of North Carolina and James Madison University. Skilled in 
                      responsive web technologies such as HTML, CSS, and JavaScript, as well as 
                      libraries such as JQuery and Bootstrap, and architectures such as ReactJS, 
                      ExpressJS, and NodeJS. Strengths include a passion for creativity, dedication 
                      to problem-solving, and commitment to quality work. Excited about the next 
                      opportunity to leverage his skills and experience to assist a company or 
                      organization succeed.
                    </p>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="column-content">
                      <img src={photo} className="img-fluid" alt="Nick Romano Profile" />
                  </div>
              </div>
            </div>

          </section>
        </section>
    </main>
  );
}

export default About;