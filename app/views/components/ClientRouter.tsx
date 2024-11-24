"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { NavBarUser } from "./NavBarUser";
import { NavBar } from "./NavBar";

interface ClientRouterProps {
  children: ReactNode;
}

export default function ClientRouter({ children }: ClientRouterProps) {
  const pathname = usePathname();
  const noLayoutNeeded = ["/views/pages/register", "/views/pages/login"];

  if (noLayoutNeeded.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <NavBarUser />
      <NavBar />
      {children}
    </>
  );
}
