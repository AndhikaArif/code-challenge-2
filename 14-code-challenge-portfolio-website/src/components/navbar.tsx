"use client";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { useState } from "react";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`flex justify-between p-4 w-full shadow-md transition-colors duration-300 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="text-lg font-semibold">
        Andhika.dev
      </Link>

      {/* Dekstop Navigation */}
      <div className="hidden sm:flex gap-12 mr-12">
        <Link
          href="/"
          className="transition-colors duration-300 hover:text-blue-400"
        >
          Home
        </Link>
        <Link
          href="./about"
          className="transition-colors duration-300 hover:text-blue-400"
        >
          About
        </Link>
        <Link
          href="./projects"
          className="transition-colors duration-300 hover:text-blue-400"
        >
          Projects
        </Link>
        <Link
          href="./contact"
          className="transition-colors duration-300 hover:text-blue-400"
        >
          Contact Me
        </Link>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-4">
        {/* Toggle Theme */}
        <button
          onClick={toggleTheme}
          className="text-2xl hover:scale-125 transition-transform duration-150 cursor-pointer"
        >
          {isDark ? "🌞" : "🌙"}
        </button>

        {/* Hamburger (mobile only) */}
        <button
          className="text-3xl sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Mobile dropdown menu */}
        {open && (
          <div
            className={`absolute top-16 left-0 pl-4 pt-3 w-full sm:hidden flex flex-col gap-4 shadow-lg transition duration-300 ${
              isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            }`}
          >
            <Link
              href={`/`}
              className="duration-300 hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href={`/about`}
              className="duration-300 hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href={`/projects`}
              className="duration-300 hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link
              href={`/contact`}
              className="duration-300 hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
