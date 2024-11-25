import { getLenguajes, lenguajesData } from "../models/lenguajesService";

export const fecthLenguajesData = async () => {
  try {
    const lenguajes: lenguajesData[] = await getLenguajes();
    return lenguajes;
  } catch (error) {
    console.error("Error al obtener la data", error);
    throw error;
  }
};
