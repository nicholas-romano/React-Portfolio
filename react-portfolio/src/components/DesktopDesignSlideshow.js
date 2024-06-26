import React from 'react';
import CarouselContainer from './CarouselContainer';

const DesktopDesignSlideshow = props => {

    const { id, title, dir, slides } = props;

        return (
            <>
            <div id={id} className="col-md-6 col-sm-12 project">
            <div className="project-container">
                <h3>{title}</h3>
                <CarouselContainer 
                    slides={slides}
                    title={title}
                    dir={dir}
                />
            </div>
         </div>
            </>
        )

 }

export default DesktopDesignSlideshow;