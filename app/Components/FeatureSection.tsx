// "use client";
// import { motion } from "framer-motion";

// export default function FeatureSection() {
//   const features = [
//     "Fast Performance",
//     "Modern Design",
//     "Easy Customization",
//   ];

//   return (
//     <section className="py-20 px-6 md:px-12 bg-white">
//       <div className="max-w-4xl mx-auto text-center">
//         <motion.h2
//           className="text-3xl font-bold mb-8"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Features
//         </motion.h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {features.map((feature, i) => (
//             <motion.div
//               key={feature}
//               className="p-6 border rounded-xl shadow hover:shadow-lg"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="font-semibold text-lg">{feature}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { Sparkles, Mic, BrainCircuit, PlayCircle } from "lucide-react";
import { Name } from "../utils/Constants";

const features = [
  { icon: <Mic size={32} />, title: "Real-Time Recording", desc: "Speak your responses live in-browser." },
  { icon: <BrainCircuit size={32} />, title: "AI-Powered Feedback", desc: "Get tone & clarity analysis via GPT-4." },
  { icon: <Sparkles size={32} />, title: "Smart Question Generation", desc: "Unique questions every session." },
  { icon: <PlayCircle size={32} />, title: "Session Review", desc: "Replay and reflect with transcripts." },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white text-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Why {<Name colored={true} />}?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-100 rounded-xl p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-4 text-indigo-600">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
