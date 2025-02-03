import s from "./ImageCard.module.css";

const ImageCard = ({ id, urls, description }) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={description}
        id={id}
        width={300}
        height={200}
        className={s.image}
      />
    </div>
  );
};
export default ImageCard;
