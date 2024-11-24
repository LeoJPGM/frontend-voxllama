import { Button } from "../../../components";

export default function LenguajesPage() {
  return (
    <>
      <section className="flex flex-col p-4 gap-16">
        <h1 className="text-4xl text-gray-700 text-center font-bold">
          Escoge el lenguaje que deseas aprender
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="w-44 h-24 border-2 border-red-500 rounded-2xl flex flex-col justify-center p-2 bg-gradient-to-r from-red-500 to-red-400">
            <span className="text-center font-semibold text-white">
              Nivaclé
            </span>
            <Button
              label={"Aprender"}
              additionalClasses="border-red-500 p-1 mt-4 text-red-500 bg-white hover:bg-red-100"
            />
          </div>
          <div className="w-44 h-24 border-2 border-blue-500 rounded-2xl flex flex-col justify-center p-2 bg-gradient-to-r from-blue-500 to-blue-400">
            <span className="text-center font-semibold text-white">Ainu</span>
            <Button
              label={"Aprender"}
              additionalClasses="p-1 mt-4 text-blue-500 bg-white hover:bg-blue-100"
            />
          </div>
          <div className="w-44 h-24 border-2 border-green-500 rounded-2xl flex flex-col justify-center p-2 bg-gradient-to-r from-green-500 to-green-400">
            <span className="text-center font-semibold text-white">
              Wichí Lhamtés Güisnay
            </span>
            <Button
              label={"Aprender"}
              additionalClasses="border-green-500 p-1 text-green-500 bg-white hover:bg-green-100"
            />
          </div>
          <div className="w-44 h-24 border-2 border-yellow-500 rounded-2xl flex flex-col justify-center p-2 bg-gradient-to-r from-yellow-500 to-yellow-400">
            <span className="text-center font-semibold text-white">
              Zapoteco de San Felipe Tejalápam
            </span>
            <Button
              label={"Aprender"}
              additionalClasses="border-yellow-400 p-1 text-yellow-400 bg-white hover:bg-yellow-100"
            />
          </div>
          <div className="w-44 h-24 border-2 border-purple-500 rounded-2xl flex flex-col justify-center p-2 bg-gradient-to-r from-purple-500 to-purple-400">
            <span className="text-center font-semibold text-white">
              Cornish
            </span>
            <Button
              label={"Aprender"}
              additionalClasses="border-purple-500 p-1 mt-4 text-purple-500 bg-white hover:bg-purple-100"
            />
          </div>
          <div className="w-44 h-24 border-2 border-pink-500 rounded-2xl flex flex-col justify-center p-2 bg-gradient-to-r from-pink-500 to-pink-400">
            <span className="text-center font-semibold text-white">
              Guaraní
            </span>
            <Button
              label={"Aprender"}
              additionalClasses="border-pink-500 p-1 mt-4 text-pink-500 bg-white hover:bg-pink-100"
            />
          </div>
          <div className="w-44 h-24 border-2 border-teal-500 rounded-2xl flex flex-col justify-center p-2 bg-gradient-to-r from-teal-500 to-teal-400">
            <span className="text-center font-semibold text-white">Koro</span>
            <Button
              label={"Aprender"}
              additionalClasses="border-teal-500 p-1 mt-4 text-teal-500 bg-white hover:bg-teal-100"
            />
          </div>
        </div>
      </section>
    </>
  );
}
