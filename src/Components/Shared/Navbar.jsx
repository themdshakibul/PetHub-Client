"use client";

import UserAccount from "./UserAccount";
import NavLink from "./NavLink";
import Image from "next/image";
import { Button } from "@heroui/react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data } = authClient.useSession();
  const user = data?.user;

  return (
    <section className="sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 border-black/5 bg-white/70 shadow-xs dark:border-white/10 dark:bg-[#0a0f1e]/80 dark:shadow-2xl">
      <nav className="container mx-auto">
        <header className="flex px-4 h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="p-[1.5px] rounded-full bg-linear-to-tr from-[#f472b6] via-[#a855f7] to-[#22d3ee] shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <Image
                width={40}
                height={40}
                alt="Nav Logo"
                src="/assets/images/navlogo.jpg"
                className="w-10 h-10 object-cover rounded-full border-2 border-white dark:border-[#0a0f1e]"
              />
            </div>
            <span className="text-2xl font-black tracking-tight">
              <span className="text-slate-900 dark:text-white">Pet</span>
              <span className="bg-linear-to-r from-[#f472b6] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
                Hub
              </span>
            </span>
          </div>

          <ul className="hidden items-center gap-8 md:flex font-bold">
            <li>
              <NavLink
                href="/"
                className="text-slate-600 hover:text-[#f472b6] dark:text-slate-400 dark:hover:text-[#f472b6]"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/all-pate"
                className="text-slate-600 hover:text-[#22d3ee] dark:text-slate-400 dark:hover:text-[#22d3ee]"
              >
                All Pets
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            {/* Desktop Actions Only */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-3">
                <ThemeSwitch />
                <div className="h-4 w-px bg-black/10 dark:bg-white/20" />
                {user ? (
                  <UserAccount user={user} />
                ) : (
                  <div className="flex items-center gap-3">
                    <Link href={"/signin"}>
                      <Button
                        variant="light"
                        className="text-[#f472b6] font-bold"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href={"/signup"}>
                      <Button className="bg-linear-to-r from-[#f472b6] via-[#a855f7] to-[#22d3ee] text-white font-black px-6 shadow-lg">
                        SIGNUP
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <button
              className="md:hidden p-2 rounded-lg bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6 text-slate-800 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Drawer (User Account & Theme Switch inside here) */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-3xl dark:border-white/10 dark:bg-[#0a0f1e]/95 animate-in slide-in-from-top duration-300">
            <ul className="flex flex-col gap-4 p-6 font-bold">
              <li>
                <NavLink
                  href="/"
                  className="block text-lg py-2 text-slate-600 dark:text-slate-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/all-pate"
                  className="block text-lg py-2 text-slate-600 dark:text-slate-300"
                >
                  All Pets
                </NavLink>
              </li>

              <div className="mt-4 pt-6 border-t border-black/5 dark:border-white/10 space-y-5">
                <div className="flex items-center justify-between bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                  <span className="text-sm text-gray-500">
                    Dashboard & Account
                  </span>
                  <div className="flex items-center gap-4">
                    <ThemeSwitch />
                    <UserAccount />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <Button className="w-full bg-black/5 dark:bg-white/5 text-[#f472b6] border border-[#f472b6]/20 font-bold">
                    Login
                  </Button>
                  <Button className="w-full bg-linear-to-r from-[#f472b6] via-[#a855f7] to-[#22d3ee] text-white font-black">
                    Signup
                  </Button>
                </div>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
