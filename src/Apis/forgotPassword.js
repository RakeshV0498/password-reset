import axios from "axios";
import { backendURL } from "./constants.js";

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${backendURL}forgot-password`, email);
    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
