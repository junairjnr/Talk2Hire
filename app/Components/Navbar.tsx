// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const navLinks = [
//   { href: "#home", label: "Home" },
//   { href: "#intro", label: "Intro" },
//   { href: "#features", label: "Features" },
//   { href: "#activity", label: "Activity" },
//   { href: "#about", label: "About" },
// ];

// export default function Navbar() {
//   return (
//     <motion.nav
//       className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 shadow-sm"
//       initial={{ y: -50 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
//         <Link
//           href="#home"
//           className="font-bold text-lg text-indigo-600 font-serif"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight">
//             <span className="text-indigo-600">Talk</span>
//             <span className="text-white">2</span>
//             <span className="text-indigo-600">Hire</span>
//           </h1>
//         </Link>
//         <div className="flex gap-6">
//           {navLinks.map((link) => (
//             <motion.a
//               key={link.href}
//               href={link.href}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="text-gray-700 font-medium hover:text-indigo-500 transition"
//             >
//               {link.label}
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </motion.nav>
//   );
// }
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Hamburger and close icons

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#intro", label: "Intro" },
  { href: "#features", label: "Features" },
  { href: "#activity", label: "Activity" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 shadow-sm"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand Logo */}
        <Link href="#home" className="font-bold text-lg text-indigo-600 font-mono">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            <span className="text-indigo-600">Talk</span>
            <span className="text-gray-200 text-xl md:text-3xl">2</span>
            <span className="text-indigo-600">Hire</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 font-medium hover:text-indigo-500 transition"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-white/90 backdrop-blur-sm shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium hover:text-indigo-600 transition"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
