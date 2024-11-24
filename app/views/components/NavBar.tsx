import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex justify-between fixed inset-x-0 bottom-0 p-2 text-cyan-700 border-t-2 bg-white">
      <Link href={"/"} className="flex flex-col items-center">
        <Icon className="text-4xl" icon="tabler:home" />
        <span>Inicio</span>
      </Link>
      <Link
        href={"/views/pages/lenguajes"}
        className="flex flex-col items-center"
      >
        <Icon className="text-4xl" icon="tabler:world-pin" />
        <span>Lenguajes</span>
      </Link>
      <Link
        href={"/views/pages/ejercicios"}
        className="flex flex-col items-center"
      >
        <Icon className="text-4xl" icon="tabler:address-book" />
        <span>Ejercicios</span>
      </Link>
      <Link
        href={"/views/pages/historias"}
        className="flex flex-col items-center"
      >
        <Icon className="text-4xl" icon="tabler:book" />
        <span>Historias</span>
      </Link>
    </nav>
  );
};
