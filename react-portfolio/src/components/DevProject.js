import React, { useState } from "react";
import TechItem from "./TechItem";
import ButtonLink from "./ButtonLink";
import { TextExpander } from "./TextExpander";

const DevProject = (props) => {
  const [tabState, setTabState] = useState({
    tab: "Description",
  });

  const {
    id,
    title,
    liveSite,
    gitRepo,
    description,
    projectImg,
    technologies,
    software,
  } = props;

  const getLinks = (liveSite, gitRepo) => {
    if (liveSite !== undefined && gitRepo !== undefined) {
      return (
        <>
          <ButtonLink
            url={liveSite}
            title="Live Site"
            altText="Link to Live Site"
            btnSize="action-btn"
          />
          <ButtonLink
            url={gitRepo}
            title="GitHub Repo"
            altText="Link to Git Hub Repo"
            btnSize="action-btn"
          />
        </>
      );
    } else if (liveSite === undefined && gitRepo !== undefined) {
      return (
        <ButtonLink
          url={gitRepo}
          title="GitHub Repo"
          altText="Link to Git Hub Repo"
          btnSize="action-btn-full"
        />
      );
    } else if (liveSite !== undefined && gitRepo === undefined) {
      return (
        <>
          <ButtonLink
            url={liveSite}
            title="Live Site"
            altText="Link to Live Site"
            btnSize="action-btn-full"
          />
        </>
      );
    } else if (liveSite === undefined && gitRepo === undefined) {
      return <></>;
    }
  };

  return (
    <div id={id} className="col-lg-4 col-md-6 col-sm-12 project">
      <div className="project-container">
        <h3>{title}</h3>
        {getLinks(liveSite, gitRepo)}
        <img
          className="img-fluid"
          src={
            process.env.PUBLIC_URL + "images/project_thumbnails/" + projectImg
          }
          alt={title}
        />
        <ul className="nav nav-tabs col-sm-12" role="tablist">
          <li className="nav-item">
            <button
              className={
                tabState.tab === "Description" ? "nav-link active" : "nav-link"
              }
              onClick={() => setTabState({ tab: "Description" })}
              data-toggle="tab"
              role="tab"
              aria-controls="Description"
              aria-selected="true"
            >
              Description
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                tabState.tab === "Technologies" ? "nav-link active" : "nav-link"
              }
              data-toggle="tab"
              onClick={() => setTabState({ tab: "Technologies" })}
              role="tab"
              aria-controls="Technologies"
              aria-selected="false"
            >
              Technologies
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                tabState.tab === "Software" ? "nav-link active" : "nav-link"
              }
              data-toggle="tab"
              onClick={() => setTabState({ tab: "Software" })}
              role="tab"
              aria-controls="Software"
              aria-selected="false"
            >
              Software
            </button>
          </li>
        </ul>
        <div className="tab-content project-description">
          <div
            className={
              tabState.tab === "Description"
                ? "tab-pane fade show active"
                : "tab-pane fade"
            }
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <h5>Description:</h5>
            <TextExpander>{description}</TextExpander>
          </div>
          <div
            className={
              tabState.tab === "Technologies"
                ? "tab-pane fade show active"
                : "tab-pane fade"
            }
            role="tabpanel"
            aria-labelledby="technologies-tab"
          >
            <h5>Technologies Used:</h5>
            {technologies.map((tech, index) => (
              <TechItem
                key={index}
                techImg={tech.techImg}
                techName={tech.techName}
              />
            ))}
          </div>
          <div
            className={
              tabState.tab === "Software"
                ? "tab-pane fade show active"
                : "tab-pane fade"
            }
            role="tabpanel"
            aria-labelledby="software-tab"
          >
            <h5>Software used:</h5>
            {software.map((tech, index) => (
              <TechItem
                key={index}
                techImg={tech.techImg}
                techName={tech.techName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevProject;
