import axios from "axios";

const STRAPI_URL = "http://localhost:1337";

export const getAbilities = async () => {
  try {
    const { data } = await axios.get(
      `${STRAPI_URL}/api/abilities?fields=name`
    );

    return data.data.map((ability: any) => ({
      name: ability.name,
    }));
  } catch (error) {
    console.error("Error fetching abilities content:", error);
    throw error;
  }
};