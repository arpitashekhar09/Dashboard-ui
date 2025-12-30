export default function AnalyticsPanel() {
  return (
    <div className="grid grid-cols-[2fr_3fr] gap-6 mt-6">

      {/* LEFT COLUMN */}
      <div className="grid grid-rows-[200px_220px] gap-6">

        {/* PLATFORMS */}
        <div className="bg-gray-100 rounded-2xl p-4 h-[200px] flex flex-col">
          <div className="flex justify-between items-center mb-3 text-sm font-medium">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-bars"></i>
              Platforms
            </div>
            <button className="bg-white px-3 py-2 rounded-full shadow-sm text-xs">
              Filters
            </button>
          </div>

          <div className="flex flex-col justify-between flex-1">
           {[
  ["Dribbble",227459,43,"dribbble","text-pink-500"],
  ["Instagram",142823,27,"instagram","text-orange-500"],
  ["Behance",89935,11,"behance","text-blue-500"],
  ["Google",37028,7,"google","text-green-500"],
].map((p,i)=>(
  <div key={i} className="bg-white rounded-2xl px-4 py-3 shadow-sm">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 font-medium text-sm">
        <i className={`fa-brands fa-${p[3]} ${p[4]}`}></i>
        {p[0]}
      </div>
      <span className="font-semibold text-sm">${p[1].toLocaleString()}</span>
    </div>

    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-pink-500 rounded-full"
        style={{ width: `${p[2]}%` }}
      />
    </div>
  </div>
))}

          </div>
        </div>

        {/* PLATFORM VALUE */}
       {/* PLATFORM VALUE */}
<div className="bg-pink-500 text-white rounded-2xl p-5 h-[220px] flex gap-4 overflow-hidden rounded-2xl">

  {/* LEFT STATS */}
  <div className="w-[130px] flex flex-col justify-between">
    <div>
      <p className="text-xs opacity-80">Average monthly</p>

      <p className="text-sm mt-3">Revenue</p>
      <p className="text-xl font-bold">$18,552</p>

      <p className="text-sm mt-3">Leads</p>
      <p className="text-xs opacity-80">373 / 276</p>

      <p className="text-sm mt-3">Win / lose</p>
      <p className="text-xs opacity-80">16% / 51 / 318</p>
    </div>
  </div>

  {/* RIGHT GRAPH */}
  <div className="flex-1 flex flex-col">

    <div className="flex gap-2 mb-3">
      <button className="px-3 py-1 rounded-full text-xs bg-black text-white">Revenue</button>
      <button className="px-3 py-1 rounded-full text-xs bg-white/30">Leads</button>
      <button className="px-3 py-1 rounded-full text-xs bg-white/30">W / L</button>
    </div>

    <div className="flex items-end justify-between flex-1">
      {[60,90,70,85,75].map((h,i)=>(
        <div key={i} className="flex flex-col items-center gap-2">
          <div
            className="w-6 bg-white/40 rounded-xl"
            style={{ height: `${h}px` }}
          ></div>
          <div className="w-5 h-5 bg-white/50 rounded-full"></div>
        </div>
      ))}
    </div>

  </div>
</div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="grid grid-cols-[1.2fr_1.8fr] gap-6">

        {/* REFERRER CATEGORY */}
        <div className="bg-gray-100 rounded-2xl p-4 h-[200px]">
          <div className="flex justify-between items-center mb-3 text-sm font-medium">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-chart-simple"></i>
              Referrer category
            </div>
            <button className="bg-white px-3 py-1 rounded-full shadow-sm text-xs">
              Filters
            </button>
          </div>

          <div className="flex items-end justify-center gap-6 h-36">
            {["dribbble","behance","google","instagram"].map((l,i)=>(
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-10 bg-white rounded-xl shadow ${i===1?'h-32':'h-24'}`}></div>
                <i className={`fa-brands fa-${l} text-gray-400`}></i>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Deals amount by referrer category
          </p>
        </div>

        {/* SALES PERFORMANCE PANEL */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between text-xs text-gray-400 px-4 mb-2">
  <span className="min-w-[180px]">Sales</span>
  <span className="min-w-[120px]">Revenue</span>
  <span className="min-w-[140px]">Leads</span>
  <span className="min-w-[70px]">KPI</span>
  <span className="min-w-[140px]">W / L</span>
</div>

{[
  ["Armin A.","$209,633","41","118","0.84","31%","12","29"],
  ["Mikasa A.","$156,841","54","103","0.89","39%","21","33"],
  ["Eren Y.","$117,115","22","84","0.79","32%","7","15"]
].map((u,i)=>(
  <div key={i}
    className={`flex items-center justify-between px-4 py-3 mb-2 rounded-xl text-sm
    ${i===1?"bg-pink-50 shadow":"bg-gray-50"}`}>

             <div className="flex items-center gap-2 font-medium">
  <img
    src={`/avatars/${u[0].split(" ")[0].toLowerCase()}.jpg`}
    className="w-6 h-6 rounded-full object-cover"
  />
  {u[0]}
</div>

              <span className="font-medium">{u[1]}</span>
              <div className="flex gap-2">
                <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">{u[2]}</span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-full">{u[3]}</span>
              </div>
              <span>{u[4]}</span>
              <div className="flex gap-2">
                <span>{u[5]}</span>
                <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">{u[6]}</span>
                <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-full">{u[7]}</span>
              </div>
            </div>
          ))}

          <div className="flex gap-2 mt-2">
            <span className="bg-white border px-3 py-1 rounded-full text-xs">Top sales 🔥</span>
            <span className="bg-white border px-3 py-1 rounded-full text-xs">Sales streak 🚀</span>
            <span className="bg-white border px-3 py-1 rounded-full text-xs">Top review 👍</span>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 mt-4">
            <div className="flex justify-between mb-3">
              <span className="font-medium text-sm">Work with platforms</span>
              <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">+3 $156,841</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="bg-white rounded-xl p-3">Dribbble <p className="font-bold text-lg">45.3% <span className="text-gray-400">$71,048</span></p></div>
              <div className="bg-white rounded-xl p-3">Instagram <p>28.1% <span className="text-gray-400">$44,072</span></p></div>
              <div className="bg-white rounded-xl p-3">Google <p>14.1% <span className="text-gray-400">$22,114</span></p></div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Sales dynamic</h3>
            <div className="h-28 bg-gray-100 rounded-xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
