export default function WhiteHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <i className="fa-solid fa-plus text-sm"></i>
        </div>
        {["Armin A.","Eren Y.","Mikasa A."].map((n,i)=>(
          <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{n}</span>
        ))}
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs">C</div>
      </div>

      <div className="flex gap-3">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"><i className="fa-solid fa-filter"></i></div>
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"><i className="fa-solid fa-download"></i></div>
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"><i className="fa-solid fa-share-nodes"></i></div>
      </div>
    </div>
  );
}
