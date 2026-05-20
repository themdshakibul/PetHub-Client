"use client";

import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaPaw, FaMapMarkerAlt, FaHeartbeat } from "react-icons/fa";

const getStatusStyle = (status) => {
  switch (status?.toLowerCase()) {
    case "available":
      return "bg-emerald-500 text-white";
    case "adopted":
      return "bg-slate-500 text-white";
    case "pending":
      return "bg-yellow-500 text-white";
    default:
      return "bg-rose-500 text-white";
  }
};

const PetInfoCard = ({ petInfo }) => {
  const {
    petName,
    petImageUrl,
    status,
    healthStatus,
    description,
    breed,
    gender,
    adoptionFee,
    location,
    species,
  } = petInfo;

  return (
    <div className="space-y-6">
      {/* Image */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10">
        <Image
          width={800}
          height={400}
          src={petImageUrl}
          alt={petName}
          className="w-full h-100 object-cover"
        />
        <Chip
          className={`absolute top-4 right-4 border-none ${getStatusStyle(status)}`}
          variant="flat"
        >
          {status}
        </Chip>
      </div>

      {/* Name + Fee */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-black text-gray-900 dark:text-white">
            {petName}
          </h1>
          <div className="flex gap-2 mt-2">
            <Chip size="sm" className="bg-rose-500/20 text-rose-500">
              {species}
            </Chip>
            <Chip
              size="sm"
              className="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-white"
            >
              {breed}
            </Chip>
            <Chip
              size="sm"
              className="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-white"
            >
              {gender}
            </Chip>
          </div>
        </div>
        <div className="text-right">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">
            Adoption Fee
          </p>
          <p className="text-4xl font-black text-rose-500">${adoptionFee}</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Species", val: species, icon: <FaPaw /> },
          { label: "Breed", val: breed, icon: <FaPaw /> },
          { label: "Location", val: location, icon: <FaMapMarkerAlt /> },
          { label: "Health", val: healthStatus, icon: <FaHeartbeat /> },
        ].map((item, i) => (
          <Card
            key={i}
            className="bg-slate-100 dark:bg-[#1a1c23] border border-slate-200 dark:border-white/5 p-4 flex-row items-center gap-4"
          >
            <div className="text-rose-500 text-xl">{item.icon}</div>
            <div>
              <p className="text-slate-500 dark:text-slate-500 text-xs font-bold uppercase">
                {item.label}
              </p>
              <p className="text-gray-900 dark:text-white font-bold">
                {item.val}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          About {petName}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PetInfoCard;
