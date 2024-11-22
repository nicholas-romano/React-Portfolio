import React from "react";

const About = () => {
  return (
    <main>
      <section className="content_section">
        <section className="column">
          <div className="row">
            <div className="col-lg-6">
              <div className="column-content bio">
                <h1>About</h1>
                <p>
                  Full Stack Web Developer with graphic design experience
                  educated at the University of North Carolina and James Madison
                  University. Skilled in responsive web technologies such as
                  HTML5, CSS3, JavaScript, JQuery and Bootstrap, and
                  architectures such as ReactJS, ExpressJS, NodeJS and ASP.NET,
                  and back-end programming such as Java and PHP, and
                  implementing connections to RESTful APIs using Spring Boot and
                  data modeling technologies such as Sequelize and Mongoose in
                  connection to databases such as MongoDB and MySQL. Strengths
                  include a passion for creativity, dedication to
                  problem-solving, and commitment to quality work. Excited about
                  the next opportunity to leverage his skills and experience to
                  assist a company or organization succeed.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="column-content">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Nicholas_Romano_Profile_Photo.jpeg`}
                  className="img-fluid"
                  alt="Nick Romano Profile"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
