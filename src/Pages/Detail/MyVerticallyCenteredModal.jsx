import React from "react";
import Modal from "react-bootstrap/Modal";
import Ratio from "react-bootstrap/Ratio";
const MyVerticallyCenteredModal = (props) => {
  const { movietrailer } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <Ratio aspectRatio="16x9">
          <iframe src={`${movietrailer}?autoplay=1`} allowFullScreen />
        </Ratio>
      </Modal.Body>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
