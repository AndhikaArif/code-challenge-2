"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Pentingnya Minum Air Putih Setiap Hari",
    excerpt:
      "Air putih membantu menjaga keseimbangan tubuh, memperbaiki sirkulasi darah, dan meningkatkan fokus selama beraktivitas.",
    author: "Admin VIT",
    date: "November 12, 2025",
    image:
      "https://ik.imagekit.io/minumvit/storage/articles/artikel-image1.png?tr=w-500,h-375",
  },
  {
    id: 2,
    title: "5 Manfaat Air Putih Setelah Olahraga",
    excerpt:
      "Minum air putih setelah olahraga membantu proses pemulihan, menjaga hidrasi, dan mencegah kelelahan berlebih.",
    author: "Tim Kesehatan VIT",
    date: "November 5, 2025",
    image:
      "https://ik.imagekit.io/minumvit/storage/articles/VIT-camping-prep.jpg?tr=w-500,h-375",
  },
  {
    id: 3,
    title: "Cara Menjaga Pola Minum Air yang Sehat",
    excerpt:
      "Mengetahui waktu dan jumlah minum yang tepat membantu tubuh tetap segar sepanjang hari.",
    author: "Admin VIT",
    date: "Oktober 28, 2025",
    image:
      "https://ik.imagekit.io/minumvit/storage/articles/VIT-lunch.jpg?tr=w-500,h-375",
  },
];

export default function BlogListPage() {
  return (
    <section className="min-h-screen bg-white py-16 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Blog List
        </motion.h1>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>

                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                  <span>✍️ {blog.author}</span>
                  <span>📅 {blog.date}</span>
                </div>

                <Link
                  href={`/blog/${blog.id}`}
                  className="text-[#e22f2e] font-medium hover:underline transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
