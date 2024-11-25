import axiosInstance from "../utils/axiosConfig";

export interface RegisterUserData {
  nombre: string;
  email: string;
  password: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  nombre: string;
  email: string;
}

export interface LoginResponse {
  message: string;
  user: UserResponse;
}

export const registerUser = async (
  userData: RegisterUserData
): Promise<{ message: string }> => {
  const response = await axiosInstance.post("/users/register", userData);
  return response.data;
};

export const loginUser = async (
  userData: LoginUserData
): Promise<LoginResponse> => {
  const response = await axiosInstance.post("/users/login", userData);
  return response.data;
};
