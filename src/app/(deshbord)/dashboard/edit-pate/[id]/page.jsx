"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { PawPrint } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EditPate({ params }) {
  const unwrappedParams = React.use(params);
  const petId = unwrappedParams?.id;

  const { data } = authClient.useSession();
  const user = data?.user;
  const router = useRouter();

  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetData = async () => {
      if (!petId) return;

      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/pet/${petId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
        },
      );
      const petData = await res.json();

      if (res.ok && petData) {
        setPet(petData);
      } else {
        toast.error("Failed to load pet details.");
      }

      setLoading(false);
    };

    fetchPetData();
  }, [petId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedPetData = Object.fromEntries(formData.entries());

    if (updatedPetData.age) updatedPetData.age = Number(updatedPetData.age);
    if (updatedPetData.adoptionFee)
      updatedPetData.adoptionFee = Number(updatedPetData.adoptionFee);

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/mylisting/${petId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(updatedPetData),
      },
    );

    if (res.ok) {
      toast.success("Updated Successfully!");
      router.push("/dashboard/my-listings");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060b13]">
        <p className="text-lg font-semibold text-slate-400 animate-pulse">
          🐾 Loading pet details...
        </p>
      </div>
    );
  }

  const currentPet = pet || {};

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3 mb-1">
            <PawPrint className="w-9 h-9 text-pink-500" />
            <h1 className="text-3xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Update {currentPet.petName || "pet"}
            </h1>
          </div>
          <p className="text-slate-600 dark:text-gray-300 text-sm">
            Make changes to your pets listing details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Pet Information */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-pink-500">🐾</span> Pet Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
                  Pet Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="petName"
                  defaultValue={currentPet.petName || ""}
                  placeholder="e.g. Buddy, Luna, Max"
                  className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-2xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-pink-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
                  Species <span className="text-red-500">*</span>
                </label>
                <select
                  name="species"
                  defaultValue={currentPet.species || ""}
                  className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-2xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-pink-500"
                  required
                >
                  <option value="">Select species</option>
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

              <div>
                <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
                  Breed
                </label>
                <input
                  type="text"
                  name="breed"
                  defaultValue={currentPet.breed || ""}
                  placeholder="e.g. Labrador, Persian, Siamese"
                  className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-2xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400"
                />
              </div>

              <div>
                <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
                  Age (years)
                </label>
                <input
                  type="number"
                  name="age"
                  defaultValue={currentPet.age || ""}
                  placeholder="2"
                  min="0"
                  max="30"
                  className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-2xl px-4 py-3 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
                  Gender
                </label>
                <select
                  name="gender"
                  defaultValue={currentPet.gender || ""}
                  className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-2xl px-4 py-3 text-slate-900 dark:text-white"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
                  Vaccination Status
                </label>
                <select
                  name="vaccinationStatus"
                  defaultValue={currentPet.vaccinationStatus || ""}
                  className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-2xl px-4 py-3 text-slate-900 dark:text-white"
                >
                  <option value="">Select status</option>
                  <option value="Fully Vaccinated">Fully Vaccinated</option>
                  <option value="Partially Vaccinated">
                    Partially Vaccinated
                  </option>
                  <option value="Not Vaccinated">Not Vaccinated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Other Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
                Pet Image URL
              </label>
              <input
                type="url"
                name="petImageUrl"
                defaultValue={
                  currentPet.petImageUrl || currentPet.imageUrl || ""
                }
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-2xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400"
              />
            </div>

            <div>
              <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
                Health Status <span className="text-red-500">*</span>
              </label>
              <select
                name="healthStatus"
                defaultValue={currentPet.healthStatus || ""}
                className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-2xl px-4 py-3 text-slate-900 dark:text-white"
                required
              >
                <option value="">Select health status</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Needs Attention">Needs Medical Attention</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                defaultValue={currentPet.location || ""}
                placeholder="e.g. Dhaka, Bangladesh"
                className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-2xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400"
                required
              />
            </div>

            <div>
              <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
                Adoption Fee ($)
              </label>
              <input
                type="number"
                name="adoptionFee"
                defaultValue={currentPet.adoptionFee || ""}
                placeholder="0 for free"
                className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-2xl px-4 py-3 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-700 dark:text-gray-300 mb-1.5 block font-medium">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              defaultValue={currentPet.description || ""}
              rows={4}
              placeholder="Describe personality, habits, favorite food..."
              className="w-full bg-white dark:bg-[#1f2937] border border-slate-300 dark:border-white/20 rounded-3xl px-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 resize-y min-h-27.5"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              className="flex-1 py-3.5 rounded-2xl border border-slate-300 dark:border-white/30 text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
              onClick={() => router.back()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 rounded-2xl bg-linear-to-r from-pink-500 to-cyan-500 text-white font-semibold hover:scale-105 active:scale-95 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
