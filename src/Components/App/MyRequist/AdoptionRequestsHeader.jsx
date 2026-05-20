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
      color: "text-white",
      bg: "bg-[#0d1527]",
      border: "border-white/5",
      dot: "bg-slate-500",
    },
    {
      label: "Pending",
      value: pending,
      color: "text-yellow-400",
      bg: "bg-[#0d1527]",
      border: "border-white/5",
      dot: "bg-yellow-400",
    },
    {
      label: "Approved",
      value: approved,
      color: "text-green-400",
      bg: "bg-[#0d1527]",
      border: "border-white/5",
      dot: "bg-green-400",
    },
    {
      label: "Rejected",
      value: rejected,
      color: "text-red-400",
      bg: "bg-[#0d1527]",
      border: "border-white/5",
      dot: "bg-red-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map(({ label, value, color, bg, border, dot }) => (
        <div
          key={label}
          className={`${bg} ${border} border rounded-2xl p-6 flex flex-col items-center justify-center gap-1.5 shadow-md`}
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              {label}
            </span>
          </div>
          <span className={`text-3xl font-bold ${color}`}>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default AdoptionRequestsHeader;
