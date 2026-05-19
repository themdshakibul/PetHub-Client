"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import MyListingCard from "@/Components/App/MyListing/MyListingCard";
import MyListingsHeader from "@/Components/App/MyListing/MyListingsHeader";
import toast from "react-hot-toast";

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
        `http://localhost:9000/mylisting?email=${user.email}`,
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
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-slate-500 animate-pulse">
          Checking authentication...
        </p>
      </div>
    );
  }

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <MyListingsHeader listings={myPets} />

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <p className="text-lg font-semibold text-slate-500 animate-pulse">
            🐾 Loading your pet listings...
          </p>
        </div>
      ) : myPets.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-56 border-2 border-dashed border-slate-300 dark:border-white/10 rounded-3xl mt-6 p-4">
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
            🐾 No listings found!
          </p>
          <p className="text-sm text-slate-400 mt-1">
            You havent added any pets for adoption yet.
          </p>
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
