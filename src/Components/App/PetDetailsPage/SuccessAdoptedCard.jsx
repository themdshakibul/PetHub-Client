import { Button, Card } from "@heroui/react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const SuccessAdoptedCard = ({ petName }) => {
  return (
    <Card className="bg-[#1a1c23] border border-white/5 p-12 text-center space-y-6">
      <div className="flex justify-center">
        <div className="p-5 bg-rose-500/20 rounded-full text-rose-500 text-4xl shadow-[0_0_20px_rgba(244,63,94,0.3)]">
          <FaCheckCircle />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl font-black">{petName} has been adopted!</h2>
        <p className="text-slate-400">
          This pet has found their forever home. Browse other available pets
          below.
        </p>
      </div>
      <Link href="/all-pate">
        <Button
          variant="flat"
          className="bg-rose-500/20 text-rose-500 font-bold px-8 py-6 rounded-full"
        >
          Browse Available Pets
        </Button>
      </Link>
    </Card>
  );
};

export default SuccessAdoptedCard;
