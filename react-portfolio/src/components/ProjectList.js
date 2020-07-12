import React from 'react';
import Project from './Project';

function ProjectList() {
  return (
    <section id="project_porfolio" className="content_section">
        <h3>Project Portfolio</h3>
        <div className="category">
            <div className="row">
                <Project />
            </div>
        </div>
    </section>
  );
}

export default ProjectList;