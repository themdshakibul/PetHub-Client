import { Card } from "@heroui/react";
import { FaPaw, FaHeart, FaShieldDog, FaHeadset } from "react-icons/fa6";

const PetStatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <FaPaw />,
      number: "3.5K+",
      title: "Pets Adopted",
      gradient: "from-pink-500 to-rose-500",
      glow: "bg-pink-500/20 dark:bg-pink-500/10",
    },
    {
      id: 2,
      icon: <FaHeart />,
      number: "2K+",
      title: "Happy Families",
      gradient: "from-orange-400 to-pink-500",
      glow: "bg-orange-500/20 dark:bg-orange-500/10",
    },
    {
      id: 3,
      icon: <FaShieldDog />,
      number: "99%",
      title: "Trusted Care",
      gradient: "from-cyan-400 to-blue-500",
      glow: "bg-cyan-500/20 dark:bg-cyan-500/10",
    },
    {
      id: 4,
      icon: <FaHeadset />,
      number: "24/7",
      title: "Live Support",
      gradient: "from-violet-500 to-indigo-500",
      glow: "bg-violet-500/20 dark:bg-violet-500/10",
    },
  ];

  return (
    <section className="bg-gray-100 px-4 py-14 transition-colors duration-300 dark:bg-[#07111F]">
      <div className="container mx-auto px-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <Card
            key={item.id}
            className="
              group
              relative
              overflow-hidden
              border
              border-gray-200
              bg-white
              p-6
              shadow-md
              transition
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              dark:border-white/10
              dark:bg-white/5
              dark:backdrop-blur-xl
            "
          >
            {/* Glow */}
            <div
              className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl ${item.glow}`}
            ></div>

            <div className="relative z-10 flex flex-col gap-5">
              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r ${item.gradient} text-xl text-white shadow-lg`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                  {item.number}
                </h2>

                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                  {item.title}
                </p>
              </div>

              {/* Bottom Line */}
              <div
                className={`h-1 w-16 rounded-full bg-linear-to-r ${item.gradient}`}
              ></div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PetStatsSection;
