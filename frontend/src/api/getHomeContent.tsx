import axios from "axios";

const STRAPI_URL = import.meta.env.STRAPI_HOST || "http://localhost:1337";

export const getHomeContent = async () => {
  try {
    const response = await axios.get(
      `${STRAPI_URL}/api/home?populate=cover`
    );

    const { title, description, cover } = response.data.data;
    const image = `${STRAPI_URL}${cover.url}`;

    return { title, description, image };
  } catch (error) {
    console.error("Error fetching home content:", error);
    throw error;
  }
};

// import axios from "axios";

// const STRAPI_URL = import.meta.env.STRAPI_HOST || "http://localhost:1337";

// export const getHomeContent = async () => {
//   try {
//     const response = await axios.get(
//       `${STRAPI_URL}/api/home?populate=cover`
//     );

//     const { title, description, cover } = response.data.data;
//     const image = `${STRAPI_URL}${cover.data.url}`;

//     return { title, description, image };
//   } catch (error) {
//     console.error("Error fetching home content:", error);
//     throw error;
//   }
// };
