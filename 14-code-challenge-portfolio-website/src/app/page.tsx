"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import Section from "@/components/section";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <main
      className={`relative w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center font-sans transition-colors duration-500 ease-in-out ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <Section>
        {/* Name & Profession */}
        <h2 className="text-center text-2xl sm-text-3xl font-semibold mb-3">
          Andhika Arif Gilang Rona Putra — Full-Stack Web Developer
        </h2>

        {/* Foto */}
        <div className="w-full flex justify-center">
          <div className="relative w-[200px] h-[200px] mb-6 mt-6 rounded-full overflow-hidden shadow-lg">
            <Image
              src={
                "https://wwd.com/wp-content/uploads/2025/09/DUNHILL_LANDSCAPE25611-1-1.jpg?w=1000&h=563&crop=1"
              }
              alt={"Foto menggunakan tuxedo hitam"}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-center mb-6">
          I build responsive, modern web applications with clean UI and
          optimized performance
        </p>

        {/* CTA */}
        <div className="flex gap-4 mt-3 justify-center items-center">
          <Link
            href={"./projects"}
            className="text-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 transition"
          >
            View My Project
          </Link>
          <Link
            href={"./contact"}
            className="text-center px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600 hover:scale-110 transition"
          >
            Contact Me
          </Link>
        </div>
      </Section>
    </main>
  );
}
