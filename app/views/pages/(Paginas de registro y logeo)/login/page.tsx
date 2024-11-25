import { Icon } from "@iconify/react/dist/iconify.js";
import LoginForm from "../../../components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <section className="w-full h-screen bg-sky-500 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-white text-6xl font-bold">VoxLLama</h1>
          <Icon className="text-6xl" icon="fluent-emoji:llama" />
        </div>

        {/* Usamos el LoginForm aquí */}
        <LoginForm />
      </section>
    </>
  );
}
