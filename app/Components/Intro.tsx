"use client";
import { motion } from "framer-motion";
import { Name } from "../utils/Constants";

export default function Intro() {
  return (
    <section id="intro" className="bg-gray-50 py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          What is {<Name colored={true} />}?
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          MockMate is your personal AI interview coach. It simulates realistic
          technical and behavioral interviews, records your responses, and
          provides smart, constructive feedback using AI.
        </p>
        <p className="text-gray-600 text-md">
          You can speak naturally, just like a real interview. Then, using tools
          like GPT and Whisper, MockMate evaluates your tone, clarity,
          structure, and content — giving you everything you need to improve.
        </p>
      </motion.div>
    </section>
  );
}
