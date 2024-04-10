import axios from "axios";

const API_KEY = "HYDmQ3_W1ZMmH4KRJH6dpcjnRt00YJyuccJLUc0WKa0";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

export const getPhotos = async (query, page = 1, per_page = 15) => {
  const { data } = await axios.get("search/photos", {
    params: {
      query,
      page,
      per_page,
    },
  });

  return data;
};
