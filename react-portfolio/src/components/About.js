import React from 'react';

const About = () => {
  return (
    <main>
        <section className="content_section">
          <section className="column">

            <div className="row">
              <div className="col-lg-6">
                
                  <div className="column-content bio">
                    <h1>About</h1>
                    <p>Web Designer and Developer educated at the University of North Carolina and James Madison University. 
                      Skilled in design prototyping software such as Figma, and the Adobe Creative Suite including Photoshop, 
                      Illustrator, and XD and skilled in programming web technologies such as HTML, CSS, JavaScript, JQuery and 
                      Bootstrap, and architectures such as ReactJS, ExpressJS, and NodeJS. Strengths include a passion for 
                      creativity, dedication to problem-solving, and commitment to quality work.
                    </p>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="column-content">
                      <img src={process.env.PUBLIC_URL + "/images/Nick_Romano_Profile_Photo.jpg"} className="img-fluid" alt="Nick Romano Profile" />
                  </div>
              </div>
            </div>

          </section>
        </section>
    </main>
  );
}

export default About;