"use client";

import React, { useEffect, useState } from "react";

import { Button } from "./Button";
import { fecthLenguajesData } from "../../controllers/lenguajesController";
import { lenguajesData } from "../../models/lenguajesService";

const LenguajesClientComponent = () => {
  const [lenguajes, setLenguajes] = useState<lenguajesData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fecthLenguajesData();
        setLenguajes(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      {lenguajes.map((lenguaje) => (
        <div
          key={lenguaje.nombre}
          className={`w-44 h-24 border-2 rounded-2xl flex flex-col justify-center p-2 bg-gradient-to-r ${getBackgroundClass(
            lenguaje.nombre
          )}`}
        >
          <span className="text-center font-semibold text-white">
            {lenguaje.nombre}
          </span>
          <Button
            label={"Aprender"}
            href="/views/pages/niveles"
            Classes="border-red-500 border-2 rounded-xl p-1 mt-4 font-bold text-red-400 bg-white hover:bg-red-100"
          />
        </div>
      ))}
    </div>
  );
};

const getBackgroundClass = (nombre: string) => {
  switch (nombre) {
    case "Nivaclé":
      return "from-red-500 to-red-400 border-red-500";
    case "Ainu":
      return "from-blue-500 to-blue-400 border-blue-500";
    case "Wichí Lhamtés Güisnay":
      return "from-green-500 to-green-400 border-green-500";
    case "Zapoteco de San Felipe Tejalápam":
      return "from-yellow-500 to-yellow-400 border-yellow-500";
    case "Cornish":
      return "from-purple-500 to-purple-400 border-purple-500";
    case "Guaraní":
      return "from-pink-500 to-pink-400 border-pink-500";
    case "Koro":
      return "from-teal-500 to-teal-400 border-teal-500";
    default:
      return "from-gray-500 to-gray-400 border-gray-500";
  }
};

export default LenguajesClientComponent;
