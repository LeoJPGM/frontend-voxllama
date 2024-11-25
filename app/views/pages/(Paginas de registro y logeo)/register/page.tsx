import { Icon } from "@iconify/react/dist/iconify.js";
import RegisterForm from "../../../components/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="w-full h-screen bg-sky-500 flex flex-col justify-center items-center">
      {/* Título y Logo */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-white text-6xl font-bold">VoxLLama</h1>
        <Icon className="text-6xl" icon="fluent-emoji:llama" />
      </div>

      {/* Formulario de registro */}
      <div className="mt-8">
        <RegisterForm />
      </div>
    </section>
  );
}
