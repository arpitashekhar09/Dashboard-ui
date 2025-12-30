export default function PlatformValue() {

  const bars = [
    { value: 6901 },
    { value: 11035 },
    { value: 9288 },
    { value: 7800 },
    { value: 8300 },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 h-[220px] flex gap-4">

      {/* LEFT PINK PANEL */}
      <div className="bg-pink-500 text-white rounded-2xl w-[160px] p-4 flex flex-col justify-between">
        <div>
          <p className="text-xs opacity-80">Average monthly</p>
          <p className="text-sm mt-2">Revenue</p>
          <p className="text-xl font-bold">$18,552</p>

          <p className="text-sm mt-3">Leads</p>
          <p className="text-xs opacity-80">373 / 276</p>

          <p className="text-sm mt-3">Win / lose</p>
          <p className="text-xs opacity-80">16% / 51 / 318</p>
        </div>
      </div>

      {/* RIGHT CHART PANEL */}
      <div className="flex-1 flex flex-col">

        {/* TOGGLES */}
        <div className="flex gap-2 mb-2">
          {["Revenue", "Leads", "W/L"].map((t,i)=>(
            <button
              key={i}
              className={`px-3 py-1 rounded-full text-xs ${
                i===0 ? "bg-black text-white" : "bg-gray-100 text-gray-500"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* BARS */}
        <div className="flex items-end justify-between flex-1 px-2">
          {bars.map((b,i)=>(
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="w-8 bg-gray-200 rounded-xl"
                style={{ height: `${b.value / 200}px` }}
              />
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
