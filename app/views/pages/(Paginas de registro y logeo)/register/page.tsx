import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../../components";

export default function RegisterPage() {
  return (
    <>
      <section className="w-full h-screen bg-sky-500 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-white text-6xl font-bold">VoxLLama</h1>
          <Icon className="text-6xl" icon="fluent-emoji:llama" />
        </div>

        <form className="flex flex-col gap-4">
          <input className="p-2 rounded-md" placeholder="Nombre" />
          <input className="p-2 rounded-md" placeholder="Apellido" />
          <input className="p-2 rounded-md" placeholder="Email" />
          <input className="p-2 rounded-md" placeholder="Contraseña" />

          <Button
            label={"Registrarse"}
            Classes="border-2 border-lime-600 p-2 rounded-md text-white font-semibold bg-lime-600"
          />
        </form>
      </section>
    </>
  );
}
