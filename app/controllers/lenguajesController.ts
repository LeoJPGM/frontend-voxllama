import { getLenguajes, lenguajesData } from "../models/lenguajesService";

interface ApiResponse {
  success: boolean;
  languages: lenguajesData[];
}

export const fetchLenguajesData = async (): Promise<lenguajesData[]> => {
  try {
    const response: ApiResponse = await getLenguajes();
    return response.languages;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
