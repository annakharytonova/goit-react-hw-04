import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li
          key={image.id}
          className={s.item}
          onClick={() => onImageClick(image)}
        >
          <ImageCard
            id={image.id}
            urls={image.urls}
            description={image.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
