"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Simulasi data blog (bisa diganti fetch API nanti)
const blogs = [
  {
    id: 1,
    title: "Pentingnya Minum Air Putih Setiap Hari",
    content: `
      Minum air putih secara teratur memiliki banyak manfaat bagi tubuh. 
      Mulai dari menjaga keseimbangan cairan, membantu metabolisme, 
      hingga meningkatkan konsentrasi. Air putih juga membantu 
      mengeluarkan racun dari tubuh dan menjaga kulit tetap segar.

      Para ahli kesehatan menyarankan untuk minum setidaknya 8 gelas air 
      setiap hari. Namun, kebutuhan air dapat berbeda-beda tergantung usia, 
      aktivitas, dan kondisi lingkungan.
    `,
    author: "Admin VIT",
    date: "November 12, 2025",
    image:
      "https://ik.imagekit.io/minumvit/storage/articles/artikel-image1.png?tr=w-500,h-375",
  },
  {
    id: 2,
    title: "5 Manfaat Air Putih Setelah Olahraga",
    content: `
      Setelah berolahraga, tubuh kehilangan cairan melalui keringat. 
      Minum air putih membantu menggantikan cairan yang hilang dan 
      mempercepat proses pemulihan otot.

      Air putih juga membantu menstabilkan suhu tubuh, 
      memperlancar peredaran darah, dan mengurangi risiko dehidrasi. 
      Jadi, pastikan untuk selalu membawa botol VIT saat berolahraga!
    `,
    author: "Tim Kesehatan VIT",
    date: "November 5, 2025",
    image:
      "https://ik.imagekit.io/minumvit/storage/articles/VIT-camping-prep.jpg?tr=w-500,h-375",
  },
  {
    id: 3,
    title: "Cara Menjaga Pola Minum Air yang Sehat",
    content: `
      Banyak orang lupa minum air putih secara rutin karena kesibukan. 
      Salah satu cara untuk menjaga pola minum adalah dengan membuat pengingat, 
      misalnya menggunakan aplikasi atau alarm setiap beberapa jam.

      Selain itu, biasakan minum segelas air setelah bangun tidur, 
      sebelum makan, dan sebelum tidur agar tubuh tetap terhidrasi dengan baik.
    `,
    author: "Admin VIT",
    date: "Oktober 28, 2025",
    image:
      "https://ik.imagekit.io/minumvit/storage/articles/VIT-lunch.jpg?tr=w-500,h-375",
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-gray-700">
        <h1 className="text-2xl font-bold mb-4">Blog not found 😢</h1>
        <Link href="/blog-list" className="text-[#e22f2e] hover:underline">
          ← Back to Blog List
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white py-12 px-6 sm:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Gambar Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg mb-8"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Judul & Info Penulis */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-gray-900 mb-3"
        >
          {blog.title}
        </motion.h1>

        <div className="text-sm text-gray-500 mb-8">
          ✍️ {blog.author} &nbsp; | &nbsp; 📅 {blog.date}
        </div>

        {/* Isi Artikel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="prose prose-gray max-w-none text-gray-700 leading-relaxed whitespace-pre-line"
        >
          {blog.content}
        </motion.div>

        {/* Tombol Kembali */}
        <div className="mt-12">
          <Link
            href="/blog-list"
            className="text-[#e22f2e] font-medium hover:underline transition-colors duration-300"
          >
            ← Back to Blog List
          </Link>
        </div>
      </div>
    </section>
  );
}
