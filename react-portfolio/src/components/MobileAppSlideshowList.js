import React, { useEffect, useState } from 'react';
import MobileAppSlideshow from './MobileAppSlideshow';
import projectData from '../data/mobile-app-slideshows.json';
import '../App.css';

const ProjectList = () => {

  const [projectState, setProjectState] = useState([]);

  useEffect(() => {
    setProjectState(projectData);
  }, []);

  //console.log(projectState);


  return (
    <section id="project_porfolio" className="content_section">
      <h3>Mobile App Design Projects</h3>
        <div className="category">
            <div className="row">
              {
                projectState.map((project) => (
                  <MobileAppSlideshow 
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    desc={project.desc}
                    dir={project.dir}
                    videoSrc={project.videoSrc}
                    url={project.url}
                    slides={project.slides}
                  />
                ))
              }
            </div>
        </div>
    </section>
  );
}

export default ProjectList;