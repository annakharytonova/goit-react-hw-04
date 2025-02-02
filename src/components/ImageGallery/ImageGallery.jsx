import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard key={image.id} image={image} />
        </li>
      ))}
      <li>
        <div>
          <img src="" alt="" />
        </div>
      </li>
    </ul>
  );
};

export default ImageGallery;
