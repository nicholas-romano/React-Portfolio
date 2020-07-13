import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const Project = props => {

    const [tabState, setTabState] = useState({
        tab: 'Description'
    })

    const { id, title, description, projectImg, technologies, software } = props;

    const getLinks = (liveSite, gitRepo) => {
        if (liveSite !== undefined && gitRepo !== undefined) {
            return (
                <>
                <a href={liveSite} title="Link to Live Site" rel="noopener noreferrer">
                    <button type="button" className="action-btn btn btn-primary">Live Site</button>
                </a>
                <a href={gitRepo} title="Link to GitHub Repo" rel="noopener noreferrer">
                    <button type="button" className="action-btn btn btn-primary">GitHub Repo</button>
                </a>
                </>
            )
        } else if (liveSite === undefined && gitRepo !== undefined) {
            return (
                <a href={gitRepo} title="Link to GitHub Repo"rel="noopener noreferrer">
                    <button type="button" className="action-btn-full btn btn-primary">GitHub Repo</button>
                </a>
            )
        } else if (liveSite !== undefined && gitRepo === undefined) {
            return (
                <a href={liveSite} title="Link to Live Site" rel="noopener noreferrer">
                    <button type="button" className="action-btn-full btn btn-primary">Live Site</button>
                </a>
            )
        } else if (liveSite === undefined && gitRepo === undefined) {
            return <></>
        }
    }

    return (
        <div id={id} className="col-lg-4 col-md-6 col-sm-12 project">
            <div className="project-container">
                <h3>{title}</h3>
                        {getLinks(props.liveSite, props.gitRepo)}
                    <img className="img-fluid" src={process.env.PUBLIC_URL + "images/project_thumbnails/" + projectImg} alt={title} />
                    <ul className="nav nav-tabs col-sm-12" id="recipe-book" role="tablist">
                        <li className="nav-item">
                            <a className={tabState.tab === 'Description' ? 'nav-link active' : 'nav-link'} id="recipe-book-description" onClick={() => setTabState({tab: 'Description'})} data-toggle="tab" href="javascript:void(0)" role="tab" aria-controls="Description" aria-selected="true">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className={tabState.tab === 'Technologies' ? 'nav-link active' : 'nav-link'} id="recipe-book-technologies" data-toggle="tab" onClick={() => setTabState({tab: 'Technologies'})} href="javascript:void(0)" role="tab" aria-controls="Technologies" aria-selected="false">Technologies</a>
                        </li>
                        <li className="nav-item">
                            <a className={tabState.tab === 'Software' ? 'nav-link active' : 'nav-link'} id="recipe-book-software" data-toggle="tab" onClick={() => setTabState({tab: 'Software'})} href="javascript:void(0)" role="tab" aria-controls="Software" aria-selected="false">Software</a>
                        </li>
                    </ul>
                        <div id="recipe-book-content" className="tab-content project-description">
                        <div className={tabState.tab === 'Description' ? 'tab-pane fade show active' : 'tab-pane fade'} id="recipe-book-description-content" role="tabpanel" aria-labelledby="description-tab">
                            <h5>Description</h5>
                            <p>{description}</p> 
                        </div>
                        <div className={tabState.tab === 'Technologies' ? 'tab-pane fade show active' : 'tab-pane fade'} id="recipe-book-technologies-content" role="tabpanel" aria-labelledby="technologies-tab">
                            <h5>Technologies Used:</h5>
                            {
                                technologies.map((tech, index) => (
                                    <TechItem
                                        key={index}
                                        techImg={tech.techImg}
                                        techName={tech.techName}
                                    />
                                ))
                            }
                        </div>
                        <div className={tabState.tab === 'Software' ? 'tab-pane fade show active' : 'tab-pane fade'} role="tabpanel" aria-labelledby="software-tab">
                            <h5>Software used:</h5>
                            {
                                software.map((tech, index) => (
                                    <TechItem
                                        key={index}
                                        techImg={tech.techImg}
                                        techName={tech.techName}
                                    />
                                ))
                            }
                        </div>
                        </div>
                    </div>
                </div>
    );
 }

export default Project;