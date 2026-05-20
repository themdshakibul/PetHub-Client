import AdoptionRequestsHeader from "@/Components/App/MyRequist/AdoptionRequestsHeader";
import AdoptionStats from "@/Components/App/MyRequist/AdoptionStats";
import { auth } from "@/lib/auth";
import { getAdoptUserPet } from "@/lib/Data";
import { headers } from "next/headers";
import { Button } from "@heroui/react";
import Link from "next/link";

const MyRequistPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const adoptUser = await getAdoptUserPet(user, token);

  const hasNoData = !adoptUser || adoptUser.length === 0;

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <span className="inline-flex items-center gap-1.5 bg-[#e11d48]/10 text-[#f43f5e] text-xs font-semibold px-3 py-1 rounded-full border border-[#e11d48]/20 mb-3">
            📋 My Requests
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
            My{" "}
            <span className="bg-linear-to-r from-[#ec4899] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
              Adoption Requests
            </span>
          </h1>
          <p className="text-slate-400 text-sm">
            Track the status of all your adoption requests here.
          </p>
        </div>

        {hasNoData ? (
          <div className="w-full flex flex-col items-center justify-center border border-white/5  rounded-3xl p-6 sm:p-12 text-center min-h-95 shadow-2xl mt-4">
            <div className="flex flex-col items-center gap-1 opacity-25 mb-6 relative">
              <span className="text-4xl text-[#a855f7] absolute -top-4 -left-6 rotate-[-15deg]">
                🐾
              </span>
              <span className="text-5xl text-[#ec4899] rotate-15">🐾</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              No adoption requests yet
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed px-2">
              You havent made any adoption requests yet. Start browsing pets
              that need a loving home!
            </p>

            <Link href="/all-pate" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-linear-to-r from-[#ec4899] via-[#a855f7] to-[#06b6d4] text-white font-semibold px-8 py-2.5 rounded-full shadow-lg hover:opacity-90 transition-opacity">
                + Find a Pet to Adopt
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <AdoptionRequestsHeader adoptUser={adoptUser} />
            <AdoptionStats adoptUser={adoptUser} />
          </>
        )}
      </div>
    </div>
  );
};

export default MyRequistPage;
