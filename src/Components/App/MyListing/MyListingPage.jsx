"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Button } from "@heroui/react";
import Link from "next/link";
import LodingPage from "@/Components/App/Loding/LodingPage";
import MyListingsHeader from "./MyListingsHeader";
import MyListingCard from "./MyListingCard";

const MyListingPage = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const [myPets, setMyPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyListings = async () => {
      if (isPending || !user?.email) return;

      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/mylisting?email=${user.email}`,
      );
      const petData = await res.json();

      if (res.ok) {
        setMyPets(petData);
      } else {
        toast.error("Failed to load your listings.");
      }

      setLoading(false);
    };

    fetchMyListings().catch(() => setLoading(false));
  }, [user?.email, isPending]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50 dark:bg-[#060b13]">
        <p className="text-lg font-semibold text-slate-500 dark:text-slate-400 animate-pulse">
          Checking authentication...
        </p>
      </div>
    );
  }

  const hasNoData = myPets.length === 0;

  return (
    <section className="p-6 max-w-7xl mx-auto min-h-screen text-slate-900 dark:text-white bg-slate-50 dark:bg-[#060b13] transition-colors duration-300">
      {(loading || !hasNoData) && (
        <MyListingsHeader listings={myPets} hideStats={false} />
      )}

      {loading ? (
        <LodingPage />
      ) : hasNoData ? (
        <div className="w-full">
          <MyListingsHeader listings={myPets} hideStats={true} />

          <div className="w-full flex flex-col items-center justify-center border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0b1322] rounded-3xl p-6 sm:p-12 text-center min-h-95 shadow-xl dark:shadow-2xl mt-4 transition-colors">
            <div className="flex flex-col items-center gap-1 opacity-25 mb-6 relative">
              <span className="text-4xl text-[#a855f7] absolute -top-4 -left-6 rotate-[-15deg]">
                🐾
              </span>
              <span className="text-5xl text-[#ec4899] rotate-15">🐾</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
              No listings yet
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed px-2">
              Start by adding a pet that needs a new home.
            </p>

            <Link href="/dashboard/add-pate" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-linear-to-r from-[#ec4899] via-[#a855f7] to-[#06b6d4] text-white font-semibold px-8 py-2.5 rounded-full shadow-lg hover:opacity-90 transition-opacity">
                + Add Your First Pet
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {myPets.map((pet) => (
            <MyListingCard key={pet._id} pets={pet} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyListingPage;
