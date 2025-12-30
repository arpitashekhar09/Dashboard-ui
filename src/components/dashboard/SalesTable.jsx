export default function SalesTable() {
  const rows = [
    ["Armin A.", "$209,633", 41, 118, "0.84", "31%", 12, 29],
    ["Mikasa A.", "$156,841", 54, 103, "0.89", "39%", 21, 33],
    ["Eren Y.", "$117,115", 22, 84, "0.79", "32%", 7, 15],
  ];

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex justify-between text-xs text-gray-400 px-3 mb-2">
        <span className="min-w-[170px]">Sales</span>
        <span className="min-w-[120px]">Revenue</span>
        <span className="min-w-[130px]">Leads</span>
        <span className="min-w-[60px]">KPI</span>
        <span className="min-w-[120px]">W / L</span>
      </div>

      {/* Rows */}
      {rows.map((r, i) => (
        <div
          key={i}
          className={`flex items-center justify-between px-4 py-3 rounded-xl mb-2 text-sm ${
            i === 1 ? "bg-pink-50 shadow" : "bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-3 min-w-[170px] font-medium">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            {r[0]}
          </div>

          <div className="min-w-[120px] font-medium">{r[1]}</div>

          <div className="flex gap-2 min-w-[130px]">
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">{r[2]}</span>
            <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-full">{r[3]}</span>
          </div>

          <div className="min-w-[60px]">{r[4]}</div>

          <div className="flex gap-2 min-w-[120px]">
            <span>{r[5]}</span>
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">{r[6]}</span>
            <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-full">{r[7]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
