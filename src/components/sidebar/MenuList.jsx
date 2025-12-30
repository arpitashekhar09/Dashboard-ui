export default function MenuList() {
  return (
    <div className="flex-1 px-6 py-5 border-l border-gray-200 text-sm text-gray-700">

      {/* Header */}
      <div className="pb-4 mb-4 border-b border-gray-200 font-semibold">
        Codename.com
      </div>

      {/* Starred / Recent */}
      <div className="space-y-2 mb-6">
        <p className="flex items-center gap-2 font-medium">
          <i className="fa-regular fa-star"></i> Starred
        </p>
        <p className="flex items-center gap-2 text-gray-500">
          <i className="fa-regular fa-clock"></i> Recent
        </p>
      </div>

      {/* SALES LIST */}
      <div className="mb-6">
        <p className="text-xs uppercase text-gray-400 mb-2">Sales list</p>
        <p>Goals</p>
        <p className="font-semibold text-gray-900">Dashboard</p>

        <div className="ml-4 mt-2 border-l pl-4 space-y-1 text-gray-500">
          <p>Codename</p>
          <p className="flex justify-between">
            Cargo2go
            <span className="bg-pink-500 text-white text-xs px-2 rounded-full">2</span>
          </p>
          <p>Cloudz3r</p>
          <p>Idioma</p>
          <p>Syllables</p>
          <p>x-0b</p>
        </div>
      </div>

      {/* REPORTS */}
      <div className="mb-6">
        <p className="text-xs uppercase text-gray-400 mb-2">Reports</p>
        <div className="ml-4 border-l pl-4 space-y-1 text-gray-500">
          <p>Deals by user</p>
          <p>Deal duration</p>
        </div>
      </div>

      {/* MY REPORTS */}
      <div>
        <p className="text-xs uppercase text-gray-400 mb-2">My reports</p>
        <div className="ml-4 border-l pl-4 space-y-1">
          <p>Emails received</p>
          <p>Deal duration</p>
          <p className="text-pink-600 font-semibold">New report</p>
          <p className="flex items-center">
            Analytics
            <span className="bg-pink-500 text-white text-xs px-2 rounded-full ml-2">7</span>
          </p>
        </div>
      </div>

    </div>
  );
}
