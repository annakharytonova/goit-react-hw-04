import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setErrorMessage(false);
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
        console.log("Total Pages:", data.total_pages);
        setErrorMessage("");
      } catch (error) {
        console.error("Error fetching images:", error);
        setErrorMessage("Something went wrong! Try again later...");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalPages(0);
    setErrorMessage("");
  };

  const loadMore = () => {
    if (!isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {images.length > 0 ? (
        <ImageGallery
          images={images}
          onSubmit={setImages}
          onImageClick={handleImageClick}
        />
      ) : null}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      <ImageModal
        image={selectedImage}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default App;
