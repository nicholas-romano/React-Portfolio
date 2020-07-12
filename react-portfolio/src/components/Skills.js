import React from 'react';
import Skill from './Skill';

function Skills() {
  return (
    <main>
        <section className="content_section">
                <div className="column">
                    <div className="column-content">
                        <h1>Skills</h1>
                        <p>
                            Here is the list of skills Nick Romano can use for his projects.
                            The list is categorized by the following technology types: Programming languages and
                            Design Software.
                        </p>
                        <h3>Programming Languages</h3>
                        <div className="row">
                            <Skill />
                        </div>
                    </div>
                </div>
        </section>
    </main>
  );
}

export default Skills;