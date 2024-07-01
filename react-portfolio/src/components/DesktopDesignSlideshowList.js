import React, { useEffect, useState } from 'react';
import DesktopDesignSlideshow from './DesktopDesignSlideshow';
import projectData from '../data/desktop-design-slideshows.json';
import '../App.css';

const ProjectList = () => {

  const [projectState, setProjectState] = useState([]);

  useEffect(() => {
    setProjectState(projectData);
  }, []);

  return (
    <section id="project_porfolio" className="content_section">
      <h3>Desktop Design Projects</h3>
        <div className="category">
            <div className="row">
              {
                projectState.map((project) => (
                  <DesktopDesignSlideshow 
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    desc={project.desc}
                    dir={project.dir}
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