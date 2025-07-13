// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import jnr from "../Assets/jnr.jpeg";

// export default function AboutMe() {
//   return (
//     <section className="py-20 bg-white px-6">
//       <motion.div
//         className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div>
//           <h2 className="text-3xl font-bold mb-4">Meet the Developer</h2>
//           <p className="text-gray-700 mb-4">
//             Hey, I’m Junair – a passionate Front-End Developer with a mission to
//             build AI-powered tools that make job hunting smarter and easier.
//           </p>
//           <p className="text-gray-600">
//             With 3+ years of experience in React, Next.js, and modern web tech,
//             I crafted MockMate to help others succeed in interviews. Let’s crack
//             that dream job, together.
//           </p>
//         </div>
//         <motion.div
//           className="w-full h-64 md:h-80 bg-gray-200 rounded-xl shadow-md flex items-center justify-center"
//           whileHover={{ scale: 1.05 }}
//         >
//           {/* Replace with your actual photo later */}
//           <Image alt="" src={jnr} />
//           <span className="text-gray-500">Your Photo Here</span>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import jnr from "../Assets/jnr.jpeg";
import { Atom, Server, Database, BrainCircuit } from "lucide-react";

import { Mail, Phone, Github, Linkedin } from "lucide-react";

const techStack = [
  { name: "React", icon: <Atom size={24} className="text-blue-500" /> },
  {
    name: "Next.js",
    icon: <span className="text-xl font-bold text-gray-800">N</span>,
  },
  {
    name: "Tailwind",
    icon: <span className="text-cyan-400 font-bold text-base">TW</span>,
  },
  { name: "Node.js", icon: <Server size={22} className="text-green-600" /> },
  {
    name: "MongoDB",
    icon: <Database size={22} className="text-emerald-600" />,
  },
  {
    name: "OpenAI",
    icon: <BrainCircuit size={22} className="text-indigo-500" />,
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white px-4 md:px-8 lg:px-16">
      {/* Top Content */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Developer
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Hey, I’m Junair – a dedicated Front-End Developer expanding into
            full-stack development to build powerful, AI-driven web
            applications.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            With over 3+ years of hands-on experience in React and Next.js, I've
            recently dived into the backend world with Node.js, Express, and
            MongoDB (Mongoose). Talk2Hire is a passion project aimed at helping
            job seekers level up their interview skills using AI — and I'm
            excited to keep pushing it forward.
          </p>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full h-[300px] md:h-[400px] relative rounded-xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src={jnr}
            alt="Junair - Front-End Developer"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        className="max-w-4xl mx-auto mt-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          Tech Stacks
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {tech.icon}
              <span className="text-sm font-medium text-gray-700">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      {/* <motion.div
        className="max-w-3xl mx-auto mt-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800">📞 Contact</h3>
        <div className="flex flex-col items-center gap-3 text-gray-700 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-indigo-500" />
            <span>junair.dev@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-indigo-500" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={18} className="text-indigo-500" />
            <a
              href="https://linkedin.com/in/junair" // change to your actual
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/junair
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github size={18} className="text-indigo-500" />
            <a
              href="https://github.com/junair" // change to your actual
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/junair
            </a>
          </div>
        </div>
      </motion.div> */}
      {/* Contact Section */}
<motion.div
  className="max-w-3xl mx-auto mt-20 px-6 py-10 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
    📞 Get in Touch
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-gray-700">
    {/* Email */}
    <div className="flex items-center gap-3 hover:bg-white hover:shadow px-4 py-3 rounded-xl transition">
      <Mail size={20} className="text-indigo-600" />
      <span>junair.dev@gmail.com</span>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-3 hover:bg-white hover:shadow px-4 py-3 rounded-xl transition">
      <Phone size={20} className="text-indigo-600" />
      <span>+91 98765 43210</span>
    </div>

    {/* LinkedIn */}
    <div className="flex items-center gap-3 hover:bg-white hover:shadow px-4 py-3 rounded-xl transition">
      <Linkedin size={20} className="text-indigo-600" />
      <a
        href="https://linkedin.com/in/junair"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        linkedin.com/in/junair
      </a>
    </div>

    {/* GitHub */}
    <div className="flex items-center gap-3 hover:bg-white hover:shadow px-4 py-3 rounded-xl transition">
      <Github size={20} className="text-indigo-600" />
      <a
        href="https://github.com/junair"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        github.com/junair
      </a>
    </div>
  </div>
</motion.div>

    </section>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import jnr from "../Assets/jnr.jpeg";
// import { Atom, Server, Database, BrainCircuit } from "lucide-react";

// const techStack = [
//   { name: "React", icon: <Atom size={24} className="text-blue-500" /> },
//   {
//     name: "Next.js",
//     icon: <span className="text-xl font-bold text-gray-800">N</span>,
//   },
//   {
//     name: "Tailwind",
//     icon: <span className="text-cyan-400 font-bold text-base">TW</span>,
//   },
//   { name: "Node.js", icon: <Server size={22} className="text-green-600" /> },
//   {
//     name: "MongoDB",
//     icon: <Database size={22} className="text-emerald-600" />,
//   },
//   {
//     name: "OpenAI",
//     icon: <BrainCircuit size={22} className="text-indigo-500" />,
//   },
// ];

// export default function AboutMe() {
//   return (
//     <section id="about" className="py-20 bg-white px-4 md:px-8 lg:px-16">
//       <motion.div
//         className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Text Content */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Meet the Developer
//           </h2>
//           <p className="text-gray-700 text-base md:text-lg mb-4">
//             Hey, I’m Junair – a dedicated Front-End Developer expanding into
//             full-stack development to build powerful, AI-driven web
//             applications.
//           </p>
//           <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//             With over 3 years of hands-on experience in React and Next.js, I've
//             recently dived into the backend world with Node.js, Express, and
//             MongoDB (Mongoose). I've successfully built RESTful CRUD APIs and
//             continue to grow as a full-stack engineer. MockMate is a passion
//             project aimed at helping job seekers level up their interview skills
//             using AI — and I'm excited to keep pushing it forward.
//           </p>
//         </div>

//         {/* Image Section */}
//         <motion.div
//           className="w-full h-[300px] md:h-[400px] relative rounded-xl overflow-hidden shadow-lg"
//           whileHover={{ scale: 1.03 }}
//         >
//           <Image
//             src={jnr}
//             alt="Junair - Front-End Developer"
//             fill
//             className="object-cover"
//             priority
//           />
//         </motion.div>

//         {/* Tech Stack Section */}
//         <div className="w-full mt-8 flex flex-col justify-center items-center">
//           <h3 className="text-xl font-semibold mb-4 text-gray-800">
//             Tech Stack I Use
//           </h3>
//           <div className="flex flex-row gap-4">
//             {techStack.map((tech, index) => (
//               <motion.div
//                 key={tech.name}
//                 className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl shadow-sm cursor-default"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{
//                   duration: 0.4,
//                   delay: index * 0.1, // delay each badge one after another
//                   ease: "easeOut",
//                 }}
//                 viewport={{ once: true }}
//               >
//                 {tech.icon}
//                 <span className="text-sm font-medium text-gray-700">
//                   {tech.name}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
