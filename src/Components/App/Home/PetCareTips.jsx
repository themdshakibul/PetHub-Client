"use client";

import React from "react";
import { motion } from "framer-motion";

const PetCareTips = () => {
  const row1 = [
    {
      icon: "🍎",
      title: "Balanced Nutrition",
      desc: "Feed species-appropriate food in measured portions. Avoid human food that can be toxic to pets.",
    },
    {
      icon: "🏃‍♂️",
      title: "Daily Exercise",
      desc: "Regular physical activity keeps your pet healthy and reduces destructive behavior.",
    },
    {
      icon: "🏥",
      title: "Regular Vet Visits",
      desc: "Annual check-ups catch health issues early. Keep vaccinations and parasite prevention up to date.",
    },
  ];

  const row2 = [
    {
      icon: "💖",
      title: "Mental Stimulation",
      desc: "Puzzle toys, training sessions and social interaction keep pets mentally sharp and happy.",
    },
    {
      icon: "🛁",
      title: "Proper Grooming",
      desc: "Regular brushing, nail trims and baths (as needed) prevent health issues and keep pets comfortable.",
    },
    {
      icon: "🏠",
      title: "Safe Environment",
      desc: "Pet-proof your home. Remove toxic plants, secure chemicals and create a cozy, safe space.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#070b19] text-gray-900 dark:text-white transition-all duration-500 py-24 px-4 md:px-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-purple-600/5 dark:bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 text-xs font-semibold rounded-full uppercase tracking-wider">
          Pet Care Guide
        </span>
        <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white mt-6 tracking-tight">
          Expert{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500">
            Pet Care Tips
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
          Give your new companion the best life possible with these essential
          care guidelines.
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full relative z-10">
        <div className="flex overflow-hidden select-none mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            whileHover={{ transition: { duration: 0 } }}
            className="flex gap-6 whitespace-nowrap min-w-full cursor-pointer"
          >
            {[...row1, ...row1].map((tip, index) => (
              <div
                key={index}
                className="w-95 md:w-sm shrink-0 bg-gray-50 dark:bg-[#1a2030]/60 border border-gray-200 dark:border-white/5 backdrop-blur-md p-6 rounded-2xl flex gap-4 shadow-md dark:shadow-xl whitespace-normal"
              >
                <div className="text-3xl p-3 bg-gray-200/50 dark:bg-white/5 rounded-xl h-fit">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden select-none mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            animate={{ x: ["-50%", 0] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            whileHover={{ transition: { duration: 0 } }}
            className="flex gap-6 whitespace-nowrap min-w-full cursor-pointer"
          >
            {[...row2, ...row2].map((tip, index) => (
              <div
                key={index}
                className="w-95 md:w-md shrink-0 bg-gray-50 dark:bg-[#1a2030]/60 border border-gray-200 dark:border-white/5 backdrop-blur-md p-6 rounded-2xl flex gap-4 shadow-md dark:shadow-xl whitespace-normal"
              >
                <div className="text-3xl p-3 bg-gray-200/50 dark:bg-white/5 rounded-xl h-fit">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;
