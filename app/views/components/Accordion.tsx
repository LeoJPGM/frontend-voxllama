"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2">
      <div
        className="flex justify-between text-xl p-4"
        onClick={toggleAccordion}
      >
        <h2 className="font-semibold">{title}</h2>
        <Icon
          className={`text-4xl ${isOpen ? "text-gray-600" : "text-gray-400"}`}
          icon="tabler:arrow-badge-down"
          rotate={isOpen ? 2 : 0}
        />
      </div>
      {isOpen && (
        <div className="flex flex-col p-4 gap-4 text-white">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
