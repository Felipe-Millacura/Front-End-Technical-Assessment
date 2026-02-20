import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const getUser = async (): Promise<User> => {
  try {
    const { data } = await axios.get<User>(`${API_URL}`);
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};