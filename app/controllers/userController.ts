import {
  registerUser,
  loginUser,
  RegisterUserData,
  LoginUserData,
} from "../models/userService";

export const handleUserRegistration = async (
  formData: RegisterUserData,
  setErrorMessage: (message: string | null) => void,
  setSuccessMessage: (message: string | null) => void
): Promise<void> => {
  try {
    const result = await registerUser(formData);
    setSuccessMessage(result.message);
    setErrorMessage(null);
  } catch (error: any) {
    setErrorMessage(error?.response?.data?.message || "Error desconocido");
    setSuccessMessage(null);
  }
};

export const handleUserLogin = async (
  formData: LoginUserData,
  setErrorMessage: (message: string | null) => void,
  setUser: (user: any) => void
): Promise<void> => {
  try {
    const result = await loginUser(formData);
    setUser(result.user);
    setErrorMessage(null);
  } catch (error: any) {
    setErrorMessage(error?.response?.data?.message || "Error desconocido");
  }
};
