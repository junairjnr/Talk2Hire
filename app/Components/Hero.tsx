
// "use client";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-6"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center max-w-3xl"
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
//           Ace Your Interviews with{" "}
//           <span className="text-indigo-400">
//             <span className="font-bold tracking-tight font-mono">
//               <span className="text-indigo-600">Talk</span>
//               <span className="text-gray-400 text-3xl md:text-5xl">2</span>
//               <span className="text-indigo-600">Hire</span>
//             </span>
//           </span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 mb-6">
//           Practice technical & behavioral interviews with real-time AI feedback
//           — speak, record, and improve.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-indigo-500 hover:bg-indigo-600 transition-all px-6 py-3 text-lg rounded-full font-semibold"
//         >
//           Start Practicing
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTitle(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden"
    >
      {/* Fullscreen Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <Stars radius={100} depth={50} count={10000} factor={4} saturation={0} fade speed={0.5} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl z-10 px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          {showTitle && (
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ace Your Interviews with <br />
              <span className="text-indigo-400 font-mono tracking-tight">
                <span className="text-indigo-600">Talk</span>
                <span className="text-gray-300 text-3xl md:text-5xl">2</span>
                <span className="text-indigo-600">Hire</span>
              </span>
            </motion.span>
          )}
        </h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Practice technical & behavioral interviews with real-time AI feedback — speak,
          record, and improve.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-indigo-500 hover:bg-indigo-600 transition-all px-6 py-3 text-lg rounded-full font-semibold shadow-lg"
        >
          Start Practicing
        </motion.button>
      </motion.div>
    </section>
  );
}

// "use client";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Hero() {
//   const [showTitle, setShowTitle] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setShowTitle(true), 300);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden"
//     >
//       {/* Three.js Canvas Background */}
//       <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={0.5} />
//         <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//       </Canvas>

//       {/* Hero Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center max-w-3xl z-10"
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
//           {showTitle && (
//             <motion.span
//               className="inline-block"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               Ace Your Interviews with <br />
//               <span className="text-indigo-400 font-mono tracking-tight">
//                 <span className="text-indigo-600">Talk</span>
//                 <span className="text-gray-300 text-3xl md:text-5xl">2</span>
//                 <span className="text-indigo-600">Hire</span>
//               </span>
//             </motion.span>
//           )}
//         </h1>

//         <motion.p
//           className="text-lg md:text-xl text-gray-300 mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//         >
//           Practice technical & behavioral interviews with real-time AI feedback —
//           speak, record, and improve.
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
//           whileTap={{ scale: 0.95 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className="bg-indigo-500 hover:bg-indigo-600 transition-all px-6 py-3 text-lg rounded-full font-semibold shadow-lg"
//         >
//           Start Practicing
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// }
