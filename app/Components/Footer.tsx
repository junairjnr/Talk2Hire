"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white text-center py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Talk2Hire by Junair • Built with Next.js +
        Framer Motion
      </p>
    </motion.footer>
  );
}
