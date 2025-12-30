export default function IconBar() {
  return (
    <div className="w-16 flex flex-col items-center py-6 space-y-5 border-r border-gray-200">
      <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-bold">
        C
      </div>

      {["layer-group","file","diagram-project","pen","gear"].map((i,idx)=>(
        <div key={idx} className="w-9 h-9 bg-white flex items-center justify-center rounded-full shadow">
          <i className={`fa-solid fa-${i}`}></i>
        </div>
      ))}
    </div>
  );
}
