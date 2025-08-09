import React from "react";
import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import { motion } from "framer-motion";
import TopProducts from "./sections/TopProducts";
import FeaturedProducts from "./sections/FeaturedProducts.jsx";
import TestimonialsCarousel from "./sections/Testimonials.jsx";
import QuoteSection from "./sections/QuoteSection.jsx";

export default function Homepage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Categories />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <TopProducts />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <FeaturedProducts />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <TestimonialsCarousel />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <QuoteSection />
      </motion.div>
    </div>
  );
}
