"use client";

import ThemeSwitch from "@/Components/Shared/ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import toast from "react-hot-toast";

const DashboardLayout = ({ children }) => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const pathname = usePathname();

  const hendelLogout = async () => {
    await authClient.signOut();
    toast.success(`${user?.name} Log Out Successful`);
    redirect("/");
  };

  return (
    <section className="flex min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <aside className="w-64 border-r border-slate-200 dark:border-white/5 bg-white dark:bg-[#0f172a] flex flex-col sticky top-0 h-screen">
        <div className="p-6 flex items-center gap-2">
          <Image
            width={40}
            height={40}
            alt="Nav Logo"
            src="/assets/images/navlogo.jpg"
            className="w-10 h-10 object-cover rounded-full border-2 border-rose-500"
          />
          <span className="text-xl font-bold tracking-tight bg-linear-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            PetHub
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4 ml-2">
            Menu
          </p>

          <Link href="/dashboard/my-requiest">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${pathname === "/dashboard/my-requiest" ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"}`}
            >
              📄 My Requests
            </div>
          </Link>

          <Link href="/dashboard/add-pate">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${pathname === "/dashboard/add-pate" ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"}`}
            >
              ➕ Add Pet
            </div>
          </Link>

          <Link href="/dashboard/my-listings">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${pathname === "/dashboard/my-listings" ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"}`}
            >
              ♡ My Listings
            </div>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-white/5 mt-auto">
          <button
            onClick={hendelLogout}
            className="flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-500/10 w-full rounded-xl transition-all"
          >
            ↩︎ Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 border-b border-slate-200 dark:border-white/5 flex items-center justify-end px-8 gap-4 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-10">
          <ThemeSwitch />
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-white/10">
            <div className="text-right">
              <p className="text-md font-bold">{user?.name}</p>
              <p className="text-sm text-slate-500">{user?.email}</p>
            </div>
            <Avatar size="md">
              <Avatar.Image alt="Medium Avatar" src={user?.image} />
              <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </section>
  );
};

export default DashboardLayout;
