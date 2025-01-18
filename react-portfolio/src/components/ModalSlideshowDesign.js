import Modal from "react-bootstrap/Modal";

function ModalSlideshowDesign({ slide, dir, lgShow, setLgShow }) {
  return (
    <Modal
      size="xl"
      show={lgShow}
      scrollable={true}
      onHide={() => setLgShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {slide.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + "images/" + dir + slide.modalImage}
          alt={slide.name}
        />
      </Modal.Body>
    </Modal>
  );
}

export default ModalSlideshowDesign;
