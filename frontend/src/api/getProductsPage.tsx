import axios from "axios";

const STRAPI_URL = "http://localhost:1337";

export const getProductsPage = async () => {
  const { data } = await axios.get(
    `${STRAPI_URL}/api/products-page`
  );

  return data.data;
};