"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full flex justify-between sm:py-4 py-8 px-20 shadow-md items-center bg-[#e22f2e]">
      {/* Mobile Logo Center */}
      <div className="sm:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-12">
        <Link href="/">
          <Image
            src="https://ik.imagekit.io/minumvit/assets/logo@2x.png?tr=w-100,bg-E82C2A"
            alt="Logo"
            fill
          />
        </Link>
      </div>

      {/* Logo Dekstop */}
      <div className="relative h-8 w-12 hidden sm:block">
        <Link href="/">
          <Image
            src="https://ik.imagekit.io/minumvit/assets/logo@2x.png?tr=w-100,bg-E82C2A"
            alt="Logo"
            fill
          ></Image>
        </Link>
      </div>

      {/* Tombol Hamburger (Mobile Only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden z-50 text-white hover:opacity-80 transition"
        aria-label="Toggle menu"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#e22f2e] text-white flex flex-col items-center gap-6 py-8 shadow-lg sm:hidden"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-500 transition-color"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-500 transition-color"
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-500 transition-color"
            >
              Services
            </Link>
            <Link
              href="/blog-list"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-500 transition-color"
            >
              Blog List
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dekstop Navigation */}
      <div className="hidden sm:flex gap-8">
        <Link href="/" className="transition duration-300 hover:text-blue-500">
          Home
        </Link>
        <Link
          href="/about"
          className="transition duration-300 hover:text-blue-500"
        >
          About Us
        </Link>
        <Link
          href="/services"
          className="transition duration-300 hover:text-blue-500"
        >
          Services
        </Link>
        <Link
          href="/blog-list"
          className="transition duration-300 hover:text-blue-500"
        >
          Blog List
        </Link>
      </div>
    </nav>
  );
}
