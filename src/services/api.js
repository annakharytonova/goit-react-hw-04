import axios from "axios";

const API_KEY = "mE9DDnagy4oLHrffzHfDnkyZrOUXzPrIMaJAhjchj2U";

const fetchImages = async (query, page, perPage) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&hitsPerPage=${perPage}&client_id=${API_KEY}`
  );
  return response.data;
};

export default fetchImages;
