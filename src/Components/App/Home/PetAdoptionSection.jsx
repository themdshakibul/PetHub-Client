import Image from "next/image";
import React from "react";

const PetAdoptionSection = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#070b19] text-gray-900 dark:text-gray-100 transition-all duration-500 py-24 px-4 md:px-8">
      <div className="absolute top-10 left-10 w-100 h-100 bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="relative overflow-hidden rounded-[40px] border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0d1527]/60 backdrop-blur-2xl shadow-xl dark:shadow-[0_0_50px_rgba(8,14,28,0.8)]">
        <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 via-transparent to-cyan-500/5"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 md:p-10 lg:p-14">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-[34px] bg-linear-to-r from-pink-500/10 via-purple-500/5 to-cyan-500/10 blur-2xl opacity-70"></div>

            <div className="relative overflow-hidden rounded-[30px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#090d1a] p-2">
              <Image
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                alt="Pet"
                width={700}
                height={700}
                className="w-full h-112 object-cover rounded-[24px] group-hover:scale-102 transition duration-700"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-200 dark:border-pink-500/20 bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 text-xs font-semibold backdrop-blur-xl">
              🐾 Featured Companion
            </div>

            <h3 className="mt-6 text-3xl md:text-5xl font-black leading-tight text-gray-900 dark:text-white">
              Im Fluffy, Funny, and Ready to Turn Your Life Upside Down!
            </h3>

            <p className="mt-6 text-sm md:text-base text-gray-700 dark:text-gray-400 leading-relaxed">
              Hi hooman! Yeah, you! Need someone to interrupt Zoom meetings,
              steal your snacks, and warm your heart all at once? Adopt me, and
              lets make life{" "}
              <span className="text-pink-500 dark:text-pink-400 font-semibold">
                paw-some
              </span>{" "}
              together!
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Friendly", "Playful", "Loyal"].map((item, i) => (
                <div
                  key={i}
                  className="px-5 py-3 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#121b2d]/40 backdrop-blur-xl"
                >
                  <p className="text-[11px] font-medium text-pink-500/80 dark:text-pink-400/70">
                    Trait
                  </p>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                    {item}
                  </h4>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="px-8 py-4 rounded-full bg-linear-to-r from-[#ec4899] to-[#f97316] text-white font-bold hover:opacity-90 shadow-lg shadow-pink-500/20 transition duration-300">
                Adopt Now
              </button>

              <button className="px-8 py-4 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 font-semibold transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetAdoptionSection;
