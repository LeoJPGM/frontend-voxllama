import { Icon } from "@iconify/react/dist/iconify.js";
import Accordion from "../../../components/Accordion";
import HorizontalScroll from "../../../components/HorizontalScroll";

export default function EjerciciosPage() {
  return (
    <div className="flex flex-col">
      <section>
        <div className="border-b-2 p-4">
          <h1 className="text-2xl font-bold">Mis lenguajes</h1>

          <HorizontalScroll>
            <div className="flex gap-4">
              {[
                { name: "Ainu", color: "bg-blue-500" },
                { name: "Nivaclé", color: "bg-red-500" },
                { name: "Cornish", color: "bg-purple-500" },
              ].map((language) => (
                <div
                  key={language.name}
                  className={`w-32 h-16 border-2 rounded-2xl flex flex-col justify-center items-center ${language.color} shadow-lg transform transition-transform hover:scale-105`}
                >
                  <h2 className="font-medium text-white">{language.name}</h2>
                </div>
              ))}
            </div>
          </HorizontalScroll>
        </div>

        <div className="flex flex-col gap-3 p-4">
          <h1 className="text-xl font-bold">Progreso: Nivel Básico</h1>
          <div className="w-full border-2 rounded-xl border-gray-200">
            <div className="w-2/4 h-2 bg-lime-500"></div>
          </div>
        </div>
      </section>

      <section className="border-t-2">
        <Accordion title="Introducción">
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
        </Accordion>

        <Accordion title="Vocabulario Básico">
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
        </Accordion>
      </section>
      <div className="h-20"></div>
    </div>
  );
}
