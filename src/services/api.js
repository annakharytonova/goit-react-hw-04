import axios from "axios";

const API_KEY = "mE9DDnagy4oLHrffzHfDnkyZrOUXzPrIMaJAhjchj2U";
const BASE_URL = "https://api.unsplash.com/search/photos";

const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { query, page, per_page: 12, client_id: API_KEY },
    });
    console.log("API Response:", response.data);
    return {
      results: response.data.results,
      total_pages: response.data.total_pages,
    };
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Something went wrong! Try again later...");
  }
};

export default fetchImages;
