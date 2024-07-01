import React from 'react';
import CarouselContainer from './CarouselContainer';
import ModalContainer from './ModalContainer';
import ButtonLink from './ButtonLink';

const MobileAppSlideshow = props => {

    const { id, title, desc, dir, slides, url, videoSrc } = props;

    if (url !== null && videoSrc !== null) {
        return (
            <>
            <div id={id} className="col-md-6 col-sm-12 project">
            <div className="project-container">
                <h3>{title}</h3>
                <div className="project-description">{desc}</div>
                <CarouselContainer 
                    slides={slides}
                    title={title}
                    dir={dir}
                />
                <ButtonLink
                    title="View Live Interactive Prototype"
                    altText="Link to Interactive Prototype"
                    btnSize="action-btn"
                    url={url}
                />
                <div>
                    <ModalContainer
                        title={title}
                        videoSrc={videoSrc}
                    />
                </div>
            </div>
         </div>
            </>
        )
    } else if (url === null && videoSrc !== null) {
        return (
            <div id={id} className="col-md-6 col-sm-12 project">
                <div className="project-container">
                    <h3>{title}</h3>
                    <CarouselContainer 
                        slides={slides}
                        title={title}
                        dir={dir}
                    />
                   <div>
                        <ModalContainer
                            title={title}
                            videoSrc={videoSrc}
                        />
                    </div>
                </div>
            </div>
        )
    } else if (url !== null && videoSrc === null) {
        return (
            <div id={id} className="col-md-6 col-sm-12 project">
                <div className="project-container">
                    <h3>{title}</h3>
                    <CarouselContainer 
                        slides={slides}
                        title={title}
                        dir={dir}
                    />
                    <div>
                        <ButtonLink
                            title="View Live Interactive Prototype"
                            altText="Link to Interactive Prototype"
                            btnSize="action-btn-full"
                            url={url}
                        />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
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
        );
    }

 }

export default MobileAppSlideshow;