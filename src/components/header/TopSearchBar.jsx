export default function TopSearchBar() {
  return (
    <div className="flex items-center justify-between mb-4">
      <input className="w-96 px-4 py-2 rounded-xl border bg-white shadow-sm"
        placeholder='Try searching "insights"...' />

      <div className="flex items-center gap-3">
        <button className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center">
          <i className="fa-solid fa-bars"></i>
        </button>
        <button className="w-9 h-9 bg-pink-500 text-white shadow rounded-full flex items-center justify-center">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
