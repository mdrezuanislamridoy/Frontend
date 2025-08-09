import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    text: "This platform made my shopping so much easier! Highly recommend.",
    role: "Customer",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sarah Lee",
    text: "Amazing quality products and super fast delivery.",
    role: "Customer",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "David Smith",
    text: "Best customer service I’ve experienced in years!",
    role: "Customer",
    img: "https://i.pravatar.cc/100?img=3",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="bg-gray-900 max-w-7xl m-auto py-16 text-white">
      <div className="container mx-auto ">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-white"
                />
                <p className="text-gray-300 mb-4">{t.text}</p>
                <h4 className="font-bold">{t.name}</h4>
                <span className="text-sm text-gray-400">{t.role}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
