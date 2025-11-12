"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <main className="w-full bg-white text-gray-800">
      {/* Title */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#e22f2e] mb-4"
        >
          About VIT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-lg text-gray-600 max-w-2xl"
        >
          Discover our journey, our people, and the values that make VIT a
          trusted name in clean drinking water.
        </motion.p>
      </section>

      {/* HISTORY */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-[#e22f2e] mb-6"
          >
            Our Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="leading-relaxed text-gray-700 mb-6"
          >
            VIT was founded with a mission to provide clean, refreshing drinking
            water across Indonesia. From humble beginnings to becoming a
            nationwide household name, VIT continues to innovate and grow.
          </motion.p>

          <motion.ul
            className="space-y-3 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {/* 1 */}
            <li>
              <div className="border border-black p-4">
                <h2 className="font-bold text-xl text-[#2596be]">
                  10 Januari 1984
                </h2>
                <p>
                  Merek VIT resmi didaftarkan ke Direktorat Jenderal Hak Cipta
                  dan Departemen Kehakiman Republik Indonesia. Dan setelah
                  melalui modifikasi, label VIT pun telah didaftarkan ke
                  Direktorat Jenderal Hak Kekayaan Intelektual.
                </p>
              </div>
            </li>

            {/* 2 */}
            <li>
              <div className="border border-black p-4">
                <h2 className="font-bold text-xl text-[#2596be]">
                  17 Juli 1987
                </h2>
                <p>
                  Tn. Tirto Utama mengakuisisi kepemilikan PT Varia Industri
                  Tirta.
                </p>
              </div>
            </li>

            {/* 3 */}
            <li>
              <div className="border border-black p-4">
                <h2 className="font-bold text-xl text-[#2596be]">
                  16 Oktober 2000
                </h2>
                <p>
                  Merger beberapa perusahaan terumasuk PT Varia Industri Tirta
                  sehingga kini PT Tirta Investama resmi sebagai pemilik merek
                  VIT.
                </p>
              </div>
            </li>

            {/* 4 */}
            <li>
              <div className="border border-black p-4">
                <h2 className="font-bold text-xl text-[#2596be]">Sekarang</h2>
                <p>
                  VIT terus mengusung misi untuk menjadi merek terpercaya
                  pilihan cermat bagi seluruh konsumen Indonesia & mitra usaha.
                </p>
              </div>
            </li>
          </motion.ul>
        </div>
      </section>

      {/* TEAM */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#e22f2e]">Our Team</h2>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/about/teams"
              className="bg-[#e22f2e] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-500 transition"
            >
              Meet the Full Team →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CULTURE */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#e22f2e] mb-6">
            Our Culture
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our workplace culture is built on trust, teamwork, and a commitment
            to excellence. We believe that a positive environment leads to
            better products and happier customers.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Integrity",
                desc: "We operate with transparency and honesty in every step.",
              },
              {
                title: "Teamwork",
                desc: "We collaborate, support, and celebrate wins together.",
              },
              {
                title: "Innovation",
                desc: "We always seek smarter, more efficient ways to grow.",
              },
              {
                title: "Sustainability",
                desc: "We aim to reduce waste and protect the environment.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl border shadow-sm p-6"
              >
                <strong className="text-[#2596be] text-lg">{item.title}</strong>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
