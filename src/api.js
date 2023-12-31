import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID h4DKhDLHv55Dzm5N1qHX9gTWjL8kCo8vTc_80CftRuE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
