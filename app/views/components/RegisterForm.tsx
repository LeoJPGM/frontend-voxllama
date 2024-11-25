"use client";

import { useState } from "react";
import { Button } from "./Button";
import axiosInstance from "../../utils/axiosConfig";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/register", formData);
      console.log("Registro exitoso:", response.data);
      alert("Usuario registrado con éxito");
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Hubo un error al registrar al usuario.");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        className="p-2 rounded-md"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      <input
        className="p-2 rounded-md"
        name="apellido"
        placeholder="Apellido"
        value={formData.apellido}
        onChange={handleChange}
      />
      <input
        className="p-2 rounded-md"
        name="email"
        placeholder="Email"
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

      <Button
        label="Registrarse"
        Classes="border-2 border-lime-600 p-2 rounded-md text-white font-semibold bg-lime-600"
        onClick={() => handleSubmit()}
      />
    </form>
  );
}
