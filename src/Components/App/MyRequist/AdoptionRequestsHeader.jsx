"use client";

import { FiFileText } from "react-icons/fi";

const AdoptionRequestsHeader = ({ requests = [] }) => {
  const total = requests?.length || 0;
  const pending = requests?.filter((r) => r.status === "pending")?.length || 0;
  const approved =
    requests?.filter((r) => r.status === "approved")?.length || 0;
  const rejected =
    requests?.filter((r) => r.status === "rejected")?.length || 0;

  const stats = [
    {
      label: "Total",
      value: total,
      color: "text-slate-700 dark:text-white",
      bg: "bg-white dark:bg-[#1e2640]",
      border: "border-slate-200 dark:border-white/5",
      dot: "bg-slate-400 dark:bg-slate-500",
    },
    {
      label: "Pending",
      value: pending,
      color: "text-yellow-500 dark:text-yellow-400",
      bg: "bg-yellow-50 dark:bg-[#1e2640]",
      border: "border-yellow-200 dark:border-yellow-500/10",
      dot: "bg-yellow-400",
    },
    {
      label: "Approved",
      value: approved,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-50 dark:bg-[#1e2640]",
      border: "border-green-200 dark:border-green-500/10",
      dot: "bg-green-400",
    },
    {
      label: "Rejected",
      value: rejected,
      color: "text-red-500 dark:text-red-400",
      bg: "bg-red-50 dark:bg-[#1e2640]",
      border: "border-red-200 dark:border-red-500/10",
      dot: "bg-red-400",
    },
  ];

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 rounded-2xl">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-1.5 bg-rose-500/10 text-rose-500 dark:text-rose-400 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full border border-rose-500/20 mb-3">
          <FiFileText size={10} />
          My Requests
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-1.5">
          My{" "}
          <span className="bg-linear-to-r from-rose-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Adoption Requests
          </span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
          Track the status of all your adoption requests here.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map(({ label, value, color, bg, border, dot }) => (
          <div
            key={label}
            className={`${bg} ${border} border rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-1.5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5`}
          >
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
              <span className="text-slate-400 dark:text-slate-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                {label}
              </span>
            </div>
            <span className={`text-2xl sm:text-3xl font-bold ${color}`}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptionRequestsHeader;
