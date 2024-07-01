import React from 'react';

const Credentials = () => {
  return (
    <main>
        <section className="content_section">
          <section className="column">

            <div className="row">
              <div className="col-lg-12">
                
                  <div className="column-content bio">
                    <h1>Credentials</h1>
                    <p>
                      <a href={process.env.PUBLIC_URL + '/Documents/Figma_UI_UX_Design_Advanced_Certificate.pdf'} target="_blank" rel="noopener noreferrer">Figma UI UX Design Advanced Certificate</a>
                    </p>
                    <p>
                      <a href={process.env.PUBLIC_URL + '/Documents/UNC_Full_Stack_Development_Coding_Bootcamp_Certificate.pdf'} target="_blank" rel="noopener noreferrer">University of North Carolina Full Stack Web Development Coding Bootcamp Certificate</a>
                    </p>
                    <p>
                      <a href={process.env.PUBLIC_URL + '/Documents/CIW_Cert_Advanced_HTML5_CSS3_Specialist.pdf'} target="_blank" rel="noopener noreferrer">Certified Internet Web Professional Advanced HTML5 &amp; CSS3 Specialist</a>
                    </p>
                    <p>
                      <a href={process.env.PUBLIC_URL + '/Documents/Nova_Web_Design_and_Development_Career_Studies_Certificate.jpeg'} target="_blank" rel="noopener noreferrer">Northern Virginia Community College Web Design and Development Career Studies Certificate</a>
                    </p>
                    <p>
                      <a href={process.env.PUBLIC_URL + '/Documents/James_Madison_University_Bachelor_of_Science_Degree.jpeg'} target="_blank" rel="noopener noreferrer">James Madison University Bachelor of Science Degree in Media Arts and Design</a>
                    </p>
                  </div>
              </div>
            </div>

          </section>
        </section>
    </main>
  );
}

export default Credentials;