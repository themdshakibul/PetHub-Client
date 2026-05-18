import { Chip } from "@heroui/react";
import PetCard from "../All-Pate/PetCard";

const AvlablePateSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 px-4 py-20 transition-colors duration-300 dark:bg-[#0b0b0b]">
      <div className="absolute -left-25 -top-25 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl dark:bg-pink-500/20"></div>

      <div className="relative z-10 container mx-auto  flex flex-col items-center">
        {/* Header Text Area */}
        <div className="text-center mb-16 flex flex-col items-center">
          <Chip
            variant="flat"
            className="mb-8 border border-pink-500/20 bg-pink-500/10 px-4 py-1 text-pink-600 dark:text-pink-400"
          >
            Featured Pets
          </Chip>

          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Meet Your <br className="md:hidden" />
            <span className="bg-linear-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Perfect Match
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg md:text-xl dark:text-gray-400">
            These lovable companions are searching for a caring home and a
            loving family. Discover pets ready to bring joy into your life
            forever.
          </p>

          <div className="mt-10 h-1 w-28 rounded-full bg-linear-to-r from-pink-500 via-violet-500 to-cyan-500"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <PetCard /> */}
        </div>
      </div>
    </section>
  );
};

export default AvlablePateSection;
