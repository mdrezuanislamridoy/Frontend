import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="bg-gray-800 max-w-7xl m-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <blockquote className="text-2xl sm:text-3xl font-semibold text-white italic">
          “The best way to predict the future is to invent it.”
        </blockquote>
        <p className="mt-4 text-gray-400 text-sm sm:text-base">— Alan Kay</p>
      </motion.div>
    </section>
  );
}
