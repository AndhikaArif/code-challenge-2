"use client";

import { useTheme } from "@/context/theme-context";
import Section from "@/components/section";

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <main
      className={`relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center font-sans transition-colors duration-500 ease-in-out ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <Section>
        {/* About Me */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6 tracking-wide">
          About Me
        </h2>
        <p className="text-center leading-relaxed mb-10 text-base sm:text-lg">
          Hi, I`m{" "}
          <span className="font-semibold">Andhika Arif Gilang Rona Putra</span>,
          a passionate web developer who loves turning ideas into functional and
          visually appealing websites. My journey in coding started from
          curiosity — and grew into a real interest in building digital
          solutions that make people`s lives easier.
          <br />
          <br />I enjoy exploring modern web technologies, especially working
          with <span className="font-medium">JavaScript, React,</span> and{" "}
          <span className="font-medium">Node.js</span> to create efficient,
          dynamic, and user-friendly applications.
        </p>

        {/* Core Skills */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
            ⚙️ My Core Skills
          </h3>
          <ul className="list-disc list-outside space-y-1 pl-2">
            <li>Frontend: HTML, CSS, JavaScript, React, Tailwind CSS</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MongoDB, JSON, MySQL (basic)</li>
            <li>Others: Git, REST API, Next.js</li>
          </ul>
        </div>

        {/* Key Values */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">💡 Key Values</h3>
          <ul className="list-disc list-outside space-y-1 pl-2">
            <li>
              Timeliness: Delivering work on schedule without sacrificing
              quality.
            </li>
            <li>
              Attention to Detail: Every element, line of code, and design
              choice matters.
            </li>
            <li>
              Clear Communication: Great projects come from good collaboration
              and transparency.
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mt-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            🧠 Technical Skills
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-2">
            {/* Front-End */}
            <div>
              <h4 className="text-lg font-semibold mb-2">🎨 Front-End</h4>
              <ul className="list-disc list-outside space-y-1 pl-2">
                <li>HTML5 / CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js / Next.js</li>
                <li>Tailwind CSS / Bootstrap</li>
              </ul>
            </div>

            {/* Back-End */}
            <div>
              <h4 className="text-lg font-semibold mb-2">⚙️ Back-End</h4>
              <ul className="list-disc list-outside space-y-1 pl-2">
                <li>Node.js / Express.js</li>
                <li>REST API Design</li>
                <li>Authentication (JWT)</li>
                <li>Database: MongoDB / MySQL</li>
              </ul>
            </div>

            {/* DevOps & Tools */}
            <div className="sm:col-span-2">
              <h4 className="text-lg font-semibold mb-2">🧰 DevOps & Tools</h4>
              <ul className="list-disc list-outside space-y-1 pl-2">
                <li>Git / GitHub for version control</li>
                <li>Basic Docker & deployment setup</li>
                <li>VS Code, Postman, and Figma for design workflow</li>
                <li>Familiar with CI/CD pipelines & AWS basics</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
