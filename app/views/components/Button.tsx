"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

interface ButtonProps {
  label: string;
  href?: string;
  styleType?: "primary" | "secondary";
  additionalClasses?: string;
}

export const Button: FC<ButtonProps> = ({
  label,
  href,
  styleType = "primary",
  additionalClasses = "",
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href!);
  };

  const baseClasses = "p-2 rounded-xl font-semibold";
  let styleClasses = "";

  if (styleType === "primary") {
    styleClasses = "text-white bg-cyan-600 border-2 border-cyan-600";
  } else if (styleType === "secondary") {
    styleClasses = "text-cyan-600 bg-white border-2 border-white";
  }

  return (
    <button
      className={`${baseClasses} ${styleClasses} ${additionalClasses}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
