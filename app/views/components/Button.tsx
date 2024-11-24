"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

interface ButtonProps {
  label: string;
  href?: string;
  Classes?: string;
}

export const Button: FC<ButtonProps> = ({ label, href, Classes = "" }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href!);
  };

  return (
    <button className={`${Classes}`} onClick={handleClick}>
      {label}
    </button>
  );
};
