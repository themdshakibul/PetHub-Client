"use client";

import { Chip, Card, CardHeader, CardFooter, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaPaw,
  FaRegHeart,
  FaUserFriends,
  FaTrash,
} from "react-icons/fa";
import { FiEdit2, FiEye } from "react-icons/fi";
import DeleteCard from "./DeleteCard";

const MyListingCard = ({ pets }) => {
  const router = useRouter();
  if (!pets) return null;

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

  const handleRequests = () => console.log("Requests:", _id);

  const displayImage =
    petImageUrl ||
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600";

  return (
    <Card className="group w-full bg-white dark:bg-[#0b1322] border border-slate-200 dark:border-white/5 shadow-md dark:shadow-2xl overflow-hidden transition-all duration-500 hover:border-pink-500/30">
      {/* Image Section */}
      <CardHeader className="relative h-44 overflow-hidden p-0">
        <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
          <Image
            width={400}
            height={300}
            alt={petName || "Pet Image"}
            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            src={displayImage}
            priority={false}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <button className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/30 text-white hover:bg-pink-500 transition-all">
          <FaRegHeart size={12} />
        </button>

        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {category && (
            <Chip
              size="sm"
              className="bg-black/40 backdrop-blur-xl text-yellow-500 dark:text-yellow-400 border border-white/10 text-[10px] h-5 font-bold"
            >
              <div className="flex items-center gap-1">
                <FaPaw size={8} />
                <span>{category}</span>
              </div>
            </Chip>
          )}

          <Chip
            size="sm"
            className={`${
              status === "Adopted"
                ? "bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-500/30"
                : "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
            } backdrop-blur-xl border font-bold text-[10px] h-5`}
          >
            {status || "Available"}
          </Chip>
        </div>
      </CardHeader>

      {/* Content Body */}
      <div className="px-4 py-3">
        <div className="flex justify-between items-start mb-2">
          <div className="max-w-[65%]">
            <h3 className="text-lg font-black tracking-tight text-gray-900 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-300 truncate">
              {petName}
            </h3>
            <p className="text-gray-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5 truncate">
              {species || "Unknown"} • {age || "N/A"} • {gender || "N/A"}
            </p>
          </div>
          <div className="text-right">
            <span className="block text-lg font-black text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-blue-500">
              ${adoptionFee}
            </span>
            <span className="text-[10px] text-gray-600 dark:text-slate-400 font-bold">
              {requests || 0} requests
            </span>
          </div>
        </div>

        <div className="py-2 border-t border-slate-200 dark:border-white/5">
          <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <FaMapMarkerAlt className="text-pink-500" size={10} />
            </div>
            <span className="text-xs font-bold italic truncate">
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
            className="flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-800 dark:text-white font-black border border-slate-300 dark:border-white/10 transition-all py-1.5 rounded-lg text-center flex items-center justify-center gap-1.5 text-xs shadow-xs"
          >
            <FiEye size={12} />
            View
          </Link>

          <Button
            size="sm"
            onPress={() => router.push(`/dashboard/edit-pate/${_id}`)}
            className="flex-1 w-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-800 dark:text-white font-black border border-slate-300 dark:border-white/10 transition-all rounded-lg text-xs h-8 min-h-0 shadow-xs"
            startContent={<FiEdit2 size={12} />}
          >
            Edit
          </Button>
        </div>

        {/* Row 2: Requests + Delete */}
        <div className="grid grid-cols-2 gap-1.5 w-full">
          <Button
            onPress={handleRequests}
            size="sm"
            className="flex-1 w-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-800 dark:text-white font-black border border-slate-300 dark:border-white/10 transition-all rounded-lg text-xs h-8 min-h-0 shadow-xs"
            startContent={<FaUserFriends size={12} />}
          >
            Requests
          </Button>

          <DeleteCard petId={_id} status={status} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default MyListingCard;
