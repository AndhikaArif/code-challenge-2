"use client";

import { ReactNode } from "react";
import { useTheme } from "@/context/theme-context";

interface ISection {
  children: ReactNode;
}

export default function Section({ children }: ISection) {
  const { isDark } = useTheme();

  return (
    <section
      className={`w-full max-w-4xl p-8 rounded-2xl shadow-lg border-2 my-12 transition-all duration-500 ${
        isDark ? "bg-gray-800 border-white" : "bg-gray-100 border-black"
      }`}
    >
      {children}
    </section>
  );
}
