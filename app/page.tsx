import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "./views/components";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center gap-5 overflow-y-scroll p-4 lg:p-10">
        <section className="w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 h-56 border-2 border-sky-200 rounded-xl flex flex-col justify-center p-4 bg-gradient-to-r from-sky-300 to-sky-200 relative">
          <Icon
            icon="fluent-emoji:llama"
            className="absolute inset-0 w-full h-full opacity-10"
            style={{ zIndex: -1 }}
          />
          <h1 className="text-3xl text-cyan-700 font-semibold text-center lg:text-left">
            Preservando Lenguas, Preservando Culturas
          </h1>
          <div className="flex mt-7 text-lg gap-5 justify-center lg:justify-start">
            <Button
              label={"Explorar Historias"}
              href="/views/pages/historias"
              Classes="bg-white pl-4 pr-4 pt-2 pb-2 rounded-xl text-cyan-700 font-semibold"
            />
            <Button
              label={"Ejercicios"}
              href={"/views/pages/ejercicios"}
              Classes="bg-cyan-700 pl-4 pr-4 pt-2 pb-2 rounded-xl text-white font-semibold"
            />
          </div>
        </section>

        <section className="w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 h-28 border-2 border-amber-100 rounded-xl flex flex-col bg-gradient-to-r from-yellow-400 to-amber-200 p-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Tu progreso</span>
            <Button
              label={"Revisar"}
              href={""}
              Classes="text-white font-bold border-2 border-amber-400 rounded-xl pl-4 pr-4 pt-1 pb-1 bg-amber-400"
            />
          </div>

          <div className="w-full h-3 border-2 border-lime-500 rounded-md mt-7 bg-lime-500"></div>
        </section>

        <section className="w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 h-auto p-4 flex flex-col gap-6">
          <h1 className="text-3xl text-gray-500 text-center lg:text-left">
            Explora nuestras historias
          </h1>
          <div className="flex gap-3 justify-center lg:justify-start">
            <Button
              label={"Populares"}
              href={""}
              Classes="text-white font-bold pl-4 pr-4 pt-3 pb-3 rounded-xl bg-amber-600"
            />
            <Button
              label={"Recomendados"}
              href={""}
              Classes="text-white font-bold pl-4 pr-4 pt-3 pb-3 rounded-xl border-lime-600 bg-lime-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center">
              <div
                className="rounded-xl bg-cover bg-center w-36 h-40 lg:w-48 lg:h-56"
                style={{
                  backgroundImage: "url('/images/portadas/portada_1.png')",
                }}
              ></div>
              <span className="font-bold">Ecos de la Tierra:</span>
              <span>Relatos de Sabiduría Ancestral</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div
                className="rounded-xl bg-cover bg-center w-36 h-40 lg:w-48 lg:h-56"
                style={{
                  backgroundImage: "url('/images/portadas/portada_2.png')",
                }}
              ></div>
              <span className="font-bold">El Códice del Sol:</span>
              <span>Leyendas del Imperio Azteca</span>
            </div>
          </div>
        </section>
        <div className="h-14"></div>
      </div>
    </>
  );
}
