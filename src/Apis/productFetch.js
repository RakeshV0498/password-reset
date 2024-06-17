import axios from "axios";
import { backendURL } from "./constants";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${backendURL}products/`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
