// "use client";

// import ThemeSwitch from "@/Components/Shared/ThemeSwitch";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { redirect, usePathname } from "next/navigation";
// import toast from "react-hot-toast";

// const DashboardLayout = ({ children }) => {
//   const { data } = authClient.useSession();
//   const user = data?.user;

//   const pathname = usePathname();

//   const hendelLogout = async () => {
//     await authClient.signOut();
//     toast.success(`${user?.name} Log Out Successful`);
//     redirect("/");
//   };

//   return (
//     <section className="flex min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-300">
//       <aside className="w-64 border-r border-slate-200 dark:border-white/5 bg-white dark:bg-[#0f172a] flex flex-col sticky top-0 h-screen">
//         <div className="p-6 flex items-center gap-2">
//           <Image
//             width={40}
//             height={40}
//             alt="Nav Logo"
//             src="/assets/images/navlogo.jpg"
//             className="w-10 h-10 object-cover rounded-full border-2 border-rose-500"
//           />
//           <span className="text-xl font-bold tracking-tight bg-linear-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
//             PetHub
//           </span>
//         </div>

//         <nav className="flex-1 px-4 space-y-2">
//           <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4 ml-2">
//             Menu
//           </p>

//           <Link href="/dashboard/my-requiest">
//             <div
//               className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${pathname === "/dashboard/my-requiest" ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"}`}
//             >
//               📄 My Requests
//             </div>
//           </Link>

//           <Link href="/dashboard/add-pate">
//             <div
//               className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${pathname === "/dashboard/add-pate" ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"}`}
//             >
//               ➕ Add Pet
//             </div>
//           </Link>

//           <Link href="/dashboard/my-listings">
//             <div
//               className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${pathname === "/dashboard/my-listings" ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"}`}
//             >
//               ♡ My Listings
//             </div>
//           </Link>
//         </nav>

//         <div className="p-4 border-t border-slate-200 dark:border-white/5 mt-auto">
//           <button
//             onClick={hendelLogout}
//             className="flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-500/10 w-full rounded-xl transition-all"
//           >
//             ↩︎ Logout
//           </button>
//         </div>
//       </aside>

//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="h-20 border-b border-slate-200 dark:border-white/5 flex items-center justify-end px-8 gap-4 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-10">
//           <ThemeSwitch />
//           <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-white/10">
//             <div className="text-right">
//               <p className="text-md font-bold">{user?.name}</p>
//               <p className="text-sm text-slate-500">{user?.email}</p>
//             </div>
//             <Avatar size="md">
//               <Avatar.Image alt="Medium Avatar" src={user?.image} />
//               <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
//             </Avatar>
//           </div>
//         </header>

//         {/* Content */}
//         <main className="flex-1 p-8 overflow-y-auto">{children}</main>
//       </div>
//     </section>
//   );
// };

// export default DashboardLayout;

"use client";

import React, { useState } from "react";
import ThemeSwitch from "@/Components/Shared/ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { Menu, X, FileText, PlusCircle, Heart, LogOut } from "lucide-react";

const DashboardLayout = ({ children }) => {
  const { data } = authClient.useSession();
  const user = data?.user;
  const pathname = usePathname();
  const router = useRouter();

  // 📱 মোবাইল সাইডবারের জন্য স্টেট
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const hendelLogout = async () => {
    await authClient.signOut();
    toast.success(`${user?.name || "User"} Log Out Successful`);
    router.push("/");
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <section className="flex min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      {/* 🌫️ মোবাইল ব্যাকড্রপ ওভারলে (সাইডবার ওপেন থাকলে স্ক্রিন লক করবে) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* 🗂️ সাইডবার (মোবাইলে স্লাইডার, ডেস্কটপে ফিক্সড) */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 border-r border-slate-200 dark:border-white/5 bg-white dark:bg-[#0f172a] flex flex-col z-50 transition-transform duration-300 lg:transform-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* লোগো এবং মোবাইল ক্লোজ বাটন */}
        <div className="p-6 flex items-center justify-between gap-2 border-b border-slate-100 dark:border-white/5 lg:border-none">
          <div className="flex items-center gap-2">
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

          {/* মোবাইল ক্লোজ বাটন (X) */}
          <button
            onClick={closeSidebar}
            className="p-1.5 rounded-lg lg:hidden hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* নেভিগেশন মেনু */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4 ml-2">
            Menu
          </p>

          <Link href="/dashboard/my-requiest" onClick={closeSidebar}>
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                pathname === "/dashboard/my-requiest"
                  ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <FileText className="w-5 h-5" /> My Requests
            </div>
          </Link>

          <Link href="/dashboard/add-pate" onClick={closeSidebar}>
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                pathname === "/dashboard/add-pate"
                  ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <PlusCircle className="w-5 h-5" /> Add Pet
            </div>
          </Link>

          <Link href="/dashboard/my-listings" onClick={closeSidebar}>
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                pathname === "/dashboard/my-listings"
                  ? "bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <Heart className="w-5 h-5" /> My Listings
            </div>
          </Link>
        </nav>

        {/* লগআউট সেকশন */}
        <div className="p-4 border-t border-slate-200 dark:border-white/5 mt-auto">
          <button
            onClick={hendelLogout}
            className="flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-500/10 w-full rounded-xl transition-all font-medium"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* 🖥️ মেইন কন্টেন্ট এরিয়া */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 🔔 রেসপন্সিভ টপ হেডার */}
        <header className="h-20 border-b border-slate-200 dark:border-white/5 flex items-center justify-between lg:justify-end px-4 sm:px-8 gap-4 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-30">
          {/* মোবাইল হ্যামবার্গার মেনু বাটন */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-xl lg:hidden border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
          >
            <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </button>

          {/* থিম এবং ইউজার প্রোফাইল */}
          <div className="flex items-center gap-4">
            <ThemeSwitch />
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold max-w-32 truncate">
                  {user?.name || "Guest User"}
                </p>
                <p className="text-xs text-slate-500 max-w-40 truncate">
                  {user?.email || ""}
                </p>
              </div>

              <Avatar size="md" radius="full" src={user?.image || undefined}>
                {!user?.image && (
                  <span className="font-semibold">
                    {user?.name?.charAt(0) || "U"}
                  </span>
                )}
              </Avatar>
            </div>
          </div>
        </header>

        {/* 📄 ডাইনামিক পেজ কন্টেন্ট রেন্ডারার */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-full">
          {children}
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
