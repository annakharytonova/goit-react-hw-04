const ImageCard = ({ id, urls, links }) => {
  return (
    <div>
      <img src={urls.small} alt={links.html} id={id} />
    </div>
  );
};
export default ImageCard;
