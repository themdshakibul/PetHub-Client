"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveNavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
          pathname === href
            ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg"
            : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default ActiveNavLink;
