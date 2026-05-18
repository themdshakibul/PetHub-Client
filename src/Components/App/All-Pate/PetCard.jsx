"use client";

import { Chip, Card, CardHeader, CardFooter, Button } from "@heroui/react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPaw, FaRegHeart } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";

const PetCard = () => {
  const pets = [
    {
      id: 1,
      name: "Blizzard",
      breed: "Siberian Husky",
      age: "2Y",
      gender: "Male",
      price: "6000",
      location: "Dhaka, Bangladesh",
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
      category: "Dog",
      status: "Available",
    },
    {
      id: 2,
      name: "Whiskers",
      breed: "Tabby Cat",
      age: "1Y",
      gender: "Female",
      price: "2500",
      location: "Chittagong, BD",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
      category: "Cat",
      status: "Available",
    },
  ];

  return (
    <>
      {pets.map((pet) => (
        <Card
          key={pet.id}
          className="group w-full bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white shadow-xl dark:shadow-2xl overflow-hidden transition-all duration-500 hover:border-pink-500/30"
        >
          <CardHeader className="relative h-72 overflow-hidden p-0">
            <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
              <Image
                width={600}
                height={600}
                alt={pet.name}
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                src={pet.image}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <button className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-pink-500 transition-all">
              <FaRegHeart size={16} />
            </button>

            <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
              <Chip
                size="sm"
                startContent={<FaPaw size={10} />}
                className="bg-white/10 backdrop-blur-xl text-yellow-400 border border-white/10"
              >
                {pet.category}
              </Chip>
              <Chip
                size="sm"
                className={`${
                  pet.status === "Adopted"
                    ? "bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-500/20"
                    : "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                } backdrop-blur-xl border font-bold`}
              >
                {pet.status}
              </Chip>
            </div>
          </CardHeader>

          <div className="px-6 py-5">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-300">
                  {pet.name}
                </h3>
                <p className="text-slate-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-widest mt-1">
                  {pet.breed} • {pet.age} • {pet.gender}
                </p>
              </div>
              <div className="text-right">
                <span className="block text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-violet-500 dark:to-violet-400">
                  ${pet.price}
                </span>
              </div>
            </div>

            <div className="py-4 border-t border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-3 text-slate-500 dark:text-gray-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <FaMapMarkerAlt className="text-pink-500" size={14} />
                </div>
                <span className="text-sm font-medium italic">
                  {pet.location}
                </span>
              </div>
            </div>
          </div>

          <CardFooter className="px-6 pb-8 pt-2 gap-3">
            <Button
              fullWidth
              variant="flat"
              className="bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all py-6 rounded-xl"
            >
              Details
            </Button>

            <Button
              fullWidth
              disabled={pet.status === "Adopted"}
              startContent={
                pet.status !== "Adopted" && (
                  <HiOutlineLightningBolt className="animate-pulse" />
                )
              }
              className={`font-black shadow-lg hover:-translate-y-1 transition-all py-6 rounded-xl ${
                pet.status === "Adopted"
                  ? "bg-slate-300 dark:bg-gray-700 text-slate-500 dark:text-gray-400 cursor-not-allowed opacity-50"
                  : "bg-linear-to-br from-[#FF8B94] via-[#ff4d6d] to-[#7CCAD5] text-white"
              }`}
            >
              {pet.status === "Adopted" ? "Adopted" : "Adopt Now"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default PetCard;
