import { Spinner } from "@heroui/react";

const LoadingPage = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-full overflow-hidden bg-slate-50 text-black transition-colors duration-300 dark:bg-[#0B1120] dark:text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-112.5 w-112.5 rounded-full bg-linear-to-tr from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-[100px] animate-pulse duration-[6s]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="relative flex items-center justify-center h-40 w-40 mb-10">
          <div className="absolute inset-2 rounded-full bg-linear-to-r from-pink-500 to-cyan-500 opacity-25 blur-xl animate-ping duration-[3s]"></div>
          <div className="absolute inset-6 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 opacity-20 blur-md animate-pulse duration-[2s]"></div>

          <Spinner
            size="lg"
            color="secondary"
            classNames={{
              wrapper: "h-24 w-24",
              circle1: "border-b-pink-500 border-[5px]",
              circle2: "border-b-cyan-500 border-[5px]",
            }}
          />
        </div>

        <h2 className="text-4xl md:text-5xl font-black tracking-widest bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent uppercase animate-pulse duration-[2.5s]">
          Loading
        </h2>

        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 font-semibold tracking-wide max-w-sm">
          Please wait, synchronizing your dashboard...
        </p>

        <div className="relative mt-8 h-1.25 w-48 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden shadow-xs">
          <div className="absolute h-full w-1/2 rounded-full bg-linear-to-r from-pink-500 to-cyan-500 animate-infinite-slide"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
