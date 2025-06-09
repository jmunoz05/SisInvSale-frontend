import { postData } from "./httpservice";

const apiUrl = import.meta.env.VITE_API_URL;


export const register = async (user: any) => {
  try {
    return await postData(`${apiUrl}/auth/register`, user);
  } catch (error) {
    console.error("Error register:", error);
    return false;
  }
}

export const login = async (user: any) => {
  try {
    return await postData(`${apiUrl}/auth/login`, user);
  } catch (error) {
    console.error("Error login:", error);
    return null;
  }
}