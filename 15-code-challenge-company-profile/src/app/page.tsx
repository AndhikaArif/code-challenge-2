"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section>
        <div className="relative sm:h-[80vh] h-[200vh] w-full">
          {/* Background Carousel Images */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <picture>
                <source
                  srcSet="https://ik.imagekit.io/minumvit/storage/banners/FA-VIT_KV-Master_Female-(360-x-640)-V-NoText.jpg?tr=w-750"
                  media="(width <= 650px)"
                  width={"100%"}
                />

                <Image
                  src="https://ik.imagekit.io/minumvit/storage/banners/FA-VIT_KV-Master_Female-(1366-x-527)-H_8-M-NoPrice.jpg?tr=w-2880"
                  alt="Slide 1"
                  fill
                  className="sm:object-left md:object-cover"
                />
              </picture>
            </SwiperSlide>

            <SwiperSlide>
              <picture>
                <source
                  srcSet="https://ik.imagekit.io/minumvit/storage/banners/FA-VIT_KV-Master_Cups-(360-x-640)-V_NoPrice.jpg?tr=w-750"
                  media="(width <= 650px)"
                />

                <Image
                  src="https://ik.imagekit.io/minumvit/storage/banners/FA-VIT_KV-Master_Cups-(1366-x-527)NoPrice.jpg?tr=w-2880"
                  alt="Slide 2"
                  fill
                  className="sm:object-left md:object-cover"
                />
              </picture>
            </SwiperSlide>

            <SwiperSlide>
              <picture>
                <source
                  srcSet="https://ik.imagekit.io/minumvit/storage/banners/FA-VIT_KV-Master_Jugs-(360-x-640)-VNoText.jpg?tr=w-750"
                  media="(width <= 650px)"
                />
                <Image
                  src="https://ik.imagekit.io/minumvit/storage/banners/FA-VIT_KV-Master_Jugs-(1366-x-527)-H-NoPrice.jpg?tr=w-2880"
                  alt="Slide 3"
                  fill
                  className="sm:object-left md:object-cover"
                />
              </picture>
            </SwiperSlide>
          </Swiper>

          {/* Overlay gelap */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text content */}
          <div className="absolute inset-10 z-20 flex flex-col justify-center items-start text-white px-6">
            <p className="hidden sm:flex sm:text-xl text-center font-semibold mb-2">
              Segarkan Harimu Dengan Air Mineral Terpercaya.
            </p>
            <p className="hidden sm:flex sm:text-lg text-center">
              Air Mineral Jernih dengan Standar Tinggi untuk Tubuhmu.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="text-center py-20 bg-white px-6 w-full mx-auto">
        <motion.h2
          className="text-2xl text-black font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          VIT Ada Solusi Untuk Semua Kebutuhan Air Mineralmu
        </motion.h2>

        <motion.p
          className="text-1xl text-black font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Sejak awal, VIT berkomitmen menyediakan air mineral yang bisa
          dipercaya oleh semua keluarga. Dari kemasan kecil hingga galon besar,
          setiap produk dirancang untuk memberi hidrasi yang praktis, higienis,
          dan nyaman — kapan pun kamu membutuhkannya.
        </motion.p>
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

      {/* Testimonials */}
      <section className="py-20 px-6 w-full mx-auto bg-white">
        <motion.h2
          className="text-3xl font-bold mb-10 text-black"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Apa Kata Mereka
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="p-6 border-l-4 border-red-500 bg-gray-100 shadow rounded"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-700 italic mb-3">
              “Vit selalu jadi pilihan keluarga kami. Rasa airnya ringan dan
              seger banget.”
            </p>
            <p className="font-semibold text-red-600">Maya, Ibu Rumah Tangga</p>
          </motion.div>

          <motion.div
            className="p-6 border-l-4 border-red-500 bg-gray-100 shadow rounded"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-700 italic mb-3">
              “Minum Vit tiap hari bikin kerjaan kantor jadi lebih fokus dan
              fresh.”
            </p>
            <p className="font-semibold text-red-600">Rizky, Karyawan</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
