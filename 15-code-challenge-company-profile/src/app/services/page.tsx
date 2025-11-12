"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Company Overview */}
      <section className="text-center py-20 bg-white px-6 w-full mx-auto">
        <motion.h2
          className="text-3xl text-black font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          VIT Ada Solusi Untuk Semua Kebutuhan Air Mineralmu
        </motion.h2>
      </section>

      {/* Product */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          spaceBetween={20}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-[350px] bg-white"
        >
          {/* Product 1 */}
          <SwiperSlide>
            <div>
              <Image
                src="/vit-gelas.png"
                alt="Product 1 VIT Gelas"
                fill
                className="object-contain"
              />
            </div>
          </SwiperSlide>

          {/* Product 2 */}
          <SwiperSlide>
            <div>
              <Image
                src="/vit-botol-220ml.png"
                alt="Product 2 VIT botol 220ml"
                fill
                className="object-contain"
              ></Image>
            </div>
          </SwiperSlide>

          {/* Product 3 */}
          <SwiperSlide>
            <div>
              <Image
                src="/vit-botol-330ml.png"
                alt="Product 3 VIT botol 330ml"
                fill
                className="object-contain"
              ></Image>
            </div>
          </SwiperSlide>

          {/* Product 4 */}
          <SwiperSlide>
            <div>
              <Image
                src="/vit-botol-550ml.png"
                alt="Product 4 VIT botol 550ml"
                fill
                className="object-contain"
              ></Image>
            </div>
          </SwiperSlide>

          {/* Product 5 */}
          <SwiperSlide>
            <div>
              <Image
                src="/vit-botol-1500ml.png"
                alt="Product 5 VIT botol 1500ml"
                fill
                className="object-contain"
              ></Image>
            </div>
          </SwiperSlide>

          {/* Product 6 */}
          <SwiperSlide>
            <div>
              <Image
                src="/vit-galon-19lt.png"
                alt="Product 6 VIT Galon 19 Liter"
                fill
                className="object-contain"
              ></Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>

      {/* Varian Ph */}
      <section className="flex flex-col justify-center items-center py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl text-black font-semibold text-center pb-6"
        >
          Lihat Juga Varian Air Minum pH Tinggi Kami
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-40 w-50"
        >
          <Image
            src="https://ik.imagekit.io/minumvit/storage/banners/Vit-8--ID-1629140618.png?tr=w-700"
            alt="Keadaan orang yang minum VIT saat pagi dan malam"
            fill
          />
        </motion.div>
      </section>

      {/* VIT dimana saja */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative py-10 flex flex-col items-center text-white overflow-hidden"
      >
        {/* Wrapper agar tinggi gambar fix */}
        <div className="relative w-full max-w-6xl h-[400px] rounded-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="https://www.minumvit.co.id/_nuxt/img/img-store.193ea6e.jpeg"
            alt="Minum VIT untuk istirahat setelah main gitar"
            fill
            className="object-cover z-0 object-top-left"
            priority
          />

          {/* Overlay biru transparan */}
          <div className="absolute inset-0 bg-cyan-600/80 z-10" />

          {/* Konten di atas overlay */}
          <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
            <h3 className="text-2xl font-bold mb-6">
              VIT Tersedia Dimana Saja
            </h3>

            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 w-10/12 md:w-8/12">
              <div className="flex justify-center gap-8 flex-wrap">
                <div className="text-center">
                  <Image
                    src="https://ik.imagekit.io/minumvit/storage/tokopedia.jpg?tr=w-250"
                    alt="Tokopedia"
                    width={120}
                    height={60}
                    className="mx-auto pb-4"
                  />
                  <Link
                    href="https://www.tokopedia.com/aqua-store/etalase/vit"
                    className="mt-2 bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium"
                  >
                    Beli
                  </Link>
                </div>

                <div className="text-center">
                  <Image
                    src="https://ik.imagekit.io/minumvit/storage/blibli.jpg?tr=w-250"
                    alt="Blibli"
                    width={120}
                    height={60}
                    className="mx-auto pb-4"
                  />
                  <Link
                    href="https://www.blibli.com/brand/aqua-flagship-store?page=1&start=0&multiCategory=true&excludeProductList=false&brand=VIT&intent=false&os=Official%20Store&sort=7"
                    className="mt-2 bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium"
                  >
                    Beli
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
