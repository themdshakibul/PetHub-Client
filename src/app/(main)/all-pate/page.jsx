import PetCard from "@/Components/App/All-Pate/PetCard";
import { getPetsData } from "@/lib/Data";

const AllPatePage = async () => {
  const pestsData = await getPetsData();

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

          {/* Stats */}
          <div className="bg-black/3 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl px-5 py-4 rounded-2xl min-w-34">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              9+
            </h3>

            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
              Available Pets
            </p>
          </div>
        </div>

        {/* Filter Card */}
        <div className="relative border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 backdrop-blur-2xl rounded-[32px] p-6 md:p-8 shadow-[0_0_60px_rgba(0,255,255,0.06)]">
          {/* Decorative Blur */}
          <div className="absolute -top-20 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
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
                  type="text"
                  placeholder="Search pets..."
                  className="w-full h-14 rounded-2xl bg-white dark:bg-[#0f172a]/80 border border-black/10 dark:border-white/10 pl-12 pr-4 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all"
                />
              </div>
            </div>

            {/* Species */}
            <div className="lg:col-span-3">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 block">
                Pet Species
              </label>

              <select className="w-full h-14 rounded-2xl bg-white dark:bg-[#0f172a]/80 border border-black/10 dark:border-white/10 px-4 text-sm text-gray-900 dark:text-white outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all">
                <option>All Species</option>
                <option>Dogs</option>
                <option>Cats</option>
                <option>Birds</option>
                <option>Rabbits</option>
              </select>
            </div>

            {/* Sort */}
            <div className="lg:col-span-2">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 block">
                Sort Fee
              </label>

              <select className="w-full h-14 rounded-2xl bg-white dark:bg-[#0f172a]/80 border border-black/10 dark:border-white/10 px-4 text-sm text-gray-900 dark:text-white outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all">
                <option>Default</option>
                <option>Low → High</option>
                <option>High → Low</option>
              </select>
            </div>

            <div className="lg:col-span-2 flex items-end">
              <button className="w-full h-14 rounded-2xl bg-linear-to-r from-pink-500 via-violet-500 to-cyan-500 text-white font-medium text-sm hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_30px_rgba(168,85,247,0.25)]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pestsData.map((pets,ind) => (
          <PetCard key={ind} pets={pets} />
        ))}
      </div>
    </section>
  );
};

export default AllPatePage;
