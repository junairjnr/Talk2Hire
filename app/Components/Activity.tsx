// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import devImage from "../Assets/undraw_interview_yz52.svg"; // Replace with your own SVG or PNG

// export default function UserActivity() {
//   const stats = [
//     { label: "Users Practiced", value: "1.2K+" },
//     { label: "Active Members", value: "300+" },
//     { label: "AI Sessions", value: "5.4K+" },
//   ];

//   return (
//     <section id="activity" className="py-20 bg-gray-50 px-4 md:px-8 lg:px-16">
//       <motion.div
//         className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         {/* Illustration */}
//         <motion.div
//           className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl"
//           whileHover={{ scale: 1.03 }}
//         >
//           <Image
//             src={devImage}
//             alt="Developer working illustration"
//             fill
//             className="object-contain"
//             priority
//           />
//         </motion.div>

//         {/* Stats */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
//             Our Reach & Activity
//           </h2>
//           <p className="text-gray-600 mb-6 text-md md:text-lg">
//             MockMate is helping candidates practice interviews across the globe.
//             Here's how people are engaging with the platform:
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             {stats.map((item) => (
//               <motion.div
//                 key={item.label}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white rounded-xl p-5 shadow-md text-center"
//               >
//                 <h3 className="text-2xl font-bold text-indigo-600">{item.value}</h3>
//                 <p className="text-sm text-gray-600">{item.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import devImage from "../Assets/undraw_interview_yz52.svg";
import { MapPin, Database, Server, BrainCircuit, Atom } from "lucide-react"; // Lucide icons for stack

export default function UserActivity() {
  const stats = [
    { label: "Users Practiced", end: 1200 },
    { label: "Active Members", end: 300 },
    { label: "AI Sessions", end: 5400 },
  ];

  const techStack = [
    { name: "React", icon: <Atom size={28} className="text-blue-500" /> },
    { name: "Next.js", icon: <span className="text-xl font-semibold">N</span> },
    {
      name: "Tailwind",
      icon: <span className="text-cyan-400 font-bold">TW</span>,
    },
    { name: "Node.js", icon: <Server size={26} className="text-green-600" /> },
    {
      name: "MongoDB",
      icon: <Database size={26} className="text-emerald-600" />,
    },
    {
      name: "OpenAI",
      icon: <BrainCircuit size={26} className="text-indigo-500" />,
    },
  ];

  return (
    <section id="activity" className="py-20 bg-gray-50 px-4 md:px-8 lg:px-16">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Left: Image */}
        <motion.div
          className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden"
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src={devImage}
            alt="Developer illustration"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Right: Stats + Stack + Location */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Reach & Tech
          </h2>
          <p className="text-gray-600 text-md md:text-lg mb-4">
            Thousands of developers are already sharpening their skills with
            Talk2Hire. Check out the stats and tech stack powering this app.
          </p>

          {/* Live Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow text-center"
              >
                <h3 className="text-2xl font-bold text-indigo-600">
                  <CountUp end={stat.end} duration={2} separator="," />+
                </h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Location badge (mock pin) */}
          {/* <motion.div
            className="flex items-center gap-2 mb-6"
            whileHover={{ x: 5 }}
          >
            <MapPin className="text-red-500" />
            <span className="text-sm text-gray-600">
              Active users in India, USA, UAE, Canada & more
            </span>
          </motion.div> */}

          {/* Tech Stack Badges */}
          {/* <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow"
              >
                {tech.icon}
                <span className="text-sm font-medium text-gray-700">
                  {tech.name}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </motion.div>
    </section>
  );
}
