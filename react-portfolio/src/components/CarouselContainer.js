import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselSlide from "./CarouselSlide";

function CarouselContainer({ slides, dir }) {
  return (
    <Carousel slide={false}>
      {slides.map((slide, i = 1) => (
        <Carousel.Item key={i}>
          <CarouselSlide slide={slide} dir={dir} key={i} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselContainer;
