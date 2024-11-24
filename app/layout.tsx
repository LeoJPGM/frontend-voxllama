import "./styles/global.css";
import ClientRouter from "./views/components/ClientRouter";

export const metadata = {
  title: "VoxLlama",
  description: "Plataforma de aprendizaje",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientRouter>{children}</ClientRouter>
      </body>
    </html>
  );
}
