import { Button } from "../../../components";

export default function NivelesPage() {
  return (
    <>
      <section className="flex flex-col p-4 gap-16">
        <h1 className="text-4xl text-gray-700 text-center font-bold">
          Escoge el nivel adecuado para ti
        </h1>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col border-2 rounded-lg p-2 items-start bg-gradient-to-r from-lime-600 to-lime-500">
            <span className="font-bold">Básico</span>
            <p className="mt-2">
              Conceptos y vocabulario fundamentales. Frases cotidianas simples
            </p>
            <Button
              label="Iniciar"
              Classes="border-2 rounded-xl pl-4 pr-4 pt-2 pb-2 ml-auto bg-lime-600 text-white"
              href="/views/pages/ejercicios"
            />
          </div>

          <div className="flex flex-col border-2 rounded-lg p-2 items-start bg-gradient-to-r from-yellow-500 to-yellow-400">
            <span className="font-bold">Intermedio</span>
            <p className="mt-2">
              Conversaciones complejas, gramática avanzada, comprensión de
              textos largos
            </p>
            <Button
              label="Iniciar"
              Classes="border-2 rounded-xl pl-4 pr-4 pt-2 pb-2 ml-auto bg-yellow-500 text-white"
              href="/views/pages/ejercicios"
            />
          </div>

          <div className="flex flex-col border-2 rounded-lg p-2 items-start bg-gradient-to-r from-red-600 to-red-500">
            <span className="font-bold">Avanzado</span>
            <p className="mt-2">
              Fluidez y precisión. Textos complejos, vocabulario especializado
            </p>
            <Button
              label="Iniciar"
              Classes="border-2 rounded-xl pl-4 pr-4 pt-2 pb-2 ml-auto bg-red-600 text-white"
              href="/views/pages/ejercicios"
            />
          </div>
        </div>
      </section>
    </>
  );
}
