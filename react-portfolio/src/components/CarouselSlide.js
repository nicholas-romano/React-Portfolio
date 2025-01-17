import { useState } from "react";
import ModalSlideshowDesign from "./ModalSlideshowDesign";

function CarouselSlide({ slide, dir }) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <ModalSlideshowDesign
        slide={slide}
        dir={dir}
        lgShow={lgShow}
        setLgShow={setLgShow}
      />
      <button id={slide.name} onClick={() => setLgShow(true)}>
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + "images/" + dir + slide.image}
          alt={slide.name}
        />
      </button>
    </>
  );
}

export default CarouselSlide;
