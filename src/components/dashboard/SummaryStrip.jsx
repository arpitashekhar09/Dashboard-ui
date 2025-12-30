export default function SummaryStrip() {

  const rows = [
    { amount: "$209,633", percent: "39.63%", img: "armin.jpg" },
    { amount: "$156,841", percent: "29.65%", img: "mikasa.jpg" },
    { amount: "$117,115", percent: "22.14%", img: "eren.jpg" },
    { amount: "$45,386", percent: "8.58%", img: "armin.jpg" },
  ];

  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl mt-6">

      {rows.map((item,i)=>(
        <div
          key={i}
          className="flex items-center gap-3 bg-white px-4 py-1 rounded-full shadow-sm text-sm"
        >
          <img
            src={`/avatars/${item.img}`}
            className="w-6 h-6 rounded-full object-cover"
            alt=""
          />

          <span className="font-medium">{item.amount}</span>
          <span className="text-gray-400">{item.percent}</span>
        </div>
      ))}

      <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
        Details
      </button>

    </div>
  );
}
