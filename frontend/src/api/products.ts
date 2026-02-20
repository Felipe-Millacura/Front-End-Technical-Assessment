import axios from "axios";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

export type Product = {
  id: number;
  title: string;
  image: string;
};

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get(PRODUCTS_URL);

    return data.map((product: any) => ({
      id: product.id,
      title: product.title,
      image: product.image
    }));
  } catch (error: any) {
    if (error.response) {
      // servidor respondió
      throw new Error(`API Error: ${error.response.status}`);
    }
    if (error.request) {
      // no hubo respuesta
      throw new Error("Network error. Please check your connection.");
    }
    // error inesperado
    throw new Error("Unexpected error fetching products.");
  }
};