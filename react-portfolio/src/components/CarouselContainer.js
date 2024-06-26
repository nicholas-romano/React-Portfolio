import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselContainer(props) {

  const { dir, slides, title } = props;

  return (
    <Carousel slide={false}>
      {
                     slides.map((slide, i = 1) => (
                        <Carousel.Item key={i}>
                            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/' + dir + slide} alt={title + " screenshot " + i} />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }          
    </Carousel>
  );
}

export default CarouselContainer;