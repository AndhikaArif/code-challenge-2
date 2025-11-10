"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section>
        <div className="relative h-[80vh] w-full">
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
              <div className="relative w-full h-full">
                <Image
                  src="https://ik.imagekit.io/minumvit/storage/banners/FA-VIT_KV-Master_Female-(1366-x-527)-H_8-M-NoPrice.jpg?tr=w-2880"
                  alt="Slide 1"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="https://ik.imagekit.io/minumvit/storage/banners/FA-VIT_KV-Master_Cups-(1366-x-527)NoPrice.jpg?tr=w-2880"
                  alt="Slide 2"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="https://ik.imagekit.io/minumvit/storage/banners/FA-VIT_KV-Master_Jugs-(1366-x-527)-H-NoPrice.jpg?tr=w-2880"
                  alt="Slide 3"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Overlay gelap */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text content */}
          <div className="absolute inset-10 z-20 flex flex-col justify-center items-start text-white px-6">
            <p className="text-xl font-semibold mb-2">
              Perusahaan software yang membuat aplikasi web untuk bisnis.
            </p>
            <p className="text-lg max-w-2xl">
              Meningkatkan produktivitas bisnis lewat teknologi sederhana namun
              powerful.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
