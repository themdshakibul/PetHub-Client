"use client";

import { FiList, FiPlus } from "react-icons/fi";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const staticListings = [
  { id: 1, status: "available" },
  { id: 2, status: "available" },
  { id: 3, status: "available" },
];

const MyListingsHeader = ({ listings = staticListings }) => {
  const router = useRouter();

  const total = listings?.length || 0;
  const available =
    listings?.filter((l) => l.status === "available")?.length || 0;
  const adopted = listings?.filter((l) => l.status === "adopted")?.length || 0;

  const stats = [
    {
      label: "Total Listings",
      value: total,
      color: "text-rose-400 dark:text-rose-400",
    },
    {
      label: "Available",
      value: available,
      color: "text-teal-500 dark:text-teal-400",
    },
    {
      label: "Adopted",
      value: adopted,
      color: "text-red-500 dark:text-red-400",
    },
  ];

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 rounded-2xl">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-rose-500/10 text-rose-500 dark:text-rose-400 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full border border-rose-500/20 mb-3">
            <FiList size={10} />
            My Listing
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-1.5">
            My{" "}
            <span className="bg-linear-to-r from-rose-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Listings
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Manage your pet listings and adoption requests.
          </p>
        </div>

        <Button
          onPress={() => router.push("/dashboard/add-pate")}
          className="self-start sm:self-auto bg-linear-to-r from-rose-400 to-pink-500 text-white font-semibold text-sm px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-all"
        >
          <FiPlus size={14} />
          Add New Pet
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {stats.map(({ label, value, color }) => (
          <div
            key={label}
            className="bg-slate-100 dark:bg-[#1e2640] border border-slate-200 dark:border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <span className={`text-3xl font-bold ${color}`}>{value}</span>
            <span className="text-slate-500 dark:text-slate-400 text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListingsHeader;
