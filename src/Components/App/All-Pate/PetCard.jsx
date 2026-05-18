"use client";

import { Chip, Card, CardHeader, CardFooter, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPaw, FaRegHeart } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";

const PetCard = ({ pets }) => {
  const {
    _id,
    petName,
    petImageUrl,
    category,
    status,
    age,
    gender,
    adoptionFee,
    location,
    species,
  } = pets;

  return (
    <>
      <Card className="group w-full bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 shadow-lg dark:shadow-2xl overflow-hidden transition-all duration-500 hover:border-pink-500/30">
        {/* Image Section */}
        <CardHeader className="relative h-72 overflow-hidden p-0">
          <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
            <Image
              width={600}
              height={600}
              alt={petName}
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
              src={petImageUrl}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <button className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 text-white hover:bg-pink-500 transition-all">
            <FaRegHeart size={16} />
          </button>

          <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
            <Chip
              size="sm"
              className="bg-black/40 backdrop-blur-xl text-yellow-300 dark:text-yellow-400 border border-white/10"
            >
              <div className="flex items-center gap-1 font-bold">
                <FaPaw size={10} />
                <span>{category}</span>
              </div>
            </Chip>

            <Chip
              size="sm"
              className={`${
                status === "Adopted"
                  ? "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400 border-rose-500/30"
                  : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-500/30"
              } backdrop-blur-xl border font-bold`}
            >
              {status}
            </Chip>
          </div>
        </CardHeader>

        {/* Content Body */}
        <div className="px-6 py-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-3xl font-black tracking-tight text-slate-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                {petName}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                {species} • {age} • {gender}
              </p>
            </div>
            <div className="text-right">
              <span className="block text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-violet-600 dark:to-violet-400">
                ${adoptionFee}
              </span>
            </div>
          </div>

          <div className="py-4 border-t border-slate-100 dark:border-white/5">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <FaMapMarkerAlt className="text-pink-500" size={14} />
              </div>
              <span className="text-sm font-semibold italic">{location}</span>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <CardFooter className="px-6 pb-8 pt-2 gap-3">
          <Link href={`/all-pate/${_id}`}>
            <Button
              fullWidth
              className="bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all py-6 rounded-xl"
            >
              Details
            </Button>
          </Link>

          <Button
            fullWidth
            disabled={status === "Adopted"}
            startContent={
              status !== "Adopted" && (
                <HiOutlineLightningBolt className="animate-pulse" />
              )
            }
            className={`font-black shadow-lg hover:-translate-y-1 transition-all py-6 rounded-xl ${
              status === "Adopted"
                ? "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                : "bg-linear-to-br from-[#FF8B94] via-[#ff4d6d] to-[#7CCAD5] text-white"
            }`}
          >
            {status === "Adopted" ? "Adopted" : "Adopt Now"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default PetCard;
