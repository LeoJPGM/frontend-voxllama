import axiosInstance from "../utils/axiosConfig";

export interface lenguajesData {
  nombre: string;
  descripcion: string;
  peligro: string;
}

export const getLenguajes = async () => {
  const response = await axiosInstance.get("/languages");
  return response.data;
};
