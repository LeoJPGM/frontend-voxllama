"use client";

import React from "react";

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap px-2 py-4">
      {children}
    </div>
  );
};

export default HorizontalScroll;
