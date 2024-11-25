"use client";

import { useRouter } from "next/navigation";
import { FC, MouseEvent } from "react";

interface ButtonProps {
  label: string;
  href?: string;
  Classes?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void; // Cambiado a MouseEvent
}

export const Button: FC<ButtonProps> = ({
  label,
  href,
  Classes = "",
  onClick,
}) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <button className={Classes} onClick={handleClick}>
      {label}
    </button>
  );
};
