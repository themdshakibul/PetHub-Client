"use client";

import { Chip, Card, CardHeader, CardFooter, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPaw,
  FaRegHeart,
  FaUserFriends,
  FaTrash,
} from "react-icons/fa";
import { FiEdit2, FiEye } from "react-icons/fi";

const staticPet = {
  _id: "1",
  petName: "Buddy",
  petImageUrl:
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600",
  category: "Dog",
  status: "Available",
  age: "2 years",
  gender: "Male",
  adoptionFee: 58,
  location: "New York, USA",
  species: "Golden Retriever",
  requests: 3,
};

const MyListingCard = ({ pets = staticPet }) => {
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
    requests,
  } = pets;

  const handleEdit = () => console.log("Edit:", _id);
  const handleDelete = () => console.log("Delete:", _id);
  const handleRequests = () => console.log("Requests:", _id);

  return (
    <Card className="group w-full bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 shadow-lg dark:shadow-2xl overflow-hidden transition-all duration-500 hover:border-pink-500/30">
      {/* Image Section */}
      <CardHeader className="relative h-44 overflow-hidden p-0">
        <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
          <Image
            width={400}
            height={300}
            alt={petName}
            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            src={petImageUrl}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <button className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 text-white hover:bg-pink-500 transition-all">
          <FaRegHeart size={12} />
        </button>

        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          <Chip
            size="sm"
            className="bg-black/40 backdrop-blur-xl text-yellow-300 dark:text-yellow-400 border border-white/10 text-[10px] h-5"
          >
            <div className="flex items-center gap-1 font-bold">
              <FaPaw size={8} />
              <span>{category}</span>
            </div>
          </Chip>

          <Chip
            size="sm"
            className={`${
              status === "Adopted"
                ? "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400 border-rose-500/30"
                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-500/30"
            } backdrop-blur-xl border font-bold text-[10px] h-5`}
          >
            {status}
          </Chip>
        </div>
      </CardHeader>

      {/* Content Body */}
      <div className="px-4 py-3">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-black tracking-tight text-slate-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
              {petName}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">
              {species} • {age} • {gender}
            </p>
          </div>
          <div className="text-right">
            <span className="block text-lg font-black text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-400 to-blue-400">
              ${adoptionFee}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
              {requests} requests
            </span>
          </div>
        </div>

        <div className="py-2 border-t border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <FaMapMarkerAlt className="text-pink-500" size={10} />
            </div>
            <span className="text-xs font-semibold italic truncate">
              {location}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <CardFooter className="px-4 pb-4 pt-0 flex flex-col gap-1.5">
        {/* Row 1: View + Edit */}
        <div className="flex gap-1.5 w-full">
          <Link
            href={`/all-pate/${_id}`}
            className="flex-1 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all py-1.5 rounded-lg text-center flex items-center justify-center gap-1.5 text-xs"
          >
            <FiEye size={12} />
            View
          </Link>

          <Button
            onPress={handleEdit}
            size="sm"
            className="flex-1 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all rounded-lg text-xs h-8 min-h-0"
            startContent={<FiEdit2 size={12} />}
          >
            Edit
          </Button>
        </div>

        {/* Row 2: Requests + Delete */}
        <div className="flex gap-1.5 w-full">
          <Button
            onPress={handleRequests}
            size="sm"
            className="flex-1 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all rounded-lg text-xs h-8 min-h-0"
            startContent={<FaUserFriends size={12} />}
          >
            Requests
          </Button>

          <Button
            onPress={handleDelete}
            size="sm"
            isDisabled={status === "Adopted"}
            className="flex-1 bg-red-50 dark:bg-red-500/10 text-red-500 dark:text-red-400 font-bold border border-red-200 dark:border-red-500/20 hover:bg-red-100 dark:hover:bg-red-500/20 transition-all rounded-lg h-8 min-h-0"
          >
            <FaTrash size={12} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MyListingCard;
