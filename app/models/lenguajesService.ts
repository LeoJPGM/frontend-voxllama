import axiosInstance from "../utils/axiosConfig";

export interface lenguajesData {
  languages_Id: number;
  languages_Nombre: string;
  languages_Descripcion: string;
  languages_threat_level: string;
}

export const getLenguajes = async () => {
  const response = await axiosInstance.get("/languages");
  return response.data;
};
