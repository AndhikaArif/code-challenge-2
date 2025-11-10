"use client";
import { useTheme } from "@/context/theme-context";
import Section from "@/components/section";
import Image from "next/image";

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <main
      className={`min-h-screen flex flex-col justify-center items-center transition-colors duration-500 ease-in-out px-6 py-12 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Section>
        {/* ===== Portfolio Section ===== */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">💼 Portfolio</h2>

          <div className="space-y-12">
            {/* Project Card */}
            <div
              className={`p-6 rounded-xl border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                isDark
                  ? "bg-gray-900 border-gray-700"
                  : "bg-gray-100 border-gray-300"
              }`}
            >
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {/* Title */}E-commerce Platform for XYZ Retail
              </h3>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB", "AWS"].map((item, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full ${
                      isDark
                        ? "bg-gray-700 text-gray-200"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-2 text-sm leading-relaxed opacity-90">
                <p>
                  <strong>Situation:</strong> XYZ Retail needed a scalable and
                  fast e-commerce platform to expand their digital presence.
                </p>
                <p>
                  <strong>Task:</strong> Build the full-stack application with
                  responsive UI, real-time inventory updates, and secure
                  checkout.
                </p>
                <p>
                  <strong>Action:</strong> Developed a responsive React UI,
                  Node.js API, MongoDB architecture, and deployed with AWS +
                  CI/CD pipeline.
                </p>
                <p>
                  <strong>Result:</strong> Sales increased 35% in 3 months with
                  improved performance, UX, and automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Experience Section ===== */}
        <section className="my-16 mx-10">
          <h2 className="text-3xl font-bold text-center mb-8">🧑‍💻 Experience</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                Front-End Developer — Freelance
              </h3>
              <p className="text-sm text-gray-400">2023 - Present</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  Developed responsive websites using Next.js and Tailwind CSS.
                </li>
                <li>Integrated REST APIs and handled deployment on Vercel.</li>
                <li>
                  Collaborated with clients to refine UI/UX for better
                  usability.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Web Developer Intern — DAVDIGI
              </h3>
              <p className="text-sm text-gray-400">2022 - 2023</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  Built a web-based monitoring system using JavaScript and
                  Express.js.
                </li>
                <li>Designed a dashboard for project progress tracking.</li>
                <li>
                  Worked closely with the engineering team to automate data
                  updates.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Testimonials Section ===== */}
        <section className="mb-12 mx-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            💬 Testimonials
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div
              className={`p-6 rounded-xl border shadow-sm max-w-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isDark
                  ? "bg-gray-900 border-gray-700"
                  : "bg-gray-100 border-gray-300"
              }`}
            >
              {/* Quote */}
              <p className="italic text-base leading-relaxed mb-4 opacity-90">
                “Andhika delivered the project on time with excellent quality.
                The UI looks professional and performance exceeded
                expectations.”
              </p>

              {/* Name */}
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-10 h-10 items-end">
                  <Image
                    className="object-cover rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKVr3zyJbO44-3QoqdmmsQUMp1pIAaGtgAA&s"
                    alt="Foto Raditya A — Project Manager"
                    fill
                  ></Image>
                </div>
                <p className="font-semibold">Raditya A — Project Manager</p>
              </div>
            </div>

            <div
              className={`p-6 rounded-xl border shadow-sm max-w-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isDark
                  ? "bg-gray-900 border-gray-700"
                  : "bg-gray-100 border-gray-300"
              }`}
            >
              {/* Quote */}
              <p className="italic text-base leading-relaxed mb-4 opacity-90">
                “Working with Andhika was smooth and professional. He
                communicates clearly and always finds clean solutions for
                complex problems.”
              </p>

              {/* Name */}
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-10 h-10">
                  <Image
                    className="object-cover rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxh51PmL2_Pb0OzNGQV-IRyGoEHkDgtYzOJw&s"
                    alt="Foto Naufal R — Senior Developer"
                    fill
                  ></Image>
                </div>
                <p className="font-semibold">Naufal R — Senior Developer</p>
              </div>
            </div>
          </div>
        </section>
      </Section>
    </main>
  );
}
