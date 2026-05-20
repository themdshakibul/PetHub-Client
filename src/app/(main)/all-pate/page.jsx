import PetCard from "@/Components/App/All-Pate/PetCard";
import PetFilterForm from "@/Components/App/All-Pate/PetFilterForm";
import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

async function handleSearch(formData) {
  "use server";
  const name = formData.get("name")?.toString().trim();
  const species = formData.get("species");
  const sort = formData.get("sort");

  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (species && species !== "Select species")
    params.append("species", species);
  if (sort && sort !== "Default") params.append("sort", sort);

  params.append("page", "1");

  revalidatePath("/all-pate");
  redirect(`/all-pate?${params.toString()}`);
}

const AllPatePage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;

  const backendParams = new URLSearchParams();
  if (resolvedParams?.name) backendParams.append("name", resolvedParams.name);
  if (resolvedParams?.species)
    backendParams.append("species", resolvedParams.species);
  if (resolvedParams?.sort) backendParams.append("sort", resolvedParams.sort);

  let petsData = [];

  try {
    const res = await fetch(
      `http://localhost:9000/all-pets?${backendParams.toString()}`,
      {
        next: { revalidate: 0 },
      },
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    petsData = await res.json();
  } catch (error) {
    console.error("Error fetching pets:", error);
    petsData = [];
  }

  const currentPage = Number(resolvedParams?.page) || 1;
  const itemsPerPage = 9;

  const validPetsData = Array.isArray(petsData) ? petsData : [];
  const totalPets = validPetsData.length;

  const totalPages = Math.ceil(totalPets / itemsPerPage);
  const displayTotalPages = totalPages > 0 ? totalPages : 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPets = validPetsData.slice(startIndex, endIndex);

  const getPageLink = (pageNumber) => {
    const params = new URLSearchParams();

    if (resolvedParams?.name) params.set("name", resolvedParams.name);
    if (resolvedParams?.species) params.set("species", resolvedParams.species);
    if (resolvedParams?.sort) params.set("sort", resolvedParams.sort);
    params.set("page", pageNumber.toString());

    return `/all-pate?${params.toString()}`;
  };

  return (
    <section className="relative py-10 overflow-hidden bg-white dark:bg-black transition-all duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-2">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-500 dark:text-pink-400 text-xs font-medium backdrop-blur-md">
              🐾 Available Pets
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight text-gray-900 dark:text-white">
              Find Your{" "}
              <span className="bg-linear-to-r from-pink-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Perfect Pet
              </span>
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              Discover adorable pets waiting for a loving and caring home.
            </p>
          </div>

          <div className="bg-black/3 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl px-5 py-4 rounded-2xl min-w-34">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalPets}+
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
              Available Pets
            </p>
          </div>
        </div>

        <PetFilterForm handleSearch={handleSearch} />
      </div>

      {/* Pet Cards Grid */}
      <div className="container mx-auto px-2 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPets.length > 0 ? (
          currentPets.map((pet, ind) => (
            <PetCard key={pet._id || ind} pets={pet} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-gray-50 dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/5">
            <div className="text-5xl mb-3">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              No Pets Found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mx-auto">
              We couldn&apos;t find any pets matching your criteria. Try
              adjusting your search or filters.
            </p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {displayTotalPages > 1 && (
        <div className="container mx-auto px-2 flex justify-center items-center gap-4 mt-6">
          <Link
            href={getPageLink(currentPage - 1)}
            className={`px-5 py-2.5 rounded-xl border border-black/10 dark:border-white/10 text-sm font-medium transition-all ${
              currentPage <= 1
                ? "opacity-40 pointer-events-none bg-gray-100 dark:bg-zinc-900 text-gray-400"
                : "bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 hover:border-pink-500"
            }`}
          >
            ← Previous
          </Link>

          <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-2xl border border-black/5 dark:border-white/5 backdrop-blur-md">
            {Array.from({ length: displayTotalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <Link
                  key={pageNumber}
                  href={getPageLink(pageNumber)}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                    currentPage === pageNumber
                      ? "bg-linear-to-r from-pink-500 to-violet-500 text-white shadow-md scale-105"
                      : "text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  {pageNumber}
                </Link>
              );
            })}
          </div>

          <Link
            href={getPageLink(currentPage + 1)}
            className={`px-5 py-2.5 rounded-xl border border-black/10 dark:border-white/10 text-sm font-medium transition-all ${
              currentPage >= displayTotalPages
                ? "opacity-40 pointer-events-none bg-gray-100 dark:bg-zinc-900 text-gray-400"
                : "bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 hover:border-cyan-500"
            }`}
          >
            Next →
          </Link>
        </div>
      )}
    </section>
  );
};

export default AllPatePage;
