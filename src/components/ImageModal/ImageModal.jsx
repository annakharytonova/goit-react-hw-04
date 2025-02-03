import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, closeModal, isOpen }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
    >
      <div onClick={closeModal} className={s.overlay}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.image}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
