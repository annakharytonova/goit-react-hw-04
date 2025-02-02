import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  // const [page, setPage] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const response = await fetchImages();
      setImages(response.results);
    };
    getData();
  }, [query]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Loader />
      <ImageGallery images={images} onSubmit={setImages} />
      <ErrorMessage message={"Something went wrong! Try again later..."} />
      <LoadMoreBtn />
      {/* <ImageModal /> */}
    </>
  );
}

export default App;
