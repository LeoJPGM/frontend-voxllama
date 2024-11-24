export default function HistoriasPage() {
  return (
    <>
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-3xl font-bold">Mis Historias</h1>
          <p className="font-medium">
            Estas historias han sido creadas por la IA en base a tus
            preferencias y progreso.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center text-center">
            <div
              className="rounded-xl bg-cover bg-center w-36 h-40"
              style={{
                backgroundImage: "url('/images/portadas/portada_1.png')",
              }}
            ></div>
            <span className="font-bold">Ecos de la Tierra:</span>
            <span>Relatos de Sabiduría Ancestral</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div
              className="rounded-xl bg-cover bg-center w-36 h-40"
              style={{
                backgroundImage: "url('/images/portadas/portada_2.png')",
              }}
            ></div>
            <span className="font-bold">El Códice del Sol:</span>
            <span>Leyendas del Imperio Azteca</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div
              className="rounded-xl bg-cover bg-center w-36 h-40"
              style={{
                backgroundImage: "url('/images/portadas/portada_3.png')",
              }}
            ></div>
            <span className="font-bold">Los Secretos del Sol Dorado:</span>
            <span>Relatos de la Sabiduría Incaica y sus Tesoros Ocultos</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div
              className="rounded-xl bg-cover bg-center w-36 h-40"
              style={{
                backgroundImage: "url('/images/portadas/portada_4.png')",
              }}
            ></div>
            <span className="font-bold">Cuentos de las Llanuras Andinas</span>
            <span>Historias Encantadas Contadas por la Llama Sabia</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="border-2 rounded-xl pl-4 pr-4 pt-2 pb-2 bg-amber-500 text-white font-bold">
            Generar una historia nueva
          </button>
        </div>

        <div className="h-20"></div>
      </section>
    </>
  );
}
