"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function PetFilterForm({ handleSearch }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [name, setName] = useState(searchParams.get("name") || "");
  const isFirstRender = useRef(true); 

  const currentSpecies = searchParams.get("species") || "Select species";
  const currentSort = searchParams.get("sort") || "Default";

  const isFiltered =
    searchParams.get("name") ||
    currentSpecies !== "Select species" ||
    currentSort !== "Default";

  useEffect(() => {
    
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (name.trim()) {
        params.set("name", name.trim());
      } else {
        params.delete("name");
      }
      params.set("page", "1");

      router.push(`/all-pate?${params.toString()}`, { scroll: false });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [name]); 

  const handleSelectChange = (fieldName, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "Select species" && value !== "Default") {
      params.set(fieldName, value);
    } else {
      params.delete(fieldName);
    }
    params.set("page", "1");
    router.push(`/all-pate?${params.toString()}`, { scroll: false });
  };

  const handleCancelFilters = (e) => {
    e.preventDefault();
    setName("");
    isFirstRender.current = true; 
    window.location.href = "/all-pate?page=1";
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 backdrop-blur-2xl rounded-[32px] p-6 md:p-8 shadow-[0_0_60px_rgba(0,255,255,0.06)]"
    >
      <div className="absolute -top-20 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-pink-500 to-violet-500 flex items-center justify-center text-white text-xl shadow-lg">
            ⚡
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Search & Filter
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
              Find pets easily with smart filters.
            </p>
          </div>
        </div>

        {isFiltered && (
          <button
            type="button"
            onClick={handleCancelFilters}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-red-500 hover:text-white border border-red-500/30 hover:border-red-500 bg-red-500/5 hover:bg-red-500 rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
          >
            ❌ Cancel Filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5">
          <label className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 block">
            Search by pet name
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base">
              🔍
            </div>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type to search pets..."
              className="w-full h-14 rounded-2xl bg-white dark:bg-[#0f172a]/80 border border-black/10 dark:border-white/10 pl-12 pr-4 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <label className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 block">
            Pet Species
          </label>
          <select
            name="species"
            value={currentSpecies}
            onChange={(e) => handleSelectChange("species", e.target.value)}
            className="w-full h-14 rounded-2xl bg-white dark:bg-[#0f172a]/80 border border-black/10 dark:border-white/10 px-4 text-sm text-gray-900 dark:text-white outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all"
          >
            <option value="Select species">Select species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Bird">Bird</option>
            <option value="Hamster">Hamster</option>
            <option value="Fish">Fish</option>
            <option value="Turtle">Turtle</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="lg:col-span-2">
          <label className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 block">
            Sort Fee
          </label>
          <select
            name="sort"
            value={currentSort}
            onChange={(e) => handleSelectChange("sort", e.target.value)}
            className="w-full h-14 rounded-2xl bg-white dark:bg-[#0f172a]/80 border border-black/10 dark:border-white/10 px-4 text-sm text-gray-900 dark:text-white outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all"
          >
            <option value="Default">Default</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </div>

        <div className="lg:col-span-2 flex items-end">
          <button
            type="button"
            className="w-full h-14 rounded-2xl bg-linear-to-r from-pink-500 via-violet-500 to-cyan-500 text-white font-medium text-sm hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_30px_rgba(168,85,247,0.25)] cursor-pointer"
          >
            Searching...
          </button>
        </div>
      </div>
    </form>
  );
}
