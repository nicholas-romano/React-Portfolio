import React, { useEffect, useState } from 'react';
import Slideshow from './Slideshow';
import projectData from '../data/slideshows.json';
import '../App.css';

const ProjectList = () => {

  const [projectState, setProjectState] = useState([]);

  useEffect(() => {
    setProjectState(projectData);
  }, []);

  //console.log(projectState);


  return (
    <section id="project_porfolio" className="content_section">
      <h3>Design Projects</h3>
        <div className="category">
            <div className="row">
              {
                projectState.map((project) => (
                  <Slideshow 
                    key={project.id}
                    id={project.id}
                    title={project.title}
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