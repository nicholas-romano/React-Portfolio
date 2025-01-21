import React from "react";
import CarouselContainer from "./CarouselContainer";

const DesktopDesignSlideshow = (props) => {
  const { id, title, url, desc, dir, slides } = props;

  return (
    <>
      <div id={id} className="col-lg-6 project">
        <div className="project-container">
          <h3>{title}</h3>
          <div className="project-description">
            <div>
              {desc}{" "}
              {url ? (
                <a href={url} target="_blank" rel="noreferrer">
                  ==&gt; View {title} Live Site
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <CarouselContainer slides={slides} dir={dir} />
        </div>
      </div>
    </>
  );
};

export default DesktopDesignSlideshow;
