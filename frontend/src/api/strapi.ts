import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const getPortfolio = async () => {
  const { data } = await api.get("/portfolio-items?populate=*");
  return data;
};