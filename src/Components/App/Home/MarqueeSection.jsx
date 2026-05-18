"use client";

import React from "react";
import { motion } from "framer-motion";

const MarqueeSection = () => {
  const cards = [
    {
      icon: "❤️",
      title: "Save a Life",
      desc: "Every adoption gives a pet a second chance. You become a hero in their story.",
    },
    {
      icon: "👥",
      title: "Join Our Community",
      desc: "Connect with thousands of happy pet owners who share tips, stories and support.",
    },
    {
      icon: "🛡️",
      title: "Verified & Safe",
      desc: "All pets are health-checked, vaccinated and verified before being listed.",
    },
    {
      icon: "🎗️",
      title: "Lifelong Support",
      desc: "Get expert guidance on pet care, training and wellness throughout your journey.",
    },
  ];
  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
    <div className="bg-slate-50 dark:bg-[#0f172a] py-20 overflow-hidden transition-colors duration-300">
      <div className="text-center mb-16 px-4">
        <span className="text-[#f43f5e] text-xs font-bold border border-[#f43f5e]/30 px-4 py-1.5 rounded-full uppercase tracking-widest bg-[#f43f5e]/10">
          Why PetNest?
        </span>
        <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white mt-6 tracking-tight">
          Adopt with{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500">
            Confidence
          </span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg font-medium">
          We make the adoption process simple, safe, and rewarding for both you
          and your new companion.
        </p>
      </div>

      <div className="flex w-full overflow-hidden select-none">
        <motion.div
          className="flex flex-nowrap gap-8 px-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedCards.map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] bg-white dark:bg-[#1e293b]/50 backdrop-blur-sm p-10 rounded-[2rem] border border-slate-200 dark:border-gray-800 flex flex-col items-center text-center space-y-6 hover:border-pink-500/50 shadow-sm dark:shadow-none transition-all duration-500"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-wide">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-base leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSection;
