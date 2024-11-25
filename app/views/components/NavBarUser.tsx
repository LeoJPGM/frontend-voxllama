"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const NavBarUser = () => {
  const [nombreUsuario, setNombreUsuario] = useState<string | null>(null);

  useEffect(() => {
    // Obtener el nombre del usuario desde el localStorage
    const nombre = localStorage.getItem("nombreDeUsuario");
    setNombreUsuario(nombre);
  }, []);

  return (
    <nav className="flex justify-between p-4">
      <div className="flex">
        <div
          className="w-14 h-14 border-2 bg-cover bg-center rounded-full"
          style={{ backgroundImage: "url('/images/perfil/perfil_1.png')" }}
        ></div>
        <div className="flex flex-col justify-center ml-3 text-sm">
          {nombreUsuario ? (
            <span className="text-gray-700">
              Hola,{" "}
              <span className="font-bold text-cyan-700">{nombreUsuario}</span>
            </span>
          ) : (
            <span className="text-gray-700">
              Hola,{" "}
              <Link
                className="font-bold text-cyan-700"
                href={"/views/pages/register"}
              >
                Registrate
              </Link>{" "}
              o{" "}
              <Link
                className="font-bold text-cyan-700"
                href={"/views/pages/login"}
              >
                Logeate
              </Link>
            </span>
          )}
          <span className="font-bold">Bienvenido</span>
        </div>
      </div>

      <div className="flex p-4">
        <Icon className="text-3xl mr-2 text-gray-400" icon="tabler:bell" />
        <Icon className="text-3xl text-gray-400" icon="tabler:settings" />
      </div>
    </nav>
  );
};
