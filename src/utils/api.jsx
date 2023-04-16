import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en" },
  headers: {
    "X-RapidAPI-Key": "fca0dcccc5msh822c5e6c0081ef5p1d246ejsn171792a10cb3",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
