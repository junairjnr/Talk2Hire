"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-100">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 text-lg">
          We are a team of passionate developers focused on building stunning user experiences.
        </p>
      </motion.div>
    </section>
  );
}
