import React from 'react';
import screenshots from '../assets/images/project_thumbnails/Recipe-Book-thumbnail.png';


function Project() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 project">
        <div className="project-container">
            <h3>Recipes Book</h3>
                    <a href="https://create-recipe-book.herokuapp.com/" title="Link to live site" rel="noopener noreferrer">
                      <button type="button" className="action-btn btn btn-primary">Live Site</button>
                    </a>
                    <a href="https://github.com/nicholas-romano/Recipes-Book" title="Link to GitHub Repository" rel="noopener noreferrer">
                      <button type="button" className="action-btn btn btn-primary">GitHub Repo</button>
                    </a>
                    <img className="img-fluid" src={screenshots} alt="Recipes Book" />
        </div>
    </div>
  );
}

export default Project;