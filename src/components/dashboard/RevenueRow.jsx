export default function RevenueRow() {
  return (
    <div className="mt-4">

      {/* Title */}
      <h2 className="text-gray-300 text-2xl font-semibold mb-4">
        New report
      </h2>

      <div className="flex items-start justify-between">

        {/* LEFT REVENUE SECTION */}
        <div className="max-w-sm">

          <p className="text-black font-semibold mb-1">Revenue</p>

          <div className="flex items-end gap-2">
            <h1 className="text-4xl font-bold">$528,976</h1>
            <span className="text-gray-400 text-lg">.82</span>
          </div>

          {/* Badges */}
          <div className="flex gap-2 mt-2">
            <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">
              ▼ 7.9%
            </span>
            <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
              $27,335.09
            </span>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            vs prev. $501,641.73 · Jun 1 - Aug 31, 2023
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="flex gap-3">

          {[
            ["Top sales","72","Mikasa"],
            ["Best deal","$42,300","Rolf Inc."],
            ["Deals","256","+5"],
            ["Value","528k","+7.9%"],
            ["Win rate","44%","+1.2%"]
          ].map((card,i)=>(

            <div key={i}
              className="bg-white border rounded-2xl px-4 py-3 shadow-sm text-sm w-28 
                         flex flex-col items-center text-center">
              <p className="text-gray-400">{card[0]}</p>
              <b className="block mt-1">{card[1]}</b>
              <span className="text-xs text-gray-400 mt-1">{card[2]}</span>
            </div>

          ))}

        </div>
      </div>
    </div>
  );
}
