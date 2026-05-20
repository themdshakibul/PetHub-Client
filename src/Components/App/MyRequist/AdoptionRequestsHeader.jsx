"use client";

const AdoptionRequestsHeader = ({ adoptUser }) => {
  const total = adoptUser?.length || 0;
  const pending = adoptUser?.filter((r) => r.status === "pending")?.length || 0;
  const approved =
    adoptUser?.filter((r) => r.status === "approved")?.length || 0;
  const rejected =
    adoptUser?.filter((r) => r.status === "rejected")?.length || 0;

  const stats = [
    {
      label: "Total",
      value: total,
      dot: "bg-slate-400 dark:bg-slate-500",
      labelColor: "text-slate-500 dark:text-slate-400",
      valueColor: "text-slate-800 dark:text-slate-100",
      card: "bg-slate-50 border-slate-200 dark:bg-[#0d1527] dark:border-white/5",
    },
    {
      label: "Pending",
      value: pending,
      dot: "bg-amber-400 dark:bg-yellow-400",
      labelColor: "text-amber-900 dark:text-slate-400",
      valueColor: "text-amber-500 dark:text-yellow-400",
      card: "bg-slate-50 border-slate-200 dark:bg-[#0d1527] dark:border-white/5",
    },
    {
      label: "Approved",
      value: approved,
      dot: "bg-emerald-400 dark:bg-green-400",
      labelColor: "text-emerald-900 dark:text-slate-400",
      valueColor: "text-emerald-500 dark:text-green-400",
      card: "bg-slate-50 border-slate-200 dark:bg-[#0d1527] dark:border-white/5",
    },
    {
      label: "Rejected",
      value: rejected,
      dot: "bg-red-400 dark:bg-red-400",
      labelColor: "text-red-900 dark:text-slate-400",
      valueColor: "text-red-500 dark:text-red-400",
      card: "bg-slate-50 border-slate-200 dark:bg-[#0d1527] dark:border-white/5",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map(({ label, value, dot, labelColor, valueColor, card }) => (
        <div
          key={label}
          className={`${card} border rounded-2xl p-6 flex flex-col items-center justify-center gap-1.5 shadow-md`}
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
            <span
              className={`${labelColor} text-xs font-medium uppercase tracking-wider`}
            >
              {label}
            </span>
          </div>
          <span className={`text-3xl font-bold ${valueColor}`}>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default AdoptionRequestsHeader;
