import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Slideshow = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id, title, dir, slides, url, videoSrc } = props;

    //console.log(props); 

    return (
        <div id={id} className="col-md-6 col-sm-12 project">
            <div className="project-container">
                <h3>{title}</h3>
                <Carousel slide={false}>
                {
                     slides.map((slide, i = 1) => (
                        <Carousel.Item key={i}>
                            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/mobile-app-slideshows/' + dir + slide} alt={title + " screenshot " + i} />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
                </Carousel>
                <div>
                    <a href={url} target="_blank" title="Link to Interactive Prototype" rel="noopener noreferrer">
                        <button type="button" className="action-btn btn btn-primary">View Live Interactive Prototype</button>
                    </a>
                    <Button variant="primary" className="action-btn btn btn-primary" onClick={handleShow}>
                        Video Demo
                    </Button>
                
                    <Modal size="lg" show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>{title} Video Demo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe className="youtube-video" src={videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
         </div>
    );
 }

export default Slideshow;