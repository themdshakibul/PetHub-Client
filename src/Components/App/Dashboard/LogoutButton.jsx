"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const LogoutButton = ({ userName }) => {
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success(`${userName || "User"} Log Out Successful`);
    redirect("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-500/10 w-full rounded-xl transition-all"
    >
      ↩︎ Logout
    </button>
  );
};

export default LogoutButton;
