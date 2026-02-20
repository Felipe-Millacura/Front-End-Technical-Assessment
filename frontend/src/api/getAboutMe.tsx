import axios from "axios";

const STRAPI_URL = "http://localhost:1337";

export const getAboutMe = async () => {
  try {
    const response = await axios.get(
      `${STRAPI_URL}/api/about-me?populate=image`
    );

    const { title, subTitle, description, image } = response.data.data;
    // image es un array, tomamos el primer elemento
    const imageAM = `${STRAPI_URL}${image.formats.thumbnail.url}`;

    return { title, subTitle, description, imageAM };
  } catch (error) {
    console.error("Error fetching about-me content:", error);
    throw error;
  }
};
