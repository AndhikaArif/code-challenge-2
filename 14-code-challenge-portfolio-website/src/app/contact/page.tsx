"use client";
import { useTheme } from "@/context/theme-context";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/section";

export default function ContactPage() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ease-in-out px-6 py-12 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Contact Me */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-6">📬 Contact Me</h2>
        <p className="text-center mb-8 text-lg">
          Have a question, project idea, or collaboration opportunity? Feel free
          to reach out — I`d love to connect!
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-2 my-5">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Write your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-4 py-2 border ${
                isDark
                  ? "bg-gray-700 border-gray-600 focus:ring-blue-400 placeholder:to-white"
                  : "bg-gray-50 border-gray-300 focus:ring-blue-500 placeholder:to-black"
              } `}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Write your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-4 py-2 border ${
                isDark
                  ? "bg-gray-700 border-gray-600 focus:ring-blue-400 placeholder:to-white"
                  : "bg-gray-50 border-gray-300 focus:ring-blue-500 placeholder:to-black"
              } `}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full px-4 py-2 border ${
                isDark
                  ? "bg-gray-700 border-gray-600 focus:ring-blue-400 placeholder:to-white"
                  : "bg-gray-50 border-gray-300 focus:ring-blue-500 placeholder:to-black"
              } `}
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 mt-4 font-semibold rounded-md transition bg-blue-400 hover:bg-blue-500 hover:scale-105 duration-300"
            >
              Send Message 🚀
            </button>
          </div>
        </form>

        {/* Social Media Link */}
        <div className="flex gap-4 justify-center items-center">
          <Link
            href={"https://whatsapp.com"}
            className="relative h-8 w-8 transition hover:scale-140 duration-500"
          >
            <Image
              src={"/whatsapp-logo.svg"}
              alt={"Logo Whatsapp"}
              fill
            ></Image>
          </Link>

          <Link
            href={"https://github.com"}
            className="relative h-8 w-8 transition hover:scale-140 duration-500"
          >
            <Image src={"/github-logo.svg"} alt={"Logo Github"} fill></Image>
          </Link>

          <Link
            href={"https://www.linkedin.com/"}
            className="relative h-8 w-8 transition hover:scale-140 duration-500"
          >
            <Image
              src={"/linkedin-logo.svg"}
              alt={"Logo Linkedin"}
              fill
            ></Image>
          </Link>
        </div>
      </Section>
    </main>
  );
}
