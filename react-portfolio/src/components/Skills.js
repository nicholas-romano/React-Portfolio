import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import Skill from './Skill';

function Skills() {

    const [programmingState, setProgrammingState] = useState([]);
    const [designState, setDesignState] = useState([]);


    useEffect(() => {
        setProgrammingState(skillsData[0].programming);
        setDesignState(skillsData[1].design);
    }, []);

    useEffect(() => {
        //console.log("programming state: ", programmingState);
    }, [programmingState]);

    useEffect(() => {
        //console.log("design state: ", designState);
    }, [designState]);

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
                            {
                                programmingState.map((skill, index) => (
                                <Skill 
                                    key={index}
                                    skillImage={skill.skillImage}
                                    skillName={skill.skillName}
                                />
                                ))
                            }
                        </div>
                        <h3>Design Software</h3>
                        <div className="row">
                            {
                                designState.map((skill, index) => (
                                <Skill 
                                    key={index}
                                    skillImage={skill.skillImage}
                                    skillName={skill.skillName}
                                />
                                ))
                            }
                        </div>
                    </div>
                </div>
        </section>
    </main>
  );
}

export default Skills;