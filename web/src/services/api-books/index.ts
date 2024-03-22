import axios from "axios";

export const apiBooks = axios.create({
  baseURL: "https://www.googleapis.com",
});
