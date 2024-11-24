import { Icon } from "@iconify/react/dist/iconify.js";

export default function EjerciciosPage() {
  return (
    <div className="flex flex-col">
      <section>
        <div className="border-b-2 p-4">
          <h1 className="text-2xl font-bold">Mis lenguajes</h1>

          <div className="flex pt-6 gap-4">
            <div className="w-32 h-24 border-2 rounded-2xl flex flex-col justify-center items-center bg-blue-500">
              <h2 className="font-medium">Ainu</h2>
            </div>

            <div className="w-32 h-24 border-2 rounded-2xl flex flex-col justify-center items-center bg-red-500">
              <h2 className="font-medium">Nivaclé</h2>
            </div>

            <div className="w-32 h-24 border-2 rounded-2xl flex flex-col justify-center items-center bg-purple-500">
              <h2 className="font-medium">Cornish</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-4">
          <h1 className="text-xl font-bold">Progreso: Nivel Básico</h1>
          <div className="w-full border-2 rounded-xl border-gray-200">
            <div className="w-2/4 h-2 bg-lime-500"></div>
          </div>
        </div>
      </section>

      <section className="border-2">
        <div className="border-b-2">
          <div className="flex justify-between text-xl p-4">
            <h2 className="font-semibold">Introducción</h2>
            <Icon
              className="text-4xl text-gray-400"
              icon="tabler:arrow-badge-down"
            />
          </div>

          <div className="flex flex-col p-4 gap-4 text-white">
            <div className="flex items-center border-2 rounded-md p-2 gap-4 bg-blue-500">
              <Icon
                className="text-4xl text-white"
                icon="tabler:campfire-filled"
              />
              <div className="flex flex-col">
                <h2>Lección</h2>
                <p className="font-medium">Primeros Pasos</p>
              </div>
            </div>

            <div className="flex items-center border-2 rounded-md p-2 gap-4 bg-purple-500">
              <Icon className="text-4xl" icon="tabler:bubble-filled" />
              <div className="flex flex-col">
                <h2>Lección</h2>
                <p className="font-medium">Saludos y Presentaciones</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-2">
          <div className="flex justify-between text-xl p-4">
            <h2 className="font-semibold">Vocabulario Básico</h2>
            <Icon
              className="text-4xl text-gray-400"
              icon="tabler:arrow-badge-down"
            />
          </div>

          <div className="flex flex-col p-4 gap-4 text-white">
            <div className="flex items-center border-2 rounded-md p-2 gap-4 bg-orange-500">
              <Icon className="text-4xl" icon="tabler:puzzle-filled" />
              <div className="flex flex-col">
                <h2>Lección</h2>
                <p className="font-medium">Cosas Cotidianas</p>
              </div>
            </div>

            <div className="flex items-center border-2 rounded-md p-2 gap-4 bg-pink-500">
              <Icon className="text-4xl" icon="tabler:users-group" />
              <div className="flex flex-col">
                <h2>Lección</h2>
                <p className="font-medium">Familia y Amigos</p>
              </div>
            </div>

            <div className="flex items-center border-2 rounded-md p-2 gap-4 bg-teal-500">
              <Icon className="text-4xl" icon="tabler:cherry-filled" />
              <div className="flex flex-col">
                <h2>Lección</h2>
                <p className="font-medium">Comida y Bebida</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-32"></div>
      </section>
    </div>
  );
}
