import "./styles/global.css";
import { NavBar, NavBarUser } from "./views/components";

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
        <NavBarUser />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
