import { Button, Card } from "@heroui/react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const SuccessAdoptedCard = ({ petName }) => {
  return (
    <Card
      className="
        p-12 text-center space-y-6 border transition-all duration-300

        bg-white border-slate-200 text-slate-900
        dark:bg-[#1a1c23] dark:border-white/5 dark:text-white

        shadow-lg dark:shadow-none
      "
    >
      {/* Icon */}
      <div className="flex justify-center">
        <div
          className="
            p-5 rounded-full text-4xl transition-all duration-300

            bg-rose-100 text-rose-500
            dark:bg-rose-500/20 dark:text-rose-500
            dark:shadow-[0_0_20px_rgba(244,63,94,0.3)]
          "
        >
          <FaCheckCircle />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h2 className="text-3xl font-black">{petName} has been adopted!</h2>

        <p className="text-slate-600 dark:text-slate-400">
          This pet has found their forever home. Browse other available pets
          below.
        </p>
      </div>

      {/* Button */}
      <Link
        href="/all-pate"
        className="
            font-bold px-2 py-4 rounded-full transition-all duration-300

            bg-rose-100 text-rose-600 hover:bg-rose-200
            dark:bg-rose-500/20 dark:text-rose-500 dark:hover:bg-rose-500/30
          "
      >
        Browse Available Pets
      </Link>
    </Card>
  );
};

export default SuccessAdoptedCard;
