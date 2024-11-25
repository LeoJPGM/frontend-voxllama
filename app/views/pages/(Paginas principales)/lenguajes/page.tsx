// LenguajesPage.tsx
import LenguajesClientComponent from "../../../components/LenguajesClientComponent";

export default function LenguajesPage() {
  return (
    <>
      <section className="flex flex-col p-4 gap-16">
        <h1 className="text-4xl text-gray-700 text-center font-bold">
          Escoge el lenguaje que deseas aprender
        </h1>

        <LenguajesClientComponent />
      </section>
    </>
  );
}
