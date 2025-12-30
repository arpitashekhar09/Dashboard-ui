export default function ReferrerChart() {

  const data = [
    { icon:"dribbble", height:90 },
    { icon:"behance", height:120 },
    { icon:"google", height:75 },
    { icon:"instagram", height:60 }
  ];

  return (
    <div className="bg-gray-100 rounded-2xl p-4 h-[200px] flex flex-col">
      <div className="flex justify-between mb-3 text-sm font-medium">
        <span>Referrer category</span>
        <span className="text-xs bg-white px-3 py-1 rounded-full shadow">Filters</span>
      </div>

      <div className="flex items-end justify-between flex-1 px-6">
        {data.map((d,i)=>(
          <div key={i} className="flex flex-col items-center gap-2">
            <div
              className="w-12 bg-white rounded-2xl shadow"
              style={{ height: `${d.height}px` }}
            />
            <i className={`fa-brands fa-${d.icon} text-gray-400 text-lg`}></i>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-2 text-center">
        Deals amount by referrer category
      </p>
    </div>
  );
}
