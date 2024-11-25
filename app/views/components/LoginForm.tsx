"use client";

import { useState } from "react";
import { Button } from "./Button";
import axiosInstance from "../../utils/axiosConfig";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/login", formData);
      console.log("Login exitoso:", response.data);
      alert("Login exitoso");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Credenciales incorrectas o error en el servidor.");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        className="p-2 rounded-md"
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className="p-2 rounded-md"
        name="password"
        placeholder="Contraseña"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />

      {/* El botón de envío ahora usará el onSubmit del formulario */}
      <Button
        label="Ingresar"
        Classes="border-2 border-amber-600 p-2 rounded-md text-white font-semibold bg-amber-600"
      />
    </form>
  );
}
