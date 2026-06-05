"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#060b13] p-6 text-center">
      <div className="text-9xl mb-6 animate-bounce">🐾</div>

      <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
        404
      </h1>

      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
        Oops! Page not found
      </h2>

      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
        We couldn&apos;t find the page you&apos;re looking for. It seems this
        pet has wandered off to a different page!
      </p>

      <button
        onClick={() => router.push("/")}
        className="bg-linear-to-r from-[#ec4899] via-[#a855f7] to-[#06b6d4] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition-all"
      >
        Back to Home
      </button>
    </div>
  );
}